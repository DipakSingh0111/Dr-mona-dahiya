"use client";

import { useState, type ReactNode } from "react";
import { FaCheck, FaChevronDown, FaFlask, FaPills, FaCalendarAlt } from "react-icons/fa";
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
    icon: "pills" as const,
    title: "Mock cycle medicines and scans",
    description:
      "Estradiol valerate, progesterone and serial scans: ₹6,000 to ₹12,000.",
  },
  {
    icon: "check" as const,
    title: "Endometrial biopsy",
    description: "Sterile Pipelle catheter and procedure: ₹5,000 to ₹8,000.",
  },
  {
    icon: "flask" as const,
    title: "NGS genomic analysis",
    description: "RNA extraction, gene panel and analysis: ₹25,000 to ₹35,000.",
  },
  {
    icon: "calendar" as const,
    title: "Personalised frozen transfer",
    description: "Billed as a standard frozen transfer, timed to your result.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does the ERA test find the window of implantation?",
    answer:
      "It measures 248 receptivity genes by next-generation sequencing and classifies your lining as receptive, pre-receptive (needs more progesterone time) or post-receptive (needs less) at the moment of biopsy.",
  },
  {
    question: "Is the ERA biopsy painful?",
    answer:
      "It takes 15 to 30 seconds with a thin, flexible catheter. Most women feel a period-like cramp that settles quickly, sometimes with an antispasmodic tablet.",
  },
  {
    question: "Can embryo transfer happen in the same cycle as the ERA test?",
    answer:
      "No. The ERA cycle is a mock cycle for sampling only. The personalised transfer uses frozen embryos in the next cycle, with progesterone timed to your result.",
  },
  {
    question: "Where can I have an ERA test with Dr. Mona Dahiya?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does an ERA test cost?",
    answer:
      "About ₹36,000 to ₹55,000: mock cycle ₹6,000 to ₹12,000, biopsy ₹5,000 to ₹8,000 and NGS analysis ₹25,000 to ₹35,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How long do ERA results take?",
    answer:
      "Usually 2 to 3 weeks from biopsy, so the personalised transfer is planned for the following cycle.",
  },
  {
    question: "What percentage of women have a displaced window?",
    answer:
      "Studies suggest about 1 in 4 to 1 in 3 women with recurrent implantation failure have a non-receptive result at the standard time.",
  },
  {
    question: "Should every IVF patient have an ERA test?",
    answer:
      "No. It is advised after 2 or more failed good-quality transfers, failed euploid transfers, or when only 1 embryo is available.",
  },
  {
    question: "Do I need to repeat the ERA test?",
    answer:
      "Usually not. If the result is pre- or post-receptive, a repeat at the adjusted time may be advised to confirm it in some cases.",
  },
];

function CostIcon({ type }: { type: (typeof costCards)[number]["icon"] }) {
  if (type === "pills") return <FaPills className="size-3.5" />;
  if (type === "flask") return <FaFlask className="size-3.5" />;
  if (type === "calendar") return <FaCalendarAlt className="size-3.5" />;
  return <FaCheck className="size-3.5" />;
}

export default function EraCostAndFaq() {
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
              What Affects the Cost of an ERA Test
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              An ERA test costs about ₹36,000 to ₹55,000 in total across the 3 items
              below. The personalised transfer is billed as a standard frozen transfer.
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
                        <CostIcon type={card.icon} />
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
              Top FAQs About the ERA Test
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
