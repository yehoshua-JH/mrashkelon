// =============================================================
// MR. ASHKELON — Featured Properties Listing Page
// Matches Lovable source: hero banner with anchor buttons,
// alternating bg sections per property, specs grid, gallery grid, CTA buttons
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedProperties() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center gap-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project-src_c3fc7609.jpg)",
          }}
        />
        <h1 className="relative text-4xl md:text-5xl font-heading font-bold text-white">
          Featured Properties
        </h1>
        <div className="relative flex flex-wrap justify-center gap-3">
          {PROPERTIES.filter((p) => !p.hidden).map((p) => (
            <Button
              key={p.slug}
              asChild
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium"
            >
              <a href={`#${p.slug}`}>{p.title}</a>
            </Button>
          ))}
        </div>
      </section>

      {/* Properties */}
      {PROPERTIES.filter((p) => !p.hidden).map((property, index) => (
        <section
          key={property.slug}
          id={property.slug}
          className={`py-16 md:py-24 ${index % 2 === 1 ? "bg-muted" : ""}`}
        >
          <div className="container px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
              {property.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text + specs */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">{property.description}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{property.details}</p>

                <Card className="border-none shadow-md mb-6">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {Object.entries(property.specs).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-semibold text-foreground capitalize">{key}: </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {property.note && (
                  <p className="text-secondary font-semibold text-lg mb-6">{property.note}</p>
                )}

                <div className="flex gap-3">
                  <Button
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    <Link href={(property as any).customLink ?? `/property/${property.slug}`}>View Full Details</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>

              {/* Gallery */}
              <div
                className={`grid ${property.galleryImages.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-3`}
              >
                {property.galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${property.title} - Image ${i + 1}`}
                    className="w-full h-64 md:h-72 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <ContactForm
        title="Interested in a Property?"
        subtitle="Contact us to arrange a viewing or to discuss your requirements."
      />
      <Footer />
    </div>
  );
}
