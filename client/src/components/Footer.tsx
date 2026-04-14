// =============================================================
// MR. ASHKELON — Footer Component
// Design: Deep navy background, gold accents, serif typography
// =============================================================

import { Link } from "wouter";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.055 250)" }}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded flex items-center justify-center font-bold text-sm"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.235 0.058 250)",
                  fontFamily: "Georgia, serif",
                }}
              >
                MR
              </div>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "Georgia, serif", color: "oklch(0.985 0.008 85)" }}
              >
                Mr. Ashkelon
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.72 0.02 85)" }}>
              Your trusted English-speaking real estate broker in Ashkelon, Israel.
              Helping overseas buyers and Olim find their dream home since 2003.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/featured-properties", label: "Properties" },
                { href: "/about-ashkelon", label: "About Ashkelon" },
                { href: "/resources", label: "Resources" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.72 0.02 85)", textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "oklch(0.72 0.02 85)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "oklch(0.72 0.02 85)" }}>
              <li className="flex items-start gap-2">
                <span>🇮🇱</span>
                <a
                  href={`tel:${CONTACT.phone_il}`}
                  className="hover:text-amber-400 transition-colors"
                  style={{ color: "inherit" }}
                >
                  {CONTACT.phone_il}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>🇺🇸</span>
                <a
                  href={`tel:${CONTACT.phone_us}`}
                  className="hover:text-amber-400 transition-colors"
                  style={{ color: "inherit" }}
                >
                  {CONTACT.phone_us}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-amber-400 transition-colors"
                  style={{ color: "inherit" }}
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{CONTACT.address}</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://x.com/mrashkelon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors"
                style={{ color: "oklch(0.72 0.02 85)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.72 0.02 85)";
                }}
              >
                𝕏 Follow on X
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center text-xs"
          style={{
            borderTop: "1px solid oklch(0.32 0.055 250)",
            color: "oklch(0.55 0.02 85)",
          }}
        >
          © {new Date().getFullYear()} Mr. Ashkelon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
