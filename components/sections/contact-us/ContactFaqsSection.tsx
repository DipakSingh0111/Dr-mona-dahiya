"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function ContactFaqsSection() {
  // Store open state for each FAQ so users can toggle them smoothly
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({
    0: true, // First FAQ open by default
  });

  const toggleFaq = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      q: "How can I book an appointment with Dr. Mona Dahiya?",
      a: (
        <>
          If you call or WhatsApp us at{" "}
          <a
            href="tel:+919267982924"
            className="font-semibold text-rose hover:underline"
          >
            +91 92679 82924
          </a>{" "}
          or email{" "}
          <a
            href="mailto:info@drmonadahiya.com"
            className="font-semibold text-rose hover:underline"
          >
            info@drmonadahiya.com
          </a>{" "}
          our coordinator will verify and confirm the clinic location and
          appointment slot.
        </>
      ),
    },
    {
      q: "What should I bring to my first visit?",
      a: "Reports of any previous fertility treatments, semen analysis and scan reports along with blood tests from the past 6-12 months and valid photo ID of both partners.",
    },
    {
      q: "What are the clinic timings?",
      a: "Monday to Saturday: 10:00 AM to 5:00 PM at all our clinics in Noida, Ghaziabad and South Delhi.",
    },
    {
      q: "Should both partners attend?",
      a: "Yes, it's best if both partners attend the appointment together. Evaluating both partners in one visit will save you time because male factor infertility is found in about 50% of infertility cases.",
    },
    {
      q: "Does Dr. Mona Dahiya offer online consultations?",
      a: (
        <>
          Yes, you can. Online consultation fee is ₹1000 within India or US$ 25
          if you are staying abroad.{" "}
          <Link
            href="/ivf-consultation-online"
            className="font-semibold text-rose hover:underline"
          >
            Click Here for Online Consultation
          </Link>
        </>
      ),
    },
    {
      q: "Can I send my reports before the visit?",
      a: (
        <>
          Upload them! You can email them to{" "}
          <a
            href="mailto:info@drmonadahiya.com"
            className="font-semibold text-rose hover:underline"
          >
            info@drmonadahiya.com
          </a>{" "}
          or attach them directly on WhatsApp.
        </>
      ),
    },
    {
      q: "Can I book through Practo or other third-party platforms?",
      a: "No, all appointments should be booked only through Dr Mona Dahiya's official contact number, WhatsApp, email ID and website.",
    },
    {
      q: "How soon will my booking be confirmed?",
      a: "Yes, definitely. Once we receive your request our coordinator will confirm the same over phone/WhatsApp, typically on the same business day.",
    },
    {
      q: "Where are the clinics?",
      a: "Two of our clinics are located in Noida and Ghaziabad and one clinic is in South Delhi. Clinic addresses: Noida (Opp. FirstCry, Sector 49), Ghaziabad (District Centre, Raj Nagar near Bikanerwala) and South Delhi (Govindkrishna Road, Ring Road, Lajpat Nagar IV).",
    },
    {
      q: "Can international patients contact Dr. Dahiya?",
      a: (
        <>
          Yes. You may get started with a remote consultation and review of
          your files.{" "}
          <Link
            href="/international-ivf-patient"
            className="font-semibold text-rose hover:underline"
          >
            Click here for information on seeing Dr Dahiya if you live outside of
            India.
          </Link>
        </>
      ),
    },
    {
      q: "Which metro station is nearest?",
      a: "Noida: Sector 50 which is on the Aqua Line. Delhi: Lajpat Nagar, where you can take either the Pink or Violet Line. Ghaziabad: Shaheed Sthal (a lot of shops nearby) which is on the Red Line or RRTS Ghaziabad.",
    },
  ];

  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 !== 0);

  const renderCard = (faq: (typeof faqs)[number], originalIdx: number) => {
    const isOpen = !!openStates[originalIdx];

    return (
      <div
        key={originalIdx}
        className={`group overflow-hidden rounded-2xl border transition-all duration-300 ease-out ${
          isOpen
            ? "border-rose/30 bg-[#fffbfc] shadow-[0_8px_24px_rgba(232,62,116,0.08)] ring-1 ring-rose/20"
            : "border-rose/15 bg-white shadow-sm hover:border-rose/35 hover:shadow-md"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(originalIdx)}
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left select-none sm:p-6"
        >
          <h3
            className={`font-display text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
              isOpen ? "text-rose" : "text-ink group-hover:text-rose"
            }`}
          >
            {faq.q}
          </h3>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "rotate-180 border-rose bg-rose text-white shadow-sm"
                : "border-rose/20 bg-pink text-rose group-hover:border-rose/50"
            }`}
            aria-hidden="true"
          >
            <FaChevronDown className="text-xs transition-transform" />
          </span>
        </button>

        {/* Smooth CSS Grid Expansion */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-rose/10 px-5 pt-3.5 pb-5 text-xs sm:text-sm leading-relaxed text-ink/75 sm:px-6 sm:pb-6">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative overflow-hidden py-14 lg:py-20"
      style={{ background: "var(--pink)" }}
    >
      <div className="page-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Reveal variant="fadeUp">
            <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
              Questions from Patients
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
              Frequently Asked Questions: Contact &amp; Booking
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div className="space-y-4">
            {leftColumn.map((faq, colIdx) => (
              <StaggerItem key={colIdx}>
                {renderCard(faq, colIdx * 2)}
              </StaggerItem>
            ))}
          </div>

          <div className="space-y-4">
            {rightColumn.map((faq, colIdx) => (
              <StaggerItem key={colIdx}>
                {renderCard(faq, colIdx * 2 + 1)}
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
