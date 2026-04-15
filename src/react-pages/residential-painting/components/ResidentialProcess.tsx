const coverageList = ["Single-family homes — interior, exterior, or both","Condos and townhomes across Honolulu","Pre-sale repaints and rental property turnovers","Room-by-room or full home repaints","New construction touch-ups and move-in repaints","Investment properties and vacation rentals"];
const approach = [{ label: "Respectful of Your Home", desc: "We treat your ʻohana's home like our own — clean, careful, on schedule", icon: "ri-home-heart-line" },{ label: "Minimal Disruption", desc: "We work room by room so your family can keep living normally", icon: "ri-time-line" },{ label: "Sherwin-Williams Duration", desc: "A premium paint we've trusted for 30+ years in Hawaii's conditions — right product every time", icon: "ri-shield-check-line" },{ label: "Written Schedule", desc: "You get a timeline upfront. We stick to it.", icon: "ri-calendar-check-line" }];
export default function ResidentialProcess() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white font-black text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">Residential Painting Professionals</div>
          <h2 className="text-white font-black italic text-4xl md:text-5xl uppercase leading-tight mb-6">Your Home Is Where Your<br /><span className="text-[#4a9fa5]">ʻOhana Lives</span></h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-white/70 text-base leading-relaxed">Your home is not just a building. It is where your family eats, sleeps, grows up, and comes back to. When it looks good, everything feels better. When it is faded, peeling, or dated — you feel that too.</p>
            <p className="text-white/70 text-base leading-relaxed">Hawaii Painters 808 has been painting Oahu homes for over 30 years. We understand what Hawaii's climate does to both interior and exterior surfaces — and we use the right products and prep to make the work last.</p>
          </div>
        </div>
        <div className="mb-16 bg-white/5 border border-white/10 rounded-xl p-8 md:p-10">
          <h3 className="text-white font-black italic text-2xl md:text-3xl uppercase mb-5">The ʻOhana Standard</h3>
          <p className="text-white/70 text-base leading-relaxed mb-4">We work in your home while your family is living in it. That means showing up on time, keeping work areas clean every day, protecting your furniture and floors, and communicating clearly about what we are doing and when.</p>
          <p className="text-white font-semibold text-base">No surprises. No mess left behind. No excuses. That is the standard we hold ourselves to on every residential job.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-black italic text-2xl uppercase mb-6">What We Paint</h3>
            <ul className="space-y-3">{coverageList.map((item) => (<li key={item} className="flex items-start gap-3"><div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"><i className="ri-check-line text-[#4a9fa5] text-base"></i></div><span className="text-white/70 text-sm leading-relaxed">{item}</span></li>))}</ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-black italic text-2xl uppercase mb-6">Our Approach</h3>
            <div className="space-y-4">{approach.map((item) => (<div key={item.label} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0"><div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5]/20 rounded-full flex-shrink-0"><i className={`${item.icon} text-[#4a9fa5] text-base`}></i></div><div><div className="text-white font-black text-sm uppercase">{item.label}</div><div className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.desc}</div></div></div>))}</div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-5 flex-1">
            <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-[#4a9fa5]"><img src="/images/lopaka-white-shirt.png?v=e4fa3cfcb2be310e2a22df761df2f2ad" alt="Lopaka — Owner, Hawaii Painters 808" className="w-full h-full object-cover object-top" /></div>
            <div>
              <h3 className="text-white font-black italic text-2xl md:text-3xl uppercase mb-3">Ready to Get Started?</h3>
              <p className="text-white/60 text-base leading-relaxed max-w-xl">Call me at <a href="tel:+18082723816" className="text-[#4a9fa5] font-bold hover:underline">808-272-3816</a>. I will come out personally, walk your home, and give you a straight written estimate. No pressure. No runaround.</p>
              <p className="text-white/40 text-sm mt-3 italic">— Lopaka, Hawaii Painters 808</p>
            </div>
          </div>
          <a href="/contact" className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0"><i className="ri-file-list-3-line"></i>GET FREE ESTIMATE</a>
        </div>
      </div>
    </section>
  );
}