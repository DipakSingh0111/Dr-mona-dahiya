"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import RequestAppointmentCard from "@/components/ui/RequestAppointmentCard";

export default function PgtConsultation() {
  return (
    <section
      id="book-consultation"
      className="relative overflow-hidden py-8 text-ink sm:py-10 lg:py-12"
      style={{ background: "var(--pink)" }}
    >
      <div className="page-container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[12.5px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
                Next step
              </span>

              <h2 className="font-serif mt-2 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.6rem] lg:text-[2.9rem]">
                Book an In-Clinic or
                <br />
                Online Consultation
              </h2>

              <p className="mt-3.5 max-w-[36rem] text-[14px] leading-relaxed text-ink/80 sm:text-[15px]">
                Call our patient care team or fill out the consultation form to discuss PGT and advanced IVF with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation. Direct line:{" "}
                <a
                  href="tel:+919267982924"
                  className="font-bold text-rose hover:underline"
                >
                  +91 92679 82924
                </a>
                .
              </p>

              {/* 3 Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center rounded-full bg-rose backdrop-blur-sm px-6 py-2.5 text-[13.5px] font-bold text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
                >
                  Book In-Clinic Consultation
                </Link>
                <Link
                  href="/ivf-consultation-online"
                  className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
                >
                  Schedule Online Consultation
                </Link>
                <Link
                  href="/best-ivf-patient-reviews"
                  className="inline-flex items-center justify-center rounded-full border border-blue bg-white px-5 py-2.5 text-[13.5px] font-semibold text-blue transition-all hover:bg-blue hover:text-white sm:px-6 sm:py-3 sm:text-[14px]"
                >
                  Read All Patient Reviews
                </Link>
              </div>

              {/* Pricing Cards */}
              <div className="mt-7 flex flex-wrap gap-4">
                <div className="w-[170px] rounded-[18px] border border-blue/30 bg-white p-4 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-blue uppercase">
                    Indian Nationals
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-blue">
                    ₹1,000
                  </div>
                  <p className="mt-1 text-[11.5px] text-ink/75">
                    Online consultation
                  </p>
                </div>

                <div className="card-highlight w-[170px] rounded-[18px] border border-rose/30 bg-white p-4 shadow-sm">
                  <span className="text-[10.5px] font-bold tracking-wider text-rose uppercase">
                    Foreign Patients
                  </span>
                  <div className="mt-1 text-[23px] font-bold tracking-tight text-rose">
                    US$25
                  </div>
                  <p className="mt-1 text-[11.5px] text-ink/75">
                    Online consultation
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="mt-7 flex flex-wrap items-center gap-8 sm:gap-12">
                <div>
                  <span className="text-[12px] font-medium text-rose">
                    Phone
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="tel:+919267982924"
                      className="text-[15px] font-bold text-ink hover:text-rose transition-colors sm:text-[16px]"
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
                      className="text-[14.5px] font-bold text-ink hover:text-rose transition-colors sm:text-[15.5px]"
                    >
                      info@drmonadahiya.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinic Addresses */}
              <div className="mt-7 space-y-2 text-[12.5px] leading-relaxed text-ink/75 sm:text-[13px]">
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

          {/* Right Column: Appointment Form */}
          <div id="request-appointment-form" className="lg:col-span-5">
            <Reveal variant="slideRight">
              <RequestAppointmentCard defaultClinic="Noida" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
