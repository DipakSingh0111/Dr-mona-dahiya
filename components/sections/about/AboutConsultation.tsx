"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function AboutConsultation() {
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
    <section
      id="book-consultation"
      className="relative overflow-hidden bg-[#101e23] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Details, CTAs, Pricing & Addresses */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Eyebrow */}
              <span className="text-[13px] font-semibold tracking-wide text-[#f26a80]">
                Next step
              </span>

              {/* Title */}
              <h2 className="font-serif mt-2 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-[#f1f5f9] sm:text-[2.75rem] lg:text-[3.1rem]">
                Book a Consultation
                <br />
                with Dr. Mona Dahiya
              </h2>

              {/* Subtitle */}
              <p className="mt-3 text-[14px] leading-relaxed text-[#94a3b8] sm:text-[15px]">
                Book an in-clinic consultation or an online record review.
                <br />
                Appointment line:{" "}
                <a
                  href="tel:+919267982924"
                  className="text-[#cbd5e1] hover:text-white"
                >
                  +91 92679 82924
                </a>{" "}
                &middot;{" "}
                <a
                  href="mailto:info@drmonadahiya.com"
                  className="text-[#cbd5e1] hover:text-white"
                >
                  info@drmonadahiya.com
                </a>
                .
              </p>

              {/* Two CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-7">
                <a
                  href="#request-appointment-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#ba3d5d] px-6 py-3 text-[14px] font-medium text-white shadow-md transition-all duration-200 hover:bg-[#a62b48] active:scale-98"
                >
                  Book In-Clinic Consultation
                </a>
                <Link
                  href="/online-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d64b4] px-6 py-3 text-[14px] font-medium text-white shadow-md transition-all duration-200 hover:bg-[#185396] active:scale-98"
                >
                  Schedule Online Consultation
                </Link>
              </div>

              {/* 2 Pricing Tiles */}
              <div className="mt-7 flex flex-wrap gap-4">
                {/* Indian Nationals */}
                <div className="w-[168px] rounded-[18px] border border-[#155e75] bg-[#0c232c]/85 p-4 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#38bdf8] uppercase">
                    Indian Nationals
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-[#38bdf8]">
                    &#8377;1,000
                  </div>
                  <p className="mt-1 text-[11.5px] text-[#94a3b8]">
                    Online consultation
                  </p>
                  <p className="text-[11.5px] text-[#94a3b8]">30 minutes</p>
                </div>

                {/* Foreign Patients */}
                <div className="w-[168px] rounded-[18px] border border-[#155e75] bg-[#0c232c]/85 p-4 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#38bdf8] uppercase">
                    Foreign Patients
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-[#38bdf8]">
                    US$25
                  </div>
                  <p className="mt-1 text-[11.5px] text-[#94a3b8]">
                    Online consultation
                  </p>
                  <p className="text-[11.5px] text-[#94a3b8]">30 minutes</p>
                </div>
              </div>

              {/* Phone & Email Details */}
              <div className="mt-7 flex flex-wrap items-center gap-10">
                <div>
                  <span className="text-[12px] font-medium text-[#f26a80]">
                    Phone
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="tel:+919267982924"
                      className="text-[15px] font-bold text-white hover:text-[#38bdf8]"
                    >
                      +91 92679 82924
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[12px] font-medium text-[#f26a80]">
                    Email
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="mailto:info@drmonadahiya.com"
                      className="text-[15px] font-bold text-white hover:text-[#38bdf8]"
                    >
                      info@drmonadahiya.com
                    </a>
                  </div>
                </div>
              </div>

              {/* 3 Clinics addresses */}
              <div className="mt-7 space-y-3 text-[13px] leading-relaxed text-[#94a3b8]">
                <div>
                  <strong className="font-bold text-white">Delhi</strong>{" "}
                  Building Number 41, First Floor, Ring Road, Block Q, Lajpat
                  Nagar IV, Lajpat Nagar, New Delhi 110024
                </div>
                <div>
                  <strong className="font-bold text-white">Noida</strong> 3rd
                  Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar
                  Pradesh 201301
                </div>
                <div>
                  <strong className="font-bold text-white">Ghaziabad</strong>{" "}
                  2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10,
                  Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Request an appointment Form Card */}
          <div className="lg:col-span-5" id="request-appointment-form">
            <div className="rounded-[26px] border border-white/10 bg-[#16272e] p-6 shadow-2xl sm:p-8">
              <h3 className="font-serif text-[22px] font-normal tracking-tight text-white sm:text-[24px]">
                Request an appointment
              </h3>

              {submitted ? (
                <div className="mt-6 flex flex-col items-center justify-center rounded-2xl bg-[#0c181d] border border-emerald-500/30 p-6 text-center text-emerald-300">
                  <FaCheckCircle className="size-12 text-emerald-400" />
                  <h4 className="mt-3 text-lg font-bold text-white">
                    Request Received!
                  </h4>
                  <p className="mt-1 text-sm text-slate-300">
                    Our team will call you shortly at {formData.phone} to
                    confirm your slot at {formData.clinic} clinic.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#38bdf8] underline underline-offset-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  {/* Your name & Phone number row */}
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {/* Your name */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-white">
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
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#0c181d] px-3.5 py-2.5 text-[14px] text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#38bdf8]"
                      />
                    </div>

                    {/* Phone number */}
                    <div>
                      <label className="block text-[12.5px] font-semibold text-white">
                        Phone number
                      </label>
                      <div className="mt-1.5 flex rounded-xl border border-white/15 bg-[#0c181d] focus-within:border-[#38bdf8]">
                        <div className="flex items-center gap-1.5 border-r border-white/15 px-3 text-[13px] text-slate-300">
                          <span className="font-semibold text-slate-400">IN</span>
                          <span>+91</span>
                          <span className="text-[10px] text-slate-400">▾</span>
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="Enter Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-transparent px-3 py-2.5 text-[14px] text-white outline-none placeholder:text-slate-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred clinic */}
                  <div>
                    <label className="block text-[12.5px] font-semibold text-white">
                      Preferred clinic
                    </label>
                    <div className="relative mt-1.5">
                      <select
                        value={formData.clinic}
                        onChange={(e) =>
                          setFormData({ ...formData, clinic: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl border border-white/15 bg-[#0c181d] px-3.5 py-2.5 text-[14px] text-white outline-none transition-all focus:border-[#38bdf8]"
                      >
                        <option value="Noida" className="bg-[#101e23]">
                          Noida
                        </option>
                        <option value="Ghaziabad" className="bg-[#101e23]">
                          Ghaziabad
                        </option>
                        <option value="Delhi" className="bg-[#101e23]">
                          Delhi
                        </option>
                      </select>
                      <FaChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-3 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {/* Anything you want us to know (optional) */}
                  <div>
                    <label className="block text-[12.5px] font-semibold text-white">
                      Anything you want us to know (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Anything you want us to know..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-white/15 bg-[#0c181d] px-3.5 py-2.5 text-[14px] text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#38bdf8]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-[18px] bg-[#ba3d5d] py-3.5 text-[14.5px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#a62b48] active:scale-[0.99]"
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
  );
}
