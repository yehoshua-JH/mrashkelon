// =============================================================
// MR. ASHKELON — Site Data
// All properties, blog articles, and static content
// =============================================================

export const CONTACT = {
  phone_il: "054-731-2118",
  phone_us: "1-612-424-5387",
  email: "motti@mrashkelon.com",
  address: "Hatayassim St., Ashkelon 78573, Israel",
  twitter: "https://x.com/mrashkelon",
};

// =============================================================
// HOW TO ADD A NEW PROPERTY
// Copy the template below, fill in all fields, and add it to
// the PROPERTIES array. The slug must be unique (URL-safe, no spaces).
// Images: upload to CDN via `manus-upload-file --webdev` and paste the URL.
// =============================================================
//
// PROPERTY TEMPLATE:
// {
//   slug: "my-property-slug",          // URL: /property/my-property-slug
//   title: "Property Title",           // Main heading shown on card & detail page
//   tagline: "Short tagline here",     // Subtitle shown on card
//   location: "City / Neighbourhood", // Shown on card and detail page
//   description: "One or two sentences describing the property.",
//   details: "Longer paragraph with more detail about the property.",
//   image: "https://cdn.example.com/main-image.jpg",  // Main card image
//   galleryImages: [                   // Shown in the detail page gallery
//     "https://cdn.example.com/image1.jpg",
//     "https://cdn.example.com/image2.jpg",
//   ],
//   specs: {                           // Key-value pairs in the specs table
//     Location: "City, Israel",
//     Size: "100 sqm + 10 sqm balcony",
//     Rooms: "3",
//     Bathrooms: "2",
//     Parking: "1 space",
//     Features: "Sea view, storage room",
//   },
//   highlights: [                      // Bullet points shown as feature chips
//     "Feature one",
//     "Feature two",
//     "Feature three",
//   ],
//   note: "Optional note shown at bottom of detail page.",
//   seo: {
//     title: "Property Title for Sale in City | Mr. Ashkelon",
//     description: "SEO meta description, ~150 characters.",
//   },
// },
// =============================================================

