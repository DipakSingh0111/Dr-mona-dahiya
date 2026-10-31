"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function AboutFAQ() {
  // Accordion: only one FAQ open at a time
  const [openId, setOpenId] = useState<string | null>("left-0");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumnFaqs = [
    {
      id: "left-0",
      q: "What are Dr. Mona Dahiya's core medical qualifications?",
      a: (
        <span>
          MBBS (Gold Medalist) from Lady Hardinge Medical College, MD in
          Obstetrics &amp; Gynaecology (Gold Medalist) from Maulana Azad Medical
          College, DNB from the National Board of Examinations, and a Fellowship
          in Reproductive Medicine at Singapore General Hospital.
        </span>
      ),
    },
    {
      id: "left-1",
      q: "How many years of experience does Dr. Mona Dahiya have?",
      a: (
        <span>
          25+ years in obstetrics, gynaecology and reproductive medicine, with
          15,000+ completed IVF/ICSI cycles.
        </span>
      ),
    },
    {
      id: "left-2",
      q: "Does Dr. Mona Dahiya personally perform procedures?",
      a: (
        <span>
          Yes. Consultations, ultrasound scans, egg retrievals, hysteroscopies
          and embryo transfers are personally managed and performed by Dr.
          Dahiya.
        </span>
      ),
    },
    {
      id: "left-3",
      q: "Where did Dr. Mona Dahiya train in IVF?",
      a: (
        <span>
          At Singapore General Hospital, Singapore, through a sub-specialty
          fellowship in assisted reproductive technology.
        </span>
      ),
    },
    {
      id: "left-4",
      q: "Has Dr. Mona Dahiya published research?",
      a: (
        <span>
          Yes. She has authored 100+ publications in indexed national and
          international medical journals.
        </span>
      ),
    },
    {
      id: "left-5",
      q: "Has Dr. Mona Dahiya received awards?",
      a: (
        <span>
          Yes. She has received 50+ national and international awards for her
          work in fertility care.
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
            href="/treatments/ivf"
            className="text-[#0047ca] underline underline-offset-2 hover:text-[#e83e74]"
          >
            IVF
          </Link>
          ,{" "}
          <Link
            href="/treatments/icsi"
            className="text-[#0047ca] underline underline-offset-2 hover:text-[#e83e74]"
          >
            ICSI
          </Link>
          ,{" "}
          <Link
            href="/treatments/iui"
            className="text-[#0047ca] underline underline-offset-2 hover:text-[#e83e74]"
          >
            IUI
          </Link>
          ,{" "}
          <Link
            href="/treatments/low-amh"
            className="text-[#0047ca] underline underline-offset-2 hover:text-[#e83e74]"
          >
            low AMH
          </Link>{" "}
          protocols, recurrent IVF failure and fertility preservation.
        </span>
      ),
    },
    {
      id: "right-1",
      q: "Where can I consult Dr. Mona Dahiya?",
      a: (
        <span>
          At 3 clinics: Noida (Sector 49), Ghaziabad (Raj Nagar) and Delhi
          (Lajpat Nagar IV), Monday to Saturday, 10:00 AM to 5:00 PM.
        </span>
      ),
    },
    {
      id: "right-2",
      q: "Can international patients consult Dr. Mona Dahiya?",
      a: (
        <span>
          Yes. Online consultations (US$25) review past records before you plan
          travel. See{" "}
          <Link
            href="/international-patients"
            className="text-[#0047ca] underline underline-offset-2 hover:text-[#e83e74]"
          >
            International Patients
          </Link>
          .
        </span>
      ),
    },
    {
      id: "right-3",
      q: "Can I book an online consultation?",
      a: (
        <span>
          Yes. A 30-minute online consultation costs ₹1,000 in India. See{" "}
          <Link
            href="#book-consultation"
            className="text-[#0047ca] underline underline-offset-2 hover:text-[#e83e74]"
          >
            Online Consultation
          </Link>
          .
        </span>
      ),
    },
    {
      id: "right-4",
      q: "How do I book an appointment?",
      a: (
        <span>
          Call or WhatsApp{" "}
          <a
            href="tel:+919267982924"
            className="font-medium text-slate-900 hover:text-[#0047ca]"
          >
            +91 92679 82924
          </a>
          , or email{" "}
          <a
            href="mailto:info@drmonadahiya.com"
            className="font-medium text-slate-900 hover:text-[#0047ca]"
          >
            info@drmonadahiya.com
          </a>
          . See{" "}
          <Link
            href="#book-consultation"
            className="text-[#0047ca] underline underline-offset-2 hover:text-[#e83e74]"
          >
            Book Appointment
          </Link>
          .
        </span>
      ),
    },
  ];

  return (
    <section id="faqs" className="relative overflow-hidden bg-slate-50/70 px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header matching Screenshot */}
        <Reveal className="mb-10 sm:mb-12">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </span>

          <h2 className="font-display mt-2 text-[2rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.65rem] lg:text-[2.85rem]">
            Frequently Asked Questions About Dr. Mona Dahiya
          </h2>
        </Reveal>

        {/* 2 Column FAQ Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Left Column */}
          <Stagger className="flex flex-col gap-4 sm:gap-4.5" stagger={0.05}>
            {leftColumnFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <StaggerItem key={faq.id} variant="fadeIn">
                  <div
                    className={`group overflow-hidden rounded-[20px] border transition-all duration-300 ${
                      isOpen
                        ? "border-[#0047ca]/40 bg-white shadow-md ring-1 ring-[#0047ca]/10"
                        : "border-slate-200/90 bg-[#fafbfe] shadow-xs hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                    >
                      <h3 className="font-display text-[15.5px] font-bold tracking-tight text-[#0f2438] sm:text-[16.5px]">
                        {faq.q}
                      </h3>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#0047ca] text-white shadow-sm"
                            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                        }`}
                      >
                        <FaChevronDown className="size-3.5 transition-transform" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-slate-600 sm:px-6 sm:pt-4 sm:pb-6 sm:text-[14px]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* Right Column */}
          <Stagger className="flex flex-col gap-4 sm:gap-4.5" stagger={0.05}>
            {rightColumnFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <StaggerItem key={faq.id} variant="fadeIn">
                  <div
                    className={`group overflow-hidden rounded-[20px] border transition-all duration-300 ${
                      isOpen
                        ? "border-[#0047ca]/40 bg-white shadow-md ring-1 ring-[#0047ca]/10"
                        : "border-slate-200/90 bg-[#fafbfe] shadow-xs hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                    >
                      <h3 className="font-display text-[15.5px] font-bold tracking-tight text-[#0f2438] sm:text-[16.5px]">
                        {faq.q}
                      </h3>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#0047ca] text-white shadow-sm"
                            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                        }`}
                      >
                        <FaChevronDown className="size-3.5 transition-transform" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-slate-600 sm:px-6 sm:pt-4 sm:pb-6 sm:text-[14px]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
