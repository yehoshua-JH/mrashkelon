// =============================================================
// MR. ASHKELON — Services Page
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { SERVICES } from "@/lib/data";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/hero-homepage-JEeoM8ijVeviVnToqkeLSz.webp";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <PageHero
          title="Our Services"
          subtitle="Comprehensive real estate services tailored to overseas buyers and Olim"
          image={HERO_IMAGE}
        />
      </div>

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-2">How We Can Help You</h2>
            <span className="gold-divider mx-auto" />
            <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "oklch(0.45 0.03 250)" }}>
              Whether you are buying your first home in Israel, investing in rental property, or
              making Aliyah, we provide the expertise and support you need at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-t-4"
                style={{ borderColor: "oklch(0.72 0.12 75)" }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.955 0.012 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-2">Our Process</h2>
            <span className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Consultation", desc: "We start with a detailed conversation about your needs, budget, and timeline — at no cost or obligation." },
              { step: "02", title: "Property Search", desc: "We identify properties that match your criteria, including off-market opportunities not available to the general public." },
              { step: "03", title: "Guided Viewings", desc: "We accompany you on property viewings, providing honest assessments and local insights for each property." },
              { step: "04", title: "Transaction Support", desc: "We guide you through the offer, negotiation, legal process, and final handover, ensuring a smooth completion." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4"
                  style={{
                    backgroundColor: "oklch(0.72 0.12 75)",
                    color: "oklch(0.235 0.058 250)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Ready to Get Started?" subtitle="Contact us today for your free, no-obligation consultation." />
      <Footer />
    </div>
  );
}
