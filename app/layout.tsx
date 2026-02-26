import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alex Rivera | Full Stack Developer",
  description:
    "Full Stack Developer specializing in building exceptional web applications with React, Next.js, TypeScript, and modern technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Alex Rivera",
  ],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional web applications with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-background text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
