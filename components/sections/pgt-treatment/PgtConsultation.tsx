"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function PgtConsultation() {
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
      className="relative overflow-hidden bg-[#061532] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[12.5px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
                Next step
              </span>

              <h2 className="font-serif mt-2 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
                Book an In-Clinic or
                <br />
                Online Consultation
              </h2>

              <p className="mt-3.5 max-w-[36rem] text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
                Call our patient care team or fill out the consultation form to discuss PGT and advanced IVF with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation. Direct line:{" "}
                <a
                  href="tel:+919267982924"
                  className="font-semibold text-white hover:text-[#93c5fd] transition-colors"
                >
                  +91 92679 82924
                </a>
                .
              </p>

              {/* 3 Action Buttons matching Screenshot */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                <a
                  href="#request-appointment-form"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e83e74] to-[#f43f5e] px-6 py-2.5 text-[13.5px] font-bold text-white shadow-[0_8px_20px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
                >
                  Book In-Clinic Consultation
                </a>
                <Link
                  href="/online-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-white/20 transition-all hover:bg-[#003cb0] hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
                >
                  Schedule Online Consultation
                </Link>
                <Link
                  href="/patient-reviews"
                  className="inline-flex items-center justify-center rounded-full border border-[#0d9488] bg-transparent px-5 py-2.5 text-[13.5px] font-semibold text-[#2dd4bf] transition-all hover:bg-[#0d9488]/15 sm:px-6 sm:py-3 sm:text-[14px]"
                >
                  Read All Patient Reviews
                </Link>
              </div>

              {/* Pricing Cards */}
              <div className="mt-7 flex flex-wrap gap-4">
                <div className="w-[170px] rounded-[18px] border border-[#0047ca]/45 bg-[#0a1f45]/90 p-4 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#93c5fd] uppercase">
                    Indian Nationals
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-[#93c5fd]">
                    ₹1,000
                  </div>
                  <p className="mt-1 text-[11.5px] text-white/60">
                    Online consultation
                  </p>
                  <p className="text-[11.5px] text-white/60">30 minutes</p>
                </div>

                <div className="w-[170px] rounded-[18px] border border-[#e83e74]/40 bg-[#0a1f45]/90 p-4 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#f9a8d4] uppercase">
                    Foreign Patients
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-[#f9a8d4]">
                    US$25
                  </div>
                  <p className="mt-1 text-[11.5px] text-white/60">
                    Online consultation
                  </p>
                  <p className="text-[11.5px] text-white/60">30 minutes</p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="mt-7 flex flex-wrap items-center gap-8 sm:gap-12">
                <div>
                  <span className="text-[12px] font-medium text-[#e83e74]">
                    Phone
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="tel:+919267982924"
                      className="text-[15px] font-bold text-white hover:text-[#93c5fd] transition-colors sm:text-[16px]"
                    >
                      +91 92679 82924
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[12px] font-medium text-[#e83e74]">
                    Email
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="mailto:info@drmonadahiya.com"
                      className="text-[14.5px] font-bold text-white hover:text-[#93c5fd] transition-colors sm:text-[15.5px]"
                    >
                      info@drmonadahiya.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinic Addresses */}
              <div className="mt-7 space-y-2 text-[12.5px] leading-relaxed text-slate-300 sm:text-[13px]">
                <p>
                  <strong className="text-white">Delhi:</strong> Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
                </p>
                <p>
                  <strong className="text-white">Noida:</strong> 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
                </p>
                <p>
                  <strong className="text-white">Ghaziabad:</strong> 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Request an appointment form */}
          <div id="request-appointment-form" className="w-full lg:col-span-5">
            <Reveal variant="scaleIn">
              <div className="rounded-[24px] border border-white/15 bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,10,40,0.5)] backdrop-blur-md sm:p-7">
                <h3 className="font-serif text-[1.4rem] font-bold text-white sm:text-[1.55rem]">
                  Request an appointment
                </h3>

                {submitted ? (
                  <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                    <FaCheckCircle className="mx-auto size-10 text-emerald-400" />
                    <h4 className="mt-3 text-[16px] font-bold text-white">
                      Request Received!
                    </h4>
                    <p className="mt-1.5 text-[13px] text-slate-300">
                      Our patient care coordinator will call you back shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div>
                      <label className="block text-[12px] font-medium text-slate-300">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder=""
                        className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder-slate-400 focus:border-[#e83e74] focus:outline-none focus:ring-1 focus:ring-[#e83e74]"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-slate-300">
                        Phone number
                      </label>
                      <div className="mt-1 flex gap-2">
                        <div className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-[13px] text-white">
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
                          className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder-slate-400 focus:border-[#e83e74] focus:outline-none focus:ring-1 focus:ring-[#e83e74]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-slate-300">
                        Preferred clinic
                      </label>
                      <div className="relative mt-1">
                        <select
                          value={formData.clinic}
                          onChange={(e) =>
                            setFormData({ ...formData, clinic: e.target.value })
                          }
                          className="w-full appearance-none rounded-xl border border-white/20 bg-[#0a1f45] px-3.5 py-2.5 text-[14px] text-white focus:border-[#e83e74] focus:outline-none focus:ring-1 focus:ring-[#e83e74]"
                        >
                          <option value="Noida">Noida</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Ghaziabad">Ghaziabad</option>
                        </select>
                        <FaChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-slate-300">
                        Anything you want us to know (optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-[14px] text-white placeholder-slate-400 focus:border-[#e83e74] focus:outline-none focus:ring-1 focus:ring-[#e83e74]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-[#e83e74] to-[#f43f5e] py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 active:scale-95"
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
  );
}

