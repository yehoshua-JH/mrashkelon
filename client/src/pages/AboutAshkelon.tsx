// =============================================================
// MR. ASHKELON — About Ashkelon Page
// Matches Lovable source AboutAshkelon.tsx exactly:
// - Hero: "About Ashkelon" title, beach bg at 30% opacity
// - "Information about Ashkelon" heading with gold underline
// - shadcn Accordion with 8 items
// - ContactSection at the bottom
// =============================================================

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AboutAshkelon() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner — matches Lovable: beach bg at 30% opacity, just "About Ashkelon" */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)",
          }}
        />
        <h1 className="relative text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
          About Ashkelon
        </h1>
      </section>

      {/* Information */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Information about Ashkelon
          </h2>
          <div className="w-20 h-1 bg-secondary mb-8" />

          <Accordion type="single" collapsible defaultValue="about" className="space-y-4">
            <AccordionItem value="about" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                About Ashkelon
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Ashkelon, the City of Gardens, is located along Israel's southern coast and is
                  considered the capital of the Southern district. It has recreation and tourism
                  centres and is in a constant development boom. The city has a population of approximately
                  180,000 and its jurisdiction extends over 55,000 dunams, not far short of the
                  size of Tel Aviv, making it one of Israel's largest population centres.
                </p>
                <p>
                  The city's location between the sea and the outskirts of the desert give the
                  residents a comfortable, temperate climate throughout the year.
                </p>
                <p>
                  Ashkelon is one of the oldest cities in the world and is replete with history. At
                  its centre there are ancient sites, among the rarest in the world, alongside green
                  agricultural areas extending into the horizon. In the last decade alone, Ashkelon
                  has absorbed over 40,000 new residents including immigrants and young families who
                  have been drawn by the charm of its quality of life.
                </p>
                <p>
                  Ashkelon surely must be one of Israel's best kept secrets and the ideal place to
                  fulfil the dream of living in Israel. Sun, sea, beautiful beaches, clean, shopping
                  facilities, schools, industry, excellent road and rail services and so much more…
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mayor" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Greetings from the Mayor
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p className="italic">
                  The following is an extract from the Ashkelon Municipal website.
                </p>
                <p>Dear Visitors,</p>
                <p>
                  Since the dawn of history 5,000 years ago, Ashkelon, due to its strategic
                  location as an important port, has attracted many people and varied populations
                  who lived in the city and contributed to its prosperity.
                </p>
                <p>
                  This dynamic city boasts a high quality of life, excellent educational
                  institutions, rich and varied leisure activities for the entire population with
                  many recreation spots located around the city.
                </p>
                <p>
                  I invite you to visit Ashkelon and enjoy the many attractions that the city has
                  to offer. Among other things, you can stroll along 12 kilometers of spectacular
                  sea shore, have fun at the Sea Park located on Delilah Beach, and spend time at
                  the beautiful marina with its new large commercial center, cinema, cafés, and
                  restaurants.
                </p>
                <p className="font-semibold text-foreground">
                  Tomer Glam
                  <br />
                  Mayor of Ashkelon
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="olim" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Information for Olim
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p className="font-semibold text-foreground">
                  Glossary of Useful Administrative Terms
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium text-foreground italic">Bituach Leumi</span> — The
                    National Insurance
                  </li>
                  <li>
                    <span className="font-medium text-foreground italic">Kupat Cholim</span> —
                    Health Insurance fund
                  </li>
                  <li>
                    <span className="font-medium text-foreground italic">Misrad HaKlita</span> —
                    Ministry of Immigrant Absorption
                  </li>
                  <li>
                    <span className="font-medium text-foreground italic">Misrad HaPnim</span> —
                    Interior Ministry
                  </li>
                  <li>
                    <span className="font-medium text-foreground italic">Teudat Zehut</span> —
                    Identity card
                  </li>
                  <li>
                    <span className="font-medium text-foreground italic">Sal Klita</span> —
                    Financial assistance paid in the 6 months following Aliyah
                  </li>
                  <li>
                    <span className="font-medium text-foreground italic">Ulpan</span> — Hebrew
                    classes
                  </li>
                </ul>
                <p className="text-sm">
                  For more information, visit the{" "}
                  <a
                    href="http://www.jewishagency.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Jewish Agency for Israel
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="emergency" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Emergency Telephone Numbers
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    ["Police", "100"],
                    ["Ambulance", "101"],
                    ["Fire Service", "102"],
                    ["Electric Company Hotline", "103"],
                    ["Municipality Hotline", "106 / 08-6792306"],
                    ["IDF Home Front Command", "1207"],
                    ["Barzilai Hospital", "08-6745700"],
                  ].map(([name, number]) => (
                    <div
                      key={name}
                      className="flex justify-between py-1 border-b border-border"
                    >
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground">{number}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="health" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Health Providers
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm">
                  {[
                    { name: "Maccabi", address: "Hagvura 3", phone: "(08) 6747666 or *3555" },
                    { name: "Meuhedet", address: "Hagvura 11", phone: "(08) 6741741 or *3833" },
                    {
                      name: "Leumit",
                      address: "Beit Frank, Rechov Herzl 30",
                      phone: "(08) 6790555",
                    },
                    {
                      name: "Clalit",
                      address: "Eli Cohen 9, 7th floor",
                      phone: "(08) 67772333 or *2700",
                    },
                    {
                      name: "Barzilai Hospital",
                      address: "Rechov Ha'histradrut",
                      phone: "(08) 6745700",
                    },
                  ].map((provider) => (
                    <div
                      key={provider.name}
                      className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border gap-1"
                    >
                      <span className="font-medium text-foreground">{provider.name}</span>
                      <span className="text-muted-foreground">{provider.address}</span>
                      <span className="text-muted-foreground">{provider.phone}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="synagogues" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Synagogues
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Ashkelon has more than 160 synagogues, the majority of which are Sephardi. There
                  are a number of Ashkenaz synagogues, the most popular with the English speaking
                  community being:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium text-foreground">
                      Central Synagogue, Afridar
                    </span>{" "}
                    — Tel: (Marc Steinberg) 0526647006
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Ohel Hanna</span>{" "}
                    — Ashkenazi English speakers – Jonty 0525666600
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Barnea Synagogue</span> — Tel:
                    052 637 4667
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Chabad</span> — Rabbi Lieberman
                    (English speaker), Tel: 08 675 4913
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Kehillat Netzach Israel</span> —
                    8 Harel Street, Tel: 08-6711370/1 (Conservative)
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="beaches" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Beaches
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  The 10 kilometer-long Ashkelon beach attracts both local and out of towners
                  beach-goers. Ashkelon, proclaimed a national tourism site, is rapidly developing
                  this sphere.
                </p>
                <p>
                  Tourists and vacationers have at their disposal restaurants and pubs, sports
                  facilities and heated swimming pools, two
                  country clubs, an amphitheater, a tennis club, museums, cinemas, bowling alleys,
                  fishing spots, and bathing beaches equipped with all the necessary amenities.
                </p>
                <p>
                  The Ashkelon Marina Area has a 600-vessel docking capacity making it one of the
                  largest marinas in Israel.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="transport" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Public Transport
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Buses</p>
                  <p>
                    The bus services are very comprehensive in Ashkelon with many local lines and
                    Inter-City Lines. There are two bus stations, one in the city centre next to
                    the Giron Shopping Mall, the other in the Migdal area.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Railways</p>
                  <p>
                    The Ashkelon Railway Station is conveniently located. Trains
                    run towards Tel Aviv and the North with connections to all parts of the country.
                    The hi-speed train to Tel Aviv is just a 41 minute ride.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Taxi Services</p>
                  <div className="text-sm space-y-1 mt-1">
                    <p>Shaon — (08) 6788888</p>
                    <p>Degel — (08) 6711111</p>
                    <p>Shimshon — (08) 6755555</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
