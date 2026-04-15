

const posts = [
  {
    slug: "best-exterior-paint-for-hawaii-climate",
    category: "Exterior Painting",
    title: "Best Exterior Paint for Hawaii's Climate — What Actually Holds Up on Oahu",
    excerpt: "After 30+ years painting Oahu homes, here's what I've learned about what actually lasts against salt air, UV, and tropical humidity.",
    readTime: "6 min read",
    icon: "ri-paint-brush-line",
  },
  {
    slug: "how-to-prep-exterior-walls-hawaii",
    category: "Exterior Painting",
    title: "How to Prep Exterior Walls for Painting in Hawaii's Climate",
    excerpt: "The prep work is everything. Here's exactly how we approach surface prep on every exterior job — and why it matters more here than anywhere else.",
    readTime: "6 min read",
    icon: "ri-tools-line",
  },
  {
    slug: "how-long-does-exterior-paint-last-hawaii",
    category: "Exterior Painting",
    title: "How Long Does Exterior Paint Last in Hawaii?",
    excerpt: "It depends on the product, the prep, and where on Oahu you live. Here's what to realistically expect — and how to get the most out of your paint job.",
    readTime: "4 min read",
    icon: "ri-time-line",
  },
  {
    slug: "how-much-does-it-cost-to-paint-a-house-in-hawaii",
    category: "Hiring Tips",
    title: "How Much Does It Cost to Paint a House in Hawaii? (2026 Oahu Pricing Guide)",
    excerpt: "Real numbers for exterior painting on Oahu in 2026 — broken down by project type, with honest context on what drives the price.",
    readTime: "7 min read",
    icon: "ri-money-dollar-circle-line",
  },
];

export default function ExteriorBlogLinks() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
              From the Blog
            </div>
            <h2 className="text-[#1a1a1a] font-black italic text-3xl md:text-4xl uppercase leading-tight">
              Exterior Painting Resources
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg">
              Real answers to the questions Oahu homeowners ask most — from someone who's been painting here for 30+ years.
            </p>
          </div>
          <a
            href="/blog"
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#4a9fa5] font-bold text-sm hover:gap-3 transition-all cursor-pointer"
          >
            View All Posts <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#f9f9f9] border border-gray-100 hover:border-[#4a9fa5]/40 rounded-xl p-5 hover:-translate-y-1 transition-all cursor-pointer block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-[#4a9fa5] bg-[#4a9fa5]/10 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">{post.readTime}</span>
              </div>
              <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5]/10 rounded-lg mb-3 group-hover:bg-[#4a9fa5]/20 transition-colors">
                <i className={`${post.icon} text-[#4a9fa5] text-base`}></i>
              </div>
              <h3 className="text-[#1a1a1a] font-black text-sm leading-snug mb-2 group-hover:text-[#4a9fa5] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-1 text-[#4a9fa5] font-bold text-xs mt-4 group-hover:gap-2 transition-all">
                Read Article <i className="ri-arrow-right-line"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
