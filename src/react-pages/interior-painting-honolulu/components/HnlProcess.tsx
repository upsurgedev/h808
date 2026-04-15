const steps = [
  { num: "01", title: "Free Consultation", desc: "I come to your home, look at the job myself, and give you a straight estimate. No charge. No pressure." },
  { num: "02", title: "Surface Prep", desc: "We patch, sand, prime, and protect your floors and furniture. The prep is where the job is won or lost. We don't skip it." },
  { num: "03", title: "Paint Application", desc: "Two full coats. Professional equipment. I don't let my crew cut corners on coverage — not on my watch." },
  { num: "04", title: "Daily Cleanup", desc: "Your home stays livable while we work. We clean up every day before we leave. That's just respect." },
  { num: "05", title: "Final Walkthrough", desc: "We walk every room together before I consider the job done. Touch-ups happen on the spot. You say it's right — then we're done." },
];

export default function HnlProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">How Our Interior Painting Process Works</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">Simple. Honest. No surprises. This is how I run every job.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px bg-[#4a9fa5]/30 z-0"></div>
              )}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 flex-shrink-0">
                <span className="text-white font-black text-lg">{step.num}</span>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
