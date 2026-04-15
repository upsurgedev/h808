const items = [
  { icon: "ri-home-2-line", label: "Single Family Homes", desc: "Full interior and exterior painting for Oahu homes of all sizes. Room by room or the whole house." },
  { icon: "ri-building-4-line", label: "Condos & Townhomes", desc: "Interior painting for condos across Honolulu. We work within HOA guidelines and building rules." },
  { icon: "ri-home-heart-line", label: "Pre-Sale Repaints", desc: "Freshen up before listing. A clean paint job is one of the highest-ROI improvements before selling." },
  { icon: "ri-key-2-line", label: "Rental Properties", desc: "Fast turnarounds between tenants. We get your rental looking fresh and ready quickly." },
  { icon: "ri-refresh-line", label: "Full Home Repaints", desc: "Interior and exterior together — coordinated scheduling so the whole project runs smoothly." },
  { icon: "ri-paint-line", label: "Room-by-Room", desc: "Not ready for the whole house? We do single rooms, accent walls, or any combination you need." },
];

export default function ResidentialGallery() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">What We Cover</div>
          <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">Every Type of Home</h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">From single-family homes to condos to rental properties — Hawaii Painters 808 handles all residential painting across Oʻahu.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.label} className="group bg-[#f5f5f5] border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-4 group-hover:bg-[#3d8a8f] transition-colors">
                <i className={`${item.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-base uppercase mb-2">{item.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}