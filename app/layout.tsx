import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nichoe Ashley De Jesus | Portfolio",
  description: "Portfolio of Nichoe Ashley De Jesus - 3rd Year Computer Science Student & Aspiring Full-Stack Developer. Specializing in web development with modern technologies.",
  keywords: [
    "Nichoe Ashley De Jesus",
    "Portfolio",
    "Computer Science",
    "Full-Stack Developer",
    "Web Development",
    "Laravel",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Nichoe Ashley De Jesus" }],
  creator: "Nichoe Ashley De Jesus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.vercel.app",
    title: "Nichoe Ashley De Jesus | Portfolio",
    description: "3rd Year Computer Science Student & Aspiring Full-Stack Developer",
    siteName: "Nichoe Ashley De Jesus Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nichoe Ashley De Jesus | Portfolio",
    description: "3rd Year Computer Science Student & Aspiring Full-Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
