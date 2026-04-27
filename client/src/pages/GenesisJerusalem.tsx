// =============================================================
// MR. ASHKELON — Genesis Jerusalem Project Page
// Design: navy primary (oklch(0.285 0.055 255)), gold secondary (oklch(0.72 0.12 75))
// Georgia serif headings, clean white/cream sections
// Layout: hero → description → key details → highlights → gallery
//         → target audience → final CTA → contact form
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
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// ── Images ────────────────────────────────────────────────────────────────────
const TOWER_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-tower_e784a20d.jpeg";

// Placeholder gallery images (Unsplash — Jerusalem / luxury living / nature)
const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    caption: "Jerusalem Hills — Open Views",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    caption: "Sunset over the Jerusalem skyline",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
    caption: "Park, lake & nature trails nearby",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    caption: "Modern luxury lobby & amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    caption: "Premium finishes throughout",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    caption: "Spacious open-plan living areas",
  },
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

// ── Highlight sections ────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    icon: Mountain,
    title: "Open Views",
    body: "Enjoy breathtaking panoramas of the Jerusalem hills, spectacular sunsets, and the iconic city skyline — all from the comfort of your own home.",
    bg: "oklch(0.975 0.008 80)",
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
    body: "Excellent road and public transport connections to central Jerusalem, the light rail network, and major highways — making every commute effortless.",
    bg: "oklch(0.975 0.008 80)",
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
    body: "Situated in one of Jerusalem's most rapidly developing western neighbourhoods — close to shopping, schools, synagogues, and cultural landmarks.",
    bg: "oklch(0.975 0.008 80)",
  },
];

// ── Colours (shared) ──────────────────────────────────────────────────────────
const NAVY = "oklch(0.285 0.055 255)";
const GOLD = "oklch(0.72 0.12 75)";
const MUTED = "oklch(0.42 0.025 255)";

// ── Divider component ─────────────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div
      className="mx-auto mb-10 rounded-full"
      style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD }}
    />
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
        <img
          src={images[index].src}
          alt={images[index].caption}
          className="w-full max-h-[75vh] object-contain rounded-lg"
        />
        <p className="mt-4 text-sm text-white/70">{images[index].caption}</p>
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
          minHeight: "90vh",
          backgroundImage: `url(${TOWER_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.82) 100%)",
          }}
        />

        {/* PRE-SALE badge */}
        <div className="absolute top-20 left-6 md:left-10 z-10">
          <div
            className="px-4 py-2 font-bold text-xs tracking-widest"
            style={{
              backgroundColor: GOLD,
              color: "#fff",
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
            }}
          >
            PRE-SALE
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 px-6 md:px-14 pb-12 max-w-3xl">
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
            <em style={{ fontStyle: "italic", color: GOLD }}>
              Luxury Living
            </em>
            <br />
            in Western Jerusalem
          </h1>
          <p
            className="text-lg md:text-xl font-light mb-8 max-w-xl"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            28 floors. Premium apartments. Open Jerusalem views.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:054-731-2118"
              className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-base transition-all duration-200 rounded"
              style={{ backgroundColor: NAVY, color: "#fff" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
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
              className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-base transition-all duration-200 rounded"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
                <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.853 6.64L2.667 29.333l6.88-1.813A13.28 13.28 0 0 0 16.003 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.003 2.667zm0 24c-2.16 0-4.267-.587-6.107-1.693l-.44-.267-4.08 1.08 1.093-4-.28-.453A10.613 10.613 0 0 1 5.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.003 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.547h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.827.68.76.24 1.453.213 2 .133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </svg>
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
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: NAVY,
            }}
          >
            About Genesis Jerusalem
          </h2>
          <GoldDivider />
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: MUTED }}
          >
            Genesis is a premium residential tower project located in one of
            Jerusalem's most rapidly developing areas, offering a rare
            combination of open green views, modern infrastructure, and
            excellent connectivity.
          </p>
        </div>
      </section>

      {/* ── 3. KEY DETAILS ──────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.975 0.008 80)" }}
      >
        <div className="container">
          <h2
            className="font-bold text-center mb-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: NAVY,
            }}
          >
            Project Details
          </h2>
          <GoldDivider />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {KEY_DETAILS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-xl transition-all duration-200"
                style={{
                  backgroundColor: "oklch(1 0 0)",
                  border: "1px solid oklch(0.88 0.01 255)",
                }}
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
                  <Icon
                    style={{ width: "1.3rem", height: "1.3rem", color: GOLD, strokeWidth: 1.5 }}
                  />
                </div>
                <span
                  className="text-sm font-semibold text-center leading-snug"
                  style={{ color: NAVY }}
                >
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
            <div
              className={`flex flex-col md:flex-row items-start gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon column */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3 pt-1">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Icon
                    style={{ width: "1.6rem", height: "1.6rem", color: GOLD, strokeWidth: 1.5 }}
                  />
                </div>
              </div>
              {/* Text column */}
              <div>
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                    color: NAVY,
                  }}
                >
                  {title}
                </h3>
                <div
                  className="mb-4 rounded-full"
                  style={{ width: "2.5rem", height: "2px", backgroundColor: GOLD }}
                />
                <p
                  className="text-base leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── 5. IMAGE GALLERY ────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.975 0.008 80)" }}
      >
        <div className="container">
          <h2
            className="font-bold text-center mb-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: NAVY,
            }}
          >
            Gallery
          </h2>
          <GoldDivider />
          <p
            className="text-center text-sm mb-10"
            style={{ color: MUTED }}
          >
            Placeholder images — project photography coming soon
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {GALLERY.map((img, i) => (
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
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
                  }}
                >
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={GALLERY}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* ── 6. TARGET AUDIENCE ──────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.12)" }}
          >
            <Users
              style={{ width: "1.5rem", height: "1.5rem", color: GOLD, strokeWidth: 1.5 }}
            />
          </div>
          <h2
            className="font-bold mb-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: NAVY,
            }}
          >
            Who Is This For?
          </h2>
          <GoldDivider />
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: MUTED }}
          >
            Genesis Jerusalem is ideally suited for{" "}
            <strong style={{ color: NAVY }}>
              religious and traditional families
            </strong>
            ,{" "}
            <strong style={{ color: NAVY }}>young couples</strong>, and{" "}
            <strong style={{ color: NAVY }}>international buyers</strong> seeking
            a premium home or investment property in one of the world's most
            iconic cities.
          </p>
        </div>
      </section>

      {/* ── 7. FINAL CTA ────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: NAVY }}
      >
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#ffffff",
            }}
          >
            Interested in Genesis Jerusalem?
          </h2>
          <div
            className="mx-auto mb-6 rounded-full"
            style={{ width: "3.5rem", height: "3px", backgroundColor: GOLD }}
          />
          <p
            className="text-base md:text-lg mb-10 font-light"
            style={{ color: "rgba(255,255,255,0.80)" }}
          >
            Contact us today for full details, floor plans, and pricing.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:054-731-2118"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base rounded transition-all duration-200"
              style={{ backgroundColor: GOLD, color: "#fff" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
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
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
                <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.853 6.64L2.667 29.333l6.88-1.813A13.28 13.28 0 0 0 16.003 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.003 2.667zm0 24c-2.16 0-4.267-.587-6.107-1.693l-.44-.267-4.08 1.08 1.093-4-.28-.453A10.613 10.613 0 0 1 5.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.003 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.547h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.827.68.76.24 1.453.213 2 .133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </svg>
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
