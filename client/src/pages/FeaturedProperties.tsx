// =============================================================
// MR. ASHKELON — Featured Properties Listing Page
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES } from "@/lib/data";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project_ab2b12dc.jpg";

export default function FeaturedProperties() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <PageHero
          title="Featured Properties"
          subtitle="Handpicked luxury and sea-view properties in Ashkelon"
          image={HERO_IMAGE}
        />
      </div>

      <section className="py-20" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-2">Current Listings</h2>
            <span className="gold-divider mx-auto" />
            <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "oklch(0.45 0.03 250)" }}>
              We specialise in premium properties in Ashkelon's most desirable locations.
              Contact us to arrange a viewing or to discuss your specific requirements.
            </p>
          </div>

          <div className="space-y-10">
            {PROPERTIES.map((property, idx) => (
              <div
                key={property.slug}
                className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`relative overflow-hidden rounded-lg shadow-lg ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full object-cover"
                    style={{ height: "360px" }}
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded text-xs font-semibold"
                    style={{
                      backgroundColor: "oklch(0.72 0.12 75)",
                      color: "oklch(0.235 0.058 250)",
                    }}
                  >
                    {property.tagline}
                  </div>
                </div>

                <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  >
                    {property.location}
                  </p>
                  <h2
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                  >
                    {property.title}
                  </h2>
                  <p className="text-base font-semibold mb-4" style={{ color: "oklch(0.45 0.03 250)" }}>
                    {property.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm mb-5" style={{ color: "oklch(0.45 0.03 250)" }}>
                    <span>🛏 {property.bedrooms} Bedrooms</span>
                    <span>🚿 {property.bathrooms} Bathrooms</span>
                    <span>📐 {property.size}</span>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.45 0.03 250)" }}>
                    {property.description.substring(0, 200)}...
                  </p>

                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xl font-bold"
                      style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                    >
                      {property.price}
                    </span>
                  </div>

                  <Link
                    href={`/property/${property.slug}`}
                    className="inline-block px-6 py-3 rounded font-semibold text-sm transition-all duration-200"
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
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Interested in a Property?" subtitle="Contact us to arrange a viewing or to discuss your requirements." />
      <Footer />
    </div>
  );
}
