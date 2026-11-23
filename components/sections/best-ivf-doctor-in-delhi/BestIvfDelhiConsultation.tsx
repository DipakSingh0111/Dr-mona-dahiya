"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import RequestAppointmentCard from "@/components/ui/RequestAppointmentCard";

export default function BestIvfDelhiConsultation() {
  return (
    <section
      id="book-consultation"
      className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12"
    >
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
                Next step
              </span>

              <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
                Book an In-Clinic or Online Consultation
              </h2>

              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-black sm:text-[15px]">
                Book an in-clinic consultation with Dr. Mona Dahiya at our Delhi
                clinic, or schedule an online consultation to review your
                reports. Direct line: +91 92679 82924.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center rounded-full bg-rose backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark sm:text-[14px]"
                >
                  Book In-Clinic Consultation
                </Link>
                <Link
                  href="/ivf-consultation-online"
                  className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:text-[14px]"
                >
                  Schedule Online Consultation
                </Link>
              </div>

              {/* Consultation Pricing Badges */}
              <div className="mt-7 flex flex-wrap gap-4">
                <div className="w-[170px] rounded-2xl border border-blue/45 bg-white p-4 shadow-sm">
                  <span className="text-[11px] font-bold tracking-wider text-blue uppercase">
                    INDIAN NATIONALS
                  </span>
                  <div className="mt-1 font-serif text-[24px] font-bold tracking-tight text-blue">
                    ₹1,000
                  </div>
                  <p className="mt-1 text-[12px] text-black">
                    Online consultation
                  </p>
                </div>

                <div className="w-[170px] rounded-2xl border border-rose/40 bg-white p-4 shadow-sm">
                  <span className="text-[11px] font-bold tracking-wider text-rose uppercase">
                    FOREIGN PATIENTS
                  </span>
                  <div className="mt-1 font-serif text-[24px] font-bold tracking-tight text-rose">
                    US$25
                  </div>
                  <p className="mt-1 text-[12px] text-black">
                    Online consultation
                  </p>
                </div>
              </div>

              {/* Contacts */}
              <div className="mt-7 flex flex-wrap items-center gap-10">
                <div>
                  <span className="text-[12px] font-medium text-black">
                    Phone
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="tel:+919267982924"
                      className="text-[15px] font-bold text-black transition-colors hover:text-blue"
                    >
                      +91 92679 82924
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[12px] font-medium text-black">
                    Email
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="mailto:info@drmonadahiya.com"
                      className="text-[15px] font-bold text-black transition-colors hover:text-blue"
                    >
                      info@drmonadahiya.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinic addresses */}
              <div className="mt-7 space-y-3 text-[13px] leading-relaxed text-black">
                <div>
                  <strong className="font-bold text-black">Delhi</strong>{" "}
                  Building Number 41, First Floor, Ring Road, Block Q, Lajpat
                  Nagar IV, Lajpat Nagar, New Delhi 110024
                </div>
                <div>
                  <strong className="font-bold text-black">Noida</strong> 3rd
                  Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar
                  Pradesh 201301
                </div>
                <div>
                  <strong className="font-bold text-black">Ghaziabad</strong>{" "}
                  2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10,
                  Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-5" id="request-appointment-form">
            <RequestAppointmentCard defaultClinic="Delhi" />
          </div>
        </div>
      </div>
    </section>
  );
}
