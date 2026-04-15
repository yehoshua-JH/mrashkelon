// =============================================================
// MR. ASHKELON — Privacy Policy Page
// =============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project_ab2b12dc.jpg";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <PageHero title="Privacy Policy" image={HERO_IMAGE} />
      </div>

      <section className="py-16" style={{ backgroundColor: "oklch(0.985 0.008 85)" }}>
        <div className="container max-w-3xl">
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 250)" }}>
            <div>
              <p className="text-xs mb-4" style={{ color: "oklch(0.55 0.02 85)" }}>
                Last updated: January 2025
              </p>
              <p>
                Mr. Ashkelon ("we", "us", or "our") is committed to protecting your personal
                information and your right to privacy. This Privacy Policy explains how we collect,
                use, and safeguard your information when you visit our website or contact us.
              </p>
            </div>

            {[
              {
                title: "Information We Collect",
                content: `We collect information that you voluntarily provide to us when you fill in our contact form or contact us directly. This includes your name, email address, phone number, and any message you send us. We do not collect any sensitive personal data.`,
              },
              {
                title: "How We Use Your Information",
                content: `We use the information you provide solely to respond to your enquiry and to provide the real estate services you have requested. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except where required by law.`,
              },
              {
                title: "Data Retention",
                content: `We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When your information is no longer needed, we will securely delete or anonymise it.`,
              },
              {
                title: "Cookies",
                content: `Our website may use cookies to improve your browsing experience. Cookies are small files stored on your device that help us understand how you use our website. You can disable cookies in your browser settings, though this may affect some functionality of the site.`,
              },
              {
                title: "Third-Party Links",
                content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies.`,
              },
              {
                title: "Your Rights",
                content: `You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at motti@mrashkelon.com.`,
              },
              {
                title: "Contact Us",
                content: `If you have any questions about this Privacy Policy, please contact us at:\n\nMr. Ashkelon\nHatayassim St., Ashkelon 78573, Israel\nEmail: motti@mrashkelon.com\nPhone: 054-731-2118`,
              },
            ].map((section) => (
              <div key={section.title}>
                <h2
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
                >
                  {section.title}
                </h2>
                <span className="gold-divider mb-4" />
                {section.content.split("\n").map((line, i) =>
                  line.trim() === "" ? (
                    <div key={i} className="h-2" />
                  ) : (
                    <p key={i}>{line}</p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
