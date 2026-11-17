"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

export default function BookAppointmentHero() {
  const data = siteData.bookAppointmentPage;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: "Noida",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <>
      <section
        className="relative overflow-hidden py-5 sm:py-6 lg:flex lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:flex-col lg:justify-center lg:py-8"
        style={{
          background: "var(--pink)",
        }}
      >
        {/* Ambient background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[8%] h-[360px] w-[360px] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[-5%] h-[280px] w-[280px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(232,62,116,0.1) 0%, transparent 68%)",
          }}
        />

        <div className="page-container relative z-10 w-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-6">
              <Breadcrumb
                className="mb-3 sm:mb-4"
                items={[
                  { label: "Patient Resources", href: "/ivf-faqs" },
                  { label: data.breadcrumb },
                ]}
              />

              <Reveal variant="slideLeft">
                <p className="text-[12.5px] font-semibold tracking-wide text-rose sm:text-[13.5px]">
                  {data.eyebrow}
                </p>
                <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.85rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.45rem] xl:text-[2.7rem]">
                  {data.title}
                </h1>
                <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-ink/75 sm:mt-3.5 sm:text-[14.5px]">
                  {data.subtitle}
                </p>

                {/* CTAs */}
                <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
                  <a
                    href={data.primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    {data.primaryCta.label}
                  </a>
                  <Link
                    href={data.secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(6,21,50,0.35)] transition-all hover:bg-blue-mid hover:shadow-[0_6px_20px_rgba(6,21,50,0.45)] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    {data.secondaryCta.label}
                  </Link>
                </div>

                {/* Reviews Link */}
                <div className="mt-3.5 sm:mt-4">
                  <Link
                    href={data.profileReview.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-rose transition-colors hover:text-rose-dark sm:text-[13.5px]"
                  >
                    <span>{data.profileReview.text}</span>
                  </Link>
                </div>

                {/* Doctor Credentials Quote Box */}
                <div className="mt-4 max-w-xl rounded-[16px] border border-rose/30 bg-white/90 p-3.5 shadow-sm backdrop-blur-sm sm:mt-5 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose" />
                    <p className="text-[12.5px] leading-relaxed font-medium text-ink/85 sm:text-[13.5px]">
                      {data.quote}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Request an Appointment Form */}
            <div className="lg:col-span-6">
              <div className="rounded-[24px] border border-[#fde2ec] bg-white p-5 shadow-xl sm:p-6">
                <h2 className="font-serif text-[20px] font-bold tracking-tight text-ink sm:text-[22px]">
                  Request an appointment
                </h2>

                {submitted ? (
                  <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-blue/40 bg-[#f0f9ff] p-5 text-center text-blue">
                    <FaCheckCircle className="size-10 text-blue" />
                    <h3 className="mt-2.5 text-base font-bold text-ink">
                      Request Received!
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Our team will call you shortly at {formData.phone} to
                      confirm your slot at {formData.clinic} clinic.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-3 cursor-pointer text-xs font-semibold text-rose underline underline-offset-2"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-3.5 space-y-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[12px] font-semibold text-slate-700">
                          Your name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-3 py-2 text-[13.5px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] font-semibold text-slate-700">
                          Phone number
                        </label>
                        <div className="mt-1 flex rounded-xl border border-slate-200 bg-[#f8fafc] transition-all focus-within:border-rose focus-within:bg-white focus-within:ring-1 focus-within:ring-rose/30">
                          <div className="flex items-center gap-1.5 border-r border-slate-200 px-2.5 text-[12.5px] text-slate-600">
                            <span className="text-[14px] leading-none">🇮🇳</span>
                            <span className="font-semibold text-ink">+91</span>
                            <FaChevronDown className="size-2 text-slate-400" />
                          </div>
                          <input
                            type="tel"
                            required
                            placeholder="Enter Phone"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full bg-transparent px-3 py-2 text-[13.5px] text-ink outline-none placeholder:text-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700">
                        Preferred clinic
                      </label>
                      <div className="relative mt-1">
                        <select
                          value={formData.clinic}
                          onChange={(e) =>
                            setFormData({ ...formData, clinic: e.target.value })
                          }
                          className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3 py-2 text-[13.5px] text-ink outline-none transition-all focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                        >
                          <option value="Noida" className="bg-white text-ink">
                            Noida
                          </option>
                          <option
                            value="Ghaziabad"
                            className="bg-white text-ink"
                          >
                            Ghaziabad
                          </option>
                          <option value="Delhi" className="bg-white text-ink">
                            Delhi
                          </option>
                        </select>
                        <FaChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-3 -translate-y-1/2 text-slate-500" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700">
                        Anything you want us to know (optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Share your query or preferred time (optional)"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="mt-1 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3 py-2 text-[13.5px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-1 w-full cursor-pointer rounded-[16px] bg-rose py-2.5 text-[14px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-rose-dark active:scale-[0.99]"
                    >
                      Request an appointment
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#fde2ec]/70 bg-white py-7 sm:py-9">
        <div className="page-container relative">
          <HeroCounterBar items={data.counter} />
        </div>
      </section>
    </>
  );
}
