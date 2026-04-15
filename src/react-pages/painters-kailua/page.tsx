import { useState, useEffect } from "react";

import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import NearbyAreas from "@/components/feature/NearbyAreas";
import AreaContactSection from "@/components/feature/AreaContactSection";

const neighborhoods = [
  "Lanikai", "Enchanted Lake", "Keolu Hills", "Maunawili",
  "Coconut Grove", "Kailua Beach", "Aikahi", "Kalaheo Hillside",
];

const services = [
  { icon: "ri-home-4-line", title: "Interior Painting", slug: "interior-painting", desc: "Rooms, ceilings, trim — Sherwin-Williams Duration paint applied by someone who's painted windward Oahu homes for 30+ years." },
  { icon: "ri-building-line", title: "Exterior Painting", slug: "exterior-painting", desc: "Salt air off Kailua Bay destroys standard paint fast. We use coatings built for coastal conditions." },
  { icon: "ri-community-line", title: "Residential Painting", slug: "residential-painting", desc: "Full home painting inside and out. Kailua homes deserve the best — we treat them that way." },
  { icon: "ri-store-2-line", title: "Commercial Painting", slug: "commercial-painting", desc: "Offices and retail in Kailua. We work around your hours — nights, weekends, whatever it takes." },
  { icon: "ri-layout-grid-line", title: "Cabinet Painting", slug: "cabinet-painting", desc: "New cabinets in Hawaii are expensive. A professional cabinet paint job looks brand new for less." },
  { icon: "ri-tools-line", title: "Drywall Repair", slug: "drywall", desc: "Holes, cracks, water damage. We fix it right before we paint — no shortcuts." },
];

const testimonials = [
  { name: "David & Sarah M.", location: "Kailua, Oahu", stars: 5, quote: "Lopaka is responsible and has great customer service. Painting was done on time. We repainted before listing and the house sold in three days." },
  { name: "Alana P.", location: "Lanikai, Kailua", stars: 5, quote: "Two years later and the walls still look perfect. No bubbling, no mold. He used the right products for the windward humidity. That matters." },
  { name: "Keiko T.", location: "Enchanted Lake, Kailua", stars: 5, quote: "Lopaka was very timely and did a great job. His expertise helped resolve a last-minute issue left behind by a previous contractor." },
];

const faqs = [
  { q: "Do you serve all of Kailua, including Lanikai?", a: "Yes — we cover all of Kailua including Lanikai, Enchanted Lake, Keolu Hills, Maunawili, Aikahi, and every neighborhood in between. Same-day estimates available." },
  { q: "How does Kailua's windward humidity affect paint?", a: "Kailua gets more rain and humidity than the leeward side. After 30+ years painting on Oahu, I know exactly when conditions are right to apply paint — and Sherwin-Williams Duration holds up best in windward conditions. That's the difference between a job that lasts and one that peels in a year." },
  { q: "How quickly can you start a project in Kailua?", a: "We typically schedule within 1–2 weeks of estimate approval. For urgent needs, ask about priority scheduling when you call." },
  { q: "Are you licensed to work in Kailua, Hawaii?", a: "Absolutely. Hawaii Painters 808 is fully licensed and insured statewide in Hawaii. We carry general liability and workers' compensation on every job." },
  { q: "What paint do you use for Kailua homes?", a: "Sherwin-Williams Duration is my go-to — it's a premium paint line I've trusted for 30+ years in Hawaii and it holds up exceptionally well in windward conditions. If you have a preferred color, I'll match it in Duration." },
];

