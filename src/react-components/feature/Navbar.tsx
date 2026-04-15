import { useState, useEffect, useRef } from "react";


const serviceLinks = [
  { label: "Interior Painting", slug: "interior-painting", icon: "ri-home-4-line" },
  { label: "Exterior Painting", slug: "exterior-painting", icon: "ri-building-line" },
  { label: "Residential Painting", slug: "residential-painting", icon: "ri-community-line" },
  { label: "Commercial Painting", slug: "commercial-painting", icon: "ri-store-2-line" },
  { label: "Cabinet Painting", slug: "cabinet-painting", icon: "ri-layout-grid-line" },
  { label: "Drywall Repair", slug: "drywall", icon: "ri-tools-line" },
];

const areaLinks = [
  { label: "Honolulu", href: "/painters-honolulu-hi", icon: "ri-building-2-line" },
  { label: "Hawaii Kai", href: "/painters-hawaii-kai-hi", icon: "ri-sailboat-line" },
  { label: "Kahala & Diamond Head", href: "/painters-kahala-diamond-head-hi", icon: "ri-ancient-gate-line" },
  { label: "Kailua", href: "/painters-kailua-hi", icon: "ri-water-flash-line" },
  { label: "Kaneohe", href: "/painters-kaneohe-hi", icon: "ri-plant-line" },
  { label: "Pearl City", href: "/painters-pearl-city-hi", icon: "ri-home-3-line" },
  { label: "Kapolei", href: "/painters-kapolei-hi", icon: "ri-sun-line" },
  { label: "Ewa Beach", href: "/painters-ewa-beach-hi", icon: "ri-anchor-line" },
  { label: "North Shore", href: "/painters-north-shore-hi", icon: "ri-landscape-line" },
  { label: "Mililani", href: "/painters-mililani-hi", icon: "ri-map-pin-line" },
  { label: "Waipahu", href: "/painters-waipahu-hi", icon: "ri-community-line" },
];

const otherLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const mobileServiceLinks = serviceLinks.map((s) => ({
  label: s.label.toUpperCase(),
  href: `/services/${s.slug}`,
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const areasDropdownRef = useRef<HTMLDivElement>(null);
  const [pathname, setPathname] = useState(typeof window !== "undefined" ? window.location.pathname : "");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (areasDropdownRef.current && !areasDropdownRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer">
          <img
            src="https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/aa9e51d6-4297-44c6-b03b-1aac53c5a83a_white_logo_808.png?v=3d433baea1af8e310a444c6b98ec62f5"
            alt="Hawaii Painters 808"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-white text-sm font-bold tracking-wider hover:text-[#4a9fa5] transition-colors cursor-pointer whitespace-nowrap"
              onClick={() => { setServicesOpen((v) => !v); setAreasOpen(false); }}
              onMouseEnter={() => { setServicesOpen(true); setAreasOpen(false); }}
            >
              SERVICES
              <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}></i>
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href="/services"
                  className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-[#4a9fa5] hover:bg-white/5 text-xs font-bold tracking-widest uppercase transition-colors border-b border-white/10"
                >
                  <i className="ri-apps-line text-sm"></i>
                  All Services
                </a>
                {serviceLinks.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:text-[#4a9fa5] hover:bg-white/5 text-sm font-semibold transition-colors"
                  >
                    <div className="w-7 h-7 flex items-center justify-center bg-[#4a9fa5]/15 rounded-full flex-shrink-0">
                      <i className={`${s.icon} text-[#4a9fa5] text-xs`}></i>
                    </div>
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Service Areas dropdown */}
          <div className="relative" ref={areasDropdownRef}>
            <button
              className="flex items-center gap-1 text-white text-sm font-bold tracking-wider hover:text-[#4a9fa5] transition-colors cursor-pointer whitespace-nowrap"
              onClick={() => { setAreasOpen((v) => !v); setServicesOpen(false); }}
              onMouseEnter={() => { setAreasOpen(true); setServicesOpen(false); }}
            >
              SERVICE AREAS
              <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`}></i>
            </button>

            {areasOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden"
                onMouseLeave={() => setAreasOpen(false)}
              >
                <a
                  href="/service-areas"
                  className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-[#4a9fa5] hover:bg-white/5 text-xs font-bold tracking-widest uppercase transition-colors border-b border-white/10"
                >
                  <i className="ri-map-2-line text-sm"></i>
                  All Areas
                </a>
                <div className="grid grid-cols-2">
                  {areaLinks.map((a) => (
                    <a
                      key={a.href}
                      href={a.href}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-white hover:text-[#4a9fa5] hover:bg-white/5 text-sm font-semibold transition-colors"
                    >
                      <div className="w-6 h-6 flex items-center justify-center bg-[#4a9fa5]/15 rounded-full flex-shrink-0">
                        <i className={`${a.icon} text-[#4a9fa5] text-xs`}></i>
                      </div>
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other nav links */}
          {otherLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-bold tracking-wider hover:text-[#4a9fa5] transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:8082723816"
          className="hidden md:flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-phone-fill"></i>
          808-272-3816
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <i className={mobileOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {/* Mobile Services accordion */}
          <button
            className="flex items-center justify-between w-full text-white font-bold text-sm tracking-wider hover:text-[#4a9fa5] transition-colors cursor-pointer py-2"
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            SERVICES
            <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}></i>
          </button>

          {mobileServicesOpen && (
            <div className="flex flex-col gap-1 pl-4 border-l-2 border-[#4a9fa5]/30 mb-2">
              <a href="/services" className="text-white/60 font-semibold text-xs tracking-widest uppercase hover:text-[#4a9fa5] transition-colors py-1.5 cursor-pointer">
                All Services
              </a>
              {mobileServiceLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="text-white font-semibold text-sm hover:text-[#4a9fa5] transition-colors py-1.5 cursor-pointer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}

          {/* Mobile Service Areas accordion */}
          <button
            className="flex items-center justify-between w-full text-white font-bold text-sm tracking-wider hover:text-[#4a9fa5] transition-colors cursor-pointer py-2"
            onClick={() => setMobileAreasOpen((v) => !v)}
          >
            SERVICE AREAS
            <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`}></i>
          </button>

          {mobileAreasOpen && (
            <div className="flex flex-col gap-1 pl-4 border-l-2 border-[#4a9fa5]/30 mb-2">
              <a href="/service-areas" className="text-white/60 font-semibold text-xs tracking-widest uppercase hover:text-[#4a9fa5] transition-colors py-1.5 cursor-pointer">
                All Areas
              </a>
              {areaLinks.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="text-white font-semibold text-sm hover:text-[#4a9fa5] transition-colors py-1.5 cursor-pointer"
                >
                  {a.label.toUpperCase()}
                </a>
              ))}
            </div>
          )}

          {otherLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-bold text-sm tracking-wider hover:text-[#4a9fa5] transition-colors cursor-pointer py-2"
            >
              {link.label}
            </a>
          ))}

          <a
            href="tel:8082723816"
            className="flex items-center gap-2 bg-[#4a9fa5] text-white font-bold text-sm px-5 py-2.5 rounded-full w-fit cursor-pointer whitespace-nowrap mt-2"
          >
            <i className="ri-phone-fill"></i>
            808-272-3816
          </a>
        </div>
      )}
    </header>
  );
}
