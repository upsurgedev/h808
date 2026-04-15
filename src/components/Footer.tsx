export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#111111] text-white/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0097a7] rounded flex items-center justify-center">
                <i className="ri-paint-brush-fill text-white text-sm"></i>
              </div>
              <span className="text-white font-black text-sm tracking-wider uppercase">Hawaii Painters 808</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Licensed, insured painting contractor serving Oahu. Lopaka's crew — 30+ years experience, Sherwin-Williams Duration paint, proper prep every time.
            </p>
            <div className="flex items-center gap-3">
              <a href="tel:8082723816" className="flex items-center gap-2 text-[#0097a7] hover:text-white transition-colors text-sm font-bold">
                <i className="ri-phone-fill"></i>
                808-272-3816
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Interior Painting", "/services/interior-painting"],
                ["Exterior Painting", "/services/exterior-painting"],
                ["Residential Painting", "/services/residential-painting"],
                ["Commercial Painting", "/services/commercial-painting"],
                ["Cabinet Painting", "/services/cabinet-painting"],
                ["Drywall Repair", "/services/drywall"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Honolulu", "/painters-honolulu-hi"],
                ["Hawaii Kai", "/painters-hawaii-kai-hi"],
                ["Kahala / Diamond Head", "/painters-kahala-diamond-head-hi"],
                ["Kailua", "/painters-kailua-hi"],
                ["Kaneohe", "/painters-kaneohe-hi"],
                ["Pearl City", "/painters-pearl-city-hi"],
                ["Kapolei", "/painters-kapolei-hi"],
                ["Ewa Beach", "/painters-ewa-beach-hi"],
                ["North Shore", "/painters-north-shore-hi"],
                ["Mililani", "/painters-mililani-hi"],
                ["Waipahu", "/painters-waipahu-hi"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-[#0097a7] mt-0.5 flex-shrink-0"></i>
                <span>Honolulu, HI 96813<br />Serving all of Oahu</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-[#0097a7] flex-shrink-0"></i>
                <a href="tel:8082723816" className="hover:text-white transition-colors">808-272-3816</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#0097a7] flex-shrink-0"></i>
                <a href="mailto:lopaka@hawaiipainters808.com" className="hover:text-white transition-colors">lopaka@hawaiipainters808.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-time-line text-[#0097a7] flex-shrink-0"></i>
                <span>Mon–Sat: 7am–6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Hawaii Painters 808. All rights reserved. Licensed &amp; Insured in Hawaii.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
