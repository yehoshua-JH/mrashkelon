// =============================================================
// MR. ASHKELON — Property Detail Page
// Dynamic page for /property/:slug
// Matches Lovable source layout: hero banner, overview, highlights grid,
// gallery with lightbox, sidebar with specs card + note + CTA
// =============================================================

import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES } from "@/lib/data";
import { CheckCircle, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = PROPERTIES.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    if (lightboxIndex !== null) {
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    if (property) {
      document.title = `Mr. Ashkelon | ${property.title}`;
    } else {
      document.title = "Mr. Ashkelon | Property Not Found";
    }
    return () => {
      document.title = "Mr. Ashkelon — Real Estate Brokers";
    };
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              Property Not Found
            </h1>
            <Button asChild variant="outline">
              <Link href="/featured-properties">View All Properties</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[520px] overflow-hidden" style={{ backgroundColor: "oklch(0.12 0.04 255)" }}>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-contain"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <div className="container max-w-6xl">
            <Badge variant="secondary" className="mb-3 text-sm px-4 py-1">
              Featured Project
            </Badge>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">
              {property.title}
            </h1>
            <p className="text-white/80 text-lg">{property.tagline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container px-4 max-w-6xl">
          <Link
            href="/featured-properties"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{property.description}</p>
                <p className="text-muted-foreground leading-relaxed">{property.details}</p>
              </div>

              {/* Highlights */}
              {property.highlights.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {property.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {property.galleryImages.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.galleryImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxIndex(i)}
                        className="overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <img
                          src={img}
                          alt={`${property.title} - ${i + 1}`}
                          className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-foreground">Property Details</h3>
                  {Object.entries(property.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-border pb-2 last:border-none">
                      <span className="font-medium text-foreground text-sm">{key}</span>
                      <span className="text-muted-foreground text-sm text-right max-w-[55%]">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {property.note && (
                <Card className="border-secondary/30 bg-secondary/5">
                  <CardContent className="pt-6">
                    <p className="text-secondary font-semibold text-sm">{property.note}</p>
                  </CardContent>
                </Card>
              )}

              <Button
                asChild
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base py-6 rounded-full"
              >
                <Link href="/contact">Contact Us for Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        title="Interested in This Property?"
        subtitle="Get in touch and Motti will arrange a viewing at your convenience."
        showContactInfo={false}
        sourcePage={`Property: ${property.title}`}
      />
      <Footer />

      {/* Lightbox - full screen custom overlay */}
      {lightboxIndex !== null && property && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <img
            src={property.galleryImages[lightboxIndex]}
            alt={`${property.title} - ${lightboxIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            style={{ maxWidth: '100vw', maxHeight: '100vh' }}
            onClick={(e) => e.stopPropagation()}
          />
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors text-sm font-semibold z-[10000]"
          >
            <ArrowLeft className="w-5 h-5" />
            Close
          </button>
          {property.galleryImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + property.galleryImages.length) %
                      property.galleryImages.length
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % property.galleryImages.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {property.galleryImages.length}
          </span>
        </div>
      )}
    </div>
  );
}
