// =============================================================
// MR. ASHKELON — Resources Listing Page
// Matches Lovable source: hero banner with beach bg, 3-col card grid,
// no category badges or date metadata, "Read More →" link style
// =============================================================

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner — matches Lovable: beach bg at 20% opacity */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://mrashkelon.com/wp-content/uploads/2016/10/Ashkelon-Israel_Mr-Ashkelon.jpg)",
          }}
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Resources & Insights
          </h1>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            Helpful guides for prospective buyers exploring the Ashkelon property market.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full border-border/50">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-primary mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-secondary hover:text-secondary/80 group-hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
