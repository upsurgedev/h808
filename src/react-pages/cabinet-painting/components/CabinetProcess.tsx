const steps = [
  {
    num: "01",
    title: "Free In-Home Estimate",
    desc: "Lopaka visits your home, inspects all cabinets, discusses your color goals, and delivers a detailed written estimate within 24 hours — completely free, no obligation.",
  },
  {
    num: "02",
    title: "Color Selection",
    desc: "We bring paint chips and help you choose the perfect color. Whether you want crisp white, bold navy, warm sage, or anything in between — Hawaii Painters 808 guides you to the right choice.",
  },
  {
    num: "03",
    title: "Door & Hardware Removal",
    desc: "We carefully remove all cabinet doors, drawers, and hardware. Everything is labeled and organized so reinstallation is perfect. Your kitchen stays functional throughout.",
  },
  {
    num: "04",
    title: "Surface Prep & Priming",
    desc: "All surfaces are cleaned, degreased, sanded, and primed with a bonding primer. This is the most critical step — proper prep is what makes the finish last for years.",
  },
  {
    num: "05",
    title: "Professional Spray Application",
    desc: "Doors are sprayed off-site in our shop for a flawless, brush-mark-free finish. Cabinet boxes are sprayed or rolled on-site. Two coats of cabinet-grade paint minimum.",
  },
  {
    num: "06",
    title: "Reinstall & Final Inspection",
    desc: "All doors, drawers, and hardware are reinstalled. We do a full walkthrough with you — any touch-ups are handled immediately. Your kitchen is fully functional same day.",
  },
];

export default function CabinetProcess() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Our Process
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            How Hawaii Painters 808<br />
            <span className="text-[#4a9fa5]">Paints Your Cabinets</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            A proven 6-step process that delivers a factory-smooth finish — every time, on every Oahu cabinet job.
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
