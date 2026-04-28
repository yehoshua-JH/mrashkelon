// =============================================================
// MR. ASHKELON — Genesis Jerusalem Project Page (Premium Edition)
// Design: navy (oklch(0.285 0.055 255)), gold (oklch(0.72 0.12 75))
// Georgia serif headings — matches existing site design exactly
// Sections: Hero → Overview → Key Details → Highlights → Gallery → Location → CTA
// =============================================================

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
  ArrowRight,
} from "lucide-react";

// ── Colours ───────────────────────────────────────────────────────────────────
const NAVY   = "oklch(0.285 0.055 255)";
const GOLD   = "oklch(0.72 0.12 75)";
const MUTED  = "oklch(0.42 0.025 255)";
const CREAM  = "oklch(0.975 0.008 80)";
const DARK   = "oklch(0.16 0.04 255)";

// ── Images ────────────────────────────────────────────────────────────────────
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png";

const GALLERY: { src: string; caption: string; category: string }[] = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
    caption: "Genesis Jerusalem tower — aerial view at sunset",
    category: "Exterior",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-floorplan-typical_fbdeaf41.jpg",
    caption: "Typical Floor Plan — Floors 2–22",
    category: "Floor Plan",
  },
];

// ── Key Details ───────────────────────────────────────────────────────────────
const KEY_DETAILS = [
  { icon: Building2, label: "28-Floor Tower",        sub: "Residential" },
  { icon: BedDouble, label: "3, 4 & 5 Rooms",        sub: "Apartment sizes" },
  { icon: ShieldCheck, label: "Mamad Included",       sub: "Every apartment" },
  { icon: Package,   label: "Storage Room",           sub: "Private storage" },
  { icon: Car,       label: "Underground Parking",    sub: "Secure & covered" },
  { icon: MapPin,    label: "Western Jerusalem",      sub: "Prime location" },
];

// ── Highlights ────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    icon: Mountain,
    number: "01",
    title: "Open Views & Sunsets",
    body: "Wake up to breathtaking panoramas of the Jerusalem hills. Watch the city transform at golden hour as the sun sets over the iconic skyline — a view that never grows old.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
  },
  {
    icon: Trees,
    number: "02",
    title: "Lifestyle & Nature",
    body: "Steps from a beautifully landscaped park, a serene lake, and scenic walking and cycling trails. Genesis Jerusalem offers a rare balance of urban convenience and natural tranquillity.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
  },
  {
    icon: Train,
    number: "03",
    title: "Transport & Accessibility",
    body: "Seamlessly connected via the Jerusalem Light Rail and the Begin Highway. Malha train station is minutes away, providing fast access to central Jerusalem, Tel Aviv, and beyond.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Building Features",
    body: "Every apartment is finished to the highest standard — featuring a secure Mamad safe room, private storage, underground parking, and premium materials throughout.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
  },
  {
    icon: Star,
    number: "05",
    title: "Location Advantages",
    body: "Minutes from Hadassah Medical Centre, Malha Mall, Teddy Stadium, and the Jerusalem Biblical Zoo. Schools, synagogues, and all essential amenities are within easy reach.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function GoldDivider({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div
      className={`mb-8 rounded-full ${align === "left" ? "" : "mx-auto"}`}
      style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-bold tracking-[0.2em] mb-3 uppercase"
      style={{ color: GOLD }}
    >
      {children}
    </p>
  );
}

