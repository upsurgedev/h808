const reviews = [
  {
    stars: 5,
    quote: "We had a large hole from a doorknob and water damage from a roof leak. Hawaii Painters 808 fixed both perfectly — you literally cannot tell anything was ever wrong. Incredible work.",
    name: "Keiko T.",
    location: "Kailua, Oahu",
    service: "Hole & Water Damage Repair",
  },
  {
    stars: 5,
    quote: "Lopaka removed our popcorn ceilings throughout the whole house and skimmed them smooth. The difference is night and day. Our home looks 20 years newer. Hawaii Painters 808 is the best.",
    name: "David & Sarah M.",
    location: "Manoa, Honolulu",
    service: "Popcorn Ceiling Removal",
  },
  {
    stars: 5,
    quote: "We had hairline cracks throughout our older Oahu home. Hawaii Painters 808 repaired every single one and matched the texture perfectly. After painting, you'd never know they existed.",
    name: "Alana P.",
    location: "Kaneohe, Oahu",
    service: "Crack Repair",
  },
  {
    stars: 5,
    quote: "The water damage in our bathroom was worse than we thought. Hawaii Painters 808 found mold behind the wall, treated it properly, and restored everything. They didn't just cover it up.",
    name: "Marcus L.",
    location: "Kapolei, Oahu",
    service: "Water Damage Restoration",
  },
  {
    stars: 5,
    quote: "I've used other drywall contractors before and the patches were always visible. Hawaii Painters 808 is the first company that made repairs truly invisible. Worth every penny.",
    name: "Jennifer K.",
    location: "Pearl City, Oahu",
    service: "Multiple Hole Repairs",
  },
  {
    stars: 5,
    quote: "Hawaii Painters 808 repaired our drywall and then painted the whole room. Having one company do both saved us time and money — and the result was seamless. Highly recommend.",
    name: "Robert N.",
    location: "Waipahu, Oahu",
    service: "Repair + Painting",
  },
];

export default function DrywallTestimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Real Reviews
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            What Oahu Homeowners<br />
            <span className="text-[#4a9fa5]">Say About Our Drywall Work</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Hawaii Painters 808 has completed thousands of drywall repairs across Oʻahu. Here's what homeowners say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <i key={j} className="ri-star-fill text-[#4a9fa5] text-sm"></i>
                ))}
              </div>
              <p className="text-[#1a1a1a] text-sm italic leading-relaxed flex-1 mb-5">"{r.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                    <i className="ri-user-fill text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a] font-black text-xs">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.location}</div>
                  </div>
                </div>
                <div className="bg-[#4a9fa5]/10 text-[#4a9fa5] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {r.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
