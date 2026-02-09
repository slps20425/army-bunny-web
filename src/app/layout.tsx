import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Army Bunny Studio LLC | Visionary Software Solutions",
  description: "Futuristic software development studio specializing in AI Agent Architecture, Financial Integration, and Cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-deep-space text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
