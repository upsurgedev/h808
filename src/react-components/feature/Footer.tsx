

const serviceLinks = [
  { label: "Interior Painting", href: "/services/interior-painting" },
  { label: "Exterior Painting", href: "/services/exterior-painting" },
  { label: "Residential Painting", href: "/services/residential-painting" },
  { label: "Commercial Painting", href: "/services/commercial-painting" },
  { label: "Cabinet Painting", href: "/services/cabinet-painting" },
  { label: "Drywall Repair", href: "/services/drywall" },
];

const areaLinks = [
  { label: "Honolulu", href: "/service-areas/honolulu" },
  { label: "Pearl City", href: "/service-areas/pearl-city" },
  { label: "Kaneohe", href: "/service-areas/kaneohe" },
  { label: "Kailua", href: "/service-areas/kailua" },
  { label: "Waipahu", href: "/service-areas/waipahu" },
  { label: "Mililani", href: "/service-areas/mililani" },
  { label: "Kapolei", href: "/service-areas/kapolei" },
  { label: "Ewa Beach", href: "/service-areas/ewa-beach" },
  { label: "Waianae", href: "/service-areas/waianae" },
  { label: "Makaha", href: "/service-areas/makaha" },
];

const companyLinks = [
  { label: "About Lopaka", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Get Free Quote", href: "/contact" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="w-full px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/70a92d63-4fc6-4df7-8a85-7c5ff53fbb09_white_logo_with_text.png?v=0a7c89a6433a16058044aea1981576ce"
                alt="Hawaii Painters 808"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Locally owned by Lopaka. Serving Honolulu and all of Oʻahu since 2012. Licensed, insured, and built on honest work done with pride.
            </p>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black text-sm tracking-widest mb-5 uppercase">
              <a href="/services" className="hover:text-[#4a9fa5] transition-colors">Services</a>
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 text-sm hover:text-[#4a9fa5] transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-black text-sm tracking-widest mb-5 uppercase">
              <a href="/service-areas" className="hover:text-[#4a9fa5] transition-colors">Service Areas</a>
            </h4>
            <ul className="flex flex-col gap-2.5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 text-sm hover:text-[#4a9fa5] transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-black text-sm tracking-widest mb-5 uppercase">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 text-sm hover:text-[#4a9fa5] transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black text-sm tracking-widest mb-5 uppercase">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:8082723816" className="flex items-center gap-2 text-white font-bold text-lg hover:text-[#4a9fa5] transition-colors cursor-pointer">
                <i className="ri-phone-fill text-[#4a9fa5]"></i>
                808-272-3816
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <i className="ri-map-pin-line text-[#4a9fa5] mt-0.5 flex-shrink-0"></i>
                <span>3215 Ala Ilima Street<br />Honolulu, HI 96818</span>
              </div>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <i className="ri-time-line text-[#4a9fa5] mt-0.5 flex-shrink-0"></i>
                <span>Mon – Sat: 8am – 6pm<br />Sun: By appointment</span>
              </div>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap w-fit mt-1"
              >
                <i className="ri-file-list-3-line"></i>
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs">© 2026 Hawaii Painters 808 | housepaintershonolulu.com | All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <a href="/privacy-policy" className="text-white/40 text-xs hover:text-white/70 transition-colors cursor-pointer">Privacy Policy</a>
          <a href="/terms" className="text-white/40 text-xs hover:text-white/70 transition-colors cursor-pointer">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
