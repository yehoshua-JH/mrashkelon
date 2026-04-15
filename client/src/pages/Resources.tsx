// =============================================================
// MR. ASHKELON — Resources Listing Page
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { BLOG_POSTS } from "@/lib/data";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project_ab2b12dc.jpg";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <PageHero
          title="Resources & Guides"
          subtitle="Expert advice for overseas buyers and new Olim"
          image={HERO_IMAGE}
        />
      </div>

      <section className="py-20" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-2">Knowledge Base</h2>
            <span className="gold-divider mx-auto" />
            <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "oklch(0.45 0.03 250)" }}>
              Our guides are written to help overseas buyers and new Olim navigate the Israeli
              property market with confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
                style={{ textDecoration: "none" }}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
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
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "oklch(0.55 0.02 85)" }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3
                    className="text-lg font-bold leading-snug mb-3"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.45 0.03 250)" }}>
                    {post.excerpt}
                  </p>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  >
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
