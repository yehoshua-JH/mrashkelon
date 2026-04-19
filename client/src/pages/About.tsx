// =============================================================
// MR. ASHKELON — About Page
// Matches Lovable source About.tsx exactly:
// - Hero: "About" title, beach bg at 30% opacity
// - Main: "Mr Ashkelon is Motti Ben Yitzhack" h2 + gold divider
// - Float-right formal photo, 3 paragraphs, Mr&Mrs banner centered
// - "What We Offer" section: Sales, Investment, Rentals cards
// - "Learn more about our services" CTA button
// =============================================================

import { Home, TrendingUp, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const MOTTI_SUSAN_FORMAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/motti-susan-formal-src_d6f775ca.jpg";
const MR_MRS_BANNER =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/mr-mrs-ashkelon-plus_3566e0a2.png";

const services = [
  {
    icon: Home,
    title: "Sales",
    description:
      "Our Mission is to provide our clients with customer service that is second to none through our commitment to excellence and the principles of regular consultation, efficient cost controls and rigorous project management.",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description:
      "Whether you are contemplating buying an investment property for the first time, undertaking a new development, adding to your existing portfolio, seeking advice to ensure that you are achieving the maximum potential from your holding(s) or want to sell, our Investment service can provide valuable independent advice to you.",
  },
  {
    icon: Key,
    title: "Rentals",
    description:
      "We have a number of apartments available for Long Term Vacation Rental. Please contact us for full details, availability and rental prices.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner — matches Lovable: beach bg at 30% opacity, just "About" */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)",
          }}
        />
        <h1 className="relative text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
          About
        </h1>
      </section>

      {/* Main Content — matches Lovable exactly */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Mr Ashkelon is Motti Ben Yitzhack
          </h2>
          <div className="w-20 h-1 bg-secondary mb-8" />

          <div className="text-muted-foreground leading-relaxed">
            <img
              src={MOTTI_SUSAN_FORMAL}
              alt="Motti and Susan Ben Yitzhack"
              className="float-right ml-6 mb-4 w-48 md:w-56 rounded-lg shadow-md"
            />
            <p className="mb-6">
              Mr Ashkelon specializes in property sales, rentals and management in the Ashkelon area.
            </p>
            <p className="mb-6">
              Founded by Motti Ben Yitzhack, Mr Ashkelon has helped countless real estate investors
              with the purchase of property and homes in the Ashkelon area. Ben has extensive
              experience in the real estate market in Israel and because he knows the ins and outs of
              this specific market he is able to make the process of buying property in Israel a more
              pleasant experience. His experience is especially helpful when it comes to navigating
              language barriers, cultural acclimatization and understanding property laws and
              regulations in this region.
            </p>
            <p>
              Ashkelon is a beautiful coastal town that is situated towards the south of Israel.
              It's fast becoming the go-to area for property investors as development is happening at
              a rapid pace. Please get in touch if you're interested in finding out more about the
              investment opportunities available in this area or if you're looking to relocate in the
              near future.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <img
              src={MR_MRS_BANNER}
              alt="Mr & Mrs Ashkelon Plus - Coastal & Jerusalem Property Specialists"
              className="max-w-sm md:max-w-md h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Offer — matches Lovable exactly */}
      <section className="py-16 bg-muted">
        <div className="container px-4 max-w-5xl">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
                    <service.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/services">Learn more about our services</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
