const reviews = [
  { stars: 5, quote: "Hawaii Painters 808 repainted our entire Kailua home exterior. Two years later it still looks brand new — no fading, no peeling. The salt air hasn't touched it. Worth every penny.", name: "David & Sarah M.", location: "Kailua, Oahu", service: "Full Exterior" },
  { stars: 5, quote: "Lopaka was honest about what our stucco needed before painting. Other contractors just wanted to paint over the problems. He fixed it right first. The result is flawless.", name: "Keiko T.", location: "Hawaii Kai, Honolulu", service: "Stucco Exterior" },
  { stars: 5, quote: "Our Kaneohe home was badly faded from the sun. Hawaii Painters 808 used UV-resistant paint and the color has held perfectly through two full summers. Incredible difference.", name: "Marcus L.", location: "Kaneohe, Oahu", service: "Full Exterior" },
  { stars: 5, quote: "They power washed, caulked every gap, primed the bare spots, and put on two full coats. I watched them work — they didn't skip a single step. That's rare.", name: "Jennifer K.", location: "Pearl City, Oahu", service: "Exterior Repaint" },
  { stars: 5, quote: "Best exterior paint job I've seen on Oahu. Lopaka personally inspected every surface before they started. The prep work alone took a full day. That's the difference.", name: "Robert N.", location: "Waipahu, Oahu", service: "Full Exterior" },
  { stars: 5, quote: "Our rental property exterior was peeling badly. Hawaii Painters 808 stripped it back, treated the wood properly, and repainted it. Tenants immediately noticed the improvement.", name: "Alana P.", location: "Mililani, Oahu", service: "Rental Exterior" },
];

export default function ExteriorTestimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Real Reviews</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            What Oahu Homeowners<br /><span className="text-[#4a9fa5]">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">Hawaii Painters 808 has painted hundreds of Oʻahu exteriors. Here's what homeowners say.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-6 flex flex-col">
              <div className="flex gap-1 mb-4">{Array.from({ length: r.stars }).map((_, j) => <i key={j} className="ri-star-fill text-[#4a9fa5] text-sm"></i>)}</div>
              <p className="text-[#1a1a1a] text-sm italic leading-relaxed flex-1 mb-5">"{r.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0"><i className="ri-user-fill text-white text-sm"></i></div>
                  <div><div className="text-[#1a1a1a] font-black text-xs">{r.name}</div><div className="text-gray-400 text-xs">{r.location}</div></div>
                </div>
                <div className="bg-[#4a9fa5]/10 text-[#4a9fa5] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{r.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}