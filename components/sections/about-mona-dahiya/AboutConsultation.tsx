"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import RequestAppointmentCard from "@/components/ui/RequestAppointmentCard";

type Props = {
  sectionId?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  /** When false, phone/email are not appended after subtitle (use when subtitle already includes them). */
  appendContacts?: boolean;
  /** Online consultation duration label shown on pricing cards. Empty hides the line. */
  consultationDuration?: string;
  defaultClinic?: string;
  showAddresses?: boolean;
  className?: string;
  sectionBg?: string;
};

export default function AboutConsultation({
  sectionId = "book-consultation",
  eyebrow = "Next step",
  title = (
    <>
      Book a Consultation
      <br />
      with Dr. Mona Dahiya
    </>
  ),
  subtitle = "Book an in-clinic consultation or an online record review. Appointment line:",
  appendContacts = true,
  consultationDuration = "30 minutes",
  defaultClinic,
  showAddresses = true,
  className = "",
  sectionBg = "bg-pink",
}: Props) {
  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden ${sectionBg} py-8 text-ink sm:py-10 lg:py-12 border-t border-[#fde2ec] ${className}`}
    >
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[13px] font-semibold tracking-wide text-rose">
                {eyebrow}
              </span>

              <h2 className="font-serif mt-2 text-[2.2rem] leading-[1.18] font-bold tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.1rem]">
                {title}
              </h2>

              <p className="mt-3 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                {subtitle}
                {appendContacts ? (
                  <>
                    {" "}
                    <a
                      href="tel:+919267982924"
                      className="text-blue hover:text-rose font-medium"
                    >
                      +91 92679 82924
                    </a>{" "}
                    &middot;{" "}
                    <a
                      href="mailto:info@drmonadahiya.com"
                      className="text-blue hover:text-rose font-medium"
                    >
                      info@drmonadahiya.com
                    </a>
                    .
                  </>
                ) : null}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-7">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all duration-200 hover:bg-rose-dark active:scale-95"
                >
                  Book In-Clinic Consultation
                </Link>
                <Link
                  href="/ivf-consultation-online"
                  className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-[14px] font-semibold text-white shadow-md ring-1 ring-blue/20 transition-all duration-200 hover:bg-blue-dark active:scale-95"
                >
                  Schedule Online Consultation
                </Link>
              </div>

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

              {showAddresses ? (
                <div className="mt-7 space-y-3 text-[13px] leading-relaxed text-slate-600">
                  <div>
                    <strong className="font-bold text-ink">Delhi</strong>{" "}
                    Building Number 41, First Floor, Ring Road, Block Q, Lajpat
                    Nagar IV, Lajpat Nagar, New Delhi 110024
                  </div>
                  <div>
                    <strong className="font-bold text-ink">Noida</strong> 3rd
                    Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar
                    Pradesh 201301
                  </div>
                  <div>
                    <strong className="font-bold text-ink">Ghaziabad</strong>{" "}
                    2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10,
                    Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                  </div>
                </div>
              ) : null}
            </Reveal>
          </div>

          <div className="lg:col-span-5" id="request-appointment-form">
            <RequestAppointmentCard defaultClinic={defaultClinic} />
          </div>
        </div>
      </div>
    </section>
  );
}
