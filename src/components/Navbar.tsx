import { useState, useEffect } from "react";

const services = [
  { title: "Interior Painting", href: "/services/interior-painting" },
  { title: "Exterior Painting", href: "/services/exterior-painting" },
  { title: "Residential Painting", href: "/services/residential-painting" },
  { title: "Commercial Painting", href: "/services/commercial-painting" },
  { title: "Cabinet Painting", href: "/services/cabinet-painting" },
  { title: "Drywall Repair", href: "/services/drywall" },
];

const areas = [
  { title: "Honolulu", href: "/painters-honolulu-hi" },
  { title: "Hawaii Kai", href: "/painters-hawaii-kai-hi" },
  { title: "Kahala / Diamond Head", href: "/painters-kahala-diamond-head-hi" },
  { title: "Kailua", href: "/painters-kailua-hi" },
  { title: "Kaneohe", href: "/painters-kaneohe-hi" },
  { title: "Pearl City", href: "/painters-pearl-city-hi" },
  { title: "Kapolei", href: "/painters-kapolei-hi" },
  { title: "Ewa Beach", href: "/painters-ewa-beach-hi" },
  { title: "North Shore", href: "/painters-north-shore-hi" },
  { title: "Mililani", href: "/painters-mililani-hi" },
  { title: "Waipahu", href: "/painters-waipahu-hi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileAreas, setMobileAreas] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-[#0097a7] rounded flex items-center justify-center">
            <i className="ri-paint-brush-fill text-white text-sm"></i>
          </div>
          <span className="text-white font-black text-sm tracking-wider uppercase">Hawaii Painters 808</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <a
              href="/services"
              className="flex items-center gap-1 text-white/80 hover:text-white font-black text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              SERVICES <i className="ri-arrow-down-s-line text-sm"></i>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 text-xs font-bold tracking-wide transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas Dropdown */}
          <div className="relative group">
            <a
              href="/service-areas"
              className="flex items-center gap-1 text-white/80 hover:text-white font-black text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              SERVICE AREAS <i className="ri-arrow-down-s-line text-sm"></i>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {areas.map((a) => (
                  <a
                    key={a.href}
                    href={a.href}
                    className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 text-xs font-bold tracking-wide transition-colors"
                  >
                    {a.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/blog" className="text-white/80 hover:text-white font-black text-xs tracking-widest uppercase transition-colors">BLOG</a>
          <a href="/about" className="text-white/80 hover:text-white font-black text-xs tracking-widest uppercase transition-colors">ABOUT</a>
          <a href="/contact" className="text-white/80 hover:text-white font-black text-xs tracking-widest uppercase transition-colors">CONTACT</a>
        </div>

        {/* Phone CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:8082723816"
            className="flex items-center gap-2 bg-[#0097a7] hover:bg-[#007a87] text-white font-black text-xs tracking-wider px-5 py-2.5 rounded-full transition-all whitespace-nowrap"
          >
            <i className="ri-phone-fill"></i>
            808-272-3816
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${mobileOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {/* Services */}
          <button
            className="flex items-center justify-between w-full text-white/80 font-black text-xs tracking-widest uppercase py-3 border-b border-white/10"
            onClick={() => setMobileServices(!mobileServices)}
          >
            SERVICES <i className={`ri-arrow-${mobileServices ? "up" : "down"}-s-line`}></i>
          </button>
          {mobileServices && (
            <div className="pl-4 flex flex-col gap-1 py-2">
              {services.map((s) => (
                <a key={s.href} href={s.href} className="text-white/60 hover:text-white text-xs font-bold py-2 tracking-wide">
                  {s.title}
                </a>
              ))}
            </div>
          )}

          {/* Service Areas */}
          <button
            className="flex items-center justify-between w-full text-white/80 font-black text-xs tracking-widest uppercase py-3 border-b border-white/10"
            onClick={() => setMobileAreas(!mobileAreas)}
          >
            SERVICE AREAS <i className={`ri-arrow-${mobileAreas ? "up" : "down"}-s-line`}></i>
          </button>
          {mobileAreas && (
            <div className="pl-4 flex flex-col gap-1 py-2">
              {areas.map((a) => (
                <a key={a.href} href={a.href} className="text-white/60 hover:text-white text-xs font-bold py-2 tracking-wide">
                  {a.title}
                </a>
              ))}
            </div>
          )}

          <a href="/blog" className="text-white/80 font-black text-xs tracking-widest uppercase py-3 border-b border-white/10">BLOG</a>
          <a href="/about" className="text-white/80 font-black text-xs tracking-widest uppercase py-3 border-b border-white/10">ABOUT</a>
          <a href="/contact" className="text-white/80 font-black text-xs tracking-widest uppercase py-3 border-b border-white/10">CONTACT</a>

          <a
            href="tel:8082723816"
            className="mt-3 flex items-center justify-center gap-2 bg-[#0097a7] text-white font-black text-xs tracking-wider px-5 py-3 rounded-full"
          >
            <i className="ri-phone-fill"></i>
            808-272-3816
          </a>
        </div>
      )}
    </nav>
  );
}
