"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaCalendarCheck,
  FaPhoneAlt,
  } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import RequestAppointmentCard from "@/components/ui/RequestAppointmentCard";

export default function DisclaimerBooking() {
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
    <section id="request-appointment" className="relative overflow-hidden py-14 lg:py-20" style={{ background: "var(--pink)" }}>
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
                Book an In-Person Evaluation
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.12}>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink/75">
                Book a diagnostic evaluation in South Delhi (Lajpat Nagar IV),
                Noida (Sector 49) or Ghaziabad (Raj Nagar RDC). Clinical desk:{" "}
                <a href="tel:+919267982924" className="font-semibold text-rose hover:underline">
                  +91 92679 82924
                </a>
                ,{" "}
                <a href="mailto:info@drmonadahiya.com" className="font-semibold text-rose hover:underline">
                  info@drmonadahiya.com
                </a>
                .
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.18}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-rose-dark active:scale-95"
                >
                  <FaCalendarCheck />
                  <span>Book In-Clinic Consultation</span>
                </Link>

                <Link
                  href="/ivf-consultation-online"
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-blue-dark active:scale-95"
                >
                  <FaPhoneAlt />
                  <span>Schedule Online Consultation</span>
                </Link>
              </div>

              {/* Consultation Fee Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-xl border border-rose/20 bg-white p-3.5 shadow-xs">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-rose">
                    Indian Nationals
                  </span>
                  <div className="mt-0.5 text-xl font-bold text-ink">₹1,000</div>
                  <span className="text-[11px] text-ink/70">
                    Online consultation
                  </span>
                </div>

                <div className="rounded-xl border border-blue/20 bg-white p-3.5 shadow-xs">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-blue">
                    Foreign Patients
                  </span>
                  <div className="mt-0.5 text-xl font-bold text-ink">US$25</div>
                  <span className="text-[11px] text-ink/70">
                    Online consultation
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
              <div className="mt-6 space-y-3 rounded-xl bg-white p-4 border border-rose/15 text-xs text-ink/80 shadow-xs">
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
            <Reveal variant="fadeUp" delay={0.15}>
              <RequestAppointmentCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

