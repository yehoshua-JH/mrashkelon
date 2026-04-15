// =============================================================
// MR. ASHKELON — About Ashkelon Page
// Features accordion with all city info
// =============================================================

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { ACCORDION_DATA } from "@/lib/data";

const ASHKELON_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/ashkelon-israel_78811096.jpg";

function SimpleMarkdown({ text }: { text: string }) {
  // Very simple markdown renderer for the accordion content
  const lines = text.trim().split("\n");
  return (
    <div className="text-sm leading-relaxed space-y-2" style={{ color: "oklch(0.45 0.03 250)" }}>
      {lines.map((line, i) => {
        if (line.startsWith("## ")) {
          return (
            <h3 key={i} className="text-base font-bold mt-4 mb-1" style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}>
              {line.replace("## ", "")}
            </h3>
          );
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={i} className="font-bold" style={{ color: "oklch(0.235 0.058 250)" }}>
              {line.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <div key={i} className="flex items-start gap-2">
              <span style={{ color: "oklch(0.72 0.12 75)", marginTop: "2px" }}>•</span>
              <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </div>
          );
        }
        if (line.startsWith("|")) {
          // Table row
          const cells = line.split("|").filter((c) => c.trim() !== "");
          if (cells.every((c) => c.trim().match(/^-+$/))) return null;
          return (
            <div key={i} className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}>
              {cells.map((cell, j) => (
                <span key={j} className="text-xs py-1 px-2 rounded" style={{ backgroundColor: "oklch(0.955 0.012 85)" }}>
                  {cell.trim()}
                </span>
              ))}
            </div>
          );
        }
        if (line.trim() === "") return <div key={i} className="h-1" />;
        return (
          <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>") }} />
        );
      })}
    </div>
  );
}

export default function AboutAshkelon() {
  const [openId, setOpenId] = useState<string | null>("about-ashkelon");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <PageHero
          title="About Ashkelon"
          subtitle="Discover Israel's most exciting coastal city"
          image={ASHKELON_IMAGE}
        />
      </div>

      {/* Intro */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="section-heading mb-2">The City of Gardens</h2>
          <span className="gold-divider mx-auto" />
          <p className="mt-6 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
            Ashkelon is one of Israel's most dynamic and rapidly growing cities. Located on the
            Mediterranean coast, it combines 5,000 years of history with modern infrastructure,
            beautiful beaches, and a warm, welcoming community. Discover why thousands of overseas
            buyers and new Olim choose Ashkelon as their home every year.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.955 0.012 85)" }}>
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {ACCORDION_DATA.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden shadow-sm"
                style={{ backgroundColor: "oklch(1 0 0)" }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200"
                  style={{
                    backgroundColor:
                      openId === item.id
                        ? "oklch(0.235 0.058 250)"
                        : "oklch(1 0 0)",
                    color:
                      openId === item.id
                        ? "oklch(0.985 0.008 85)"
                        : "oklch(0.235 0.058 250)",
                  }}
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                >
                  <span
                    className="font-semibold text-sm"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="text-lg transition-transform duration-200"
                    style={{
                      transform: openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                      color: openId === item.id ? "oklch(0.72 0.12 75)" : "oklch(0.55 0.02 85)",
                    }}
                  >
                    ▾
                  </span>
                </button>
                {openId === item.id && (
                  <div className="px-6 py-5">
                    <SimpleMarkdown text={item.content} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Ready to Make Ashkelon Your Home?" subtitle="Contact us for a free consultation and start your property search today." />
      <Footer />
    </div>
  );
}
