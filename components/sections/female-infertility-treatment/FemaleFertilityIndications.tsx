"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader
} from "@/components/ui/treatment";
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
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={<>Indications: When to Seek a
            <br className="hidden sm:inline" /> Female Fertility Evaluation</>}
        />

        {/* Cards Grid */}
        <Stagger delay={0.06} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {indications.map((item, idx) => {
            const isPink = item.borderTheme === "pink";
            return (
              <StaggerItem key={idx}>
                <div
                  className={`relative flex h-full flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isPink
                      ? "border-rose/40 bg-gradient-to-b from-white to-[#fff8fa] shadow-[0_8px_24px_rgba(232,62,116,0.06)] hover:border-rose/70 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]"
                      : "border-[#fde2ec] bg-gradient-to-b from-white to-[#fff8fa] shadow-[0_8px_24px_rgba(232,62,116,0.06)] hover:border-rose/70 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]"
                  }`}
                >
                  <div>
                    {/* Header with Number Pill + Title */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-[1.05rem] font-semibold text-black sm:text-[1.15rem]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 text-[13px] leading-relaxed text-black sm:text-[14px]">
                      {item.description}
                      {item.linkText && item.linkHref && (
                        <Link
                          href={item.linkHref}
                          className="font-medium text-rose underline decoration-rose/40 underline-offset-2 transition-colors hover:text-rose-dark hover:decoration-rose"
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
      </TreatmentSection>
  );
}
