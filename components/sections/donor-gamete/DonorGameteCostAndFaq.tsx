"use client";

import { useState, type ReactNode } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaFlask,
  FaPills,
  FaCalendarAlt,
} from "react-icons/fa";
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
    icon: "check" as const,
    title: "ART bank sourcing",
    description:
      "Screening, viral clearance, donor compensation and logistics required by the ART Act: ₹75,000 to ₹1,50,000.",
  },
  {
    icon: "flask" as const,
    title: "Lab fertilisation and culture",
    description: "ICSI, media and blastocyst culture: ₹50,000 to ₹75,000.",
  },
  {
    icon: "pills" as const,
    title: "Recipient preparation",
    description:
      "Estrogen priming and monitoring scans: ₹8,000 to ₹15,000.",
  },
  {
    icon: "calendar" as const,
    title: "Transfer and freezing",
    description: "Embryo transfer and storage of spare blastocysts.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the success rate of IVF with donor eggs?",
    answer:
      "70% to 75% clinical pregnancy per transfer, because donors are under 30 with normal reserve, provided the recipient's uterus is healthy.",
  },
  {
    question: "Is egg donation legal in India under the ART Act?",
    answer:
      "Yes. Donation is legal under the ART (Regulation) Act, 2021. Donors must come through government-registered ART banks, be fully screened and stay anonymous.",
  },
  {
    question: "Will the baby share the mother's genes with donor eggs?",
    answer:
      "The baby inherits DNA from the egg donor and the father (or sperm donor). The birth mother carries the pregnancy, and her uterine environment influences how genes are expressed.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for donor IVF?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does donor egg IVF cost?",
    answer:
      "Typically ₹1,33,000 to ₹2,40,000. ART bank sourcing ₹75,000 to ₹1,50,000, lab work ₹50,000 to ₹75,000 and recipient preparation ₹8,000 to ₹15,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I choose my donor?",
    answer:
      "Not by identity. Under the ART Act donors are anonymous, but the bank matches physical traits, blood group and education.",
  },
  {
    question: "Is there an age limit for recipients?",
    answer:
      "Yes. Under the ART Act, women can receive treatment between 21 and 50 years of age.",
  },
  {
    question: "How long does a donor egg cycle take?",
    answer:
      "About 4 to 6 weeks from matching to embryo transfer, including 2 weeks of lining preparation.",
  },
  {
    question: "Is donor sperm treatment different?",
    answer:
      "It is simpler. Screened donor sperm from an ART bank can be used for IUI (₹12,000 to ₹18,000 a cycle) or IVF/ICSI.",
  },
];

function CostIcon({ icon }: { icon: (typeof costCards)[number]["icon"] }) {
  if (icon === "flask") return <FaFlask className="size-3.5" />;
  if (icon === "pills") return <FaPills className="size-3.5" />;
  if (icon === "calendar") return <FaCalendarAlt className="size-3.5" />;
  return <FaCheck className="size-3.5" />;
}

export default function DonorGameteCostAndFaq() {
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
              What Affects the Cost of Donor Gamete IVF
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Donor egg IVF typically totals ₹1,33,000 to ₹2,40,000 across the
              components below, plus transfer and storage.
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
                        <CostIcon icon={card.icon} />
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
              Top FAQs About Donor Egg and Donor Sperm IVF
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
