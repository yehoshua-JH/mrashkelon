// =============================================================
// MR. ASHKELON — Blog Article Detail Page
// Matches Lovable source ResourceDetail.tsx exactly:
// - Hero with image at 40% opacity, title in white
// - Back to Resources ghost button
// - Full-width article image
// - Content as array of paragraphs with ### headers
// - "Need help getting started?" CTA box
// - ContactForm at bottom
// =============================================================

import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              Resource Not Found
            </h1>
            <Button asChild>
              <Link href="/resources">Back to Resources</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Content is always an array of strings
  const contentArray: string[] = Array.isArray(post.content)
    ? (post.content as string[])
    : String(post.content)
        .trim()
        .split("\n\n")
        .filter((p: string) => p.trim() !== "");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero — matches Lovable: image at 40% opacity over primary bg */}
      <section className="relative h-64 md:h-96">
        <div className="absolute inset-0 bg-primary" />
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="container px-4">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content — matches Lovable: max-w-3xl single column */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-3xl">
          <Button
            variant="ghost"
            asChild
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <Link href="/resources">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
            </Link>
          </Button>

          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg mb-8 max-h-[400px] object-cover"
          />

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {contentArray.map((paragraph, i) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-xl font-heading font-bold text-foreground mt-8"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-heading font-bold text-foreground mt-8"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.includes("—")) {
                const [boldPart, ...rest] = paragraph.split("—");
                return (
                  <div key={i}>
                    <p>
                      <strong className="text-foreground">
                        {boldPart.replace(/\*\*/g, "").trim()}
                      </strong>
                      {" — "}
                      {rest.join("—").trim()}
                    </p>
                  </div>
                );
              }
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                  }}
                />
              );
            })}
          </div>

          {/* CTA Box — matches Lovable exactly */}
          <div className="mt-12 p-8 bg-muted rounded-xl text-center">
            <p className="text-foreground font-heading font-semibold text-lg mb-4">
              Need help getting started?
            </p>
            <Button
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/contact">
                Let Motti guide you on your property investment journey
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
