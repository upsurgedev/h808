const reviews = [
  {
    stars: 5,
    quote: "Hawaii Painters 808 painted our entire Honolulu office over a long weekend. Monday morning we walked in to a completely transformed space — zero disruption to our team. Absolutely professional.",
    name: "Michael T.",
    location: "Downtown Honolulu",
    service: "Office Interior",
  },
  {
    stars: 5,
    quote: "We needed our restaurant repainted between closing and reopening after a renovation. Lopaka's crew worked through the night and finished on time. The dining room looks incredible.",
    name: "Keiko & James L.",
    location: "Waikiki, Honolulu",
    service: "Restaurant Interior",
  },
  {
    stars: 5,
    quote: "Our retail storefront was looking tired. Hawaii Painters 808 refreshed the exterior and interior in 2 days. Customer foot traffic increased noticeably after — the fresh look makes a real difference.",
    name: "Sandra M.",
    location: "Kailua, Oahu",
    service: "Retail Storefront",
  },
  {
    stars: 5,
    quote: "We manage 12 commercial properties on Oahu. Hawaii Painters 808 is our go-to for all of them. Consistent quality, fair pricing, and they always work around our tenants' schedules.",
    name: "David K.",
    location: "Honolulu, Oahu",
    service: "Commercial Property Management",
  },
  {
    stars: 5,
    quote: "Our medical office needed a fresh, clean look. Hawaii Painters 808 used low-VOC paints and worked after hours so patients were never affected. The result is bright, professional, and spotless.",
    name: "Dr. Alana P.",
    location: "Ala Moana, Honolulu",
    service: "Medical Office",
  },
  {
    stars: 5,
    quote: "Best commercial painters on Oahu. They understand that time is money for businesses. On schedule, on budget, and the quality is outstanding. Hawaii Painters 808 is the only call I make.",
    name: "Robert N.",
    location: "Kapolei, Oahu",
    service: "Warehouse Exterior",
  },
];

export default function CommercialTestimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Real Reviews
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            What Oahu Businesses<br />
            <span className="text-[#4a9fa5]">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Hawaii Painters 808 has served hundreds of Oʻahu businesses. Here's what they have to say.
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
