// =============================================================
// MR. ASHKELON — Property Detail Page
// Dynamic page for /property/:slug
// =============================================================

import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES } from "@/lib/data";

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}>
              Property Not Found
            </h1>
            <Link href="/featured-properties" className="text-sm underline" style={{ color: "oklch(0.72 0.12 75)" }}>
              View All Properties
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="pt-16">
        <div
          className="relative"
          style={{
            height: "480px",
            backgroundImage: `url(${property.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "oklch(0.235 0.058 250 / 0.5)" }}
          />
          <div className="relative z-10 container h-full flex flex-col justify-end pb-10">
            <div
              className="inline-block px-3 py-1 rounded text-xs font-semibold mb-3 self-start"
              style={{
                backgroundColor: "oklch(0.72 0.12 75)",
                color: "oklch(0.235 0.058 250)",
              }}
            >
              {property.tagline}
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {property.title}
            </h1>
            <p className="text-base mt-2" style={{ color: "oklch(0.85 0.01 85)" }}>
              {property.subtitle} — {property.location}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2">
              {/* Quick stats */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-lg mb-8"
                style={{ backgroundColor: "oklch(0.955 0.012 85)" }}
              >
                {[
                  { label: "Bedrooms", value: property.bedrooms },
                  { label: "Bathrooms", value: property.bathrooms },
                  { label: "Size", value: property.size },
                  { label: "Floor", value: property.floor },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-lg font-bold"
                      style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-wide mt-0.5" style={{ color: "oklch(0.55 0.02 85)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <h2
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
              >
                About This Property
              </h2>
              <span className="gold-divider mb-5" />
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                {property.description}
              </p>

              {/* Highlights */}
              <h3
                className="text-lg font-bold mt-8 mb-4"
                style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
              >
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {property.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.45 0.03 250)" }}>
                    <span style={{ color: "oklch(0.72 0.12 75)", marginTop: "2px" }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="rounded-lg p-6 shadow-sm sticky top-24"
                style={{ backgroundColor: "oklch(0.235 0.058 250)" }}
              >
                <p
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "Georgia, serif", color: "oklch(0.72 0.12 75)" }}
                >
                  {property.price}
                </p>
                <p className="text-xs mb-6" style={{ color: "oklch(0.72 0.02 85)" }}>
                  {property.location}
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 rounded font-semibold text-sm mb-3 transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.72 0.12 75)",
                    color: "oklch(0.235 0.058 250)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.82 0.10 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.72 0.12 75)";
                  }}
                >
                  Enquire About This Property
                </Link>
                <a
                  href="tel:054-731-2118"
                  className="block w-full text-center py-3 rounded font-semibold text-sm border transition-all duration-200"
                  style={{
                    borderColor: "oklch(0.72 0.02 85)",
                    color: "oklch(0.985 0.008 85)",
                    backgroundColor: "transparent",
                  }}
                >
                  📞 054-731-2118
                </a>
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid oklch(0.32 0.055 250)" }}>
                  <p className="text-xs" style={{ color: "oklch(0.72 0.02 85)" }}>
                    All enquiries handled personally by Motti. English-speaking support available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/featured-properties"
              className="text-sm font-medium"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              ← Back to All Properties
            </Link>
          </div>
        </div>
      </section>

      <ContactForm title="Interested in This Property?" subtitle="Get in touch and Motti will arrange a viewing at your convenience." showContactInfo={false} />
      <Footer />
    </div>
  );
}
