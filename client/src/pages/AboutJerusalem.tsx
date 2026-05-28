// =============================================================
// MR. ASHKELON — About Jerusalem Page
// Jewish-focused content for Anglo olim buying property in Jerusalem
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
          className="absolute inset-0 bg-cover bg-center opacity-40"
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
                Jerusalem — The Eternal Capital
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Jerusalem is the eternal capital of the Jewish people and the heart of the Jewish
                  world. For over 3,000 years, since King David established it as his capital, Jews
                  have prayed facing Jerusalem, ended the Passover Seder with "Next year in
                  Jerusalem," and dreamed of returning to this holy city.
                </p>
                <p>
                  Today, Jerusalem is a thriving modern city of over 950,000 residents, combining
                  ancient Jewish heritage with contemporary Israeli life. It is home to the Western
                  Wall (Kotel), the holiest accessible site in Judaism, as well as the Jewish
                  Quarter of the Old City, the Mount of Olives, and countless synagogues,
                  yeshivot, and Torah institutions.
                </p>
                <p>
                  For Jews making Aliyah or purchasing a home in Israel, Jerusalem holds a unique
                  spiritual and emotional significance that no other city can match. Owning a home
                  in Jerusalem is not just a real estate investment — it is a connection to 3,000
                  years of Jewish history.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kotel" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                The Western Wall (Kotel)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  The Western Wall — the Kotel — is the holiest place in the world where Jews are
                  permitted to pray. It is the last remaining retaining wall of the Second Temple
                  Mount, built by King Herod in the first century BCE. Jews have gathered here to
                  pray and mourn the destruction of the Temple for nearly 2,000 years.
                </p>
                <p>
                  The Kotel Plaza is open 24 hours a day, 365 days a year. Millions of Jews from
                  around the world visit each year, and it is customary to place a written prayer
                  (a "kvittel") between the ancient stones.
                </p>
                <p>
                  Living in Jerusalem means the Kotel is never more than a short drive or bus ride
                  away — a privilege that generations of Jews could only dream of.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="jewish-life" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Jewish Life &amp; Community
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Jerusalem has a rich and diverse Jewish community spanning every tradition —
                  Ashkenazi, Sephardi, Mizrachi, Yemenite, and more. The city is home to hundreds
                  of synagogues, from the ancient Hurva Synagogue in the Jewish Quarter to modern
                  congregations in every neighbourhood.
                </p>
                <p>
                  The Anglo community in Jerusalem is particularly strong, with many English-speaking
                  synagogues, schools, and social organisations. Neighbourhoods such as Baka,
                  the German Colony, Rehavia, Talpiot, and Arnona have large concentrations of
                  English-speaking olim and long-term residents.
                </p>
                <ul className="space-y-2 text-sm mt-2">
                  <li><span className="font-medium text-foreground">Shira Chadasha</span> — Baka, egalitarian Orthodox, popular with Anglo community</li>
                  <li><span className="font-medium text-foreground">Kehillat Yedidya</span> — Baka, English-speaking Orthodox</li>
                  <li><span className="font-medium text-foreground">Moreshet Yisrael</span> — Rehavia, Conservative (Masorti)</li>
                  <li><span className="font-medium text-foreground">Kol HaNeshama</span> — Baka, Reform</li>
                  <li><span className="font-medium text-foreground">Chabad of Jerusalem</span> — Multiple locations throughout the city</li>
                  <li><span className="font-medium text-foreground">The Great Synagogue</span> — King George Street, Ashkenazi, world-renowned choir</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="torah" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Torah &amp; Jewish Learning
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Jerusalem is the world capital of Torah learning. The city is home to hundreds of
                  yeshivot, kollelim, and Torah institutions for men, women, and families at every
                  level — from beginners to advanced scholars. Many Anglo olim choose Jerusalem
                  specifically for the unparalleled access to Jewish education.
                </p>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-medium text-foreground">Yeshivat Har Etzion (Gush)</span> — World-renowned hesder yeshiva</li>
                  <li><span className="font-medium text-foreground">Pardes Institute</span> — Non-denominational, English-language adult learning</li>
                  <li><span className="font-medium text-foreground">Nishmat</span> — Women's Torah study, founded by Rabbanit Henkin</li>
                  <li><span className="font-medium text-foreground">Machon Pardes</span> — Year programme for post-university students</li>
                  <li><span className="font-medium text-foreground">Numerous neighbourhood shiurim</span> — Daily Torah classes in English throughout the city</li>
                </ul>
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
                  <li><span className="font-medium text-foreground italic">Bituach Leumi</span> — National Insurance Institute</li>
                  <li><span className="font-medium text-foreground italic">Kupat Cholim</span> — Health Insurance fund</li>
                  <li><span className="font-medium text-foreground italic">Misrad HaKlita</span> — Ministry of Immigrant Absorption</li>
                  <li><span className="font-medium text-foreground italic">Misrad HaPnim</span> — Interior Ministry</li>
                  <li><span className="font-medium text-foreground italic">Teudat Zehut</span> — Identity card</li>
                  <li><span className="font-medium text-foreground italic">Sal Klita</span> — Financial assistance paid in the first months following Aliyah</li>
                  <li><span className="font-medium text-foreground italic">Ulpan</span> — Hebrew language classes</li>
                  <li><span className="font-medium text-foreground italic">Misrad HaShikun</span> — Housing Ministry (assistance for new olim)</li>
                </ul>
                <p className="text-sm mt-2">
                  For more information, visit the{" "}
                  <a href="https://www.nefesh.org/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    Nefesh B'Nefesh
                  </a>{" "}
                  website — the leading organisation helping Anglo Jews make Aliyah to Israel.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="holidays" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Shabbat &amp; Jewish Holidays in Jerusalem
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  There is nowhere in the world like Jerusalem on Shabbat and Jewish holidays.
                  As the sun sets on Friday afternoon, the entire city transforms — streets
                  quieten, families walk to synagogue, and the air fills with the sound of
                  Shabbat songs from open windows.
                </p>
                <p>
                  On Yom Kippur, the roads of Jerusalem are completely empty of cars — children
                  ride bicycles freely through the streets in one of the most moving annual
                  experiences in the Jewish world.
                </p>
                <p>
                  Yom Yerushalayim (Jerusalem Day), celebrated on the 28th of Iyar, marks the
                  reunification of Jerusalem in 1967. Tens of thousands of people march through
                  the city and gather at the Kotel in one of the most joyful days in the
                  Israeli calendar.
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
                    ["Ambulance (Magen David Adom)", "101"],
                    ["Fire Service", "102"],
                    ["Electric Company Hotline", "103"],
                    ["Municipality Hotline", "106"],
                    ["IDF Home Front Command", "1207"],
                    ["Hadassah Hospital Ein Kerem", "02-6777111"],
                    ["Shaare Zedek Hospital", "02-6555111"],
                  ].map(([name, number]) => (
                    <div key={name} className="flex justify-between py-1 border-b border-border">
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground">{number}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="transport" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                Getting Around Jerusalem
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Light Rail</p>
                  <p>
                    Jerusalem's expanding light rail network connects major neighbourhoods and
                    the city centre. The Red Line runs from north to south, with new lines
                    under construction to further expand coverage.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Buses</p>
                  <p>
                    Egged operates a comprehensive bus network throughout Jerusalem. Most routes
                    do not operate on Shabbat and Jewish holidays.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Train to Tel Aviv</p>
                  <p>
                    The high-speed rail from Jerusalem's Yitzhak Navon station reaches Tel Aviv
                    in approximately 30 minutes, making it easy to combine Jerusalem living with
                    Tel Aviv employment or travel.
                  </p>
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
