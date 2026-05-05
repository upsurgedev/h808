import { useState, useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import NearbyAreas from "@/components/feature/NearbyAreas";
import AreaContactSection from "@/components/feature/AreaContactSection";

const neighborhoods = [
  "Mililani Town", "Mililani Mauka", "Waipio Acres", "Launani Valley",
  "Melemanu", "Waikele", "Wahiawa", "Waipahu",
];

const services = [
  { icon: "ri-home-4-line", title: "Interior Painting", slug: "interior-painting", desc: "Bedrooms, living rooms, ceilings, trim — Sherwin-Williams Duration applied right. Mililani homes are built for families, and we treat them that way." },
  { icon: "ri-building-line", title: "Exterior Painting", slug: "exterior-painting", desc: "Central Oahu's sun and occasional heavy rain demand quality exterior coatings. We prep every surface and use products built to last in Hawaii's climate." },
  { icon: "ri-community-line", title: "Residential Painting", slug: "residential-painting", desc: "Full home painting inside and out. Mililani's planned communities have high standards — we match them. Every job gets two full coats, no shortcuts." },
  { icon: "ri-store-2-line", title: "Commercial Painting", slug: "commercial-painting", desc: "Offices, retail spaces, and commercial properties in Central Oahu. We work around your schedule to minimize disruption to your business." },
  { icon: "ri-layout-grid-line", title: "Cabinet Painting", slug: "cabinet-painting", desc: "New cabinets in Hawaii are expensive. A professional cabinet paint job transforms your kitchen or bathroom for a fraction of the replacement cost." },
  { icon: "ri-tools-line", title: "Drywall Repair", slug: "drywall", desc: "Holes, cracks, settling damage. We fix it right before we paint — not just skim over it. Your walls will look smooth and clean." },
];

const testimonials = [
  { name: "Lani & Derek P.", location: "Mililani Town", stars: 5, quote: "Lopaka painted our entire home interior — 4 bedrooms, living room, kitchen, and all the trim. Immaculate work. He was on time every day, cleaned up after himself, and the result is stunning. Our neighbors keep asking who we used." },
  { name: "Ryan T.", location: "Mililani Mauka", stars: 5, quote: "We had a tight timeline before a family event and Lopaka made it happen. Exterior repaint on our two-story home, done in 3 days. Looks incredible. He used Sherwin-Williams Duration and you can tell the difference from our old paint job." },
  { name: "Keiko M.", location: "Waipio Acres", stars: 5, quote: "I was nervous about hiring someone I didn't know, but Lopaka came highly recommended by my neighbor. He walked me through everything, gave me a fair price, and the work was flawless. I'll never use anyone else." },
];

const faqs = [
  { q: "Do you serve Mililani, Mililani Mauka, and the surrounding Central Oahu area?", a: "Yes — we serve all of Mililani including Mililani Town, Mililani Mauka, Waipio Acres, Launani Valley, Melemanu, and surrounding Central Oahu communities like Wahiawa and Waipahu. Same crew, same standards, same 1-year workmanship warranty." },
  { q: "How long does a typical Mililani home painting project take?", a: "A standard interior repaint (3–4 bedrooms, living areas) typically takes 3–5 days. Exterior repaints on a single-story home usually take 2–3 days. Two-story homes take 3–4 days. We give you a realistic timeline upfront and stick to it." },
  { q: "What paint do you use on Mililani homes?", a: "We use Sherwin-Williams Duration as our standard — it's one of the best paints available for Hawaii's climate. It holds color well under intense UV, resists moisture, and lasts significantly longer than builder-grade paints. We apply a minimum of two finish coats on every job." },
  { q: "Do you paint the interior and exterior of the same home?", a: "Absolutely. Many Mililani homeowners hire us for both at the same time — it's more efficient and we can coordinate the colors and finishes to work together. We'll give you a combined estimate." },
  { q: "Are you licensed and insured to work in Mililani, Hawaii?", a: "Yes. Hawaii Painters 808 is fully licensed and insured statewide in Hawaii. We carry general liability and workers' compensation on every job. You're fully protected." },
  { q: "Do you offer free estimates in Mililani?", a: "Yes — always. I come to your home, look at the job myself, and give you a straight written estimate. No charge, no pressure, no obligation. I'll also walk you through color options and product recommendations if you'd like." },
];

export default function PaintersMililaniPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Painters in Mililani & Central Oahu, HI | Hawaii Painters 808 | Free Estimates";

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

    setMeta("description", "Professional painters in Mililani & Central Oahu, HI. Hawaii Painters 808 serves Mililani Town, Mililani Mauka, Waipio Acres & surrounding areas. Licensed, insured. Call 808-272-3816 for a free estimate.");
    setMeta("keywords", "painters Mililani Hawaii, painting contractor Mililani Oahu, house painting Mililani HI, Mililani Mauka painters, Central Oahu painting contractor");
    setMeta("geo.region", "US-HI");
    setMeta("geo.placename", "Mililani, Hawaii");
    setMeta("geo.position", "21.4511;-158.0147");
    setMeta("og:title", "Painters in Mililani & Central Oahu, HI | Hawaii Painters 808", true);
    setMeta("og:description", "Professional painters in Mililani & Central Oahu, HI. Licensed, insured. Call 808-272-3816 for a free estimate.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://housepaintershonolulu.com/painters-mililani-hi");

    const schemaId = "schema-mililani";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "description": "Professional painting contractor serving Mililani and Central Oahu since 2012.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Mililani", "addressRegion": "HI", "addressCountry": "US" },
        "areaServed": "Mililani, Central Oahu, Hawaii",
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
        "url": "https://housepaintershonolulu.com/painters-mililani-hi"
      });
      document.head.appendChild(script);
    }

    const faqSchemaId = "schema-faq-mililani";
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
            src="/images/area-mililani.jpg"
            alt="Painters in Mililani & Central Oahu Hawaii"
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
            <span className="text-white/90">Mililani & Central Oahu</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
              <i className="ri-map-pin-2-fill"></i>
              Central Oʻahu
            </div>
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Painters in Mililani<br />&amp; Central Oahu, Hawaii
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Hawaii Painters 808 serves Mililani Town, Mililani Mauka, Waipio Acres, and all of Central Oahu. Lopaka personally oversees every job — licensed, insured, and Oahu-born with 30+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8082723816" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
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
              { icon: "ri-map-pin-2-fill", label: "Mililani Town & Mauka" },
              { icon: "ri-thumb-up-fill", label: "1-Year Warranty" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white text-sm font-bold whitespace-nowrap">
                <div className="w-6 h-6 flex items-center justify-center text-amber-400">
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
                Professional Painting Services in Mililani &amp; Central Oahu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Mililani is one of the most well-planned communities on Oahu — and homeowners here have high standards. The homes are well-built, the neighborhoods are maintained, and when it comes time to repaint, you want someone who takes the same pride in their work that you take in your home.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                I'm Lopaka — born and raised on Oahu, licensed and insured, and I've been painting homes across this island for over 30 years. I personally oversee every job in Mililani. I use Sherwin-Williams Duration, prep every surface correctly, and put down two full coats. No shortcuts. No subcontractors. No excuses.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Central Oahu's climate is different from the coast — less salt air, but intense UV and occasional heavy rain still demand quality materials and proper prep. I know what works here, and I stand behind every job with a 1-year workmanship warranty.
              </p>
              <div>
                <p className="text-[#1a1a1a] font-black text-base mb-4 uppercase tracking-wide">What's included:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Full surface prep and patching",
                    "Priming before every coat",
                    "Two finish coats minimum — Sherwin-Williams Duration",
                    "Trim, doors, and ceilings if requested",
                    "Daily cleanup — your home stays livable",
                    "Color consultation at no extra charge",
                    "Final walkthrough with you before we leave",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-5 h-5 flex items-center justify-center bg-amber-500 rounded-full flex-shrink-0 mt-0.5">
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
                <p className="text-[#1a1a1a] font-black text-xl mb-5">Get a Free Mililani Estimate</p>
                <a href="tel:8082723816" className="flex items-center gap-3 mb-5 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-full flex-shrink-0">
                    <i className="ri-phone-fill text-white text-lg"></i>
                  </div>
                  <div>
                    <div className="text-amber-500 font-black text-2xl group-hover:text-amber-600 transition-colors">808-272-3816</div>
                    <div className="text-gray-500 text-xs">Call Lopaka directly</div>
                  </div>
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">
                  <i className="ri-time-line text-amber-500"></i>
                  Mon–Fri 8am–5pm
                </div>
                <a href="#contact-form" className="w-full flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-amber-500 text-white font-black text-sm tracking-wider px-6 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-file-list-3-line"></i>
                  Request Estimate
                </a>
                <div className="mt-5 flex flex-col gap-2">
                  {["Licensed & Insured in Hawaii", "No-obligation estimate", "Lopaka personally oversees every job"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-gray-500 text-xs">
                      <i className="ri-check-line text-amber-500"></i>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mililani Homeowners Choose Us */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
              Why Mililani Homeowners Choose Hawaii Painters 808
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Mililani is a community that takes pride in its homes. We take the same pride in our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-user-star-line",
                title: "Owner on Every Job",
                body: "I'm Lopaka — and I personally show up to every job in Mililani. Not a crew you've never met, not a subcontractor. Me. I do the estimate, I oversee the work, and I do the final walkthrough with you. That's the difference between a contractor and someone who actually cares.",
              },
              {
                icon: "ri-sun-fill",
                title: "Built for Hawaii's Climate",
                body: "Central Oahu gets intense UV and occasional heavy rain. Standard paint fades and peels fast here. I use Sherwin-Williams Duration because it's built for Hawaii — it holds color, resists moisture, and lasts significantly longer than what most contractors use. Your investment is protected.",
              },
              {
                icon: "ri-home-heart-line",
                title: "Mililani Community Standards",
                body: "Mililani's HOA communities have high standards for home appearance — and so do we. We match the quality of the neighborhood. Clean lines, proper prep, consistent coverage. Your home will look like it belongs in Mililani, because it does.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 rounded-xl mb-5">
                  <i className={`${card.icon} text-amber-500 text-2xl`}></i>
                </div>
                <h3 className="text-[#1a1a1a] font-black text-lg mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOA / Planned Community CTA */}
      <section className="py-16 bg-amber-500">
        <div className="w-full px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
                <i className="ri-community-line"></i>
                HOA &amp; Planned Communities
              </div>
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight mb-4">
                We Know Mililani's HOA Requirements
              </h2>
              <p className="text-white/85 text-base leading-relaxed mb-6">
                Mililani's HOA communities have specific color palettes and approval processes. We've worked with Mililani homeowners through this before — we can help you choose approved colors, document the work for HOA submission, and make sure everything is done to their standards.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Familiar with Mililani HOA color requirements",
                  "Documentation available for HOA approval",
                  "Clean, professional work that passes inspection",
                  "We coordinate with your HOA timeline",
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
                src="/images/gallery-mililani-hoa.jpg"
                alt="Mililani HOA community painting"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <a href="tel:8082723816" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1a1a1a] font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-phone-fill text-amber-500"></i>
                  Call for a Free Estimate
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
              Our Painting Services in Mililani &amp; Central Oahu
            </h2>
            <p className="text-gray-500 text-base">Full-service painting solutions for every Central Oahu home and property.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-[#f5f5f5] border border-gray-200 hover:border-amber-400 rounded-xl p-6 hover:-translate-y-1 transition-all cursor-pointer block"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-full mb-3">
                  <i className={`${s.icon} text-white`}></i>
                </div>
                <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-amber-500 font-bold text-sm group-hover:gap-2 transition-all">
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
              Communities We Serve in Central Oahu
            </h2>
            <p className="text-gray-500 text-base">Same quality, same standards, same 1-year warranty — wherever you are in Central Oahu.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {neighborhoods.map((n) => (
              <div key={n} className="bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50/50 rounded-xl p-4 text-center transition-all cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-map-pin-2-fill text-amber-500 text-lg"></i>
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
            What Mililani Homeowners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <i key={j} className="ri-star-fill text-amber-500"></i>
                  ))}
                </div>
                <p className="text-[#1a1a1a] text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-full flex-shrink-0">
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

      <NearbyAreas currentCity="Mililani" />

      {/* FAQ */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="w-full px-6 md:px-16 max-w-3xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl text-center mb-12">
            FAQs — Painting in Mililani &amp; Central Oahu
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
                    <i className={`${openFaq === i ? "ri-subtract-line" : "ri-add-line"} text-amber-500 text-lg`}></i>
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
        city="Mililani"
        sourcePage="Painters Mililani"
        description="I serve homeowners across Mililani Town, Mililani Mauka, Waipio Acres, and all of Central Oahu. Call me directly or send a message and I'll get back to you fast. Mahalo for considering Hawaii Painters 808."
        trustItems={["Licensed & Insured in Hawaii", "Free estimate — no obligation", "Lopaka personally oversees every job", "1-year workmanship warranty"]}
      />

      <Footer />
    </main>
  );
}
