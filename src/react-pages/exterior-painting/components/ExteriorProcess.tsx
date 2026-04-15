
const coverageList = [
  "Wood siding, trim, and fascia",
  "Stucco and concrete block exteriors",
  "Lanais, covered patios, and soffits",
  "Fences, gates, and outbuildings",
  "Garages and detached structures",
  "Window frames and exterior doors",
];

const productGuide = [
  { label: "Right Product for Every Surface", desc: "Sherwin-Williams Duration for wood and siding, specialty primers for stucco and concrete — right product every time", icon: "ri-shield-line" },
  { label: "Sherwin-Williams Duration", desc: "A premium exterior paint we've trusted for 30+ years in Hawaii's conditions — proven to hold up in salt air and intense sun", icon: "ri-water-flash-line" },
  { label: "Quality Primers", desc: "Proper priming is critical on every Hawaii exterior — it's what makes the finish coat bond and last", icon: "ri-sun-line" },
  { label: "Mold-Resistant Primers", desc: "Applied before every topcoat — prevents mold growth in Hawaii's humidity", icon: "ri-leaf-line" },
];

export default function ExteriorProcess() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white font-black text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">Exterior Painting Professionals</div>
          <h2 className="text-white font-black italic text-4xl md:text-5xl uppercase leading-tight mb-6">
            Exterior Painting That<br /><span className="text-[#4a9fa5]">Holds Up in Hawaii</span>
          </h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-white/70 text-base leading-relaxed">
              Exterior painting on Oʻahu is the highest-stakes painting job on the island. The climate is beautiful — but it is relentless on exterior surfaces. Salt air from the ocean, UV intensity that fades paint in months, trade winds carrying moisture into every crack, and concrete and stucco surfaces that need specific coatings to hold up.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              I have been painting exteriors on Oʻahu for over 30 years. I have seen what happens when the wrong products are used or prep is skipped. Cheap paint on a Hawaii exterior is money wasted in two years. Prep and product selection determine how long a paint job lasts — and that is where Hawaii Painters 808 does not cut corners.
            </p>
          </div>
        </div>

        <div className="mb-16 bg-white/5 border border-white/10 rounded-xl p-8 md:p-10">
          <h3 className="text-white font-black italic text-2xl md:text-3xl uppercase mb-5">Why Exterior Painting in Hawaii Is Different</h3>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              The ocean is never far on Oʻahu. Salt air is corrosive — it breaks down paint binders, causes peeling, and accelerates rust on any metal surfaces. Homes in Hawaii Kai, Kahala, Kailua, and anywhere near the coast feel this the hardest.
            </p>
            <p>
              Hawaii's UV index is among the highest in the country. After 30+ years painting on Oahu, I know that Sherwin-Williams Duration maintains color and sheen far longer than standard options.
            </p>
            <p className="text-white font-semibold">
              Most exterior paint failures on Oahu come down to two things: wrong product and skipped prep. Hawaii Painters 808 gets both right every time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-black italic text-2xl uppercase mb-6">What We Paint</h3>
            <p className="text-white/60 text-sm mb-5">Full exterior painting for homes and commercial properties across Oʻahu:</p>
            <ul className="space-y-3">
              {coverageList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-[#4a9fa5] text-base"></i>
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-black italic text-2xl uppercase mb-6">Products We Use</h3>
            <p className="text-white/60 text-sm mb-5">Every product is chosen specifically for Hawaii's climate conditions:</p>
            <div className="space-y-4">
              {productGuide.map((item) => (
                <div key={item.label} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5]/20 rounded-full flex-shrink-0">
                    <i className={`${item.icon} text-[#4a9fa5] text-base`}></i>
                  </div>
                  <div>
                    <div className="text-white font-black text-sm uppercase">{item.label}</div>
                    <div className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-5 flex-1">
            <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-[#4a9fa5]">
              <img src="/images/lopaka-white-shirt.png?v=e4fa3cfcb2be310e2a22df761df2f2ad" alt="Lopaka — Owner, Hawaii Painters 808" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h3 className="text-white font-black italic text-2xl md:text-3xl uppercase mb-3">Ready to Get Started?</h3>
              <p className="text-white/60 text-base leading-relaxed max-w-xl">
                Call me directly at <a href="tel:+18082723816" className="text-[#4a9fa5] font-bold hover:underline">808-272-3816</a>. I will come out personally, look at your exterior, and give you a straight written estimate. No pressure. No runaround.
              </p>
              <p className="text-white/40 text-sm mt-3 italic">— Lopaka, Hawaii Painters 808</p>
            </div>
          </div>
          <a href="/contact" className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0">
            <i className="ri-file-list-3-line"></i>GET FREE ESTIMATE
          </a>
        </div>
      </div>
    </section>
  );
}