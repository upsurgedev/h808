import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CommercialHero from "./components/CommercialHero";
import CommercialWhySection from "./components/CommercialWhySection";
import CommercialGallery from "./components/CommercialGallery";
import CommercialProcess from "./components/CommercialProcess";
import CommercialTestimonials from "./components/CommercialTestimonials";
import CommercialFaq from "./components/CommercialFaq";
import CommercialCta from "./components/CommercialCta";
import CommercialRelatedServices from "./components/CommercialRelatedServices";
import CommercialLocations from "./components/CommercialLocations";

export default function CommercialPaintingPage() {
  useEffect(() => {
    document.title = "Commercial Painting Oahu Hawaii | Hawaii Painters 808 | Free Estimates";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Commercial painting contractor on Oahu, Hawaii. Hawaii Painters 808 paints offices, retail, restaurants & more. Licensed, insured. We work around your schedule. Call 808-272-3816.");
    setMeta("keywords", "commercial painting Oahu Hawaii, commercial painters Honolulu, office painting contractor Oahu, business painting Hawaii");
    setMeta("og:title", "Commercial Painting Oahu Hawaii | Hawaii Painters 808", true);
    setMeta("og:description", "Commercial painting contractor on Oahu. Offices, retail, restaurants. Licensed, insured. We work around your schedule. Free estimates.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://housepaintershonolulu.com/services/commercial-painting");
    const schemaId = "schema-commercial";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script"); s.id = schemaId; s.type = "application/ld+json";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Commercial Painting", "provider": { "@type": "LocalBusiness", "name": "Hawaii Painters 808", "telephone": "+18082723816", "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" } }, "areaServed": "Oahu, Hawaii", "description": "Commercial painting services for offices, retail, restaurants, and businesses across Oahu, Hawaii.", "url": "https://housepaintershonolulu.com/services/commercial-painting" });
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
          <span className="text-white/90 font-semibold">Commercial Painting</span>
        </nav>
      </div>
      <CommercialHero />
      <CommercialWhySection />
      <CommercialGallery />
      <CommercialProcess />
      <CommercialTestimonials />
      <CommercialFaq />
      <CommercialRelatedServices />
      <CommercialLocations />
      <CommercialCta />
      <Footer />
    </main>
  );
}
