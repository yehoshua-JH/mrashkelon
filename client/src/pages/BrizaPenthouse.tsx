// =============================================================
// MR. ASHKELON — BrizaPenthouse Page
// Design: navy primary, gold secondary, Georgia serif headings
// Layout: full-width hero → description → features grid →
//         property details → final CTA → contact form
// =============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";
import {
  Sofa,
  ChefHat,
  UtensilsCrossed,
  BedDouble,
  Bed,
  Sun,
  Waves,
  Armchair,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/briza-terrace-hero_e6100fa7.png";

const FLOOR_PLAN =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/briza-floor-plan_a30e3a77.jpg";

// ── Feature items ─────────────────────────────────────────────
const FEATURES = [
  { icon: Sofa, label: "Large living room" },
  { icon: ChefHat, label: "Open kitchen" },
  { icon: UtensilsCrossed, label: "Dining area" },
  { icon: BedDouble, label: "Multiple bedrooms" },
  { icon: Bed, label: "Master bedroom" },
  { icon: Sun, label: "Large terrace" },
  { icon: Waves, label: "Open sea views" },
  { icon: Armchair, label: "Outdoor seating area" },
];

// ── Property detail rows ──────────────────────────────────────
const DETAILS = [
  { label: "Property Type", value: "Penthouse" },
  { label: "Location", value: "Ashkelon" },
  { label: "Project", value: "BRIZA BY EFGAD" },
  { label: "Floor", value: "22" },
  { label: "Rooms", value: "6" },
  { label: "Built Area", value: "~177 m²" },
  { label: "Balcony", value: "70 m²" },
  { label: "Parking", value: "2 underground spaces" },
  { label: "Storage", value: "Storage room included" },
];

export default function BrizaPenthouse() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(1 0 0)" }}>
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section
        className="relative w-full flex flex-col justify-end"
        style={{
          paddingTop: "64px",
          minHeight: "85vh",
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.80) 100%)",
          }}
        />

        {/* BRIZA logo — top left */}
        <div className="absolute top-20 left-6 md:left-10 z-10">
          <div
            className="border-2 p-3 inline-block"
            style={{ borderColor: "oklch(0.72 0.12 75)" }}
          >
            <p
              className="text-xs font-bold tracking-widest leading-tight text-center"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              BRIZA
              <br />
              <span className="font-normal">BY EFGAD</span>
            </p>
          </div>
        </div>

        {/* Headline text — bottom left */}
        <div className="relative z-10 px-6 md:px-12 pb-8">
          <h1
            className="font-bold leading-tight mb-2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              color: "#ffffff",
            }}
          >
            Last Available
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "oklch(0.72 0.12 75)",
              }}
            >
              Stunning
            </em>
            <br />
            Penthouse,
          </h1>
          <p
            className="text-xl md:text-2xl font-light mb-6"
            style={{ color: "rgba(255,255,255,0.90)" }}
          >
            amazing sea views.
          </p>

          {/* CTA button */}
          <a
            href="tel:054-731-2118"
            className="inline-flex items-center gap-3 px-7 py-4 font-semibold text-base transition-all duration-200"
            style={{
              backgroundColor: "oklch(0.35 0.06 200)",
              color: "#ffffff",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(0.42 0.07 200)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(0.35 0.06 200)";
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>
              Call now{" "}
              <span className="font-bold">054 7312 118</span>
            </span>
          </a>
        </div>
      </section>

      {/* ── 1b. FLOOR PLAN IMAGE ─────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.975 0.008 80)" }}>
        <div className="container max-w-4xl mx-auto">
          <h2
            className="font-heading font-bold text-center mb-3"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              color: "oklch(0.285 0.055 255)",
            }}
          >
            Floor Plan
          </h2>
          <div
            className="mx-auto mb-8 rounded-full"
            style={{
              width: "3.5rem",
              height: "3px",
              backgroundColor: "oklch(0.72 0.12 75)",
              margin: "0 auto 2rem",
            }}
          />
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid oklch(0.88 0.01 255)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          >
            <img
              src={FLOOR_PLAN}
              alt="BRIZA BY EFGAD Penthouse Floor Plan"
              className="w-full h-auto block"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. PROPERTY DESCRIPTION ─────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <h2
            className="font-heading font-bold mb-3"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "oklch(0.285 0.055 255)",
            }}
          >
            Property Description
          </h2>
          {/* Gold underline divider */}
          <div
            className="mx-auto mb-8 rounded-full"
            style={{
              width: "3.5rem",
              height: "3px",
              backgroundColor: "oklch(0.72 0.12 75)",
            }}
          />
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "oklch(0.42 0.025 255)" }}
          >
            This penthouse features a large open living space connected to a
            dining area and kitchen. The property includes 6 rooms with a master
            suite, and direct access to a spacious 70 m² terrace with stunning
            open sea views and outdoor seating area.
          </p>
        </div>
      </section>

      {/* ── 3. FEATURES GRID ────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.975 0.008 80)" }}
      >
        <div className="container">
          <h2
            className="font-heading font-bold text-center mb-3"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "oklch(0.285 0.055 255)",
            }}
          >
            Property Features
          </h2>
          <div
            className="mx-auto mb-12 rounded-full"
            style={{
              width: "3.5rem",
              height: "3px",
              backgroundColor: "oklch(0.72 0.12 75)",
              margin: "0 auto 3rem",
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-lg transition-all duration-200 group"
                style={{
                  backgroundColor: "oklch(1 0 0)",
                  border: "1px solid oklch(0.88 0.01 255)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.72 0.12 75)";
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
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.12)" }}
                >
                  <Icon
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "oklch(0.72 0.12 75)",
                      strokeWidth: 1.5,
                    }}
                  />
                </div>
                <span
                  className="text-sm font-medium text-center leading-snug"
                  style={{ color: "oklch(0.285 0.055 255)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROPERTY DETAILS ─────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(1 0 0)" }}>
        <div className="container max-w-2xl mx-auto">
          <h2
            className="font-heading font-bold text-center mb-3"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "oklch(0.285 0.055 255)",
            }}
          >
            Property Details
          </h2>
          <div
            className="mx-auto mb-12 rounded-full"
            style={{
              width: "3.5rem",
              height: "3px",
              backgroundColor: "oklch(0.72 0.12 75)",
              margin: "0 auto 3rem",
            }}
          />

          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid oklch(0.88 0.01 255)" }}
          >
            {DETAILS.map(({ label, value }, i) => (
              <div
                key={label}
                className="flex items-center justify-between px-6 py-4"
                style={{
                  backgroundColor:
                    i % 2 === 0 ? "oklch(1 0 0)" : "oklch(0.975 0.008 80)",
                  borderBottom:
                    i < DETAILS.length - 1
                      ? "1px solid oklch(0.88 0.01 255)"
                      : "none",
                }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "oklch(0.285 0.055 255)" }}
                >
                  {label}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.42 0.025 255)" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CTA ────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: "oklch(0.285 0.055 255)" }}
      >
        <div className="container max-w-xl mx-auto">
          <h2
            className="font-heading font-bold mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "oklch(1 0 0)",
            }}
          >
            Interested in this property?
          </h2>
          <p
            className="mb-8 text-base"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Contact Motti today for more information or to arrange a viewing.
          </p>
          <a
            href="tel:054-731-2118"
            className="inline-flex items-center gap-3 px-8 py-4 rounded font-semibold text-base transition-all duration-200"
            style={{
              backgroundColor: "oklch(0.72 0.12 75)",
              color: "oklch(0.22 0.03 255)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(0.82 0.10 75)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(0.72 0.12 75)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>
              Call now &nbsp;
              <span className="font-bold">054 7312 118</span>
            </span>
          </a>

          <div className="mt-8">
            <Link
              href="/contact"
              className="text-sm underline-offset-2 hover:underline transition-colors"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Or send us a message
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact form ────────────────────────────────────── */}
      <ContactForm
        sourcePage="Briza Penthouse Page"
        title="Send an Enquiry"
        subtitle="Fill in the form below and Motti will get back to you shortly about this property."
      />

      <Footer />
    </div>
  );
}
