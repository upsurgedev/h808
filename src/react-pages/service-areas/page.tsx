import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

const areas = [
  {
    name: "Honolulu",
    region: "South Oahu",
    href: "/painters-honolulu-hi",
    hasDedicatedPage: true,
    icon: "ri-building-2-line",
    neighborhoods: ["Waikiki", "Ala Moana", "Manoa", "Kaimuki", "Makiki", "Nuuanu", "Kalihi", "Downtown", "Punchbowl", "Palolo"],
    image: "/images/hub-honolulu.jpg",
  },
  {
    name: "Kailua",
    region: "Windward Oahu",
    href: "/painters-kailua-hi",
    hasDedicatedPage: true,
    icon: "ri-water-flash-line",
    neighborhoods: ["Lanikai", "Enchanted Lake", "Keolu Hills", "Maunawili", "Coconut Grove", "Kailua Beach", "Aikahi", "Kalaheo Hillside"],
    image: "/images/hub-kailua.jpg",
  },
  {
    name: "Kaneohe",
    region: "Windward Oahu",
    href: "/painters-kaneohe-hi",
    hasDedicatedPage: true,
    icon: "ri-plant-line",
    neighborhoods: ["Haiku", "Ahuimanu", "Heeia", "Kahaluu", "Kaneohe Bay", "Lilipuna", "Puohala Village", "Waiahole"],
    image: "/images/hub-kaneohe.jpg",
  },
  {
    name: "Pearl City",
    region: "Central Oahu",
    href: "/painters-pearl-city-hi",
    hasDedicatedPage: true,
    icon: "ri-home-3-line",
    neighborhoods: ["Aiea", "Halawa", "Waimalu", "Manana", "Pacific Palisades", "Pearlridge", "Newtown", "Pearl Harbor"],
    image: "/images/hub-pearl-city.jpg",
  },
  {
    name: "Kapolei",
    region: "West Oahu",
    href: "/painters-kapolei-hi",
    hasDedicatedPage: true,
    icon: "ri-sun-line",
    neighborhoods: ["Ko Olina", "Makakilo", "Ocean Pointe", "Honokai Hale", "Kapolei Commons", "Ewa by Gentry"],
    image: "/images/hub-kapolei.jpg",
  },
  {
    name: "Ewa Beach",
    region: "West Oahu",
    href: "/painters-ewa-beach-hi",
    hasDedicatedPage: true,
    icon: "ri-anchor-line",
    neighborhoods: ["Ewa Villages", "Iroquois Point", "Ewa Gentry", "Hoakalei", "Ocean Pointe", "Ewa Beach Town"],
    image: "/images/hub-ewa-beach.jpg",
  },
  {
    name: "Mililani",
    region: "Central Oahu",
    href: "/painters-mililani-hi",
    hasDedicatedPage: true,
    icon: "ri-community-line",
    neighborhoods: ["Mililani Town", "Mililani Mauka", "Waipio Acres", "Launani Valley", "Melemanu", "Waikele"],
    image: "/images/hub-mililani.jpg",
  },
  {
    name: "Waipahu",
    region: "Central Oahu",
    href: "/painters-waipahu-hi",
    hasDedicatedPage: true,
    icon: "ri-map-pin-2-line",
    neighborhoods: ["Waipahu Town", "Village Park", "Royal Kunia", "Waikele", "Crestview", "Honouliuli", "Waipahu Estates", "Soda Creek"],
    image: "/images/hub-waipahu.jpg",
  },
  {
    name: "Wahiawa",
    region: "Central Oahu",
    href: "/service-areas/wahiawa",
    hasDedicatedPage: false,
    icon: "ri-landscape-line",
    neighborhoods: ["Whitmore Village", "Poamoho", "Schofield Barracks", "Wheeler", "Wahiawa Town", "Kemo'o"],
    image: "/images/hub-wahiawa.jpg",
  },
  {
    name: "Waianae",
    region: "Leeward Oahu",
    href: "/service-areas/waianae",
    hasDedicatedPage: false,
    icon: "ri-landscape-line",
    neighborhoods: ["Nanakuli", "Maili", "Lualualei", "Pokai Bay", "Waianae Town", "Makaha"],
    image: "/images/hub-waianae.jpg",
  },
  {
    name: "Kahala & Diamond Head",
    region: "East Honolulu",
    href: "/painters-kahala-diamond-head-hi",
    hasDedicatedPage: true,
    icon: "ri-ancient-gate-line",
    neighborhoods: ["Kahala", "Diamond Head", "Black Point", "Waialae Iki", "Wilhelmina Rise", "Waialae Nui Ridge", "Maunalani Heights", "St. Louis Heights"],
    image: "/images/hub-kahala.jpg",
  },
  {
    name: "Hawaii Kai",
    region: "East Honolulu",
    href: "/painters-hawaii-kai-hi",
    hasDedicatedPage: true,
    icon: "ri-sailboat-line",
    neighborhoods: ["Portlock", "Kuliouou", "Aina Haina", "Hahaione", "Kalama Valley", "Mariners Ridge"],
    image: "/images/hub-hawaii-kai.jpg",
  },
  {
    name: "Makaha",
    region: "Leeward Oahu",
    href: "/service-areas/makaha",
    hasDedicatedPage: false,
    icon: "ri-water-percent-line",
    neighborhoods: ["Makaha Valley", "Keaau", "Mauna Lahilahi", "Papailoa", "Makaha Beach", "Lahilahi"],
    image: "/images/hub-makaha.jpg",
  },
  {
    name: "North Shore",
    region: "North Oahu",
    href: "/painters-north-shore-hi",
    hasDedicatedPage: true,
    icon: "ri-water-flash-line",
    neighborhoods: ["Haleiwa", "Sunset Beach", "Waimea", "Pupukea", "Kahuku", "Laie", "Hauula", "Waialua"],
    image: "/images/hub-north-shore.jpg",
  },
];

