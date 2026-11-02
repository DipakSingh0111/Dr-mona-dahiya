"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface IndicationItem {
  number: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  borderTheme: "blue" | "pink";
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Time trying",
    description:
      "No pregnancy after 12 months under 35, or after 6 months at 35 or older.",
    borderTheme: "pink",
  },
  {
    number: "2",
    title: "Irregular periods",
    description:
      "Cycles longer than 35 days, absent periods or irregular flow, suggesting no ovulation.",
    borderTheme: "pink",
  },
  {
    number: "3",
    title: "Severe period or pelvic pain",
    description:
      "Chronic pelvic pain, deep pain during sex or very painful periods, suggesting endometriosis.",
    borderTheme: "pink",
  },
  {
    number: "4",
    title: "Past pelvic infection or surgery",
    description:
      "PID, a burst appendix or genital tuberculosis that may have scarred the tubes.",
    borderTheme: "blue",
  },
  {
    number: "5",
    title: "Recurrent miscarriage",
    description:
      "2 or more losses needing anatomical, clotting and hormonal checks. See ",
    linkText: "Miscarriage Treatment",
    linkHref: "/treatments",
    borderTheme: "pink",
  },
];

export default function FemaleFertilityIndications() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Eyebrow & Title */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Clinical breakdown
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Indications: When to Seek a
            <br className="hidden sm:inline" /> Female Fertility Evaluation
          </h2>
        </Reveal>

        {/* Cards Grid */}
        <Stagger delay={0.06} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {indications.map((item, idx) => {
            const isPink = item.borderTheme === "pink";
            return (
              <StaggerItem key={idx}>
                <div
                  className={`relative flex h-full flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isPink
                      ? "border-[#e83e74]/40 bg-gradient-to-b from-[#141b36] to-[#0a1024] shadow-[0_0_24px_rgba(232,62,116,0.12)] hover:border-[#e83e74]/70 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]"
                      : "border-cyan-500/35 bg-gradient-to-b from-[#0e223d] to-[#0a1024] shadow-[0_0_24px_rgba(6,182,212,0.1)] hover:border-cyan-400/60 hover:shadow-[0_0_32px_rgba(6,182,212,0.2)]"
                  }`}
                >
                  <div>
                    {/* Header with Number Pill + Title */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.15rem]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300 sm:text-[14px]">
                      {item.description}
                      {item.linkText && item.linkHref && (
                        <Link
                          href={item.linkHref}
                          className="font-medium text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                        >
                          {item.linkText}
                        </Link>
                      )}
                      {item.linkText ? "." : ""}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
