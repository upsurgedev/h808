
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { services, testimonials, primaryAreas } from "@/mocks/data";

const serviceDetails: Record<string, {
  hero: string;
  tagline: string;
  features: string[];
  steps: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  image: string;
}> = {
  "interior-painting": {
    hero: "Interior Painting in Oahu, Hawaii",
    tagline: "Transform every room with flawless, long-lasting interior finishes built for Hawaii's humidity.",
    features: ["Sherwin-Williams Duration paint","Low-VOC, family-safe paint options","Full furniture protection & drop cloths","Smooth drywall repair included","Color consultation at no extra charge","Clean site — we leave it spotless"],
    steps: [
      { title: "Free In-Home Estimate", desc: "We visit your home, assess every room, and provide a detailed written quote within 24 hours." },
      { title: "Surface Prep", desc: "We patch holes, sand rough spots, prime every surface, and protect all furniture and floors." },
      { title: "Expert Application", desc: "Two coats of Sherwin-Williams Duration applied by skilled craftsmen for a flawless, even finish." },
      { title: "Final Walkthrough", desc: "We inspect every inch with you and touch up anything that isn't perfect before we leave." },
    ],
    faq: [
      { q: "How long does interior painting take?", a: "Most rooms take 1–2 days. A full home typically takes 3–5 days depending on size and prep needed." },
      { q: "Do I need to move my furniture?", a: "We handle all furniture moving and protection. Just remove small personal items and valuables." },
      { q: "What paint do you use?", a: "We use Sherwin-Williams Duration — a premium paint line built for demanding conditions. It's what I've trusted for 30+ years painting homes across Oahu." },
      { q: "Do you repair drywall before painting?", a: "Yes — minor drywall repairs, nail holes, and cracks are included in every interior painting project." },
    ],
    image: "/images/interior-painting-hero.jpg",
  },
  "exterior-painting": {
    hero: "Exterior Painting in Oahu, Hawaii",
    tagline: "Sherwin-Williams Duration paint proven over 30+ years in Hawaii's toughest conditions.",
    features: ["Sherwin-Williams Duration paint","Quality primers for every surface","Full pressure wash before painting","Proper prep and priming on every job","Caulking & minor wood repair included","1-year workmanship warranty"],
    steps: [
      { title: "Free Exterior Estimate", desc: "We inspect your home's exterior, identify problem areas, and provide a detailed written quote." },
      { title: "Power Wash & Prep", desc: "Full pressure washing, scraping, sanding, caulking, and priming before any paint is applied." },
      { title: "Premium Application", desc: "Two coats of Sherwin-Williams Duration applied for maximum durability and curb appeal." },
      { title: "Final Inspection", desc: "Complete walkthrough to ensure every surface is perfect and all areas are cleaned up." },
    ],
    faq: [
      { q: "How long does exterior paint last in Hawaii?", a: "With Sherwin-Williams Duration and proper prep, you can expect 7–10 years of lasting color and protection." },
      { q: "Do you paint in the rain?", a: "We monitor weather closely and schedule around rain. We never paint on wet surfaces." },
      { q: "What makes your paint Hawaii-specific?", a: "After 30+ years painting on Oahu, I use Sherwin-Williams Duration because it holds up best against salt air, UV rays, and humidity — the three biggest threats to exterior paint in Hawaii." },
      { q: "Do you paint roofs and fences too?", a: "Yes — we handle all exterior surfaces including fences, gates, trim, shutters, and more." },
    ],
    image: "/images/exterior-painting-hero.jpg",
  },
  "commercial-painting": {
    hero: "Commercial Painting in Oahu, Hawaii",
    tagline: "Minimal disruption, maximum results for Oahu businesses, offices, and commercial properties.",
    features: ["After-hours & weekend scheduling","Low-odor commercial-grade paints","Sherwin-Williams Duration paint","HOA & property management specialists","Detailed project timeline provided","Licensed & fully insured — COI available"],
    steps: [
      { title: "Site Assessment", desc: "We visit your commercial property, understand your timeline needs, and provide a detailed proposal." },
      { title: "Schedule Planning", desc: "We work around your business hours — nights, weekends, or phased sections to minimize disruption." },
      { title: "Professional Execution", desc: "Experienced commercial crews deliver fast, clean, high-quality results on schedule." },
      { title: "Sign-Off & Warranty", desc: "Final walkthrough with property manager and written warranty on all workmanship." },
    ],
    faq: [
      { q: "Can you work after business hours?", a: "Absolutely. We regularly work evenings and weekends to avoid disrupting your operations." },
      { q: "Do you provide certificates of insurance?", a: "Yes — we provide full COI documentation for property managers and building owners." },
      { q: "How large of a commercial project can you handle?", a: "We handle everything from single offices to large multi-story commercial buildings across Oahu." },
      { q: "Do you do HOA common areas?", a: "Yes — we're experienced with HOA projects including common areas, building exteriors, and parking structures." },
    ],
    image: "/images/commercial-painting-hero.jpg",
  },
};

