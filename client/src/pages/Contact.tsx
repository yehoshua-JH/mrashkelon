// =============================================================
// MR. ASHKELON — Contact Page
// =============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/data";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/hero-homepage-JEeoM8ijVeviVnToqkeLSz.webp";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <PageHero
          title="Contact Us"
          subtitle="We'd love to hear from you. Get in touch for a free, no-obligation consultation."
          image={HERO_IMAGE}
        />
      </div>

      <ContactForm
        title="Send Us a Message"
        subtitle="Fill in the form and Motti will respond personally within 24 hours."
        showContactInfo={true}
      />

      {/* Additional Info */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "oklch(0.955 0.012 85)" }}
            >
              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
              >
                🇮🇱 Israel Office
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                Hatayassim St.
                <br />
                Ashkelon 78573, Israel
                <br />
                <br />
                <a href={`tel:${CONTACT.phone_il}`} className="font-medium hover:underline">
                  {CONTACT.phone_il}
                </a>
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "oklch(0.955 0.012 85)" }}
            >
              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
              >
                🇺🇸 US Contact
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                Available for calls from North America
                <br />
                <br />
                <a href={`tel:${CONTACT.phone_us}`} className="font-medium hover:underline">
                  {CONTACT.phone_us}
                </a>
                <br />
                <a href={`mailto:${CONTACT.email}`} className="font-medium hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
