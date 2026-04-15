

const neighborhoods = [
  { label: "Kahala", href: "/painters-in-kahala" },
  { label: "Kaimuki", href: "/painters-in-kaimuki" },
  { label: "Manoa", href: "/painters-in-manoa" },
  { label: "Nuuanu", href: "/painters-in-nuuanu" },
  { label: "Makiki", href: "/painters-in-makiki" },
  { label: "Hawaii Kai", href: "/painters-in-hawaii-kai" },
  { label: "Kailua", href: "/painters-in-kailua-oahu" },
  { label: "Kaneohe", href: "/painters-in-kaneohe" },
  { label: "Pearl City", href: "/painters-in-pearl-city" },
  { label: "Kapolei", href: "/painters-in-kapolei" },
  { label: "Ewa Beach", href: "/painters-in-ewa-beach" },
  { label: "Downtown Honolulu", href: "/painters-in-downtown-honolulu" },
];

export default function HnlNeighborhoods() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="w-full px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
            Interior Painters Serving All of Oʻahu
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            I've worked in neighborhoods all across this island. Wherever you are on Oʻahu, I'll come to you.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#4a9fa5] hover:bg-[#4a9fa5]/5 text-[#1a1a1a] font-semibold text-sm px-4 py-3 rounded-full transition-all cursor-pointer text-center whitespace-nowrap"
            >
              <i className="ri-map-pin-line text-[#4a9fa5] text-xs"></i>
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
