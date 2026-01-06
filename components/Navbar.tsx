"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-light-gray/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          AI Genie
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/product"
            className="font-medium text-dark-gray/80 transition hover:text-dark-gray"
          >
            Product
          </Link>
        </div>
      </nav>
    </header>
  );
}


