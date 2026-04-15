

export default function ResidentialCta() {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img
          src="/images/residential-cta.jpg"
          alt="Residential painting result — Hawaii Painters 808"
          className="w-full h-full object-cover object-top opacity-15"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/80"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="overflow-hidden w-24 h-24 rounded-full border-4 border-[#4a9fa5]">
            <img
              src="https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/f6ced8a9-9ddb-4246-99c1-bbd7f2cd866e_lo_hat_brush.png?v=8ef6ac5502d8c1f1d14ef407d6e6cc09"
              alt="Lopaka — Owner, Hawaii Painters 808"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#4a9fa5] text-white font-black text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
          <i className="ri-phone-fill"></i>
          Hawaii Painters 808 — We Respond Within 2 Hours
        </div>

        <h2 className="text-white font-black italic text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-6">
          Ready to Transform<br />
          <span className="text-[#4a9fa5]">Your Home?</span>
        </h2>

        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Get your free, no-obligation estimate from Hawaii Painters 808 today. Lopaka will visit your home personally, assess every room and surface, and have a detailed quote to you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="/contact"
            className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-10 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-file-list-3-line"></i>
            GET FREE ESTIMATE
          </a>
          <a
            href="tel:+18082723816"
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] font-black text-sm tracking-wider px-10 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill"></i>
            CALL (808) 272-3816
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "ri-shield-check-fill", label: "Licensed & Insured" },
            { icon: "ri-award-fill", label: "1-Year Warranty" },
            { icon: "ri-star-fill", label: "5-Star Rated" },
            { icon: "ri-time-fill", label: "24hr Response" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-white/70 text-sm font-semibold">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`${b.icon} text-[#4a9fa5]`}></i>
              </div>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
