const reasons = [
  {
    icon: "ri-money-dollar-circle-line",
    title: "Save $10,000–$25,000",
    desc: "New kitchen cabinets in Hawaii cost a fortune. Hawaii Painters 808 delivers a factory-quality finish for a fraction of replacement cost — same stunning result, dramatically lower price.",
  },
  {
    icon: "ri-brush-line",
    title: "Factory-Smooth Finish",
    desc: "We use professional spray equipment and cabinet-grade paints to achieve a smooth, brush-mark-free finish that looks like it came straight from the factory.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Durable Cabinet-Grade Coatings",
    desc: "We use Sherwin-Williams Emerald Urethane — one of the hardest, most durable cabinet paints available. Built to handle daily use, humidity, and Hawaii's heat.",
  },
  {
    icon: "ri-home-4-line",
    title: "Kitchen, Bath & Beyond",
    desc: "We paint kitchen cabinets, bathroom vanities, laundry room cabinets, built-ins, and entertainment centers. Any cabinet in your Oahu home — we can transform it.",
  },
  {
    icon: "ri-time-line",
    title: "Minimal Disruption",
    desc: "We remove all doors and hardware, paint them off-site in our shop, and reinstall. Your kitchen is back to fully functional within days — not weeks like a full replacement.",
  },
  {
    icon: "ri-award-line",
    title: "1-Year Workmanship Warranty",
    desc: "Every cabinet painting project is backed by Hawaii Painters 808's 1-year workmanship warranty. If anything chips or peels due to our work, we return and fix it at no charge. The paint carries its own Sherwin-Williams manufacturer warranty too.",
  },
];

export default function CabinetWhySection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Why Hawaii Painters 808
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Why Paint Your Cabinets<br />
            <span className="text-[#4a9fa5]">Instead of Replace Them?</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            In Hawaii, cabinet replacement is one of the most expensive home upgrades. Hawaii Painters 808 gives you the same fresh look for a fraction of the cost.
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
