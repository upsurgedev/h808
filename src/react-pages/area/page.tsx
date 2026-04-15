import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { primaryAreas, services, testimonials } from "@/mocks/data";

export default function AreaPage({ slug }: { slug?: string }) {
  const resolvedSlug = slug ?? (typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean).pop() : '');
  const area = primaryAreas.find((a) => a.slug === resolvedSlug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!area) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-black text-[#1a1a1a] mb-4">Area Not Found</h1>
            <a href="/service-areas" className="text-[#4a9fa5] font-bold">View All Areas</a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const faqs = [
    { q: `Do you serve all of ${area.name}?`, a: `Yes — we cover all neighborhoods in ${area.name} including ${area.subLocations.slice(0, 3).join(", ")} and more. Same-day estimates available.` },
    { q: `How quickly can you start a project in ${area.name}?`, a: `We typically schedule projects within 1–2 weeks of estimate approval. For urgent needs, ask about our priority scheduling.` },
    { q: `Are you licensed to work in ${area.name}, Hawaii?`, a: `Absolutely. Hawaii Painters 808 is fully licensed and insured to operate throughout all of Oahu, including ${area.name}.` },
    { q: `What's the best time of year to paint in ${area.name}?`, a: `In Hawaii, we paint year-round. We monitor weather closely and schedule around rain to ensure optimal results.` },
  ];

  return (
    <main>
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] pt-24 pb-4 px-6 md:px-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <a href="/" className="hover:text-[#4a9fa5] cursor-pointer">Home</a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="/service-areas" className="hover:text-[#4a9fa5] cursor-pointer">Service Areas</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-[#1a1a1a] font-semibold">{area.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={area.image}
            alt={`House painting in ${area.name}, Oahu`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/80"></div>
        </div>
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
            <i className="ri-map-pin-2-fill text-[#4a9fa5]"></i> {area.name}, Oahu
          </div>
          <h1 className="text-white font-black italic text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-5">
            House Painting<br />in {area.name}, Hawaii
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
            Hawaii Painters 808 is {area.name}'s trusted painting contractor. We use Sherwin-Williams Duration paint proven over 30+ years on Oahu, with same-day estimates and a 1-year workmanship warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-file-list-3-line"></i> GET FREE QUOTE
            </a>
            <a
              href="tel:+18082723816"
              className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill"></i> (808) 272-3816
            </a>
          </div>
        </div>
      </section>

      {/* About Area */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
              About {area.name}
            </div>
            <h2 className="text-[#1a1a1a] font-black italic text-3xl md:text-4xl uppercase leading-tight mb-5">
              Painting Services in {area.name}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              {area.name} homeowners trust Hawaii Painters 808 for all their interior and exterior painting needs. Our crews are familiar with the unique challenges of painting in {area.name} — from salt-air exposure to Hawaii's intense UV rays and humidity.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              We use Sherwin-Williams Duration — a premium paint we've trusted for 30+ years in Hawaii's conditions. Every project includes full surface prep, proper priming, and a 1-year workmanship warranty — plus Sherwin-Williams Duration's manufacturer warranty on the paint itself.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "ri-shield-check-fill", label: "Licensed & Insured" },
                { icon: "ri-star-fill", label: "5-Star Rated" },
                { icon: "ri-time-fill", label: "Same-Day Estimates" },
                { icon: "ri-thumb-up-fill", label: "1-Year Warranty" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-[#1a1a1a] text-sm font-bold">
                  <div className="w-7 h-7 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full flex-shrink-0">
                    <i className={`${b.icon} text-[#4a9fa5] text-sm`}></i>
                  </div>
                  {b.label}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-72 rounded-xl overflow-hidden border border-gray-200">
            <img
              src={area.image}
              alt={`${area.name} Hawaii painting services`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#f5f5f5] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#1a1a1a] font-black italic text-3xl md:text-4xl uppercase">
              Our Services in {area.name}
            </h2>
            <p className="text-gray-500 mt-3">Full-service painting solutions for every {area.name} property.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a
                key={s.id}
                href={`/services/${s.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all cursor-pointer block"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-3">
                  <i className={`${s.icon} text-white`}></i>
                </div>
                <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                <div className="flex items-center gap-1 mt-3 text-[#4a9fa5] font-bold text-sm group-hover:gap-2 transition-all">
                  Learn More <i className="ri-arrow-right-line"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-locations */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#1a1a1a] font-black italic text-3xl md:text-4xl uppercase">
              Neighborhoods We Serve in {area.name}
            </h2>
            <p className="text-gray-500 mt-3">We cover every neighborhood in {area.name} with same-day estimates available.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {area.subLocations.map((sub) => (
              <div
                key={sub}
                className="bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] hover:bg-[#4a9fa5]/5 rounded-xl p-4 text-center transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-map-pin-2-fill text-[#4a9fa5] text-lg"></i>
                </div>
                <div className="text-[#1a1a1a] font-black text-sm uppercase">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f5f5f5] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black italic text-3xl uppercase mb-10 text-center">
            What {area.name} Homeowners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#4a9fa5]"></i>
                  ))}
                </div>
                <p className="text-[#1a1a1a] text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
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

      {/* FAQ */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#1a1a1a] font-black italic text-3xl uppercase mb-10 text-center">
            FAQs — Painting in {area.name}
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-[#f5f5f5] border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
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

      {/* Bottom CTA */}
      <section className="bg-[#1a1a1a] py-16 px-6 md:px-16 text-center">
        <h2 className="text-white font-black italic text-3xl md:text-4xl uppercase mb-4">
          Ready for a Free {area.name} Estimate?
        </h2>
        <p className="text-white/60 text-lg mb-8">Same-day estimates available. We respond within 2 hours.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-file-list-3-line"></i> GET FREE ESTIMATE
          </a>
          <a
            href="tel:+18082723816"
            className="flex items-center gap-2 border-2 border-white text-white font-black text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill"></i> CALL (808) 272-3816
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
