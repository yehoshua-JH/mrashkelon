// =============================================================
// MR. ASHKELON — Navbar Component
// Design: Deep navy background, gold CTA button, serif logo
// =============================================================

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/featured-properties", label: "Properties" },
  { href: "/about-ashkelon", label: "Ashkelon" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(0.235 0.058 250)" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/logo-favicon_7a032b7f.png"
              alt="Mr. Ashkelon — Sales. Rentals. Management."
              className="h-12 w-auto"
              style={{ filter: "invert(1)" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color:
                    location === link.href
                      ? "oklch(0.72 0.12 75)"
                      : "oklch(0.85 0.01 85)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (location !== link.href)
                    (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                }}
                onMouseLeave={(e) => {
                  if (location !== link.href)
                    (e.target as HTMLElement).style.color = "oklch(0.85 0.01 85)";
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 rounded text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: "oklch(0.72 0.12 75)",
                color: "oklch(0.235 0.058 250)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.82 0.10 75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.72 0.12 75)";
              }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            backgroundColor: "oklch(0.20 0.055 250)",
            borderColor: "oklch(0.32 0.055 250)",
          }}
        >
          <div className="container py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2"
                style={{
                  color:
                    location === link.href
                      ? "oklch(0.72 0.12 75)"
                      : "oklch(0.85 0.01 85)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-2 rounded text-sm font-semibold text-center"
              style={{
                backgroundColor: "oklch(0.72 0.12 75)",
                color: "oklch(0.235 0.058 250)",
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
