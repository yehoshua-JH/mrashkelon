// =============================================================
// MR. ASHKELON — NIYA Project Page
// Design: warm copper/bronze (#C9956A) on dark charcoal (#1A1A1A)
// Sections: Hero → Jerusalem → Talpiot Future → Amenities → Apartments → CTA
// =============================================================

import { useState, useEffect } from "react";
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
  Waves,
  Car,
  BedDouble,
  Zap,
  Package,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  MapPin,
} from "lucide-react";

// ── Colours ───────────────────────────────────────────────────────────────────
const COPPER = "oklch(0.68 0.10 55)";   // warm copper/bronze
const DARK   = "oklch(0.13 0.01 55)";   // near-black charcoal
const CREAM  = "oklch(0.97 0.008 80)";  // off-white
const MUTED  = "oklch(0.55 0.02 55)";   // muted text

// ── Images ────────────────────────────────────────────────────────────────────
// Clean aerial night photo v2 (user-provided, cropped)
const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/GqRNOhqlqVpCcFPn.png";
// Clean aerial night photo v2 (same as hero)
const BOULEVARD_1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/GqRNOhqlqVpCcFPn.png";
// Page 5 — replaced with courtyard (original had Video watermark)
const BOULEVARD_2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/gfcClugcMwVycJVP.jpg";
// Page 12 — aerial night render of towers (gallery)
const AERIAL_NIGHT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/zgxUOkvJLTWEKcnv.png";
// Page 13 — playground / sportive life
const PLAYGROUND = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/jUpFXvPOmHiTwzRX.jpg";
// Page 15 — rooftop terrace
const ROOFTOP = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/IijdyueCNfVbXDJq.jpg";
// Page 16 — aerial courtyard
const COURTYARD = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/gfcClugcMwVycJVP.jpg";
// Page 23 — penthouse balcony evening
const PENTHOUSE_BALCONY = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/EtYSodsDWlgTxlCI.jpg";

// Apartment interior renders (already used in individual listings)
const APT_3_ROOM = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/jWJJNoQppMPmRmpp.webp";
const APT_4_ROOM = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/rIWCabCStvInvJSn.webp";
const APT_5_ROOM = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/lUFLIyUSWxweumyH.webp";

// ── Gallery ───────────────────────────────────────────────────────────────────
const GALLERY = [
  { src: AERIAL_NIGHT,      caption: "NIYA towers — aerial night render",          category: "Exterior" },
  { src: BOULEVARD_1,       caption: "NIYA courtyard and green spaces",            category: "Amenities" },
  { src: PLAYGROUND,        caption: "Residents' playground and fitness park",      category: "Amenities" },
  { src: ROOFTOP,           caption: "Rooftop terrace — 400 m² communal space",    category: "Amenities" },
  { src: COURTYARD,         caption: "Green courtyard between buildings",           category: "Amenities" },
  { src: PENTHOUSE_BALCONY, caption: "Penthouse balcony — Jerusalem views",         category: "Interior" },
  { src: APT_3_ROOM,        caption: "3-Room apartment interior",                  category: "Interior" },
  { src: APT_4_ROOM,        caption: "4-Room apartment interior",                  category: "Interior" },
  { src: APT_5_ROOM,        caption: "5-Room apartment interior",                  category: "Interior" },
];

// ── Talpiot Future Points ─────────────────────────────────────────────────────
const FUTURE_POINTS = [
  { Icon: Building2,   title: "Stylish Residential Complexes",    text: "Modern residential complexes designed for a contemporary lifestyle, setting a new standard for Jerusalem living." },
  { Icon: ShoppingBag, title: "Entertainment & Shopping",         text: "Entertainment boulevards, cafés, and shopping centres providing a vibrant urban living experience at your doorstep." },
  { Icon: Bike,        title: "Green Parks & Bike Paths",         text: "Green parks, bike paths, and quality leisure areas that preserve a peaceful atmosphere within the city." },
  { Icon: Train,       title: "Light Rail Access",                text: "Excellent public transportation accessibility, including quick access to 2 light rail routes connecting the whole city." },
  { Icon: Trees,       title: "Urban Renewal",                    text: "Urban renewal transforming Talpiot into a new and dynamic community whose value will only continue to grow over the years." },
];

