import { useState } from "react";

const faqs = [
  {
    q: "How long does interior painting take for a typical Oahu home?",
    a: "Most single rooms take 1–2 days including prep and two coats. A full 3-bedroom home typically takes 4–6 days. Hawaii Painters 808 will give you a precise timeline in your free estimate.",
  },
  {
    q: "Do I need to move my furniture before you arrive?",
    a: "No — we handle all furniture moving and protection. Just remove small personal items, valuables, and wall decorations. We cover everything with drop cloths and move larger pieces as needed.",
  },
  {
    q: "What paint brands does Hawaii Painters 808 use?",
    a: "We use Sherwin-Williams Duration — a premium paint I've trusted for 30+ years in Hawaii's conditions. It holds up in Hawaii's humidity and is available in thousands of colors.",
  },
  {
    q: "Is mold-resistant paint really necessary in Hawaii?",
    a: "Absolutely. Hawaii's humidity — especially in bathrooms, kitchens, and north-facing rooms — creates perfect conditions for mold growth. After 30+ years painting on Oahu, I know that Sherwin-Williams Duration with the right primer prevents this. Standard paint will show mold within 1–2 years.",
  },
  {
    q: "Does Hawaii Painters 808 repair drywall before painting?",
    a: "Yes — minor drywall repairs, nail holes, hairline cracks, and surface imperfections are included in every interior painting project at no extra charge. Major structural repairs are quoted separately.",
  },
  {
    q: "Can I stay in my home while you paint?",
    a: "Yes. We use low-VOC paints that are safe for occupancy. We work room by room so you can continue using most of your home. We'll coordinate with you on the best schedule.",
  },
  {
    q: "How do I choose the right color for my interior?",
    a: "Hawaii Painters 808 offers a free color consultation with every project. Lopaka's team will bring paint chips, discuss your lighting, furniture, and style preferences, and help you narrow down the perfect palette before we start.",
  },
  {
    q: "What's included in the workmanship warranty?",
    a: "Every project comes with a 1-year workmanship warranty. If any painted surface shows peeling, cracking, or bubbling due to our workmanship within that year, Hawaii Painters 808 returns and repaints it at no charge. This covers application defects — not damage from water leaks or physical impact. Sherwin-Williams Duration also carries its own manufacturer warranty on the paint itself.",
  },
];

export default function InteriorFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            FAQ
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Interior Painting<br />
            <span className="text-[#4a9fa5]">Questions Answered</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-md mx-auto">
            Common questions about Hawaii Painters 808's interior painting service on Oʻahu.
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