import { useState } from "react";

const faqs = [
  {
    q: "What types of drywall damage does Hawaii Painters 808 repair?",
    a: "We repair nail holes, screw holes, small and large holes, hairline cracks, stress cracks, water damage, mold damage, and damaged corners. We also do popcorn ceiling removal and full skim coating.",
  },
  {
    q: "How do you handle water damage drywall repair in Hawaii?",
    a: "Water damage in Hawaii almost always involves mold risk. We check for moisture behind the wall, treat any mold with appropriate products, replace damaged drywall, and apply stain-blocking primer before patching. We fix the problem — not just the surface.",
  },
  {
    q: "Can you remove popcorn ceilings?",
    a: "Yes — popcorn ceiling removal is one of our most common requests on Oahu. We wet the texture, scrape it clean, skim coat the surface smooth, and leave it paint-ready. The result is a modern, flat ceiling.",
  },
  {
    q: "Will the repaired area be visible after painting?",
    a: "No — when done correctly, drywall repairs are completely invisible after painting. Hawaii Painters 808 feathers compound over a wide area, matches the existing texture exactly, and sands to a seamless blend. We take pride in invisible repairs.",
  },
  {
    q: "Do you include drywall repair with painting projects?",
    a: "Yes — minor repairs (nail holes, small cracks, surface imperfections) are included in every painting project at no extra charge. Major structural repairs are quoted separately. Either way, we never paint over problems.",
  },
  {
    q: "How long does drywall repair take?",
    a: "Small repairs (nail holes, minor cracks) can be done in a few hours. Larger repairs with multiple coats of compound typically take 2–3 days to allow proper drying between coats. Water damage repairs may take longer depending on extent.",
  },
  {
    q: "Can you match existing wall texture?",
    a: "Yes — texture matching is a specialty of Hawaii Painters 808. Whether your walls have smooth, orange peel, knockdown, or custom texture, we match it precisely so the repair blends in completely.",
  },
  {
    q: "Is there a warranty on drywall repair work?",
    a: "Yes — every drywall repair is backed by Hawaii Painters 808's 1-year workmanship warranty. If any repair cracks or fails due to our work within that year, we return and fix it at no charge.",
  },
];

export default function DrywallFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            FAQ
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Drywall Repair<br />
            <span className="text-[#4a9fa5]">Questions Answered</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-md mx-auto">
            Common questions about Hawaii Painters 808's drywall repair service on Oʻahu.
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
