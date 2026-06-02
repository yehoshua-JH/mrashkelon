// MR. ASHKELON — Navbar
// Mobile: hamburger LEFT, logo CENTER, no accessibility widget overlap
// Desktop: logo LEFT, nav links + Contact CTA RIGHT

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/logo-white-src_f0231a59.webp";

// Logo natural size: 138×102px. At 48px height → width = 65px
const LOGO_STYLE = { height: "3.5rem", width: "76px", objectFit: "contain" as const };
const LOGO_SMALL_STYLE = { height: "2.5rem", width: "54px", objectFit: "contain" as const };

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/featured-properties" },
  { label: "VIA", href: "/via-ashkelon" },
  { label: "Ashkelon", href: "/about-ashkelon" },
  { label: "Jerusalem", href: "/about-jerusalem" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-[60] border-b"
      style={{
        backgroundColor: "var(--primary)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="container flex h-16 items-center justify-between">

        {/* Mobile: hamburger on LEFT — hidden on desktop */}
        <button
          className="lg:hidden p-2 rounded"
          style={{ color: "rgba(255,255,255,0.9)", background: "transparent", border: "none" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 overflow-visible lg:mr-auto">
          <img src={LOGO} alt="Mr. Ashkelon" style={LOGO_STYLE} />
        </Link>

        {/* Desktop Nav — hidden on mobile */}
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
            Contact
          </Link>
        </nav>

        {/* Mobile: accessibility button on RIGHT — triggers UserWay panel */}
        <button
          className="lg:hidden p-2 rounded flex items-center justify-center"
          style={{ color: "#fff", background: "#146ef5", border: "none", width: "2.5rem", height: "2.5rem", borderRadius: "50%" }}
          onClick={() => {
            const uw = (window as any).UserWay;
            if (uw && typeof uw.widgetOpen === 'function') {
              uw.widgetOpen();
            } else if (uw && typeof uw.iconClick === 'function') {
              uw.iconClick();
            } else {
              // Direct click on hidden icon — no delay
              const icon = document.getElementById('userwayAccessibilityIcon');
              if (icon) {
                const prev = icon.style.display;
                icon.style.removeProperty('display');
                (icon as HTMLElement).click();
                icon.style.setProperty('display', 'none', 'important');
              }
            }
          }}
          aria-label="Accessibility menu"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
            <circle cx="12" cy="4" r="2" />
            <path d="M19 9H5a1 1 0 000 2h5.5l-1.5 9h2l1-6 1 6h2l-1.5-9H19a1 1 0 000-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer — slides in from LEFT */}
      {open && (
        <div className="fixed inset-0 z-[70] flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div
            className="relative mr-auto w-72 h-full flex flex-col gap-6 p-6"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <div className="flex items-center justify-between">
              <img src={LOGO} alt="Mr. Ashkelon" style={LOGO_SMALL_STYLE} />
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
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
