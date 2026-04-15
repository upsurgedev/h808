export default function HnlHero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/honolulu-interior-painting-hero.jpg"
          alt="Interior painting Honolulu Hawaii"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/58 to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
      </div>

      <div className="relative w-full px-6 md:px-16 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5] text-white font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
            <i className="ri-map-pin-2-fill"></i>
            Honolulu, Oʻahu, Hawaii
          </div>

          <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
            Interior Painting in<br />Honolulu, HI
          </h1>

          <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Aloha. I'm Lopaka — born and raised on Oʻahu, licensed and insured, and I've been painting homes across this island since 2012. I personally oversee every job. No shortcuts. No excuses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8082723816"
              className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill"></i>
              Call 808-272-3816
            </a>
            <button
              onClick={scrollToForm}
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1a1a1a] font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-file-list-3-line"></i>
              Get a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
