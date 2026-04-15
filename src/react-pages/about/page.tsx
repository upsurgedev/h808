
import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { testimonials } from "@/mocks/data";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Lopaka — Owner of Hawaii Painters 808 | Oahu, Hawaii";

    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "Meet Lopaka, owner of Hawaii Painters 808. Born and raised on Oahu, 30+ years painting homes and businesses across Hawaii. Licensed, insured, and built on aloha.");
    setMeta("keywords", "Hawaii Painters 808, Lopaka painter Oahu, about Hawaii Painters 808, painting contractor Honolulu");
    setMeta("og:title", "About Lopaka — Hawaii Painters 808 | Oahu Painting Contractor", true);
    setMeta("og:description", "30+ years painting Oahu homes. Meet Lopaka, the owner behind Hawaii Painters 808.", true);
    setMeta("og:type", "website", true);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hawaiipainters808.com/about");

    const schemaId = "schema-about";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hawaii Painters 808",
        "founder": { "@type": "Person", "name": "Lopaka", "jobTitle": "Owner & Master Painter" },
        "description": "Family-owned painting contractor serving all of Oahu, Hawaii since 1994. Founded by Lopaka, born and raised on Oahu with 30+ years of experience.",
        "telephone": "+18082723816",
        "address": { "@type": "PostalAddress", "addressLocality": "Honolulu", "addressRegion": "HI", "addressCountry": "US" },
        "url": "https://hawaiipainters808.com/about"
      });
      document.head.appendChild(script);
    }

    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  const values = [
    {
      icon: "ri-shield-check-fill",
      title: "Integrity First",
      desc: "I tell you what the job actually needs — not what sounds good to win the bid. If something doesn't need painting, I'll say so.",
    },
    {
      icon: "ri-tools-fill",
      title: "Prep Is Everything",
      desc: "The paint is only as good as what's underneath it. We power wash, sand, prime, and repair before a single drop of paint goes on.",
    },
    {
      icon: "ri-time-fill",
      title: "We Show Up",
      desc: "I give you a schedule and I stick to it. No ghosting, no excuses. If something changes, I call you first.",
    },
    {
      icon: "ri-heart-fill",
      title: "Aloha Spirit",
      desc: "We treat your home like it's our own. Clean, respectful, and careful — every single day on the job.",
    },
  ];

  const milestones = [
    { year: "1994", event: "Started painting homes on Oahu fresh out of high school" },
    { year: "2001", event: "Earned Hawaii contractor's license — fully licensed & insured" },
    { year: "2008", event: "Became a certified Sherwin-Williams Duration applicator" },
    { year: "2012", event: "Founded Hawaii Painters 808 as a dedicated company" },
    { year: "2018", event: "Expanded to serve all of Oahu — every neighborhood" },
    { year: "2024", event: "500+ homes painted, 5-star Google rating maintained" },
  ];

  return (
    <main>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a]" style={{ minHeight: "480px" }}>
        <div className="absolute inset-0">
          <img
            src="/images/about-page-hero.jpg"
            alt="Lopaka — Hawaii Painters 808 Owner"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>
        <div className="relative px-6 md:px-16 pt-36 pb-16 max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/80">About</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/20 border border-[#4a9fa5]/40 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
            <i className="ri-map-pin-2-fill"></i> Born &amp; Raised on Oahu
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
            Meet Lopaka.<br />
            <span className="text-[#4a9fa5]">30+ Years</span> Painting<br />
            Oahu Homes.
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            Hawaii Painters 808 isn't a franchise or a big corporation. It's me — Lopaka — and a crew I trust, doing honest work for Oahu families.
          </p>
        </div>
      </section>

      {/* ── OWNER STORY ── */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full p-1.5"
                style={{ background: "linear-gradient(135deg, #4a9fa5 0%, #1a1a1a 100%)" }}>
                <div className="w-full h-full rounded-full p-1 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/5e436676-8b2a-464b-9fbb-0636d9f5aa24_white_shirt_lopaka.png?v=e4fa3cfcb2be310e2a22df761df2f2ad"
                      alt="Lopaka — Owner of Hawaii Painters 808"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 -right-2 bg-[#4a9fa5] text-white font-black text-center w-24 h-24 rounded-full flex flex-col items-center justify-center">
                <div className="text-2xl font-black leading-none">30+</div>
                <div className="text-xs font-black tracking-wide leading-tight mt-0.5">YEARS<br />OAHU</div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
              My Story
            </div>
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight mb-6">
              Built on Integrity,<br />Craftsmanship, and Aloha
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              I'm Lopaka. I grew up on Oʻahu and I've been painting homes and businesses here for over 30 years. Hawaii Painters 808 is my company — built from the ground up on doing things right.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              I personally oversee every project from the first walkthrough to the final brushstroke. No shortcuts. No excuses. Just honest work done with pride. That's what my ʻohana taught me, and it's how I run every job.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              After 30 years painting in Hawaii's conditions — salt air, intense UV, trade wind humidity — I know what works and what doesn't. That's why I use Sherwin-Williams Duration on every job. It's the only paint I trust to hold up on Oahu long-term.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We're more than just painters. We're neighbors. Homeowners and businesses across Honolulu count on us because we show up when we say we will, we treat your home with respect, and we don't leave until the work is right.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "ri-shield-check-fill", label: "Licensed & Insured" },
                { icon: "ri-map-pin-2-fill", label: "Oʻahu Born & Raised" },
                { icon: "ri-star-fill", label: "5-Star Rated" },
                { icon: "ri-home-heart-fill", label: "All of Oʻahu Covered" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-[#f5f5f5] px-4 py-2.5 rounded-full">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a9fa5]">
                    <i className={`${b.icon} text-sm`}></i>
                  </div>
                  <span className="text-[#1a1a1a] font-bold text-xs whitespace-nowrap">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#f5f5f5] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
              How We Work
            </div>
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight">
              The Values Behind Every Job
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full mb-4">
                  <i className={`${v.icon} text-[#4a9fa5] text-xl`}></i>
                </div>
                <h3 className="text-[#1a1a1a] font-black text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
              30 Years on Oahu
            </div>
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight">
              The Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#4a9fa5]/20 hidden sm:block"></div>
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#4a9fa5] text-white font-black text-xs rounded-full z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1 bg-[#f5f5f5] border border-gray-200 rounded-xl p-5">
                    <div className="text-[#4a9fa5] font-black text-sm mb-1">{m.year}</div>
                    <div className="text-[#1a1a1a] font-semibold text-base">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAINT PHILOSOPHY ── */}
      <section className="bg-[#1a1a1a] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
              Why Sherwin-Williams Duration
            </div>
            <h2 className="text-white font-black text-3xl md:text-4xl leading-tight mb-6">
              I Only Use Paint<br />I'd Put on My Own Home
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              After 30 years painting in Hawaii, I've tried everything. Salt air destroys cheap paint in two years. UV intensity fades bargain brands fast. Humidity causes bubbling and mold if the paint isn't right.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Sherwin-Williams Duration is the only paint I've found that consistently holds up in Oahu's conditions. It's what I use on my own home. It's what I recommend to every customer.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              I'm not paid to say that. I say it because after 30 years, it's simply the truth.
            </p>
          </div>
          <div className="w-full h-72 rounded-xl overflow-hidden">
            <img
              src="/images/about-paint-closeup.jpg"
              alt="Lopaka applying Sherwin-Williams Duration paint on Oahu home"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#f5f5f5] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl leading-tight">
              What Oahu Homeowners Say
            </h2>
            <p className="text-gray-500 mt-3">Real reviews from real neighbors across Oahu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#4a9fa5]"></i>
                  ))}
                </div>
                <p className="text-[#1a1a1a] text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                    <i className="ri-user-fill text-white text-xs"></i>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a] font-black text-xs">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#4a9fa5] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white font-black text-3xl md:text-4xl leading-tight mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Call me directly or fill out a quick form. I'll come to you, look at the job myself, and give you a straight answer. No charge. No pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+18082723816"
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#4a9fa5] font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i> Call Lopaka — (808) 272-3816
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-black text-sm px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-file-list-3-line"></i> Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
