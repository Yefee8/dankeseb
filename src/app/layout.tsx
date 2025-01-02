import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Timeless Tribute to a Racing Legend - SV5 by Yefee",
  description: "Sebastian Vettel's F1 Team Tribute, made by Yefee",
  keywords: [
    "dankeseb vercel",
    "dankeseb",
    "dankeseb.vercel.app",
    "danke sebastian website",
    "sebastian vettel tribute",
    "danke seb website",
    "danke seb web app",
    "sebastian vettel tribute",
    "danke vettel",
    "Sebastian Vettel",
    "F1",
    "Formula 1",
    "SV5",
    "Seb",
    "Fan made",
    "Danke Seb",
    "Danke Sebastian",
    "web app",
    "website",
    "Yefee",
  ],
  openGraph: {
    title: "A Timeless Tribute to a Racing Legend - SV5 by Yefee",
    description: "Sebastian Vettel's F1 Team Tribute, made by Yefee",
    images: [
      {
        url: "https://dankeseb.vercel.app/images/seb-by-yefee.png",
        width: 1280,
        height: 720,
        alt: "SV5 by Yefee",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>

      <Analytics />
    </html>
  );
}
