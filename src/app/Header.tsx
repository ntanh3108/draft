"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full flex items-center justify-between px-4 md:px-12 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="font-bold text-xl tracking-tight">Loan Dang</div>
      {/* Desktop nav */}
      <nav className="hidden sm:flex gap-4">
        <Link href="/" className={`px-3 py-1 rounded hover:bg-gray-100 transition ${pathname === "/" ? "font-bold underline underline-offset-4" : ""}`}>Home</Link>
        <Link href="/profile" className={`px-3 py-1 rounded hover:bg-gray-100 transition ${pathname === "/profile" ? "font-bold underline underline-offset-4" : ""}`}>Profile</Link>
        <Link href="/publications" className={`px-3 py-1 rounded hover:bg-gray-100 transition ${pathname === "/publications" ? "font-bold underline underline-offset-4" : ""}`}>Publications</Link>
      </nav>
      {/* Hamburger button on mobile */}
      <button
        className="sm:hidden p-2 rounded hover:bg-gray-100 transition"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 w-56 bg-white shadow-lg rounded-bl-xl flex flex-col p-6 gap-4 animate-slide-in">
            <Link href="/" className={`px-3 py-2 rounded hover:bg-gray-100 transition ${pathname === "/" ? "font-bold underline underline-offset-4" : ""}`} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/profile" className={`px-3 py-2 rounded hover:bg-gray-100 transition ${pathname === "/profile" ? "font-bold underline underline-offset-4" : ""}`} onClick={() => setOpen(false)}>Profile</Link>
            <Link href="/publications" className={`px-3 py-2 rounded hover:bg-gray-100 transition ${pathname === "/publications" ? "font-bold underline underline-offset-4" : ""}`} onClick={() => setOpen(false)}>Publications</Link>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease;
        }
      `}</style>
    </header>
  );
} 