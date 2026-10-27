"use client";

import { FormEvent, useState } from "react";
import siteData from "@/data/site.json";
import { CheckIcon } from "./Icons";

export default function ConsultationForm() {
  const { form } = siteData.hero;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full max-w-[400px] rounded-[20px] bg-white p-5 shadow-[0_22px_55px_rgba(6,20,40,0.35)] sm:p-6">
      <h2 className="font-display text-[1.45rem] leading-tight font-semibold text-[var(--color-navy)] sm:text-[1.6rem]">
        {form.title}
      </h2>
      <p className="mt-1.5 text-[13px] leading-snug text-[var(--color-muted)]">
        {form.subtitle}
      </p>

      <form className="mt-4 space-y-2.5" onSubmit={handleSubmit} id="book">
        <div className="grid grid-cols-2 gap-2.5">
          <input
            type="text"
            name="firstName"
            required={form.fields.firstName.required}
            placeholder={form.fields.firstName.placeholder}
            className="field"
            autoComplete="given-name"
          />
          <input
            type="text"
            name="lastName"
            required={form.fields.lastName.required}
            placeholder={form.fields.lastName.placeholder}
            className="field"
            autoComplete="family-name"
          />
        </div>

        <div className="field-group">
          <span className="inline-flex items-center gap-1.5 border-r border-slate-200 pr-2.5 text-[13px] text-slate-600">
            <span aria-hidden="true">{form.fields.whatsapp.flag}</span>
            {form.fields.whatsapp.countryCode}
          </span>
          <input
            type="tel"
            name="whatsapp"
            required={form.fields.whatsapp.required}
            placeholder={form.fields.whatsapp.placeholder}
            className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[13px] text-[var(--color-ink)] outline-none placeholder:text-slate-400"
            autoComplete="tel"
          />
        </div>

        <div className="relative">
          <select
            name="country"
            defaultValue={form.fields.country.defaultValue}
            className="field appearance-none pr-9"
            aria-label={form.fields.country.placeholder}
          >
            {form.fields.country.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <SelectChevron />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="relative">
            <select
              name="state"
              defaultValue=""
              required
              className="field appearance-none pr-8"
              aria-label={form.fields.state.placeholder}
            >
              <option value="" disabled>
                {form.fields.state.placeholder}
              </option>
              {form.fields.state.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectChevron />
          </div>
          <div className="relative">
            <select
              name="city"
              defaultValue=""
              required
              className="field appearance-none pr-8"
              aria-label={form.fields.city.placeholder}
            >
              <option value="" disabled>
                {form.fields.city.placeholder}
              </option>
              {form.fields.city.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectChevron />
          </div>
        </div>

        <textarea
          name="message"
          rows={3}
          placeholder={form.fields.message.placeholder}
          className="field min-h-[72px] resize-none py-2.5"
        />

        <button
          type="submit"
          className="btn-teal flex w-full items-center justify-center rounded-full px-5 py-3 text-[14px] font-semibold"
        >
          {submitted ? "Request Received" : form.submitLabel}
        </button>
      </form>

      <div className="mt-3.5 space-y-1.5">
        {form.trustSignals.map((signal) => (
          <p
            key={signal}
            className="flex items-center justify-center gap-1.5 text-[12px] text-[var(--color-muted)]"
          >
            <CheckIcon className="size-3.5 text-[var(--color-teal)]" />
            <span>{signal}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function SelectChevron() {
  return (
    <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400">
      <svg
        className="size-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
