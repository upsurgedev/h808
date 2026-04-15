const reasons = [
  {
    icon: "ri-moon-line",
    title: "After-Hours Scheduling",
    desc: "We work nights, weekends, and holidays so your business never has to close. Hawaii Painters 808 schedules around your operations — not the other way around.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Licensed & Fully Insured",
    desc: "Hawaii Painters 808 carries full commercial liability insurance and workers' comp. Your property and your business are protected on every job.",
  },
  {
    icon: "ri-building-4-line",
    title: "All Commercial Property Types",
    desc: "Offices, retail, restaurants, hotels, warehouses, medical facilities, HOAs — we've painted them all across Oʻahu. No job too large or complex.",
  },
  {
    icon: "ri-leaf-line",
    title: "Low-VOC Commercial Paints",
    desc: "We use low-VOC, low-odor commercial-grade paints so your staff and customers aren't affected. Safe for occupied spaces during and after application.",
  },
  {
    icon: "ri-time-line",
    title: "On-Time, Every Time",
    desc: "Commercial projects run on tight timelines. Hawaii Painters 808 has a 100% on-time completion record for commercial clients across Honolulu.",
  },
  {
    icon: "ri-award-line",
    title: "1-Year Workmanship Warranty",
    desc: "Every commercial painting project comes with our 1-year workmanship warranty. If it peels or cracks due to our work, we come back and fix it — no charge.",
  },
];

export default function CommercialWhySection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Why Hawaii Painters 808
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Commercial Painting Done<br />
            <span className="text-[#4a9fa5]">The Right Way</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Hawaii Painters 808 understands that your business can't stop for a paint job. Here's how we make it seamless.
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
