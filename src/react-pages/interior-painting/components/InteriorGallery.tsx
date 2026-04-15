const rooms = [
  {
    icon: "ri-sofa-line",
    label: "Living Rooms",
    desc: "Open concept spaces, accent walls, trim work. We protect your furniture and keep your home livable while we work.",
  },
  {
    icon: "ri-hotel-bed-line",
    label: "Bedrooms",
    desc: "Master suites, guest rooms, kids' rooms. Low-VOC paints mean the room is safe to sleep in by night.",
  },
  {
    icon: "ri-restaurant-line",
    label: "Kitchens",
    desc: "Walls, ceilings, cabinets. We work around your appliances and keep food prep areas clean.",
  },
  {
    icon: "ri-drop-line",
    label: "Bathrooms",
    desc: "After 30+ years painting in Hawaii, I use Sherwin-Williams Duration because it holds up in high-humidity spaces. Proper ventilation and prep are key.",
  },
  {
    icon: "ri-stairs-line",
    label: "Hallways & Staircases",
    desc: "High-traffic areas that need durable finishes. We sand, prime, and protect railings and trim.",
  },
  {
    icon: "ri-computer-line",
    label: "Home Offices",
    desc: "Clean, distraction-free work. We schedule around your meetings and video calls.",
  },
];

export default function InteriorGallery() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
            Rooms We Paint
          </div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
            Every Room In Your Home
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            From high-traffic hallways to quiet bedrooms — we paint every interior space with the same care and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.label}
              className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${room.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">
                {room.label}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {room.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}