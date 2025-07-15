import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/Theme";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome To Hexahype",
  authors: [
    {
      name: "Hexahype Team",
      url: "https://hexahype.vercel.app",
    },
  ],
  keywords: [
    "Hexahype",
    "Creative Community",
    "Art and Design",
    "Young Creators",
    "Prototype Project",
  ],
  openGraph: {
    title: "Welcome To Hexahype",
    description:
      "Hexahype is where art meets technology, where young creators transform ideas into reality. Join our community of visionary artists and designers shaping tomorrow's creative landscape.",
    url: "https://hexahype.vercel.app",
    siteName: "Hexahype",
    images: [
      {
        url: "https://hexahype.vercel.app/hexahype.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "Hexahype is where art meets technology, where young creators transform ideas into reality. Join our community of visionary artists and designers shaping tomorrow's creative landscape.",
  twitter: {
    card: "summary_large_image",
    title: "Welcome To Hexahype",
    description:
      "Hexahype is where art meets technology, where young creators transform ideas into reality. Join our community of visionary artists and designers shaping tomorrow's creative landscape.",
    creator: "@hexahype",
    images: ["https://hexahype.vercel.app/hexahype.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
