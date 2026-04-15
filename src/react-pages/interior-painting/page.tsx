import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import InteriorHero from "./components/InteriorHero";
import InteriorWhySection from "./components/InteriorWhySection";
import InteriorGallery from "./components/InteriorGallery";
import InteriorProcess from "./components/InteriorProcess";
import InteriorTestimonials from "./components/InteriorTestimonials";
import InteriorFaq from "./components/InteriorFaq";
import InteriorCta from "./components/InteriorCta";
import InteriorRelatedServices from "./components/InteriorRelatedServices";
import InteriorBlogLinks from "./components/InteriorBlogLinks";
import InteriorLocations from "./components/InteriorLocations";

export default function InteriorPaintingPage() {
  useEffect(() => {
    document.title = "Interior Painting Oahu Hawaii | Hawaii Painters 808 | Free Estimates";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Professional interior painting on Oahu, Hawaii. Hawaii Painters 808 — Sherwin-Williams Duration paint, proper prep, two coats minimum. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "interior painting Oahu Hawaii, interior house painting Honolulu, indoor painting contractor Oahu, interior painters Hawaii");
    setMeta("og:title", "Interior Painting Oahu Hawaii | Hawaii Painters 808", true);
    setMeta("og:description", "Professional interior painting on Oahu. Sherwin-Williams Duration, proper prep, two coats minimum. Licensed, insured. Free estimates.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://hawaiipainters808.com/services/interior-painting");
    const schemaId = "schema-interior";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script"); s.id = schemaId; s.type = "application/ld+json";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Interior Painting", "provider": { "@type": "LocalBusiness", "name": "Hawaii Painters 808", "telephone": "+18082723816", "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" } }, "areaServed": "Oahu, Hawaii", "description": "Professional interior painting services for Oahu homes and businesses. Sherwin-Williams Duration paint, full surface prep, two coats minimum.", "url": "https://hawaiipainters808.com/services/interior-painting" });
      document.head.appendChild(s);
    }
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <main>
      <Navbar />

      {/* Breadcrumb */}
      <div className="absolute top-0 left-0 right-0 z-40 pt-24 pb-0 px-6 md:px-16 pointer-events-none">
        <nav className="flex items-center gap-2 text-xs text-white/60 pointer-events-auto">
          <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-white/90 font-semibold">Interior Painting</span>
        </nav>
      </div>

      <InteriorHero />
      <InteriorWhySection />
      <InteriorGallery />
      <InteriorProcess />
      <InteriorTestimonials />
      <InteriorFaq />
      <InteriorRelatedServices />
      <InteriorBlogLinks />
      <InteriorLocations />
      <InteriorCta />

      <Footer />
    </main>
  );
}
