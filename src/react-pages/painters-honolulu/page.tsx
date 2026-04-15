import { useState, useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import NearbyAreas from "@/components/feature/NearbyAreas";
import AreaContactSection from "@/components/feature/AreaContactSection";

const neighborhoods = [
  "Waikiki", "Ala Moana", "Manoa", "Kaimuki",
  "Kahala", "Makiki", "Nuuanu", "Kalihi",
  "Downtown", "Punchbowl", "Palolo", "Hawaii Kai",
];

const services = [
  { icon: "ri-home-4-line", title: "Interior Painting", slug: "interior-painting", desc: "Rooms, ceilings, trim — Sherwin-Williams Duration paint from someone who's painted Honolulu homes for 30+ years." },
  { icon: "ri-building-line", title: "Exterior Painting", slug: "exterior-painting", desc: "Honolulu's salt air, UV, and humidity are tough on exterior paint. After 30+ years on Oahu, I know which products hold up." },
  { icon: "ri-community-line", title: "Residential Painting", slug: "residential-painting", desc: "Full home painting inside and out. Honolulu homes deserve quality — we deliver it every time." },
  { icon: "ri-store-2-line", title: "Commercial Painting", slug: "commercial-painting", desc: "Offices, retail, and restaurants across Honolulu. We work around your schedule — nights and weekends." },
  { icon: "ri-layout-grid-line", title: "Cabinet Painting", slug: "cabinet-painting", desc: "New cabinets in Hawaii are expensive. A professional cabinet paint job looks brand new for less." },
  { icon: "ri-tools-line", title: "Drywall Repair", slug: "drywall", desc: "Holes, cracks, water damage. We fix it right before we paint — no shortcuts, no excuses." },
];

const testimonials = [
  { name: "Keiko T.", location: "Manoa, Honolulu", stars: 5, quote: "Lopaka was very timely and did a great job. His expertise helped resolve a last-minute issue left behind by a previous contractor. Highly recommend." },
  { name: "David & Sarah M.", location: "Kaimuki, Honolulu", stars: 5, quote: "Painting was done on time and on budget. We repainted before listing and the house sold in three days. Lopaka is responsible and has great customer service." },
  { name: "Alana P.", location: "Kahala, Honolulu", stars: 5, quote: "Two years later and the walls still look perfect. No bubbling, no mold. He used the right products for Hawaii's humidity. That matters a lot." },
];

const faqs = [
  { q: "Do you serve all of Honolulu, including Hawaii Kai and Kalihi?", a: "Yes — we cover all of Honolulu including Waikiki, Manoa, Kaimuki, Kahala, Makiki, Nuuanu, Kalihi, Downtown, Punchbowl, Palolo, Hawaii Kai, and every neighborhood in between. Same-day estimates available." },
  { q: "How does Honolulu's climate affect paint jobs?", a: "Honolulu's combination of salt air, UV intensity, and humidity is uniquely demanding. After 30+ years painting on Oahu, I know which Sherwin-Williams Duration products and prep methods make the difference between a result that lasts five years and one that peels in two." },
  { q: "How quickly can you start a project in Honolulu?", a: "We typically schedule within 1–2 weeks of estimate approval. For urgent needs, ask about priority scheduling when you call." },
  { q: "Are you licensed to work in Honolulu, Hawaii?", a: "Absolutely. Hawaii Painters 808 is fully licensed and insured statewide in Hawaii. We carry general liability and workers' compensation on every job." },
  { q: "Do you paint both interior and exterior in Honolulu?", a: "Yes — we handle everything. Interior rooms, ceilings, trim, exterior siding, fascia, fences, decks, and more. We can do the whole home in one project or tackle it room by room. Whatever works best for you." },
];

export default function PaintersHonoluluPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Painters in Honolulu, HI | Hawaii Painters 808 | Free Estimates";

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

    setMeta("description", "Professional painters in Honolulu, HI. Hawaii Painters 808 serves Honolulu, Waikiki, Manoa, Kaimuki, Kahala & all of Oahu. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "painters Honolulu Hawaii, painting contractor Honolulu Oahu, house painting Honolulu HI, Honolulu painters, Oahu painting contractor");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Honolulu, Hawaii");
    setMeta("geo.position", "21.3069;-157.8583");
    setMeta("og:title", "Painters in Honolulu, HI | Hawaii Painters 808", true);
    setMeta("og:description", "Professional painters in Honolulu, HI. Licensed, insured. Call 808-272-3816 for a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com/painters-honolulu-hi");

    const schemaId = "schema-honolulu-city";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving Honolulu and all of Oahu since 2012.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" },
        "areaServed": "Honolulu, Oahu, Hawaii",
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "url": "https://hawaiipainters808.com/painters-honolulu-hi"
      });
      document.head.appendChild(script);
    }

    const faqSchemaId = "schema-faq-honolulu-city";
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
            src="/images/area-honolulu.jpg"
            alt="Painters in Honolulu Hawaii"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        <div className="relative w-full px-6 md:px-16 pt-32 pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/service-areas" className="hover:text-white transition-colors cursor-pointer">Service Areas</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/90">Honolulu</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5] text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
              <i className="ri-map-pin-2-fill"></i>
              Honolulu, South Oʻahu
            </div>
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Painters in<br />Honolulu, Hawaii
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Hawaii Painters 808 is Honolulu's trusted painting contractor. We know Oahu's salt air, UV intensity, and tropical humidity — and we use materials built to handle all of it. Licensed, insured, and Oahu-born since 2012.
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
              { icon: "ri-map-pin-2-fill", label: "All of Honolulu & Oahu" },
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
                Professional Painting Services in Honolulu, HI
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Honolulu is the heart of Oahu — and one of the most demanding environments for paint on the island. The combination of ocean salt air, intense UV, and tropical humidity means mainland products fail fast here. We use materials that are built for this climate, applied the right way, the first time.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                I'm Lopaka — born and raised on Oahu, licensed and insured, and I've been painting homes and businesses across this island since 2012. I personally oversee every job in Honolulu. We patch, sand, prime, protect your floors and furniture — then put down two full coats. No shortcuts. No excuses.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether you're in Manoa, Kaimuki, Kahala, Makiki, Nuuanu, or right in Downtown Honolulu — we know your neighborhood and we'll treat your home with the respect it deserves.
              </p>
              <div>
                <p className="text-[#1a1a1a] font-black text-base mb-4 uppercase tracking-wide">What's included:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Full surface prep and patching",
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
                <p className="text-[#1a1a1a] font-black text-xl mb-5">Get a Free Honolulu Estimate</p>
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
                  {["Licensed & Insured in Hawaii", "No-obligation estimate", "Honolulu & all-island specialist"].map((t) => (
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

      {/* Why Honolulu Needs a Local Expert */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Why Honolulu Homes Need a Local Painting Expert
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Honolulu's climate is uniquely demanding. A painter who doesn't know Oahu will cost you more in the long run.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-tornado-fill",
                title: "Coastal Salt Air",
                body: "Honolulu's proximity to the ocean means salt air is constant — especially in neighborhoods like Waikiki, Kahala, and Hawaii Kai. After 30+ years painting on Oahu, I know which Sherwin-Williams Duration products hold up best in these coastal conditions.",
              },
              {
                icon: "ri-sun-fill",
                title: "Intense UV Exposure",
                body: "Hawaiian sun fades color faster than almost anywhere else in the US. After 30+ years painting on Oahu, I know that Sherwin-Williams Duration maintains color and sheen far longer than standard paints. Your Honolulu home should still look great five years from now — not two.",
              },
              {
                icon: "ri-drop-fill",
                title: "Tropical Humidity & Mold",
                body: "Honolulu's humidity creates real mold risk, especially in older homes and shaded areas. We assess and treat affected surfaces before painting — not just paint over the problem. That's the only way to get a result that actually lasts.",
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Our Painting Services in Honolulu
            </h2>
            <p className="text-gray-500 text-base">Full-service painting solutions for every Honolulu property.</p>
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
              Neighborhoods We Serve in Honolulu
            </h2>
            <p className="text-gray-500 text-base">We cover every corner of Honolulu with same-day estimates available.</p>
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
            What Honolulu Homeowners Say
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

      <NearbyAreas currentCity="Honolulu" />

      {/* FAQ */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16 max-w-3xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl text-center mb-12">
            FAQs — Painting in Honolulu
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

      {/* Contact Form */}
      <AreaContactSection
        city="Honolulu"
        sourcePage="Painters Honolulu"
        description="I serve homeowners and businesses across Honolulu and all of Oahu. Call me directly or send a message and I'll get back to you fast. Mahalo for considering Hawaii Painters 808."
        trustItems={["Licensed & Insured in Hawaii", "Free estimate — no obligation", "Honolulu & all-island specialist", "I personally oversee every job"]}
      />

      <Footer />
    </main>
  );
}
