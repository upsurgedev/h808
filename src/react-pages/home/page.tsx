import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./components/HeroSection";
import AboutOwnerSection from "./components/AboutOwnerSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import AreasSection from "./components/AreasSection";
import CtaSection from "./components/CtaSection";

export default function HomePage() {
  useEffect(() => {
    document.title = "Hawaii Painters 808 | Oahu Painting Contractor | Free Estimates";

    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "Hawaii Painters 808 — Oahu's trusted painting contractor since 2012. Interior, exterior, cabinet painting & drywall repair. Licensed, insured. Lopaka personally oversees every job. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "painting contractor Oahu Hawaii, painters Oahu, house painting Hawaii, Hawaii Painters 808, Honolulu painting contractor, exterior painting Oahu, interior painting Hawaii");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Honolulu, Hawaii");
    setMeta("geo.position", "21.3069;-157.8583");
    setMeta("og:title", "Hawaii Painters 808 | Oahu's Trusted Painting Contractor", true);
    setMeta("og:description", "Licensed, insured painting contractor serving all of Oahu since 2012. Interior, exterior, cabinet painting & drywall. Free estimates. Call 808-272-3816.", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://hawaiipainters808.com", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Hawaii Painters 808 | Oahu Painting Contractor");
    setMeta("twitter:description", "Licensed, insured painting contractor serving all of Oahu since 2012. Free estimates. Call 808-272-3816.");

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com");

    const schemaId = "schema-homepage";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving all of Oahu, Hawaii since 2012. Interior painting, exterior painting, cabinet painting, and drywall repair.",
        "telephone": "+18082723816",
        "url": "https://hawaiipainters808.com",
        "logo": "https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/aa9e51d6-4297-44c6-b03b-1aac53c5a83a_white_logo_808.png?v=3d433baea1af8e310a444c6b98ec62f5",
        "image": "https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/aa9e51d6-4297-44c6-b03b-1aac53c5a83a_white_logo_808.png?v=3d433baea1af8e310a444c6b98ec62f5",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3215 Ala Ilima Street",
          "addressLocality": "Honolulu",
          "addressRegion": "HI",
          "postalCode": "96818",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.3069,
          "longitude": -157.8583
        },
        "areaServed": "Oahu, Hawaii",
        "priceRange": "$$",
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "18:00" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Painting Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Painting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair" } }
          ]
        },
        "sameAs": ["https://hawaiipainters808.com"]
      });
      document.head.appendChild(script);
    }

    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutOwnerSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <AreasSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