export default function PaintersKailuaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Painters in Kailua, HI | Hawaii Painters 808 | Free Estimates";

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

    setMeta("description", "Professional painters in Kailua, HI. Hawaii Painters 808 serves Kailua, Lanikai, Enchanted Lake & all of windward Oahu. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "painters Kailua Hawaii, painting contractor Kailua Oahu, house painting Kailua HI, Lanikai painters");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Kailua, Hawaii");
    setMeta("geo.position", "21.3969;-157.7392");
    setMeta("og:title", "Painters in Kailua, HI | Hawaii Painters 808", true);
    setMeta("og:description", "Professional painters in Kailua, HI. Licensed, insured. Call 808-272-3816 for a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com/painters-kailua-hi");

    const schemaId = "schema-kailua";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving Kailua and all of windward Oahu since 2012.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Kailua", "addressRegion": "HI", "addressCountry": "US" },
        "areaServed": "Kailua, Oahu, Hawaii",
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "url": "https://hawaiipainters808.com/painters-kailua-hi"
      });
      document.head.appendChild(script);
    }

    const faqSchemaId = "schema-faq-kailua";
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
            src="/images/kailua-hero.jpg"
            alt="Painters in Kailua Hawaii"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative w-full px-6 md:px-16 pt-32 pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/service-areas" className="hover:text-white transition-colors cursor-pointer">Service Areas</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/90">Kailua</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5] text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
              <i className="ri-map-pin-2-fill"></i>
              Kailua, Windward Oʻahu
            </div>
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Painters in<br />Kailua, Hawaii
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Hawaii Painters 808 is Kailua's trusted painting contractor. We know windward Oahu's humidity, salt air, and UV intensity — and we use materials built to handle all of it. Licensed, insured, and Oahu-born.
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
              { icon: "ri-map-pin-2-fill", label: "Kailua & Windward Oahu" },
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
                Professional Painting Services in Kailua, HI
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Kailua is one of the most beautiful towns on Oahu — and one of the most demanding environments for paint. The windward side gets more rain, more humidity, and more salt air than anywhere else on the island. Mainland products fail fast here. We use materials that are built for this climate, applied the right way, the first time.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                I'm Lopaka — born and raised on Oahu, licensed and insured, and I've been painting homes across this island since 2012. I personally oversee every job in Kailua. We patch, sand, prime, protect your floors and furniture — then put down two full coats. No shortcuts. No excuses.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you're in Lanikai, Enchanted Lake, Keolu Hills, or right on Kailua Beach Road — we know your neighborhood and we'll treat your home with the respect it deserves.
              </p>
              <div>
                <p className="text-[#1a1a1a] font-black text-base mb-4 uppercase tracking-wide">What's included:</p>
                <ul className="flex flex-col gap-3">
                  {["Full surface prep and patching", "Priming before every coat", "Two finish coats minimum", "Trim and doors if requested", "Daily cleanup — your home stays livable", "Final walkthrough with you before we leave"].map((item) => (
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
                <p className="text-[#1a1a1a] font-black text-xl mb-5">Get a Free Kailua Estimate</p>
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
                  {["Licensed & Insured in Hawaii", "No-obligation estimate", "Kailua & windward Oahu specialist"].map((t) => (
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

      {/* Why Kailua is Different */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Why Kailua Homes Need a Local Painting Expert
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Windward Oahu's climate is uniquely demanding. A painter who doesn't know Kailua will cost you more in the long run.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "ri-drop-fill", title: "Windward Humidity", body: "Kailua gets significantly more rainfall and humidity than the leeward side. After 30+ years painting on Oahu, I know exactly when conditions are right to apply paint and which products hold up in windward weather. That's the difference between a job that lasts and one that peels in a year." },
              { icon: "ri-tornado-fill", title: "Coastal Salt Air", body: "Kailua Bay's salt air is relentless on exterior paint. Standard mainland products fail fast here. We use superior adhesion coatings built for coastal conditions — not whatever's cheapest at the hardware store." },
              { icon: "ri-sun-fill", title: "Intense UV Exposure", body: "Hawaiian sun fades color faster than almost anywhere else. After 30+ years on Oahu, I know that Sherwin-Williams Duration holds its color in this climate far longer than standard paints. Your Kailua home should still look great five years from now — not two." },
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Our Painting Services in Kailua
            </h2>
            <p className="text-gray-500 text-base">Full-service painting solutions for every Kailua property.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a key={s.slug} href={`/services/${s.slug}`} className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all cursor-pointer block">
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
              Neighborhoods We Serve in Kailua
            </h2>
            <p className="text-gray-500 text-base">We cover every corner of Kailua with same-day estimates available.</p>
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
            What Kailua Homeowners Say
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

      <NearbyAreas currentCity="Kailua" />

      {/* FAQ */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16 max-w-3xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl text-center mb-12">
            FAQs — Painting in Kailua
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-[#f5f5f5] transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-[#1a1a1a] font-black text-sm">{item.q}</span>
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 ml-3">
                    <i className={`${openFaq === i ? "ri-subtract-line" : "ri-add-line"} text-[#4a9fa5] text-lg`}></i>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AreaContactSection
        city="Kailua"
        sourcePage="Painters Kailua"
        description="I serve homeowners across Kailua, Lanikai, and all of windward Oahu. Call me directly or send a message and I'll get back to you fast. Mahalo for considering Hawaii Painters 808."
        trustItems={["Licensed & Insured in Hawaii", "Free estimate — no obligation", "Kailua & windward Oahu specialist", "I personally oversee every job"]}
      />

      <Footer />
    </main>
  );
}
