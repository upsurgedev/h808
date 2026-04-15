export default function HnlServiceOverview() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-6">Professional Interior Painting Services in Honolulu</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">I grew up here. I know what Hawaii does to paint — the humidity, the salt air, the sun that never lets up. Mainland products fail fast on Oʻahu. I use materials that are built for this climate, applied the right way, the first time.</p>
            <p className="text-gray-600 text-base leading-relaxed mb-5">I personally oversee every project from prep to the final coat. We patch, sand, prime, protect your floors and furniture — then put down two full coats. No shortcuts. No excuses. Just honest work done with pride.</p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">Hawaii Painters 808 is my company. I started it because I wanted to do this work the right way and take care of my ʻohana. When you call us, you're not getting a franchise or a call center. You're getting me. I'd be honored to earn your trust.</p>
            <div>
              <p className="text-[#1a1a1a] font-black text-base mb-4 uppercase tracking-wide">What's included:</p>
              <ul className="flex flex-col gap-3">
                {["Surface prep and patching","Priming before paint","Two finish coats","Trim and doors if requested","Daily cleanup","Final walkthrough"].map((item) => (
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
              <p className="text-[#1a1a1a] font-black text-xl mb-5">Get a Free Estimate</p>
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
              <button onClick={scrollToForm} className="w-full flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#4a9fa5] text-white font-black text-sm tracking-wider px-6 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-file-list-3-line"></i>
                Request Estimate
              </button>
              <div className="mt-5 flex flex-col gap-2">
                {["Licensed & Insured in Hawaii","No-obligation estimate","Oʻahu-based team"].map((t) => (
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
  );
}