// ── Premium Lightbox (Dialog-based) ───────────────────────────────────────────
function Lightbox({
  images,
  index,
  open,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof GALLERY;
  index: number;
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onPrev, onNext]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="p-0 border-none overflow-hidden"
        style={{
          maxWidth: "90vw",
          width: "90vw",
          maxHeight: "92vh",
          background: "rgba(4, 8, 20, 0.97)",
          backdropFilter: "blur(8px)",
          borderRadius: "12px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={onClose}
          aria-label="Close gallery"
        >
          <X size={18} />
        </button>

        {/* Counter */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          {index + 1} / {images.length}
        </div>

        {/* Image area */}
        <div className="flex items-center justify-center w-full" style={{ minHeight: "60vh", maxHeight: "80vh", padding: "3.5rem 4.5rem" }}>
          <img
            key={img.src}
            src={img.src}
            alt={img.caption}
            style={{
              maxWidth: "100%",
              maxHeight: "74vh",
              objectFit: "contain",
              borderRadius: "8px",
              display: "block",
              margin: "0 auto",
              animation: "galleryFadeIn 0.28s ease",
            }}
          />
        </div>

        {/* Caption bar */}
        <div
          className="flex items-center justify-center gap-3 pb-5 px-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.9rem" }}
        >
          <span
            className="text-xs font-bold tracking-widest px-2 py-0.5 rounded"
            style={{ backgroundColor: GOLD, color: "#fff" }}
          >
            {img.category}
          </span>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{img.caption}</p>
        </div>

        {/* Left arrow */}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right arrow */}
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>
      </DialogContent>
    </Dialog>
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

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative w-full flex flex-col justify-end overflow-hidden"
        style={{
          paddingTop: "64px",
          minHeight: "92vh",
          backgroundImage: `linear-gradient(to bottom, rgba(8,14,32,0.30) 0%, rgba(8,14,32,0.78) 80%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* Gold shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 65% 25%, oklch(0.72 0.12 75 / 0.07) 0%, transparent 55%)",
          }}
        />

        {/* PRE-SALE badge — top left */}
        <div className="absolute top-24 left-6 md:left-12 z-10">
          <div
            className="px-5 py-2 text-xs font-bold tracking-[0.18em]"
            style={{ backgroundColor: GOLD, color: "#fff" }}
          >
            PRE-SALE NOW OPEN
          </div>
        </div>

        {/* WESTERN JERUSALEM badge — top right */}
        <div className="absolute top-24 right-6 md:right-12 z-10">
          <div
            className="px-4 py-2 text-xs font-bold tracking-[0.15em]"
            style={{
              backgroundColor: "rgba(255,255,255,0.10)",
              color: GOLD,
              border: `1px solid ${GOLD}`,
            }}
          >
            WESTERN JERUSALEM
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-14 pb-20 max-w-4xl">
          <SectionLabel>GENESIS JERUSALEM</SectionLabel>
          <h1
            className="font-bold leading-[1.08] mb-5"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
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
            className="text-lg md:text-xl font-light mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}
          >
            28 floors. Premium apartments. Open Jerusalem views.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: "28", label: "Floors" },
              { value: "3–5", label: "Room Apartments" },
              { value: "100%", label: "Mamad Included" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-3xl font-bold"
                  style={{ fontFamily: "Georgia, serif", color: GOLD }}
                >
                  {value}
                </span>
                <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:054-731-2118"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200"
              style={{ backgroundColor: GOLD, color: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Contact Us
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/972547312118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <WASvg />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, oklch(1 0 0))" }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>OVERVIEW</SectionLabel>
              <h2
                className="font-bold mb-4 leading-tight"
                style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}
              >
                About Genesis Jerusalem
              </h2>
              <GoldDivider align="left" />
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: MUTED }}>
                Genesis is a premium residential tower project located in one of Jerusalem's most
                rapidly developing areas, offering a rare combination of open green views, modern
                infrastructure, and excellent connectivity.
              </p>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>
                Designed for those who demand the very best — religious and traditional families,
                young couples, and international investors seeking a foothold in one of the world's
                most iconic cities.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png"
                alt="Genesis Jerusalem tower"
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: "420px", boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
              />
              <div
                className="absolute -bottom-5 -left-5 px-5 py-4 rounded-lg"
                style={{ backgroundColor: NAVY, boxShadow: "0 8px 30px rgba(0,0,0,0.22)" }}
              >
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: GOLD }}>Status</p>
                <p className="text-sm font-bold text-white">Pre-Sale Open</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — KEY DETAILS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <div className="text-center mb-14">
            <SectionLabel>SPECIFICATIONS</SectionLabel>
            <h2
              className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}
            >
              Project Details
            </h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {KEY_DETAILS.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-7 rounded-xl transition-all duration-250 cursor-default"
                style={{ backgroundColor: "oklch(1 0 0)", border: "1px solid oklch(0.90 0.01 255)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = GOLD;
                  el.style.boxShadow = "0 6px 28px oklch(0.72 0.12 75 / 0.13)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.90 0.01 255)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.10)" }}
                >
                  <Icon style={{ width: "1.4rem", height: "1.4rem", color: GOLD, strokeWidth: 1.5 }} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold leading-snug mb-1" style={{ color: NAVY }}>{label}</p>
                  <p className="text-xs" style={{ color: MUTED }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3b — APARTMENT SPECIFICATIONS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>APARTMENT FINISHES</SectionLabel>
            <h2
              className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}
            >
              What's Included in Every Apartment
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Electricity & Smart Home",
                items: [
                  "Three-phase electrical supply",
                  "Colour video intercom",
                  "Smart home infrastructure",
                  "Communications, phone & TV points in every room",
                  "USB socket in kitchen & living room",
                  "Master lighting switch at entrance",
                  "Hot water timer",
                ],
              },
              {
                title: "Heating & Cooling",
                items: [
                  "Mini-central inverter air conditioning",
                  "Underfloor heating",
                ],
              },
              {
                title: "Kitchen",
                items: [
                  "Fitted kitchen with built-in storage",
                  "Three-phase socket for electric hob",
                  "Quartz or equivalent stone worktop",
                  "Flush-fit acrylic sink",
                  "Pull-out tap",
                  "Water point for refrigerator",
                ],
              },
              {
                title: "Bathrooms",
                items: [
                  "Floor-to-ceiling porcelain tiles (25×75, 30×60, 30×90)",
                  "Wall-hung toilets with concealed cisterns",
                  "4-way shower mixer in every bathroom",
                  "Acrylic bath",
                  "Floating vanity with integrated basin & mirror",
                  "Water-saving fixtures",
                ],
              },
              {
                title: "Doors & Windows",
                items: [
                  "Designer entrance door",
                  "Premium interior doors",
                  "Timber door inside the Mamad",
                  "Electric shutters (excluding Mamad & bedrooms)",
                  "Motorised mechanism in living room",
                  "Double-glazed insulating windows",
                ],
              },
              {
                title: "Flooring",
                items: [
                  "Porcelain throughout (3–4 room: 80×80 cm; 5 room: 100×100 cm)",
                  "Balcony: anti-slip porcelain 33×33 & 65×15 cm",
                  "Master bedroom: parquet option available",
                ],
              },
              {
                title: "Building & Common Areas",
                items: [
                  "Designer lobby with high ceilings",
                  "Residents' club lounge",
                  "4 lifts including 2 Shabbat lifts",
                  "Stroller / storage room",
                  "Private storage room per apartment",
                  "Covered parking per apartment",
                  "EV charging infrastructure",
                  "Rooftop garden of approx. 450 m²",
                ],
              },
              {
                title: "Balcony",
                items: [
                  "Garden tap point included",
                ],
              },
            ].map(({ title, items }) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: CREAM,
                  border: "1px solid oklch(0.90 0.01 255)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-8 rounded-full flex-shrink-0"
                    style={{ backgroundColor: GOLD }}
                  />
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{ fontFamily: "Georgia, serif", color: NAVY }}
                  >
                    {title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: MUTED }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — HIGHLIGHTS
      ══════════════════════════════════════════════════════ */}
      <section className="py-6" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="text-center mb-14 pt-16">
            <SectionLabel>WHY GENESIS JERUSALEM</SectionLabel>
            <h2
              className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}
            >
              Highlights
            </h2>
            <GoldDivider />
          </div>
        </div>

        {HIGHLIGHTS.map(({ icon: Icon, number, title, body, image }, idx) => (
          <div
            key={title}
            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            style={{ minHeight: "420px" }}
          >
            {/* Image half */}
            <div className="w-full md:w-1/2 relative overflow-hidden" style={{ minHeight: "300px" }}>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                style={{ minHeight: "300px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: idx % 2 === 0
                    ? "linear-gradient(to right, transparent 60%, oklch(1 0 0))"
                    : "linear-gradient(to left, transparent 60%, oklch(1 0 0))",
                }}
              />
            </div>

            {/* Text half */}
            <div
              className={`w-full md:w-1/2 flex items-center px-8 md:px-14 py-14 ${idx % 2 === 0 ? "" : ""}`}
              style={{ backgroundColor: "oklch(1 0 0)" }}
            >
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="text-4xl font-bold"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.88 0.02 255)", lineHeight: 1 }}
                  >
                    {number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.12)" }}
                  >
                    <Icon style={{ width: "1.1rem", height: "1.1rem", color: GOLD, strokeWidth: 1.5 }} />
                  </div>
                </div>
                <h3
                  className="font-bold mb-3 leading-tight"
                  style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: NAVY }}
                >
                  {title}
                </h3>
                <div className="mb-5 rounded-full" style={{ width: "2.5rem", height: "2px", backgroundColor: GOLD }} />
                <p className="text-base leading-relaxed" style={{ color: MUTED }}>{body}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — GALLERY
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <div className="text-center mb-14">
            <SectionLabel>VISUAL TOUR</SectionLabel>
            <h2
              className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}
            >
              Gallery
            </h2>
            <GoldDivider />
            <p className="text-sm" style={{ color: MUTED }}>
              Click any image to view full screen
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {GALLERY.map((img, i) => (
              <button
                key={i}
                className={`relative overflow-hidden group focus:outline-none rounded-xl ${i === 0 ? "sm:col-span-2 sm:row-span-1" : ""}`}
                style={{ aspectRatio: i === 0 ? "16/7" : "4/3" }}
                onClick={() => openLightbox(i)}
                aria-label={`View ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(8,14,32,0.78) 0%, transparent 55%)" }}
                >
                  <span
                    className="text-xs font-bold tracking-widest mb-1 self-start px-2 py-0.5 rounded"
                    style={{ backgroundColor: GOLD, color: "#fff" }}
                  >
                    {img.category}
                  </span>
                  <p className="text-white text-sm font-medium text-left">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: "oklch(0.65 0.02 255)" }}>
            Additional project photography will be added as construction progresses.
          </p>
        </div>
      </section>

      <Lightbox
        images={GALLERY}
        index={lightboxIdx ?? 0}
        open={lightboxIdx !== null}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — LOCATION / LIFESTYLE + TARGET AUDIENCE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>LOCATION & LIFESTYLE</SectionLabel>
            <h2
              className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#ffffff" }}
            >
              Everything Within Reach
            </h2>
            <div className="mx-auto mb-0 rounded-full" style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD, marginTop: "1.5rem" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Nearby landmarks */}
            <div
              className="rounded-xl p-8"
              style={{ backgroundColor: "oklch(0.20 0.04 255)", border: "1px solid oklch(0.30 0.04 255)" }}
            >
              <p className="text-xs font-bold tracking-widest mb-5 uppercase" style={{ color: GOLD }}>
                Nearby
              </p>
              {[
                { name: "Hadassah Medical Centre", dist: "5 min" },
                { name: "Malha Mall", dist: "7 min" },
                { name: "Teddy Stadium", dist: "8 min" },
                { name: "Jerusalem Biblical Zoo", dist: "6 min" },
                { name: "Jerusalem Light Rail", dist: "Walking distance" },
                { name: "Begin Highway", dist: "Direct access" },
              ].map(({ name, dist }) => (
                <div
                  key={name}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid oklch(0.28 0.04 255)" }}
                >
                  <span className="text-sm font-medium text-white">{name}</span>
                  <span className="text-xs" style={{ color: GOLD }}>{dist}</span>
                </div>
              ))}
            </div>

            {/* Who is this for */}
            <div className="flex flex-col justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
              >
                <Users style={{ width: "1.5rem", height: "1.5rem", color: GOLD, strokeWidth: 1.5 }} />
              </div>
              <p className="text-xs font-bold tracking-widest mb-3 uppercase" style={{ color: GOLD }}>
                Who Is This For?
              </p>
              <h3
                className="font-bold mb-4 leading-tight"
                style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "#ffffff" }}
              >
                A Home for Every Vision
              </h3>
              <div className="mb-5 rounded-full" style={{ width: "2.5rem", height: "2px", backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                Genesis Jerusalem is ideally suited for{" "}
                <strong style={{ color: "#ffffff" }}>religious and traditional families</strong>,{" "}
                <strong style={{ color: "#ffffff" }}>young couples</strong>, and{" "}
                <strong style={{ color: "#ffffff" }}>international buyers</strong> seeking a premium
                home or investment property in one of the world's most iconic cities.
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                Pre-sale pricing available for early registrants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: NAVY }}>
        <div className="container max-w-2xl mx-auto text-center">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#ffffff" }}
          >
            Interested in Genesis Jerusalem?
          </h2>
          <div className="mx-auto mb-8 rounded-full" style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD }} />
          <p className="text-base md:text-lg mb-10 font-light" style={{ color: "rgba(255,255,255,0.78)" }}>
            Contact us today for full details, floor plans, and pre-sale pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:054-731-2118"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200"
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
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200"
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

      {/* Contact Form */}
      <ContactForm
        title="Send Us a Message"
        subtitle="We'll get back to you with full project details and pre-sale pricing as soon as possible."
        showContactInfo
      />

      <Footer />
    </div>
  );
}
