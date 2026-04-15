
const whatWePaint = [
  "Living rooms, bedrooms, and common areas",
  "Ceilings — flat, textured, vaulted",
  "Trim, baseboards, crown molding, and door frames",
  "Interior doors",
  "Kitchens and bathrooms with Sherwin-Williams Duration",
  "Home offices and hallways",
];

const sheenGuide = [
  { sheen: "Flat / Matte", use: "Ceilings and low-traffic areas", icon: "ri-contrast-2-line" },
  { sheen: "Eggshell", use: "Living rooms and bedrooms — our most common choice", icon: "ri-drop-line" },
  { sheen: "Satin", use: "High-traffic hallways and kids' rooms", icon: "ri-water-flash-line" },
  { sheen: "Semi-Gloss", use: "Trim, doors, bathrooms, and kitchens", icon: "ri-drop-fill" },
];

export default function InteriorProcess() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Main intro */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white font-black text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
            Interior Painting Professionals
          </div>
          <h2 className="text-white font-black italic text-4xl md:text-5xl uppercase leading-tight mb-6">
            Transform Your Home's<br />
            <span className="text-[#4a9fa5]">Interior</span>
          </h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-white/70 text-base leading-relaxed">
              Your walls set the mood for everything that happens inside your home. When they look good, the whole place feels better. When they are scuffed, faded, or dated — you feel it every day.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              I have been painting interiors on Oʻahu for over 30 years. I know what works here and what does not. Hawaii's humidity, salt air, and the way light moves through island homes — these things matter when you are choosing paint and doing the work right.
            </p>
          </div>
        </div>

        {/* Why Hawaii is different */}
        <div className="mb-16 bg-white/5 border border-white/10 rounded-xl p-8 md:p-10">
          <h3 className="text-white font-black italic text-2xl md:text-3xl uppercase mb-5">
            Why Interior Painting in Hawaii Is Different
          </h3>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              Painting a home in Honolulu is not the same as painting on the mainland. Our climate is beautiful — but it is hard on interior surfaces.
            </p>
            <p>
              High indoor humidity causes paint to bubble and peel if the wrong products are used. Older homes in neighborhoods like Nuuanu, Manoa, and Kaimuki have walls that need careful prep before a drop of paint goes on. Salt air finds its way inside near the coast — especially in Hawaii Kai, Kahala, and Kailua — and it breaks down surfaces faster than most people expect.
            </p>
            <p className="text-white font-semibold">
              We account for all of that before we start. That is the difference between a paint job that looks great for two years and one that holds up for ten.
            </p>
          </div>
        </div>

        {/* Two column: What we paint + Sheen guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* What we paint */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-black italic text-2xl uppercase mb-6">What We Paint</h3>
            <p className="text-white/60 text-sm mb-5">We handle all interior painting for homes and condos across Oʻahu:</p>
            <ul className="space-y-3">
              {whatWePaint.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-[#4a9fa5] text-base"></i>
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-xs mt-5 leading-relaxed">
              No job is too small. If one room needs refreshing, we can do that. If the whole house needs a repaint, we can do that too.
            </p>
          </div>

          {/* Sheen guide */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-black italic text-2xl uppercase mb-6">Choosing the Right Paint</h3>
            <p className="text-white/60 text-sm mb-5">Paint sheen matters more than most people realize — especially in Hawaii's climate.</p>
            <div className="space-y-4">
              {sheenGuide.map((item) => (
                <div key={item.sheen} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5]/20 rounded-full flex-shrink-0">
                    <i className={`${item.icon} text-[#4a9fa5] text-base`}></i>
                  </div>
                  <div>
                    <div className="text-white font-black text-sm uppercase">{item.sheen}</div>
                    <div className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.use}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs mt-5 leading-relaxed">
              We use Sherwin-Williams Duration. It's a premium paint that holds up in Hawaii's conditions better than most.
            </p>
          </div>
        </div>

        {/* CTA sign-off */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-5 flex-1">
            {/* Owner photo */}
            <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-[#4a9fa5]">
              <img
                src="/images/lopaka-white-shirt.png?v=e4fa3cfcb2be310e2a22df761df2f2ad"
                alt="Lopaka — Owner, Hawaii Painters 808"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-white font-black italic text-2xl md:text-3xl uppercase mb-3">Ready to Get Started?</h3>
              <p className="text-white/60 text-base leading-relaxed max-w-xl">
                Call me directly at <a href="tel:+18082723816" className="text-[#4a9fa5] font-bold hover:underline">808-272-3816</a>. I will answer, we will talk through your project, and we will set up a free on-site estimate. No pressure. No runaround. Just a straight conversation about what your home needs.
              </p>
              <p className="text-white/40 text-sm mt-3 italic">— Lopaka, Hawaii Painters 808</p>
            </div>
          </div>
          <a
            href="/contact"
            className="flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            <i className="ri-file-list-3-line"></i>
            GET FREE ESTIMATE
          </a>
        </div>

      </div>
    </section>
  );
}