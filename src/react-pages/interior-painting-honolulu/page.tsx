import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import NearbyAreas from "@/components/feature/NearbyAreas";
import HnlHero from "./components/HnlHero";
import HnlTrustBar from "./components/HnlTrustBar";
import HnlServiceOverview from "./components/HnlServiceOverview";
import HnlWhyHawaii from "./components/HnlWhyHawaii";
import HnlProcess from "./components/HnlProcess";
import HnlNeighborhoods from "./components/HnlNeighborhoods";
import HnlFaq from "./components/HnlFaq";
import HnlContactCta from "./components/HnlContactCta";

export default function InteriorPaintingHonoluluPage() {
  useEffect(() => {
    document.title = "Interior Painting in Honolulu, HI | Hawaii Painters 808";

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

    setMeta("description", "Professional interior painters in Honolulu. Hawaii Painters 808 serves all of Oʻahu. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "interior painting Honolulu, interior painters Oahu, house painting Honolulu HI");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Honolulu, Hawaii");
    setMeta("geo.position", "21.3069;-157.8583");
    setMeta("og:title", "Interior Painting in Honolulu, HI | Hawaii Painters 808", true);
    setMeta("og:description", "Professional interior painters in Honolulu. Hawaii Painters 808 serves all of Oʻahu. Call 808-272-3816 for a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com/painters-honolulu-hi");

    // Schema.org LocalBusiness structured data
    const schemaId = "schema-interior-honolulu";
    let existing = document.getElementById(schemaId);
    if (!existing) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional interior painters in Honolulu serving all of Oʻahu since 2012.",
        "telephone": "+18082723816",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Honolulu",
          "addressRegion": "HI",
          "addressCountry": "US"
        },
        "areaServed": "Oahu, Hawaii",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "url": "https://hawaiipainters808.com/painters-honolulu-hi"
      });
      document.head.appendChild(script);
    }

    // FAQ Schema
    const faqSchemaId = "schema-faq-interior-honolulu";
    let existingFaq = document.getElementById(faqSchemaId);
    if (!existingFaq) {
      const faqScript = document.createElement("script");
      faqScript.id = faqSchemaId;
      faqScript.type = "application/ld+json";
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does interior painting take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most interior painting projects take 1–4 days depending on the size of the space, number of rooms, and prep work required."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to move furniture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You just need to clear small personal items and valuables. Our crew handles moving and protecting larger furniture with drop cloths and plastic sheeting."
            }
          },
          {
            "@type": "Question",
            "name": "What paint brands do you use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use Sherwin-Williams Duration — a premium paint that's proven in Hawaii's climate. If you have a preferred color, we'll match it in Duration."
            }
          },
          {
            "@type": "Question",
            "name": "Are you licensed and insured in Hawaii?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Hawaii Painters 808 is fully licensed and insured statewide in Hawaii. We carry general liability and workers' compensation coverage on every job."
            }
          }
        ]
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      document.getElementById(schemaId)?.remove();
      document.getElementById(faqSchemaId)?.remove();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <HnlHero />
      <HnlTrustBar />
      <HnlServiceOverview />
      <HnlWhyHawaii />
      <HnlProcess />
      <HnlNeighborhoods />
      <HnlFaq />
      <HnlContactCta />
      <NearbyAreas currentCity="Honolulu" />
      <Footer />
    </main>
  );
}
