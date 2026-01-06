"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-light-gray/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          AI Genie
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-full border border-dark-gray/10 bg-white/70 px-3 py-1 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="mr-2 text-xs font-medium">Menu</span>
          <span className="flex flex-col gap-0.5">
            <span className="h-0.5 w-4 bg-dark-gray" />
            <span className="h-0.5 w-4 bg-dark-gray" />
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-dark-gray"
                      : "text-dark-gray/70 hover:text-dark-gray"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-light-gray/90 px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-3 py-1.5 transition-colors ${
                    pathname === item.href
                      ? "bg-white text-dark-gray"
                      : "text-dark-gray/80 hover:bg-white hover:text-dark-gray"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition hover:bg-primary/90"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}


