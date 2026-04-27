// =============================================================
// MR. ASHKELON — Genesis Jerusalem Project Page
// Design: navy (oklch(0.285 0.055 255)), gold (oklch(0.72 0.12 75))
// Georgia serif headings — matches existing site design exactly
// Images: placeholder slots — replace src values when photos arrive
// =============================================================

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Building2,
  MapPin,
  ShieldCheck,
  Package,
  Car,
  BedDouble,
  Mountain,
  Trees,
  Train,
  Sparkles,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  ImageIcon,
} from "lucide-react";

// ── Colours ───────────────────────────────────────────────────────────────────
const NAVY = "oklch(0.285 0.055 255)";
const GOLD = "oklch(0.72 0.12 75)";
const MUTED = "oklch(0.42 0.025 255)";
const CREAM = "oklch(0.975 0.008 80)";

// ── Hero background — replace with real tower image URL when available ────────
  const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-tower_a964c6a2.jpeg";

// ── Gallery images — replace each src with real project photo URLs ─────────────
// To add images: replace the src "" with the actual CDN URL for each photo.
const GALLERY: { src: string; caption: string }[] = [
  { src: "", caption: "Tower exterior" },
  { src: "", caption: "Jerusalem hills view" },
  { src: "", caption: "Lobby & entrance" },
  { src: "", caption: "Living area" },
  { src: "", caption: "Park & nature nearby" },
  { src: "", caption: "Neighbourhood" },
];

// ── Key Details ───────────────────────────────────────────────────────────────
const KEY_DETAILS = [
  { icon: Building2, label: "28-floor residential tower" },
  { icon: BedDouble, label: "3, 4 & 5 room apartments" },
  { icon: ShieldCheck, label: "Mamad in every apartment" },
  { icon: Package, label: "Storage room included" },
  { icon: Car, label: "Underground parking" },
  { icon: MapPin, label: "Western Jerusalem" },
];

// ── Highlights ────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    icon: Mountain,
    title: "Open Views",
    body: "Enjoy breathtaking panoramas of the Jerusalem hills, spectacular sunsets, and the iconic city skyline — all from the comfort of your own home.",
    bg: CREAM,
  },
  {
    icon: Trees,
    title: "Lifestyle & Nature",
    body: "Steps away from a beautiful park, a serene lake, and scenic walking and cycling trails — a rare combination of urban living and natural tranquillity.",
    bg: "oklch(1 0 0)",
  },
  {
    icon: Train,
    title: "Transport & Accessibility",
    body: "Excellent connectivity via the Jerusalem Light Rail and major highways. Malha train station and the Begin Highway provide fast access to central Jerusalem, Tel Aviv, and beyond — making every commute effortless.",
    bg: CREAM,
  },
  {
    icon: Sparkles,
    title: "Luxury Amenities",
    body: "Every apartment is designed to the highest standard, featuring premium finishes, a secure Mamad safe room, private storage, and underground parking.",
    bg: "oklch(1 0 0)",
  },
  {
    icon: Star,
    title: "Location Benefits",
    body: "Minutes from Hadassah Medical Centre, Malha Mall, Teddy Stadium, and the Jerusalem Biblical Zoo. Close to schools, synagogues, and all essential amenities — in one of Jerusalem's most rapidly developing western neighbourhoods.",
    bg: CREAM,
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div
      className="mx-auto mb-10 rounded-full"
      style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD }}
    />
  );
}

