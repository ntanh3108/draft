import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thi Hong Loan, Dang",
  description: "Thi Hong Loan, Dang",
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
        <main className="min-h-[calc(100vh-112px)] flex flex-col">{children}</main>
        <footer className="w-full flex items-center justify-center py-3 text-xs text-gray-500 border-t border-gray-200 bg-white/80 backdrop-blur-md">
          <span className="flex items-center gap-1">Thi Hong Loan, Dang <span aria-hidden>©</span> {new Date().getFullYear()}</span>
        </footer>
      </body>
    </html>
  );
}
