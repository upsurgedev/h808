import { useEffect } from "react";

import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CabinetHero from "./components/CabinetHero";
import CabinetWhySection from "./components/CabinetWhySection";
import CabinetGallery from "./components/CabinetGallery";
import CabinetProcess from "./components/CabinetProcess";
import CabinetTestimonials from "./components/CabinetTestimonials";
import CabinetFaq from "./components/CabinetFaq";
import CabinetCta from "./components/CabinetCta";
import CabinetRelatedServices from "./components/CabinetRelatedServices";
import CabinetLocations from "./components/CabinetLocations";

export default function CabinetPaintingPage() {
  useEffect(() => {
    document.title = "Cabinet Painting Oahu Hawaii | Hawaii Painters 808 | Free Estimates";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Professional cabinet painting on Oahu, Hawaii. Hawaii Painters 808 — spray-applied finish, factory-smooth results. Fraction of replacement cost. Licensed, insured. Call 808-272-3816.");
    setMeta("keywords", "cabinet painting Oahu Hawaii, kitchen cabinet painting Honolulu, cabinet refinishing Hawaii, cabinet painters Oahu");
    setMeta("og:title", "Cabinet Painting Oahu Hawaii | Hawaii Painters 808", true);
    setMeta("og:description", "Professional cabinet painting on Oahu. Spray-applied factory finish. Fraction of replacement cost. Licensed, insured. Free estimates.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://hawaiipainters808.com/services/cabinet-painting");
    const schemaId = "schema-cabinet";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script"); s.id = schemaId; s.type = "application/ld+json";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Cabinet Painting", "provider": { "@type": "LocalBusiness", "name": "Hawaii Painters 808", "telephone": "+18082723816", "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" } }, "areaServed": "Oahu, Hawaii", "description": "Professional cabinet painting for Oahu kitchens and bathrooms. Spray-applied factory-smooth finish at a fraction of replacement cost.", "url": "https://hawaiipainters808.com/services/cabinet-painting" });
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
          <span className="text-white/90 font-semibold">Cabinet Painting</span>
        </nav>
      </div>
      <CabinetHero />
      <CabinetWhySection />
      <CabinetGallery />
      <CabinetProcess />
      <CabinetTestimonials />
      <CabinetFaq />
      <CabinetRelatedServices />
      <CabinetLocations />
      <CabinetCta />
      <Footer />
    </main>
  );
}