function PlaceholderImage({ caption, className = "" }: { caption: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl ${className}`}
      style={{ backgroundColor: "oklch(0.92 0.01 255)", border: "2px dashed oklch(0.75 0.03 255)" }}
    >
      <ImageIcon style={{ width: "2rem", height: "2rem", color: "oklch(0.60 0.04 255)" }} />
      <span className="text-xs text-center px-2" style={{ color: "oklch(0.55 0.04 255)" }}>
        {caption}
      </span>
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof GALLERY;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-white opacity-80 hover:opacity-100 transition"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={32} />
      </button>
      <button
        className="absolute left-4 text-white opacity-80 hover:opacity-100 transition p-2"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft size={40} />
      </button>
      <div
        className="flex flex-col items-center max-w-4xl w-full px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {img.src ? (
          <img
            src={img.src}
            alt={img.caption}
            className="w-full max-h-[75vh] object-contain rounded-lg"
          />
        ) : (
          <PlaceholderImage caption={img.caption} className="w-full h-64" />
        )}
        <p className="mt-4 text-sm text-white/70">{img.caption}</p>
      </div>
      <button
        className="absolute right-4 text-white opacity-80 hover:opacity-100 transition p-2"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}

// ── WhatsApp SVG ──────────────────────────────────────────────────────────────
function WASvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
      <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.853 6.64L2.667 29.333l6.88-1.813A13.28 13.28 0 0 0 16.003 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.003 2.667zm0 24c-2.16 0-4.267-.587-6.107-1.693l-.44-.267-4.08 1.08 1.093-4-.28-.453A10.613 10.613 0 0 1 5.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.003 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.547h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.827.68.76.24 1.453.213 2 .133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GenesisJerusalem() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((i) => (i === null ? 0 : (i - 1 + GALLERY.length) % GALLERY.length));
  const nextImage = () =>
    setLightboxIdx((i) => (i === null ? 0 : (i + 1) % GALLERY.length));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(1 0 0)" }}>
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section
        className="relative w-full flex flex-col justify-end"
        style={{
          paddingTop: "64px",
          minHeight: "85vh",
          backgroundImage: `linear-gradient(to bottom, rgba(10,18,40,0.60) 0%, rgba(10,18,40,0.78) 100%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Subtle gold shimmer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, oklch(0.72 0.12 75 / 0.08) 0%, transparent 60%)",
          }}
        />

        {/* PRE-SALE badge */}
        <div className="absolute top-20 left-6 md:left-10 z-10">
          <div
            className="px-5 py-2 font-bold text-xs tracking-widest"
            style={{ backgroundColor: GOLD, color: "#fff" }}
          >
            PRE-SALE
          </div>
        </div>

        {/* PRE-SALE gold ribbon top-right */}
        <div className="absolute top-20 right-6 md:right-10 z-10">
          <div
            className="px-4 py-1.5 text-xs font-bold tracking-widest"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: GOLD, border: `1px solid ${GOLD}`, borderRadius: "2px" }}
          >
            WESTERN JERUSALEM
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 px-6 md:px-14 pb-14 max-w-3xl">
          <p
            className="text-sm font-bold tracking-widest mb-3"
            style={{ color: GOLD }}
          >
            GENESIS JERUSALEM
          </p>
          <h1
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
              color: "#ffffff",
            }}
          >
            A New Standard of
            <br />
            <em style={{ fontStyle: "italic", color: GOLD }}>Luxury Living</em>
            <br />
            in Western Jerusalem
          </h1>
          <p
            className="text-lg md:text-xl font-light mb-8 max-w-xl"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            28 floors. Premium apartments. Open Jerusalem views.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:054-731-2118"
              className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-base rounded transition-all duration-200"
              style={{ backgroundColor: NAVY, color: "#fff", border: `2px solid rgba(255,255,255,0.25)` }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Us
            </a>
            <a
              href="https://wa.me/972547312118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-base rounded transition-all duration-200"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <WASvg />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. PROJECT DESCRIPTION ──────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <h2
            className="font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: NAVY }}
          >
            About Genesis Jerusalem
          </h2>
          <GoldDivider />
          <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
            Genesis is a premium residential tower project located in one of Jerusalem's most rapidly
            developing areas, offering a rare combination of open green views, modern infrastructure,
            and excellent connectivity.
          </p>
        </div>
      </section>

      {/* ── 3. KEY DETAILS ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <h2
            className="font-bold text-center mb-3"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: NAVY }}
          >
            Project Details
          </h2>
          <GoldDivider />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {KEY_DETAILS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-xl transition-all duration-200"
                style={{ backgroundColor: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.01 255)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = GOLD;
                  el.style.boxShadow = "0 4px 20px oklch(0.72 0.12 75 / 0.12)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.88 0.01 255)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.12)" }}
                >
                  <Icon style={{ width: "1.3rem", height: "1.3rem", color: GOLD, strokeWidth: 1.5 }} />
                </div>
                <span className="text-sm font-semibold text-center leading-snug" style={{ color: NAVY }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HIGHLIGHTS ───────────────────────────────────────── */}
      {HIGHLIGHTS.map(({ icon: Icon, title, body, bg }, idx) => (
        <section key={title} className="py-16" style={{ backgroundColor: bg }}>
          <div className="container max-w-4xl mx-auto">
            <div className={`flex flex-col md:flex-row items-start gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-shrink-0 flex flex-col items-center gap-3 pt-1">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Icon style={{ width: "1.6rem", height: "1.6rem", color: GOLD, strokeWidth: 1.5 }} />
                </div>
              </div>
              <div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", color: NAVY }}
                >
                  {title}
                </h3>
                <div className="mb-4 rounded-full" style={{ width: "2.5rem", height: "2px", backgroundColor: GOLD }} />
                <p className="text-base leading-relaxed" style={{ color: MUTED }}>{body}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── 5. IMAGE GALLERY ────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <h2
            className="font-bold text-center mb-3"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: NAVY }}
          >
            Gallery
          </h2>
          <GoldDivider />
          <p className="text-center text-sm mb-10" style={{ color: MUTED }}>
            Project images coming soon — gallery will be updated when photography is available
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {GALLERY.map((img, i) => (
              img.src ? (
                <button
                  key={i}
                  className="relative overflow-hidden rounded-xl group focus:outline-none"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() => openLightbox(i)}
                  aria-label={`View ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }}
                  >
                    <p className="text-white text-sm font-medium">{img.caption}</p>
                  </div>
                </button>
              ) : (
                <div key={i} style={{ aspectRatio: "4/3", minHeight: "180px" }}>
                  <PlaceholderImage caption={img.caption} className="w-full h-full" />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {lightboxIdx !== null && (
        <Lightbox images={GALLERY} index={lightboxIdx} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}

      {/* ── 6. TARGET AUDIENCE ──────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.12)" }}
          >
            <Users style={{ width: "1.5rem", height: "1.5rem", color: GOLD, strokeWidth: 1.5 }} />
          </div>
          <h2
            className="font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: NAVY }}
          >
            Who Is This For?
          </h2>
          <GoldDivider />
          <p className="text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
            Genesis Jerusalem is ideally suited for{" "}
            <strong style={{ color: NAVY }}>religious and traditional families</strong>,{" "}
            <strong style={{ color: NAVY }}>young couples</strong>, and{" "}
            <strong style={{ color: NAVY }}>international buyers</strong> seeking a premium home
            or investment property in one of the world's most iconic cities.
          </p>
        </div>
      </section>

      {/* ── 7. FINAL CTA ────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#ffffff" }}
          >
            Interested in Genesis Jerusalem?
          </h2>
          <div className="mx-auto mb-6 rounded-full" style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD }} />
          <p className="text-base md:text-lg mb-10 font-light" style={{ color: "rgba(255,255,255,0.80)" }}>
            Contact us today for full details, floor plans, and pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:054-731-2118"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded transition-all duration-200"
              style={{ backgroundColor: GOLD, color: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 054 7312 118
            </a>
            <a
              href="https://wa.me/972547312118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded transition-all duration-200"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <WASvg />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────── */}
      <ContactForm
        title="Send Us a Message"
        subtitle="We'll get back to you with full project details as soon as possible."
        showContactInfo
      />

      <Footer />
    </div>
  );
}
