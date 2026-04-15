import { useState } from "react";

const faqs = [
  { q: "How long does an exterior paint job last in Hawaii?", a: "With proper prep and Sherwin-Williams Duration, a Hawaii Painters 808 exterior job typically lasts 7–10 years. Homes near the coast may need touch-ups sooner due to salt air. After 30+ years painting on Oahu, I know which products and prep methods make the biggest difference." },
  { q: "What's the best time of year to paint an exterior on Oahu?", a: "Hawaii Painters 808 paints year-round. We monitor weather closely and schedule around rain. The drier months (May–September) are ideal, but we work efficiently in any season." },
  { q: "Do you power wash before painting?", a: "Always. Power washing removes salt deposits, mold, mildew, and loose paint — all of which cause new paint to fail if left behind. It's the first step on every exterior job." },
  { q: "What paint do you use for Hawaii exteriors?", a: "We use Sherwin-Williams Duration — a premium exterior paint I've trusted for decades in Hawaii's conditions. It's built to handle the UV intensity, humidity, and salt air that wear down standard paints fast." },
  { q: "Can you paint stucco and concrete block homes?", a: "Yes — stucco and concrete block are the most common exterior surfaces on Oahu. We use the right Sherwin-Williams products and primers for these surfaces. Proper prep is critical to a long-lasting result." },
  { q: "Do you repair cracks and damage before painting?", a: "Yes. Caulking gaps, filling cracks, and spot-priming bare areas are included in every exterior job. Painting over damage without fixing it first is a waste of everyone's time and money." },
];

export default function ExteriorFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">FAQ</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Exterior Painting<br /><span className="text-[#4a9fa5]">Questions Answered</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-md mx-auto">Common questions about Hawaii Painters 808's exterior painting service on Oʻahu.</p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-[#1a1a1a] font-black text-sm pr-4">{item.q}</span>
                <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-colors ${open === i ? "bg-[#4a9fa5]" : "bg-gray-100"}`}>
                  <i className={`${open === i ? "ri-subtract-line text-white" : "ri-add-line text-gray-500"} text-sm`}></i>
                </div>
              </button>
              {open === i && <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}