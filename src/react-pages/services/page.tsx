import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { services } from "@/mocks/data";
import AreaContactSection from "@/components/feature/AreaContactSection";

const serviceImages: Record<string, string> = {
  "interior-painting": "/images/card-interior.jpg",
  "exterior-painting": "/images/card-exterior.jpg",
  "residential-painting": "/images/card-residential.jpg",
  "commercial-painting": "/images/card-commercial.jpg",
  "cabinet-painting": "/images/card-cabinet.jpg",
  "drywall": "/images/card-drywall.jpg",
};

const trustStats = [
  { value: "30+", label: "Years on Oʻahu" },
  { value: "500+", label: "Projects Completed" },
  { value: "5★", label: "Average Rating" },
  { value: "1yr", label: "Workmanship Warranty" },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-services.jpg"
            alt="Hawaii Painters 808 — All Services Oahu Hawaii"
            className="w-full h-full object-cover object-top opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent"></div>
        </div>

        <div className="relative w-full px-6 md:px-16 pb-16 pt-36">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/90 font-semibold">Services</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
            <i className="ri-map-pin-2-fill text-[#4a9fa5]"></i>
            Hawaii Painters 808 — Oahu, Hawaii
          </div>
          <h1 className="text-white font-black italic text-5xl md:text-6xl lg:text-7xl leading-tight uppercase mb-5">
            All Our<br />
            <span className="text-[#4a9fa5]">Services</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Interior, exterior, residential, commercial, cabinets, drywall — every job on Oʻahu gets the same attention. Every job gets done right.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#111] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[#4a9fa5] font-black text-3xl leading-none">{s.value}</div>
              <div className="text-white/50 text-xs font-semibold tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
              What We Do
            </div>
            <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
              6 Services. One Crew.<br />
              <span className="text-[#4a9fa5]">All of Oʻahu.</span>
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
              Click any service below to see exactly what we do, how we do it, and what it costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#4a9fa5] hover:-translate-y-1 transition-all cursor-pointer block"
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={serviceImages[service.slug]}
                    alt={`${service.title} — Hawaii Painters 808`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent"></div>
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center bg-[#4a9fa5] text-white font-black text-sm rounded-full">
                    {service.number}
                  </div>
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-[#1a1a1a]/70 rounded-full">
                    <i className={`${service.icon} text-white text-base`}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#1a1a1a] font-black text-lg uppercase mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

                  <div className="inline-flex items-center gap-1.5 bg-[#4a9fa5]/10 text-[#4a9fa5] text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                    <i className="ri-check-line text-xs"></i>
                    {service.highlight}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-[#4a9fa5] font-black text-sm group-hover:gap-2 transition-all">
                      View Service <i className="ri-arrow-right-line"></i>
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">Free Estimate</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us strip */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] font-black italic text-3xl md:text-4xl uppercase">Why Hawaii Painters 808</h2>
            <p className="text-gray-500 text-base mt-3 max-w-lg mx-auto">Every service we offer comes with the same commitment — done right, on time, built for Hawaii.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "ri-shield-check-line", title: "Licensed & Insured", desc: "Fully licensed in Hawaii with comprehensive liability insurance on every single job." },
              { icon: "ri-sun-line", title: "Sherwin-Williams Duration", desc: "A premium paint we've trusted for 30+ years in Hawaii's conditions — proven to hold up in salt air, sun, and humidity." },
              { icon: "ri-time-line", title: "On-Time Guarantee", desc: "Written schedule commitment — we show up when we say and finish when we promise." },
              { icon: "ri-thumb-up-line", title: "1-Year Warranty", desc: "We stand behind our work with a 1-year workmanship guarantee. Sherwin-Williams Duration also carries its own manufacturer warranty on the paint." },
            ].map((card) => (
              <div key={card.title} className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                  <i className={`${card.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-[#1a1a1a] font-black text-sm uppercase mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AreaContactSection
        city="Painting Services"
        sourcePage="services"
        description="Tell us about your project and our team will get back to you within 2 hours. No pressure, no obligation — just a straight answer on what it'll take."
        trustItems={[
          "Licensed & Insured in Hawaii",
          "1-Year Workmanship Warranty",
          "5-Star Rated on Google & Yelp",
          "Sherwin-Williams Duration Paint",
          "Free On-Site Estimate",
        ]}
      />

      <Footer />
    </main>
  );
}
