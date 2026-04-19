// =============================================================
// MR. ASHKELON — Homepage
// Exact match of ashkelon-broker.lovable.app
// Layout: Hero (split text+image), About Us, Services, Featured
//         Properties, Why Ashkelon, Video Testimonials,
//         Written Testimonials, Resources, Contact Form, Footer
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PROPERTIES, BLOG_POSTS } from "@/lib/data";

// ── Images ──────────────────────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project_ab2b12dc.jpg";
const ABOUT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/mr-mrs-ashkelon_99e0fa39.png";

// helper to get a short description from the property data
const getShortDesc = (p: (typeof PROPERTIES)[0]) =>
  p.tagline || p.subtitle || p.description.slice(0, 80) + "…";

// ── YouTube video IDs ────────────────────────────────────────
const VIDEOS = [
  { id: "PeumXmRNhUo", name: "Debbie & Marc" },
  { id: "2dNTUaaR8hI", name: "Matthew & Maxine" },
  { id: "B4kCThOC8LE", name: "Annabel" },
];

// ── Services ─────────────────────────────────────────────────
const SERVICES = [
  {
    icon: "🏠",
    title: "Property Purchase",
    desc: "Expert guidance through every step of buying property in Ashkelon, from search to closing.",
  },
  {
    icon: "🔑",
    title: "Rentals & Holiday Homes",
    desc: "Find the perfect rental or holiday home in Ashkelon's best neighborhoods.",
  },
  {
    icon: "📋",
    title: "Legal & Documentation",
    desc: "Full support with contracts, permits, and all legal paperwork in Hebrew and English.",
  },
  {
    icon: "🔨",
    title: "Contractor Management",
    desc: "We oversee renovations and construction, managing trusted local contractors on your behalf.",
  },
  {
    icon: "✈️",
    title: "Relocation Assistance",
    desc: "Comprehensive help settling into life in Israel — from utilities to community connections.",
  },
  {
    icon: "🏢",
    title: "Property Management",
    desc: "Ongoing management of your property, whether you live locally or abroad.",
  },
];

// ── Why Ashkelon ──────────────────────────────────────────────
const WHY = [
  {
    icon: "🌊",
    title: "Mediterranean Coast",
    desc: "Stunning beaches and a relaxed coastal lifestyle year-round.",
  },
  {
    icon: "💰",
    title: "Affordable Prices",
    desc: "Property prices significantly lower than Tel Aviv, Jerusalem, or Netanya.",
  },
  {
    icon: "👥",
    title: "Growing Community",
    desc: "A thriving Anglo community with English-speaking services and social groups.",
  },
  {
    icon: "☀️",
    title: "300+ Sunny Days",
    desc: "Enjoy warm Mediterranean weather with over 300 days of sunshine per year.",
  },
];

