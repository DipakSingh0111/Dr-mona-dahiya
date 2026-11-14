"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaCalendarCheck,
  FaVideo,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: "Noida",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="request-appointment" className="relative overflow-hidden py-14 lg:py-20 bg-white">
      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Details, CTAs, Addresses */}
          <div className="lg:col-span-6">
            <Reveal variant="fadeUp">
              <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
                Next step
              </span>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.06}>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                Book Your Consultation Today
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.12}>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink/75">
                Direct appointment line:{" "}
                <a href="tel:+919267982924" className="font-semibold text-rose hover:underline">
                  +91 92679 82924
                </a>{" "}
                ·{" "}
                <a href="mailto:info@drmonadahiya.com" className="font-semibold text-rose hover:underline">
                  info@drmonadahiya.com
                </a>
                . Clinics: Noida Sector 49 | Ghaziabad Raj Nagar | South Delhi Lajpat Nagar IV.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.18}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#request-appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-rose-dark"
                >
                  <FaCalendarCheck />
                  <span>Book In-Clinic Consultation</span>
                </a>

                <Link
                  href="/ivf-consultation-online"
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-blue-dark"
                >
                  <FaVideo />
                  <span>Schedule Online Consultation</span>
                </Link>
              </div>

              {/* Consultation Fee Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-xl border border-rose/20 bg-pink/50 p-3.5">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-rose">
                    Indian Nationals
                  </span>
                  <div className="mt-0.5 text-xl font-bold text-ink">₹1,000</div>
                  <span className="text-[11px] text-ink/70">
                    Online consultation · 30 minutes
                  </span>
                </div>

                <div className="rounded-xl border border-navy/20 bg-navy/5 p-3.5">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-navy">
                    Foreign Patients
                  </span>
                  <div className="mt-0.5 text-xl font-bold text-ink">US$25</div>
                  <span className="text-[11px] text-ink/70">
                    Online consultation · 30 minutes
                  </span>
                </div>
              </div>

              {/* Contact direct numbers */}
              <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-rose/10 pt-5 text-sm">
                <div>
                  <span className="block text-xs text-ink/60 font-semibold uppercase">Phone</span>
                  <a href="tel:+919267982924" className="font-bold text-ink hover:text-rose transition">
                    +91 92679 82924
                  </a>
                </div>
                <div>
                  <span className="block text-xs text-ink/60 font-semibold uppercase">Email</span>
                  <a href="mailto:info@drmonadahiya.com" className="font-bold text-ink hover:text-rose transition">
                    info@drmonadahiya.com
                  </a>
                </div>
              </div>

              {/* Full Address List */}
              <div className="mt-6 space-y-3 rounded-xl bg-pink/40 p-4 border border-rose/10 text-xs text-ink/80">
                <div>
                  <strong className="text-ink">Delhi:</strong> Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
                </div>
                <div>
                  <strong className="text-ink">Noida:</strong> 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
                </div>
                <div>
                  <strong className="text-ink">Ghaziabad:</strong> 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-6">
            <Reveal variant="slideLeft" delay={0.15}>
              <div className="rounded-2xl border border-rose/15 bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(232,62,116,0.08)]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-1">
                  Request an appointment
                </h3>
                <p className="text-xs text-ink/65 mb-6">
                  Fill in your details and our coordinator will connect with you within 2 business hours.
                </p>

                {submitted ? (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                    <FaCheckCircle className="mx-auto text-3xl text-emerald-600 mb-2" />
                    <h4 className="text-base font-bold text-emerald-900">
                      Request Received!
                    </h4>
                    <p className="mt-1 text-xs text-emerald-700">
                      Thank you, {formData.name}. Our clinic coordinator will call or WhatsApp you shortly at {formData.phone} to confirm your slot at {formData.clinic} clinic.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink/80 mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-rose/20 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink/80 mb-1.5">
                        Phone number
                      </label>
                      <div className="flex items-center rounded-xl border border-rose/20 bg-white focus-within:border-rose focus-within:ring-1 focus-within:ring-rose">
                        <span className="flex items-center gap-1 border-r border-rose/15 px-3 py-2.5 text-xs font-semibold text-ink/75 bg-pink/40 rounded-l-xl">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="Enter Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-r-xl bg-transparent px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink/80 mb-1.5">
                        Preferred clinic
                      </label>
                      <select
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        className="w-full rounded-xl border border-rose/20 bg-white px-4 py-2.5 text-sm text-ink focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
                      >
                        <option value="Noida">Noida (Sector 49)</option>
                        <option value="Ghaziabad">Ghaziabad (Raj Nagar)</option>
                        <option value="Delhi">Delhi (Lajpat Nagar IV)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink/80 mb-1.5">
                        Anything you want us to know (optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention previous treatments, primary concern, or preferred appointment day/time"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full rounded-xl border border-rose/20 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-rose py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(232,62,116,0.25)] transition hover:bg-rose-dark active:scale-[0.99]"
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
