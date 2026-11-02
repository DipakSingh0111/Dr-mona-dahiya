"use client";

import { useState, type ReactNode } from "react";
import { FaCalendarAlt, FaCheck, FaChevronDown, FaPills } from "react-icons/fa";
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
    icon: "calendar" as const,
    title: "Complete cycle package",
    description:
      "Baseline scan, 3 to 4 tracking visits and ovulation confirmation: ₹3,500 to ₹7,000.",
  },
  {
    icon: "check" as const,
    title: "Single scans",
    description: "Individual tracking visit: ₹1,000 to ₹1,800 per scan.",
  },
  {
    icon: "pills" as const,
    title: "Ovulation medicines",
    description: "Letrozole tablets and hCG trigger: ₹1,500 to ₹3,000.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How many scans does one monitoring cycle need?",
    answer:
      "Usually 4 to 6: a baseline on Day 2 or 3, then Days 8, 10, 12 and 14, and a final scan to confirm the follicle has ruptured.",
  },
  {
    question: "Is a transvaginal follicular scan painful?",
    answer:
      "No. The probe is slim and lubricated, the scan takes 5 to 10 minutes with no anaesthesia, and you can go straight back to work.",
  },
  {
    question: "What is the ideal follicle size for pregnancy?",
    answer:
      "18 to 22 mm, with a lining of at least 7.5 to 10 mm that has a trilaminar (triple-layer) look.",
  },
  {
    question: "Where can I book follicular scans with Dr. Mona Dahiya?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does follicular monitoring cost?",
    answer:
      "₹3,500 to ₹7,000 for a full cycle, or ₹1,000 to ₹1,800 per single scan. Medicines add ₹1,500 to ₹3,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "When is the best time to have intercourse?",
    answer:
      "On the day of the hCG trigger and the next 1 to 2 days, since ovulation happens about 36 hours after the trigger.",
  },
  {
    question: "Are home ovulation kits as accurate?",
    answer:
      "Not always. LH kits can give false positives, especially with PCOS, and cannot show follicle size or the lining. A scan confirms both.",
  },
  {
    question: "Can a follicle grow but not release an egg?",
    answer:
      "Yes. This is called luteinised unruptured follicle (LUF) syndrome. Monitoring detects it, and an hCG trigger can help release the egg.",
  },
  {
    question: "How many monitored cycles should we try?",
    answer:
      "Usually 3 to 6. If pregnancy has not happened after 3 well-timed cycles, IUI or further testing is advised.",
  },
];

function CostIcon({ type }: { type: (typeof costCards)[number]["icon"] }) {
  if (type === "calendar") return <FaCalendarAlt className="size-3.5" />;
  if (type === "pills") return <FaPills className="size-3.5" />;
  return <FaCheck className="size-3.5" />;
}

export default function FollicularCostAndFaq() {
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
              What Affects the Cost of Follicular Monitoring
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Follicular monitoring is one of the most affordable fertility services. A
              full cycle study costs ₹3,500 to ₹7,000.
            </p>
          </Reveal>

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
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
              Top FAQs About Follicular Ultrasound Monitoring
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
