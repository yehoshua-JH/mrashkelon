import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className="flex-1 flex items-center justify-center pt-16"
        style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
      >
        <div className="text-center px-4 py-20">
          <p
            className="text-7xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.72 0.12 75)" }}
          >
            404
          </p>
          <h1
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif", color: "oklch(0.235 0.058 250)" }}
          >
            Page Not Found
          </h1>
          <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: "oklch(0.45 0.03 250)" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded font-semibold text-sm transition-all duration-200"
            style={{
              backgroundColor: "oklch(0.235 0.058 250)",
              color: "oklch(0.985 0.008 85)",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
