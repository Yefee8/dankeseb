import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  keywords: ["Sebastian Vettel", "F1", "SV5", "Seb", "Fan made", "Yefee"],
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
        {children}
      </body>
    </html>
  );
}
