import { primaryAreas } from "@/mocks/data";

const FEATURED_IDS = [
  "honolulu",
  "kailua",
  "north-shore",
  "kahala",
  "mililani",
  "waipahu",
];

export default function AreasSection() {
  const featured = primaryAreas.filter((a) => FEATURED_IDS.includes(a.id));
  const rest = primaryAreas.filter(
    (a) => !FEATURED_IDS.includes(a.id) && a.href
  );
  const noPage = primaryAreas.filter(
    (a) => !FEATURED_IDS.includes(a.id) && !a.href
  );

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
          Service Areas
        </div>
        <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
          We Serve All of Oahu
        </h2>
        <p className="text-gray-500 text-base mt-3 max-w-xl">
          I've worked in neighborhoods all across this island for over 30 years. Wherever you are on Oʻahu, I'll come to you.
        </p>
      </div>

      {/* Featured dedicated pages — large cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {featured.map((area) => (
          <a
            key={area.id}
            href={area.href!}
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="group relative bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={area.image}
                alt={`House painting in ${area.name}, Oahu`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
              {/* Full Page badge */}
              <div className="absolute top-3 right-3">
                <span className="flex items-center gap-1 bg-[#4a9fa5] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  <i className="ri-check-line text-[10px]"></i>
                  Full Page
                </span>
              </div>
              <div className="absolute bottom-3 left-4">
                <h3 className="text-white font-black text-lg uppercase leading-tight">{area.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {area.subLocations.slice(0, 5).map((sub) => (
                  <span key={sub} className="text-gray-500 text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                    {sub}
                  </span>
                ))}
                {area.subLocations.length > 5 && (
                  <span className="text-[#4a9fa5] text-xs font-bold px-1">
                    +{area.subLocations.length - 5} more
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[#4a9fa5] font-bold text-sm group-hover:gap-2 transition-all">
                View page <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Other dedicated pages — compact horizontal strip */}
      {rest.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
          {rest.map((area) => (
            <a
              key={area.id}
              href={area.href!}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              className="group bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-4 hover:-translate-y-0.5 transition-all cursor-pointer block"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full flex-shrink-0">
                  <i className="ri-map-pin-2-fill text-[#4a9fa5] text-xs"></i>
                </div>
                <div className="text-[#1a1a1a] font-black text-sm leading-tight">{area.name}</div>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {area.subLocations.slice(0, 2).map((sub) => (
                  <span key={sub} className="text-gray-400 text-[10px] bg-gray-100 px-1.5 py-0.5 rounded-full">
                    {sub}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-[#4a9fa5] font-bold text-xs group-hover:gap-1.5 transition-all">
                View page <i className="ri-arrow-right-line text-[10px]"></i>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Areas without dedicated pages + "all areas" CTA */}
      <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[#1a1a1a] font-black text-sm whitespace-nowrap">Also serving:</span>
          {noPage.map((area) => (
            <div key={area.id} className="flex items-center gap-1.5 text-gray-500 text-sm">
              <i className="ri-map-pin-line text-[#4a9fa5] text-xs"></i>
              {area.name}
            </div>
          ))}
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <i className="ri-map-pin-line text-[#4a9fa5] text-xs"></i>
            &amp; more
          </div>
        </div>
        <a
          href="/service-areas"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#4a9fa5] text-white font-black text-xs px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
        >
          <i className="ri-map-2-line"></i>
          View All 16 Areas
        </a>
      </div>
    </section>
  );
}
