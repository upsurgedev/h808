

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
      {/* Background subtle texture */}
      <div className="absolute inset-0">
        <img
          src="/images/home-hero.jpg"
          alt="Hawaii home background"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]/60"></div>
      </div>

      <div className="relative w-full px-6 md:px-16 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
              <i className="ri-map-pin-2-fill text-[#4a9fa5]"></i>
              Oahu's Premier Painters
            </div>

            <h1 className="text-white font-black italic text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 uppercase">
              Professional<br />
              House Painting<br />
              <span className="text-[#4a9fa5]">For Your</span><br />
              Oahu Home
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Hawaii Painters 808 delivers expert interior painting, exterior painting, and cabinet refinishing across all of Oahu. Born and raised here, owner Lopaka personally oversees every job — bringing 30+ years of craftsmanship to Honolulu, Kailua, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-file-list-3-line"></i>
                GET FREE QUOTE
              </a>
              <a
                href="/services"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-[#1a1a1a] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-image-line"></i>
                SEE OUR WORK
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-5">
              {[
                { icon: "ri-shield-check-fill", label: "Licensed & Insured" },
                { icon: "ri-map-pin-2-fill", label: "Locally Owned" },
                { icon: "ri-thumb-up-fill", label: "5-Star Rated" },
                { icon: "ri-home-heart-fill", label: "All Oahu Covered" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                    <i className={`${b.icon} text-white text-sm`}></i>
                  </div>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Owner Photo */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <div className="absolute bottom-0 right-0 w-80 h-80 lg:w-[500px] lg:h-[500px] bg-[#4a9fa5]/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div
                className="relative overflow-hidden w-72 md:w-96 lg:w-[430px]"
                style={{
                  clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)",
                  background: "linear-gradient(135deg, #4a9fa5 0%, #1a1a1a 100%)",
                  padding: "4px",
                }}
              >
                <div
                  className="overflow-hidden"
                  style={{ clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)" }}
                >
                  <img
                    src="https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/f6ced8a9-9ddb-4246-99c1-bbd7f2cd866e_lo_hat_brush.png?v=8ef6ac5502d8c1f1d14ef407d6e6cc09"
                    alt="Lopaka — Owner of Hawaii Painters 808"
                    className="w-full h-auto object-contain"
                    style={{ display: "block" }}
                  />
                </div>
              </div>

              {/* Locally Owned Badge */}
              <div className="absolute top-6 -left-2 flex flex-col items-center justify-center bg-[#4a9fa5] text-white font-black text-center w-24 h-24 rounded-full">
                <div className="text-xs font-black tracking-wide leading-tight">LOCALLY</div>
                <div className="text-xl font-black leading-tight">OWNED</div>
              </div>

              {/* Name card */}
              <div className="mt-4 bg-white text-[#1a1a1a] px-6 py-2.5 rounded-full whitespace-nowrap">
                <div className="font-black text-sm text-center">Lopaka — Owner</div>
                <div className="text-[#4a9fa5] text-xs font-bold text-center">Hawaii Painters 808</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
