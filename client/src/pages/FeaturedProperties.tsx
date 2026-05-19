// =============================================================
// MR. ASHKELON — Featured Properties Listing Page
// Premium alternating split layout: large image one side,
// details the other — alternating per property (Genesis Jerusalem style)
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES } from "@/lib/data";
import { Button } from "@/components/ui/button";

const NAVY = "oklch(0.235 0.058 250)";
const GOLD = "oklch(0.72 0.12 75)";
const MUTED = "oklch(0.45 0.03 250)";
const CREAM = "oklch(0.975 0.008 85)";

export default function FeaturedProperties() {
  const visibleProperties = PROPERTIES.filter((p) => !p.hidden);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "oklch(1 0 0)" }}>
      <Navbar />

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center gap-6 overflow-hidden"
        style={{
          minHeight: "340px",
          paddingTop: "64px",
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project-src_c3fc7609.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.75) 100%)" }}
        />
        <div className="relative z-10 text-center px-4">
          <p
            className="text-xs font-bold tracking-[0.2em] mb-3 uppercase"
            style={{ color: GOLD }}
          >
            Mr. Ashkelon
          </p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Featured Properties
          </h1>
          {/* Quick-nav anchor buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {visibleProperties.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-200"
                style={{
                  borderColor: GOLD,
                  color: GOLD,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = GOLD;
                  (e.currentTarget as HTMLElement).style.color = NAVY;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = GOLD;
                }}
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Properties — alternating split ───────────────── */}
      {visibleProperties.map((property, index) => {
        const isEven = index % 2 === 0;
        const bg = isEven ? "oklch(1 0 0)" : CREAM;

        return (
          <section
            key={property.slug}
            id={property.slug}
            style={{ backgroundColor: bg }}
          >
            {/* Section heading */}
            <div className="text-center pt-16 pb-2 px-4">
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
                style={{ color: GOLD }}
              >
                Featured Property
              </p>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  color: NAVY,
                }}
              >
                {property.title}
              </h2>
              <div
                className="mx-auto mt-3 mb-0 rounded-full"
                style={{ width: "2.5rem", height: "2px", backgroundColor: GOLD }}
              />
            </div>

            {/* Split row */}
            <div
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              style={{ minHeight: "480px" }}
            >
              {/* Image half */}
              <div
                className="w-full md:w-1/2 relative overflow-hidden"
                style={{ minHeight: "320px" }}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "320px" }}
                />
                {/* Fade gradient toward text side */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isEven
                      ? "linear-gradient(to right, transparent 55%, " + bg + ")"
                      : "linear-gradient(to left, transparent 55%, " + bg + ")",
                  }}
                />
              </div>

              {/* Text half */}
              <div
                className="w-full md:w-1/2 flex items-center px-8 md:px-14 py-12"
                style={{ backgroundColor: bg }}
              >
                <div className="max-w-lg w-full">
                  {/* Description */}
                  <p
                    className="text-base leading-relaxed mb-4"
                    style={{ color: MUTED }}
                  >
                    {property.description}
                  </p>
                  {property.details && (
                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: MUTED }}
                    >
                      {property.details}
                    </p>
                  )}

                  {/* Specs grid */}
                  {Object.keys(property.specs).length > 0 && (
                    <div
                      className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 p-5 rounded-xl"
                      style={{ backgroundColor: isEven ? CREAM : "oklch(1 0 0)" }}
                    >
                      {Object.entries(property.specs).map(([key, value]) => (
                        <div key={key}>
                          <p
                            className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                            style={{ color: GOLD }}
                          >
                            {key}
                          </p>
                          <p className="text-sm font-medium" style={{ color: NAVY }}>
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Note */}
                  {property.note && (
                    <p
                      className="text-sm font-semibold mb-6"
                      style={{ color: GOLD }}
                    >
                      {property.note}
                    </p>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="rounded-full px-7 font-semibold"
                      style={{ backgroundColor: GOLD, color: NAVY }}
                    >
                      <Link href={(property as any).customLink ?? `/property/${property.slug}`}>
                        View Full Details
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full px-7 font-semibold"
                      style={{ borderColor: NAVY, color: NAVY }}
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery strip — up to 4 thumbnail images */}
            {property.galleryImages.length > 1 && (
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 pb-12 max-w-5xl mx-auto w-full"
              >
                {property.galleryImages.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${property.title} ${i + 1}`}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}

      <ContactForm
        sourcePage="Featured Properties Page"
        title="Interested in a Property?"
        subtitle="Contact us to arrange a viewing or to discuss your requirements."
      />
      <Footer />
    </div>
  );
}
