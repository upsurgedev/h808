import { useState } from "react";

const faqs = [
  {
    q: "Can Hawaii Painters 808 work after hours to avoid disrupting my business?",
    a: "Absolutely. After-hours and weekend scheduling is standard for our commercial clients. We coordinate with your operations team to find the least disruptive schedule — nights, weekends, or holidays.",
  },
  {
    q: "How long does a typical commercial painting project take?",
    a: "It depends on the size and scope. A single office suite typically takes 1–3 nights. A full commercial building can take 1–2 weeks. Hawaii Painters 808 will give you a precise timeline in your free estimate.",
  },
  {
    q: "What types of commercial properties does Hawaii Painters 808 paint?",
    a: "We paint offices, retail stores, restaurants, hotels, warehouses, medical facilities, schools, HOA common areas, and more. If it's a commercial property on Oahu, we've likely painted it.",
  },
  {
    q: "Do you use low-VOC paints for occupied commercial spaces?",
    a: "Yes. We use low-VOC, low-odor commercial-grade paints on all occupied spaces. Your staff and customers won't be affected during or after application.",
  },
  {
    q: "Is Hawaii Painters 808 insured for commercial work?",
    a: "Yes — we carry full commercial general liability insurance and workers' compensation. Your property and business are fully protected. We can provide certificates of insurance upon request.",
  },
  {
    q: "Can you handle large commercial projects across multiple locations?",
    a: "Yes. Hawaii Painters 808 works with property management companies and multi-location businesses across Oahu. We can coordinate simultaneous projects and provide consistent results across all locations.",
  },
  {
    q: "Do you provide a warranty on commercial painting work?",
    a: "Yes — every commercial project comes with our 1-year workmanship warranty. If any painted surface shows peeling or cracking due to our work within that year, we return and repaint it at no charge. Sherwin-Williams Duration also carries its own manufacturer warranty on the paint.",
  },
  {
    q: "How do I get a commercial painting estimate from Hawaii Painters 808?",
    a: "Call us at (808) 272-3816 or fill out our online form. Lopaka will schedule a site visit, assess your property, and deliver a detailed written estimate within 24 hours — completely free, no obligation.",
  },
];

export default function CommercialFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            FAQ
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Commercial Painting<br />
            <span className="text-[#4a9fa5]">Questions Answered</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-md mx-auto">
            Common questions about Hawaii Painters 808's commercial painting service on Oʻahu.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[#1a1a1a] font-black text-sm pr-4">{item.q}</span>
                <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-colors ${open === i ? "bg-[#4a9fa5]" : "bg-gray-100"}`}>
                  <i className={`${open === i ? "ri-subtract-line text-white" : "ri-add-line text-gray-500"} text-sm`}></i>
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
