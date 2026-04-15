const reviews = [
  {
    stars: 5,
    quote: "We had our entire Manoa home repainted before listing it for sale. Hawaii Painters 808 did an incredible job — smooth walls, perfect color, and they finished 2 days early. The house sold in 4 days!",
    name: "Keiko T.",
    location: "Manoa, Honolulu",
    service: "Full Home Interior",
  },
  {
    stars: 5,
    quote: "The mold issue in our Kaneohe bathroom was a nightmare. Hawaii Painters 808 treated it properly, primed with mold-resistant primer, and painted it beautifully. Two years later — still perfect. No mold.",
    name: "David & Sarah M.",
    location: "Kaneohe, Oahu",
    service: "Bathroom Interior",
  },
  {
    stars: 5,
    quote: "Lopaka and his crew were so professional. They moved all our furniture, protected everything, and left the house cleaner than when they arrived. The living room looks absolutely stunning.",
    name: "Alana P.",
    location: "Kailua, Oahu",
    service: "Living Room & Bedrooms",
  },
  {
    stars: 5,
    quote: "I was nervous about the color choices but the free consultation from Hawaii Painters 808 was amazing. They helped me pick the perfect palette for our open-plan living area. Everyone who visits asks who painted it.",
    name: "Marcus L.",
    location: "Kapolei, Oahu",
    service: "Open-Plan Interior",
  },
  {
    stars: 5,
    quote: "Best painting company on Oahu, hands down. Fair price, incredible quality, and they stand behind their work. Had a small touch-up needed 6 months later and they came back same week, no charge.",
    name: "Jennifer K.",
    location: "Pearl City, Oahu",
    service: "Full Home Interior",
  },
  {
    stars: 5,
    quote: "Our rental property needed a full interior refresh between tenants. Hawaii Painters 808 turned it around in 3 days and it looks brand new. Tenants moved in and immediately commented on how fresh it felt.",
    name: "Robert N.",
    location: "Waipahu, Oahu",
    service: "Rental Property Interior",
  },
];

export default function InteriorTestimonials() {
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
            Hawaii Painters 808 has served hundreds of Oʻahu homeowners. Here's what they have to say.
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