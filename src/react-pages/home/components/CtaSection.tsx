
export default function CtaSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/cta-home.jpg"
          alt="Beautiful painted home in Hawaii"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#4a9fa5]/85"></div>
      </div>
      <div className="relative text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white font-black text-xs tracking-widest px-4 py-2 rounded-full mb-6 uppercase">
          <i className="ri-phone-fill"></i> Free Estimates Available
        </div>
        <h2 className="text-white font-black italic text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-6">Ready to Get Started?</h2>
        <p className="text-white/85 text-lg leading-relaxed mb-10">Call me or send a message. I'll come out, look at the job, and give you a straight estimate. No charge. No pressure. I'd be honored to work on your home.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#4a9fa5] font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
            <i className="ri-file-list-3-line"></i> GET FREE ESTIMATE
          </a>
          <a href="tel:8082723816" className="flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap">
            <i className="ri-phone-fill"></i> CALL 808-272-3816
          </a>
        </div>
      </div>
    </section>
  );
}
