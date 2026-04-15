const spaces = [
  { icon: "ri-building-2-line", label: "Office Buildings", desc: "Corporate offices, suites, and co-working spaces across Honolulu. We work nights and weekends so your team never misses a day." },
  { icon: "ri-store-2-line", label: "Retail Storefronts", desc: "First impressions matter. Clean, fresh paint on your storefront signals professionalism and draws customers in." },
  { icon: "ri-restaurant-2-line", label: "Restaurants & Cafés", desc: "High-humidity, high-traffic environments need the right coatings. We know what holds up in a commercial kitchen." },
  { icon: "ri-hospital-line", label: "Medical & Dental Offices", desc: "Low-VOC, antimicrobial coatings for healthcare environments. Clean, clinical, and compliant." },
  { icon: "ri-hotel-line", label: "Hotels & Hospitality", desc: "From lobbies to guest rooms — we coordinate with your operations team to minimize disruption to guests." },
  { icon: "ri-building-4-line", label: "Warehouses & Industrial", desc: "Epoxy floors, concrete walls, metal surfaces. We handle large-scale industrial painting across Oʻahu." },
];

export default function CommercialGallery() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Commercial Spaces We Paint</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">Every Type of Business</h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">From downtown Honolulu offices to Kailua retail — Hawaii Painters 808 delivers professional results on every commercial job across Oʻahu.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((s) => (
            <div key={s.label} className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${s.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{s.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
