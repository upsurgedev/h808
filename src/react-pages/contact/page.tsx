import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Get a Free Painting Estimate | Hawaii Painters 808 | Oahu, HI";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Get a free painting estimate from Hawaii Painters 808. Lopaka personally reviews every request and follows up within 24 hours. Serving all of Oahu. Call 808-272-3816.");
    setMeta("keywords", "free painting estimate Oahu Hawaii, painting quote Honolulu, contact Hawaii Painters 808, painting contractor estimate Hawaii");
    setMeta("og:title", "Get a Free Painting Estimate | Hawaii Painters 808", true);
    setMeta("og:description", "Free painting estimate from Hawaii Painters 808. Lopaka personally follows up within 24 hours. Serving all of Oahu.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://housepaintershonolulu.com/contact");
  }, []);

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[#fafaf7]">
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-contact.jpg"
            alt="Contact Hawaii Painters 808"
            className="w-full h-full object-cover object-top opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/70"></div>
        </div>
        <div className="relative w-full px-6 md:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/20 border border-[#4a9fa5]/40 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
            <i className="ri-map-pin-2-fill"></i>
            Serving All of Oahu
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our team will personally reach out with an honest, no-pressure estimate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10">
            <div className="mb-8">
              <h2 className="text-[#1a1a1a] font-black text-2xl mb-1">Request a Free Estimate</h2>
              <p className="text-[#1a1a1a]/50 text-sm">Takes about 60 seconds.</p>
            </div>
            <ContactForm />
          </div>

          {/* Sidebar — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Owner card */}
            <div className="bg-[#1a1a1a] rounded-2xl p-7 text-white">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="/images/lopaka-hat-brush.png?v=8ef6ac5502d8c1f1d14ef407d6e6cc09"
                  alt="Lopaka — Owner"
                  className="w-16 h-16 rounded-full object-cover object-top bg-[#4a9fa5]/20"
                />
                <div>
                  <div className="font-black text-base">Lopaka</div>
                  <div className="text-[#4a9fa5] text-sm font-semibold">Owner, Hawaii Painters 808</div>
                  <div className="text-white/40 text-xs mt-0.5">30+ years experience</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                &ldquo;I personally review every quote request and follow up myself. No call centers, no runaround — just honest work from a local guy who takes pride in every job.&rdquo;
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-7">
              <h3 className="text-[#1a1a1a] font-black text-sm tracking-widest uppercase mb-5">Contact Info</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:8082723816"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full flex-shrink-0">
                    <i className="ri-phone-fill text-[#4a9fa5]"></i>
                  </div>
                  <div>
                    <div className="text-xs text-[#1a1a1a]/40 font-semibold uppercase tracking-wider">Phone</div>
                    <div className="text-[#1a1a1a] font-black text-base group-hover:text-[#4a9fa5] transition-colors">808-272-3816</div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full flex-shrink-0">
                    <i className="ri-time-line text-[#4a9fa5]"></i>
                  </div>
                  <div>
                    <div className="text-xs text-[#1a1a1a]/40 font-semibold uppercase tracking-wider">Hours</div>
                    <div className="text-[#1a1a1a] font-semibold text-sm">Mon – Sat: 8am – 6pm</div>
                    <div className="text-[#1a1a1a]/50 text-xs">Sun: By appointment</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full flex-shrink-0">
                    <i className="ri-map-pin-line text-[#4a9fa5]"></i>
                  </div>
                  <div>
                    <div className="text-xs text-[#1a1a1a]/40 font-semibold uppercase tracking-wider">Location</div>
                    <div className="text-[#1a1a1a] font-semibold text-sm">3215 Ala Ilima Street</div>
                    <div className="text-[#1a1a1a]/50 text-xs">Honolulu, HI 96818</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-[#f5f5f0] rounded-2xl p-7">
              <h3 className="text-[#1a1a1a] font-black text-sm tracking-widest uppercase mb-4">Why Choose Us</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "ri-shield-check-fill", text: "Licensed & Insured in Hawaii" },
                  { icon: "ri-star-fill", text: "5-Star Rated on Google & Yelp" },
                  { icon: "ri-home-heart-fill", text: "Locally owned since 2012" },
                  { icon: "ri-award-fill", text: "1-Year Workmanship Warranty" },
                  { icon: "ri-paint-brush-fill", text: "Sherwin-Williams Duration Paint" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-3">
                    <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                      <i className={`${b.icon} text-[#4a9fa5] text-base`}></i>
                    </div>
                    <span className="text-[#1a1a1a]/70 text-sm font-semibold">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="w-full px-6 md:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-[#4a9fa5] font-black text-xs tracking-widest uppercase">After You Submit</span>
              <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl mt-1 leading-tight">
                What Happens Next?
              </h2>
            </div>
            <p className="text-[#1a1a1a]/40 text-sm max-w-xs md:text-right leading-relaxed">
              No waiting around, no call centers.<br />Here&apos;s exactly what to expect.
            </p>
          </div>
          {/* Steps */}
          <div className="flex flex-col gap-4">
            {[
              {
                num: "01",
                icon: "ri-file-search-line",
                title: "Our Team Reviews Your Request",
                desc: "Every submission goes straight to our team — not a call center. We read your project details personally and start putting together the right approach for your home.",
                badge: "Within a few hours",
                badgeIcon: "ri-time-line",
                highlight: false,
              },
              {
                num: "02",
                icon: "ri-phone-line",
                title: "You Get a Personal Call",
                desc: "We call you directly — no assistant, no script. We'll ask a few quick questions, confirm your address, and lock in a time that works for your schedule.",
                badge: "Within 24 hours",
                badgeIcon: "ri-phone-fill",
                highlight: true,
              },
              {
                num: "03",
                icon: "ri-home-smile-line",
                title: "Free On-Site Estimate",
                desc: "We come to your property, walk the job with you, and hand you a detailed written estimate on the spot. No pressure, no obligation — completely free.",
                badge: "100% Free",
                badgeIcon: "ri-gift-line",
                highlight: false,
              },
            ].map((step) => (
              <div
                key={step.num}
                className={`relative flex flex-col sm:flex-row items-start gap-6 rounded-2xl px-8 py-7 overflow-hidden transition-all ${
                  step.highlight
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white border border-[#e8e8e0]"
                }`}
              >
                {/* Big ghost number */}
                <div
                  className={`absolute right-6 top-1/2 -translate-y-1/2 font-black text-[7rem] leading-none select-none pointer-events-none ${
                    step.highlight ? "text-white/5" : "text-[#1a1a1a]/[0.04]"
                  }`}
                >
                  {step.num}
                </div>
                {/* Icon block */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0 ${
                    step.highlight
                      ? "bg-[#4a9fa5] text-white"
                      : "bg-[#4a9fa5]/10 text-[#4a9fa5]"
                  }`}
                >
                  <i className={`${step.icon} text-2xl`}></i>
                </div>
                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3
                      className={`font-black text-lg leading-snug ${
                        step.highlight ? "text-white" : "text-[#1a1a1a]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                        step.highlight
                          ? "bg-[#4a9fa5]/25 text-[#4a9fa5]"
                          : "bg-[#4a9fa5]/10 text-[#4a9fa5]"
                      }`}
                    >
                      <i className={`${step.badgeIcon} text-xs`}></i>
                      {step.badge}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed max-w-xl ${
                      step.highlight ? "text-white/55" : "text-[#1a1a1a]/50"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <p className="text-[#1a1a1a]/40 text-sm">
              Prefer to skip the form? Call us directly — we pick up.
            </p>
            <a
              href="tel:8082723816"
              className="inline-flex items-center gap-2.5 bg-[#1a1a1a] hover:bg-[#333] text-white font-black text-sm px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-fill text-sm"></i>
              </div>
              808-272-3816
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full px-6 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-72">
            <iframe
              title="Hawaii Painters 808 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.5!2d-157.8583!3d21.3069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3215+Ala+Ilima+St%2C+Honolulu%2C+HI+96818!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
