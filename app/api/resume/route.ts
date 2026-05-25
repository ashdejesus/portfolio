import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

// ---------------------------------------------------------------------------
// In-memory rate limiter
// ---------------------------------------------------------------------------
const WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 10; // max downloads per window per IP

const requestCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS;
}

// Periodically clean up stale entries to prevent memory leaks
if (typeof globalThis !== "undefined") {
  const CLEANUP_INTERVAL = 5 * 60 * 1000; // every 5 minutes
  const globalRef = globalThis as unknown as { __resumeCleanup?: NodeJS.Timeout };
  if (!globalRef.__resumeCleanup) {
    globalRef.__resumeCleanup = setInterval(() => {
      const now = Date.now();
      for (const [ip, entry] of requestCounts) {
        if (now > entry.resetAt) requestCounts.delete(ip);
      }
    }, CLEANUP_INTERVAL);
  }
}

// ---------------------------------------------------------------------------
// GET /api/resume — serve the PDF
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  // 1. Rate limit by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // 2. Optional: check Referer to discourage hotlinking from other sites
  const referer = request.headers.get("referer") || "";
  const host = request.headers.get("host") || "";
  if (referer && !referer.includes(host)) {
    // Allow empty referer (direct navigation / download managers) but block
    // requests clearly originating from a different domain.
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  // 3. Read the file from the private directory
  try {
    const filePath = path.join(process.cwd(), "private", "resume.pdf");
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Nichoe_Ashley_De_Jesus_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        // Prevent caching so rate-limit always applies
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        // Security headers
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Resume not found." },
      { status: 404 }
    );
  }
}