// ── Written Testimonials ──────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "As an experienced UK property developer, I can say Motti resolved complex issues calmly and professionally. His knowledge of the local market and ability to navigate challenges is truly exceptional.",
    name: "Alan Goldberg",
    location: "London, UK",
  },
  {
    quote:
      "Motti's help was invaluable when buying abroad. He introduced us to all the contacts we needed — lawyers, contractors, interior designers — and guided us through every step of the process.",
    name: "Jonny & Karen Dorman",
    location: "London, UK",
  },
  {
    quote:
      "First class service. Totally professional. Motti made the entire experience smooth and stress-free. I wouldn't hesitate to recommend him to anyone looking to buy in Ashkelon.",
    name: "Anthony Reindorp",
    location: "London, UK",
  },
  {
    quote:
      "Motti handled all the paperwork, got contractors on time, and continues to manage our property. His ongoing support even after the purchase is what sets him apart from others.",
    name: "Brian & Sharon Sternfeld",
    location: "Manchester, UK",
  },
  {
    quote:
      "Motti takes away all the pain of buying in Israel. His hands-on approach and dedication to his clients means you can relax knowing everything is being taken care of professionally.",
    name: "Aryeh Shender",
    location: "Israel",
  },
  {
    quote:
      "Finding housing for over a dozen expatriates with diverse needs while setting up a new business operation in a foreign country presents many challenges. Motti has provided a prompt, professional, patient, personalized yet budget-friendly and efficient service, finding and furnishing apartments for our staff. I appreciate his support and recommend his service to anyone looking to enjoy living in such a pleasant Mediterranean location, short or long term.",
    name: "Ian Travis",
    location: "NEHP World Wide",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="pt-16 min-h-[600px] flex items-center"
        style={{ background: "linear-gradient(180deg, oklch(0.235 0.058 250) 0%, oklch(0.28 0.055 250) 60%, oklch(0.38 0.045 250) 100%)" }}
      >
        <div className="container py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: text */}
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "Georgia, serif", color: "#ffffff" }}
              >
                Welcome to your future home in Israel!
              </h1>
              <p className="text-lg mb-8" style={{ color: "oklch(0.82 0.05 85)" }}>
                Discover the Mr. Ashkelon difference. Let the leading Anglo licensed Real Estate
                Broker be your guide to a seamless experience in purchasing property in Ashkelon,
                Israel's best-kept secret.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded font-semibold text-base transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.235 0.058 250)",
                  fontFamily: "Georgia, serif",
                }}
              >
                Contact us for a consultation
              </Link>
              <p className="mt-4 text-sm" style={{ color: "oklch(0.65 0.04 85)" }}>
                100's of satisfied buyers have purchased with Mr. Ashkelon
              </p>
            </div>

            {/* Right: property image with badge */}
            <div className="relative">
              <div
                className="absolute top-0 left-0 right-0 z-10 text-center py-3 font-bold text-sm"
                style={{ backgroundColor: "oklch(0.72 0.12 75)", color: "oklch(0.235 0.058 250)" }}
              >
                SELLING FAST!
                <br />Move in Now
              </div>
              <img
                src={HERO_IMG}
                alt="Luxury high-rise development in Ashkelon"
                className="w-full rounded shadow-2xl"
                style={{ maxHeight: "420px", objectFit: "cover" }}
              />
              <a
                href="/featured-properties"
                className="absolute bottom-4 right-4 px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.235 0.058 250)",
                }}
              >
                CLICK HERE →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT US ──────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            About Us
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-10 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={ABOUT_IMG}
                alt="Mr & Mrs Ashkelon Plus - Coastal & Jerusalem Property Specialists"
                className="w-full rounded shadow-lg"
              />
            </div>
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
                Motti and Susan Ben Yitzhack are licensed Anglo real estate brokers based in
                Ashkelon, Israel. With years of experience and deep local expertise, they specialize
                in helping English-speaking buyers navigate the Israeli property market with
                confidence and ease.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
                From finding your dream property to handling legal documentation, managing
                contractors, arranging rentals, and assisting with every aspect of relocation —
                Motti and Susan provide a comprehensive, hands-on service that removes the stress
                from buying property abroad.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
                Their warm, personal approach has earned them the trust of buyers from the UK, US,
                and beyond, making them the go-to brokers for the growing Anglo community in
                Ashkelon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ──────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.005 85)" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            Our Services
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <p className="text-center mb-10" style={{ color: "#6b7280" }}>
            Everything you need for a smooth property experience in Israel — all under one roof.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-6 shadow-sm text-center"
              >
                <div className="text-4xl mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>
                  {s.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ───────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            Featured Properties
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <p className="text-center mb-10" style={{ color: "#6b7280" }}>
            Browse our curated selection of properties in Ashkelon's most sought-after neighborhoods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROPERTIES.map((p) => (
              <div
                key={p.slug}
                className="rounded-lg overflow-hidden shadow border"
                style={{ borderColor: "#e5e7eb" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: "#6b7280" }}>
                    📍 {p.location}
                  </p>
                  <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                    {getShortDesc(p)}
                  </p>
                  <Link
                    href={`/property/${p.slug}`}
                    className="block w-full text-center py-2 rounded border font-medium text-sm transition-colors hover:bg-opacity-90"
                    style={{
                      borderColor: "oklch(0.72 0.12 75)",
                      color: "oklch(0.72 0.12 75)",
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ASHKELON ──────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.235 0.058 250)" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "#ffffff" }}
          >
            Why Ashkelon?
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <p className="text-center mb-10" style={{ color: "oklch(0.75 0.04 85)" }}>
            Israel's best-kept secret — a beautiful coastal city with affordable living, warm
            community, and incredible quality of life.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w) => (
              <div key={w.title} className="text-center">
                <div className="text-4xl mb-3">{w.icon}</div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "Georgia, serif", color: "#ffffff" }}
                >
                  {w.title}
                </h3>
                <p className="text-sm" style={{ color: "oklch(0.75 0.04 85)" }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            Testimonials
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <p className="text-center mb-10" style={{ color: "#6b7280" }}>
            Hear directly from our happy clients about their experience with Mr. Ashkelon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEOS.map((v) => (
              <div key={v.id} className="flex flex-col items-center">
                <div className="w-full rounded-lg overflow-hidden shadow">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                    style={{ height: "200px", border: "none" }}
                  />
                </div>
                <p
                  className="mt-3 font-semibold text-sm"
                  style={{ color: "oklch(0.235 0.058 250)" }}
                >
                  {v.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITTEN TESTIMONIALS ──────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.005 85)" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            What Our Clients Say
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <p className="text-center mb-10" style={{ color: "#6b7280" }}>
            Hear from buyers who found their perfect property in Ashkelon with our help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div
                  className="text-3xl font-serif mb-3"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  "
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                  "{t.quote}"
                </p>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "oklch(0.72 0.12 75)" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="font-bold text-sm"
                  style={{ color: "oklch(0.235 0.058 250)" }}
                >
                  {t.name}
                </p>
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ─────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            Resources &amp; Insights
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <p className="text-center mb-10" style={{ color: "#6b7280" }}>
            Helpful guides and insights for prospective buyers exploring the Ashkelon property market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                className="rounded-lg overflow-hidden shadow border"
                style={{ borderColor: "#e5e7eb" }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="inline-block px-4 py-2 rounded text-sm font-medium transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: "oklch(0.72 0.12 75)",
                      color: "oklch(0.235 0.058 250)",
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ──────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.005 85)" }}>
        <div className="container">
          <h2
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            Get in Touch
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-4 rounded"
            style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
          />
          <p className="text-center mb-10" style={{ color: "#6b7280" }}>
            Ready to find your dream property in Ashkelon? Contact us for a free consultation.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
