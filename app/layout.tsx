import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nichoe Ashley De Jesus - Computer Science Student",
  description: "Full-stack developer specializing in web development, modern technologies, and innovative solutions. 3rd Year CS Student & Aspiring Full-Stack Developer based in Metro Manila, Philippines.",
  keywords: [
    "Nichoe Ashley De Jesus",
    "Portfolio",
    "Computer Science",
    "Full-Stack Developer",
    "Web Development",
    "Laravel",
    "React",
    "Next.js",
    "JavaScript",
    "Python",
  ],
  authors: [{ name: "Nichoe Ashley De Jesus" }],
  creator: "Nichoe Ashley De Jesus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.vercel.app",
    title: "Nichoe Ashley De Jesus - Computer Science Student",
    description: "Full-stack developer specializing in web development. 3rd Year CS Student & Aspiring Full-Stack Developer",
    siteName: "Nichoe Ashley De Jesus",
    images: [
      {
        url: "https://yourportfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nichoe Ashley De Jesus Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nichoe Ashley De Jesus - Computer Science Student",
    description: "Full-stack developer specializing in web development. 3rd Year CS Student & Aspiring Full-Stack Developer",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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
