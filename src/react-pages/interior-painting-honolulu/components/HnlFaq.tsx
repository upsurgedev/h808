import { useState } from "react";

const faqs = [
  {
    q: "How long does interior painting take?",
    a: "Most jobs run one to four days. Depends on the size of the space and how much prep is needed. I'll give you a straight timeline when I come out for the estimate.",
  },
  {
    q: "Do I need to move furniture?",
    a: "Clear out the small stuff — valuables, personal items. We handle the rest. Furniture gets moved and covered before we touch a wall.",
  },
  {
    q: "What paint brands do you use?",
    a: "Sherwin-Williams Duration is my go-to — it's a premium paint line that holds up exceptionally well in Hawaii's climate. If you have a preferred color, I'll match it in Duration.",
  },
  {
    q: "Are you licensed and insured in Hawaii?",
    a: "Yes. Fully licensed and insured statewide. General liability and workers' comp on every job. You're covered.",
  },
];

export default function HnlFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6 md:px-16 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
            Interior Painting FAQs
          </h2>
          <p className="text-gray-500 text-base">
            Questions I hear all the time from Honolulu homeowners. Straight answers.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#f5f5f5] transition-colors"
              >
                <span className="text-[#1a1a1a] font-bold text-base">{faq.q}</span>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 text-[#4a9fa5]">
                  <i className={`${open === idx ? "ri-subtract-line" : "ri-add-line"} text-lg`}></i>
                </div>
              </button>
              {open === idx && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
