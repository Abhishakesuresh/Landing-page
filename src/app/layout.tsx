import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AS Automation Labs | High-Impact Automation Engineer",
  description: "Engineering Quality. Automating Excellence. Portfolio of Abhishake Suresh - SDET & CI/CD Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-black" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-black min-h-screen`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
