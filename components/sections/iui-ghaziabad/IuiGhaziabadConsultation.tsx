"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function IuiGhaziabadConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: "Ghaziabad",
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
      className="relative overflow-hidden bg-pink py-8 text-ink sm:py-10 lg:py-14 border-t border-[#fde2ec]"
    >
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[13px] font-semibold tracking-wide text-rose">
                Book an appointment
              </span>

              <h2 className="font-serif mt-2 text-[2.2rem] leading-[1.18] font-bold tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.1rem]">
                Begin your conception journey with expert guidance
              </h2>

              <p className="mt-3.5 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                Consult Dr. Mona Dahiya to see whether IUI fits your medical profile. Choose an in-person visit or an online consultation, or call or write directly.
              </p>

              {/* Consultation Type Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-7">
                <a
                  href="#request-appointment-form"
                  className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-[14px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-rose-dark active:scale-95"
                >
                  Book In-Clinic Consultation
                </a>
                <Link
                  href="/ivf-consultation-online"
                  className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-[14px] font-semibold text-white shadow-md ring-1 ring-blue/20 transition-all duration-200 hover:bg-blue-dark active:scale-95"
                >
                  Schedule Online Consultation
                </Link>
              </div>

              {/* Fees Cards */}
              <div className="mt-7 flex flex-wrap gap-4">
                <div className="w-[172px] rounded-[20px] border border-[#bae6fd] bg-gradient-to-br from-[#f0f9ff] to-white p-4.5 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-blue uppercase">
                    Indian Nationals
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-blue">
                    &#8377;1,000
                  </div>
                  <p className="mt-1 text-[11.5px] text-slate-600">
                    Online consultation
                  </p>
                </div>

                <div className="w-[172px] rounded-[20px] border border-[#fbcfe8] bg-gradient-to-br from-[#fff0f5] to-white p-4.5 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-rose uppercase">
                    Foreign Patients
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-rose">
                    US$25
                  </div>
                  <p className="mt-1 text-[11.5px] text-slate-600">
                    Online consultation
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-7 flex flex-wrap items-center gap-10">
                <div>
                  <span className="text-[12px] font-semibold text-rose uppercase tracking-wider">
                    Phone
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="tel:+919267982924"
                      className="text-[15px] font-bold text-ink hover:text-blue"
                    >
                      +91 92679 82924
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[12px] font-semibold text-rose uppercase tracking-wider">
                    Email
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="mailto:info@drmonadahiya.com"
                      className="text-[15px] font-bold text-ink hover:text-blue"
                    >
                      info@drmonadahiya.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinics Addresses */}
              <div className="mt-7 space-y-3 text-[13px] leading-relaxed text-slate-600">
                <div>
                  <strong className="font-bold text-ink">Ghaziabad:</strong>{" "}
                  2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10,
                  Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                </div>
                <div>
                  <strong className="font-bold text-ink">Delhi:</strong>{" "}
                  Building Number 41, First Floor, Ring Road, Block Q, Lajpat
                  Nagar IV, Lajpat Nagar, New Delhi 110024
                </div>
                <div>
                  <strong className="font-bold text-ink">Noida:</strong> 3rd
                  Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar
                  Pradesh 201301
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-5" id="request-appointment-form">
            <div className="rounded-[26px] border border-[#fde2ec] bg-white p-6 shadow-xl sm:p-8">
              <h3 className="font-serif text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">
                Request an appointment
              </h3>

              {submitted ? (
                <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-blue/40 bg-[#f0f9ff] p-6 text-center text-blue">
                  <FaCheckCircle className="size-12 text-blue" />
                  <h4 className="mt-3 text-lg font-bold text-ink">
                    Request Received!
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Our team will call you shortly at {formData.phone} to
                    confirm your slot at {formData.clinic} clinic.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-rose underline underline-offset-2 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-slate-700">
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
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-slate-700">
                        Phone number
                      </label>
                      <div className="mt-1.5 flex rounded-xl border border-slate-200 bg-[#f8fafc] focus-within:border-rose focus-within:bg-white focus-within:ring-1 focus-within:ring-rose/30 transition-all">
                        <div className="flex items-center gap-1.5 border-r border-slate-200 px-3 text-[13px] text-slate-600">
                          <span className="font-semibold text-ink">IN</span>
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="Enter Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-transparent px-3 py-2.5 text-[14px] text-ink outline-none placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700">
                      Preferred clinic
                    </label>
                    <div className="relative mt-1.5">
                      <select
                        value={formData.clinic}
                        onChange={(e) =>
                          setFormData({ ...formData, clinic: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30 cursor-pointer"
                      >
                        <option value="Ghaziabad" className="bg-white text-ink">
                          Ghaziabad
                        </option>
                        <option value="Delhi" className="bg-white text-ink">
                          Delhi
                        </option>
                        <option value="Noida" className="bg-white text-ink">
                          Noida
                        </option>
                      </select>
                      <FaChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-3 -translate-y-1/2 text-slate-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700">
                      Anything you want us to know (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Briefly describe your requirements..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-[18px] bg-rose py-3.5 text-[14.5px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-rose-dark active:scale-[0.99] cursor-pointer"
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
