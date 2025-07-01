import React from "react";

interface SectionBannerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionBanner({ children, className = "" }: SectionBannerProps) {
  return (
    <div className={`w-full max-w-screen-xl mx-auto bg-gray-100 rounded-xl shadow p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 ${className}`}>
      {children}
    </div>
  );
} 