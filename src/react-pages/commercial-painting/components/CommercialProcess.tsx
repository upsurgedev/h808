const steps = [
  {
    num: "01",
    title: "Site Walk & Free Estimate",
    desc: "Lopaka visits your commercial property, assesses all surfaces, discusses your timeline and scheduling needs, and delivers a detailed written estimate within 24 hours.",
  },
  {
    num: "02",
    title: "Schedule Around Your Business",
    desc: "We coordinate with your operations team to schedule work during off-hours, nights, or weekends. Your business stays open — we work around you.",
  },
  {
    num: "03",
    title: "Surface Prep & Protection",
    desc: "We mask all fixtures, furniture, floors, and equipment. Surfaces are cleaned, sanded, and primed. Proper prep is what separates a 2-year paint job from a 10-year one.",
  },
  {
    num: "04",
    title: "Commercial-Grade Application",
    desc: "Hawaii Painters 808 applies commercial-grade, low-VOC coatings using professional spray, roll, and brush techniques. Two coats minimum on all surfaces.",
  },
  {
    num: "05",
    title: "Inspection & Touch-Ups",
    desc: "We do a full walkthrough with you before calling the job complete. Any touch-ups are handled immediately — we don't leave until you're 100% satisfied.",
  },
  {
    num: "06",
    title: "1-Year Warranty",
    desc: "Every commercial project is backed by Hawaii Painters 808's 1-year workmanship warranty. If anything peels or cracks due to our work, we return and fix it at no charge.",
  },
];

export default function CommercialProcess() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Our Process
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            How Hawaii Painters 808<br />
            <span className="text-[#4a9fa5]">Handles Commercial Jobs</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            A proven 6-step process built around your business schedule — minimal disruption, maximum results.
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
