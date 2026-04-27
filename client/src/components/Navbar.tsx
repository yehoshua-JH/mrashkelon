// MR. ASHKELON — Navbar
// Exact match of Lovable source Header.tsx
// logo-white.webp, no box/filter, navy bg, gold CTA

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/logo-white-src_f0231a59.webp";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/featured-properties" },
  { label: "Ashkelon", href: "/about-ashkelon" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--primary)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo — white webp, no filter, no box */}
        <Link href="/" className="flex items-center">
          <img src={LOGO} alt="Mr. Ashkelon" style={{ height: "3rem", width: "auto" }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: location === link.href ? "var(--secondary)" : "rgba(255,255,255,0.70)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded text-sm font-semibold transition-colors"
            style={{
              backgroundColor: "var(--secondary)",
              color: "var(--secondary-foreground)",
            }}
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded"
          style={{ color: "rgba(255,255,255,0.9)", background: "transparent", border: "none" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu style={{ width: "1.25rem", height: "1.25rem" }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div
            className="relative ml-auto w-72 h-full flex flex-col gap-6 p-6"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <div className="flex items-center justify-between">
              <img src={LOGO} alt="Mr. Ashkelon" style={{ height: "2rem", width: "auto" }} />
              <button
                onClick={() => setOpen(false)}
                style={{ color: "rgba(255,255,255,0.8)", background: "transparent", border: "none" }}
                aria-label="Close menu"
              >
                <X style={{ width: "1.25rem", height: "1.25rem" }} />
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.80)", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full px-4 py-2 rounded text-sm font-semibold"
              style={{
                backgroundColor: "var(--secondary)",
                color: "var(--secondary-foreground)",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
