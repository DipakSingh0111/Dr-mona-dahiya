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
            className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
          >
            IVF
          </Link>
          ,{" "}
          <Link
            href="/intracytoplasmic-sperm-injection-icsi-treatment"
            className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
          >
            ICSI
          </Link>
          ,{" "}
          <Link
            href="/best-iui-doctor-in-noida"
            className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
          >
            IUI
          </Link>
          ,{" "}
          <Link
            href="/best-low-amh-treatment-in-noida"
            className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
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
            href="/international-patients"
            className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
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
            className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
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
            className="text-white underline decoration-white/40 hover:text-teal-300"
          >
            +91 92679 82924
          </a>
          . Or write to us at{" "}
          <a
            href="mailto:info@drmonadahiya.com"
            className="text-white underline decoration-white/40 hover:text-teal-300"
          >
            info@drmonadahiya.com
          </a>
          .{" "}
          <a
            href="#book-consultation"
            className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
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
        className={`group flex flex-col justify-start rounded-2xl border transition-[border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "border-[#e83e74]/50 bg-[#0c224e] shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-[#e83e74]/20"
            : "border-white/10 bg-[#091a3c]/75 hover:border-white/20 hover:bg-[#0c224e]"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left select-none sm:p-6"
          aria-expanded={isOpen}
        >
          <h3
            className={`font-serif text-[1rem] font-semibold leading-snug transition-colors duration-300 sm:text-[1.08rem] ${
              isOpen ? "text-[#e83e74]" : "text-white group-hover:text-[#e83e74]"
            }`}
          >
            {faq.q}
          </h3>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "rotate-180 border-[#e83e74] bg-[#e83e74] text-white shadow-sm"
                : "border-white/15 bg-white/5 text-white/70 group-hover:border-white/30 group-hover:text-white"
            }`}
            aria-hidden="true"
          >
            <FaChevronDown className="size-2.5 transition-transform" />
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-slate-300 sm:px-6 sm:pb-6 sm:text-[13.5px]">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faqs" className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-8">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Frequently Asked Questions About Dr. Mona Dahiya
          </h2>

          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
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
