"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-bg/60 bg-bg/80">
      <div className="relative">
        {/* Thin blueprint divider */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(to_right,transparent,rgba(0,212,255,0.18),transparent)]" />

        <nav className="container mx-auto px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-white/90 hover:text-white transition-colors relative z-50"
          >
            B<span className="text-accent">J</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const active = pathname === link.href ||
                            (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-sm/6 text-text/90 hover:text-white transition-colors
                      ${active ? "font-medium text-white" : ""}`}
                  >
                    {link.label}
                    <span className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300
                      ${active ? "w-full bg-accent/70" : "w-0 bg-accent/40 group-hover:w-full"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white/90 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-bg/95 backdrop-blur-lg z-30 md:hidden transition-opacity duration-300
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-card-bg border-l border-accent/30 z-40 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full invisible'}`}
      >
        <nav className="flex flex-col h-full pt-20 px-6">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => {
              const active = pathname === link.href ||
                            (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block py-4 px-4 rounded-lg text-lg transition-all
                      ${active
                        ? "bg-accent/10 text-white font-medium border-l-2 border-accent shadow-[0_0_10px_rgba(0,212,255,0.3)]"
                        : "text-text/90 hover:bg-accent/5 hover:text-white border-l-2 border-transparent"}`}
                  >
                    {link.label}
                  </Link>
                  {index < links.length - 1 && (
                    <div className="h-px bg-[linear-gradient(to_right,transparent,rgba(0,212,255,0.15),transparent)] my-1" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
