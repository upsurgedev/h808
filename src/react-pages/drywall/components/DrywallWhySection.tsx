const reasons = [
  {
    icon: "ri-tools-line",
    title: "Every Repair Type",
    desc: "Nail holes, hairline cracks, large holes, water damage, popcorn ceiling removal, texture matching — Hawaii Painters 808 handles every type of drywall repair on Oahu.",
  },
  {
    icon: "ri-drop-line",
    title: "Water Damage Specialists",
    desc: "Hawaii's humidity and tropical storms cause water damage that standard contractors miss. We identify the source, treat for mold, and restore the surface properly before painting.",
  },
  {
    icon: "ri-eye-line",
    title: "Invisible Repairs",
    desc: "A bad drywall patch is obvious under paint. Hawaii Painters 808 feathers and textures every repair to match the surrounding wall — completely invisible once painted.",
  },
  {
    icon: "ri-brush-line",
    title: "Prep Before Every Paint Job",
    desc: "We include minor drywall repairs in every painting project at no extra charge. Major repairs are quoted separately. Either way, we never paint over problems.",
  },
  {
    icon: "ri-building-4-line",
    title: "Popcorn Ceiling Removal",
    desc: "Outdated popcorn ceilings are a common request across Oahu homes. We remove them cleanly, skim-coat the surface smooth, and leave it paint-ready.",
  },
  {
    icon: "ri-award-line",
    title: "1-Year Workmanship Warranty",
    desc: "Every drywall repair is backed by Hawaii Painters 808's 1-year workmanship warranty. If any repair cracks or fails due to our work, we return and fix it at no charge.",
  },
];

export default function DrywallWhySection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Why Hawaii Painters 808
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Drywall Repair Done<br />
            <span className="text-[#4a9fa5]">Properly. Invisibly.</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Paint only looks as good as the surface underneath. Hawaii Painters 808 fixes it right before a single drop of paint goes on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full mb-4">
                <i className={`${r.icon} text-[#4a9fa5] text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
