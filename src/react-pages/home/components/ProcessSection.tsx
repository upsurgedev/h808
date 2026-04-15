import { processSteps } from "@/mocks/data";

export default function ProcessSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Our Proven Process</div>
        <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">How We Paint Your Home</h2>
        <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">Simple. Honest. No surprises. This is how I run every job — whether it's one room or a full exterior repaint.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-0 max-w-5xl mx-auto">
        {processSteps.map((step, index) => (
          <div key={step.number} className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center text-center max-w-xs px-6">
              <div className="w-28 h-28 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-5">
                <span className="text-white font-black text-4xl">{step.number}</span>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-xl uppercase mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
            {index < processSteps.length - 1 && (
              <div className="flex items-center justify-center my-6 lg:my-0 lg:mx-2">
                <div className="hidden lg:flex w-16 h-8 items-center justify-center"><i className="ri-arrow-right-line text-[#4a9fa5] text-3xl"></i></div>
                <div className="lg:hidden flex w-8 h-16 items-center justify-center"><i className="ri-arrow-down-line text-[#4a9fa5] text-3xl"></i></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <a href="/contact" className="inline-flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
          START YOUR PROJECT <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>
  );
}
