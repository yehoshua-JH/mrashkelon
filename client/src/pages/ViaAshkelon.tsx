// =============================================================
// MR. ASHKELON — VIA Ashkelon Project Page
// Design: navy (oklch(0.285 0.055 255)), gold (oklch(0.72 0.12 75))
// Georgia serif headings — matches existing site design exactly
// Sections: Hero → Overview → Key Details → Highlights → Gallery → Location → CTA
// =============================================================

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Building2,
  MapPin,
  Trees,
  Car,
  BedDouble,
  Waves,
  Sun,
  Users,
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// ── Colours ───────────────────────────────────────────────────────────────────
const NAVY  = "oklch(0.285 0.055 255)";
const GOLD  = "oklch(0.72 0.12 75)";
const CREAM = "oklch(0.975 0.008 80)";

// ── Images ────────────────────────────────────────────────────────────────────
const VIA_IMG_1  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/okInSHJEMyVmcUyl.jpg";
const VIA_IMG_2  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/hSRIthNkLNDJisze.jpg";
const VIA_IMG_3  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/TcbRmPsEzUfpygBN.jpg";
const VIA_IMG_4  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/WwyyniAaICiaJSHR.jpg";
const VIA_IMG_5  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/pnjlcJYZEZeMhknM.jpg";
const VIA_IMG_6  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/mGBbVdvrKDDScpvh.jpg";
const VIA_IMG_7  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/kzbEguaIpxZwTBVI.jpg";
const VIA_IMG_8  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/ZYFMcWIWfoBKbGdE.jpg";
const VIA_IMG_9  = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/NxsvIZHCvmosZqya.jpg";
const VIA_IMG_10 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/AMscnCKnrPjLuJOt.jpg";
const HERO_IMAGE = VIA_IMG_1;

const GALLERY: { src: string; caption: string; category: string }[] = [
  { src: VIA_IMG_1,  caption: "VIA Ashkelon — aerial view of the development",       category: "Aerial"   },
  { src: VIA_IMG_2,  caption: "VIA Ashkelon — street view render",                   category: "Exterior" },
  { src: VIA_IMG_3,  caption: "VIA Ashkelon — evening render with pedestrians",      category: "Exterior" },
  { src: VIA_IMG_4,  caption: "VIA Ashkelon — park and garden view",                 category: "Grounds"  },
  { src: VIA_IMG_5,  caption: "VIA Ashkelon — landscaped promenade",                 category: "Grounds"  },
  { src: VIA_IMG_6,  caption: "VIA Ashkelon — building facade detail",               category: "Exterior" },
  { src: VIA_IMG_7,  caption: "VIA Ashkelon — residential complex overview",         category: "Exterior" },
  { src: VIA_IMG_8,  caption: "VIA Ashkelon — daytime street view",                  category: "Exterior" },
  { src: VIA_IMG_9,  caption: "VIA Ashkelon — palm-lined boulevard",                 category: "Grounds"  },
  { src: VIA_IMG_10, caption: "VIA Ashkelon — night render of the development",      category: "Exterior" },
];

// ── Key Details ───────────────────────────────────────────────────────────────
const KEY_DETAILS = [
  { icon: Building2, label: "New Development",     sub: "By Hay Nahmias" },
  { icon: BedDouble, label: "Multiple Room Types", sub: "Apartment sizes" },
  { icon: Car,       label: "Parking Included",    sub: "Private parking" },
  { icon: MapPin,    label: "Ashkelon",             sub: "Mediterranean coast" },
  { icon: Trees,     label: "Green Surroundings",  sub: "Parks & nature" },
  { icon: Waves,     label: "Near the Beach",       sub: "Coastal lifestyle" },
];

