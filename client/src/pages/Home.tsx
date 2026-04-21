// MR. ASHKELON — Homepage
// Exact match of Lovable source: Index.tsx + all section components
// Sections: Hero, About, Services, Properties, AshkelonSection,
//           VideoTestimonials, Testimonials, Blog, Contact

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Home as HomeIcon,
  Key,
  FileText,
  Hammer,
  Plane,
  Building,
  Waves,
  TrendingDown,
  Users,
  Sun,
  Quote,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { PROPERTIES } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/data";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/logo-white_1f2ffe27.webp";
const FEATURED_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/briza-penthouse-clean_fcc3338e.png";

const services = [
  { Icon: HomeIcon, title: "Property Purchase", description: "Expert guidance through every step of buying property in Ashkelon, from search to closing." },
  { Icon: Key, title: "Rentals & Holiday Homes", description: "Find the perfect rental or holiday home in Ashkelon's best neighborhoods." },
  { Icon: FileText, title: "Legal & Documentation", description: "Full support with contracts, permits, and all legal paperwork in Hebrew and English." },
  { Icon: Hammer, title: "Contractor Management", description: "We oversee renovations and construction, managing trusted local contractors on your behalf." },
  { Icon: Plane, title: "Relocation Assistance", description: "Comprehensive help settling into life in Israel — from utilities to community connections." },
  { Icon: Building, title: "Property Management", description: "Ongoing management of your property, whether you live locally or abroad." },
];

const ashkelonHighlights = [
  { Icon: Waves, title: "Mediterranean Coast", text: "Stunning beaches and a relaxed coastal lifestyle year-round." },
  { Icon: TrendingDown, title: "Affordable Prices", text: "Property prices significantly lower than Tel Aviv, Jerusalem, or Netanya." },
  { Icon: Users, title: "Growing Community", text: "A thriving Anglo community with English-speaking services and social groups." },
  { Icon: Sun, title: "300+ Sunny Days", text: "Enjoy warm Mediterranean weather with over 300 days of sunshine per year." },
];

const videos = [
  { id: "PeumXmRNhUo", name: "Debbie & Marc" },
  { id: "2dNTUaaR8hI", name: "Matthew & Maxine" },
  { id: "B4kCThOC8LE", name: "Annabel" },
];

