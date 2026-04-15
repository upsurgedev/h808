export default function AboutOwnerSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Photo */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full p-1.5"
                style={{ background: "linear-gradient(135deg, #4a9fa5 0%, #1a1a1a 100%)" }}>
                <div className="w-full h-full rounded-full p-1 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/images/lopaka-white-shirt.png?v=e4fa3cfcb2be310e2a22df761df2f2ad"
                      alt="Lopaka — Owner of Hawaii Painters 808"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-4 -right-2 bg-[#4a9fa5] text-white font-black text-center w-24 h-24 rounded-full flex flex-col items-center justify-center">
                <div className="text-2xl font-black leading-none">30+</div>
                <div className="text-xs font-black tracking-wide leading-tight mt-0.5">YEARS<br />EXPERIENCE</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
              About the Owner
            </div>

            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-6">
              Built on Integrity,<br />Craftsmanship, and Aloha
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              I'm Lopaka. I grew up on Oʻahu and I've been painting homes and businesses here for over 30 years. Hawaii Painters 808 is my company — built from the ground up on doing things right.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              I personally oversee every project from the first walkthrough to the final brushstroke. No shortcuts. No excuses. Just honest work done with pride. That's what my ʻohana taught me, and it's how I run every job.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We're more than just painters. We're neighbors. Homeowners and businesses across Honolulu count on us because we show up when we say we will, we treat your home with respect, and we don't leave until the work is right. I'd be honored to earn your trust.
            </p>

            {/* Credential row */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: "ri-shield-check-fill", label: "Licensed & Insured" },
                { icon: "ri-map-pin-2-fill", label: "Oʻahu Born & Raised" },
                { icon: "ri-star-fill", label: "5-Star Rated" },
                { icon: "ri-home-heart-fill", label: "All of Oʻahu Covered" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-[#f5f5f5] px-4 py-2.5 rounded-full">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a9fa5]">
                    <i className={`${b.icon} text-sm`}></i>
                  </div>
                  <span className="text-[#1a1a1a] font-bold text-xs whitespace-nowrap">{b.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8082723816"
                className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-7 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i>
                Call Lopaka — 808-272-3816
              </a>
              <a
                href="/about"
                className="flex items-center justify-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-black text-sm tracking-wider px-7 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                Meet the Owner
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
