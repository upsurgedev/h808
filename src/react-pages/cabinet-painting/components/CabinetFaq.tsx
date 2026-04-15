import { useState } from "react";

const faqs = [
  {
    q: "How much does cabinet painting cost compared to replacement?",
    a: "New kitchen cabinets in Hawaii typically cost $10,000–$30,000+. Hawaii Painters 808 can paint most kitchens for a fraction of that — delivering the same fresh, updated look without the massive expense.",
  },
  {
    q: "How long does cabinet painting take?",
    a: "Most kitchen cabinet jobs take 3–5 days from start to finish. Day 1: removal and prep. Days 2–3: painting doors off-site and boxes on-site. Day 4–5: reinstallation and touch-ups. Your kitchen is fully functional throughout.",
  },
  {
    q: "What paint does Hawaii Painters 808 use on cabinets?",
    a: "We use Sherwin-Williams Emerald Urethane Trim Enamel — one of the hardest, most durable cabinet paints available. It's specifically formulated for cabinets and holds up to daily use, humidity, and Hawaii's heat.",
  },
  {
    q: "Will the paint hold up in Hawaii's humidity?",
    a: "Yes — we use cabinet-grade paints specifically formulated for high-humidity environments. Proper surface prep, bonding primer, and the right topcoat are what make the difference. Hawaii Painters 808 has been doing this in Hawaii for 30+ years.",
  },
  {
    q: "Can all cabinets be painted, or are some not suitable?",
    a: "Most wood, MDF, and plywood cabinets are excellent candidates for painting. Thermofoil and laminate cabinets can sometimes be painted but require special prep. Lopaka will inspect your cabinets during the free estimate and give you an honest assessment.",
  },
  {
    q: "Do I need to empty my cabinets before you start?",
    a: "Yes — please empty all cabinets and drawers before we arrive. This protects your belongings and allows us to work efficiently. We handle all door removal, hardware removal, and reinstallation.",
  },
  {
    q: "What colors are available for cabinet painting?",
    a: "Any color you want. We work with the full Sherwin-Williams color library — thousands of options. Hawaii Painters 808 also offers a free color consultation to help you choose the perfect shade for your kitchen.",
  },
  {
    q: "Is there a warranty on cabinet painting?",
    a: "Yes — every cabinet painting project comes with Hawaii Painters 808's 1-year workmanship warranty. If any surface chips or peels due to our work within that year, we return and fix it at no charge. The Sherwin-Williams Emerald Urethane paint also carries its own manufacturer warranty.",
  },
];

export default function CabinetFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            FAQ
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Cabinet Painting<br />
            <span className="text-[#4a9fa5]">Questions Answered</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-md mx-auto">
            Common questions about Hawaii Painters 808's cabinet painting service on Oʻahu.
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
