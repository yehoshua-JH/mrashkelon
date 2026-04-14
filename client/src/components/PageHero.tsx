// =============================================================
// MR. ASHKELON — PageHero Component
// Full-width hero banner for inner pages
// =============================================================

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{
        minHeight: "280px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "oklch(0.235 0.058 250 / 0.65)" }}
      />
      <div className="relative z-10 px-4 py-16">
        <h1
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "Georgia, serif", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg max-w-xl mx-auto" style={{ color: "oklch(0.85 0.01 85)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
