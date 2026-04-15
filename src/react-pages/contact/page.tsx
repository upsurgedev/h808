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
    canonical.setAttribute("href", "https://hawaiipainters808.com/contact");
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
            Tell us about your project and Lopaka will personally reach out with an honest, no-pressure estimate.
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
              <p className="text-[#1a1a1a]/50 text-sm">Takes about 60 seconds. No spam, ever.</p>
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
      <section className="w-full px-6 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-2xl px-10 py-12 overflow-hidden relative">
            {/* subtle teal glow top-right */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#4a9fa5]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/20 border border-[#4a9fa5]/40 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
                <i className="ri-checkbox-circle-line"></i>
                After You Submit
              </div>
              <h2 className="text-white font-black text-2xl md:text-3xl">What Happens Next?</h2>
              <p className="text-white/40 text-sm mt-2">No waiting around. Here&apos;s exactly what to expect.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
              {/* connector line — desktop only */}
              <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-[#4a9fa5]/25 z-0"></div>

              {[
                {
                  step: "01",
                  icon: "ri-file-search-line",
                  title: "Lopaka Reviews Your Request",
                  desc: "Every submission goes straight to Lopaka — not a call center. He reads your project details personally, usually within a few hours.",
                  tag: "Within hours",
                  tagIcon: "ri-time-line",
                },
                {
                  step: "02",
                  icon: "ri-phone-line",
                  title: "Personal Call Within 24 Hours",
                  desc: "Lopaka calls you directly to ask a few quick questions, confirm your address, and schedule a time that works for you.",
                  tag: "Within 24 hrs",
                  tagIcon: "ri-phone-fill",
                },
                {
                  step: "03",
                  icon: "ri-home-smile-line",
                  title: "Free On-Site Estimate",
                  desc: "Lopaka comes to your property, walks the job, and gives you a detailed written estimate — completely free, zero pressure.",
                  tag: "100% Free",
                  tagIcon: "ri-gift-line",
                },
              ].map((item) => (
                <div key={item.step} className="relative z-10 flex flex-col items-center text-center px-6 py-2">
                  {/* Step circle */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#4a9fa5]/15 border-2 border-[#4a9fa5]/40 mb-5 relative">
                    <i className={`${item.icon} text-[#4a9fa5] text-2xl`}></i>
                    <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#4a9fa5] rounded-full text-white font-black text-[10px]">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-white font-black text-base mb-2 leading-snug">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="inline-flex items-center gap-1.5 bg-[#4a9fa5]/10 border border-[#4a9fa5]/30 text-[#4a9fa5] text-xs font-bold px-3 py-1.5 rounded-full">
                    <i className={`${item.tagIcon} text-xs`}></i>
                    {item.tag}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm text-center sm:text-left">
                Prefer to skip the form? Call Lopaka directly — he picks up.
              </p>
              <a
                href="tel:8082723816"
                className="inline-flex items-center gap-2.5 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-fill text-sm"></i>
                </div>
                808-272-3816
              </a>
            </div>
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
