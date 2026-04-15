const repairs = [
  { icon: "ri-scissors-cut-line", label: "Hole Patching", desc: "Small nail holes to large punch-throughs — we patch, sand, and blend seamlessly so you can't tell anything was ever there." },
  { icon: "ri-water-flash-line", label: "Water Damage Repair", desc: "Stains, bubbling, soft spots from leaks or humidity. We fix the damage and treat the surface before painting over it." },
  { icon: "ri-line-height", label: "Crack Repair", desc: "Settlement cracks, stress cracks, hairline fractures. Properly filled and taped so they don't come back." },
  { icon: "ri-contrast-drop-line", label: "Popcorn Ceiling Removal", desc: "Outdated texture scraped clean, surface skim-coated smooth, and ready for a fresh coat of paint." },
  { icon: "ri-brush-line", label: "Texture Matching", desc: "We match your existing wall texture — orange peel, knockdown, skip trowel — so repairs are completely invisible." },
  { icon: "ri-layout-masonry-line", label: "Full Drywall Installation", desc: "New rooms, additions, or full replacements. We hang, tape, mud, sand, and prime — ready for paint." },
];

export default function DrywallGallery() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Drywall Services</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">Every Type of Repair</h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">From small nail holes to full water damage restoration — Hawaii Painters 808 fixes it all, invisibly, before a single drop of paint goes on.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairs.map((r) => (
            <div key={r.label} className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${r.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{r.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
