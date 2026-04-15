import { useEffect } from "react";

import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { blogPosts } from "@/mocks/blog";

export default function BlogPostPage({ slug: slugProp }: { slug?: string }) {
  const slug = slugProp ?? (typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "");
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | Hawaii Painters 808`;

    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", post.excerpt);
    setMeta("keywords", `${post.category}, painting Hawaii, Oahu painting tips, Hawaii Painters 808`);
    setMeta("og:title", post.title, true);
    setMeta("og:description", post.excerpt, true);
    setMeta("og:image", post.image, true);
    setMeta("og:type", "article", true);
    setMeta("og:url", `https://hawaiipainters808.com/blog/${post.slug}`, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", post.title);
    setMeta("twitter:description", post.excerpt);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", `https://hawaiipainters808.com/blog/${post.slug}`);

    const schemaId = "schema-blog-post";
    document.getElementById(schemaId)?.remove();
    const s = document.createElement("script");
    s.id = schemaId;
    s.type = "application/ld+json";
    s.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": { "@type": "Person", "name": "Lopaka", "jobTitle": "Owner, Hawaii Painters 808" },
      "publisher": { "@type": "Organization", "name": "Hawaii Painters 808", "telephone": "+18082723816" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": `https://hawaiipainters808.com/blog/${post.slug}` }
    });
    document.head.appendChild(s);

    return () => { document.getElementById(schemaId)?.remove(); };
  }, [post]);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#fafaf7] flex items-center justify-center">
          <div className="text-center py-24">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="ri-article-line text-5xl text-gray-300"></i>
            </div>
            <h1 className="text-[#1a1a1a] font-black text-2xl mb-3">Article not found</h1>
            <a href="/blog" className="text-[#4a9fa5] font-bold text-sm hover:underline cursor-pointer">
              ← Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fafaf7]">

        {/* Hero image */}
        <div className="relative w-full overflow-hidden" style={{ height: "480px" }}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-10 pt-32">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-xs text-white/50 mb-4 flex-wrap">
                <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
                <i className="ri-arrow-right-s-line"></i>
                <a href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</a>
                <i className="ri-arrow-right-s-line"></i>
                <span className="text-white/80 line-clamp-1">{post.title}</span>
              </nav>
              <span className="inline-block bg-[#4a9fa5] text-white text-xs font-black px-3 py-1.5 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-white font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article body */}
        <section className="w-full px-6 md:px-16 py-14">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Main content */}
            <article className="lg:col-span-2">

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                    <i className="ri-user-fill text-white text-xs"></i>
                  </div>
                  <span className="font-semibold text-[#1a1a1a]">Lopaka</span>
                </div>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              {/* Intro */}
              <p className="text-gray-700 text-base leading-relaxed mb-8 text-lg">
                {post.content.intro}
              </p>

              {/* Sections */}
              <div className="flex flex-col gap-8">
                {post.content.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-[#1a1a1a] font-black text-xl mb-3 flex items-center gap-3">
                      <span className="w-7 h-7 flex items-center justify-center bg-[#4a9fa5] text-white text-xs font-black rounded-full flex-shrink-0">
                        {i + 1}
                      </span>
                      {section.heading}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed pl-10">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pro tip */}
              {post.content.tip && (
                <div className="mt-10 bg-[#4a9fa5]/8 border-l-4 border-[#4a9fa5] rounded-r-xl px-6 py-5">
                  <div className="flex items-center gap-2 text-[#4a9fa5] font-black text-sm uppercase tracking-wider mb-2">
                    <i className="ri-lightbulb-flash-fill"></i>
                    Pro Tip from Lopaka
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{post.content.tip}</p>
                </div>
              )}

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#4a9fa5] font-black text-sm hover:gap-3 transition-all cursor-pointer"
                >
                  <i className="ri-arrow-left-line"></i>
                  Back to All Articles
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">

                {/* Author card */}
                <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://storage.readdy-site.link/project_files/4b03d90a-3e92-41f2-89f6-2a6d0d0ed1c4/f6ced8a9-9ddb-4246-99c1-bbd7f2cd866e_lo_hat_brush.png?v=8ef6ac5502d8c1f1d14ef407d6e6cc09"
                      alt="Lopaka"
                      className="w-14 h-14 rounded-full object-cover object-top bg-[#4a9fa5]/20 flex-shrink-0"
                    />
                    <div>
                      <div className="font-black text-base">Lopaka</div>
                      <div className="text-[#4a9fa5] text-xs font-semibold">Owner, Hawaii Painters 808</div>
                      <div className="text-white/40 text-xs">30+ years on Oahu</div>
                    </div>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Born and raised on Oahu. I write about what I've learned painting hundreds of Hawaii homes — no fluff, just what actually works.
                  </p>
                </div>

                {/* Free estimate CTA */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-[#1a1a1a] font-black text-base mb-2">Ready to get started?</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">Get a free, no-pressure estimate from Lopaka directly.</p>
                  <a
                    href="tel:8082723816"
                    className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-5 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap w-full mb-2"
                  >
                    <i className="ri-phone-fill"></i>
                    808-272-3816
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white font-black text-sm px-5 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap w-full"
                  >
                    <i className="ri-file-list-3-line"></i>
                    Get Free Quote
                  </a>
                </div>

                {/* Related posts */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-[#1a1a1a] font-black text-sm uppercase tracking-widest mb-4">More Articles</h3>
                  <div className="flex flex-col gap-4">
                    {related.map((r) => (
                      <a
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="group flex items-start gap-3 cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={r.image}
                            alt={r.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-[#4a9fa5] font-bold uppercase tracking-wider mb-1">{r.category}</div>
                          <div className="text-[#1a1a1a] font-black text-xs leading-snug group-hover:text-[#4a9fa5] transition-colors line-clamp-2">
                            {r.title}
                          </div>
                          <div className="text-gray-400 text-[10px] mt-1">{r.readTime}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
