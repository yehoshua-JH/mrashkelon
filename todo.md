# Mr. Ashkelon — TODO

- [x] Fix mobile responsiveness: Lightbox padding too large on mobile (NiyaProject, GenesisJerusalem, ViaAshkelon) — reduced from 4.5rem to 1.5rem horizontal padding
- [x] Fix mobile responsiveness: Highlights section image gradient bleeds on mobile (NiyaProject, GenesisJerusalem) — gradient now hidden on mobile (md:block)
- [x] Fix mobile responsiveness: Contact page grid-cols-2 on small mobile — changed to grid-cols-1 on xs
- [x] Fix mobile responsiveness: FeaturedProperties px-8 padding too wide on mobile — already uses px-5 sm:px-8
- [x] Fix mobile responsiveness: JerusalemProject features grid 2-col on mobile (too dense) — changed to grid-cols-1 sm:grid-cols-2
- [x] Split homepage Featured Properties into two sections: "New Projects" and "Available Properties"
- [x] Split FeaturedProperties page into two sections: "New Projects" and "Available Properties"
- [x] VIA Ashkelon page: 10 unique CDN images (VIA_IMG_1 through VIA_IMG_10)
- [x] Remove VIA from main navbar (accessible only via Properties page)
- [x] NiyaProject key details grid: changed to grid-cols-1 sm:grid-cols-2 md:grid-cols-3
- [x] ViaAshkelon key details grid: changed to grid-cols-1 sm:grid-cols-2 md:grid-cols-3
- [x] Image loading performance: added loading="lazy" + decoding="async" to all gallery/card images across all pages
- [x] Image loading performance: added loading="eager" to above-fold hero images (NIYA, Genesis, VIA overview)
- [x] Image loading performance: added <link rel="preload"> for homepage hero and Genesis hero in index.html
- [x] Image loading performance: added shimmer skeleton CSS animation for placeholder states
- [x] Image loading performance: created reusable LazyImage component with IntersectionObserver + fade-in