// ── Amenities ─────────────────────────────────────────────────────────────────
const AMENITIES = [
  {
    icon: Dumbbell,
    title: "Progress to a More Sportive Life",
    body: "A fully equipped gym, green interior spaces, and a dedicated playground and fitness park — everything you need to stay active without leaving home.",
    image: PLAYGROUND,
  },
  {
    icon: Sunset,
    title: "Progress to a More Communal Life",
    body: "A stunning 400 m² rooftop terrace with timber decking, pergolas (Sukkah), and an exterior kitchen — the perfect space for community gatherings and celebrations.",
    image: ROOFTOP,
  },
  {
    icon: Waves,
    title: "Progress to the New Standard of Living",
    body: "Apartments with optimal planning, ornate lobbies, a residents' lounge, fast elevators, and the highest standard of construction throughout.",
    image: COURTYARD,
  },
];

// ── Apartments ────────────────────────────────────────────────────────────────
const APARTMENTS = [
  {
    slug: "niya-3em7",
    title: "3 Rooms",
    type: "Type 3E-M7",
    size: "88 m²",
    balcony: "12 m²",
    bathrooms: "2",
    image: APT_3_ROOM,
    highlights: ["88 m² apartment", "12 m² balcony", "2 bathrooms", "Central AC", "EV parking"],
  },
  {
    slug: "niya-4g-m6-m16",
    title: "4 Rooms",
    type: "Type 4G-M6+M16",
    size: "111 m²",
    balcony: "20 m² + 3.9 m²",
    bathrooms: "2",
    image: APT_4_ROOM,
    highlights: ["111 m² apartment", "Two balconies", "2 bathrooms", "Central AC", "EV parking"],
  },
  {
    slug: "niya-5c-m6-m16-m15",
    title: "5 Rooms",
    type: "Type 5C-M6+M16+M15",
    size: "134 m²",
    balcony: "3 balconies",
    bathrooms: "3",
    image: APT_5_ROOM,
    highlights: ["134 m² apartment", "3 balconies", "3 bathrooms", "Inverter AC", "EV parking"],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function CopperDivider({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div
      className={`mb-8 rounded-full ${align === "left" ? "" : "mx-auto"}`}
      style={{ width: "3.5rem", height: "3px", backgroundColor: COPPER }}
    />
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-xs font-bold tracking-[0.2em] mb-3 uppercase"
      style={{ color: light ? "rgba(255,255,255,0.55)" : COPPER }}
    >
      {children}
    </p>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  images, index, open, onClose, onPrev, onNext,
}: {
  images: typeof GALLERY; index: number; open: boolean;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const img = images[index];
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onPrev, onNext]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="p-0 border-none overflow-hidden"
        style={{ maxWidth: "90vw", width: "90vw", maxHeight: "92vh", background: "rgba(4,4,8,0.97)", backdropFilter: "blur(8px)", borderRadius: "12px" }}
      >
        <VisuallyHidden><DialogTitle>Image Gallery</DialogTitle></VisuallyHidden>
        <button
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onClick={onClose}
        ><X size={18} /></button>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
          {index + 1} / {images.length}
        </div>
        <div className="flex items-center justify-center w-full" style={{ minHeight: "60vh", maxHeight: "80vh", padding: "3.5rem 4.5rem" }}>
          <img key={img.src} src={img.src} alt={img.caption}
            style={{ maxWidth: "100%", maxHeight: "74vh", objectFit: "contain", borderRadius: "8px", display: "block", margin: "0 auto" }} />
        </div>
        <div className="flex items-center justify-center gap-3 pb-5 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.9rem" }}>
          <span className="text-xs font-bold tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: COPPER, color: "#fff" }}>{img.category}</span>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{img.caption}</p>
        </div>
        <button className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}><ChevronLeft size={22} /></button>
        <button className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
          onClick={(e) => { e.stopPropagation(); onNext(); }}><ChevronRight size={22} /></button>
      </DialogContent>
    </Dialog>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function NiyaProject() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + GALLERY.length) % GALLERY.length));
  const nextImage = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % GALLERY.length));

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative w-full flex flex-col justify-end"
        style={{
          paddingTop: "64px",
          minHeight: "95vh",
          backgroundImage: `linear-gradient(to bottom, rgba(10,8,6,0.25) 0%, rgba(10,8,6,0.85) 100%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "scroll",
        }}
      >
        {/* Copper shimmer */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 30%, oklch(0.68 0.10 55 / 0.08) 0%, transparent 55%)" }} />

        <div className="relative z-10 px-6 sm:px-10 md:px-16 pb-16 md:pb-20 max-w-5xl">
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="px-5 py-2 text-xs font-bold tracking-[0.18em]"
              style={{ backgroundColor: COPPER, color: "#fff" }}>
              PRE-SALE NOW OPEN
            </div>
            <div className="px-4 py-2 text-xs font-bold tracking-[0.15em]"
              style={{ backgroundColor: "rgba(255,255,255,0.10)", color: COPPER, border: `1px solid ${COPPER}` }}>
              TALPIOT, JERUSALEM
            </div>
          </div>

          <SectionLabel light>BY CARSO</SectionLabel>
          <h1
            className="font-bold leading-[1.05] mb-5 text-white"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            NIYA
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Your next step to the future. A landmark residential project in the heart of Jerusalem's most exciting urban renewal.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#apartments"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide transition-all duration-200"
              style={{ backgroundColor: COPPER, color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Apartments <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide transition-all duration-200"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-10 animate-pulse" style={{ backgroundColor: COPPER }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — JERUSALEM INTRO
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <SectionLabel light>THE CITY</SectionLabel>
              <h2 className="font-bold mb-6 text-white" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Jerusalem
              </h2>
              <CopperDivider align="left" />
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.70)" }}>
                A city integrating exciting history, a glorious present, and a promising future. Jerusalem is progressing at speed and invites you to progress together with it.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                The restoration of the Talpiot neighbourhood includes state-of-the-art planning, international inspiration, and a combination of uses that have never been seen before in Jerusalem — a beautifully designed residential and commercial complex, green parks, entertainment avenues, and easy access to 2 light railway routes.
              </p>
            </div>
            <div className="relative">
              <img
                src={BOULEVARD_1}
                alt="Talpiot neighbourhood render"
                className="w-full rounded-lg object-cover"
                style={{ height: "400px" }}
              />
              <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded"
                style={{ backgroundColor: COPPER }}>
                <p className="text-white font-bold text-sm tracking-wide">Talpiot, Jerusalem</p>
                <p className="text-white/80 text-xs">Urban Renewal Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — YOUR NEXT STEP TO THE FUTURE
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <SectionLabel>THE NEIGHBOURHOOD</SectionLabel>
            <h2 className="font-bold mb-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: DARK }}>
              Your Next Step to the Future
            </h2>
            <CopperDivider />
            <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: MUTED }}>
              The Talpiot neighbourhood is undergoing a broad urban renewal process that is transforming it into one of the leading neighbourhoods in Jerusalem.
            </p>
          </div>

          {/* Two-column image + points */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              {FUTURE_POINTS.map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `oklch(0.68 0.10 55 / 0.12)` }}>
                    <Icon size={18} style={{ color: COPPER }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: DARK }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={BOULEVARD_1} alt="Talpiot boulevard" className="rounded-lg object-cover w-full col-span-2" style={{ height: "220px" }} />
              <img src={BOULEVARD_2} alt="Talpiot bike lane" className="rounded-lg object-cover w-full" style={{ height: "160px" }} />
              <img src={COURTYARD} alt="NIYA courtyard" className="rounded-lg object-cover w-full" style={{ height: "160px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — AMENITIES (3 feature panels)
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <SectionLabel light>LIFE AT NIYA</SectionLabel>
            <h2 className="font-bold mb-4 text-white" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Progress to a Better Life
            </h2>
            <CopperDivider />
          </div>

          <div className="space-y-16">
            {AMENITIES.map(({ icon: Icon, title, body, image }, idx) => (
              <div
                key={title}
                className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `oklch(0.68 0.10 55 / 0.15)` }}>
                      <Icon size={18} style={{ color: COPPER }} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: COPPER }}>
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-bold mb-4 text-white" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}>
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>{body}</p>
                </div>
                <div className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <img
                    src={image}
                    alt={title}
                    className="w-full rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ height: "320px" }}
                    onClick={() => openLightbox(GALLERY.findIndex(g => g.src === image))}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — THE APARTMENTS
      ══════════════════════════════════════════════════════ */}
      <section id="apartments" className="py-20 md:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <SectionLabel>AVAILABLE NOW</SectionLabel>
            <h2 className="font-bold mb-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: DARK }}>
              The Apartments
            </h2>
            <CopperDivider />
            <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: MUTED }}>
              Three apartment types designed for modern living — each with private parking, EV charging, storage room, and premium finishes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {APARTMENTS.map((apt) => (
              <div
                key={apt.slug}
                className="group rounded-xl overflow-hidden flex flex-col"
                style={{ backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={apt.image}
                    alt={apt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 text-xs font-bold tracking-wide rounded"
                    style={{ backgroundColor: COPPER, color: "#fff" }}>
                    {apt.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold mb-1" style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", color: DARK }}>
                    NIYA — {apt.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: MUTED }}>Talpiot, Jerusalem</p>

                  {/* Specs row */}
                  <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                    <div className="py-2 rounded" style={{ backgroundColor: `oklch(0.68 0.10 55 / 0.08)` }}>
                      <p className="text-xs font-bold" style={{ color: COPPER }}>{apt.size}</p>
                      <p className="text-xs" style={{ color: MUTED }}>Size</p>
                    </div>
                    <div className="py-2 rounded" style={{ backgroundColor: `oklch(0.68 0.10 55 / 0.08)` }}>
                      <p className="text-xs font-bold" style={{ color: COPPER }}>{apt.bathrooms}</p>
                      <p className="text-xs" style={{ color: MUTED }}>Bathrooms</p>
                    </div>
                    <div className="py-2 rounded" style={{ backgroundColor: `oklch(0.68 0.10 55 / 0.08)` }}>
                      <p className="text-xs font-bold truncate" style={{ color: COPPER }}>{apt.balcony}</p>
                      <p className="text-xs" style={{ color: MUTED }}>Balcony</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {apt.highlights.map((h) => (
                      <span key={h} className="text-xs px-2 py-0.5 rounded-full border"
                        style={{ borderColor: `oklch(0.68 0.10 55 / 0.30)`, color: MUTED }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Link
                      href={`/property/${apt.slug}`}
                      className="flex-1 text-center py-2.5 text-sm font-semibold rounded transition-all"
                      style={{ backgroundColor: COPPER, color: "#fff" }}
                    >
                      View Details
                    </Link>
                    <a
                      href="#contact"
                      className="flex-1 text-center py-2.5 text-sm font-semibold rounded border transition-all"
                      style={{ borderColor: COPPER, color: COPPER }}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — GALLERY
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel light>GALLERY</SectionLabel>
            <h2 className="font-bold text-white" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              See NIYA
            </h2>
            <CopperDivider />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="relative overflow-hidden rounded-lg group focus:outline-none"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />

              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — KEY DETAILS STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="py-14" style={{ backgroundColor: COPPER }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: Building2, label: "5 Buildings",       sub: "A, B, D, E, F" },
              { icon: BedDouble, label: "3, 4 & 5 Rooms",   sub: "Apartment types" },
              { icon: Car,       label: "EV Parking",        sub: "Every apartment" },
              { icon: MapPin,    label: "Talpiot",           sub: "Jerusalem" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={22} className="opacity-80" />
                <p className="font-bold text-sm tracking-wide">{label}</p>
                <p className="text-xs opacity-70">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — CONTACT
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2 className="font-bold mb-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: DARK }}>
              Interested in NIYA?
            </h2>
            <CopperDivider />
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              Contact us for pricing, floor plans, and a private consultation. Our team is ready to guide you through every step.
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
    </div>
  );
}
