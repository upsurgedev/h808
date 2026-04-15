const cards = [
  {
    icon: "ri-drop-fill",
    title: "Humidity and Moisture",
    body: "High humidity causes bubbling and mold when the wrong products go up. After 30+ years painting in Hawaii, I use Sherwin-Williams Duration — it holds up in these conditions and I know exactly when conditions are right to apply it. That's the difference.",
  },
  {
    icon: "ri-tornado-fill",
    title: "Salt Air",
    body: "I've painted homes in Hawaii Kai, Kahala, and Kailua for years. Salt air destroys standard paint fast. After 30+ years on Oahu, I use Sherwin-Williams Duration because it's built for coastal conditions — not whatever's cheapest.",
  },
  {
    icon: "ri-sun-fill",
    title: "UV Intensity",
    body: "Hawaiian sun fades color faster than almost anywhere else. After 30+ years painting on Oahu, I use Sherwin-Williams Duration because it holds its color far longer than standard paints. Your walls should still look good five years from now.",
  },
];

export default function HnlWhyHawaii() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="w-full px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-4">
            Why Interior Painting in Hawaii<br className="hidden md:block" /> Requires a Local Expert
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            I've worked in these conditions my whole career. A painter who doesn't know Hawaii will cost you more in the long run.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-[#4a9fa5]/10 rounded-xl mb-5">
                <i className={`${card.icon} text-[#4a9fa5] text-2xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-lg mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