const testimonials = [
  { name: "Alan Goldberg", location: "London, UK", text: "As an experienced UK property developer, I can say Motti resolved complex issues calmly and professionally. His knowledge of the local market and ability to navigate challenges is truly exceptional." },
  { name: "Jonny & Karen Dorman", location: "London, UK", text: "Motti's help was invaluable when buying abroad. He introduced us to all the contacts we needed — lawyers, contractors, interior designers — and guided us through every step of the process." },
  { name: "Anthony Reindorp", location: "London, UK", text: "First class service. Totally professional. Motti made the entire experience smooth and stress-free. I wouldn't hesitate to recommend him to anyone looking to buy in Ashkelon." },
  { name: "Brian & Sharon Sternfeld", location: "Manchester, UK", text: "Motti handled all the paperwork, got contractors on time, and continues to manage our property. His ongoing support even after the purchase is what sets him apart from others." },
  { name: "Aryeh Shender", location: "Israel", text: "Motti takes away all the pain of buying in Israel. His hands-on approach and dedication to his clients means you can relax knowing everything is being taken care of professionally." },
  { name: "Ian Travis", location: "NEHP World Wide", text: "Finding housing for over a dozen expatriates with diverse needs while setting up a new business operation in a foreign country presents many challenges. Motti has provided a prompt, professional, patient, personalized yet budget-friendly and efficient service, finding and furnishing apartments for our staff." },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, oklch(0.22 0.04 255) 60%, oklch(0.30 0.04 255) 100%)",
        }}
      >
        {/* Subtle overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, oklch(0.72 0.12 75 / 0.15) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 container px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "Georgia, serif", color: "#ffffff" }}
              >
                Welcome to your future home in Israel!
              </h1>
              <p className="text-lg md:text-xl mb-8" style={{ color: "rgba(255,255,255,0.80)" }}>
                Discover the Mr. Ashkelon difference. Let the leading Anglo licensed Real Estate Broker
                be your guide to a seamless experience in purchasing property in Ashkelon, Israel's
                best-kept secret.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold shadow-lg mb-6 transition-colors"
                style={{
                  backgroundColor: "var(--secondary)",
                  color: "var(--secondary-foreground)",
                }}
              >
                Contact us for a consultation
              </a>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
                100's of satisfied buyers have purchased with Mr. Ashkelon
              </p>
            </div>

            {/* Right: Featured Property Card */}
            <div>
              <Link href="/briza-penthouse" className="block group">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <div
                    className="text-center py-3 px-4"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <p className="font-bold text-lg tracking-wide" style={{ color: "var(--accent-foreground)" }}>
                      LAST AVAILABLE!
                    </p>
                    <p className="text-sm" style={{ color: "rgba(34,40,60,0.80)" }}>
                      BRIZA BY EFGAD — Penthouse with Sea Views
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src={FEATURED_IMG}
                      alt="BRIZA BY EFGAD Penthouse — Ashkelon"
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ height: "350px", objectPosition: "center top" }}
                    />
                    <div
                      className="absolute top-4 right-0 font-bold text-xs px-4 py-2 rounded-l-md shadow-lg"
                      style={{
                        backgroundColor: "var(--secondary)",
                        color: "var(--secondary-foreground)",
                      }}
                    >
                      VIEW PROPERTY →
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to top, var(--background), transparent)" }} />
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/mr-mrs-ashkelon-plus-src_d119d1e2.png"
                alt="Mr. & Mrs. Ashkelon PLUS"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
              >
                About Us
              </h2>
              <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                Motti and Susan Ben Yitzhack are licensed Anglo real estate brokers based in Ashkelon, Israel. With years of experience and deep local expertise, they specialize in helping English-speaking buyers navigate the Israeli property market with confidence and ease.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                From finding your dream property to handling legal documentation, managing contractors, arranging rentals, and assisting with every aspect of relocation — Motti and Susan provide a comprehensive, hands-on service that removes the stress from buying property abroad.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded font-semibold transition-colors"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
            >
              Our Services
            </h2>
            <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
            <p className="max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Everything you need for a smooth property experience in Israel — all under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border p-8 text-center transition-shadow duration-300 hover:shadow-lg"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 transition-colors group-hover:bg-opacity-25"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <service.Icon
                    style={{ width: "1.75rem", height: "1.75rem", color: "var(--secondary)" }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ──────────────────────────────── */}
      <section id="properties" className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="container px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
            >
              Featured Properties
            </h2>
            <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
            <p className="max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Browse our curated selection of properties in Ashkelon's most sought-after neighborhoods.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.map((property) => (
              <Link
                href={`/property/${property.slug}`}
                key={property.slug}
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg h-full border"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: "16/10", position: "relative" }}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-semibold mb-1"
                      style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
                    >
                      {property.title}
                    </h3>
                    <p
                      className="text-sm flex items-center gap-1 mb-4"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <MapPin style={{ width: "0.875rem", height: "0.875rem" }} />
                      {property.location || "Ashkelon, Israel"}
                    </p>
                    <p
                      className="text-sm mb-4"
                      style={{
                        color: "var(--muted-foreground)",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {property.tagline}
                    </p>
                    <div
                      className="w-full text-center py-2 rounded border font-medium text-sm transition-colors"
                      style={{
                        borderColor: "var(--secondary)",
                        color: "var(--secondary)",
                      }}
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ASHKELON ─────────────────────────────────────── */}
      <section id="ashkelon" className="py-20" style={{ backgroundColor: "var(--primary)" }}>
        <div className="container px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "#ffffff" }}
            >
              Why Ashkelon?
            </h2>
            <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
            <p className="max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.70)" }}>
              Israel's best-kept secret — a beautiful coastal city with affordable living, warm
              community, and incredible quality of life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ashkelonHighlights.map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.20)" }}
                >
                  <item.Icon style={{ width: "2rem", height: "2rem", color: "var(--secondary)" }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "Georgia, serif", color: "#ffffff" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ───────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="container px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
            >
              Testimonials
            </h2>
            <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
            <p className="max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Hear directly from our happy clients about their experience with Mr. Ashkelon.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={`${v.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
                <p
                  className="mt-3 font-semibold text-sm"
                  style={{ color: "var(--primary)" }}
                >
                  {v.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITTEN TESTIMONIALS ─────────────────────────────── */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
            >
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
            <p className="max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Hear from buyers who found their perfect property in Ashkelon with our help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-lg p-7 border"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <Quote style={{ width: "2rem", height: "2rem", color: "oklch(0.72 0.12 75 / 0.40)", marginBottom: "1rem" }} />
                <p
                  className="leading-relaxed mb-6 italic text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      style={{ width: "1rem", height: "1rem", fill: "var(--secondary)", color: "var(--secondary)" }}
                    />
                  ))}
                </div>
                <p className="font-semibold" style={{ color: "var(--primary)" }}>{t.name}</p>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG / RESOURCES ─────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="container px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
            >
              Resources & Insights
            </h2>
            <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
            <p className="max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Helpful guides and insights for prospective buyers exploring the Ashkelon property market.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                href={`/resources/${post.slug}`}
                key={post.slug}
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="rounded-lg overflow-hidden border transition-shadow duration-300 hover:shadow-lg h-full"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                >
                  <div className="overflow-hidden" style={{ height: "12rem" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-semibold mb-2 leading-snug"
                      style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "var(--muted-foreground)",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-6 py-3 rounded border font-semibold transition-colors"
              style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            >
              View All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ backgroundColor: "var(--muted)" }}>
        <div className="container px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "Georgia, serif", color: "var(--primary)" }}
            >
              Get in Touch
            </h2>
            <div className="w-16 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: "var(--secondary)" }} />
            <p className="max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Ready to start your property journey in Ashkelon? Contact us today for a free consultation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <ContactForm />
            {/* Contact Details — matches Contact page icon set exactly */}
            <div className="space-y-6">
              {/* Israel phone */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Phone style={{ width: "1.25rem", height: "1.25rem", color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--primary)" }}>Israel</p>
                  <a href="tel:054-731-2118" className="text-sm hover:underline" style={{ color: "var(--muted-foreground)" }}>054-731-2118</a>
                </div>
              </div>
              {/* USA phone */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Phone style={{ width: "1.25rem", height: "1.25rem", color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--primary)" }}>USA</p>
                  <a href="tel:1-612-424-5387" className="text-sm hover:underline" style={{ color: "var(--muted-foreground)" }}>1-612-424-5387</a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Mail style={{ width: "1.25rem", height: "1.25rem", color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--primary)" }}>Email</p>
                  <a href="mailto:motti@mrashkelon.com" className="text-sm hover:underline" style={{ color: "var(--muted-foreground)" }}>motti@mrashkelon.com</a>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <MapPin style={{ width: "1.25rem", height: "1.25rem", color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--primary)" }}>Address</p>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    Hatayassim St.<br />Ashkelon 78573, Israel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ── Inline Contact Form ───────────────────────────────────────
function ContactForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We will be in touch shortly.");
      }}
    >
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 rounded border text-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>
          Phone
        </label>
        <input
          type="tel"
          className="w-full px-3 py-2 rounded border text-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 rounded border text-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
          placeholder="Your email address"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>
          Message <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          required
          rows={4}
          className="w-full px-3 py-2 rounded border text-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", resize: "vertical" }}
          placeholder="Tell us about your property needs..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded font-semibold text-sm transition-colors"
        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
      >
        Send Message
      </button>
    </form>
  );
}
