import { useState, useEffect } from "react";


export default function FloatingQuoteButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Call Now button */}
      <a
        href="tel:8082723816"
        className="flex items-center gap-2.5 bg-white hover:bg-gray-50 active:scale-95 text-[#4a9fa5] border-2 border-[#4a9fa5] font-bold text-sm px-5 py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap group"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-phone-fill text-base group-hover:scale-110 transition-transform duration-200"></i>
        </div>
        Call Now
      </a>

      {/* Get Free Quote button */}
      <a
        href="/contact"
        className="flex items-center gap-2.5 bg-[#4a9fa5] hover:bg-[#3d8a8f] active:scale-95 text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap group"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-file-list-3-line text-base group-hover:scale-110 transition-transform duration-200"></i>
        </div>
        Get Free Quote
      </a>
    </div>
  );
}
