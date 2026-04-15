import { useEffect } from "react";

import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ResidentialHero from "./components/ResidentialHero";
import ResidentialWhySection from "./components/ResidentialWhySection";
import ResidentialGallery from "./components/ResidentialGallery";
import ResidentialProcess from "./components/ResidentialProcess";
import ResidentialTestimonials from "./components/ResidentialTestimonials";
import ResidentialFaq from "./components/ResidentialFaq";
import ResidentialCta from "./components/ResidentialCta";
import ResidentialRelatedServices from "./components/ResidentialRelatedServices";
import ResidentialLocations from "./components/ResidentialLocations";

export default function ResidentialPaintingPage() {
  useEffect(() => {
    document.title = "Residential Painting Oahu Hawaii | Hawaii Painters 808 | Free Estimates";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Residential painting contractor on Oahu, Hawaii. Hawaii Painters 808 paints homes inside and out — licensed, insured, Sherwin-Williams Duration. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "residential painting Oahu Hawaii, house painting contractor Honolulu, home painters Oahu, residential painters Hawaii");
    setMeta("og:title", "Residential Painting Oahu Hawaii | Hawaii Painters 808", true);
    setMeta("og:description", "Residential painting contractor on Oahu. Interior, exterior, full home painting. Licensed, insured. Free estimates. Call 808-272-3816.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://hawaiipainters808.com/services/residential-painting");
    const schemaId = "schema-residential";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script"); s.id = schemaId; s.type = "application/ld+json";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Residential Painting", "provider": { "@type": "LocalBusiness", "name": "Hawaii Painters 808", "telephone": "+18082723816", "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" } }, "areaServed": "Oahu, Hawaii", "description": "Full-service residential painting for Oahu homes. Interior and exterior painting, proper prep, Sherwin-Williams Duration paint.", "url": "https://hawaiipainters808.com/services/residential-painting" });
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
          <span className="text-white/90 font-semibold">Residential Painting</span>
        </nav>
      </div>

      <ResidentialHero />
      <ResidentialWhySection />
      <ResidentialGallery />
      <ResidentialProcess />
      <ResidentialTestimonials />
      <ResidentialFaq />
      <ResidentialRelatedServices />
      <ResidentialLocations />
      <ResidentialCta />

      <Footer />
    </main>
  );
}
