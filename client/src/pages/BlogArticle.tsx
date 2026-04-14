// =============================================================
// MR. ASHKELON — Blog Article Detail Page
// Dynamic page for /resources/:slug
// =============================================================

import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { BLOG_POSTS } from "@/lib/data";

function ArticleMarkdown({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  return (
    <div className="prose-custom space-y-3">
      {lines.map((line, i) => {
        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-bold mt-8 mb-2" style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}>
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={i} className="font-bold text-sm" style={{ color: "oklch(0.235 0.058 250)" }}>
              {line.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.45 0.03 250)" }}>
              <span style={{ color: "oklch(0.72 0.12 75)", marginTop: "3px", flexShrink: 0 }}>✓</span>
              <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </div>
          );
        }
        if (line.startsWith("|")) {
          const cells = line.split("|").filter((c) => c.trim() !== "");
          if (cells.every((c) => c.trim().match(/^-+$/))) return null;
          return (
            <div key={i} className="grid gap-1 text-xs" style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}>
              {cells.map((cell, j) => (
                <span key={j} className="py-1.5 px-3 rounded" style={{ backgroundColor: "oklch(0.955 0.012 85)", color: "oklch(0.45 0.03 250)" }}>
                  {cell.trim()}
                </span>
              ))}
            </div>
          );
        }
        if (line.trim() === "") return <div key={i} className="h-2" />;
        return (
          <p key={i} className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}
            dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>") }}
          />
        );
      })}
    </div>
  );
}

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}>
              Article Not Found
            </h1>
            <Link href="/resources" className="text-sm underline" style={{ color: "oklch(0.72 0.12 75)" }}>
              View All Resources
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="pt-16">
        <div
          className="relative"
          style={{
            height: "400px",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "oklch(0.235 0.058 250 / 0.65)" }}
          />
          <div className="relative z-10 container h-full flex flex-col justify-end pb-10">
            <div
              className="inline-block px-3 py-1 rounded text-xs font-semibold mb-3 self-start"
              style={{
                backgroundColor: "oklch(0.72 0.12 75)",
                color: "oklch(0.235 0.058 250)",
              }}
            >
              {post.category}
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold text-white max-w-2xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-3 mt-3 text-xs" style={{ color: "oklch(0.82 0.01 85)" }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <ArticleMarkdown content={post.content} />

              <div className="mt-10 pt-6" style={{ borderTop: "1px solid oklch(0.88 0.015 85)" }}>
                <Link
                  href="/resources"
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  ← Back to All Resources
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Box */}
              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: "oklch(0.235 0.058 250)" }}
              >
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Need Expert Advice?
                </h3>
                <p className="text-xs mb-4" style={{ color: "oklch(0.72 0.02 85)" }}>
                  Motti is available to answer your questions and guide you through the buying process.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-2.5 rounded font-semibold text-xs transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.72 0.12 75)",
                    color: "oklch(0.235 0.058 250)",
                  }}
                >
                  Contact Motti
                </Link>
              </div>

              {/* Other Articles */}
              {otherPosts.length > 0 && (
                <div>
                  <h3
                    className="text-sm font-bold mb-4"
                    style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                  >
                    More Resources
                  </h3>
                  <div className="space-y-4">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/resources/${p.slug}`}
                        className="flex gap-3 group"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-16 h-16 rounded object-cover flex-shrink-0"
                        />
                        <div>
                          <p
                            className="text-xs font-semibold leading-snug group-hover:underline"
                            style={{ color: "oklch(0.235 0.058 250)" }}
                          >
                            {p.title}
                          </p>
                          <p className="text-xs mt-1" style={{ color: "oklch(0.55 0.02 85)" }}>
                            {p.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactForm title="Have Questions?" subtitle="Our team is here to help you navigate the Ashkelon property market." showContactInfo={false} />
      <Footer />
    </div>
  );
}
