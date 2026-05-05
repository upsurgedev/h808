import { useState, useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import NearbyAreas from "@/components/feature/NearbyAreas";
import AreaContactSection from "@/components/feature/AreaContactSection";

const neighborhoods = [
  "Kahala", "Diamond Head", "Black Point", "Waialae Iki",
  "Wilhelmina Rise", "Waialae Nui Ridge", "Maunalani Heights", "St. Louis Heights",
  "Palolo Valley", "Kapahulu", "Kaimuki", "Waialae-Kahala",
];

const services = [
  { icon: "ri-home-4-line", title: "Interior Painting", slug: "interior-painting", desc: "Precision interior work for Kahala and Diamond Head estates — Sherwin-Williams Duration or Emerald applied with the care that landmark homes deserve." },
  { icon: "ri-building-line", title: "Exterior Painting", slug: "exterior-painting", desc: "Diamond Head's ocean-facing slopes and Kahala's beachfront exposure demand coatings built for coastal conditions. We know exactly what holds up here." },
  { icon: "ri-community-line", title: "Residential Painting", slug: "residential-painting", desc: "Full home painting for Kahala estates, inside and out. Careful prep, clean execution, and a final walkthrough before we leave." },
  { icon: "ri-store-2-line", title: "Commercial Painting", slug: "commercial-painting", desc: "Commercial properties along Waialae Avenue and the Kahala corridor. We work around your schedule — nights, weekends, minimal disruption." },
  { icon: "ri-layout-grid-line", title: "Cabinet Painting", slug: "cabinet-painting", desc: "Custom cabinet refinishing for Kahala kitchens. A professional paint job looks brand new for a fraction of replacement cost." },
  { icon: "ri-tools-line", title: "Drywall Repair", slug: "drywall", desc: "Holes, cracks, water damage, skim coating. We fix it right before we paint — no shortcuts, no painting over problems." },
];

const testimonials = [
  {
    name: "Alana P.",
    location: "Kahala, Honolulu",
    stars: 5,
    quote: "Two years later and the walls still look perfect. No bubbling, no mold. He used the right products for Hawaii's humidity. That matters a lot when you have a home like ours.",
  },
  {
    name: "Jennifer K.",
    location: "Diamond Head, Honolulu",
    stars: 5,
    quote: "Lopaka was on time, meticulous, and raised the value of the place. Very pleasant to work with. I wouldn't call anyone else for our Diamond Head home.",
  },
  {
    name: "David & Sarah M.",
    location: "Waialae Iki, Honolulu",
    stars: 5,
    quote: "Painting was done on time and on budget. We repainted before listing and the house sold in three days. Lopaka is responsible and has great customer service.",
  },
];

const faqs = [
  {
    q: "Do you serve Kahala, Diamond Head, and Black Point?",
    a: "Yes — we cover all of Kahala, Diamond Head, Black Point, Waialae Iki, Wilhelmina Rise, Waialae Nui Ridge, Maunalani Heights, and every neighborhood in the area. Same-day estimates available.",
  },
  {
    q: "How does the Diamond Head coastal environment affect exterior paint?",
    a: "Diamond Head's ocean-facing slopes and Kahala's beachfront properties are exposed to some of the most intense salt air on Oahu. After 30+ years painting on this island, I know which Sherwin-Williams Duration products hold up best in these conditions. Standard paint fails fast here — the prep and product selection make all the difference.",
  },
  {
    q: "Do you have experience with historic and high-value homes?",
    a: "Absolutely. Kahala and Diamond Head have some of the most architecturally significant homes on Oahu — many of them older, with unique surfaces and finishes. We take extra care with prep, masking, and product selection to protect and enhance these properties. Every job gets a detailed walkthrough before we consider it done.",
  },
  {
    q: "What paint do you use for Kahala and Diamond Head homes?",
    a: "Sherwin-Williams Duration is my standard for exterior and most interior work — it's a premium line I've trusted for 30+ years in Hawaii. For high-end interiors where sheen and finish quality matter most, we can also discuss Sherwin-Williams Emerald. I'll recommend the right product for your specific surfaces and goals.",
  },
  {
    q: "How quickly can you start a project in Kahala?",
    a: "We typically schedule within 1–2 weeks of estimate approval. For larger estate projects, I'll walk the property first and give you a detailed written scope and timeline. No surprises.",
  },
  {
    q: "Are you licensed to work in Honolulu, Hawaii?",
    a: "Absolutely. Hawaii Painters 808 is fully licensed and insured statewide in Hawaii. We carry general liability and workers' compensation on every job — no exceptions.",
  },
];

export default function PaintersKahalaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Painters in Kahala & Diamond Head, HI | Hawaii Painters 808";

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

    setMeta("description", "Professional painters in Kahala & Diamond Head, HI. Hawaii Painters 808 serves Kahala, Diamond Head, Black Point, Waialae Iki & east Honolulu. Licensed, insured. Call 808-272-3816.");
    setMeta("keywords", "painters Kahala Hawaii, painting contractor Diamond Head Honolulu, house painting Kahala HI, Black Point painters, Waialae Iki painters");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Kahala, Honolulu, Hawaii");
    setMeta("geo.position", "21.2769;-157.7783");
    setMeta("og:title", "Painters in Kahala & Diamond Head, HI | Hawaii Painters 808", true);
    setMeta("og:description", "Professional painters in Kahala & Diamond Head, HI. Licensed, insured. Call 808-272-3816 for a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://housepaintershonolulu.com/painters-kahala-diamond-head-hi");

    const schemaId = "schema-kahala";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving Kahala, Diamond Head, and east Honolulu since 2012.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Kahala", "addressRegion": "HI", "addressCountry": "US" },
        "areaServed": "Kahala, Diamond Head, Black Point, Honolulu, Hawaii",
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "url": "https://housepaintershonolulu.com/painters-kahala-diamond-head-hi"
      });
      document.head.appendChild(script);
    }

    const faqSchemaId = "schema-faq-kahala";
    if (!document.getElementById(faqSchemaId)) {
      const faqScript = document.createElement("script");
      faqScript.id = faqSchemaId;
      faqScript.type = "application/ld+json";
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
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

      {/* Hero */}
      <section className="relative min-h-[620px] md:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/area-kahala.jpg"
            alt="Painters in Kahala and Diamond Head Hawaii"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/28"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
        </div>
        <div className="relative w-full px-6 md:px-16 pt-32 pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/service-areas" className="hover:text-white transition-colors cursor-pointer">Service Areas</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/90">Kahala &amp; Diamond Head</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5] text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
              <i className="ri-map-pin-2-fill"></i>
              Kahala &amp; Diamond Head, Honolulu
            </div>
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Painters in Kahala<br />&amp; Diamond Head
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Hawaii Painters 808 serves Kahala's finest estates and Diamond Head's landmark homes. We know the coastal conditions, the architecture, and the standard of work these properties demand. Licensed, insured, and Oahu-born since 2012.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8082723816"
                className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i>
                Call 808-272-3816
              </a>
              <a href="#contact-form" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1a1a1a] font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-file-list-3-line"></i>
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1a1a1a] py-4">
        <div className="w-full px-6 md:px-16">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { icon: "ri-shield-check-fill", label: "Licensed & Insured" },
              { icon: "ri-price-tag-3-line", label: "Free Estimates" },
              { icon: "ri-map-pin-2-fill", label: "Kahala, Diamond Head & East Honolulu" },
              { icon: "ri-thumb-up-fill", label: "1-Year Warranty" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white text-sm font-bold whitespace-nowrap">
                <div className="w-6 h-6 flex items-center justify-center text-[#4a9fa5]">
                  <i className={`${item.icon} text-base`}></i>
                </div>
                <span className="text-white/90">✓ {item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Sidebar */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-6">
                Professional Painting Services in Kahala &amp; Diamond Head
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Kahala and Diamond Head represent some of the most prestigious real estate on Oahu — and some of the most demanding conditions for paint. The ocean-facing slopes of Diamond Head and Kahala's beachfront properties are exposed to intense salt air, UV, and humidity. Mainland products fail fast here. The prep and product selection make all the difference.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                I'm Lopaka — born and raised on Oahu, licensed and insured, and I've been painting homes across this island since 2012. These neighborhoods have some of the finest homes on Oahu, and I treat them accordingly. Careful prep, precise masking, two full coats of Sherwin-Williams Duration. Your floors, furniture, and finishes are protected. Daily cleanup. Final walkthrough before I consider the job done.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you're in Kahala proper, on the slopes of Diamond Head, at Black Point, or up on Waialae Nui Ridge — we know your neighborhood and we'll deliver results that match the quality of your home.
              </p>

              {/* What's included */}
              <div className="mb-8">
                <p className="text-[#1a1a1a] font-black text-base mb-4 uppercase tracking-wide">What's included:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Full surface prep — wash, sand, patch, prime",
                    "Two finish coats of Sherwin-Williams Duration minimum",
                    "Careful protection of floors, furniture, and fixtures",
                    "Trim, doors, and ceilings if requested",
                    "Daily cleanup — your home stays livable throughout",
                    "Final walkthrough with you before we leave",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-5 h-5 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Paint options callout */}
              <div className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5]/15 rounded-full flex-shrink-0">
                    <i className="ri-paint-brush-line text-[#4a9fa5] text-lg"></i>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] font-black text-sm mb-1">Premium Paint Options for High-End Homes</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      For Kahala and Diamond Head properties, we offer Sherwin-Williams Duration (our standard) and Sherwin-Williams Emerald for interiors where finish quality and sheen are paramount. I'll recommend the right product for your specific surfaces and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-28 bg-[#f5f5f5] border border-gray-200 rounded-2xl p-8">
                <p className="text-[#1a1a1a] font-black text-xl mb-5">Get a Free Kahala Estimate</p>
                <a href="tel:8082723816" className="flex items-center gap-3 mb-5 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                    <i className="ri-phone-fill text-white text-lg"></i>
                  </div>
                  <div>
                    <div className="text-[#4a9fa5] font-black text-2xl group-hover:text-[#3d8a8f] transition-colors">808-272-3816</div>
                    <div className="text-gray-500 text-xs">Call Lopaka directly</div>
                  </div>
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">
                  <i className="ri-time-line text-[#4a9fa5]"></i>
                  Mon–Fri 8am–5pm
                </div>
                <a href="#contact-form" className="w-full flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#4a9fa5] text-white font-black text-sm tracking-wider px-6 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-file-list-3-line"></i>
                  Request Estimate
                </a>
                <div className="mt-5 flex flex-col gap-2">
                  {["Licensed & Insured in Hawaii", "No-obligation estimate", "Kahala & Diamond Head specialist"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-gray-500 text-xs">
                      <i className="ri-check-line text-[#4a9fa5]"></i>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Neighborhoods Are Different */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Why Kahala &amp; Diamond Head Homes Need a Local Expert
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              These aren't average Honolulu neighborhoods. The conditions, the architecture, and the expectations are all different.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-tornado-fill",
                title: "Ocean-Facing Salt Exposure",
                body: "Kahala's beachfront properties and Diamond Head's south-facing slopes face direct ocean exposure. Salt air here is relentless — it attacks paint adhesion, causes blistering, and accelerates rust on metal surfaces. After 30+ years on Oahu, I know which products and prep methods actually hold up in these conditions.",
              },
              {
                icon: "ri-ancient-gate-line",
                title: "Older & Historic Architecture",
                body: "Many Kahala and Diamond Head homes are architecturally significant — older construction with unique surfaces, original wood, and finishes that require careful handling. We take extra time with prep and masking to protect what makes these homes special. No rushing, no shortcuts.",
              },
              {
                icon: "ri-home-heart-line",
                title: "The Standard These Homes Deserve",
                body: "Kahala and Diamond Head are among the most valuable addresses on Oahu. The standard of work needs to match. That means precise masking, clean daily work, careful furniture and floor protection, and a final walkthrough where you sign off before we consider the job done.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center bg-[#4a9fa5]/10 rounded-xl mb-5">
                  <i className={`${card.icon} text-[#4a9fa5] text-2xl`}></i>
                </div>
                <h3 className="text-[#1a1a1a] font-black text-lg mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-4 h-[240px] md:h-[320px]">
          {[
            {
              src: "/images/gallery-kahala-exterior.jpg",
              label: "Kahala Exterior",
            },
            {
              src: "/images/gallery-kahala-interior.jpg",
              label: "Diamond Head Interior",
            },
            {
              src: "/images/gallery-kahala-cabinet.jpg",
              label: "Cabinet Refinishing",
            },
            {
              src: "/images/gallery-kahala-blackpoint.jpg",
              label: "Black Point Estate",
            },
          ].map((img) => (
            <div key={img.label} className="relative overflow-hidden">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="absolute bottom-3 left-3 text-white font-black text-xs">{img.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Our Painting Services in Kahala &amp; Diamond Head
            </h2>
            <p className="text-gray-500 text-base">Full-service painting solutions for every property in the area.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all cursor-pointer block"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-3">
                  <i className={`${s.icon} text-white`}></i>
                </div>
                <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-[#4a9fa5] font-bold text-sm group-hover:gap-2 transition-all">
                  Learn More <i className="ri-arrow-right-line"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-10">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Neighborhoods We Serve
            </h2>
            <p className="text-gray-500 text-base">Kahala, Diamond Head, and the surrounding east Honolulu communities.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {neighborhoods.map((n) => (
              <div key={n} className="bg-white border border-gray-200 hover:border-[#4a9fa5] hover:bg-[#4a9fa5]/5 rounded-xl p-4 text-center transition-all cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-map-pin-2-fill text-[#4a9fa5] text-lg"></i>
                </div>
                <div className="text-[#1a1a1a] font-black text-sm">{n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-16">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl text-center mb-12">
            What Kahala &amp; Diamond Head Homeowners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <i key={j} className="ri-star-fill text-[#4a9fa5]"></i>
                  ))}
                </div>
                <p className="text-[#1a1a1a] text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                    <i className="ri-user-fill text-white text-xs"></i>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a] font-black text-xs">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NearbyAreas currentCity="Kahala" />

      {/* FAQ */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16 max-w-3xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl text-center mb-12">
            FAQs — Painting in Kahala &amp; Diamond Head
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[#1a1a1a] font-black text-sm">{item.q}</span>
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 ml-3">
                    <i className={`${openFaq === i ? "ri-subtract-line" : "ri-add-line"} text-[#4a9fa5] text-lg`}></i>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AreaContactSection
        city="Kahala"
        sourcePage="Painters Kahala & Diamond Head"
        description="I serve homeowners across Kahala, Diamond Head, Black Point, and all of east Honolulu. Call me directly or send a message and I'll get back to you fast. Mahalo for considering Hawaii Painters 808."
        trustItems={["Licensed & Insured in Hawaii", "Free estimate — no obligation", "Kahala & Diamond Head specialist", "I personally oversee every job"]}
      />

      <Footer />
    </main>
  );
}