export const PROPERTIES = [
  {
    slug: "luxury-high-rise",
    hidden: true, // Same property as Genesis Jerusalem — hidden from listings
    title: "Luxury High-Rise Living",
    tagline: "Panoramic views & premium amenities",
    location: "Prime city center location",
    description:
      "This stunning new high-rise development offers an unparalleled combination of modern design, premium amenities, and a prime location. With panoramic city and landscape views from every floor, this tower redefines luxury living in Israel.",
    details:
      "Each apartment features floor-to-ceiling windows, high-end finishes, central air conditioning, and private underground parking. Residents enjoy access to a state-of-the-art fitness center, rooftop terrace, concierge services, and beautifully landscaped communal gardens. The ground floor includes a stylish coffee shop and commercial spaces for everyday convenience.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/featured-project-src_c3fc7609.jpg",
    galleryImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/floor-plan-typical-src_e59f0d21.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/floor-plan-upper-src_c528b8a9.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/jerusalem-path-src_351b6b26.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/malha-mall-src_a373c38b.jpg",
    ],
    specs: {
      Location: "Prime city center location",
      "Unit Sizes": "70–160 sqm",
      Bedrooms: "2–5 bedroom options",
      Parking: "Private underground parking",
      Amenities: "Gym, rooftop terrace, concierge",
      Status: "Now selling — limited units",
    },
    highlights: [
      "Panoramic city & mountain views",
      "Floor-to-ceiling windows",
      "State-of-the-art fitness center",
      "Rooftop terrace & gardens",
      "Ground-floor commercial & café",
      "24/7 concierge service",
    ],
    note: "Limited units remaining. Contact us today for pricing and availability.",
    seo: {
      title: "Luxury High-Rise Apartments for Sale in Ashkelon | Mr. Ashkelon",
      description:
        "Stunning new high-rise development in Ashkelon city center. Panoramic views, premium amenities, 2–5 bedrooms. Contact Mr. Ashkelon for pricing.",
    },
  },
  {
    slug: "penthouse",
    title: "Penthouse Apartment",
    tagline: "Spacious luxury in Ashkelon",
    location: "Ashkelon",
    description:
      "This stunning penthouse apartment offers an unparalleled combination of space, comfort, and location. With 125 square meters of living space, plus a 25-square-meter balcony, this home is perfect for those seeking luxury and convenience.",
    details:
      "The double-size master bedroom provides a private retreat, while the open-concept living area flows seamlessly to the spacious balcony, where you can enjoy a partial sea view and fresh coastal breezes. Located just five minutes from the beach.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/image0-400x516_eaefe592.jpeg",
    galleryImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/image0-400x516_eaefe592.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/image1-400x516_6b98bc1d.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/image2-400x516_2c5fd251.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/image3-400x516_ce215583.jpeg",
    ],
    specs: {
      Location: "Ashkelon",
      Size: "125 sqm + 25 sqm balcony",
      Rooms: "4 (including double-size master)",
      Bathrooms: "2.5",
      Parking: "2 private spaces",
      Features: "Storage room, partial sea view",
    },
    highlights: [
      "Double-size master bedroom",
      "25 sqm balcony with partial sea view",
      "Open-concept living area",
      "5 minutes from the beach",
      "2 private parking spaces",
      "Storage room included",
    ],
    note: "Contact us today for pricing and to schedule a viewing.",
    seo: {
      title: "Penthouse Apartment for Sale in Ashkelon | Mr. Ashkelon",
      description:
        "Stunning 125 sqm penthouse with 25 sqm balcony and partial sea view in Ashkelon. Contact Mr. Ashkelon for details.",
    },
  },
  {
    slug: "sea-view",
    title: "Amazing Sea Views — Afridar Apartment",
    tagline: "Breathtaking ocean views in Afridar",
    location: "Afridar, Ashkelon",
    description:
      "This beautiful apartment offers a perfect blend of luxury and convenience. With 130 square meters of living space and a 13-square-meter patio, this home is designed for those who appreciate both comfort and style.",
    details:
      "The four bedrooms include a spacious master bedroom with an en suite bathroom, providing a private retreat. The modern kitchen island is perfect for culinary enthusiasts. Enjoy breathtaking ocean views from your patio.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/IMG-20250316-WA0008-400x284_342814f6.jpg",
    galleryImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/IMG-20250316-WA0008-400x284_342814f6.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/IMG-20250316-WA0010-400x284_14c7cbfb.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/IMG-20250316-WA0013-400x284_f25c1f73.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/IMG-20250316-WA0012-400x284_c7c03f30.jpg",
    ],
    specs: {
      Location: "Afridar, Ashkelon",
      Size: "130 sqm + 13 sqm patio",
      Rooms: "4 bedrooms incl. master with en suite",
      Bathrooms: "2",
      Parking: "1 designated space",
      Features: "Kitchen island, ocean view, Shabbat elevator, gym",
    },
    highlights: [
      "Breathtaking ocean views",
      "Modern kitchen island",
      "Master bedroom with en suite",
      "Shabbat elevator",
      "Building gym access",
      "13 sqm private patio",
    ],
    note: "Don't miss this opportunity. Contact us for a private viewing.",
    seo: {
      title: "Sea View Apartment for Sale in Afridar, Ashkelon | Mr. Ashkelon",
      description:
        "Beautiful 130 sqm apartment with breathtaking ocean views in Afridar, Ashkelon. 4 bedrooms, kitchen island, Shabbat elevator. Contact Mr. Ashkelon.",
    },
  },
  {
    slug: "genesis-jerusalem",
    title: "Genesis Jerusalem",
    tagline: "Pre-Sale — Western Jerusalem luxury tower",
    location: "Western Jerusalem",
    description:
      "Genesis is a premium residential tower project located in one of Jerusalem's most rapidly developing areas, offering a rare combination of open green views, modern infrastructure, and excellent connectivity.",
    details:
      "A 28-floor residential tower offering 3, 4 & 5 room apartments, each with a Mamad safe room, storage room, and underground parking. Situated in one of Jerusalem's most rapidly developing western neighbourhoods — close to shopping, schools, synagogues, and cultural landmarks.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
    galleryImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-jerusalem-tower_83b88532.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/genesis-floorplan-typical_fbdeaf41.jpg",
    ],
    specs: {
      Location: "Western Jerusalem",
      Floors: "28",
      Apartments: "3, 4 & 5 rooms",
      "Safe Room": "Mamad in every unit",
      Storage: "Included",
      Parking: "Underground",
      Status: "Pre-Sale — register now",
    },
    highlights: [
      "28-floor residential tower",
      "3, 4 & 5 room apartments",
      "Mamad in every apartment",
      "Storage room included",
      "Underground parking",
      "Open Jerusalem hills views",
    ],
    note: "Pre-Sale now open. Contact us for pricing and floor plans.",
    customLink: "/genesis-jerusalem",
    seo: {
      title: "Genesis Jerusalem — Premium Apartments for Sale | Mr. Ashkelon",
      description:
        "Genesis Jerusalem: 28-floor luxury residential tower in Western Jerusalem. Pre-sale now open. 3–5 room apartments with Mamad, storage, and underground parking.",
    },
  },
  {
    slug: "briza-penthouse",
    title: "BRIZA BY EFGAD Penthouse",
    tagline: "Last available — stunning sea views",
    location: "Ashkelon",
    description:
      "The last available penthouse in the prestigious BRIZA BY EFGAD project in Ashkelon. This exceptional property on floor 22 offers stunning open sea views, a spacious 70 m\u00b2 terrace, and a large open-plan living area.",
    details:
      "This penthouse features a large open living space connected to a dining area and kitchen. The property includes 6 rooms with a master suite, and direct access to a spacious 70 m\u00b2 terrace with stunning open sea views and outdoor seating area.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/briza-terrace-hero_e6100fa7.png",
    galleryImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/briza-terrace-hero_e6100fa7.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/briza-floor-plan_a30e3a77.jpg",
    ],
    specs: {
      Location: "Ashkelon",
      Project: "BRIZA BY EFGAD",
      Floor: "22",
      Rooms: "6",
      "Built Area": "~177 m\u00b2",
      Balcony: "70 m\u00b2",
      Parking: "2 underground spaces",
      Storage: "Storage room included",
      Status: "Last unit available",
    },
    highlights: [
      "Open sea views from floor 22",
      "70 m\u00b2 terrace with outdoor seating",
      "6 rooms incl. master suite",
      "~177 m\u00b2 built area",
      "2 underground parking spaces",
      "Prestigious BRIZA BY EFGAD project",
    ],
    note: "Last available unit. Call now: 054 7312 118",
    seo: {
      title: "BRIZA BY EFGAD Penthouse for Sale in Ashkelon | Mr. Ashkelon",
      description:
        "Last available penthouse in the BRIZA BY EFGAD project, Ashkelon. Floor 22, open sea views, 70 m\u00b2 terrace, 6 rooms. Contact Mr. Ashkelon for details.",
    },
  },
  {
    slug: "barnea-5-room",
    title: "5-Room Apartment in Barnea",
    tagline: "Spacious family home with sea views — immediate possession",
    location: "Barnea, Ashkelon",
    description:
      "A spacious and well-presented 5-room apartment in the highly sought-after Barnea neighbourhood of Ashkelon. Approximately 3 years old, this modern home offers stunning sea views from the balcony, immediate possession, and a price of ₪2,300,000.",
    details:
      "Located in one of Ashkelon's most desirable residential areas, this apartment is set in a 'green' building — environmentally friendly construction with high-quality insulation and premium windows that keep the home cool in summer and warm in winter. The neighbourhood offers excellent local amenities including schools, children's play parks, synagogues, shops, and bus routes. The Mediterranean beach is just a 25-minute walk away. The building features a welcoming lobby and parking. Immediate possession available.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_01_40ab5386.jpg",
    galleryImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_01_40ab5386.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_02_3ead21e4.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_03_efa09f00.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_04_a42de705.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_05_bf07694c.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_06_90fb58b4.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_07_88314b29.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_08_7e30e5ea.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_09_3499e77e.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_10_2453171c.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_11_325d3076.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_12_69e7f19e.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_13_bef5a1fa.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_14_452bec34.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_15_b112b43c.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_16_99ed0a59.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_17_3d8010ec.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_18_e18d59f7.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/photo_19_6e03bfe8.jpg",
    ],
    specs: {
      Location: "Barnea, Ashkelon",
      Rooms: "5",
      Age: "~3 years old",
      Balcony: "Yes — sea views",
      Parking: "Included",
      "Beach Distance": "25-minute walk",
      Building: "Green building — insulated, high-quality windows",
      Status: "Immediate possession",
      Price: "₪2,300,000",
    },
    highlights: [
      "Sea views from balcony",
      "Immediate possession",
      "Green building — eco-friendly construction",
      "25-minute walk to the beach",
      "Close to shuls, shops & buses",
      "Schools & play parks nearby",
      "Highly sought-after Barnea location",
    ],
    note: "Immediate possession available. Price: ₪2,300,000. Call now: 054 731 2118",
    seo: {
      title: "5-Room Apartment for Sale in Barnea, Ashkelon | Mr. Ashkelon",
      description:
        "Spacious 5-room apartment in Barnea, Ashkelon. ~3 years old, sea views, balcony, parking, green building. Immediate possession. Price ₪2,300,000.",
    },
  },
  {
    slug: "anglo-area-apartment",
    title: "3-Room Apartment in the Anglo Area",
    tagline: "Delightful home in the heart of the Anglo community",
    location: "Anglo Area, Ashkelon",
    description:
      "A delightful three room apartment in a sought after location in the heart of the Anglo area. This bright and well-maintained home offers everything you need for comfortable living in Ashkelon's most popular English-speaking neighbourhood.",
    details:
      "The apartment features a high quality kitchen, a Mamad safe room, a spacious open-plan living and dining area, and a private balcony. Situated on the 8th floor of a 9-storey building with a Shabbat elevator, the apartment comes with private parking. The building is well-maintained with a welcoming entrance lobby. Located close to bus lines, shops, Ashkelon Marina and beach, and both Sephardic and Ashkenazi synagogues.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/anglo-apt-building_47d8a15a.png",
    galleryImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/anglo-apt-building_47d8a15a.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_01_c716be75.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_02_d99e5414.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_03_b9a16dc1.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_04_deaaeceb.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_05_e76fc1e9.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_06_967673b0.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_07_a4e47220.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_08_2236ce11.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_09_791c6f64.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/interior_10_04bb4dd0.jpg",
    ],
    specs: {
      Location: "Anglo Area, Ashkelon",
      Floor: "8 of 9",
      Rooms: "3",
      Size: "80 m²",
      Parking: "Private parking",
      Elevator: "Shabbat elevator",
      Features: "High quality kitchen, Mamad, balcony",
      Status: "Available now",
      Price: "₪1,700,000",
    },
    highlights: [
      "Heart of the Anglo community",
      "Floor 8 of 9 with Shabbat elevator",
      "80 m² — spacious 3-room layout",
      "Private parking included",
      "High quality kitchen & Mamad",
      "Close to Marina, beach & synagogues",
    ],
    note: "Price: ₪1,700,000. Contact us to arrange a viewing.",
    seo: {
      title: "3-Room Apartment for Sale in Anglo Area, Ashkelon | Mr. Ashkelon",
      description:
        "Delightful 3-room apartment (80 m²) on floor 8 of 9 in Ashkelon's Anglo area. Private parking, Shabbat elevator, Mamad, high quality kitchen. Close to Marina, beach and synagogues.",
    },
  },
  {
    slug: "briza-3em7",
    title: "BRIZA 3E-M7 — 3-Room Apartment",
    tagline: "Modern living in Jerusalem's premier new development",
    location: "BRIZA BY EFGAD, Talpiot, Jerusalem",
    description:
      "A beautifully designed 3-room apartment in the prestigious BRIZA BY EFGAD project. Spanning 88 square meters with a generous 12 m² balcony, this apartment combines contemporary design with practical luxury.",
    details:
      "The apartment features 2 bathrooms, central air conditioning, and a private parking space with an electric vehicle charging point. A storage room (machsan) is included. The open-plan living and dining area flows seamlessly to the balcony, creating a bright and airy space perfect for modern living.",
    image: "/manus-storage/briza-3em7-interior-clean_916e341c.png",
    galleryImages: [
      "/manus-storage/briza-3em7-interior-clean_916e341c.png",
      "/manus-storage/briza-3em7-floorplan_8363b037.png",
    ],
    specs: {
      Project: "BRIZA BY EFGAD",
      Location: "Talpiot, Jerusalem",
      Type: "3E-M7",
      Size: "88 m²",
      Balcony: "12 m²",
      Rooms: "3",
      Bathrooms: "2",
      "Air Conditioning": "Central",
      Parking: "Private + EV charging point",
      Storage: "Machsan included",
      Status: "Available — contact us for pricing",
    },
    highlights: [
      "88 m² modern apartment",
      "12 m² private balcony",
      "2 bathrooms",
      "Central air conditioning",
      "Parking with EV charging point",
      "Storage room (machsan) included",
    ],
    note: "Contact us for pricing and availability.",
    seo: {
      title: "3-Room Apartment for Sale in BRIZA, Talpiot Jerusalem | Mr. Ashkelon",
      description:
        "Modern 3-room apartment (88 m²) in BRIZA BY EFGAD, Talpiot Jerusalem. 12 m² balcony, 2 bathrooms, central AC, parking with EV charging, storage room. Contact Mr. Ashkelon.",
    },
  },
  {
    slug: "briza-4g-m6-m16",
    title: "BRIZA 4G-M6+M16 — 4-Room Apartment",
    tagline: "Spacious family living with panoramic views in Jerusalem",
    location: "BRIZA BY EFGAD, Talpiot, Jerusalem",
    description:
      "A stunning 4-room apartment in the prestigious BRIZA BY EFGAD project in Talpiot, Jerusalem. Spanning 111 square meters with two balconies totalling over 23 m², this apartment offers exceptional space and light.",
    details:
      "The apartment features 2 bathrooms, central air conditioning, and a private parking space with an electric vehicle charging point. A storage room (machsan) is included. The generous 20 m² main balcony and a 3.9 m² balcony off the master bedroom provide outdoor living space with beautiful views.",
    image: "/manus-storage/briza-4g-interior_f4b7d09b.png",
    galleryImages: [
      "/manus-storage/briza-4g-interior_f4b7d09b.png",
      "/manus-storage/briza-4g-floorplan_6ec1ed71.png",
    ],
    specs: {
      Project: "BRIZA BY EFGAD",
      Location: "Talpiot, Jerusalem",
      Type: "4G-M6+M16",
      Size: "111 m²",
      "Balcony 1": "20 m²",
      "Balcony 2": "3.9 m² (master bedroom)",
      Rooms: "4",
      Bathrooms: "2",
      "Air Conditioning": "Central",
      Parking: "Private + EV charging point",
      Storage: "Machsan included",
      Status: "Available — contact us for pricing",
    },
    highlights: [
      "111 m² spacious apartment",
      "20 m² main balcony",
      "3.9 m² master bedroom balcony",
      "2 bathrooms",
      "Central air conditioning",
      "Parking with EV charging point",
      "Storage room (machsan) included",
    ],
    note: "Contact us for pricing and availability.",
    seo: {
      title: "4-Room Apartment for Sale in BRIZA, Talpiot Jerusalem | Mr. Ashkelon",
      description:
        "Spacious 4-room apartment (111 m²) in BRIZA BY EFGAD, Talpiot Jerusalem. Two balconies (20 m² + 3.9 m²), 2 bathrooms, central AC, parking with EV charging, storage room. Contact Mr. Ashkelon.",
    },
  },
  {
    slug: "briza-5c-m6-m16-m15",
    title: "BRIZA 5C-M6+M16+M15 — 5-Room Apartment",
    tagline: "Exceptional family living with 3 balconies in Jerusalem's premier development",
    location: "BRIZA BY EFGAD, Talpiot, Jerusalem",
    description:
      "A magnificent 5-room apartment in the prestigious BRIZA BY EFGAD project in Talpiot, Jerusalem. Spanning 134 square meters with three balconies, this apartment offers generous space, natural light, and premium finishes throughout.",
    details:
      "The apartment features 3 bathrooms, inverter air conditioning, and a private parking space with an electric vehicle charging point. A storage room (machsan) is included. Three balconies provide abundant outdoor living space with stunning views over Jerusalem.",
    image: "/manus-storage/interior5room_clean_f2fabbdf.png",
    galleryImages: [
      "/manus-storage/interior5room_clean_f2fabbdf.png",
      "/manus-storage/floor_plan_5c_mrmrs_2822d432.png",
    ],
    specs: {
      Project: "BRIZA BY EFGAD",
      Location: "Talpiot, Jerusalem",
      Type: "5C-M6+M16+M15",
      Size: "134 m²",
      Balconies: "3 balconies",
      Rooms: "5",
      Bathrooms: "3",
      "Air Conditioning": "Inverter",
      Parking: "Private + EV charging point",
      Storage: "Machsan included",
      Status: "Available — contact us for pricing",
    },
    highlights: [
      "134 m² exceptional apartment",
      "3 balconies",
      "3 bathrooms",
      "Inverter air conditioning",
      "Parking with EV charging point",
      "Storage room (machsan) included",
    ],
    note: "Contact us for pricing and availability.",
    seo: {
      title: "5-Room Apartment for Sale in BRIZA, Talpiot Jerusalem | Mr. Ashkelon",
      description:
        "Exceptional 5-room apartment (134 m²) in BRIZA BY EFGAD, Talpiot Jerusalem. 3 balconies, 3 bathrooms, inverter AC, parking with EV charging, storage room. Contact Mr. Ashkelon.",
    },
  },
];

