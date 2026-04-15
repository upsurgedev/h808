const trustItems = [
  { icon: "ri-shield-check-fill", label: "Licensed & Insured" },
  { icon: "ri-price-tag-3-line", label: "Free Estimates" },
  { icon: "ri-map-pin-2-fill", label: "Oʻahu-Based Team" },
  { icon: "ri-thumb-up-fill", label: "Satisfaction Guaranteed" },
];

export default function HnlTrustBar() {
  return (
    <section className="bg-[#1a1a1a] py-4">
      <div className="w-full px-6 md:px-16">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white text-sm font-bold whitespace-nowrap">
              <div className="w-6 h-6 flex items-center justify-center text-[#4a9fa5]">
                <i className={`${item.icon} text-base`}></i>
              </div>
              <span className="text-white/90">✓ {item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
