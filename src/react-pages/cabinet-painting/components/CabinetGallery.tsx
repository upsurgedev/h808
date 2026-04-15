const types = [
  { icon: "ri-fridge-line", label: "Kitchen Cabinets", desc: "Upper and lower cabinets, islands, and pantry doors. The biggest visual impact in any kitchen — done right with a factory-smooth finish." },
  { icon: "ri-drop-line", label: "Bathroom Vanities", desc: "Single and double vanities, medicine cabinets, and linen closets. Sherwin-Williams Emerald Urethane proven in Hawaii's humidity." },
  { icon: "ri-t-shirt-line", label: "Laundry Room Cabinets", desc: "Often overlooked, always appreciated. Clean painted cabinets make the whole laundry room feel new." },
  { icon: "ri-tv-line", label: "Built-In Entertainment Centers", desc: "Custom built-ins, bookshelves, and media walls. We paint them to look like they came from the factory." },
  { icon: "ri-door-open-line", label: "Closet Systems", desc: "Walk-in closets, reach-in closets, and built-in organizers. A fresh coat transforms the whole space." },
  { icon: "ri-layout-grid-line", label: "Any Cabinet, Any Room", desc: "If it has doors and drawers, we can paint it. Hawaii Painters 808 handles any cabinet painting project on Oʻahu." },
];

export default function CabinetGallery() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Cabinets We Paint</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">Every Cabinet In Your Home</h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">From dated oak kitchens to worn bathroom vanities — Hawaii Painters 808 transforms cabinets across Oʻahu with a flawless, durable finish.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t) => (
            <div key={t.label} className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${t.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{t.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
