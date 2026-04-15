import { useState, useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { blogPosts } from "@/mocks/blog";

const categories = ["All", "Exterior Painting", "Interior Painting", "Color Tips", "Cabinet Painting", "Hiring Tips"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Hawaii Painting Tips & Advice Blog | Hawaii Painters 808";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Honest painting tips and advice from Lopaka — 30+ years painting Oahu homes. How much does it cost to paint a house in Hawaii? Best exterior paint for Hawaii's climate? Find answers here.");
    setMeta("keywords", "painting tips Hawaii, how much to paint house Hawaii, best exterior paint Hawaii, Oahu painting advice, Hawaii Painters 808 blog");
    setMeta("og:title", "Hawaii Painting Tips & Advice Blog | Hawaii Painters 808", true);
    setMeta("og:description", "Honest painting tips from Lopaka — 30+ years on Oahu. Costs, products, prep, color, and more.", true);
    setMeta("og:type", "website", true);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://hawaiipainters808.com/blog");
    const schemaId = "schema-blog";
    if (!document.getElementById(schemaId)) {
      const s = document.createElement("script"); s.id = schemaId; s.type = "application/ld+json";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Blog", "name": "Hawaii Painters 808 Blog", "description": "Painting tips and advice for Oahu homeowners from Lopaka, owner of Hawaii Painters 808.", "url": "https://hawaiipainters808.com/blog", "publisher": { "@type": "LocalBusiness", "name": "Hawaii Painters 808", "telephone": "+18082723816" } });
      document.head.appendChild(s);
    }
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  const featured = blogPosts.find((p) => p.featured);
  const filtered = blogPosts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fafaf7]">

        {/* Hero */}
        <section className="relative bg-[#1a1a1a] pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-blog.jpg"
              alt="Hawaii Painters 808 Blog"
              className="w-full h-full object-cover object-top opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]"></div>
          </div>
          <div className="relative w-full px-6 md:px-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/20 border border-[#4a9fa5]/40 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
              <i className="ri-article-line"></i>
              Painting Tips & Advice
            </div>
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              The Hawaii Painters Blog
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
              Honest advice from Lopaka — 30+ years painting Oahu homes. Tips on prep, color, products, and everything in between.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="w-full px-6 md:px-16 py-14">
            <div className="max-w-6xl mx-auto">
              <div className="text-xs font-black text-[#4a9fa5] tracking-widest uppercase mb-5">Featured Article</div>
              <a
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#4a9fa5] transition-all cursor-pointer block"
              >
                <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4a9fa5] text-white text-xs font-black px-3 py-1.5 rounded-full">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-4">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="text-[#1a1a1a] font-black text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[#4a9fa5] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#4a9fa5] font-black text-sm group-hover:gap-3 transition-all">
                    Read Article
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </a>
            </div>
          </section>
        )}

        {/* Category Filter + Grid */}
        <section className="w-full px-6 md:px-16 pb-16">
          <div className="max-w-6xl mx-auto">

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#4a9fa5] text-white"
                      : "bg-white border border-gray-200 text-gray-500 hover:border-[#4a9fa5] hover:text-[#4a9fa5]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Article grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
                >
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#1a1a1a]/80 text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-[#1a1a1a] font-black text-base leading-snug mb-2 group-hover:text-[#4a9fa5] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#4a9fa5] font-black text-xs group-hover:gap-2.5 transition-all">
                      Read More
                      <i className="ri-arrow-right-line text-xs"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-article-line text-4xl"></i>
                </div>
                <p className="font-semibold">No articles in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-6 md:px-16 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-2xl px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-white font-black text-xl md:text-2xl mb-2">Ready to get started on your project?</h2>
                <p className="text-white/50 text-sm">Lopaka will personally review your request and follow up within 24 hours.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="tel:8082723816"
                  className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-fill"></i>
                  808-272-3816
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-file-list-3-line"></i>
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
