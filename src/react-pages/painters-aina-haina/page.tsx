import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import NearbyAreas from "@/components/feature/NearbyAreas";
import AreaContactSection from "@/components/feature/AreaContactSection";

const neighborhoods = [
  "Aina Haina Valley", "Aina Haina Beach", "Kuliouou", "Hahaione",
  "Niu Valley", "Niu Beach", "Kalani Iki", "Kalani Valley",
  "Waialae Iki", "Waialae Iki Ridge", "Aina Haina Shopping Center Area", "Maunalua",
];

const services = [
  { icon: "ri-home-4-line", title: "Interior Painting", slug: "interior-painting", desc: "Precision interior work for Aina Haina homes — Sherwin-Williams Duration applied with the care and attention that east Honolulu properties deserve." },
  { icon: "ri-building-line", title: "Exterior Painting", slug: "exterior-painting", desc: "Aina Haina's coastal proximity means salt air and UV are constant threats. We use coatings built for Hawaii's conditions — not whatever's cheapest at the hardware store." },
  { icon: "ri-community-line", title: "Residential Painting", slug: "residential-painting", desc: "Full home painting for Aina Haina residences, inside and out. We treat your home with the respect it deserves — clean, careful, and on schedule." },
  { icon: "ri-store-2-line", title: "Commercial Painting", slug: "commercial-painting", desc: "Commercial properties in the Aina Haina corridor. We work around your schedule — nights, weekends, whatever it takes to minimize disruption." },
  { icon: "ri-layout-grid-line", title: "Cabinet Painting", slug: "cabinet-painting", desc: "Custom cabinet refinishing for Aina Haina kitchens. A professional paint job looks brand new for a fraction of replacement cost." },
  { icon: "ri-tools-line", title: "Drywall Repair", slug: "drywall", desc: "Holes, cracks, water damage, skim coating. We fix it right before we paint — no shortcuts, no painting over problems." },
];

const testimonials = [
  {
    name: "Michelle T.",
    location: "Aina Haina, Honolulu",
    stars: 5,
    quote: "Lopaka painted our entire interior and it looks absolutely stunning. He was meticulous, respectful of our home, and finished ahead of schedule. We couldn't be happier.",
  },
  {
    name: "Kevin & Lani S.",
    location: "Niu Valley, Aina Haina",
    stars: 5,
    quote: "We've had painters before who cut corners. Lopaka doesn't. He prepped every surface properly, used quality paint, and the result speaks for itself. Two years later it still looks fresh.",
  },
  {
    name: "Carol N.",
    location: "Kuliouou, Aina Haina",
    stars: 5,
    quote: "Called on a Tuesday, had an estimate by Thursday, and the job was done the following week. Professional, clean, and the color came out exactly as I imagined. Highly recommend.",
  },
];

const faqs = [
  {
    q: "Do you serve Aina Haina and the surrounding neighborhoods?",
    a: "Yes — we cover all of Aina Haina including Aina Haina Valley, Aina Haina Beach, Kuliouou, Hahaione, Niu Valley, Niu Beach, Kalani Iki, and every neighborhood in between. Same-day estimates available.",
  },
  {
    q: "How does Aina Haina's coastal location affect paint?",
    a: "Aina Haina sits between Hawaii Kai and Kahala along the east Honolulu coast — salt air exposure here is significant, especially for homes closer to the shoreline. After 30+ years painting on this island, I know which Sherwin-Williams Duration products hold up best in these coastal conditions. Cheap paint here is money wasted in two years.",
  },
  {
    q: "What's included in a typical Aina Haina painting job?",
    a: "Every job includes full surface prep — washing, sanding, patching, and priming. Then two finish coats of Sherwin-Williams Duration minimum. We protect your floors, furniture, and fixtures throughout. Daily cleanup so your home stays livable. And a final walkthrough with you before we consider the job done.",
  },
  {
    q: "How quickly can you start a project in Aina Haina?",
    a: "We typically schedule within 1–2 weeks of estimate approval. For larger projects, I'll walk the property first and give you a detailed written scope and timeline. No surprises.",
  },
  {
    q: "Are you licensed to work in Aina Haina, Hawaii?",
    a: "Absolutely. Hawaii Painters 808 is fully licensed and insured statewide in Hawaii. We carry general liability and workers' compensation on every job — no exceptions.",
  },
  {
    q: "What paint brands do you use for Aina Haina homes?",
    a: "Sherwin-Williams Duration is my standard — it's a premium paint line I've trusted for 30+ years in Hawaii. For high-end interiors, we can also discuss Sherwin-Williams Emerald depending on the finish and sheen you're after. I'll recommend the right product for your specific surfaces and goals.",
  },
];

