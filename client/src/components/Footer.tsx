// MR. ASHKELON — Footer
// Exact match of Lovable source Footer.tsx
// 4-col grid: logo | phones | email+address | social icons

import { Link } from "wouter";
import { Facebook, Linkedin, Mail, MapPin } from "lucide-react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/logo-white-src_f0231a59.webp";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Properties", href: "/featured-properties" },
  { label: "About Ashkelon", href: "/about-ashkelon" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* Col 1 — Logo */}
          <div>
            <Link href="/">
              <img src={LOGO_WHITE} alt="Mr. Ashkelon" style={{ height: "4rem", width: "auto" }} />
            </Link>
          </div>

          {/* Col 2 — Phone Numbers */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-lg">🇮🇱</span>
              <a href="tel:054-731-2118" className="text-sm" style={{ color: "rgba(255,255,255,0.80)" }}>
                054-731-2118
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🇺🇸</span>
              <a href="tel:1-612-424-5387" className="text-sm" style={{ color: "rgba(255,255,255,0.80)" }}>
                1-612-424-5387
              </a>
            </div>
          </div>

          {/* Col 3 — Email & Address */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail style={{ width: "1rem", height: "1rem", color: "rgba(255,255,255,0.60)", flexShrink: 0 }} />
              <a href="mailto:motti@mrashkelon.com" className="text-sm" style={{ color: "rgba(255,255,255,0.80)" }}>
                motti@mrashkelon.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin style={{ width: "1rem", height: "1rem", color: "rgba(255,255,255,0.60)", flexShrink: 0 }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.80)" }}>
                Hatayassim St., Ashkelon 78573
              </span>
            </div>
          </div>

          {/* Col 4 — Social Icons */}
          <div className="flex gap-2 md:justify-end">
            <a
              href="https://www.facebook.com/motti.benyitzhack"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded flex items-center justify-center"
              style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
            >
              <Facebook style={{ width: "1.25rem", height: "1.25rem" }} />
            </a>
            <a
              href="https://twitter.com/@mbyashkelon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
            >
              𝕏
            </a>
            <a
              href="https://il.linkedin.com/in/motti-ben-yitzhack-68135aa8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded flex items-center justify-center"
              style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
            >
              <Linkedin style={{ width: "1.25rem", height: "1.25rem" }} />
            </a>
          </div>
        </div>

        {/* Bottom bar — nav links + copyright */}
        <div
          className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.10)" }}
        >
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.50)", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
            © {new Date().getFullYear()} Mr. Ashkelon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
