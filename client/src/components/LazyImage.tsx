// LazyImage — progressive image loading with blur-up placeholder + fade-in
// Usage:
//   <LazyImage src={url} alt="..." className="w-full h-full object-cover" />
//   <LazyImage src={url} alt="..." eager /> ← for above-the-fold / hero images

import { useState, useRef, useEffect } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Force eager loading (no IntersectionObserver) — use for hero / above-fold images */
  eager?: boolean;
  /** Aspect ratio wrapper (e.g. "16/9"). If omitted, no wrapper is added. */
  aspectRatio?: string;
  /** Extra className for the outer wrapper div (only used when aspectRatio is set) */
  wrapperClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  eager = false,
  aspectRatio,
  wrapperClassName = "",
  className = "",
  style,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(eager);
  const ref = useRef<HTMLImageElement>(null);

  // IntersectionObserver — only trigger fetch when image is near viewport
  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // start loading 300px before it enters viewport
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  const imgEl = (
    <img
      ref={ref}
      src={inView ? src : undefined}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.45s ease",
      }}
      {...rest}
    />
  );

  // Skeleton shown while image hasn't loaded yet
  const skeleton = !loaded && (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(110deg, oklch(0.92 0.01 255) 30%, oklch(0.96 0.005 255) 50%, oklch(0.92 0.01 255) 70%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.6s infinite linear",
      }}
    />
  );

  if (aspectRatio) {
    return (
      <div
        className={`relative overflow-hidden ${wrapperClassName}`}
        style={{ aspectRatio }}
      >
        {skeleton}
        {imgEl}
      </div>
    );
  }

  // No aspect ratio wrapper — just render the img with a positioned parent
  return (
    <span className="relative block" style={{ display: "contents" }}>
      {imgEl}
    </span>
  );
}
