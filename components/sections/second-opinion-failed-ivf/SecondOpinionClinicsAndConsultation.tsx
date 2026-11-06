"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";

export default function SecondOpinionClinicsAndConsultation() {
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
      {/* 3 Clinics Section */}
      <ClinicsAppointmentCards
        eyebrow="Visit Dr. Mona"
        title="Book a Consultation at Our Clinics"
        subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
      />

      {/* Consultation Section */}
      <section
        id="book-consultation"
        className="relative overflow-hidden bg-pink py-8 text-ink sm:py-10 lg:py-12"
      >
        <div className="page-container relative">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-[12.5px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
                  Next step
                </span>

                <h2 className="font-serif mt-2 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.6rem] lg:text-[2.9rem]">
                  Book an In-Clinic or
                  <br />
                  Online Consultation
                </h2>

                <p className="mt-3.5 max-w-[36rem] text-[14px] leading-relaxed text-black sm:text-[15px]">
                  Call our patient care team or fill out the consultation form to discuss your failed IVF cycle history with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation. Direct line:{" "}
                  <a
                    href="tel:+919267982924"
                    className="font-semibold text-white hover:text-blue transition-colors"
                  >
                    +91 92679 82924
                  </a>
                  .
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                  <a
                    href="#request-appointment-form"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose to-[#f43f5e] px-6 py-2.5 text-[13.5px] font-bold text-white shadow-[0_8px_20px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
                  >
                    Book In-Clinic Consultation
                  </a>
                  <Link
                    href="/online-consultation"
                    className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-white/20 transition-all hover:bg-blue-dark hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
                  >
                    Schedule Online Consultation
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <div className="w-[170px] rounded-[18px] border border-blue/45 bg-white/90 p-4 shadow-sm">
                    <span className="text-[10.5px] font-bold tracking-wider text-blue uppercase">
                      Indian Nationals
                    </span>
                    <div className="mt-1 text-[23px] font-bold tracking-tight text-blue">
                      ₹1,000
                    </div>
                    <p className="mt-1 text-[11.5px] text-black">
                      Online consultation
                    </p>
                    <p className="text-[11.5px] text-black">30 minutes</p>
                  </div>

                  <div className="w-[170px] rounded-[18px] border border-rose/40 bg-white/90 p-4 shadow-sm">
                    <span className="text-[10.5px] font-bold tracking-wider text-rose uppercase">
                      Foreign Patients
                    </span>
                    <div className="mt-1 text-[23px] font-bold tracking-tight text-rose">
                      US$25
                    </div>
                    <p className="mt-1 text-[11.5px] text-black">
                      Online consultation
                    </p>
                    <p className="text-[11.5px] text-black">30 minutes</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-8 sm:gap-12">
                  <div>
                    <span className="text-[12px] font-medium text-rose">
                      Phone
                    </span>
                    <div className="mt-0.5">
                      <a
                        href="tel:+919267982924"
                        className="text-[15px] font-bold text-black hover:text-blue transition-colors sm:text-[16px]"
                      >
                        +91 92679 82924
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="text-[12px] font-medium text-rose">
                      Email
                    </span>
                    <div className="mt-0.5">
                      <a
                        href="mailto:info@drmonadahiya.com"
                        className="text-[14.5px] font-bold text-black hover:text-blue transition-colors sm:text-[15.5px]"
                      >
                        info@drmonadahiya.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-2 text-[12.5px] leading-relaxed text-black sm:text-[13px]">
                  <p>
                    <strong className="text-ink">Delhi:</strong> Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
                  </p>
                  <p>
                    <strong className="text-ink">Noida:</strong> 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
                  </p>
                  <p>
                    <strong className="text-ink">Ghaziabad:</strong> 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Request an appointment form */}
            <div id="request-appointment-form" className="w-full lg:col-span-5">
              <Reveal variant="scaleIn">
                <div className="card-highlight rounded-[24px] border border-[#fde2ec] bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,10,40,0.5)] backdrop-blur-md sm:p-7">
                  <h3 className="font-serif text-[1.4rem] font-bold text-black sm:text-[1.55rem]">
                    Request an appointment
                  </h3>

                  {submitted ? (
                    <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                      <FaCheckCircle className="mx-auto size-10 text-emerald-400" />
                      <h4 className="mt-3 text-[16px] font-bold text-black">
                        Request Received!
                      </h4>
                      <p className="mt-1.5 text-[13px] text-black">
                        Our patient care coordinator will call you back shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                      <div>
                        <label className="block text-[12px] font-medium text-black">
                          Your name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="mt-1 w-full rounded-xl border border-[#fbcfe0] bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder-slate-400 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] font-medium text-black">
                          Phone number
                        </label>
                        <div className="mt-1 flex gap-2">
                          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#fbcfe0] bg-white/10 px-3 py-2.5 text-[13px] text-white">
                            <span>🇮🇳</span>
                            <span>+91</span>
                          </div>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="Enter Phone"
                            className="w-full rounded-xl border border-[#fbcfe0] bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder-slate-400 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-medium text-black">
                          Preferred clinic
                        </label>
                        <div className="relative mt-1">
                          <select
                            value={formData.clinic}
                            onChange={(e) =>
                              setFormData({ ...formData, clinic: e.target.value })
                            }
                            className="w-full appearance-none rounded-xl border border-[#fbcfe0] bg-white px-3.5 py-2.5 text-[14px] text-white focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
                          >
                            <option value="Noida">Noida</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                          </select>
                          <FaChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-3.5 -translate-y-1/2 text-black" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-medium text-black">
                          Anything you want us to know (optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          className="mt-1 w-full rounded-xl border border-[#fbcfe0] bg-white/10 px-3.5 py-2 text-[14px] text-white placeholder-slate-400 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-rose to-[#f43f5e] py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 active:scale-95"
                      >
                        Request an appointment
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

