import { useState, useEffect } from "react";

import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import NearbyAreas from "@/components/feature/NearbyAreas";
import AreaContactSection from "@/components/feature/AreaContactSection";

const neighborhoods = [
  "Haleiwa", "Sunset Beach", "Waimea", "Pupukea",
  "Kahuku", "Laie", "Hauula", "Waialua",
];

const services = [
  { icon: "ri-home-4-line", title: "Interior Painting", slug: "interior-painting", desc: "Rooms, ceilings, trim — Sherwin-Williams Duration paint applied by someone who knows North Shore homes and their unique climate challenges." },
  { icon: "ri-building-line", title: "Exterior Painting", slug: "exterior-painting", desc: "North Shore's salt air, trade winds, and intense UV demand coatings built for coastal conditions. We use products that hold up here." },
  { icon: "ri-community-line", title: "Residential Painting", slug: "residential-painting", desc: "Full home painting inside and out. From Haleiwa bungalows to Sunset Beach estates — we treat every North Shore home with care." },
  { icon: "ri-store-2-line", title: "Commercial Painting", slug: "commercial-painting", desc: "Shops, restaurants, and vacation rentals on the North Shore. We work around your schedule — nights, weekends, no problem." },
  { icon: "ri-layout-grid-line", title: "Cabinet Painting", slug: "cabinet-painting", desc: "New cabinets in Hawaii are expensive. A professional cabinet paint job looks brand new for a fraction of the cost." },
  { icon: "ri-tools-line", title: "Drywall Repair", slug: "drywall", desc: "Holes, cracks, moisture damage. North Shore's humidity is tough on walls — we fix it right before we paint." },
];

const testimonials = [
  { name: "Kai M.", location: "Haleiwa, North Shore", stars: 5, quote: "Lopaka drove all the way out to Haleiwa and did an incredible job on our beach house. The exterior looks brand new and he used the right products for the salt air. Highly recommend." },
  { name: "Tara & James W.", location: "Sunset Beach, North Shore", stars: 5, quote: "We have a vacation rental on Sunset Beach and needed it repainted fast. Lopaka was professional, quick, and the result was perfect. Our guests have been raving about it." },
  { name: "Nalu K.", location: "Waimea, North Shore", stars: 5, quote: "Two years later and the paint still looks great. No peeling, no fading. He knew exactly what products to use for our area. That's the difference between a local expert and someone who doesn't know Oahu." },
];

const faqs = [
  { q: "Do you serve all of the North Shore, including Haleiwa, Sunset Beach, and Waimea?", a: "Yes — we cover all of the North Shore including Haleiwa, Sunset Beach, Waimea, Pupukea, Kahuku, Laie, Hauula, and Waialua. We make the drive because North Shore homes deserve the same quality as anywhere else on Oahu. Same-day estimates available." },
  { q: "How does the North Shore's coastal environment affect paint jobs?", a: "The North Shore is one of the most demanding environments for paint on Oahu. The combination of ocean salt air, intense UV, trade winds, and high humidity means standard paint fails fast here. After 30+ years painting on Oahu, I know which Sherwin-Williams Duration products hold up in coastal North Shore conditions — and how to prep surfaces correctly so the result actually lasts." },
  { q: "Do you paint vacation rentals and investment properties on the North Shore?", a: "Absolutely. We work with vacation rental owners and investors across the North Shore. We understand the urgency — downtime costs money. We'll work around your booking schedule and get the job done right, fast." },
  { q: "How quickly can you start a project on the North Shore?", a: "We typically schedule within 1–2 weeks of estimate approval. For urgent needs — especially vacation rental turnarounds — ask about priority scheduling when you call." },
  { q: "Are you licensed to work on the North Shore, Hawaii?", a: "Yes. Hawaii Painters 808 is fully licensed and insured statewide in Hawaii. We carry general liability and workers' compensation on every job, no matter where on Oahu." },
  { q: "Do you handle mold and moisture damage before painting?", a: "Yes. The North Shore's humidity and salt air make mold and moisture damage common, especially on older homes and vacation rentals. We assess and treat affected surfaces before painting — not just paint over the problem. That's the only way to get a result that lasts in this climate." },
];

