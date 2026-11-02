"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

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

const costCards = [
  {
    title: "Core ICSI procedure fee",
    description:
      "An advanced laboratory fee over standard IVF, covering micro-tools, holding pipettes and embryologist time.",
  },
  {
    title: "Advanced sperm processing",
    description:
      "Optional microfluidic sorting chips or PICSI binding dishes for high DNA fragmentation.",
  },
  {
    title: "Surgical retrieval, if needed",
    description:
      "Needle aspiration (PESA or TESA) or microscope-assisted Micro-TESE for azoospermic men.",
  },
  {
    title: "PGT-A screening and vitrification",
    description: "Per-embryo biopsy fees and freezing and storage tiers.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the difference between IVF and ICSI?",
    answer:
      "In IVF, thousands of sperm are placed with an egg and one enters naturally. In ICSI, an embryologist picks 1 healthy sperm under high magnification and injects it into the egg, bypassing physical barriers.",
  },
  {
    question: "When is ICSI advised instead of standard IVF?",
    answer:
      "In 4 situations: severe male factor, high DNA fragmentation (DFI above 25%), earlier fertilisation failure, and cycles using frozen eggs or PGT testing.",
  },
  {
    question: "Is ICSI safe for the baby?",
    answer:
      "Yes. Decades of data and hundreds of thousands of births worldwide show children conceived by ICSI are as healthy as those conceived naturally or by standard IVF, with comparable development.",
  },
  {
    question: "Does ICSI cost more than IVF?",
    answer:
      "Yes, a little. ICSI adds a lab fee to the IVF cycle for micro-tools and embryologist time. The full cycle stays within ₹1.5 lakh to ₹2.5 lakh, and your estimate itemises it.",
  },
  {
    question: "Can ICSI work with a zero sperm count?",
    answer:
      "Yes. In azoospermia, sperm retrieved from the epididymis (PESA) or testis (TESA or Micro-TESE) is often few in number or non-moving. ICSI needs only 1 living sperm per egg.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Does a male factor problem always need surgery?",
    answer:
      "No. Surgery (TESA, PESA or Micro-TESE) is only for azoospermia. With low count or poor motility, a normal semen sample processed by microfluidic sorting is enough for ICSI.",
  },
  {
    question: "Where can I have ICSI with Dr. Mona Dahiya?",
    answer:
      "3 centres: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "Can the male partner improve sperm before ICSI?",
    answer: (
      <>
        Often, yes. 3 to 4 months of lifestyle changes, treating infections or varicocele,
        and antioxidants can lower DNA fragmentation. A repeat{" "}
        <Link
          href="/sperm-dna-fragmentation"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          DNA fragmentation test
        </Link>{" "}
        shows the result.
      </>
    ),
  },
  {
    question: "How successful is ICSI?",
    answer:
      "Fertilisation rates are 75% to 85% of injected mature eggs, and over 95% of eggs survive the injection. Pregnancy chances then depend mainly on the woman's age and embryo quality.",
  },
];

export default function IcsiCostAndFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Affects the Cost of ICSI
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              ICSI is added to an IVF cycle, so it sits within the ₹1.5 lakh to ₹2.5 lakh
              range for a full cycle. The exact figure depends on the 4 items below, with
              no hidden lab surcharges, and is itemised after consultation.
            </p>
          </Reveal>

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >
            {costCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        <FaCheck className="size-3.5" />
                      </span>
                      <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Patient questions
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Top FAQs About ICSI Treatment in Delhi NCR
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
      </div>
    </section>
  );
}
