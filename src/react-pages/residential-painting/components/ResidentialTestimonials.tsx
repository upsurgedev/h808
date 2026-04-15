const reviews = [
  {
    stars: 5,
    quote: "Hawaii Painters 808 painted our entire Kailua home — inside and out — before we moved in. Lopaka's crew was respectful, fast, and the quality is outstanding. Our house looks brand new.",
    name: "Malia & Jason T.",
    location: "Kailua, Oahu",
    service: "Full Home Interior & Exterior",
  },
  {
    stars: 5,
    quote: "We needed our Manoa home refreshed before listing it. Hawaii Painters 808 turned it around in 5 days and it sold above asking price. The realtor said the paint job made a huge difference.",
    name: "Christine L.",
    location: "Manoa, Honolulu",
    service: "Pre-Sale Home Painting",
  },
  {
    stars: 5,
    quote: "Lopaka personally walked through our home and gave us honest advice on what needed painting and what didn't. That kind of integrity is rare. The work itself was flawless.",
    name: "David K.",
    location: "Kaneohe, Oahu",
    service: "Residential Interior",
  },
  {
    stars: 5,
    quote: "Our rental property in Waipahu needed a full refresh between tenants. Hawaii Painters 808 completed it in 4 days and it looks brand new. Tenants moved in and immediately commented on how fresh it felt.",
    name: "Robert N.",
    location: "Waipahu, Oahu",
    service: "Rental Property Painting",
  },
  {
    stars: 5,
    quote: "Best residential painters on Oahu. Fair price, incredible quality, and they stand behind their work. Had a small touch-up needed 8 months later and they came back same week, no charge.",
    name: "Jennifer M.",
    location: "Pearl City, Oahu",
    service: "Full Home Painting",
  },
  {
    stars: 5,
    quote: "Hawaii Painters 808 helped us pick colors for our entire home — not just paint it. The free color consultation was worth it alone. Every room flows perfectly together now.",
    name: "Alana P.",
    location: "Kapolei, Oahu",
    service: "Color Consultation + Painting",
  },
];

export default function ResidentialTestimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Real Reviews
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            What Oahu Homeowners<br />
            <span className="text-[#4a9fa5]">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Hawaii Painters 808 has served hundreds of Oʻahu families. Here's what they have to say.
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
