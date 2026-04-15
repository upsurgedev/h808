

interface AreaLink {
  name: string;
  region: string;
  href: string;
  icon: string;
  blurb: string;
}

const ALL_AREAS: AreaLink[] = [
  {
    name: "Honolulu",
    region: "South Oahu",
    href: "/painters-honolulu-hi",
    icon: "ri-building-2-line",
    blurb: "Waikiki, Manoa, Kaimuki & all of Honolulu",
  },
  {
    name: "Hawaii Kai",
    region: "East Oahu",
    href: "/painters-hawaii-kai-hi",
    icon: "ri-sailboat-line",
    blurb: "Portlock, Aina Haina, Mariners Ridge & east Oahu",
  },
  {
    name: "Kahala",
    region: "East Honolulu",
    href: "/painters-kahala-diamond-head-hi",
    icon: "ri-ancient-gate-line",
    blurb: "Kahala, Diamond Head, Black Point & Waialae Iki",
  },
  {
    name: "Kailua",
    region: "Windward Oahu",
    href: "/painters-kailua-hi",
    icon: "ri-water-flash-line",
    blurb: "Lanikai, Enchanted Lake & windward coast",
  },
  {
    name: "Kaneohe",
    region: "Windward Oahu",
    href: "/painters-kaneohe-hi",
    icon: "ri-plant-line",
    blurb: "Haiku, Ahuimanu & the Ko'olau valley",
  },
  {
    name: "Pearl City",
    region: "Central Oahu",
    href: "/painters-pearl-city-hi",
    icon: "ri-home-3-line",
    blurb: "Aiea, Halawa, Waimalu & central Oahu",
  },
  {
    name: "Kapolei",
    region: "West Oahu",
    href: "/painters-kapolei-hi",
    icon: "ri-sun-line",
    blurb: "Ko Olina, Makakilo & west Oahu",
  },
  {
    name: "Ewa Beach",
    region: "West Oahu",
    href: "/painters-ewa-beach-hi",
    icon: "ri-anchor-line",
    blurb: "Ewa Gentry, Hoakalei & coastal west Oahu",
  },
  {
    name: "North Shore",
    region: "North Oahu",
    href: "/painters-north-shore-hi",
    icon: "ri-water-flash-line",
    blurb: "Haleiwa, Sunset Beach, Waimea & the coast",
  },
  {
    name: "Mililani",
    region: "Central Oahu",
    href: "/painters-mililani-hi",
    icon: "ri-community-line",
    blurb: "Mililani Town, Mauka, Waipio Acres & central Oahu",
  },
  {
    name: "Waipahu",
    region: "Central Oahu",
    href: "/painters-waipahu-hi",
    icon: "ri-map-pin-2-line",
    blurb: "Waipahu Town, Village Park, Royal Kunia & Waikele",
  },
];

interface NearbyAreasProps {
  /** The current city name — this one will be excluded from the list */
  currentCity: string;
}

export default function NearbyAreas({ currentCity }: NearbyAreasProps) {
  const others = ALL_AREAS.filter((a) => a.name !== currentCity);

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-7 bg-[#4a9fa5] rounded-full flex-shrink-0"></div>
            <div>
              <h2 className="text-[#1a1a1a] font-black text-xl md:text-2xl leading-tight">
                Also Serving Nearby Areas
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">
                Hawaii Painters 808 covers all of Oʻahu — same crew, same standards, same 1-year workmanship warranty.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {others.map((area) => (
              <a
                key={area.name}
                href={area.href}
                className="group flex flex-col gap-2 bg-[#f5f5f5] hover:bg-[#4a9fa5]/8 border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-4 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#4a9fa5]/15 group-hover:bg-[#4a9fa5]/25 rounded-full flex-shrink-0 transition-colors">
                    <i className={`${area.icon} text-[#4a9fa5] text-sm`}></i>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a] font-black text-sm leading-tight">{area.name}</div>
                    <div className="text-gray-400 text-xs">{area.region}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{area.blurb}</p>
                <div className="flex items-center gap-1 text-[#4a9fa5] font-bold text-xs group-hover:gap-1.5 transition-all mt-auto">
                  View page <i className="ri-arrow-right-line text-xs"></i>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f5f5f5] border border-gray-200 rounded-xl px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                <i className="ri-map-2-line text-white text-sm"></i>
              </div>
              <div>
                <div className="text-[#1a1a1a] font-black text-sm">Don't see your neighborhood?</div>
                <div className="text-gray-500 text-xs">If it's on Oahu, we'll come to you. Call for a same-day estimate.</div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:8082723816"
                className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-xs px-4 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i>
                808-272-3816
              </a>
              <a
                href="/service-areas"
                className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white font-black text-xs px-4 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-map-pin-2-line"></i>
                All Areas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
