"use client";

import { useState, type ReactNode } from "react";
import { FaCheck, FaChevronDown, FaPills } from "react-icons/fa";
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
    title: "Diagnostic or operative scope",
    description: "A look alone, or treatment of polyps, fibroids, septum or adhesions.",
  },
  {
    icon: "pills" as const,
    title: "Anaesthesia",
    description: "Local block, sedation or short general anaesthesia.",
  },
  {
    icon: "check" as const,
    title: "Facility and day-care stay",
    description: "OT time and observation after the procedure.",
  },
  {
    icon: "check" as const,
    title: "Histopathology and follow-up",
    description: "Tissue testing and a review visit when needed.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Is hysteroscopy painful?",
    answer:
      "Most women feel only mild cramping with diagnostic hysteroscopy under a local block. Operative work is done under short general anaesthesia, so you are asleep for the procedure.",
  },
  {
    question: "Can I go home the same day?",
    answer:
      "Yes. It is a day-care procedure. After a few hours of observation you go home the same day in most cases.",
  },
  {
    question: "When can I try for pregnancy after hysteroscopy?",
    answer:
      "Usually after 1 cycle once the lining has healed. Your doctor confirms timing at the follow-up visit.",
  },
  {
    question: "Is hysteroscopy needed before IVF?",
    answer:
      "Not for every patient. It is advised after failed transfers, when scans suggest a cavity problem, or when adhesions, polyps or a septum are suspected.",
  },
  {
    question: "What is a hysteroscopy, and why is it performed?",
    answer:
      "A thin telescope is passed through the cervix to see inside the uterus. It finds and, when needed, treats polyps, fibroids, adhesions or a septum that can block implantation.",
  },
  {
    question: "What is the difference between diagnostic and operative hysteroscopy?",
    answer:
      "Diagnostic means looking only. Operative means treating the finding in the same sitting—removing a polyp or fibroid, dividing a septum or releasing adhesions.",
  },
  {
    question: "Is a hysteroscopy painful, and does it require anesthesia?",
    answer:
      "Diagnostic scopes usually need only a local cervical block. Operative hysteroscopy is done under short general anaesthesia for comfort and precision.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How long does a hysteroscopy take, and is it a day-care procedure?",
    answer:
      "Diagnostic work often takes 10 to 30 minutes; operative work may take longer. Including recovery, you spend a few hours and go home the same day.",
  },
  {
    question: "How much does a hysteroscopy cost in India / Delhi NCR?",
    answer:
      "Diagnostic office hysteroscopy is about ₹15,000 to ₹25,000. Operative hysteroscopy is about ₹35,000 to ₹65,000, depending on the finding and anaesthesia.",
  },
  {
    question: "What is the recovery time after a hysteroscopy?",
    answer:
      "Light cramping or spotting for a day or two is common. Most women return to desk work in 1 to 3 days after a diagnostic scope, and a little longer after operative work.",
  },
  {
    question: "On which cycle day should a hysteroscopy be scheduled?",
    answer:
      "Usually in the first half of the cycle, after the period ends, when the lining is thin and the cavity view is clearest.",
  },
  {
    question: "Does hysteroscopy improve IVF success rates?",
    answer:
      "When a cavity problem is found and corrected—polyps, adhesions, septum or submucosal fibroids—implantation chances improve because the embryo has a healthier surface.",
  },
  {
    question: "What are the risks or side effects of a hysteroscopy?",
    answer:
      "Risks are low: light bleeding, cramping, rare infection or fluid overload. Serious complications are uncommon with modern day-care technique.",
  },
  {
    question: "How soon can you try to conceive or do an embryo transfer after hysteroscopy?",
    answer:
      "Often after one healing cycle. Embryo transfer is timed once the lining looks ready on scan, usually the next prepared cycle.",
  },
];

export default function HysteroscopyCostAndFaq() {
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
              Cost Factors Breakdown
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Cost depends on whether the scope is diagnostic or operative, the type of
              anaesthesia and day-care stay. A written estimate is shared before the
              procedure.
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
                        {card.icon === "pills" ? (
                          <FaPills className="size-3.5" />
                        ) : (
                          <FaCheck className="size-3.5" />
                        )}
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
              Frequently Asked Questions about Hysteroscopy
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
