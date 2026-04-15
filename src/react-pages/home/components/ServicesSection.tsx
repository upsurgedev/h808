import { services } from "@/mocks/data";

export default function ServicesSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/10 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-4 uppercase">
          Our Services
        </div>
        <h2 className="text-[#1a1a1a] font-black italic text-4xl md:text-5xl uppercase leading-tight">
          What We Do Best
        </h2>
        <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
          Interior, exterior, residential, commercial, cabinets, drywall — every job on Oʻahu gets the same attention. Every job gets done right.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <a
            key={service.id}
            href={`/services/${service.slug}`}
            className="group bg-white border border-gray-200 hover:border-[#4a9fa5] rounded-xl p-6 hover:-translate-y-1 transition-all cursor-pointer block"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4a9fa5] text-white font-black text-lg rounded-full flex-shrink-0">
                {service.number}
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <i className={`${service.icon} text-[#1a1a1a] text-2xl`}></i>
              </div>
            </div>

            <h3 className="text-[#1a1a1a] font-black text-lg mb-2 uppercase">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

            {'highlight' in service && (
              <div className="inline-flex items-center gap-1.5 bg-[#4a9fa5]/10 text-[#4a9fa5] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                <i className="ri-check-line text-xs"></i>
                {(service as typeof service & { highlight: string }).highlight}
              </div>
            )}

            <div className="flex items-center gap-1 text-[#4a9fa5] font-bold text-sm group-hover:gap-2 transition-all">
              Learn More <i className="ri-arrow-right-line"></i>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="/services"
          className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-black text-sm tracking-wider px-8 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
        >
          VIEW ALL SERVICES <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>
  );
}
