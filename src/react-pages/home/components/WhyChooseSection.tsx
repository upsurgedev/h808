import { comparisonFeatures } from "@/mocks/data";

export default function WhyChooseSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Why Choose Us</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">Hawaii Painters 808 vs.<br />The Other Guys</h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">I've seen what happens when the wrong painter takes a job in Hawaii. The paint bubbles. The mold comes back. The warranty disappears. That's not how I work.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-[#1a1a1a] text-white">
            <div className="p-4 font-black text-sm uppercase tracking-wider">Feature</div>
            <div className="p-4 font-black text-sm uppercase tracking-wider text-center border-l border-white/20">Typical Painter</div>
            <div className="p-4 font-black text-sm uppercase tracking-wider text-center border-l border-white/20 text-[#4a9fa5]">Hawaii Painters 808</div>
          </div>
          {comparisonFeatures.map((row, index) => (
            <div key={row.feature} className={`grid grid-cols-3 border-t border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"}`}>
              <div className="p-4 font-bold text-[#1a1a1a] text-sm">{row.feature}</div>
              <div className="p-4 text-gray-400 text-sm text-center border-l border-gray-100 flex items-center justify-center gap-1"><i className="ri-close-circle-line text-red-400"></i>{row.typical}</div>
              <div className="p-4 text-[#1a1a1a] text-sm text-center border-l border-gray-100 flex items-center justify-center gap-1 font-semibold"><i className="ri-checkbox-circle-fill text-[#4a9fa5]"></i>{row.us}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
            GET YOUR FREE ESTIMATE <i className="ri-arrow-right-line"></i>
          </a>
          <p className="text-gray-400 text-sm mt-4">I come to you. No charge. No obligation.</p>
        </div>
      </div>
    </section>
  );
}
