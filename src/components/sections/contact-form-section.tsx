"use client";

import { useState } from "react";
import { ChevronDown, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/common/primary-button";

const SUBJECTS = [
  "Research Collaboration",
  "Consulting Inquiry",
  "Data Services",
  "Policy Lab",
  "Academic Partnership",
  "General Inquiry",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

/* ── Success Popup ── */
function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Card */}
      <div className="relative w-full max-w-100 rounded-[25px] bg-white px-8 pb-8 pt-10 text-center shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-artic-grey-100/60 text-artic-grey-300 transition-colors hover:bg-artic-grey-100"
        >
          <X size={16} />
        </button>

        {/* Icon */}
        <img
          src="/images/contact/success-badge.svg"
          alt="Success"
          className="mx-auto mb-6 size-24"
        />

        {/* Text */}
        <h2 className="mb-2.5 text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony">
          Succes!
        </h2>
        <p className="mx-auto mb-7 max-w-67.5 text-[13px] font-medium leading-normal text-artic-grey-400">
          Thank you for filling out the form. Our team will get back to you as soon as possible.
        </p>

        {/* Button */}
        <PrimaryButton href="/" className="mx-auto w-full py-3.5 text-[15px]">
          Back to Home →
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ── Field helpers ── */
function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="text-[12px] font-normal leading-[1.5] text-artic-grey-400 md:text-[13px]">{label}</span>
      {required && <span className="text-[13px] font-medium text-[#ff383c]">*</span>}
    </div>
  );
}

function InputField({
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  active,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  error?: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-[10px] border px-4 py-3 text-[13px] font-medium leading-[1.5] tracking-[-0.02em] text-artic-ebony outline-none transition-colors placeholder:text-artic-grey-200 md:text-[14px]",
          error
            ? "border-[#ff383c] focus:border-[#ff383c]"
            : active
            ? "border-artic-teal-dark focus:border-artic-teal-dark"
            : "border-artic-grey-100 focus:border-artic-teal-dark"
        )}
      />
      {error && (
        <div className="flex items-center gap-1.5">
          <Info size={14} className="shrink-0 text-[#ff383c]" />
          <span className="text-[12px] font-normal leading-[1.5] text-[#ff383c]">{error}</span>
        </div>
      )}
    </div>
  );
}

/* ── Main section ── */
export function ContactFormSection() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  function set(field: keyof FormState) {
    return (value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function validate(): boolean {
    const next: ErrorState = {};
    if (!form.firstName.trim()) next.firstName = "Please enter your first name";
    if (!form.lastName.trim()) next.lastName = "Please enter your last name";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please input your valid e-mail";
    if (!form.phone.trim()) next.phone = "Please enter your phone number";
    if (!form.subject) next.subject = "Please select a subject";
    if (!form.message.trim()) next.message = "Please write your message";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setApiError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setApiError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-14 md:py-20">
      {submitted && <SuccessModal onClose={() => setSubmitted(false)} />}

      <Container className="px-8 md:px-20 lg:px-44">
        {/* Heading */}
        <h2 className="mb-10 max-w-[380px] text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony md:mb-14 md:max-w-[480px] md:text-[40px]">
          We're Here to Help and Support You!
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-5">
            {/* Row 1: First Name + Last Name */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <FieldLabel label="First Name" required />
                <InputField
                  value={form.firstName}
                  onChange={set("firstName")}
                  placeholder="First Name"
                  error={errors.firstName}
                  active={!!form.firstName && !errors.firstName}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FieldLabel label="Last Name" required />
                <InputField
                  value={form.lastName}
                  onChange={set("lastName")}
                  placeholder="Last Name"
                  error={errors.lastName}
                  active={!!form.lastName && !errors.lastName}
                />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <FieldLabel label="E-mail" required />
                <InputField
                  value={form.email}
                  onChange={set("email")}
                  placeholder="Your E-mail"
                  type="email"
                  error={errors.email}
                  active={!!form.email && !errors.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FieldLabel label="Phone Number" required />
                <InputField
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+62"
                  type="tel"
                  error={errors.phone}
                  active={!!form.phone && !errors.phone}
                />
              </div>
            </div>

            {/* Subject dropdown */}
            <div className="flex flex-col gap-2">
              <FieldLabel label="Subject" required />
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSubjectOpen((o) => !o)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-[10px] border px-4 py-3 text-[13px] font-medium leading-[1.5] tracking-[-0.02em] outline-none transition-colors md:text-[14px]",
                    errors.subject
                      ? "border-[#ff383c] text-artic-grey-200"
                      : form.subject
                      ? "border-artic-teal-dark text-artic-ebony"
                      : "border-artic-grey-100 text-artic-grey-200"
                  )}
                >
                  <span>{form.subject || "Select subject"}</span>
                  <ChevronDown size={16} className={cn("transition-transform", subjectOpen && "rotate-180")} />
                </button>
                {subjectOpen && (
                  <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-[10px] border border-artic-grey-100 bg-white shadow-lg">
                    {SUBJECTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => { set("subject")(s); setSubjectOpen(false); }}
                        className={cn(
                          "w-full px-4 py-2.5 text-left text-[13px] font-medium transition-colors hover:bg-artic-surface",
                          form.subject === s ? "text-artic-persian" : "text-artic-grey-400"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.subject && (
                <div className="flex items-center gap-1.5">
                  <Info size={14} className="shrink-0 text-[#ff383c]" />
                  <span className="text-[12px] font-normal leading-[1.5] text-[#ff383c]">{errors.subject}</span>
                </div>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <FieldLabel label="Message" required />
              <textarea
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="Write your message..."
                rows={6}
                className={cn(
                  "w-full resize-none rounded-[10px] border px-4 py-3 text-[13px] font-medium leading-[1.5] tracking-[-0.02em] text-artic-ebony outline-none transition-colors placeholder:text-artic-grey-200 md:text-[14px]",
                  errors.message
                    ? "border-[#ff383c] focus:border-[#ff383c]"
                    : form.message
                    ? "border-artic-teal-dark focus:border-artic-teal-dark"
                    : "border-artic-grey-100 focus:border-artic-teal-dark"
                )}
              />
              {errors.message && (
                <div className="flex items-center gap-1.5">
                  <Info size={14} className="shrink-0 text-[#ff383c]" />
                  <span className="text-[12px] font-normal leading-[1.5] text-[#ff383c]">{errors.message}</span>
                </div>
              )}
            </div>

            {/* API error */}
            {apiError && (
              <p className="text-[13px] text-[#ff383c]">{apiError}</p>
            )}

            {/* Submit */}
            <div>
              <PrimaryButton
                type="submit"
                className={cn("px-7 py-3.5 text-[14px]", loading && "pointer-events-none opacity-70")}
              >
                {loading ? "Sending..." : "Submit Message"}
              </PrimaryButton>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}
