const surfaces = [
  { icon: "ri-home-2-line", label: "Wood Siding", desc: "Properly primed and sealed against Hawaii's moisture. We don't skip the prep that makes wood last." },
  { icon: "ri-building-2-line", label: "Stucco & Concrete", desc: "The most common exterior surface on Oahu. Requires proper prep, the right primer, and quality paint to last in Hawaii's conditions." },
  { icon: "ri-door-open-line", label: "Trim & Fascia", desc: "Doors, window frames, soffits, and fascia boards. High-detail work that defines the finished look." },
  { icon: "ri-layout-right-line", label: "Fences & Gates", desc: "Wood and metal fencing painted and sealed to handle salt air and UV exposure year-round." },
  { icon: "ri-store-line", label: "Garages & Outbuildings", desc: "Detached garages, sheds, and utility structures. Same quality products and prep as the main house." },
  { icon: "ri-sun-line", label: "Lanais & Covered Areas", desc: "Covered outdoor living spaces need the right products — not interior paint, not standard exterior. We know the difference." },
];

export default function ExteriorGallery() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Surfaces We Paint</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">Every Exterior Surface</h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">From wood siding to stucco to lanais — we handle every exterior surface on Oʻahu homes with the right products and proper prep.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {surfaces.map((s) => (
            <div key={s.label} className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${s.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{s.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}