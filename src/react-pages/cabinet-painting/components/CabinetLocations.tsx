
import { primaryAreas } from "@/mocks/data";

export default function CabinetLocations() {
  return (
    <section className="bg-white py-10 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 flex items-center justify-center">
            <i className="ri-map-pin-2-fill text-[#4a9fa5] text-lg"></i>
          </div>
          <span className="text-[#1a1a1a] font-black text-sm uppercase tracking-wider whitespace-nowrap">Serving All of Oʻahu:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {primaryAreas.map((area) => (
            <a key={area.id} href={`/service-areas/${area.slug}`} className="text-gray-500 hover:text-[#4a9fa5] text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer">{area.name}</a>
          ))}
          <span className="text-gray-300 text-sm font-semibold">& more</span>
        </div>
      </div>
    </section>
  );
}
