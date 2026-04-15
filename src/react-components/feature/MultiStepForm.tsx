import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Residential Painting",
  "Commercial Painting",
  "Cabinet Painting",
  "Drywall Repair",
];

const URGENCY_OPTIONS = [
  { value: "asap", label: "ASAP", sub: "I need this done right away", icon: "ri-fire-line" },
  { value: "month", label: "Within a Month", sub: "I have some flexibility", icon: "ri-calendar-check-line" },
  { value: "planning", label: "Just Planning", sub: "Researching for the future", icon: "ri-lightbulb-line" },
];

const BUDGET_RANGES = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000 – $6,000",
  "$6,000+",
  "Not sure yet",
];

// New order: project questions first, contact info last
type Step =
  | "service"
  | "property"
  | "urgency"
  | "urgency_followup"
  | "notes"
  | "name"
  | "phone"
  | "done";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  property: string;
  urgency: string;
  targetDate: string;
  budget: string;
  notes: string;
}

const STEP_ORDER: Step[] = ["service", "property", "urgency", "urgency_followup", "notes", "name", "phone"];
const TOTAL_STEPS = STEP_ORDER.length;

function getStepNumber(step: Step): number {
  const idx = STEP_ORDER.indexOf(step);
  return idx === -1 ? TOTAL_STEPS : idx + 1;
}

interface MultiStepFormProps {
  sourcePage: string;
}

