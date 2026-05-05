import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Hawaii Painters 808 website (hawaiipainters808.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
      "These terms apply to all visitors, users, and anyone who accesses or uses our website or services.",
    ],
  },
  {
    title: "Services Provided",
    content: [
      "Hawaii Painters 808 provides professional painting and drywall services to residential and commercial customers on Oahu, Hawaii. Services include interior painting, exterior painting, cabinet painting, drywall repair, and related work.",
      "All services are subject to a separate written estimate and agreement between Hawaii Painters 808 and the customer. These Terms of Service govern use of our website only — not the specific terms of any painting project.",
      "We reserve the right to decline any project at our discretion.",
    ],
  },
  {
    title: "Quote Requests & Estimates",
    content: [
      "Submitting a quote request through our website does not constitute a binding contract or guarantee of service.",
      "All estimates provided are based on information available at the time of assessment. Final pricing may vary based on actual site conditions, scope changes, or materials required.",
      "Written estimates are valid for 30 days from the date of issue unless otherwise stated.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website — including text, images, logos, graphics, and design — is the property of Hawaii Painters 808 or its content suppliers and is protected by applicable copyright and intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission.",
      "The Hawaii Painters 808 name and logo are trademarks of Hawaii Painters 808. Unauthorized use is prohibited.",
    ],
  },
  {
    title: "User Conduct",
    content: [
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.",
      "You may not use our website to transmit spam, malware, or any harmful content.",
      "You may not attempt to gain unauthorized access to any part of our website or its underlying systems.",
      "We reserve the right to block access to users who violate these terms.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      "This website is provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied.",
      "We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "Information on this website is provided for general informational purposes only and should not be relied upon as professional advice for any specific situation.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Hawaii Painters 808 shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website.",
      "Our total liability to you for any claim arising from use of this website shall not exceed $100.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites such as Google Maps, Yelp, or social media platforms. These links are provided for convenience only.",
      "We have no control over the content or practices of third-party sites and are not responsible for their content, privacy policies, or terms.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by the laws of the State of Hawaii, without regard to its conflict of law provisions.",
      "Any disputes arising from these terms or your use of our website shall be resolved in the courts of Honolulu County, Hawaii.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We reserve the right to update these Terms of Service at any time. When we do, we will update the 'Last Updated' date at the top of this page.",
      "Continued use of our website after any changes constitutes your acceptance of the updated terms. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us:",
      "Hawaii Painters 808 — Lopaka\nEmail: hpainters808@gmail.com",
    ],
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | Hawaii Painters 808";

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

    setMeta("description", "Terms of Service for Hawaii Painters 808. Read our terms for using our website and requesting painting services on Oahu, Hawaii.");
    setMeta("robots", "noindex, follow");

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://housepaintershonolulu.com/terms");
  }, []);

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="bg-[#1a1a1a] pt-32 pb-12 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white/70">Terms of Service</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/20 border border-[#4a9fa5]/40 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
            <i className="ri-file-text-line"></i> Legal
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">
            Last Updated: <strong className="text-white/70">April 15, 2026</strong>
          </p>
          <p className="text-white/60 text-base leading-relaxed mt-4">
            Please read these Terms of Service carefully before using the Hawaii Painters 808 website. By using our site, you agree to these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
              <h2 className="text-[#1a1a1a] font-black text-xl mb-4 flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full text-[#4a9fa5] font-black text-xs flex-shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="flex flex-col gap-3 pl-10">
                {section.content.map((para, j) => (
                  <p key={j} className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom links */}
      <section className="bg-[#f5f5f5] py-12 px-6 md:px-16">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#1a1a1a] font-black text-base mb-1">Questions about these terms?</p>
            <p className="text-gray-500 text-sm">
              Also see our{" "}
              <a href="/privacy-policy" className="text-[#4a9fa5] font-bold hover:underline cursor-pointer">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="mailto:hpainters808@gmail.com"
              className="flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-line"></i> hpainters808@gmail.com
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-black text-sm px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
