const reviews = [
  {
    stars: 5,
    quote: "We were quoted $22,000 for new kitchen cabinets. Hawaii Painters 808 painted them for a fraction of that and they look absolutely brand new. Everyone who visits thinks we got new cabinets.",
    name: "Keiko T.",
    location: "Kailua, Oahu",
    service: "Kitchen Cabinet Painting",
  },
  {
    stars: 5,
    quote: "Lopaka's crew painted our dated oak cabinets white and it completely transformed our kitchen. The finish is so smooth — no brush marks, no drips. Looks like it came from a factory.",
    name: "David & Sarah M.",
    location: "Manoa, Honolulu",
    service: "Kitchen Cabinets — Oak to White",
  },
  {
    stars: 5,
    quote: "Our bathroom vanity was old and worn. Hawaii Painters 808 painted it navy blue and it looks like a designer piece now. Took 2 days and cost a fraction of replacement. Incredible value.",
    name: "Alana P.",
    location: "Kaneohe, Oahu",
    service: "Bathroom Vanity",
  },
  {
    stars: 5,
    quote: "I was skeptical that paint could look as good as new cabinets. I was completely wrong. Hawaii Painters 808 did an unbelievable job — the finish is perfect and it's held up for over a year.",
    name: "Marcus L.",
    location: "Kapolei, Oahu",
    service: "Kitchen Cabinet Painting",
  },
  {
    stars: 5,
    quote: "Best investment we made in our home. Hawaii Painters 808 painted our kitchen and laundry room cabinets. Both look stunning. The 1-year workmanship warranty gave us total confidence.",
    name: "Jennifer K.",
    location: "Pearl City, Oahu",
    service: "Kitchen & Laundry Cabinets",
  },
  {
    stars: 5,
    quote: "Lopaka was honest about what would and wouldn't work. He inspected our cabinets carefully and confirmed they were great candidates for painting. That honesty alone earned our trust.",
    name: "Robert N.",
    location: "Waipahu, Oahu",
    service: "Kitchen Cabinet Painting",
  },
];

export default function CabinetTestimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Real Reviews
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            What Oahu Homeowners<br />
            <span className="text-[#4a9fa5]">Say About Our Cabinet Work</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Hawaii Painters 808 has transformed hundreds of Oʻahu cabinets. Here's what homeowners say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <i key={j} className="ri-star-fill text-[#4a9fa5] text-sm"></i>
                ))}
              </div>
              <p className="text-[#1a1a1a] text-sm italic leading-relaxed flex-1 mb-5">"{r.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                    <i className="ri-user-fill text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a] font-black text-xs">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.location}</div>
                  </div>
                </div>
                <div className="bg-[#4a9fa5]/10 text-[#4a9fa5] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {r.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
