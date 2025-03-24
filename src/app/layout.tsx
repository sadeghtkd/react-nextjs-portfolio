import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadegh Ghanbari Shohani | Full Stack Developer",
  description: "Professional portfolio of Sadegh Ghanbari Shohani - Full Stack Developer specializing in web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white`}
      >
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="py-6 px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sadegh Ghanbari Shohani. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
