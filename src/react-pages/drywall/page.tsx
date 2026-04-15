import { useEffect } from "react";

import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import DrywallHero from "./components/DrywallHero";
import DrywallWhySection from "./components/DrywallWhySection";
import DrywallGallery from "./components/DrywallGallery";
import DrywallProcess from "./components/DrywallProcess";
import DrywallTestimonials from "./components/DrywallTestimonials";
import DrywallFaq from "./components/DrywallFaq";
import DrywallRelatedServices from "./components/DrywallRelatedServices";
import DrywallLocations from "./components/DrywallLocations";
import DrywallCta from "./components/DrywallCta";

export default function DrywallPage() {
  useEffect(() => {
    document.title = "Drywall Repair Oahu Hawaii | Hawaii Painters 808 | Free Estimates";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Professional drywall repair on Oahu, Hawaii. Hawaii Painters 808 — holes, cracks, water damage, popcorn ceiling removal. Fixed right before we paint. Licensed, insured. Call 808-272-3816.");
    setMeta("keywords", "drywall repair Oahu Hawaii, drywall contractor Honolulu, wall repair Hawaii, popcorn ceiling removal Oahu, drywall patching Hawaii");
    setMeta("og:title", "Drywall Repair Oahu Hawaii | Hawaii Painters 808", true);
    setMeta("og:description", "Professional drywall repair on Oahu. Holes, cracks, water damage, popcorn ceiling removal. Fixed right before we paint. Licensed, insured.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://hawaiipainters808.com/services/drywall");
    const schemaId = "schema-drywall";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script"); s.id = schemaId; s.type = "application/ld+json";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Drywall Repair", "provider": { "@type": "LocalBusiness", "name": "Hawaii Painters 808", "telephone": "+18082723816", "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" } }, "areaServed": "Oahu, Hawaii", "description": "Professional drywall repair services across Oahu. Holes, cracks, water damage, popcorn ceiling removal. Fixed right before painting.", "url": "https://hawaiipainters808.com/services/drywall" });
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
          <span className="text-white/90 font-semibold">Drywall Repair</span>
        </nav>
      </div>

      <DrywallHero />
      <DrywallWhySection />
      <DrywallGallery />
      <DrywallProcess />
      <DrywallTestimonials />
      <DrywallFaq />
      <DrywallRelatedServices />
      <DrywallLocations />
      <DrywallCta />

      <Footer />
    </main>
  );
}
