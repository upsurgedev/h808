

const related = [
  {
    icon: "ri-building-line",
    title: "Exterior Painting",
    desc: "Salt air, UV rays, trade winds — Oahu's climate is brutal on exterior paint. We use coatings built to last in Hawaii's conditions.",
    slug: "exterior-painting",
  },
  {
    icon: "ri-community-line",
    title: "Residential Painting",
    desc: "Full home painting inside and out. Your ʻohana's home deserves the same care and respect we'd give our own.",
    slug: "residential-painting",
  },
  {
    icon: "ri-store-2-line",
    title: "Commercial Painting",
    desc: "Offices, retail, restaurants across Honolulu. We work around your business hours — minimal disruption, professional results.",
    slug: "commercial-painting",
  },
  {
    icon: "ri-layout-grid-line",
    title: "Cabinet Painting",
    desc: "New cabinets in Hawaii are expensive. A professional cabinet paint job looks brand new for a fraction of replacement cost.",
    slug: "cabinet-painting",
  },
  {
    icon: "ri-tools-line",
    title: "Drywall Repair",
    desc: "Holes, cracks, water damage, popcorn ceiling removal. We fix it right before a single drop of paint goes on.",
    slug: "drywall",
  },
];

export default function InteriorRelatedServices() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            More Services
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Related Services
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Hawaii Painters 808 handles more than just interior walls. Here's everything else we do across Oʻahu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all cursor-pointer block"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${service.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className="flex items-center gap-1 text-[#4a9fa5] font-bold text-sm group-hover:gap-2 transition-all">
                Learn More <i className="ri-arrow-right-line"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}