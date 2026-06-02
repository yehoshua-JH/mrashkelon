
// MR. ASHKELON — NIYA Project Page (Premium Edition)
// Design: navy (oklch(0.285 0.055 255)), gold (oklch(0.72 0.12 75))
// Georgia serif headings — matches Genesis Jerusalem design exactly
// Sections: Hero → Overview → Key Details → Talpiot Future → Amenities → Apartments → Gallery → CTA
// =============================================================

import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Train,
  Trees,
  Bike,
  ShoppingBag,
  Building2,
  Dumbbell,
  Sunset,
  Car,
  BedDouble,
  Package,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  MapPin,
  Zap,
  Star,
} from "lucide-react";

// ── Colours ───────────────────────────────────────────────────────────────────
const NAVY   = "oklch(0.285 0.055 255)";
const GOLD   = "oklch(0.72 0.12 75)";
const MUTED  = "oklch(0.42 0.025 255)";
const CREAM  = "oklch(0.975 0.008 80)";
const DARK   = "oklch(0.16 0.04 255)";

// ── Images ────────────────────────────────────────────────────────────────────
// User-provided clean aerial night photo (cropped)
const HERO_IMAGE       = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/GqRNOhqlqVpCcFPn.png";
const AERIAL_NIGHT     = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/GqRNOhqlqVpCcFPn.png";
const PLAYGROUND       = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/jUpFXvPOmHiTwzRX.jpg";
const ROOFTOP          = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/IijdyueCNfVbXDJq.jpg";
const COURTYARD        = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/gfcClugcMwVycJVP.jpg";
const PENTHOUSE_BALCONY= "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/EtYSodsDWlgTxlCI.jpg";
const APT_3_ROOM       = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/jWJJNoQppMPmRmpp.webp";
const APT_4_ROOM       = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/rIWCabCStvInvJSn.webp";
const APT_5_ROOM       = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/lUFLIyUSWxweumyH.webp";

// ── Gallery ───────────────────────────────────────────────────────────────────
const GALLERY = [
  { src: AERIAL_NIGHT,       caption: "NIYA towers — aerial night render",        category: "Exterior"  },
  { src: COURTYARD,          caption: "Green courtyard between the towers",        category: "Amenities" },
  { src: PLAYGROUND,         caption: "Residents' playground and fitness park",    category: "Amenities" },
  { src: ROOFTOP,            caption: "Rooftop terrace — 400 m² communal space",  category: "Amenities" },
  { src: PENTHOUSE_BALCONY,  caption: "Penthouse balcony — Jerusalem views",       category: "Interior"  },
  { src: APT_3_ROOM,         caption: "3-Room apartment interior",                 category: "Interior"  },
  { src: APT_4_ROOM,         caption: "4-Room apartment interior",                 category: "Interior"  },
  { src: APT_5_ROOM,         caption: "5-Room apartment interior",                 category: "Interior"  },
];

// ── Key Details ───────────────────────────────────────────────────────────────
const KEY_DETAILS = [
  { icon: Building2,  label: "30-Floor Tower",         sub: "Residential & Commercial" },
  { icon: BedDouble,  label: "3, 4 & 5 Rooms",         sub: "Apartment sizes"          },
  { icon: Package,    label: "Storage Room",            sub: "Private storage"          },
  { icon: Car,        label: "Underground Parking",     sub: "Secure & covered"         },
  { icon: Train,      label: "2 Light Rail Stops",      sub: "Direct access"            },
  { icon: MapPin,     label: "Talpiot, Jerusalem",      sub: "Urban renewal zone"       },
];

// ── Talpiot Future Points ─────────────────────────────────────────────────────
const FUTURE_POINTS = [
  { Icon: Building2,   title: "Stylish Residential Complexes",  text: "Modern residential complexes designed for a contemporary lifestyle, setting a new standard for Jerusalem living." },
  { Icon: ShoppingBag, title: "Entertainment & Shopping",        text: "Entertainment boulevards, cafés, and shopping centres providing a vibrant urban living experience at your doorstep." },
  { Icon: Zap,         title: "Advanced Business Centres",       text: "State-of-the-art commercial and employment centres creating a vibrant business environment and endless opportunities." },
  { Icon: Bike,        title: "Green Parks & Bike Paths",        text: "Green parks, bike paths, and quality leisure areas that preserve a peaceful atmosphere within the city." },
  { Icon: Train,       title: "Light Rail Access",               text: "Excellent public transportation accessibility, including quick access to the light rail — connecting you to all of Jerusalem." },
];

