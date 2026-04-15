// =============================================================
// MR. ASHKELON — Homepage
// Design: Mediterranean Heritage Luxury
// Sections: Hero, About snippet, Services, Properties, Why Ashkelon, Testimonials, Resources, CTA
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES, BLOG_POSTS, SERVICES, TESTIMONIALS } from "@/lib/data";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project_ab2b12dc.jpg";
const BROKER_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/mr-mrs-ashkelon_99e0fa39.png";
const ASHKELON_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/ashkelon-israel_78811096.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: "90vh",
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.235 0.058 250 / 0.85) 0%, oklch(0.235 0.058 250 / 0.4) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 container pb-20 pt-32">
          <div className="max-w-xl">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Ashkelon, Israel
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Find Your Dream Home on the Mediterranean
            </h1>
            <p className="text-base md:text-lg mb-8" style={{ color: "oklch(0.85 0.01 85)" }}>
              English-speaking real estate experts helping overseas buyers and Olim
              find the perfect property in Ashkelon since 2003.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/featured-properties"
                className="px-6 py-3 rounded font-semibold text-sm transition-all duration-200"
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
                View Properties
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded font-semibold text-sm border transition-all duration-200"
                style={{
                  borderColor: "oklch(0.85 0.01 85)",
                  color: "oklch(0.985 0.008 85)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "oklch(0.985 0.008 85 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ backgroundColor: "oklch(0.235 0.058 250)" }}>
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Properties Sold" },
              { value: "12km", label: "Coastline" },
              { value: "128k", label: "City Population" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Georgia, serif", color: "oklch(0.72 0.12 75)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wide mt-1" style={{ color: "oklch(0.72 0.02 85)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={BROKER_IMAGE}
                alt="Motti — Mr. Ashkelon Real Estate Broker"
                className="rounded-lg w-full object-cover shadow-xl"
                style={{ maxHeight: "480px" }}
              />
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded shadow-lg"
                style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
              >
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "oklch(0.235 0.058 250)" }}>
                  Licensed Broker
                </p>
                <p className="text-sm font-semibold" style={{ color: "oklch(0.235 0.058 250)" }}>
                  20+ Years in Ashkelon
                </p>
              </div>
            </div>
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                About Mr. Ashkelon
              </p>
              <h2 className="section-heading mb-2">
                Your Trusted Guide to Ashkelon Real Estate
              </h2>
              <span className="gold-divider" />
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                Motti is a licensed real estate broker with over 20 years of experience in the
                Ashkelon market. As an English speaker who has lived in Ashkelon for decades, he
                understands the unique needs of overseas buyers, new Olim, and international
                investors navigating the Israeli property market.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                From the initial property search to the final handover of keys, Motti provides
                personalised, end-to-end guidance that removes the stress and uncertainty from
                one of the most significant decisions of your life.
              </p>
              <Link
                href="/about"
                className="inline-block mt-6 px-6 py-3 rounded font-semibold text-sm transition-all duration-200"
                style={{
                  backgroundColor: "oklch(0.235 0.058 250)",
                  color: "oklch(0.985 0.008 85)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.32 0.055 250)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.235 0.058 250)";
                }}
              >
                Learn More About Motti
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.955 0.012 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              What We Offer
            </p>
            <h2 className="section-heading">Our Services</h2>
            <span className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3
                  className="text-base font-bold mb-2"
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
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-6 py-3 rounded font-semibold text-sm border-2 transition-all duration-200"
              style={{
                borderColor: "oklch(0.235 0.058 250)",
                color: "oklch(0.235 0.058 250)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.235 0.058 250)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.985 0.008 85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.235 0.058 250)";
              }}
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Current Listings
            </p>
            <h2 className="section-heading">Featured Properties</h2>
            <span className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.map((property) => (
              <Link
                key={property.slug}
                href={`/property/${property.slug}`}
                className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
                style={{ textDecoration: "none" }}
              >
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold"
                    style={{
                      backgroundColor: "oklch(0.72 0.12 75)",
                      color: "oklch(0.235 0.058 250)",
                    }}
                  >
                    {property.tagline}
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                  >
                    {property.title}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "oklch(0.55 0.02 85)" }}>
                    {property.location}
                  </p>
                  <div className="flex gap-4 text-xs mb-4" style={{ color: "oklch(0.45 0.03 250)" }}>
                    <span>🛏 {property.bedrooms} bed</span>
                    <span>🚿 {property.bathrooms} bath</span>
                    <span>📐 {property.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "oklch(0.235 0.058 250)" }}
                    >
                      {property.price}
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "oklch(0.72 0.12 75)" }}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/featured-properties"
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
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ASHKELON ── */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: `url(${ASHKELON_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(0.235 0.058 250 / 0.75)" }}
        />
        <div className="relative z-10 container text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "oklch(0.72 0.12 75)" }}
          >
            Discover the City
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Why Ashkelon?
          </h2>
          <span className="gold-divider mx-auto" />
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: "oklch(0.85 0.01 85)" }}>
            Ashkelon is Israel's best-kept secret — a coastal city with 5,000 years of history,
            12 kilometres of stunning beaches, a warm Mediterranean climate, and property prices
            that offer exceptional value compared to Tel Aviv or Jerusalem.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-left">
            {[
              { icon: "🌊", title: "12km of Beaches", desc: "Stunning Mediterranean coastline with supervised beaches and a beautiful marina" },
              { icon: "🏛️", title: "5,000 Years of History", desc: "Ancient ruins, national parks, and a rich cultural heritage unlike any other city" },
              { icon: "✈️", title: "Easy Access", desc: "45 minutes from Ben Gurion Airport and excellent rail links to Tel Aviv" },
              { icon: "💰", title: "Exceptional Value", desc: "Premium coastal living at a fraction of the cost of Tel Aviv or Herzliya" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg"
                style={{ backgroundColor: "oklch(0.985 0.008 85 / 0.1)", backdropFilter: "blur(4px)" }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Georgia, serif" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.82 0.01 85)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/about-ashkelon"
            className="inline-block mt-10 px-6 py-3 rounded font-semibold text-sm border transition-all duration-200"
            style={{
              borderColor: "oklch(0.72 0.12 75)",
              color: "oklch(0.72 0.12 75)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.72 0.12 75)";
              (e.currentTarget as HTMLElement).style.color = "oklch(0.235 0.058 250)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.12 75)";
            }}
          >
            Discover Ashkelon
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.955 0.012 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Client Stories
            </p>
            <h2 className="section-heading">What Our Clients Say</h2>
            <span className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-lg bg-white shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: "oklch(0.72 0.12 75)" }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "oklch(0.45 0.03 250)" }}>
                  "{t.text}"
                </p>
                <p className="text-sm font-bold" style={{ color: "oklch(0.235 0.058 250)" }}>
                  {t.name}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.55 0.02 85)" }}>
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Knowledge Base
            </p>
            <h2 className="section-heading">Resources & Guides</h2>
            <span className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
                style={{ textDecoration: "none" }}
              >
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold"
                    style={{
                      backgroundColor: "oklch(0.235 0.058 250)",
                      color: "oklch(0.985 0.008 85)",
                    }}
                  >
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs mb-2" style={{ color: "oklch(0.55 0.02 85)" }}>
                    {post.readTime}
                  </p>
                  <h3
                    className="text-base font-bold leading-snug mb-2"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/resources"
              className="inline-block px-6 py-3 rounded font-semibold text-sm border-2 transition-all duration-200"
              style={{
                borderColor: "oklch(0.235 0.058 250)",
                color: "oklch(0.235 0.058 250)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.235 0.058 250)";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.985 0.008 85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "oklch(0.235 0.058 250)";
              }}
            >
              All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <ContactForm />

      <Footer />
    </div>
  );
}
