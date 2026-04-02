"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

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

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-full max-w-[325px] rounded-[12px] bg-white px-6 pb-6 pt-8 text-center shadow-2xl md:max-w-[420px] md:px-8 md:pb-8 md:pt-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-[#5f5f5f] text-white transition-opacity hover:opacity-85"
        >
          <X size={18} />
        </button>

        <img
          src="/images/contact/success-badge.svg"
          alt="Success"
          className="mx-auto mb-6 size-[169px]"
        />

        <h2 className="mb-2 text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-artic-ebony">
          Succes!
        </h2>
        <p className="mx-auto mb-5 max-w-[277px] text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-artic-grey-400">
          Thank you for filling out the form. Our team will get back to you as
          soon as possible.
        </p>

        <Link
          href="/"
          className="flex h-[58px] w-full items-center justify-center rounded-[6px] bg-artic-persian px-10 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          Back to Home -&gt;
        </Link>
      </div>
    </div>
  );
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-artic-grey-400">
        {label}
      </span>
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
          "h-[58px] w-full rounded-[6px] border px-[18px] text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-artic-ebony outline-none transition-colors placeholder:text-artic-grey-200",
          error
            ? "border-[#ff383c] focus:border-[#ff383c]"
            : active
              ? "border-artic-teal-dark focus:border-artic-teal-dark"
              : "border-artic-grey-100 focus:border-artic-teal-dark"
        )}
      />
      {error && (
        <div className="flex items-center gap-1.5">
          <Info size={18} className="shrink-0 text-[#ff383c]" />
          <span className="text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-[#ff383c]">
            {error}
          </span>
        </div>
      )}
    </div>
  );
}

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
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please input your valid e-mail";
    }
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
    <section className="py-[54px] md:py-20">
      {submitted && <SuccessModal onClose={() => setSubmitted(false)} />}

      <Container className="px-5 md:px-20 lg:px-44">
        <h2 className="mb-6 max-w-[314px] text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-artic-ebony md:mb-14 md:max-w-[480px] md:text-[40px]">
          We&apos;re Here to Help and Support You!
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex max-w-[353px] flex-col gap-6 md:max-w-none">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
              <div className="flex flex-col gap-2">
                <FieldLabel label="E-mail" required />
                <InputField
                  value={form.email}
                  onChange={set("email")}
                  placeholder="Your e-mail"
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

            <div className="flex flex-col gap-2">
              <FieldLabel label="Subject" required />
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSubjectOpen((open) => !open)}
                  className={cn(
                    "flex h-[58px] w-full items-center justify-between rounded-[6px] border px-[18px] text-[14px] font-normal leading-[1.4] tracking-[-0.02em] outline-none transition-colors",
                    errors.subject
                      ? "border-[#ff383c] text-artic-grey-200"
                      : form.subject
                        ? "border-artic-teal-dark text-artic-ebony"
                        : "border-artic-grey-100 text-artic-grey-200"
                  )}
                >
                  <span>{form.subject || "Select Subject"}</span>
                  <ChevronDown
                    size={18}
                    className={cn("transition-transform", subjectOpen && "rotate-180")}
                  />
                </button>
                {subjectOpen && (
                  <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-[6px] border border-artic-grey-100 bg-white shadow-lg">
                    {SUBJECTS.map((subject) => (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => {
                          set("subject")(subject);
                          setSubjectOpen(false);
                        }}
                        className={cn(
                          "w-full px-[18px] py-3 text-left text-[14px] transition-colors hover:bg-artic-surface",
                          form.subject === subject
                            ? "text-artic-persian"
                            : "text-artic-grey-400"
                        )}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.subject && (
                <div className="flex items-center gap-1.5">
                  <Info size={18} className="shrink-0 text-[#ff383c]" />
                  <span className="text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-[#ff383c]">
                    {errors.subject}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabel label="Message" required />
              <textarea
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="Write your message..."
                rows={6}
                className={cn(
                  "h-[240px] w-full resize-none rounded-[6px] border px-[18px] py-[18px] text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-artic-ebony outline-none transition-colors placeholder:text-artic-grey-200",
                  errors.message
                    ? "border-[#ff383c] focus:border-[#ff383c]"
                    : form.message
                      ? "border-artic-teal-dark focus:border-artic-teal-dark"
                      : "border-artic-grey-100 focus:border-artic-teal-dark"
                )}
              />
              {errors.message && (
                <div className="flex items-center gap-1.5">
                  <Info size={18} className="shrink-0 text-[#ff383c]" />
                  <span className="text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-[#ff383c]">
                    {errors.message}
                  </span>
                </div>
              )}
            </div>

            {apiError && <p className="text-[14px] text-[#ff383c]">{apiError}</p>}

            <div>
              <button
                type="submit"
                className={cn(
                  "flex h-[58px] w-full items-center justify-center rounded-[6px] bg-artic-persian px-10 text-[16px] font-semibold text-white transition-opacity hover:opacity-90 md:w-[353px]",
                  loading && "pointer-events-none opacity-70"
                )}
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}
