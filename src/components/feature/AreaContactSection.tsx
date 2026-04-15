import MultiStepForm from "@/components/feature/MultiStepForm";

interface AreaContactSectionProps {
  city: string;
  sourcePage: string;
  description: string;
  trustItems: string[];
}

export default function AreaContactSection({ city, sourcePage, description, trustItems }: AreaContactSectionProps) {
  return (
    <section id="contact-form" className="py-20 bg-[#1a1a1a]">
      <div className="w-full px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-white font-black text-3xl md:text-4xl leading-tight mb-5">
              Ready for a Free {city} Estimate?
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">{description}</p>
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
              {trustItems.map((t) => (
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
            <MultiStepForm sourcePage={sourcePage} />
          </div>
        </div>
      </div>
    </section>
  );
}
