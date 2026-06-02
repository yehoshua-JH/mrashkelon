// MR. ASHKELON — Featured Properties Listing Page
// Two sections: "New Projects" (pre-sale) and "Available Properties" (existing)
// Mobile-first responsive layout
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES } from "@/lib/data";
import { Button } from "@/components/ui/button";

const NAVY = "oklch(0.285 0.055 255)";
const GOLD = "oklch(0.72 0.12 75)";

// ── NIYA project card constants ───────────────────────────────────────────────
const NIYA_HERO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/GqRNOhqlqVpCcFPn.png";
const NIYA_GALLERY = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/gfcClugcMwVycJVP.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/jWJJNoQppMPmRmpp.webp",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/rIWCabCStvInvJSn.webp",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/lUFLIyUSWxweumyH.webp",
];
const NIYA_SLUGS = ["niya-3em7", "niya-4g-m6-m16", "niya-5c-m6-m16-m15"];
const GENESIS_SLUG = "genesis-jerusalem";

// ── NIYA Project Card ─────────────────────────────────────────────────────────
function NiyaProjectCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden border-2" style={{ borderColor: GOLD }}>
      {/* Header */}
      <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
        <h2
          className="font-bold"
          style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: NAVY }}
        >
          NIYA
        </h2>
        <span
          className="px-3 py-1 text-xs font-bold tracking-[0.12em] uppercase rounded-full text-white"
          style={{ backgroundColor: GOLD }}
        >
          Pre-Sale Open
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row gap-6 p-5 sm:p-8">
        {/* Left: description + specs + CTAs */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-gray-600 leading-relaxed text-sm">
            A landmark residential project by Carso in the heart of Talpiot, Jerusalem — one of the city's most exciting urban renewal zones. NIYA offers 3, 4, and 5-room apartments with premium finishes, EV parking, rooftop terraces, and direct access to the new light rail.
          </p>

          {/* Key specs */}
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2">
              {[
                ["Developer", "Carso"],
                ["Location", "Talpiot, Jerusalem"],
                ["Apartments", "3, 4 & 5 Rooms"],
                ["Parking", "Private + EV charging"],
                ["Transport", "2 Light Rail routes"],
                ["Status", "Pre-Sale Now Open"],
              ].map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{key}</span>
                  <span className="text-sm font-medium" style={{ color: NAVY }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm font-semibold" style={{ color: GOLD }}>
            Contact us for pricing and availability.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-md px-5 sm:px-6 font-semibold text-white text-sm"
              style={{ backgroundColor: GOLD }}
            >
              <Link href="/niya">View Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-md px-5 sm:px-6 font-semibold text-sm"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Right: images */}
        <div className="w-full md:w-[300px] lg:w-[340px] flex-shrink-0">
          <img
            src={NIYA_HERO}
            alt="NIYA Jerusalem — aerial night render"
            className="w-full object-cover rounded-lg mb-2"
            style={{ height: "clamp(160px, 25vw, 176px)" }}
            loading="eager"
            decoding="async"
          />
          <div className="grid grid-cols-3 gap-2">
            {NIYA_GALLERY.slice(1, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`NIYA apartment ${i + 1}`}
                className="w-full object-cover rounded-lg"
                style={{ height: "clamp(64px, 12vw, 96px)" }}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Genesis Project Card ──────────────────────────────────────────────────────
function GenesisProjectCard() {
  const genesis = PROPERTIES.find((p) => p.slug === GENESIS_SLUG);
  if (!genesis) return null;
  const thumbs = genesis.galleryImages.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden border-2" style={{ borderColor: GOLD }}>
      {/* Header */}
      <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
        <h2
          className="font-bold"
          style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: NAVY }}
        >
          Genesis — Jerusalem Project
        </h2>
        <span
          className="px-3 py-1 text-xs font-bold tracking-[0.12em] uppercase rounded-full text-white"
          style={{ backgroundColor: GOLD }}
        >
          Pre-Sale Open
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row gap-6 p-5 sm:p-8">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-gray-600 leading-relaxed text-sm">{genesis.description}</p>
          {genesis.details && (
            <p className="text-gray-600 leading-relaxed text-sm">{genesis.details}</p>
          )}

          {/* Key specs */}
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2">
              {Object.entries(genesis.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{key}</span>
                  <span className="text-sm font-medium" style={{ color: NAVY }}>{value as string}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm font-semibold" style={{ color: GOLD }}>
            Pre-Sale now open. Contact us for pricing and floor plans.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-md px-5 sm:px-6 font-semibold text-white text-sm"
              style={{ backgroundColor: GOLD }}
            >
              <Link href="/genesis-jerusalem">View Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-md px-5 sm:px-6 font-semibold text-sm"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Right: images */}
        <div className="w-full md:w-[300px] lg:w-[340px] flex-shrink-0">
          <img
            src={genesis.image}
            alt="Genesis Jerusalem tower"
            className="w-full object-cover rounded-lg mb-2"
            style={{ height: "clamp(160px, 25vw, 176px)" }}
            loading="eager"
            decoding="async"
          />
          <div className="grid grid-cols-3 gap-2">
            {thumbs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Genesis Jerusalem ${i + 1}`}
                className="w-full object-cover rounded-lg"
                style={{ height: "clamp(64px, 12vw, 96px)" }}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── VIA Ashkelon Project Card ────────────────────────────────────────────────
const VIA_HERO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/aGJnumXzQjXioSLg.png";

function ViaAshkelonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden border-2" style={{ borderColor: GOLD }}>
      {/* Header */}
      <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
        <h2
          className="font-bold"
          style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: NAVY }}
        >
          VIA — Ashkelon Project
        </h2>
        <span
          className="px-3 py-1 text-xs font-bold tracking-[0.12em] uppercase rounded-full text-white"
          style={{ backgroundColor: GOLD }}
        >
          Coming Soon
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row gap-6 p-5 sm:p-8">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-gray-600 leading-relaxed text-sm">
            A landmark new residential development by Hay Nahmias in Ashkelon — offering modern apartments with premium finishes in one of Israel’s most vibrant coastal cities. Steps from the Mediterranean, parks, and a growing Anglo community.
          </p>

          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2">
              {[
                ["Developer", "Hay Nahmias"],
                ["Location", "Ashkelon"],
                ["Lifestyle", "Mediterranean coast"],
                ["Community", "Anglo-friendly"],
                ["Status", "Coming Soon"],
                ["Value", "Competitive pricing"],
              ].map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{key}</span>
                  <span className="text-sm font-medium" style={{ color: NAVY }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm font-semibold" style={{ color: GOLD }}>
            Register your interest to receive priority access to pricing and floor plans.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-md px-5 sm:px-6 font-semibold text-white text-sm"
              style={{ backgroundColor: GOLD }}
            >
              <Link href="/via-ashkelon">View Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-md px-5 sm:px-6 font-semibold text-sm"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full md:w-[300px] lg:w-[340px] flex-shrink-0">
          <img
            src={VIA_HERO}
            alt="VIA Ashkelon residential complex"
            className="w-full object-cover rounded-lg"
            style={{ height: "clamp(160px, 25vw, 220px)" }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

// ── Section label component ───────────────────────────────────────────────────
function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-xs font-bold tracking-[0.18em] uppercase mb-2" style={{ color: GOLD }}>{label}</p>
      <h2 className="font-bold mb-3" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: NAVY }}>
        {title}
      </h2>
      <div className="rounded-full mb-3" style={{ width: "3rem", height: "3px", backgroundColor: GOLD }} />
      {subtitle && <p className="text-sm text-gray-500 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function FeaturedProperties() {
  // Available (existing) properties — exclude hidden, NIYA units, and Genesis (shown separately)
  const availableProperties = PROPERTIES.filter(
    (p) => !p.hidden && p.category === "available"
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "oklch(0.97 0.006 80)" }}>
      <Navbar />

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          minHeight: "220px",
          paddingTop: "64px",
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project-src_c3fc7609.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.65)]" />
        <div className="relative z-10 text-center px-4 py-10 sm:py-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>
            Mr. Ashkelon
          </p>
          <h1
            className="font-bold text-white"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}
          >
            Our Properties
          </h1>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────── */}
      <div className="flex flex-col py-8 sm:py-12 px-4 max-w-5xl mx-auto w-full">

        {/* ═══════════════════════════════════════════════
            SECTION 1 — NEW PROJECTS (Pre-Sale)
        ═══════════════════════════════════════════════ */}
        <SectionHeading
          label="New Developments"
          title="New Projects"
          subtitle="Pre-sale opportunities in premium new developments — buy off-plan at today's prices."
        />

        <NiyaProjectCard />
        <GenesisProjectCard />
        <ViaAshkelonCard />

        {/* ═══════════════════════════════════════════════
            SECTION 2 — AVAILABLE PROPERTIES (Existing)
        ═══════════════════════════════════════════════ */}
        <div className="mt-8 sm:mt-12">
          <SectionHeading
            label="Properties for Sale"
            title="Available Now"
            subtitle="Existing properties ready for immediate purchase — move in today."
          />

          {availableProperties.map((property) => {
            const thumbs = property.galleryImages.slice(0, 4);

            return (
              <div
                key={property.slug}
                className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden"
                style={{ border: "1px solid oklch(0.88 0.01 255)" }}
              >
                {/* Property title */}
                <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-100">
                  <h2
                    className="font-bold"
                    style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: NAVY }}
                  >
                    {property.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{property.location}</p>
                </div>

                {/* Main body */}
                <div className="flex flex-col md:flex-row gap-6 p-5 sm:p-8">
                  {/* Left: description + specs + CTAs */}
                  <div className="flex-1 flex flex-col gap-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {property.description}
                    </p>
                    {property.details && (
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {property.details}
                      </p>
                    )}

                    {/* Specs */}
                    {Object.keys(property.specs).length > 0 && (
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2">
                          {Object.entries(property.specs).map(([key, value]) => (
                            <div key={key} className="flex flex-col">
                              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                {key}
                              </span>
                              <span className="text-sm font-medium" style={{ color: NAVY }}>
                                {value as string}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {property.note && (
                      <p className="text-sm font-semibold" style={{ color: GOLD }}>
                        {property.note}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="rounded-md px-5 sm:px-6 font-semibold text-white text-sm"
                        style={{ backgroundColor: GOLD }}
                      >
                        <Link href={(property as any).customLink ?? `/property/${property.slug}`}>
                          View Full Details
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-md px-5 sm:px-6 font-semibold text-sm"
                        style={{ borderColor: NAVY, color: NAVY }}
                      >
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right: thumbnail images */}
                  {thumbs.length > 0 && (
                    <div className="w-full md:w-[300px] lg:w-[340px] flex-shrink-0">
                      <div className="grid grid-cols-2 gap-2">
                        {thumbs.map((img: string, i: number) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${property.title} ${i + 1}`}
                            className="w-full object-cover rounded-lg"
                            style={{ height: "clamp(100px, 18vw, 144px)" }}
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ContactForm
        sourcePage="Featured Properties Page"
        title="Interested in a Property?"
        subtitle="Contact us to arrange a viewing or to discuss your requirements."
      />
      <Footer />
    </div>
  );
}