// ── Highlights ────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    icon: Waves,
    number: "01",
    title: "Mediterranean Coastal Living",
    body: "VIA Ashkelon places you minutes from the stunning Mediterranean coast. Enjoy year-round beach access, sea breezes, and the relaxed coastal lifestyle that makes Ashkelon one of Israel's most desirable cities.",
    image: VIA_IMG_3,
  },
  {
    icon: Trees,
    number: "02",
    title: "Green Neighbourhood",
    body: "Set within a beautifully landscaped residential neighbourhood, VIA offers a rare combination of modern urban living and natural surroundings — with parks, cycling paths, and open green spaces right at your doorstep.",
    image: VIA_IMG_4,
  },
  {
    icon: Sun,
    number: "03",
    title: "300+ Days of Sunshine",
    body: "Ashkelon enjoys one of Israel's finest climates, with over 300 sunny days per year. Wake up to warm Mediterranean mornings and spend evenings watching the sun set over the sea.",
    image: VIA_IMG_5,
  },
  {
    icon: Users,
    number: "04",
    title: "Thriving Anglo Community",
    body: "Ashkelon is home to a growing and welcoming Anglo community with English-speaking services, social groups, and a strong sense of belonging — making it the ideal destination for English-speaking olim.",
    image: VIA_IMG_6,
  },
  {
    icon: Star,
    number: "05",
    title: "Exceptional Value",
    body: "Property prices in Ashkelon remain significantly lower than Tel Aviv, Jerusalem, or Netanya — offering exceptional value for money without compromising on quality of life or amenities.",
    image: VIA_IMG_7,
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

// ── Lightbox ──────────────────────────────────────────────────────────────────
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
        <button
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={onClose}
          aria-label="Close gallery"
        >
          <X size={18} />
        </button>

        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          {index + 1} / {images.length}
        </div>

        <div className="flex items-center justify-center w-full" style={{ minHeight: "50vh", maxHeight: "80vh", padding: "3rem 1.5rem" }}>
          <img
            key={img.src}
            src={img.src}
            alt={img.caption}
            style={{ maxWidth: "100%", maxHeight: "74vh", objectFit: "contain", borderRadius: "8px", display: "block", margin: "0 auto" }}
          />
        </div>

        <div
          className="flex items-center justify-center gap-3 pb-5 px-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.9rem" }}
        >
          <span className="text-xs font-bold tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: GOLD, color: "#fff" }}>
            {img.category}
          </span>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{img.caption}</p>
        </div>

        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
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
export default function ViaAshkelon() {
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
        className="relative w-full flex flex-col justify-center overflow-hidden"
        style={{
          paddingTop: "64px",
          minHeight: "92vh",
          backgroundImage: `linear-gradient(to bottom, rgba(8,14,32,0.30) 0%, rgba(8,14,32,0.78) 80%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 65% 25%, oklch(0.72 0.12 75 / 0.07) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 px-4 sm:px-6 md:px-14 pb-8 md:pb-12 max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-6">
            <div
              className="px-5 py-2 text-xs font-bold tracking-[0.18em]"
              style={{ backgroundColor: GOLD, color: "#fff" }}
            >
              COMING SOON
            </div>
            <div
              className="px-4 py-2 text-xs font-bold tracking-[0.15em]"
              style={{
                backgroundColor: "rgba(255,255,255,0.10)",
                color: GOLD,
                border: `1px solid ${GOLD}`,
              }}
            >
              ASHKELON
            </div>
          </div>
          <SectionLabel>VIA — ASHKELON PROJECT</SectionLabel>
          <h1
            className="font-bold leading-[1.08] mb-5"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 5.5vw, 4rem)",
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            VIA
            <br />
            <span style={{ color: GOLD }}>Ashkelon</span>
          </h1>
          <p
            className="mb-8 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              maxWidth: "520px",
            }}
          >
            A landmark new residential development by Hay Nahmias in the heart of Ashkelon —
            offering modern apartments with premium finishes in one of Israel's most vibrant
            coastal cities.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold tracking-wide transition-all duration-200"
              style={{
                backgroundColor: GOLD,
                color: "#fff",
                fontFamily: "Georgia, serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Register Interest
            </a>
            <a
              href="https://wa.me/972547770000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold tracking-wide transition-all duration-200"
              style={{
                backgroundColor: "#25D366",
                color: "#fff",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <WASvg />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <div
            className="w-px animate-bounce"
            style={{ height: "2.5rem", backgroundColor: GOLD }}
          />
          <p className="text-xs tracking-[0.2em] text-white uppercase">Scroll</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionLabel>ABOUT THE PROJECT</SectionLabel>
              <h2
                className="font-bold mb-6 leading-tight"
                style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", color: NAVY }}
              >
                A New Standard of Living in Ashkelon
              </h2>
              <GoldDivider align="left" />
              <p className="leading-relaxed mb-5 text-base" style={{ color: "oklch(0.42 0.025 255)" }}>
                VIA is a premium residential development by Hay Nahmias, one of Israel's leading
                real estate developers. Located in Ashkelon — a rapidly growing Mediterranean
                coastal city — VIA offers modern, well-designed apartments in a vibrant and
                established neighbourhood.
              </p>
              <p className="leading-relaxed text-base" style={{ color: "oklch(0.42 0.025 255)" }}>
                With excellent transport links, proximity to the beach, and Ashkelon's thriving
                Anglo community, VIA represents an outstanding opportunity for English-speaking
                buyers looking to invest in Israeli real estate at competitive prices.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div
                  className="px-5 py-3 text-sm font-bold"
                  style={{ backgroundColor: NAVY, color: "#fff" }}
                >
                  Developer: Hay Nahmias
                </div>
                <div
                  className="px-5 py-3 text-sm font-bold"
                  style={{ border: `2px solid ${GOLD}`, color: NAVY }}
                >
                  Location: Ashkelon
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative overflow-hidden cursor-pointer"
              style={{ borderRadius: "4px", boxShadow: "0 20px 60px rgba(0,0,0,0.14)" }}
              onClick={() => openLightbox(0)}
            >
              <img
                src={HERO_IMAGE}
                alt="VIA Ashkelon residential complex"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ aspectRatio: "4/3" }}
              />
              <div
                className="absolute inset-0 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(8,14,32,0.55) 0%, transparent 55%)" }}
              >
                <p className="text-white text-sm font-medium tracking-wide">
                  VIA Ashkelon — aerial render
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — KEY DETAILS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>PROJECT DETAILS</SectionLabel>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: NAVY }}
            >
              What VIA Offers
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {KEY_DETAILS.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  border: `1px solid oklch(0.9 0.01 255)`,
                  borderRadius: "4px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 mb-4 rounded-full"
                  style={{ backgroundColor: `oklch(0.72 0.12 75 / 0.12)` }}
                >
                  <Icon size={22} style={{ color: GOLD }} />
                </div>
                <p className="font-bold text-sm mb-1" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                  {label}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.55 0.02 255)" }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — HIGHLIGHTS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>WHY VIA ASHKELON</SectionLabel>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: NAVY }}
            >
              Life at VIA
            </h2>
            <GoldDivider />
          </div>

          <div className="flex flex-col gap-16">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={h.number}
                  className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Text */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-full"
                        style={{ backgroundColor: `oklch(0.72 0.12 75 / 0.13)` }}
                      >
                        <Icon size={18} style={{ color: GOLD }} />
                      </div>
                      <span
                        className="text-xs font-bold tracking-[0.2em]"
                        style={{ color: GOLD }}
                      >
                        {h.number}
                      </span>
                    </div>
                    <h3
                      className="font-bold mb-4 leading-tight"
                      style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", color: NAVY }}
                    >
                      {h.title}
                    </h3>
                    <p className="leading-relaxed text-base" style={{ color: "oklch(0.42 0.025 255)" }}>
                      {h.body}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className="overflow-hidden cursor-pointer"
                    style={{ borderRadius: "4px", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
                    onClick={() => openLightbox(0)}
                  >
                    <img
                      src={h.image}
                      alt={h.title}
                      className="w-full object-cover transition-transform duration-700 hover:scale-105"
                      style={{ aspectRatio: "16/9" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — GALLERY
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>GALLERY</SectionLabel>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: NAVY }}
            >
              Project Images
            </h2>
            <GoldDivider />
            <p className="text-sm mt-2" style={{ color: "oklch(0.55 0.02 255)" }}>
              Click any image to view full size
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={img.src}
                className="relative overflow-hidden cursor-pointer group"
                style={{ borderRadius: "4px", boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: "16/10" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(8,14,32,0.65) 0%, transparent 55%)" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold tracking-widest px-2 py-0.5 rounded"
                      style={{ backgroundColor: GOLD, color: "#fff" }}
                    >
                      {img.category}
                    </span>
                    <p className="text-white text-xs">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-8 text-sm italic"
            style={{ color: "oklch(0.55 0.02 255)" }}
          >
            More images coming soon — contact us for the full project brochure.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — COMING SOON BANNER
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-28 text-center"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionLabel>STATUS</SectionLabel>
          <h2
            className="font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", color: "#fff" }}
          >
            Coming Soon
          </h2>
          <GoldDivider />
          <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
            VIA Ashkelon is currently in pre-launch. Register your interest now to receive
            priority access to floor plans, pricing, and availability as soon as they are released.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wide transition-all duration-200"
              style={{ backgroundColor: GOLD, color: "#fff", fontFamily: "Georgia, serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Register Interest
            </a>
            <a
              href="https://wa.me/972547770000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wide transition-all duration-200"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <WASvg />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — CONTACT
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: NAVY }}
            >
              Register Your Interest
            </h2>
            <GoldDivider />
            <p className="text-base" style={{ color: "oklch(0.42 0.025 255)" }}>
              Be the first to receive floor plans, pricing, and availability for VIA Ashkelon.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={GALLERY}
          index={lightboxIdx}
          open={lightboxIdx !== null}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <style>{`
        @keyframes galleryFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
