
export default function CommercialHero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-commercial.jpg"
          alt="Commercial painting Honolulu Hawaii — Hawaii Painters 808"
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"></div>
      </div>
      <div className="relative w-full px-6 md:px-16 pb-20 pt-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
            <i className="ri-map-pin-2-fill text-[#4a9fa5]"></i>Hawaii Painters 808 — Oahu, Hawaii
          </div>
          <h1 className="text-white font-black italic text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 uppercase">
            Commercial Painting<br /><span className="text-[#4a9fa5]">Built Around</span><br />Your Business
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl">
            Hawaii Painters 808 paints offices, retail spaces, restaurants, and commercial properties across Oʻahu. We work nights and weekends to keep your business running — zero downtime, professional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-file-list-3-line"></i>GET FREE ESTIMATE
            </a>
            <a
              href="tel:+18082723816"
              className="flex items-center justify-center gap-2 bg-white/10 border-2 border-white hover:bg-white hover:text-[#1a1a1a] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill"></i>(808) 272-3816
            </a>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "200+", label: "Commercial Projects" },
              { value: "5★", label: "Average Rating" },
              { value: "1yr", label: "Workmanship Warranty" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[#4a9fa5] font-black text-3xl leading-none">{stat.value}</div>
                <div className="text-white/60 text-xs font-semibold tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
