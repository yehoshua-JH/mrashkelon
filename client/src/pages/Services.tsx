// =============================================================
// MR. ASHKELON — Services Page
// Matches Lovable source Services.tsx exactly:
// - Hero: "Our Services" title, beach bg at 30% opacity
// - Sales section: text left, marina image right
// - "Why now is the time to move to Ashkelon" section (bg-muted)
// - Investment section: coastal image left, text+list right
// =============================================================

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)",
          }}
        />
        <h1 className="relative text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
          Our Services
        </h1>
      </section>

      {/* Sales Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Sales</h2>
              <div className="w-20 h-1 bg-secondary mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mr Ashkelon, the city's only Anglo Licensed Real Estate Broker, provides Sales
                  Advice, Assistance, Management, Project Supervision and Investment consultancy
                  throughout the beautiful Mediterranean coastal city of Ashkelon.
                </p>
                <p>
                  Our Mission is to provide our clients with customer service that is second to none
                  through our commitment to excellence and the principles of regular consultation,
                  efficient cost controls and rigorous project management.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://mrashkelon.com/wp-content/uploads/2016/08/Things-to-Do-in-Ashkelon_MrAshkelon.jpg"
                alt="Ashkelon Marina at night"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Why now is the time to move to Ashkelon
          </h2>
          <div className="w-20 h-1 bg-secondary mb-8" />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Ashkelon is one of Israel's most beautiful cities. Its history dates back over 3000
              years and it is a treasure trove for antiquities and archeological investigations.
              Apart from the many miles of golden beaches the city has so much to offer in so many
              different ways. Ashkelon enjoys near year-round sunshine with warm temperatures even
              in the winter.
            </p>
            <p>
              As a residential and commuter city, Ashkelon benefits from a sound development plan
              that provides excellent housing facilities, road and rail network and social facilities
              for its 128,000 residents. In the city's commercial areas can be found many retail
              stores and service industry businesses and in its industrial zones several global name
              brands such as Carlsberg Brewery.
            </p>
            <p>
              Ashkelon has something for everyone - a beautiful Marina, complete with a variety of
              coffee shops and restaurants, a top rated culture centre and theatre, first class
              sports facilities and many leisure activities. Given the relatively small size of
              Ashkelon, there is a limit to the availability of prime development sites and coupled
              with current affordability, there is no better time than now to pick the best spot for
              your home in Paradise.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">Purchase a property in Ashkelon</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://mrashkelon.com/wp-content/uploads/2022/02/briza-view.jpg"
                alt="Ashkelon coastal view"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Investment</h2>
              <div className="w-20 h-1 bg-secondary mb-6" />
              <p className="font-semibold text-foreground mb-4">
                Maximizing your returns on property investment
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you are contemplating buying an investment property for the first time,
                undertaking a new development, adding to your existing portfolio, seeking advice to
                ensure that you are achieving the maximum potential from your holding(s) or want to
                sell, our Investment service can provide valuable independent advice to you. Our
                services include:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span> Continually scanning the market
                  for the right opportunities against your requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span> Arranging professional valuations,
                  surveys and site inspections
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span> Providing an assessment on the net
                  return on investment (ROI)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span> Identifying appropriate developers
                  and building contractors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span> Providing a broker service in
                  matching investors to developers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span> Selection of legal advisor
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Contact us about your investment requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
