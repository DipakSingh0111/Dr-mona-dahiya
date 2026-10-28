"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaUsers,
  FaPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCalendarAlt,
  FaChevronDown,
  FaVideo,
  FaDollarSign,
} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function BookAppointment() {
  const data = siteData.bookAppointment;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="book-appointment"
      className="relative overflow-hidden px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4"
    >
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[28px] min-h-[640px] sm:min-h-[680px]">
        {/* Background couple photo — visible on right like reference */}
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt="Happy couple consulting for IVF with Dr. Mona"
            fill
            priority
            sizes="100vw"
            className="scale-[1.02] object-cover object-[78%_center] blur-[1.5px]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(6,14,32,0.88) 0%, rgba(8,18,40,0.82) 34%, rgba(10,22,48,0.45) 58%, rgba(10,22,48,0.18) 78%, rgba(10,22,48,0.08) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)] lg:gap-8 lg:px-10 lg:py-14 xl:gap-10 xl:px-12">
          {/* Left */}
          <Reveal variant="slideLeft" className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff4d8d]" />
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff4d8d] uppercase sm:text-xs">
                {data.eyebrow}
              </span>
              <span className="h-px w-8 bg-[#ff4d8d]" />
            </div>

            <h2 className="font-display text-[1.9rem] leading-[1.15] font-bold text-white sm:text-[2.45rem] lg:text-[2.85rem]">
              <span className="block">{data.titleLine1}</span>
              <span className="text-[#ff4d8d]">{data.titleAccent}</span>
            </h2>

            <p className="mt-3.5 max-w-md text-[13.5px] leading-relaxed text-white/85 sm:text-[15px]">
              {data.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#ff4d8d] px-5 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_10px_28px_rgba(255,77,141,0.35)] transition hover:bg-[#e83e74]"
              >
                <FaCalendarAlt className="size-3.5" />
                {data.primaryCta.label}
                <FaArrowRight className="size-3.5" />
              </a>
              <a
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#1f2a44]/25 bg-white px-5 py-3.5 text-[13.5px] font-semibold text-[#0f2438] transition hover:bg-[#fff5f8]"
              >
                <FaVideo className="size-3.5 text-[#ff4d8d]" />
                {data.secondaryCta.label}
                <FaArrowRight className="size-3.5 text-[#ff4d8d]" />
              </a>
            </div>

            <Stagger className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.1}>
              {data.pricing.map((plan) => (
                <StaggerItem key={plan.id} variant="scaleIn">
                <div className="rounded-2xl bg-[#f3f4f6]/95 p-4 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full ${
                        plan.tone === "pink"
                          ? "bg-[#ffe4ee] text-[#ff4d8d]"
                          : "bg-[#e8f2ff] text-[#3b82f6]"
                      }`}
                    >
                      {plan.icon === "plane" ? (
                        <FaPlane className="size-4" />
                      ) : (
                        <FaUsers className="size-4" />
                      )}
                    </span>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 uppercase">
                        {plan.label}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1 font-display text-[2.05rem] leading-none font-bold text-[#0f2438] sm:text-[2.2rem]">
                        {plan.id === "foreign" ? (
                          <>
                            <span className="text-[1.05rem] font-bold tracking-wide sm:text-[1.15rem]">
                              US
                            </span>
                            <FaDollarSign className="size-[0.82em] shrink-0" />
                            <span>25</span>
                          </>
                        ) : (
                          <>
                            <FaIndianRupeeSign className="size-[0.82em] shrink-0" />
                            <span>1,000</span>
                          </>
                        )}
                      </p>
                      <p className="mt-1.5 text-[12px] text-zinc-500">
                        {plan.note}
                      </p>
                    </div>
                  </div>
                </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Stagger
              className="mt-8 grid grid-cols-1 gap-4 border-t border-white/20 pt-6 sm:grid-cols-3 sm:gap-3"
              stagger={0.08}
              delay={0.1}
            >
              {data.contacts.map((item) => {
                const Icon =
                  item.icon === "mail"
                    ? FaEnvelope
                    : item.icon === "clock"
                      ? FaClock
                      : FaPhoneAlt;
                const content = (
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ff4d8d] text-white">
                      <Icon className="size-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-wide text-white/55 uppercase">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug font-semibold text-white">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );

                return (
                  <StaggerItem key={item.id}>
                    {item.href ? (
                      <a href={item.href} className="hover:opacity-90">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Reveal>

          {/* Right form — 2-column fields like reference */}
          <Reveal
            variant="slideRight"
            className="w-full max-w-[460px] justify-self-center lg:justify-self-end"
          >
            <div className="rounded-[24px] bg-white p-5 shadow-[0_24px_55px_rgba(6,20,40,0.3)] sm:p-7">
              <div className="mb-5 flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ffe4ee] text-[#ff4d8d]">
                  <FaCalendarAlt className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.35rem] font-bold text-[#0f2438] sm:text-[1.5rem]">
                    {data.form.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-500">
                    {data.form.subtitle}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-[#b7ebc8] bg-[#f0fdf4] px-4 py-6 text-center">
                  <p className="font-semibold text-[#166534]">
                    Request received
                  </p>
                  <p className="mt-1 text-[13px] text-[#15803d]">
                    Our team will call you shortly to confirm your slot.
                  </p>
                </div>
              ) : (
                <form className="space-y-3.5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[12.5px] font-semibold text-[#0f2438]">
                        Full name
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Enter your full name"
                        className="field"
                        autoComplete="name"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[12.5px] font-semibold text-[#0f2438]">
                        Phone
                      </span>
                      <div className="field-group">
                        <span className="inline-flex items-center gap-1.5 border-r border-slate-200 pr-2.5 text-[13px] text-slate-600">
                          <span aria-hidden>🇮🇳</span>
                          +91
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Enter phone number"
                          className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[13px] text-[var(--color-ink)] outline-none placeholder:text-slate-400"
                          autoComplete="tel"
                        />
                      </div>
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[12.5px] font-semibold text-[#0f2438]">
                        Preferred clinic
                      </span>
                      <div className="relative">
                        <select
                          name="clinic"
                          defaultValue="Noida"
                          className="field appearance-none pr-9"
                        >
                          {data.form.clinics.map((clinic) => (
                            <option key={clinic} value={clinic}>
                              {clinic}
                            </option>
                          ))}
                        </select>
                        <FaChevronDown className="pointer-events-none absolute top-1/2 right-3 size-3 -translate-y-1/2 text-slate-400" />
                      </div>
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[12.5px] font-semibold text-[#0f2438]">
                        Preferred date
                      </span>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          required
                          className="field pr-10"
                        />
                        <FaCalendarAlt className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-[#ff4d8d]" />
                      </div>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#ff4d8d] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(255,77,141,0.32)] transition hover:bg-[#e83e74]"
                  >
                    {data.form.submitLabel}
                    <FaArrowRight className="size-3.5" />
                  </button>

                  <p className="pt-1 text-center text-[11.5px] text-zinc-400">
                    {data.form.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
