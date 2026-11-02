"use client";

import { useState, type ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 ${
        isOpen
          ? "border-[#e83e74]/45 shadow-[0_0_24px_rgba(232,62,116,0.12)]"
          : "border-white/10 hover:border-[#0047ca]/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-5.5"
      >
        <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
          {item.question}
        </span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180 text-[#e83e74]" : ""
          }`}
        >
          <FaChevronDown className="size-3" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:px-5.5 sm:text-[13.5px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

const leftFaqs: FaqItem[] = [
  {
    question: "Is Mini IVF as successful as conventional IVF?",
    answer:
      "For low reserve (AMH below 1.0 ng/mL) or poor past response, yes: cumulative pregnancy rates are comparable. High doses cannot force depleted ovaries to make more eggs, so gentle stimulation focuses on the few good ones.",
  },
  {
    question: "How many injections does Mini IVF need?",
    answer:
      "Usually 4 to 8 low-dose injections after 5 days of tablets, compared with 20 to 35 injections in conventional IVF.",
  },
  {
    question: "Does Mini IVF remove the risk of OHSS?",
    answer:
      "Almost entirely. Hormone levels stay near natural ranges and follicle numbers are controlled, so severe OHSS risk is close to zero, which makes it a safe option for PCOS.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for Mini IVF?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanervala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does Mini IVF cost?",
    answer:
      "₹85,000 to ₹1,40,000 per completed cycle on average, with medicines at ₹10,000 to ₹25,000 instead of ₹50,000 to ₹85,000 in conventional IVF.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How many eggs does Mini IVF produce?",
    answer:
      "Typically 2 to 5 mature eggs per cycle. Many patients bank embryos over 2 or 3 gentle cycles before a transfer.",
  },
  {
    question: "Who should not choose Mini IVF?",
    answer:
      "Women under 35 with good reserve who need many embryos (for example, for genetic testing) usually do better with conventional stimulation.",
  },
  {
    question: "How long does a Mini IVF cycle take?",
    answer:
      "From baseline scan to egg retrieval is usually about 12 to 14 days. Transfer may follow in the same cycle, or embryos may be frozen for a later FET.",
  },
  {
    question: "Is egg retrieval in Mini IVF painful?",
    answer:
      "No. With fewer follicles it takes about 10 minutes under light sedation, and most women go home within 2 hours.",
  },
];

export default function MiniIvfFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Top FAQs About Mini IVF in Delhi NCR
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-3.5 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {leftFaqs.map((faq, idx) => {
              const id = `left-${idx}`;
              return (
                <FaqCard
                  key={id}
                  item={faq}
                  isOpen={openId === id}
                  onToggle={() => toggle(id)}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {rightFaqs.map((faq, idx) => {
              const id = `right-${idx}`;
              return (
                <FaqCard
                  key={id}
                  item={faq}
                  isOpen={openId === id}
                  onToggle={() => toggle(id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