export default function ServicePage({ slug: slugProp }: { slug?: string }) {
  const slug = slugProp ?? (typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "");
  const service = services.find((s) => s.slug === slug);
  const details = slug ? serviceDetails[slug] : null;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service || !details) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-black text-[#0f1f3d] mb-4">Service Not Found</h1>
            <a href="/services" className="text-[#1a56db] font-bold">View All Services</a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main>
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#f8f9fc] pt-24 pb-4 px-6 md:px-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-[#1a56db] cursor-pointer">Home</a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="/services" className="hover:text-[#1a56db] cursor-pointer">Services</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-[#0f1f3d] font-semibold">{service.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-[#f8f9fc] py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1a56db]/10 text-[#1a56db] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
              {service.title}
            </div>
            <h1 className="text-[#0f1f3d] font-black italic text-4xl md:text-5xl uppercase leading-tight mb-5">
              {details.hero}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">{details.tagline}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {details.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[#0f1f3d] text-sm font-semibold">
                  <i className="ri-checkbox-circle-fill text-[#1a56db] text-base"></i>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="flex items-center justify-center gap-2 bg-[#1a56db] hover:bg-[#1648c0] text-white font-black text-sm tracking-wider px-7 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap">
                GET FREE QUOTE
              </a>
              <a href="tel:+18082723816" className="flex items-center justify-center gap-2 border-2 border-[#0f1f3d] text-[#0f1f3d] hover:bg-[#0f1f3d] hover:text-white font-black text-sm tracking-wider px-7 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-phone-fill"></i> (808) 272-3816
              </a>
            </div>
          </div>
          <div className="w-full h-80 lg:h-96 rounded-xl overflow-hidden border-2 border-black">
            <img src={details.image} alt={details.hero} className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#0f1f3d] font-black italic text-3xl md:text-4xl uppercase">How We Work</h2>
            <p className="text-gray-500 mt-3">Our proven 4-step process for every {service.title.toLowerCase()} project.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.steps.map((step, i) => (
              <div key={i} className="bg-[#f8f9fc] border-2 border-black rounded-xl p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1a56db] text-white font-black text-xl rounded-full mx-auto mb-4">{i + 1}</div>
                <h3 className="text-[#0f1f3d] font-black text-base uppercase mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <section className="bg-[#f8f9fc] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#0f1f3d] font-black italic text-3xl md:text-4xl uppercase">Why Choose Hawaii Painters 808</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "ri-shield-check-fill", title: "Licensed & Insured", desc: "Fully licensed in Hawaii with comprehensive liability insurance on every job." },
              { icon: "ri-sun-fill", title: "Sherwin-Williams Duration", desc: "A premium paint we've trusted for 30+ years in Hawaii's conditions — proven to hold up in salt air, sun, and humidity." },
              { icon: "ri-time-fill", title: "On-Time Guarantee", desc: "Written schedule commitment — we show up when we say and finish when we promise." },
              { icon: "ri-thumb-up-fill", title: "1-Year Warranty", desc: "We stand behind our work with a 1-year workmanship guarantee. Sherwin-Williams Duration also carries its own manufacturer warranty on the paint." },
            ].map((card) => (
              <div key={card.title} className="bg-white border-2 border-black rounded-xl p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#f59e0b] rounded-full mx-auto mb-4">
                  <i className={`${card.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-[#0f1f3d] font-black text-sm uppercase mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#0f1f3d] font-black italic text-3xl md:text-4xl uppercase mb-10 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white border-2 border-black rounded-xl p-6">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.stars }).map((_, i) => <i key={i} className="ri-star-fill text-[#f59e0b]"></i>)}</div>
                <p className="text-[#0f1f3d] text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1a56db] rounded-full"><i className="ri-user-fill text-white text-xs"></i></div>
                  <div><div className="text-[#0f1f3d] font-black text-xs">{t.name}</div><div className="text-gray-400 text-xs">{t.location}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f9fc] py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#0f1f3d] font-black italic text-3xl md:text-4xl uppercase mb-10 text-center">{service.title} FAQs</h2>
          <div className="flex flex-col gap-3">
            {details.faq.map((item, i) => (
              <div key={i} className="bg-white border-2 border-black rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[#0f1f3d] font-black text-sm">{item.q}</span>
                  <i className={`${openFaq === i ? "ri-subtract-line" : "ri-add-line"} text-[#1a56db] text-lg flex-shrink-0 ml-3`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#0f1f3d] font-black italic text-3xl uppercase mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <a key={s.id} href={`/services/${s.slug}`} className="group bg-white border-2 border-black rounded-xl p-6 hover:-translate-y-1 transition-transform cursor-pointer block">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1a56db] rounded-full mb-3"><i className={`${s.icon} text-white`}></i></div>
                <h3 className="text-[#0f1f3d] font-black text-base uppercase mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                <div className="flex items-center gap-1 mt-3 text-[#1a56db] font-bold text-sm">Learn More <i className="ri-arrow-right-line"></i></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1a56db] py-16 px-6 md:px-16 text-center">
        <h2 className="text-white font-black italic text-3xl md:text-4xl uppercase mb-4">Ready to Get Started?</h2>
        <p className="text-white/80 text-lg mb-8">Get your free {service.title.toLowerCase()} estimate today. We respond within 2 hours.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#1a56db] font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">GET FREE ESTIMATE</a>
          <a href="tel:+18082723816" className="flex items-center gap-2 border-2 border-white text-white font-black text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"><i className="ri-phone-fill"></i> CALL (808) 272-3816</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { useState } from "react";
