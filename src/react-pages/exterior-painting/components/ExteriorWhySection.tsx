const steps = [
  {
    number: "01",
    icon: "ri-calendar-check-line",
    title: "Free Consultation",
    desc: "We inspect your exterior surfaces, identify problem areas, and give you a detailed written estimate. We tell you exactly what needs to be done and why.",
  },
  {
    number: "02",
    icon: "ri-tools-line",
    title: "Surface Preparation",
    desc: "Power wash, scrape, sand, caulk gaps, and prime bare spots. On Hawaii exteriors, prep is everything — salt air and moisture get into every crack.",
  },
  {
    number: "03",
    icon: "ri-paint-brush-line",
    title: "Expert Application",
    desc: "Two full coats of Sherwin-Williams Duration — a premium exterior paint we've trusted for 30+ years in Hawaii's conditions. Not whatever's cheapest at the hardware store.",
  },
  {
    number: "04",
    icon: "ri-checkbox-circle-line",
    title: "Final Walkthrough",
    desc: "We walk the entire exterior with you before we leave. Every edge, every surface. Touch-ups on the spot. Done when you say it's done.",
  },
];

export default function ExteriorWhySection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Our Process</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">How We Work</h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">Every exterior painting job follows the same proven process — no shortcuts, no surprises.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-7 hover:-translate-y-1 transition-all group">
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gray-300 z-10"></div>}
              <div className="w-14 h-14 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-5 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${step.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-[#4a9fa5] font-black text-xs tracking-widest mb-2 uppercase">Step {step.number}</div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase leading-snug mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}