import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Waves, Home, DollarSign, Calendar } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/NXWnsTEHTwOvMvNX.webp";

const GALLERY_IMAGES = [
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/NXWnsTEHTwOvMvNX.webp",
    title: "Terrace with Sea View",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/vIXDHDTIzktNAXBQ.webp",
    title: "Terrace Lounge Area",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/WXtJDYAgbZqYfBxR.webp",
    title: "Terrace Dining Area",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/oRlgikvUYiVyIgSg.webp",
    title: "Terrace Day View",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/omMblcPuQkKPxgsM.webp",
    title: "Living Room",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/jdGkdzBQbHJIoXCA.webp",
    title: "Kitchen",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663429873569/xjPrfVyjryVofYbn.webp",
    title: "Wine Bar",
  },
];

const HIGHLIGHTS = [
  { label: "Floor", value: "23 (Top Floor)" },
  { label: "Built Area", value: "~180 m²" },
  { label: "Terrace", value: "63 m² Panoramic" },
  { label: "Bedrooms", value: "3 Suites" },
  { label: "Parking", value: "2 Spaces" },
  { label: "Status", value: "Turnkey" },
];

export default function SeaParkPenthouse() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Sea Park Penthouse"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
          AVAILABLE NOW
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
            Sea Park Penthouse — Ashkelon
          </h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span>Sea Park, Ashkelon — Overlooking Delila Beach & Mediterranean</span>
          </div>
          <p className="text-2xl font-bold text-gold-600">₪9,500,000</p>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Occupying the top floor of one of Ashkelon's most prestigious residential towers, this extraordinary penthouse offers a rare opportunity to own a truly exceptional home overlooking the Mediterranean Sea and the famous Delila Beach.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Completed in 2025 by the renowned Efgad Group, the residence combines sophisticated design, premium finishes, and breathtaking panoramic sea views. Offered fully furnished and equipped to the highest standards, this is a genuine turnkey opportunity for the discerning buyer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Situated on the 23rd and highest floor, the property enjoys approximately 180 m² of luxurious internal living space complemented by an expansive 63 m² private terrace designed for entertaining and enjoying spectacular sunsets over the Mediterranean.
            </p>
          </div>

          {/* Key Details */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Key Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-3">
                  <p className="text-sm text-gray-600 font-semibold">{item.label}</p>
                  <p className="text-lg font-bold text-navy-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Gallery</h2>

          {/* Main Image */}
          <div className="relative mb-6 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={GALLERY_IMAGES[currentImageIndex].url}
              alt={GALLERY_IMAGES[currentImageIndex].title}
              className="w-full h-96 object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => setSelectedImage(GALLERY_IMAGES[currentImageIndex].url)}
              loading="lazy"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative overflow-hidden rounded-lg transition ${
                  currentImageIndex === idx ? "ring-2 ring-gold-600" : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Premium Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Exclusive penthouse residence on Floor 23 of 23</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Prime Sea Park location overlooking Delila Beach</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Built in 2025 by the prestigious Efgad Group</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Three beautifully appointed bedroom suites with en-suite bathrooms</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Spacious open-plan living and dining area with floor-to-ceiling sea views</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Premium designer kitchen with high-end appliances</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Quooker instant boiling and filtered water system</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Mitsubishi climate-control air-conditioning throughout</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Imported Spanish porcelain flooring</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Outdoor kitchen, entertaining area & integrated wine cooler</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-navy-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Additional Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-2">Municipal Taxes (Arnona)</p>
              <p className="text-xl font-bold text-navy-900">~₪750/month</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-2">Building Maintenance Fees</p>
              <p className="text-xl font-bold text-navy-900">~₪500/month</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-2">Availability</p>
              <p className="text-xl font-bold text-navy-900">June 2027</p>
            </div>
          </div>
        </div>

        {/* Coastal Living Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Coastal Living at Its Finest</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wake up each morning to uninterrupted views of the Mediterranean and end each day watching the sun set over Delila Beach from your private panoramic terrace. Located in the prestigious Sea Park district, this remarkable residence places you moments from Ashkelon's vibrant promenade, marina, cafés, restaurants, and shopping.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Combining contemporary architecture, exceptional craftsmanship, and one of the finest beachfront locations in Israel, this penthouse represents a rare opportunity to acquire a landmark coastal residence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Suitable for foreign purchasers seeking a luxury holiday residence, retirement home, or long-term investment on Israel's thriving Mediterranean coastline.
          </p>
        </div>

        {/* CTA Section */}
        <div className="border-t-2 border-gold-600 pt-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Interested in This Penthouse?</h2>
          <p className="text-gray-700 mb-6">
            For further information or to arrange a private viewing, please contact us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold-600 hover:bg-gold-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 md:p-4">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