// ── Highlights ────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    icon: Sunset,
    number: "01",
    title: "Rooftop Living",
    body: "A 400 m² rooftop terrace on the commercial building — timber deck, pergolas, outdoor kitchen, and a Sukkah-ready space. The perfect communal retreat above the Jerusalem skyline.",
    image: ROOFTOP,
  },
  {
    icon: Trees,
    number: "02",
    title: "Green Courtyard",
    body: "A beautifully landscaped courtyard between the towers, with walking paths, seating areas, and lush greenery — a private oasis in the heart of the city.",
    image: COURTYARD,
  },
  {
    icon: Dumbbell,
    number: "03",
    title: "Sportive Life",
    body: "A dedicated residents' fitness park and playground, designed for active families and individuals who want to stay healthy without leaving home.",
    image: PLAYGROUND,
  },
];

// ── Apartment Cards ───────────────────────────────────────────────────────────
const APARTMENTS = [
  { rooms: "3", image: APT_3_ROOM, slug: "niya-3-room", area: "From 75 m²", badge: "Available" },
  { rooms: "4", image: APT_4_ROOM, slug: "niya-4-room", area: "From 95 m²", badge: "Available" },
  { rooms: "5", image: APT_5_ROOM, slug: "niya-5-room", area: "From 120 m²", badge: "Penthouse" },
];

// ── Shared UI Components ──────────────────────────────────────────────────────
function GoldDivider({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div
      className={`my-5 rounded-full ${align === "center" ? "mx-auto" : ""}`}
      style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.2em] mb-3 uppercase" style={{ color: GOLD }}>
      {children}
    </p>
  );
}

function WASvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Premium Lightbox ──────────────────────────────────────────────────────────
function Lightbox({
  images, index, open, onClose, onPrev, onNext,
}: {
  images: typeof GALLERY; index: number; open: boolean;
  onClose: () => void; onPrev: () => void; onNext: () => void;
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
          maxWidth: "90vw", width: "90vw", maxHeight: "92vh",
          background: "rgba(4, 8, 20, 0.97)", backdropFilter: "blur(8px)",
          borderRadius: "12px", boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
        }}
      >
        <VisuallyHidden><DialogTitle>Gallery Image {index + 1}</DialogTitle></VisuallyHidden>
        <button
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={onClose} aria-label="Close gallery"
        ><X size={18} /></button>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
          {index + 1} / {images.length}
        </div>
        <div className="flex items-center justify-center w-full" style={{ minHeight: "60vh", maxHeight: "80vh", padding: "3.5rem 4.5rem" }}>
          <img key={img.src} src={img.src} alt={img.caption}
            style={{ maxWidth: "100%", maxHeight: "74vh", objectFit: "contain", borderRadius: "8px", display: "block", margin: "0 auto" }}
          />
        </div>
        <div className="flex items-center justify-center gap-3 pb-5 px-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.9rem" }}>
          <span className="text-xs font-bold tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: GOLD, color: "#fff" }}>{img.category}</span>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{img.caption}</p>
        </div>
        <button className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous image"
        ><ChevronLeft size={22} /></button>
        <button className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
          onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next image"
        ><ChevronRight size={22} /></button>
      </DialogContent>
    </Dialog>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function NiyaProject() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const openLightbox  = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = useCallback(() =>
    setLightboxIdx((i) => (i === null ? 0 : (i - 1 + GALLERY.length) % GALLERY.length)), []);
  const nextImage = useCallback(() =>
    setLightboxIdx((i) => (i === null ? 0 : (i + 1) % GALLERY.length)), []);

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
          minHeight: "100vh",
          backgroundImage: `linear-gradient(to bottom, rgba(8,14,32,0.30) 0%, rgba(8,14,32,0.78) 80%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Gold shimmer overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 65% 25%, oklch(0.72 0.12 75 / 0.07) 0%, transparent 55%)" }}
        />

        {/* Hero content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-14 pb-8 md:pb-12 max-w-4xl">
          {/* Badges row */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="px-5 py-2 text-xs font-bold tracking-[0.18em]"
              style={{ backgroundColor: GOLD, color: "#fff" }}>
              PRE-SALE NOW OPEN
            </div>
            <div className="px-4 py-2 text-xs font-bold tracking-[0.15em]"
              style={{ backgroundColor: "rgba(255,255,255,0.10)", color: GOLD, border: `1px solid ${GOLD}` }}>
              TALPIOT, JERUSALEM
            </div>
            <div className="px-4 py-2 text-xs font-bold tracking-[0.15em]"
              style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.25)" }}>
              BY CARSO
            </div>
          </div>

          <SectionLabel>NIYA</SectionLabel>
          <h1 className="font-bold leading-[1.08] mb-5"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#ffffff" }}>
            Your Next Step to
            <br />
            <em style={{ fontStyle: "italic", color: GOLD }}>The Future</em>
            <br />
            in Jerusalem
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
            A landmark residential project in the heart of Jerusalem's most exciting urban renewal.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: "30", label: "Floors" },
              { value: "3–5", label: "Room Apartments" },
              { value: "2", label: "Light Rail Stops" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-3xl font-bold" style={{ fontFamily: "Georgia, serif", color: GOLD }}>{value}</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200"
              style={{ backgroundColor: GOLD, color: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
              Enquire Now <ArrowRight size={16} />
            </a>
            <a href="https://wa.me/972547312118" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
              <WASvg />
              WhatsApp
            </a>
            <a href="#apartments"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.30)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.12)")}>
              View Apartments
            </a>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, oklch(1 0 0))" }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="py-12" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>OVERVIEW</SectionLabel>
              <h2 className="font-bold mb-4 leading-tight"
                style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}>
                About NIYA
              </h2>
              <GoldDivider align="left" />
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: MUTED }}>
                NIYA is a beautifully designed residential and commercial complex rising 30 floors
                above Talpiot — one of Jerusalem's fastest-growing urban renewal zones. Developed
                by Carso, it combines modern architecture with premium finishes and a vibrant
                community atmosphere.
              </p>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>
                With direct access to two light rail stops, green parks, entertainment boulevards,
                and advanced business centres, NIYA places you at the centre of Jerusalem's future.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src={HERO_IMAGE}
                alt="NIYA towers aerial night view"
                className="w-full rounded-xl object-cover"
                fetchPriority="high"
                loading="eager"
                style={{ maxHeight: "420px", boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
              />
              <div className="inline-flex items-center gap-4 px-5 py-3 rounded-lg self-start"
                style={{ backgroundColor: NAVY, boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
                <p className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>Status</p>
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
            <h2 className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}>
              Project Details
            </h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {KEY_DETAILS.map(({ icon: Icon, label, sub }) => (
              <div key={label}
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
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.10)" }}>
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
          SECTION 4 — TALPIOT FUTURE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "oklch(0.22 0.06 240)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>THE NEIGHBOURHOOD</SectionLabel>
            <h2 className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#ffffff" }}>
              The Restored Talpiot Neighbourhood<br />
              <em style={{ fontStyle: "italic", color: GOLD }}>is Building a Future in Jerusalem</em>
            </h2>
            <div className="mx-auto mb-0 rounded-full" style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD, marginTop: "1.5rem" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="rounded-xl p-8"
              style={{ backgroundColor: "oklch(0.20 0.04 255)", border: "1px solid oklch(0.30 0.04 255)" }}>
              <p className="text-xs font-bold tracking-widest mb-5 uppercase" style={{ color: GOLD }}>
                Urban Renewal
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                The restoration of the neighbourhood includes state-of-the-art planning,
                international inspiration and a combination of uses that have never been seen
                before in Jerusalem.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Urban renewal is expected to turn this area into a new and dynamic community,
                creating a residential space whose value will only continue to grow over the years.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ minHeight: "280px" }}>
              <img src={COURTYARD} alt="Talpiot urban renewal" className="w-full h-full object-cover"
                style={{ minHeight: "280px" }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FUTURE_POINTS.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-xl p-6"
                style={{ backgroundColor: "oklch(0.20 0.04 255)", border: "1px solid oklch(0.30 0.04 255)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}>
                  <Icon style={{ width: "1.1rem", height: "1.1rem", color: GOLD, strokeWidth: 1.5 }} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#ffffff" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — HIGHLIGHTS (alternating image/text)
      ══════════════════════════════════════════════════════ */}
      <section className="py-6" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="text-center mb-14 pt-16">
            <SectionLabel>WHY NIYA</SectionLabel>
            <h2 className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}>
              Highlights
            </h2>
            <GoldDivider />
          </div>
        </div>

        {HIGHLIGHTS.map(({ icon: Icon, number, title, body, image }, idx) => (
          <div key={title}
            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            style={{ minHeight: "420px" }}>
            {/* Image half */}
            <div className="w-full md:w-1/2 relative overflow-hidden" style={{ minHeight: "300px" }}>
              <img src={image} alt={title} className="w-full h-full object-cover" style={{ minHeight: "300px" }} />
              <div className="absolute inset-0" style={{
                background: idx % 2 === 0
                  ? "linear-gradient(to right, transparent 60%, oklch(1 0 0))"
                  : "linear-gradient(to left, transparent 60%, oklch(1 0 0))",
              }} />
            </div>
            {/* Text half */}
            <div className={`w-full md:w-1/2 flex items-center px-8 md:px-14 py-14`}
              style={{ backgroundColor: "oklch(1 0 0)" }}>
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl font-bold"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.88 0.02 255)", lineHeight: 1 }}>
                    {number}
                  </span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.12)" }}>
                    <Icon style={{ width: "1.1rem", height: "1.1rem", color: GOLD, strokeWidth: 1.5 }} />
                  </div>
                </div>
                <h3 className="font-bold mb-3 leading-tight"
                  style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: NAVY }}>
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
          SECTION 6 — APARTMENTS
      ══════════════════════════════════════════════════════ */}
      <section id="apartments" className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <div className="text-center mb-14">
            <SectionLabel>THE APARTMENTS</SectionLabel>
            <h2 className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}>
              Choose Your Home
            </h2>
            <GoldDivider />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {APARTMENTS.map(({ rooms, image, slug, area, badge }) => (
              <div key={rooms} className="rounded-xl overflow-hidden group cursor-pointer"
                style={{ backgroundColor: "oklch(1 0 0)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid oklch(0.90 0.01 255)", transition: "all 0.25s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img src={image} alt={`${rooms}-Room Apartment`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold tracking-widest px-3 py-1 rounded"
                      style={{ backgroundColor: GOLD, color: "#fff" }}>{badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-1"
                    style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", color: NAVY }}>
                    {rooms}-Room Apartment
                  </h3>
                  <p className="text-sm mb-4" style={{ color: MUTED }}>{area} · Talpiot, Jerusalem</p>
                  <Link href={`/property/niya-${rooms}-room`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                    style={{ color: GOLD }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "0.75rem")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "0.5rem")}>
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — GALLERY
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <SectionLabel>VISUAL TOUR</SectionLabel>
            <h2 className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}>
              Gallery
            </h2>
            <GoldDivider />
            <p className="text-sm" style={{ color: MUTED }}>Click any image to view full screen</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {GALLERY.map((img, i) => (
              <button key={i}
                className={`relative overflow-hidden group focus:outline-none rounded-xl ${i === 0 ? "sm:col-span-2 sm:row-span-1" : ""}`}
                style={{ aspectRatio: i === 0 ? "16/7" : "4/3" }}
                onClick={() => openLightbox(i)}
                aria-label={`View ${img.caption}`}>
                <img src={img.src} alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={i < 3 ? "eager" : "lazy"} />
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(8,14,32,0.78) 0%, transparent 55%)" }}>
                  <span className="text-xs font-bold tracking-widest mb-1 self-start px-2 py-0.5 rounded"
                    style={{ backgroundColor: GOLD, color: "#fff" }}>{img.category}</span>
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

      <Lightbox images={GALLERY} index={lightboxIdx ?? 0} open={lightboxIdx !== null}
        onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — LOCATION
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>LOCATION & LIFESTYLE</SectionLabel>
            <h2 className="font-bold"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#ffffff" }}>
              Everything Within Reach
            </h2>
            <div className="mx-auto mb-0 rounded-full" style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD, marginTop: "1.5rem" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="rounded-xl p-8"
              style={{ backgroundColor: "oklch(0.20 0.04 255)", border: "1px solid oklch(0.30 0.04 255)" }}>
              <p className="text-xs font-bold tracking-widest mb-5 uppercase" style={{ color: GOLD }}>Nearby</p>
              {[
                { name: "Malha Mall", dist: "5 min" },
                { name: "Hadassah Medical Centre", dist: "8 min" },
                { name: "Jerusalem Biblical Zoo", dist: "5 min" },
                { name: "Light Rail Station", dist: "2 min walk" },
                { name: "Jerusalem City Centre", dist: "10 min" },
                { name: "Ben Gurion Airport", dist: "45 min" },
              ].map(({ name, dist }) => (
                <div key={name} className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid oklch(0.28 0.04 255)" }}>
                  <div className="flex items-center gap-3">
                    <MapPin style={{ width: "0.9rem", height: "0.9rem", color: GOLD, flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{name}</span>
                  </div>
                  <span className="text-xs font-bold" style={{ color: GOLD }}>{dist}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-8"
              style={{ backgroundColor: "oklch(0.20 0.04 255)", border: "1px solid oklch(0.30 0.04 255)" }}>
              <p className="text-xs font-bold tracking-widest mb-5 uppercase" style={{ color: GOLD }}>Who Is NIYA For?</p>
              {[
                { icon: Star,      label: "Anglo Families",        desc: "Seeking a premium Jerusalem home in a growing community" },
                { icon: Building2, label: "Investors",             desc: "Urban renewal zone with strong capital appreciation potential" },
                { icon: BedDouble, label: "Young Couples",         desc: "Modern apartments with smart home infrastructure" },
                { icon: Trees,     label: "Nature Lovers",         desc: "Green parks, bike paths, and open spaces at your door" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4 py-3"
                  style={{ borderBottom: "1px solid oklch(0.28 0.04 255)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}>
                    <Icon style={{ width: "0.9rem", height: "0.9rem", color: GOLD }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: "#ffffff" }}>{label}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — CONTACT
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2 className="font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: NAVY }}>
              Interested in NIYA?
            </h2>
            <GoldDivider />
            <p className="text-base" style={{ color: MUTED }}>
              Leave your details and our team will be in touch within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