export default function MultiStepForm({ sourcePage }: MultiStepFormProps) {
  const [step, setStep] = useState<Step>("service");
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", service: "", property: "",
    urgency: "", targetDate: "", budget: "", notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const progress = step === "done" ? 100 : Math.round((getStepNumber(step) / TOTAL_STEPS) * 100);

  const set = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const next = (nextStep: Step) => {
    setError("");
    setStep(nextStep);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const urgencyLabel =
        form.urgency === "asap" ? "ASAP" :
        form.urgency === "month" ? "Within a Month" : "Just Planning";

      const followupLabel =
        form.urgency === "asap" ? "" :
        form.urgency === "month" ? `Target Date: ${form.targetDate}` :
        `Budget Range: ${form.budget}`;

      const body = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        property_type: form.property,
        urgency: urgencyLabel,
        urgency_followup: followupLabel,
        notes: form.notes,
        source_page: sourcePage,
      });

      const [res] = await Promise.all([
        fetch("https://readdy.ai/api/form/d7faetkq2rhf4jj5qhu0", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        }),
        supabase.from("leads").insert({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          property_type: form.property,
          urgency: urgencyLabel,
          urgency_followup: followupLabel,
          message: form.notes,
          source_page: sourcePage,
        }),
      ]);

      if (!res.ok) throw new Error("Submission failed");
      setStep("done");
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (step === "done") {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="w-20 h-20 flex items-center justify-center bg-[#4a9fa5] rounded-full mb-6">
          <i className="ri-check-line text-white text-4xl"></i>
        </div>
        <h2 className="text-[#1a1a1a] font-black text-3xl mb-3">You're All Set!</h2>
        <p className="text-[#1a1a1a]/60 text-base max-w-sm leading-relaxed">
          Thanks {form.name.split(" ")[0] || "there"}! Lopaka will personally reach out to you soon. We appreciate you choosing Hawaii Painters 808.
        </p>
        <div className="mt-8 bg-[#f5f5f0] rounded-2xl px-8 py-5 text-left max-w-sm w-full">
          <p className="text-xs font-black tracking-widest text-[#4a9fa5] uppercase mb-3">Your Request Summary</p>
          <div className="flex flex-col gap-2 text-sm text-[#1a1a1a]/70">
            <div><span className="font-bold text-[#1a1a1a]">Service:</span> {form.service}</div>
            <div><span className="font-bold text-[#1a1a1a]">Property:</span> {form.property}</div>
            <div><span className="font-bold text-[#1a1a1a]">Timeline:</span> {form.urgency === "asap" ? "ASAP" : form.urgency === "month" ? "Within a Month" : "Just Planning"}</div>
          </div>
        </div>
        <a
          href="tel:8082723816"
          className="mt-6 flex items-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] text-white font-black text-sm px-7 py-3.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-phone-fill"></i>
          Call Us: 808-272-3816
        </a>
      </div>
    );
  }

  return (
    <form data-readdy-form className="w-full" onSubmit={(e) => e.preventDefault()}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-[#1a1a1a]/40 tracking-widest uppercase">
            Step {getStepNumber(step)} of {TOTAL_STEPS}
          </span>
          <span className="text-xs font-bold text-[#4a9fa5]">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#e8e8e0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4a9fa5] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* STEP 1: Service */}
      {step === "service" && (
        <StepWrapper icon="ri-paint-brush-line" question="What service do you need?" sub="Pick the one that fits best — takes 2 minutes">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {SERVICES.map((s) => (
              <button key={s} type="button"
                onClick={() => { set("service", s); next("property"); }}
                className={`text-left px-5 py-4 rounded-xl border-2 font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${form.service === s ? "border-[#4a9fa5] bg-[#4a9fa5]/10 text-[#4a9fa5]" : "border-[#e8e8e0] text-[#1a1a1a] hover:border-[#4a9fa5]/50"}`}
              >{s}</button>
            ))}
          </div>
        </StepWrapper>
      )}

      {/* STEP 2: Property */}
      {step === "property" && (
        <StepWrapper icon="ri-home-3-line" question="What type of property?" sub="Helps us give you the right estimate">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {[
              { value: "Residential", icon: "ri-home-4-line", sub: "House, condo, or apartment" },
              { value: "Commercial", icon: "ri-store-2-line", sub: "Office, retail, or business" },
            ].map((p) => (
              <button key={p.value} type="button"
                onClick={() => { set("property", p.value); next("urgency"); }}
                className={`text-left px-5 py-5 rounded-xl border-2 font-semibold text-sm transition-all cursor-pointer ${form.property === p.value ? "border-[#4a9fa5] bg-[#4a9fa5]/10 text-[#4a9fa5]" : "border-[#e8e8e0] text-[#1a1a1a] hover:border-[#4a9fa5]/50"}`}
              >
                <div className="w-9 h-9 flex items-center justify-center bg-[#4a9fa5]/10 rounded-lg mb-2">
                  <i className={`${p.icon} text-[#4a9fa5] text-lg`}></i>
                </div>
                <div className="font-black text-base">{p.value}</div>
                <div className="text-[#1a1a1a]/50 font-normal text-xs mt-0.5">{p.sub}</div>
              </button>
            ))}
          </div>
          <div className="mt-6"><BackButton onClick={() => next("service")} /></div>
        </StepWrapper>
      )}

      {/* STEP 3: Urgency */}
      {step === "urgency" && (
        <StepWrapper icon="ri-time-line" question="How soon do you need this done?" sub="We'll tailor our response to your timeline">
          <div className="flex flex-col gap-3 mt-2">
            {URGENCY_OPTIONS.map((u) => (
              <button key={u.value} type="button"
                onClick={() => {
                  set("urgency", u.value);
                  next(u.value === "asap" ? "notes" : "urgency_followup");
                }}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 font-semibold text-sm transition-all cursor-pointer text-left ${form.urgency === u.value ? "border-[#4a9fa5] bg-[#4a9fa5]/10 text-[#4a9fa5]" : "border-[#e8e8e0] text-[#1a1a1a] hover:border-[#4a9fa5]/50"}`}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full flex-shrink-0">
                  <i className={`${u.icon} text-[#4a9fa5] text-lg`}></i>
                </div>
                <div>
                  <div className="font-black text-base">{u.label}</div>
                  <div className="text-[#1a1a1a]/50 font-normal text-xs">{u.sub}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6"><BackButton onClick={() => next("property")} /></div>
        </StepWrapper>
      )}

      {/* STEP 4: Urgency follow-up — only for "month" and "planning" */}
      {step === "urgency_followup" && form.urgency === "month" && (
        <StepWrapper icon="ri-calendar-line" question="Do you have a target date in mind?" sub="Even a rough timeframe helps us plan">
          <input
            type="text" name="target_date" value={form.targetDate}
            onChange={(e) => set("targetDate", e.target.value)}
            placeholder="e.g. End of May, Early June..." autoFocus
            className="w-full border-b-2 border-[#e8e8e0] focus:border-[#4a9fa5] outline-none bg-transparent text-[#1a1a1a] text-xl font-semibold py-3 transition-colors placeholder:text-[#1a1a1a]/25"
          />
          <div className="flex gap-3 mt-6">
            <BackButton onClick={() => next("urgency")} />
            <NextButton disabled={!form.targetDate.trim()} onClick={() => next("notes")} />
          </div>
        </StepWrapper>
      )}

      {step === "urgency_followup" && form.urgency === "planning" && (
        <StepWrapper icon="ri-money-dollar-circle-line" question="What's your approximate budget range?" sub="No commitment — just helps us give you the right info">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
            {BUDGET_RANGES.map((b) => (
              <button key={b} type="button"
                onClick={() => { set("budget", b); next("notes"); }}
                className={`px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${form.budget === b ? "border-[#4a9fa5] bg-[#4a9fa5]/10 text-[#4a9fa5]" : "border-[#e8e8e0] text-[#1a1a1a] hover:border-[#4a9fa5]/50"}`}
              >{b}</button>
            ))}
          </div>
          <div className="mt-6"><BackButton onClick={() => next("urgency")} /></div>
        </StepWrapper>
      )}

      {/* STEP 5: Notes */}
      {step === "notes" && (
        <StepWrapper icon="ri-file-text-line" question="Anything else we should know?" sub="Describe your project, colors, concerns — anything helps">
          <textarea
            name="notes" value={form.notes} rows={4} maxLength={500}
            onChange={(e) => { if (e.target.value.length <= 500) set("notes", e.target.value); }}
            placeholder="e.g. 3-bedroom house, want to repaint living room and hallway..."
            className="w-full border-2 border-[#e8e8e0] focus:border-[#4a9fa5] outline-none bg-transparent text-[#1a1a1a] text-base font-semibold p-4 rounded-xl transition-colors placeholder:text-[#1a1a1a]/25 resize-none"
          />
          <div className="text-right text-xs text-[#1a1a1a]/40 mt-1">{form.notes.length}/500</div>
          <div className="flex gap-3 mt-4">
            <BackButton onClick={() => next(form.urgency === "asap" ? "urgency" : "urgency_followup")} />
            <NextButton disabled={false} onClick={() => next("name")} />
          </div>
        </StepWrapper>
      )}

      {/* STEP 6: Name */}
      {step === "name" && (
        <StepWrapper
          icon="ri-user-3-line"
          question="Almost done — what's your name?"
          sub="So Lopaka knows who to reach out to"
        >
          <input
            type="text" name="name" value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Full Name" autoFocus
            className="w-full border-b-2 border-[#e8e8e0] focus:border-[#4a9fa5] outline-none bg-transparent text-[#1a1a1a] text-xl font-semibold py-3 transition-colors placeholder:text-[#1a1a1a]/25"
          />
          <div className="flex gap-3 mt-6">
            <BackButton onClick={() => next("notes")} />
            <NextButton disabled={!form.name.trim()} onClick={() => next("phone")} />
          </div>
        </StepWrapper>
      )}

      {/* STEP 7: Phone — final step, submit here */}
      {step === "phone" && (
        <StepWrapper
          icon="ri-phone-line"
          question="Best number for Lopaka to call?"
          sub="Your free estimate is one step away"
        >
          <input
            type="tel" name="phone" value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="(808) 000-0000" autoFocus
            className="w-full border-b-2 border-[#e8e8e0] focus:border-[#4a9fa5] outline-none bg-transparent text-[#1a1a1a] text-xl font-semibold py-3 transition-colors placeholder:text-[#1a1a1a]/25"
          />
          {/* Optional email */}
          <div className="mt-5">
            <p className="text-xs text-[#1a1a1a]/40 font-semibold uppercase tracking-widest mb-2">Email (optional)</p>
            <input
              type="email" name="email" value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="your@email.com"
              className="w-full border-b-2 border-[#e8e8e0] focus:border-[#4a9fa5] outline-none bg-transparent text-[#1a1a1a] text-base font-semibold py-2 transition-colors placeholder:text-[#1a1a1a]/25"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
          <div className="flex gap-3 mt-6">
            <BackButton onClick={() => next("name")} />
            <button type="button" onClick={handleSubmit} disabled={submitting || !form.phone.trim()}
              className="flex-1 flex items-center justify-center gap-2 bg-[#4a9fa5] hover:bg-[#3d8a8f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              {submitting
                ? <><i className="ri-loader-4-line animate-spin"></i> Sending...</>
                : <><i className="ri-send-plane-fill"></i> GET MY FREE ESTIMATE</>
              }
            </button>
          </div>
          <p className="text-center text-xs text-[#1a1a1a]/30 mt-3">No spam. Lopaka calls personally — usually same day.</p>
        </StepWrapper>
      )}
    </form>
  );
}

function StepWrapper({ icon, question, sub, children }: { icon: string; question: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="animate-fadeIn">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 flex items-center justify-center bg-[#4a9fa5]/10 rounded-full flex-shrink-0">
          <i className={`${icon} text-[#4a9fa5] text-lg`}></i>
        </div>
        <div>
          <h3 className="text-[#1a1a1a] font-black text-xl leading-tight">{question}</h3>
          <p className="text-[#1a1a1a]/50 text-sm">{sub}</p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function NextButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}
      className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed text-white font-black text-sm tracking-wider px-8 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap"
    >
      NEXT <i className="ri-arrow-right-line"></i>
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="flex items-center justify-center gap-2 border-2 border-[#e8e8e0] hover:border-[#1a1a1a] text-[#1a1a1a]/50 hover:text-[#1a1a1a] font-bold text-sm px-6 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap"
    >
      <i className="ri-arrow-left-line"></i> BACK
    </button>
  );
}
