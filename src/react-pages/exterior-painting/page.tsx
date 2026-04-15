import { useEffect } from "react";

import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ExteriorHero from "./components/ExteriorHero";
import ExteriorWhySection from "./components/ExteriorWhySection";
import ExteriorGallery from "./components/ExteriorGallery";
import ExteriorProcess from "./components/ExteriorProcess";
import ExteriorTestimonials from "./components/ExteriorTestimonials";
import ExteriorFaq from "./components/ExteriorFaq";
import ExteriorRelatedServices from "./components/ExteriorRelatedServices";
import ExteriorBlogLinks from "./components/ExteriorBlogLinks";
import ExteriorLocations from "./components/ExteriorLocations";
import ExteriorCta from "./components/ExteriorCta";

// ... existing code ...

export default function ExteriorPaintingPage() {
  useEffect(() => {
    document.title = "Exterior Painting Oahu Hawaii | Hawaii Painters 808 | Free Estimates";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Professional exterior painting on Oahu, Hawaii. Hawaii Painters 808 uses Sherwin-Williams Duration — built for Hawaii's salt air, UV & humidity. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "exterior painting Oahu Hawaii, exterior house painting Honolulu, outdoor painting contractor Oahu, exterior painters Hawaii");
    setMeta("og:title", "Exterior Painting Oahu Hawaii | Hawaii Painters 808", true);
    setMeta("og:description", "Professional exterior painting on Oahu. Sherwin-Williams Duration paint built for Hawaii's climate. Licensed, insured. Free estimates.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://hawaiipainters808.com/services/exterior-painting");
    const schemaId = "schema-exterior";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script"); s.id = schemaId; s.type = "application/ld+json";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Exterior Painting", "provider": { "@type": "LocalBusiness", "name": "Hawaii Painters 808", "telephone": "+18082723816", "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" } }, "areaServed": "Oahu, Hawaii", "description": "Professional exterior painting services for Oahu homes and businesses. Sherwin-Williams Duration paint, full surface prep, two coats minimum.", "url": "https://hawaiipainters808.com/services/exterior-painting" });
      document.head.appendChild(s);
    }
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <main>
      <Navbar />
      <div className="absolute top-0 left-0 right-0 z-40 pt-24 pb-0 px-6 md:px-16 pointer-events-none">
        <nav className="flex items-center gap-2 text-xs text-white/60 pointer-events-auto">
          <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-white/90 font-semibold">Exterior Painting</span>
        </nav>
      </div>
      <ExteriorHero />
      <ExteriorWhySection />
      <ExteriorGallery />
      <ExteriorProcess />
      <ExteriorTestimonials />
      <ExteriorFaq />
      <ExteriorRelatedServices />
      <ExteriorBlogLinks />
      <ExteriorLocations />
      <ExteriorCta />
      <Footer />
    </main>
  );
}
