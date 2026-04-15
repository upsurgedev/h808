import { useState } from "react";

const SUPABASE_URL = "https://iqcnkiuqhkjvbzfxkpqe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxY25raXVxaGtqdmJ6ZnhrcHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MzUzNDcsImV4cCI6MjA1OTExMTM0N30.Zt4LHZH6BPbGFdOyqB7yHXFMHjAQqQOXdVZhHuLJMiI";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Residential Painting",
  "Commercial Painting",
  "Cabinet Painting",
  "Drywall Repair",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Just planning ahead",
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    service: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          service: form.service,
          timeline: form.timeline,
          name: form.name,
          phone: form.phone,
          email: form.email,
          address: form.address,
          message: form.message,
          created_at: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const text = await res.text();
        setError("Something went wrong. Please call us at 808-272-3816.");
        console.error("Supabase error:", text);
      }
    } catch (e) {
      setError("Something went wrong. Please call us at 808-272-3816.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#111111] border border-[#0097a7]/30 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-[#0097a7] rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ri-check-line text-white text-3xl"></i>
        </div>
        <h3 className="text-white font-black text-2xl uppercase mb-3">Request Sent!</h3>
        <p className="text-white/60 text-base mb-6">
          Thanks {form.name}! Lopaka will get back to you within 24 hours. Or call <a href="tel:8082723816" className="text-[#0097a7] font-bold">808-272-3816</a> if you need to talk sooner.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-8">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                step >= s ? "bg-[#0097a7] text-white" : "bg-white/10 text-white/40"
              }`}
            >
              {step > s ? <i className="ri-check-line"></i> : s}
            </div>
            {s < 3 && <div className={`flex-1 h-0.5 w-8 ${step > s ? "bg-[#0097a7]" : "bg-white/10"}`}></div>}
          </div>
        ))}
        <span className="text-white/40 text-xs ml-2">Step {step} of 3</span>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h3 className="text-white font-black text-xl uppercase tracking-wide mb-2">What do you need?</h3>
          <p className="text-white/50 text-sm mb-6">Select the service you're interested in.</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {services.map((svc) => (
              <button
                key={svc}
                onClick={() => update("service", svc)}
                className={`p-3 rounded-xl border text-sm font-bold text-left transition-all ${
                  form.service === svc
                    ? "border-[#0097a7] bg-[#0097a7]/20 text-white"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/30"
                }`}
              >
                {svc}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            disabled={!form.service}
            className="w-full bg-[#0097a7] hover:bg-[#007a87] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm tracking-wider uppercase px-6 py-4 rounded-full transition-all"
          >
            NEXT <i className="ri-arrow-right-line ml-1"></i>
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h3 className="text-white font-black text-xl uppercase tracking-wide mb-2">When do you need it?</h3>
          <p className="text-white/50 text-sm mb-6">This helps us schedule your estimate.</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {timelines.map((t) => (
              <button
                key={t}
                onClick={() => update("timeline", t)}
                className={`p-3 rounded-xl border text-sm font-bold text-left transition-all ${
                  form.timeline === t
                    ? "border-[#0097a7] bg-[#0097a7]/20 text-white"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border border-white/20 hover:border-white text-white font-black text-sm tracking-wider uppercase px-6 py-4 rounded-full transition-all"
            >
              <i className="ri-arrow-left-line mr-1"></i>BACK
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!form.timeline}
              className="flex-1 bg-[#0097a7] hover:bg-[#007a87] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm tracking-wider uppercase px-6 py-4 rounded-full transition-all"
            >
              NEXT <i className="ri-arrow-right-line ml-1"></i>
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h3 className="text-white font-black text-xl uppercase tracking-wide mb-2">Your contact info</h3>
          <p className="text-white/50 text-sm mb-6">We'll reach out within 24 hours.</p>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Your name *"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-[#0097a7] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone number *"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-[#0097a7] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-[#0097a7] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Property address (optional)"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-[#0097a7] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors"
            />
            <textarea
              placeholder="Any details about your project..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={3}
              className="w-full bg-white/5 border border-white/10 focus:border-[#0097a7] rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors resize-none"
            />
          </div>
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="flex-1 border border-white/20 hover:border-white text-white font-black text-sm tracking-wider uppercase px-6 py-4 rounded-full transition-all"
            >
              <i className="ri-arrow-left-line mr-1"></i>BACK
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitting || !form.name || !form.phone}
              className="flex-1 bg-[#0097a7] hover:bg-[#007a87] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm tracking-wider uppercase px-6 py-4 rounded-full transition-all"
            >
              {submitting ? "SENDING..." : "SEND REQUEST"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