export default function ServiceAreasPage() {
  useEffect(() => {
    document.title = "Painting Service Areas — All of Oahu, Hawaii | Hawaii Painters 808";

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

    setMeta("description", "Hawaii Painters 808 serves all of Oahu — Honolulu, Kailua, Kaneohe, Pearl City, Kapolei, Ewa Beach, Mililani, Waipahu & more. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "painting contractor Oahu Hawaii, painters Oahu, house painting Oahu HI, Hawaii Painters 808 service areas");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Oahu, Hawaii");
    setMeta("geo.position", "21.4389;-158.0001");
    setMeta("og:title", "Painting Service Areas — All of Oahu | Hawaii Painters 808", true);
    setMeta("og:description", "Hawaii Painters 808 serves all of Oahu. Find your neighborhood and get a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com/service-areas");

    const schemaId = "schema-service-areas";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving all of Oahu, Hawaii since 2012.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" },
        "areaServed": areas.map(a => ({ "@type": "City", "name": a.name })),
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "url": "https://hawaiipainters808.com/service-areas"
      });
      document.head.appendChild(script);
    }

    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <main>
      <Navbar />

      {/* ── COMPACT HERO ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "340px" }}>
        <div className="absolute inset-0">
          <img
            src="/images/hero-service-areas.jpg"
            alt="Hawaii Painters 808 — Serving All of Oahu"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>
        <div className="relative w-full px-6 md:px-16 pt-32 pb-10">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4 flex-wrap">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/80">Service Areas</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-3">
                Where We Work on Oʻahu
              </h1>
              <p className="text-white/75 text-base max-w-xl">
                16 communities, every neighborhood. Same crew, same standards, same 1-year workmanship warranty — wherever you are.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:8082723816" className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-phone-fill"></i>
                808-272-3816
              </a>
              <a href="#areas" className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-map-pin-2-line"></i>
                Find My Area
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div id="areas" className="bg-[#1a1a1a] px-6 md:px-16 py-5 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {[
              { icon: "ri-map-pin-2-fill", value: "All of", label: "Oahu" },
              { icon: "ri-home-3-fill", value: "500+", label: "Homes Painted" },
              { icon: "ri-star-fill", value: "5.0", label: "Google Rating" },
              { icon: "ri-shield-check-fill", value: "Licensed", label: "& Insured" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center">
                  <i className={`${s.icon} text-[#4a9fa5] text-sm`}></i>
                </div>
                <div>
                  <div className="text-white font-black text-sm leading-none">{s.value}</div>
                  <div className="text-white/40 text-[10px] leading-none mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="tel:8082723816"
            className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-xs px-4 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill text-xs"></i>
            808-272-3816
          </a>
        </div>
      </div>

      {/* ── ALL AREA CARDS — single unified grid ── */}
      <section id="areas-grid" className="bg-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {areas.map((area) => (
              <a
                key={area.name}
                href={area.href}
                id={`region-${area.region.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ height: "160px" }}>
                  <img
                    src={area.image}
                    alt={`Painters in ${area.name}, Oahu Hawaii`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  {area.hasDedicatedPage && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 bg-[#4a9fa5] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                        <i className="ri-check-line text-[10px]"></i>
                        Full Page
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="px-4 pt-3 pb-4">
                  <div className="mb-2">
                    <div className="text-[#1a1a1a] font-black text-base leading-tight">{area.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{area.region}</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {area.neighborhoods.slice(0, 4).map((n) => (
                      <span key={n} className="bg-[#f5f5f5] text-gray-500 text-[10px] px-2 py-0.5 rounded-full">
                        {n}
                      </span>
                    ))}
                    {area.neighborhoods.length > 4 && (
                      <span className="bg-[#4a9fa5]/10 text-[#4a9fa5] text-[10px] px-2 py-0.5 rounded-full font-bold">
                        +{area.neighborhoods.length - 4}
                      </span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-[#4a9fa5] font-black text-xs group-hover:gap-2 transition-all">
                    {area.hasDedicatedPage ? "View page" : "Learn more"}
                    <i className="ri-arrow-right-line text-[10px]"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOOD INDEX (SEO) ── */}
      <section className="bg-[#1a1a1a] py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <div>
              <h2 className="text-white font-black text-xl mb-1">Every Neighborhood We Serve</h2>
              <p className="text-white/50 text-sm">Don't see yours? Call us — if it's on Oahu, we'll come to you.</p>
            </div>
            <a href="tel:8082723816" className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0">
              <i className="ri-phone-fill"></i>
              808-272-3816
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
            {areas.flatMap((a) => a.neighborhoods).map((n) => (
              <div key={n} className="flex items-center gap-1.5 text-white/60 text-xs py-1">
                <i className="ri-map-pin-line text-[#4a9fa5] text-xs flex-shrink-0"></i>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-white py-14 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f5f5f5] border border-gray-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[#1a1a1a] font-black text-2xl md:text-3xl leading-tight mb-3">
                Ready for a Free Estimate?
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Tell us where you are and what you need. I'll come to you, look at the job myself, and give you a straight answer. No charge. No pressure.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="tel:8082723816" className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-phone-fill"></i>
                Call 808-272-3816
              </a>
              <a href="/services" className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-brush-line"></i>
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
