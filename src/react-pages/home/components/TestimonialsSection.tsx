import { testimonials } from "@/mocks/data";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">Customer Reviews</div>
        <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">What Oahu Homeowners Say</h2>
        <p className="text-gray-500 text-base mt-3 max-w-xl">I don't advertise much. Most of my work comes from people who called because a neighbor told them to. That means everything to me.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col gap-4">
            <div className="flex items-center gap-1">{Array.from({ length: t.stars }).map((_, i) => <i key={i} className="ri-star-fill text-[#4a9fa5] text-base"></i>)}</div>
            <p className="text-[#1a1a1a] text-base italic leading-relaxed flex-1">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5] rounded-full"><i className="ri-user-fill text-white text-sm"></i></div>
              <div>
                <div className="text-[#1a1a1a] font-black text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-[#1a1a1a] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="text-[#4a9fa5] font-black text-6xl leading-none">5.0</div>
          <div>
            <div className="flex items-center gap-1 mb-1">{Array.from({ length: 5 }).map((_, i) => <i key={i} className="ri-star-fill text-[#4a9fa5] text-xl"></i>)}</div>
            <div className="text-white font-bold text-sm">Average Rating</div>
            <div className="text-white/50 text-xs">Every one of them earned, not bought</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center md:justify-end">
          {[["1,500+","Projects Completed"],["30+","Years Experience"],["11","Areas Served"],["100%","Satisfaction Rate"]].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-white font-black text-3xl">{val}</div>
              <div className="text-white/50 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
