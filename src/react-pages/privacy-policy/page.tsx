import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you fill out our quote request or contact form, we collect your name, phone number, email address, and details about your painting project (such as property address, project type, and any notes you provide).",
      "When you visit our website, we may automatically collect basic technical information such as your browser type, device type, pages visited, and approximate location (city/region level only). This is collected through standard web analytics tools.",
      "We do not collect payment information directly — any payments are processed through secure third-party processors.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To respond to your quote request or inquiry — Lopaka personally reviews every submission and follows up directly.",
      "To schedule and coordinate your painting estimate or project.",
      "To send you occasional updates about your project status.",
      "To improve our website and understand how visitors find and use it.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes. Ever.",
    ],
  },
  {
    title: "Cookies & Analytics",
    content: [
      "Our website may use cookies — small text files stored on your device — to help us understand how visitors use the site. This helps us improve the experience for everyone.",
      "We may use Google Analytics or similar tools to track aggregate, anonymized traffic data. This data does not identify you personally.",
      "You can disable cookies in your browser settings at any time. Doing so will not affect your ability to use our website or request a quote.",
    ],
  },
  {
    title: "Data Storage & Security",
    content: [
      "Your information is stored securely and accessed only by Hawaii Painters 808 staff for the purposes described above.",
      "We take reasonable precautions to protect your data from unauthorized access, disclosure, or misuse. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.",
      "We retain your contact information only as long as necessary to fulfill your request or as required by applicable law.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party sites such as Google Maps, Yelp, or social media platforms. We are not responsible for the privacy practices of those sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You may request to access, correct, or delete any personal information we hold about you at any time by contacting us directly.",
      "If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA). Contact us for more information.",
      "To exercise any of these rights, email us at hpainters808@gmail.com or use the contact form on our website.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us and we will promptly delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we do, we will update the 'Last Updated' date at the top of this page.",
      "We encourage you to review this page periodically. Continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or how we handle your information, please reach out:",
      "Hawaii Painters 808 — Lopaka\nEmail: hpainters808@gmail.com",
    ],
  },
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Hawaii Painters 808";

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

    setMeta("description", "Privacy Policy for Hawaii Painters 808. Learn how we collect, use, and protect your personal information.");
    setMeta("robots", "noindex, follow");

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://housepaintershonolulu.com/privacy-policy");
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
            <span className="text-white/70">Privacy Policy</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#4a9fa5]/20 border border-[#4a9fa5]/40 text-[#4a9fa5] font-black text-xs tracking-widest px-4 py-2 rounded-full mb-5 uppercase">
            <i className="ri-shield-check-line"></i> Legal
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Last Updated: <strong className="text-white/70">April 15, 2026</strong>
          </p>
          <p className="text-white/60 text-base leading-relaxed mt-4">
            Hawaii Painters 808 is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
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

      {/* Bottom CTA */}
      <section className="bg-[#f5f5f5] py-12 px-6 md:px-16">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#1a1a1a] font-black text-base mb-1">Questions about your privacy?</p>
            <p className="text-gray-500 text-sm">Email us and we'll get back to you promptly.</p>
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
