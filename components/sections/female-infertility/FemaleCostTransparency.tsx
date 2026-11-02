"use client";

import Link from "next/link";
import { FaFlask, FaPills, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface CostCard {
  icon: React.ReactNode;
  title: string;
  subTitle?: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  suffix?: string;
}

const costCards: CostCard[] = [
  {
    icon: <FaFlask className="size-4 sm:size-5 text-white" />,
    title: "Initial tests",
    description:
      "Hormone panel, HSG and baseline scan: ₹8,000 to ₹16,000.",
  },
  {
    icon: <FaPills className="size-4 sm:size-5 text-white" />,
    title: "Ovulation",
    subTitle: "induction",
    description:
      "Letrozole and tracking scans: ₹3,000 to ₹6,000 per cycle.",
  },
  {
    icon: <FaCalendarAlt className="size-4 sm:size-5 text-white" />,
    title: "IUI",
    description:
      "Sperm preparation and insemination: ₹15,000 per cycle. See ",
    linkText: "IUI Treatment",
    linkHref: "/treatments",
  },
  {
    icon: <FaCheck className="size-4 sm:size-5 text-white" />,
    title: "IVF, if indicated",
    description: "Full ",
    linkText: "IVF Treatment",
    linkHref: "/treatments",
    suffix: " cycle planning: ₹1.5 lakh to ₹2.5 lakh.",
  },
];

export default function FemaleCostTransparency() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Eyebrow & Title */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Transparency
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            What Affects the Cost of
            <br className="hidden sm:inline" /> Female Infertility Treatment
          </h2>
          <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
            Most women start with tests costing ₹8,000 to ₹16,000, and many conceive with low-cost treatment before IVF is needed.
          </p>
        </Reveal>

        {/* 4 Cards Grid */}
        <Stagger delay={0.05} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {costCards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                <div>
                  {/* Icon Pill + Title */}
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e83e74] shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {card.icon}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white leading-snug">
                      {card.title}
                      {card.subTitle && (
                        <>
                          <br />
                          <span>{card.subTitle}</span>
                        </>
                      )}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                    {card.description}
                    {card.linkText && card.linkHref && (
                      <Link
                        href={card.linkHref}
                        className="font-medium text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                      >
                        {card.linkText}
                      </Link>
                    )}
                    {card.suffix || (card.linkText ? "." : "")}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

