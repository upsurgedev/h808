const steps = [
  {
    num: "01",
    title: "Free Assessment & Estimate",
    desc: "Lopaka visits your home, inspects all damaged areas, identifies any underlying moisture or mold issues, and delivers a detailed written estimate within 24 hours — free, no obligation.",
  },
  {
    num: "02",
    title: "Moisture & Mold Check",
    desc: "In Hawaii, water damage almost always involves mold risk. We check for moisture behind walls before patching. If mold is present, we treat it properly — not just cover it up.",
  },
  {
    num: "03",
    title: "Damage Removal & Prep",
    desc: "Damaged drywall is cut back to clean edges. Water-stained areas are treated with stain-blocking primer. Popcorn texture is scraped and the surface is cleaned thoroughly.",
  },
  {
    num: "04",
    title: "Patching & Skim Coating",
    desc: "New drywall is installed or compound is applied in multiple thin coats. Each coat is allowed to dry fully before the next. No shortcuts — this is what makes repairs invisible.",
  },
  {
    num: "05",
    title: "Texture Matching & Sanding",
    desc: "We match the existing wall texture exactly — smooth, orange peel, knockdown, or custom. The repair is sanded to blend seamlessly with the surrounding surface.",
  },
  {
    num: "06",
    title: "Prime & Paint Ready",
    desc: "All repaired surfaces are primed and left paint-ready. If you're having Hawaii Painters 808 paint the room too, we move straight into painting — no extra mobilization cost.",
  },
];

export default function DrywallProcess() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Our Process
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            How Hawaii Painters 808<br />
            <span className="text-[#4a9fa5]">Handles Drywall Repair</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            A thorough 6-step process that fixes the problem properly — not just covers it up.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-[#4a9fa5] font-black text-4xl leading-none mb-4">{step.num}</div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