export const BLOG_POSTS = [
  {
    slug: "foreigners-guide-buying-property-ashkelon",
    title: "A Foreigner's Guide to Buying Property in Ashkelon",
    excerpt: "What to expect when you decide to invest in Ashkelon property.",
    date: "2025-03-15",
    readTime: "8 min read",
    category: "Buying Guide",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/Ashkelon-Israel_Mr-Ashkelon_6b6c1b12.jpg",
    seo: {
      title: "Foreigner's Guide to Buying Property in Ashkelon, Israel | Mr. Ashkelon",
      description:
        "Complete guide for foreign nationals buying property in Ashkelon, Israel. Legal requirements, the buying process, taxes, and expert tips from local broker Motti.",
    },
    content: [
      "Investing in a new home or piece of land is a detailed process that takes a fair amount of time and planning. First you need to find a property that interests you and only if it meets your specific requirements will you begin the process of applying for funding and filling out the relevant paperwork.",
      "Investing in property in a different country brings a whole other set of requirements to the table.",
      "### Looking at Ashkelon",
      "Ashkelon is growing at a rapid pace and with so many incredible opportunities available to investors, property is being snatched up every month. This boom has also brought many new developments with it so if you're looking to make an investment in Israel, now is the time, and what better place than a beautiful city near the sea.",
      "### What to expect when buying a property in Ashkelon as a foreigner",
      "If you have decided that property in Israel is going to be your next investment, here is what you can expect as you go through the process of purchasing a property or land:",
      "**Contact an estate agent** — Finding an estate agent to work with is an important first step if you want to make the process of buying a property in Ashkelon a pleasant one. Once your estate agent has a better idea of what you are looking for they can start identifying potential properties for you.",
      "**Evaluate your options** — Once your estate agent has identified a list of potential properties for you they will send you a shortlist so that you can evaluate them and decide which ones you would like to view in person. Your agent will setup all of the viewings for you and accompany you on each visit.",
      "**Begin negotiations** — It's at this stage that you truly appreciate having the help of an experienced agent. Because they understand the processes, rules and regulations involved with purchasing property in Israel they can negotiate a price on your behalf and sort out any other additional costs. You will also require the assistance of a lawyer during the buying process.",
      "**Move or manage** — Once the process is complete your agent will be able to guide you during your move to Ashkelon or advise you on how to best manage your property if you will be leasing it out to holiday makers or locals.",
    ],
  },
  {
    slug: "build-house-ashkelon",
    title: "Should You Build a House in Ashkelon?",
    excerpt: "Is building better than buying in Israel?",
    date: "2025-01-20",
    readTime: "10 min read",
    category: "Building Guide",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/Depositphotos_339337302_L_fd78ca0a.jpg",
    seo: {
      title: "Building a House in Ashkelon, Israel: Complete Guide | Mr. Ashkelon",
      description:
        "Comprehensive guide to building a house in Ashkelon, Israel. Planning permissions, construction costs, finding contractors, and navigating Israeli building regulations.",
    },
    content: [
      "It's no secret that investing in real estate can be one of the most profitable decisions you can make. There are however many property investors who ask whether it's better to build a home in Israel instead of going through the process of buying one.",
      "There are two key factors to keep in mind if you're wondering whether to buy or build a property in Ashkelon, Israel.",
      "**You need time** — If you're considering going the construction route, you need to have enough time to dedicate to the process. Along with having enough time, you should also be present in Israel during the building process. If you won't necessarily be in Ashkelon at the time, it's best to have someone in the country that can assist you.",
      "**What are your specifications?** — With property in an area such as Ashkelon being in such high demand, you won't always find exactly what you are looking for. If you have a long list of property requirements, it might be better to consider building a home from scratch in order to get exactly what you're looking for.",
      "As an added bonus, one of the main benefits of building a home instead of purchasing one is that you are exempt from VAT when purchasing land in Israel. It should also be noted that a builder's services are not subject to acquisition tax either. While these savings won't be huge, they do help.",
      "If you require assistance with locating land that you could potentially use to build your dream home, it's best to work with an agent in order to speed up the process and to ensure that you run into fewer difficulties as you navigate the Ashkelon property sector.",
    ],
  },
  {
    slug: "aware-buying-property-ashkelon",
    title: "What to Be Aware of When Buying a Property in Ashkelon",
    excerpt:
      "Israel's property sector is continuously evolving and many investors recognize the potential of purchasing in up and coming areas such as Ashkelon.",
    date: "2024-11-10",
    readTime: "7 min read",
    category: "Buying Guide",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/Depositphotos_295423952_L_ecb6afd2.jpg",
    seo: {
      title: "What to Know Before Buying Property in Ashkelon | Mr. Ashkelon",
      description:
        "Essential due diligence checklist and key considerations for buying property in Ashkelon, Israel. Avoid common pitfalls with expert advice from Mr. Ashkelon.",
    },
    content: [
      "Israel's property sector is continuously evolving and many investors recognize the potential of purchasing in up and coming areas such as Ashkelon.",
      "If you are considering investing in a property, especially as a foreigner, there are a few things that you should probably be aware of before you begin the buying process.",
      "1. If you happen to be living in a country such as the United States, you should be aware of the fact that Israeli properties are viewed a little differently to those in the States. For example, features such as hardwood floors or walk in closets might often be seen as luxuries in Israel while these features might be quite common in homes elsewhere in the world.",
      "2. If you're transferring money from your home country, it's wise to pay attention to the exchange rate as some contracts contain a price that's been based on the exchange rate hitting a certain level.",
      "3. Look out for potential price increases if you are investing in a property that's still under construction as prices are linked to the consumer price index.",
      "4. Keep in mind that Israel boasts a strong negotiation culture so almost every price can be negotiated. This is something that usually catches a lot of foreigners off-guard.",
      "5. Checking the land registry is part of the buying process in Israel and this is something that you or your lawyer will need to do yourself.",
      "While there are several differences between buying a property in Israel and the United States, it is one investment you won't regret making.",
    ],
  },
];

