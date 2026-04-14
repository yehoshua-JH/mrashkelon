// =============================================================
// MR. ASHKELON — About Page
// =============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const BROKER_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/hero-about-dLJHLYYoahG8fdHkuhpTKY.webp";
const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/hero-homepage-JEeoM8ijVeviVnToqkeLSz.webp";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <PageHero
          title="About Mr. Ashkelon"
          subtitle="Your trusted English-speaking real estate expert in Ashkelon, Israel"
          image={HERO_IMAGE}
        />
      </div>

      {/* Bio Section */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={BROKER_IMAGE}
                alt="Motti — Mr. Ashkelon Real Estate Broker"
                className="rounded-lg w-full object-cover shadow-xl"
                style={{ maxHeight: "520px" }}
              />
              <div
                className="absolute -bottom-4 -right-4 px-5 py-4 rounded shadow-lg"
                style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
              >
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "oklch(0.235 0.058 250)" }}>
                  Licensed Broker
                </p>
                <p className="text-sm font-semibold" style={{ color: "oklch(0.235 0.058 250)" }}>
                  Ashkelon, Israel
                </p>
              </div>
            </div>
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                Meet Motti
              </p>
              <h2 className="section-heading mb-2">
                Over 20 Years of Local Expertise
              </h2>
              <span className="gold-divider" />
              <div className="mt-5 space-y-4 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                <p>
                  Motti is a licensed real estate broker with over two decades of experience in the
                  Ashkelon property market. Born and raised in Israel, he has lived in Ashkelon for
                  most of his life and has an unparalleled understanding of the city's neighbourhoods,
                  developments, and investment opportunities.
                </p>
                <p>
                  As a fluent English speaker, Motti has built a reputation as the go-to broker for
                  overseas buyers — particularly from North America, the UK, and France — who are
                  navigating the Israeli property market for the first time. He understands the unique
                  challenges and concerns of foreign buyers and new Olim, and provides the kind of
                  patient, transparent, and personalised service that makes the process straightforward.
                </p>
                <p>
                  Motti's approach is built on honesty and long-term relationships. He will never
                  pressure you into a purchase that is not right for you, and his advice is always
                  grounded in a genuine understanding of your needs, budget, and lifestyle goals.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: "🏆", label: "Licensed Broker", sub: "Israeli Real Estate Registry" },
                  { icon: "🌍", label: "English Speaker", sub: "Fluent, native-level" },
                  { icon: "📅", label: "Est. 2003", sub: "20+ years in Ashkelon" },
                  { icon: "🤝", label: "500+ Clients", sub: "Buyers, sellers & investors" },
                ].map((cred) => (
                  <div
                    key={cred.label}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "oklch(0.955 0.012 85)" }}
                  >
                    <div className="text-xl mb-1">{cred.icon}</div>
                    <p className="text-sm font-bold" style={{ color: "oklch(0.235 0.058 250)" }}>
                      {cred.label}
                    </p>
                    <p className="text-xs" style={{ color: "oklch(0.55 0.02 85)" }}>
                      {cred.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.955 0.012 85)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="section-heading mb-2">Our Philosophy</h2>
          <span className="gold-divider mx-auto" />
          <p className="mt-6 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
            We believe that buying property in a foreign country should be an exciting and empowering
            experience, not a stressful one. Our role is to provide you with the information,
            guidance, and local expertise you need to make confident, well-informed decisions. We
            are not just selling you a property — we are helping you build a life in one of the
            world's most remarkable cities.
          </p>
          <blockquote
            className="mt-8 text-lg font-bold italic"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            "Ashkelon is Israel's best-kept secret. My mission is to help people discover it."
          </blockquote>
          <p className="mt-2 text-sm" style={{ color: "oklch(0.55 0.02 85)" }}>
            — Motti, Mr. Ashkelon
          </p>
        </div>
      </section>

      <ContactForm title="Start Your Property Journey" subtitle="Ready to find your home in Ashkelon? Let's talk." />
      <Footer />
    </div>
  );
}