export default function PaintersAinaHainaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Painters in Aina Haina, HI | Hawaii Painters 808 | Free Estimates";

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

    setMeta("description", "Professional painters in Aina Haina, HI. Hawaii Painters 808 serves Aina Haina, Kuliouou, Niu Valley & east Honolulu. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "painters Aina Haina, painting contractor Aina Haina Honolulu, house painting Aina Haina HI, Niu Valley painters, Kuliouou painters");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Aina Haina, Honolulu, Hawaii");
    setMeta("geo.position", "21.2900;-157.7300");
    setMeta("og:title", "Painters in Aina Haina, HI | Hawaii Painters 808", true);
    setMeta("og:description", "Professional painters in Aina Haina, HI. Licensed, insured. Call 808-272-3816 for a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com/painters-aina-haina-hi");

    const schemaId = "schema-aina-haina";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving Aina Haina and all of east Honolulu since 2012.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Aina Haina", "addressRegion": "HI", "addressCountry": "US" },
        "areaServed": "Aina Haina, Kuliouou, Niu Valley, East Honolulu, Oahu, Hawaii",
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "url": "https://hawaiipainters808.com/painters-aina-haina-hi"
      });
      document.head.appendChild(script);
    }

    const faqSchemaId = "schema-faq-aina-haina";
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226334926/UsGLKjXMkexk58nURYsnLB/aina-haina-hero_9631e813.jpg"
            alt="Painters in Aina Haina Hawaii"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
        </div>
        <div className="relative w-full px-6 md:px-16 pt-32 pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to="/service-areas" className="hover:text-white transition-colors cursor-pointer">Service Areas</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/90">Aina Haina</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5] text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
              <i className="ri-map-pin-2-fill"></i>
              Aina Haina, East Honolulu
            </div>
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Painters in<br />Aina Haina, Hawaii
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Hawaii Painters 808 serves Aina Haina homes with the same care and quality we bring to every east Honolulu neighborhood. We know the coastal conditions, the local architecture, and what it takes to get a paint job that actually lasts here. Licensed, insured, and Oahu-born since 2012.
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
              { icon: "ri-map-pin-2-fill", label: "Aina Haina & East Honolulu" },
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
                Professional Painting Services in Aina Haina, HI
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Aina Haina is one of east Honolulu's most beloved neighborhoods — a quiet, established community tucked between the Ko'olau foothills and the Pacific coastline. It's also one of the more demanding environments for paint on the island. The proximity to the ocean means salt air, humidity, and UV are constant factors that mainland products simply aren't built to handle.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                I'm Lopaka — born and raised on Oahu, licensed and insured, and I've been painting homes across this island since 2012. Aina Haina homes have character and history, and I treat them accordingly. Careful prep, proper priming, two full coats of Sherwin-Williams Duration. Your floors and furniture are protected. Daily cleanup. Final walkthrough before I consider the job done.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you're in Aina Haina Valley, down near the beach, in Niu Valley, or up in Kuliouou — we know your neighborhood and we'll deliver results that hold up in Hawaii's conditions.
              </p>
              <div>
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
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-28 bg-[#f5f5f5] border border-gray-200 rounded-2xl p-8">
                <p className="text-[#1a1a1a] font-black text-xl mb-5">Get a Free Aina Haina Estimate</p>
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
                  {["Licensed & Insured in Hawaii", "No-obligation estimate", "Aina Haina & east Honolulu specialist"].map((t) => (
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

      {/* Why Aina Haina is Different */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Why Aina Haina Homes Need a Local Expert
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              East Honolulu's coastal environment is uniquely demanding. A painter who doesn't know Hawaii will cost you more in the long run.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-tornado-fill",
                title: "Coastal Salt Air Exposure",
                body: "Aina Haina runs right along the east Honolulu coastline — salt air exposure here is significant, especially for homes near Aina Haina Beach and Niu Beach. After 30+ years painting on this island, I know which Sherwin-Williams Duration products hold up best in these conditions. Standard paint fails fast here.",
              },
              {
                icon: "ri-sun-fill",
                title: "Hawaii's Intense UV",
                body: "East Honolulu gets direct sun exposure year-round. Hawaiian UV fades color and breaks down paint film faster than almost anywhere in the US. Sherwin-Williams Duration maintains color and sheen far longer than standard paints — your home should still look great five years from now, not two.",
              },
              {
                icon: "ri-home-heart-line",
                title: "Established Homes & Character",
                body: "Aina Haina has some of Honolulu's most established and characterful homes — many with older construction, unique surfaces, and finishes that require careful handling. We take extra time with prep and masking to protect what makes these homes special. No rushing, no shortcuts.",
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

      {/* Gallery Strip */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-3 h-[280px] md:h-[360px]">
          <div className="relative overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226334926/UsGLKjXMkexk58nURYsnLB/aina-haina-gallery-interior_28f8a2bf.jpg"
              alt="Interior painting Aina Haina"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white font-black text-sm">Interior</div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226334926/UsGLKjXMkexk58nURYsnLB/aina-haina-gallery-exterior_415b8964.jpg"
              alt="Exterior painting Aina Haina"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white font-black text-sm">Exterior</div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226334926/UsGLKjXMkexk58nURYsnLB/aina-haina-gallery-cabinet_92926d5d.jpg"
              alt="Cabinet painting Aina Haina"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white font-black text-sm">Cabinets</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Our Painting Services in Aina Haina
            </h2>
            <p className="text-gray-500 text-base">Full-service painting solutions for every Aina Haina property.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-10">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Neighborhoods We Serve in Aina Haina
            </h2>
            <p className="text-gray-500 text-base">We cover every corner of Aina Haina and the surrounding east Honolulu communities.</p>
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
            What Aina Haina Homeowners Say
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

      <NearbyAreas currentCity="Aina Haina" />

      {/* FAQ */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16 max-w-3xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl text-center mb-12">
            FAQs — Painting in Aina Haina
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
        city="Aina Haina"
        sourcePage="Painters Aina Haina"
        description="I serve homeowners across Aina Haina, Niu Valley, Kuliouou, and all of east Honolulu. Call me directly or send a message and I'll get back to you fast. Mahalo for considering Hawaii Painters 808."
        trustItems={["Licensed & Insured in Hawaii", "Free estimate — no obligation", "Aina Haina & east Honolulu specialist", "I personally oversee every job"]}
      />

      <Footer />
    </main>
  );
}