export default function PaintersNorthShorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Painters on the North Shore, HI | Hawaii Painters 808 | Free Estimates";

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

    setMeta("description", "Professional painters on the North Shore, HI. Hawaii Painters 808 serves Haleiwa, Sunset Beach, Waimea & all of North Shore Oahu. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "painters North Shore Hawaii, painting contractor Haleiwa Oahu, house painting Sunset Beach HI, Waimea painters, North Shore Oahu painting");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Haleiwa, Hawaii");
    setMeta("geo.position", "21.5935;-158.1050");
    setMeta("og:title", "Painters on the North Shore, HI | Hawaii Painters 808", true);
    setMeta("og:description", "Professional painters on the North Shore, HI. Licensed, insured. Call 808-272-3816 for a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com/painters-north-shore-hi");

    const schemaId = "schema-north-shore";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving the North Shore of Oahu including Haleiwa, Sunset Beach, and Waimea since 2012.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Haleiwa", "addressRegion": "HI", "addressCountry": "US" },
        "areaServed": "North Shore, Oahu, Hawaii",
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "url": "https://hawaiipainters808.com/painters-north-shore-hi"
      });
      document.head.appendChild(script);
    }

    const faqSchemaId = "schema-faq-north-shore";
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
            src="/images/north-shore-hero.jpg"
            alt="Painters on the North Shore Hawaii"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
        </div>
        <div className="relative w-full px-6 md:px-16 pt-32 pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/service-areas" className="hover:text-white transition-colors cursor-pointer">Service Areas</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/90">North Shore</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5] text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
              <i className="ri-map-pin-2-fill"></i>
              North Shore, Oʻahu
            </div>
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Painters on the<br />North Shore, Hawaii
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Hawaii Painters 808 serves Haleiwa, Sunset Beach, Waimea, and all of North Shore Oahu. We know the salt air, trade winds, and coastal conditions out here — and we use materials built to handle all of it. Licensed, insured, and Oahu-born.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8082723816" className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
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
              { icon: "ri-map-pin-2-fill", label: "Haleiwa, Sunset Beach & Waimea" },
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
                Professional Painting Services on the North Shore, HI
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                The North Shore is one of the most beautiful places on Oahu — and one of the most demanding environments for paint. The combination of ocean salt air, relentless trade winds, intense UV, and high humidity means paint that isn't built for this coast will fail fast. We've seen it happen to homes that used the wrong products or skipped proper prep.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                I'm Lopaka — born and raised on Oahu, licensed and insured, and I've been painting homes across this island for over 30 years. I personally oversee every job on the North Shore. Whether it's a Haleiwa bungalow, a Sunset Beach vacation rental, or a Waimea estate — I use Sherwin-Williams Duration, prep every surface correctly, and put down two full coats. No shortcuts. No excuses.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                I know the North Shore is a drive from town. I make it because the homes out here deserve the same quality as anywhere else on Oahu — and because I take pride in every job I put my name on.
              </p>
              <div>
                <p className="text-[#1a1a1a] font-black text-base mb-4 uppercase tracking-wide">What's included:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Full surface prep and patching",
                    "Mold and moisture assessment if needed",
                    "Priming before every coat",
                    "Two finish coats minimum",
                    "Trim and doors if requested",
                    "Daily cleanup — your home stays livable",
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
                <p className="text-[#1a1a1a] font-black text-xl mb-5">Get a Free North Shore Estimate</p>
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
                  {["Licensed & Insured in Hawaii", "No-obligation estimate", "North Shore coastal specialist"].map((t) => (
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

      {/* Why North Shore is Different */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Why North Shore Homes Need a Coastal Painting Expert
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              The North Shore's environment is uniquely demanding. A painter who doesn't know this coast will cost you more in the long run.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-tornado-fill",
                title: "Salt Air & Trade Winds",
                body: "The North Shore gets constant ocean salt air and strong trade winds — one of the harshest combinations for exterior paint on Oahu. After 30+ years painting here, I know which Sherwin-Williams Duration products hold up in these coastal conditions and which ones peel within a year. The difference is real.",
              },
              {
                icon: "ri-sun-fill",
                title: "Intense UV Exposure",
                body: "Hawaiian sun fades color faster than almost anywhere else in the US — and the North Shore gets full exposure. After 30+ years on Oahu, I use Sherwin-Williams Duration because it maintains color and sheen far longer than standard paints. Your home should still look great five years from now, not two.",
              },
              {
                icon: "ri-drop-fill",
                title: "Humidity & Mold Risk",
                body: "The North Shore's humidity — especially in shaded areas and on older homes — creates real mold risk. We assess and treat affected surfaces before painting, not just paint over the problem. That's the only way to get a result that actually lasts in this climate.",
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

      {/* Vacation Rental CTA */}
      <section className="py-16 bg-[#4a9fa5]">
        <div className="w-full px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
                <i className="ri-home-heart-line"></i>
                Vacation Rental Owners
              </div>
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight mb-4">
                Protect Your North Shore Investment
              </h2>
              <p className="text-white/85 text-base leading-relaxed mb-6">
                Vacation rentals on the North Shore take a beating — constant guests, salt air, and sun exposure. A fresh, professional paint job increases your nightly rate, improves reviews, and protects the property. We work around your booking schedule so you don't lose revenue.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "We work around your booking calendar",
                  "Fast turnaround — minimize downtime",
                  "Products built for coastal rental properties",
                  "Before-and-after photos for your listing",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-white/90 text-sm">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80">
              <img
                src="/images/north-shore-rental-home.jpg"
                alt="North Shore vacation rental painting"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <a href="tel:8082723816" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1a1a1a] font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-phone-fill text-[#4a9fa5]"></i>
                  Call for a Fast Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Our Painting Services on the North Shore
            </h2>
            <p className="text-gray-500 text-base">Full-service painting solutions for every North Shore property.</p>
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
              Communities We Serve on the North Shore
            </h2>
            <p className="text-gray-500 text-base">We make the drive — same quality, same standards, same 1-year warranty.</p>
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
            What North Shore Homeowners Say
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

      <NearbyAreas currentCity="North Shore" />

      {/* FAQ */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16 max-w-3xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl text-center mb-12">
            FAQs — Painting on the North Shore
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
        city="North Shore"
        sourcePage="Painters North Shore"
        description="I serve homeowners and vacation rental owners across Haleiwa, Sunset Beach, Waimea, and all of North Shore Oahu. Call me directly or send a message and I'll get back to you fast. Mahalo for considering Hawaii Painters 808."
        trustItems={["Licensed & Insured in Hawaii", "Free estimate — no obligation", "North Shore coastal specialist", "I personally oversee every job"]}
      />

      <Footer />
    </main>
  );
}
