// =============================================================
// MR. ASHKELON — About Jerusalem Page
// Mirrors the AboutAshkelon page structure:
// - Hero: "About Jerusalem" title, Jerusalem bg image
// - "Information about Jerusalem" heading with gold underline
// - shadcn Accordion with key topics
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

export default function AboutJerusalem() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(/manus-storage/western-wall-jerusalem_841fa830.jpg)",
          }}
        />
        <h1 className="relative text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
          About Jerusalem
        </h1>
      </section>

      {/* Information */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Information about Jerusalem
          </h2>
          <div className="w-20 h-1 bg-secondary mb-8" />

          <Accordion type="single" collapsible defaultValue="about" className="space-y-4">

            <AccordionItem value="about" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                About Jerusalem
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Jerusalem is one of the oldest cities in the world and the eternal capital of the
                  Jewish people. With a population of over 950,000, it is Israel's largest city and
                  serves as the country's political, spiritual, and cultural heart.
                </p>
                <p>
                  The city sits at an elevation of approximately 800 metres above sea level in the
                  Judean Hills, giving it a unique four-season climate — warm, dry summers and cool
                  winters with occasional snow. This elevation also affords Jerusalem its
                  characteristic golden stone architecture and breathtaking panoramic views.
                </p>
                <p>
                  Jerusalem is home to three of the world's major religions — Judaism, Christianity,
                  and Islam — and attracts millions of visitors and new residents each year who are
                  drawn by its unique blend of ancient history, vibrant modern life, and deep
                  spiritual significance.
                </p>
                <p>
                  The city has experienced significant real estate growth in recent years, with new
                  developments in neighbourhoods such as Talpiot, Arnona, Baka, and the German
                  Colony offering modern apartments alongside Jerusalem's iconic stone-clad buildings.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="talpiot" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Talpiot — Jerusalem's Modern Neighbourhood
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Talpiot is one of Jerusalem's most sought-after residential and commercial
                  neighbourhoods, located in the southern part of the city. It is well known for its
                  modern apartment buildings, excellent transport links, and proximity to the city
                  centre.
                </p>
                <p>
                  The neighbourhood offers a wide range of amenities including supermarkets,
                  restaurants, cafés, banks, and medical clinics. The Malha Mall — one of Israel's
                  largest shopping centres — is just minutes away, as is the Teddy Stadium and the
                  Jerusalem Biblical Zoo.
                </p>
                <p>
                  Talpiot is particularly popular with young families and professionals, and has
                  seen a surge of new residential developments in recent years, including the
                  prestigious NIYA project, which offers high-specification apartments with modern
                  finishes and excellent views.
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
                    ["Municipality Hotline", "106"],
                    ["IDF Home Front Command", "1207"],
                    ["Hadassah Hospital Ein Kerem", "02-6777111"],
                    ["Shaare Zedek Hospital", "02-6555111"],
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
                    { name: "Hadassah Ein Kerem", address: "Kiryat Hadassah", phone: "02-6777111" },
                    { name: "Hadassah Mount Scopus", address: "Mount Scopus", phone: "02-5844111" },
                    { name: "Shaare Zedek Medical Centre", address: "Shmu'el Bait St 12", phone: "02-6555111" },
                    { name: "Maccabi Jerusalem", address: "Multiple branches", phone: "*3555" },
                    { name: "Clalit Jerusalem", address: "Multiple branches", phone: "*2700" },
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
                Synagogues &amp; Jewish Life
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Jerusalem has hundreds of synagogues representing every Jewish tradition and
                  community. The English-speaking community is well served across the city, with
                  a particularly strong presence in neighbourhoods such as Baka, the German Colony,
                  Rehavia, and Talpiot.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium text-foreground">Shira Chadasha</span> — Baka,
                    popular with Anglo community
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Kehillat Yedidya</span> — Baka,
                    English-speaking Orthodox
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Moreshet Yisrael</span> — Rehavia,
                    Conservative congregation
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Kol HaNeshama</span> — Baka,
                    Reform congregation
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Chabad of Jerusalem</span> —
                    Multiple locations throughout the city
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="transport" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Public Transport
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Light Rail</p>
                  <p>
                    Jerusalem's light rail network (the Red Line) connects the city from north to
                    south, passing through the city centre and major neighbourhoods. New lines are
                    under construction, further expanding the network.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Buses</p>
                  <p>
                    Egged operates an extensive bus network throughout Jerusalem and to all major
                    cities. The Central Bus Station is located on Jaffa Road near the city centre.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Train to Tel Aviv</p>
                  <p>
                    The high-speed rail link connects Jerusalem's Yitzhak Navon station to Tel Aviv
                    in approximately 30 minutes, making commuting between the two cities fast and
                    convenient.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Education
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Jerusalem is home to some of Israel's most prestigious educational institutions,
                  including the Hebrew University of Jerusalem, one of the world's leading research
                  universities. The city also has a wide range of English-language schools and
                  ulpan programmes for new immigrants.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium text-foreground">Hebrew University of Jerusalem</span> —
                    World-ranked research university on Mount Scopus
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Bezalel Academy of Arts and Design</span> —
                    Israel's national art school
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Jerusalem College of Technology</span> —
                    Engineering and technology programmes
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Numerous ulpan programmes</span> —
                    Hebrew language classes for new olim throughout the city
                  </li>
                </ul>
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
