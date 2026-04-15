import MultiStepForm from "@/components/feature/MultiStepForm";

export default function HnlContactCta() {
  return (
    <section id="contact-form" className="py-20 bg-[#1a1a1a]">
      <div className="w-full px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-white font-black text-3xl md:text-4xl leading-tight mb-5">Ready to Refresh Your Interior?</h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              I serve homeowners and businesses across Honolulu and all of Oʻahu. Call me directly or send a message and I'll get back to you fast. Mahalo for considering Hawaii Painters 808.
            </p>
            <a href="tel:8082723816" className="flex items-center gap-3 group cursor-pointer w-fit mb-10">
              <div className="w-12 h-12 flex items-center justify-center bg-[#4a9fa5] rounded-full flex-shrink-0">
                <i className="ri-phone-fill text-white text-lg"></i>
              </div>
              <div>
                <div className="text-white font-black text-2xl group-hover:text-[#4a9fa5] transition-colors">808-272-3816</div>
                <div className="text-white/50 text-xs">Mon–Fri 8am–5pm</div>
              </div>
            </a>
            <div className="flex flex-col gap-3">
              {["Licensed & Insured in Hawaii", "Free estimate — no obligation", "I personally oversee every job", "Oʻahu born and raised"].map((t) => (
                <div key={t} className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-5 h-5 flex items-center justify-center bg-[#4a9fa5]/30 rounded-full flex-shrink-0">
                    <i className="ri-check-line text-[#4a9fa5] text-xs"></i>
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <p className="text-[#1a1a1a] font-black text-xl mb-6">Get Your Free Estimate</p>
            <MultiStepForm sourcePage="Interior Painting Honolulu" />
          </div>
        </div>
      </div>
    </section>
  );
}
