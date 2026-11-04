"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function AboutFAQ() {
  const [openId, setOpenId] = useState<string | null>("left-0");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumnFaqs = [
    {
      id: "left-0",
      q: "What are Dr. Mona Dahiya's core medical qualifications?",
      a: (
        <span>
          She has completed her MBBS (Gold Medalist) from Lady Hardinge Medical
          College and MD Obs &amp; Gynae (Gold Medalist) from Maulana Azad
          Medical College. She is a National Board Certified (DNB). She has done
          her Fellowship from Singapore General Hospital.
        </span>
      ),
    },
    {
      id: "left-1",
      q: "How many years of experience does Dr. Mona Dahiya have?",
      a: (
        <span>
          More than 25 years of experience in Obstetrics, Gynaecology and
          Reproductive Medicine. More than 15000 cycles completed.
        </span>
      ),
    },
    {
      id: "left-2",
      q: "Does Dr. Mona Dahiya personally perform procedures?",
      a: (
        <span>
          Yes, all your appointments will be taken by Dr. Mona Dahiya. Scans,
          Pick ups and Transfers will also be done by her.
        </span>
      ),
    },
    {
      id: "left-3",
      q: "Where did Dr. Mona Dahiya train in IVF?",
      a: (
        <span>
          Singapore General Hospital, Singapore. She has completed her
          Fellowship in IVF there.
        </span>
      ),
    },
    {
      id: "left-4",
      q: "Has Dr. Mona Dahiya published research?",
      a: (
        <span>
          Yes, she has published more than 100 papers in various medical
          journals. Both national and international.
        </span>
      ),
    },
    {
      id: "left-5",
      q: "Has Dr. Mona Dahiya received awards?",
      a: (
        <span>
          Yes, Dr. Mona Dahiya has won more than 50 national and international
          awards.
        </span>
      ),
    },
  ];

  const rightColumnFaqs = [
    {
      id: "right-0",
      q: "Which treatments does Dr. Mona Dahiya specialise in?",
      a: (
        <span>
          <Link
            href="/ivf-treatment"
            className="text-blue underline decoration-[var(--blue)]/40 underline-offset-2 hover:text-rose"
          >
            IVF
          </Link>
          ,{" "}
          <Link
            href="/intracytoplasmic-sperm-injection-icsi-treatment"
            className="text-blue underline decoration-[var(--blue)]/40 underline-offset-2 hover:text-rose"
          >
            ICSI
          </Link>
          ,{" "}
          <Link
            href="/best-iui-doctor-in-noida"
            className="text-blue underline decoration-[var(--blue)]/40 underline-offset-2 hover:text-rose"
          >
            IUI
          </Link>
          ,{" "}
          <Link
            href="/best-low-amh-treatment-in-noida"
            className="text-blue underline decoration-[var(--blue)]/40 underline-offset-2 hover:text-rose"
          >
            Low AMH
          </Link>
          , Failed IVF, Egg freezing.
        </span>
      ),
    },
    {
      id: "right-1",
      q: "Where can I consult Dr. Mona Dahiya?",
      a: (
        <span>
          You can book your appointment at any of our 3 centres: Noida (Sector
          49), Ghaziabad (Raj Nagar), Delhi (Lajpat Nagar IV). We are open
          Monday to Saturday from 10 am to 5 pm.
        </span>
      ),
    },
    {
      id: "right-2",
      q: "Can international patients consult Dr. Mona Dahiya?",
      a: (
        <span>
          Yes, you can consult us online for US$25. We will evaluate your
          previous records and tell you how we can treat you. Visit{" "}
          <Link
            href="/international-ivf-patient"
            className="text-blue underline decoration-[var(--blue)]/40 underline-offset-2 hover:text-rose"
          >
            International Patients
          </Link>
        </span>
      ),
    },
    {
      id: "right-3",
      q: "Can I book an online consultation?",
      a: (
        <span>
          Yes, our online consultation cost is 1000 rupees in India.{" "}
          <Link
            href="/ivf-consultation-online"
            className="text-blue underline decoration-[var(--blue)]/40 underline-offset-2 hover:text-rose"
          >
            Click here to know more.
          </Link>
        </span>
      ),
    },
    {
      id: "right-4",
      q: "How do I book an appointment?",
      a: (
        <span>
          You can call or whatsapp us on{" "}
          <a
            href="tel:+919267982924"
            className="text-blue underline decoration-[var(--blue)]/40 hover:text-rose"
          >
            +91 92679 82924
          </a>
          . Or write to us at{" "}
          <a
            href="mailto:info@drmonadahiya.com"
            className="text-blue underline decoration-[var(--blue)]/40 hover:text-rose"
          >
            info@drmonadahiya.com
          </a>
          .{" "}
          <a
            href="#book-consultation"
            className="text-blue underline decoration-[var(--blue)]/40 underline-offset-2 hover:text-rose"
          >
            Click here to know more.
          </a>
        </span>
      ),
    },
  ];

  const renderFaqCard = (faq: {
    id: string;
    q: string;
    a: React.ReactNode;
  }) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`group flex flex-col justify-start rounded-[18px] border transition-[border-color,background-color,box-shadow] duration-300 ease-out sm:rounded-[20px] ${
          isOpen
            ? "border-[#fbcfe0] bg-[#fffbfd] shadow-[0_8px_24px_rgba(230,53,110,0.08)] ring-1 ring-[#fecdd3]/40"
            : "border-slate-100 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-200 hover:shadow-sm"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left select-none sm:p-6"
          aria-expanded={isOpen}
        >
          <h3
            className={`font-serif text-[1rem] font-bold leading-snug transition-colors duration-300 sm:text-[1.08rem] ${
              isOpen ? "text-rose" : "text-ink group-hover:text-rose"
            }`}
          >
            {faq.q}
          </h3>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "rotate-180 border-rose bg-rose text-white shadow-sm"
                : "border-[#fde2ec] bg-[#fff0f5] text-slate-700 group-hover:border-[#fbcfe0] group-hover:text-rose"
            }`}
            aria-hidden="true"
          >
            <FaChevronDown className="size-2.5 transition-transform" />
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#fde2ec]/60 px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[13.5px]">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faqs" className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12 border-t border-slate-100">
      <div className="page-container relative">
        <Reveal className="mb-8">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            Patient questions
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Frequently Asked Questions About Dr. Mona Dahiya
          </h2>

          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
            Some commonly asked questions about Dr. Mona Dahiya.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:gap-5">
          <Stagger className="flex flex-col gap-4" stagger={0.05}>
            {leftColumnFaqs.map((faq) => (
              <StaggerItem key={faq.id}>
                {renderFaqCard(faq)}
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="flex flex-col gap-4" stagger={0.05}>
            {rightColumnFaqs.map((faq) => (
              <StaggerItem key={faq.id}>
                {renderFaqCard(faq)}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
