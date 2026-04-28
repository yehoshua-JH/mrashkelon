// =============================================================
// MR. ASHKELON — ContactForm Component
// Reusable contact form with validation + real email notification
// Icon set: Lucide Phone / Mail / MapPin in gold circular badges
// — matches the Contact page icon style exactly
// =============================================================

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { trpc } from "@/lib/trpc";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showContactInfo?: boolean;
}

export default function ContactForm({
  title = "Get in Touch",
  subtitle = "Ready to find your dream property in Ashkelon? Contact us for a free consultation.",
  showContactInfo = true,
}: ContactFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (err) => {
      console.error("[ContactForm] Submission error:", err);
    },
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    submitMutation.mutate({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded border text-sm transition-colors duration-200 outline-none focus:ring-2 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-stone-200 bg-white focus:border-amber-500 focus:ring-amber-200"
    }`;

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}>
          Message Sent!
        </h3>
        <p className="text-sm" style={{ color: "oklch(0.45 0.03 250)" }}>
          Thank you for reaching out. Motti will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <section className="py-16" style={{ backgroundColor: "oklch(0.955 0.012 85)" }}>
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-heading">{title}</h2>
          <span className="gold-divider mx-auto" />
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "oklch(0.45 0.03 250)" }}>
            {subtitle}
          </p>
        </div>

        <div className={`grid gap-10 ${showContactInfo ? "lg:grid-cols-2" : "max-w-xl mx-auto"}`}>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass("name")}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass("phone")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass("email")}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your property needs..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass("message")}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            {submitMutation.isError && (
              <p className="text-xs text-red-500">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full py-3 rounded font-semibold text-sm transition-all duration-200 disabled:opacity-60"
              style={{
                backgroundColor: "oklch(0.72 0.12 75)",
                color: "oklch(0.235 0.058 250)",
              }}
              onMouseEnter={(e) => {
                if (!submitMutation.isPending)
                  (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.82 0.10 75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(0.72 0.12 75)";
              }}
            >
              {submitMutation.isPending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info — Lucide icons in gold circular badges, matching Contact page */}
          {showContactInfo && (
            <div className="space-y-6">
              {/* Israel phone */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                    Israel
                  </p>
                  <a
                    href={`tel:${CONTACT.phone_il}`}
                    className="text-sm hover:underline"
                    style={{ color: "oklch(0.45 0.03 250)" }}
                  >
                    {CONTACT.phone_il}
                  </a>
                </div>
              </div>

              {/* USA phone */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                    USA
                  </p>
                  <a
                    href={`tel:${CONTACT.phone_us}`}
                    className="text-sm hover:underline"
                    style={{ color: "oklch(0.45 0.03 250)" }}
                  >
                    {CONTACT.phone_us}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm hover:underline"
                    style={{ color: "oklch(0.45 0.03 250)" }}
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.235 0.058 250)" }}>
                    Address
                  </p>
                  <p className="text-sm" style={{ color: "oklch(0.45 0.03 250)" }}>
                    Hatayassim St.
                    <br />
                    Ashkelon 78573, Israel
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
