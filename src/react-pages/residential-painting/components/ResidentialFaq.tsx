import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to paint a full home in Hawaii?",
    a: "A typical 3-bedroom Oahu home takes 5–8 days for interior and exterior combined. Interior-only is usually 4–6 days. Hawaii Painters 808 will give you a precise timeline in your free estimate.",
  },
  {
    q: "Do I need to move out while you paint my home?",
    a: "No — we use low-VOC paints that are safe for occupancy. We work room by room so you can continue using most of your home. We'll coordinate with you on the best schedule to minimize disruption.",
  },
  {
    q: "What paint brands does Hawaii Painters 808 use for residential homes?",
    a: "We use Sherwin-Williams Duration — a premium paint I've trusted for 30+ years in Hawaii's conditions. It holds up in Hawaii's humidity and is available in thousands of colors.",
  },
  {
    q: "Is mold-resistant paint necessary for Hawaii homes?",
    a: "Absolutely. Hawaii's humidity creates perfect conditions for mold growth. After 30+ years painting on Oahu, I know that Sherwin-Williams Duration with the right primer prevents this. Standard paint will show mold within 1–2 years.",
  },
  {
    q: "Does Hawaii Painters 808 handle both interior and exterior in one project?",
    a: "Yes — and we recommend doing both together when possible. It's more efficient, saves you money on mobilization, and ensures a perfectly coordinated color scheme inside and out.",
  },
  {
    q: "Can Hawaii Painters 808 help with color selection?",
    a: "Yes. Every residential project includes a free color consultation. Lopaka's team will bring paint chips, discuss your lighting, furniture, and style preferences, and help you find the perfect palette.",
  },
  {
    q: "Do you paint rental properties and investment homes?",
    a: "Absolutely. We work with many Oahu landlords and investors. We understand the need for fast turnarounds between tenants and use durable, easy-to-clean paints that hold up to rental wear.",
  },
  {
    q: "What's covered under the workmanship warranty?",
    a: "Every project comes with a 1-year workmanship warranty. If any painted surface shows peeling, cracking, or bubbling due to our workmanship within that year, Hawaii Painters 808 returns and repaints it at no charge. This covers application defects — not damage from water leaks or physical impact. Sherwin-Williams Duration also carries its own manufacturer warranty on the paint itself.",
  },
];

export default function ResidentialFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            FAQ
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Residential Painting<br />
            <span className="text-[#4a9fa5]">Questions Answered</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-md mx-auto">
            Common questions about Hawaii Painters 808's residential painting service on Oʻahu.
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
