import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Harry Pall - Full Stack Developer",
  description: "Portfolio of Harry Pall, a passionate full stack developer building scalable web applications with modern technologies.",
  keywords: ["Harry Pall", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Harry Pall" }],
  creator: "Harry Pall",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harrypall.dev",
    title: "Harry Pall - Full Stack Developer",
    description: "Portfolio of Harry Pall, a passionate full stack developer building scalable web applications with modern technologies.",
    siteName: "Harry Pall Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Pall - Full Stack Developer",
    description: "Portfolio of Harry Pall, a passionate full stack developer building scalable web applications with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