export const SERVICES = [
  {
    icon: "🏠",
    title: "Property Sales",
    description:
      "Expert guidance through every step of buying or selling property in Ashkelon. From initial search to final handover, we ensure a smooth, transparent transaction.",
  },
  {
    icon: "🌍",
    title: "International Buyers",
    description:
      "Specialist support for overseas buyers navigating the Israeli property market. We understand the unique challenges and opportunities for foreign nationals.",
  },
  {
    icon: "📋",
    title: "Aliyah Assistance",
    description:
      "Dedicated support for new immigrants (Olim) making Ashkelon their home. We help you find the right property and navigate the absorption process.",
  },
  {
    icon: "🔍",
    title: "Property Search",
    description:
      "Personalised property search service tailored to your requirements, budget, and lifestyle. We access both listed and off-market opportunities.",
  },
  {
    icon: "💼",
    title: "Investment Advisory",
    description:
      "Strategic advice for property investors looking to build a portfolio in Ashkelon's growing market. Rental yields, capital growth analysis, and market insights.",
  },
  {
    icon: "🤝",
    title: "After-Sale Support",
    description:
      "Our relationship does not end at completion. We provide ongoing support including contractor referrals, property management connections, and community integration.",
  },
];

export const TESTIMONIALS = [
  {
    name: "David & Sarah Cohen",
    location: "Originally from New York",
    text: "Motti made our Aliyah dream a reality. He found us the perfect apartment in Afridar and guided us through every step of the process. His knowledge of Ashkelon is unmatched.",
    rating: 5,
  },
  {
    name: "James Thompson",
    location: "Investor from London",
    text: "I purchased two investment properties through Mr. Ashkelon. The rental yields have exceeded expectations and Motti's market insight was invaluable. Highly recommended.",
    rating: 5,
  },
  {
    name: "Rachel & Michael Levy",
    location: "From Toronto, Canada",
    text: "As first-time buyers in Israel, we were nervous about the process. Motti's patience, expertise, and English-language support made everything straightforward. We love our new home.",
    rating: 5,
  },
];

