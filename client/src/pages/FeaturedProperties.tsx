// =============================================================
// MR. ASHKELON — Featured Properties Listing Page
// Clean card layout: centered title, description left, 2 images right,
// specs in white card, note + CTA buttons below
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function FeaturedProperties() {
  const visibleProperties = PROPERTIES.filter((p) => !p.hidden);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5]">
      <Navbar />

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          minHeight: "260px",
          paddingTop: "64px",
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project-src_c3fc7609.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.65)]" />
        <div className="relative z-10 text-center px-4 py-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#c9a84c]">
            Mr. Ashkelon
          </p>
          <h1
            className="font-bold text-white"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Featured Properties
          </h1>
        </div>
      </section>

      {/* ── Properties list ──────────────────────────────── */}
      <div className="flex flex-col gap-0 py-10 px-4 max-w-5xl mx-auto w-full">
        {visibleProperties.map((property) => {
          // Show up to 4 thumbnail images (skip the hero image which is galleryImages[0])
          const thumbs = property.galleryImages.slice(0, 4);

          return (
            <div
              key={property.slug}
              className="bg-white rounded-2xl shadow-sm mb-10 overflow-hidden"
            >
              {/* Property title */}
              <div className="px-8 pt-8 pb-4 border-b border-gray-100">
                <h2
                  className="font-bold text-[#1a2744] text-center"
                  style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  {property.title}
                </h2>
              </div>

              {/* Main body: text left, images right */}
              <div className="flex flex-col md:flex-row gap-6 p-8">
                {/* Left: description + specs + note + CTAs */}
                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {property.description}
                  </p>
                  {property.details && (
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {property.details}
                    </p>
                  )}

                  {/* Specs card */}
                  {Object.keys(property.specs).length > 0 && (
                    <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 mt-2">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {Object.entries(property.specs).map(([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                              {key}
                            </span>
                            <span className="text-sm font-medium text-[#1a2744]">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Note */}
                  {property.note && (
                    <p className="text-sm font-semibold text-[#c9a84c]">
                      {property.note}
                    </p>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 mt-2">
                    <Button
                      asChild
                      className="rounded-md px-6 font-semibold bg-[#c9a84c] hover:bg-[#b8973b] text-[#1a2744]"
                    >
                      <Link href={(property as any).customLink ?? `/property/${property.slug}`}>
                        View Full Details
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-md px-6 font-semibold border-[#1a2744] text-[#1a2744]"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                {/* Right: up to 4 thumbnail images */}
                {thumbs.length > 0 && (
                  <div className="md:w-[340px] flex-shrink-0">
                    <div className="grid grid-cols-2 gap-2">
                      {thumbs.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${property.title} ${i + 1}`}
                          className="w-full h-36 object-cover rounded-lg"
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

      <ContactForm
        sourcePage="Featured Properties Page"
        title="Interested in a Property?"
        subtitle="Contact us to arrange a viewing or to discuss your requirements."
      />
      <Footer />
    </div>
  );
}
