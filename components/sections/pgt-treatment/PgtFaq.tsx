"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function PgtFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is PGT in IVF and how does it work?",
      a: "PGT is genetic screening of IVF embryos before transfer. Embryos are grown to the Day 5 or 6 blastocyst stage; 4 to 6 cells are taken from the outer trophectoderm layer by laser biopsy; and the embryos are frozen while the cells are analyzed by Next-Generation Sequencing. Only embryos reported as chromosomally normal (euploid) are then thawed and transferred.",
    },
    {
      q: "What is the difference between PGT-A, PGT-M, and PGT-SR?",
      a: "PGT-A checks for overall numerical chromosome errors (such as Down syndrome). PGT-M targets specific single-gene genetic disorders passed down from carrier parents (such as Thalassemia or Cystic Fibrosis). PGT-SR detects structural chromosome rearrangements in parents with balanced translocations.",
    },
    {
      q: "What is the cost of PGT testing in Delhi NCR?",
      a: "The total depends on the IVF/ICSI cycle, the laser biopsy fee, the number of embryos sent for NGS testing (billed per embryo), custom probe design for PGT-M, freezing and storage, and the later frozen embryo transfer. Dr. Mona Dahiya gives an itemized estimate after your consultation.",
    },
    {
      q: "Does laser biopsy during PGT damage the developing embryo?",
      a: "When performed by an experienced embryologist at the Day 5/6 blastocyst stage, PGT biopsy carries a damage risk of under 1%. The biopsy takes only 4 to 6 cells strictly from the outer trophectoderm layer (which forms the placenta), leaving the inner cell mass (which forms the fetus) untouched.",
    },
    {
      q: "Can PGT guarantee a 100% successful pregnancy?",
      a: "While PGT cannot guarantee a 100% live birth rate, transferring a confirmed chromosomally normal (euploid) embryo increases clinical pregnancy rates to 65%–70% per transfer and reduces miscarriage rates from 30%+ down to below 8%–10%.",
    },
    {
      q: "Can PGT test for autism, gender, or all genetic diseases?",
      a: "No. PGT-A looks at chromosome numbers; PGT-M looks only for the specific gene change already known in the family; and PGT-SR looks for a known parental rearrangement. It cannot screen for autism or every possible disease. Sex selection is prohibited in India under the PC-PNDT Act, and the embryo's sex is never disclosed.",
    },
    {
      q: "How long does it take to get PGT genetic test results?",
      a: "Following biopsy and vitrification, Next-Generation Sequencing (NGS) analysis typically takes 2 to 3 weeks. During this window, the patient's uterine lining rests and recovers, setting up an optimal frozen embryo transfer (FET) in the subsequent menstrual cycle.",
    },
    {
      q: "What is an embryo mosaicism result in PGT-A?",
      a: "A mosaic embryo contains a mixture of normal and abnormal cells. Depending on the percentage and specific chromosome involved (low-level vs. high-level mosaic), some mosaic embryos can self-correct, implant successfully, and result in completely healthy live births. Dr. Mona Dahiya provides thorough genetic counseling regarding mosaic transfer protocols.",
    },
    {
      q: "Can you do PGT testing on already frozen embryos?",
      a: "Yes. Previously frozen embryos that were not biopsied can be thawed, biopsied and re-frozen while the results are awaited. Survival after this second vitrification is high in an experienced laboratory, though slightly lower than for embryos biopsied before their first freeze.",
    },
    {
      q: "Does PGT-A prevent miscarriages?",
      a: "It reduces miscarriages caused by embryo chromosome errors, the most common cause of early pregnancy loss. Transferring a euploid embryo lowers the miscarriage rate to below 8%–10%. It does not treat uterine, hormonal, clotting or immune causes, which Dr. Mona Dahiya checks separately.",
    },
    {
      q: "Is PGT testing worth it for women under 35?",
      a: "Not for everyone. Younger women have fewer chromosomally abnormal embryos, so routine PGT-A adds less benefit. It is still worth considering under 35 with recurrent miscarriage, repeated implantation failure, a known genetic disorder or translocation, severe male factor, or when a single embryo transfer is planned.",
    },
    {
      q: "Where does Dr. Mona Dahiya offer PGT?",
      a: "3 centres: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, UP 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, UP 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024). Clinic hours are 10:00 AM to 5:00 PM, with online consultations also available.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Split into 2 independent vertical columns to eliminate any vertical blank gaps when an item expands
  const col1 = faqs.map((faq, idx) => ({ faq, originalIdx: idx })).filter((_, i) => i % 2 === 0);
  const col2 = faqs.map((faq, idx) => ({ faq, originalIdx: idx })).filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Top FAQs About PGT in Delhi | Noida | Ghaziabad
          </h2>
        </Reveal>

        {/* 2 Independent columns to prevent layout gaps */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
          {/* Column 1 (Left) */}
          <div className="flex flex-col gap-4">
            {col1.map(({ faq, originalIdx }) => {
              const isOpen = openIdx === originalIdx;
              return (
                <div
                  key={originalIdx}
                  className={`group rounded-[18px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#0047ca]/40 bg-white shadow-[0_8px_24px_rgba(0,71,202,0.08)]"
                      : "border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(0,20,60,0.04)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(originalIdx)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14.5px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[15.5px]">
                      {faq.q}
                    </span>
                    <span
                      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#0047ca] text-white"
                          : "bg-slate-200/80 text-slate-600 group-hover:bg-slate-300"
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 text-[13px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[13.5px]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2 (Right) */}
          <div className="flex flex-col gap-4">
            {col2.map(({ faq, originalIdx }) => {
              const isOpen = openIdx === originalIdx;
              return (
                <div
                  key={originalIdx}
                  className={`group rounded-[18px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#0047ca]/40 bg-white shadow-[0_8px_24px_rgba(0,71,202,0.08)]"
                      : "border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(0,20,60,0.04)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(originalIdx)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14.5px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[15.5px]">
                      {faq.q}
                    </span>
                    <span
                      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#0047ca] text-white"
                          : "bg-slate-200/80 text-slate-600 group-hover:bg-slate-300"
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 text-[13px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[13.5px]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
