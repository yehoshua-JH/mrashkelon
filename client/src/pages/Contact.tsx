// =============================================================
// MR. ASHKELON — Contact Page
// Matches Lovable source Contact.tsx exactly:
// - Hero: "Contact" title, beach bg at 30% opacity
// - "Contact Info" heading with gold underline
// - Form: Name+Phone side-by-side, Email, Message, SEND button
// - Contact info: Israel/USA phones, Email, Address, Social icons
// =============================================================

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    },
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    submitMutation.mutate({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    });
  };

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
          Contact
        </h1>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Contact Info</h2>
          <div className="w-20 h-1 bg-secondary mb-6" />
          <p className="text-muted-foreground mb-10">
            Please fill in the form below or contact us by email or phone and we'll get back to
            you soon.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2 font-heading text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Motti will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Name *"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setErrors((p) => ({ ...p, name: "" }));
                      }}
                      maxLength={100}
                      className={`bg-accent/10 border-border ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
                      className="bg-accent/10 border-border"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors((p) => ({ ...p, email: "" }));
                    }}
                    maxLength={255}
                    className={`bg-accent/10 border-border ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder="Message *"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      setErrors((p) => ({ ...p, message: "" }));
                    }}
                    maxLength={1000}
                    className={`bg-accent/10 border-border ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                {submitMutation.isError && (
                  <p className="text-destructive text-xs">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg py-6"
                >
                  {submitMutation.isPending ? "Sending..." : "SEND"}
                </Button>
              </form>
            )}

            {/* Contact Info */}
            <div className="flex flex-col justify-center gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Israel</p>
                    <a
                      href="tel:054-731-2118"
                      className="font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      054-731-2118
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">USA</p>
                    <a
                      href="tel:1-612-424-5387"
                      className="font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      1-612-424-5387
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:motti@mrashkelon.com"
                      className="font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      motti@mrashkelon.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-foreground">Hatayassim St., Ashkelon 78573</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/motti.benyitzhack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center hover:bg-secondary/30 transition-colors text-secondary text-sm font-bold"
                >
                  f
                </a>
                <a
                  href="https://twitter.com/@mbyashkelon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center hover:bg-secondary/30 transition-colors text-secondary text-sm font-bold"
                >
                  𝕏
                </a>
                <a
                  href="https://il.linkedin.com/in/motti-ben-yitzhack-68135aa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center hover:bg-secondary/30 transition-colors text-secondary text-sm font-bold"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