export const ACCORDION_DATA = [
  {
    id: "about-ashkelon",
    title: "About Ashkelon",
    content: `Ashkelon, the City of Gardens, is located along Israel's southern coast and is considered the capital of the Southern district. It has recreation and tourism centres and is in a constant development boom. The city has a population of approximately 180,000 and its jurisdiction extends over 55,000 dunams, not far short of the size of Tel Aviv, making it one of Israel's largest population centres.

The city's location between the sea and the outskirts of the desert give the residents a comfortable, temperate climate throughout the year.

Ashkelon is one of the oldest cities in the world and is replete with history. At its centre there are ancient sites, among the rarest in the world, alongside green agricultural areas extending into the horizon. In the last decade alone, Ashkelon has absorbed over 40,000 new residents including immigrants and young families who have been drawn by the charm of its quality of life.

Ashkelon surely must be one of Israel's best kept secrets and the ideal place to fulfil the dream of living in Israel. Sun, sea, beautiful beaches, clean, shopping facilities, schools, industry, excellent road and rail services and so much more…`,
  },
  {
    id: "mayors-greeting",
    title: "Greetings from the Mayor",
    content: `*The following is an extract from the Ashkelon Municipal website.*

Dear Visitors,

Since the dawn of history 5,000 years ago, Ashkelon, due to its strategic location as an important port, has attracted many people and varied populations who lived in the city and contributed to its prosperity.

This dynamic city boasts a high quality of life, excellent educational institutions, rich and varied leisure activities for the entire population with many recreation spots located around the city.

I invite you to visit Ashkelon and enjoy the many attractions that the city has to offer. Among other things, you can stroll along 12 kilometers of spectacular sea shore, have fun at the Sea Park located on Delilah Beach, and spend time at the beautiful marina with its new large commercial center, cinema, cafés, and restaurants.

**Tomer Glam**
Mayor of Ashkelon`,
  },
  {
    id: "olim-info",
    title: "Information for Olim",
    content: `**Glossary of Useful planning Terms**

- **Bituach Leumi** — The National Insurance
- **Kupat Cholim** — Health Insurance fund
- **Misrad HaKlita** — Ministry of Immigrant Absorption
- **Misrad HaPnim** — Interior Ministry
- **Teudat Zehut** — Identity card
- **Sal Klita** — Financial assistance paid in the 6 months following Aliyah
- **Ulpan** — Hebrew classes

For more information, visit the [Jewish Agency for Israel](https://www.jewishagency.org/)`,
  },
  {
    id: "emergency-numbers",
    title: "Emergency Telephone Numbers",
    content: `| Service | Number |
|---|---|
| Police | 100 |
| Ambulance | 101 |
| Fire Service | 102 |
| Electric Company Hotline | 103 |
| Municipality Hotline | 106 / 08-6792306 |
| IDF Home Front Command | 1207 |
| Barzilai Hospital | 08-6745700 |`,
  },
  {
    id: "health-providers",
    title: "Health Providers",
    content: `| Provider | Address | Phone |
|---|---|---|
| Maccabi | Hagvura 3 | (08) 6747666 or *3555 |
| Meuhedet | Hagvura 11 | (08) 6741741 or *3833 |
| Leumit | Beit Frank, Rechov Herzl 30 | (08) 6790555 |
| Clalit | Eli Cohen 9, 7th floor | (08) 67772333 or *2700 |`,
  },
  {
    id: "synagogues",
    title: "Synagogues",
    content: `Ashkelon has more than 160 synagogues, the majority of which are Sephardi. There are a number of Ashkenaz synagogues, the most popular with the English speaking community being:

- **Central Synagogue, Afridar** — Tel: (Marc Steinberg) 0526647006
- **Ohel Hanna** — Ashkenazi English speakers – Jonty 0525666600
- **Barnea Synagogue** — Tel: 052 637 4667
- **Chabad** — Rabbi Lieberman (English speaker), Tel: 08 675 4913
- **Kehillat Netzach Israel** — 8 Harel Street, Tel: 08-6711370/1 (Conservative)`,
  },
  {
    id: "beaches",
    title: "Beaches",
    content: `The 10 kilometer-long Ashkelon beach attracts both local and out of towners beach-goers. Ashkelon, proclaimed a national tourism site, is rapidly developing this sphere.

Tourists and vacationers have at their disposal restaurants and pubs, sports facilities and heated swimming pools, two country clubs, an amphitheater, a tennis club, museums, cinemas, bowling alleys, fishing spots, and bathing beaches equipped with all the necessary amenities.

The Ashkelon Marina Area has a 600-vessel docking capacity making it one of the largest marinas in Israel.`,
  },
  {
    id: "public-transport",
    title: "Public Transport",
    content: `**Buses**

The bus services are very comprehensive in Ashkelon with many local lines and Inter-City Lines. There are two bus stations, one in the city centre next to the Giron Shopping Mall, the other in the Migdal area.

**Railways**

The Ashkelon Railway Station is conveniently located. Trains run towards Tel Aviv and the North with connections to all parts of the country. The hi-speed train to Tel Aviv is just a 41 minute ride.

**Taxi Services**

- Shaon — (08) 6788888
- Degel — (08) 6711111
- Shimshon — (08) 6755555`,
  },
];
