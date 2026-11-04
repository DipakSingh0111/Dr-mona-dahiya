"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard
} from "@/components/ui/treatment";
interface ChecklistItem {
  prefix: string;
  text: string;
  linkText?: string;
  linkHref?: string;
  suffix?: string;
}

const checklist: ChecklistItem[] = [
  {
    prefix: "Ovarian function and reserve: ",
    text: "AMH, Day 2 or 3 FSH and LH, and an antral follicle count scan.",
  },
  {
    prefix: "Tubal patency: ",
    text: "HSG or HyCoSy confirming open, working tubes.",
  },
  {
    prefix: "Uterine cavity: ",
    text: "3D saline sonography and ",
    linkText: "Hysteroscopy",
    linkHref: "/treatments",
    suffix: " for polyps, fibroids or endometritis.",
  },
  {
    prefix: "Metabolic and hormonal health: ",
    text: "thyroid (TSH), prolactin, fasting sugar, insulin resistance and vitamin D.",
  },
];

interface PathwayCard {
  number: string;
  title: string;
  subTitle?: string;
  bullets: Array<{
    text: string;
    linkText?: string;
    linkHref?: string;
    suffix?: string;
  }>;
}

const pathways: PathwayCard[] = [
  {
    number: "1",
    title: "History and record review",
    bullets: [
      {
        text: "Menstrual pattern, past surgery and earlier fertility records",
      },
    ],
  },
  {
    number: "2",
    title: "Diagnostic profiling",
    bullets: [
      {
        text: "Hormones: AMH, FSH, LH, TSH, prolactin",
      },
      {
        text: "Baseline scan of follicles and uterus",
      },
      {
        text: "Tubal and cavity check by HSG or hysteroscopy",
      },
    ],
  },
  {
    number: "3",
    title: "Pathway A:",
    subTitle: "ovulation correction",
    bullets: [
      {
        text: "Lifestyle changes plus Letrozole, tracked by ",
        linkText: "Follicular Ultrasound",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "4",
    title: "Pathway B: insemination",
    bullets: [
      {
        text: "Unexplained or mild cervical factor treated with ",
        linkText: "IUI",
        linkHref: "/treatments",
        suffix: " for 3 to 4 cycles",
      },
    ],
  },
  {
    number: "5",
    title: "Pathway C:",
    subTitle: "surgical correction",
    bullets: [
      {
        text: "Keyhole surgery through ",
        linkText: "Laparoscopy & Hysteroscopy",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "6",
    title: "Pathway D:",
    subTitle: "assisted reproduction",
    bullets: [
      {
        text: "Blocked tubes, severe endometriosis or low reserve treated with ",
        linkText: "IVF",
        linkHref: "/treatments",
        suffix: " and blastocyst culture",
      },
    ],
  },
];

export default function FemaleDiagnosticAndPathway() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Diagnostic Checklist ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist: The 4-Pillar Workup"
          subtitle="Four groups of tests cover almost every female cause of infertility."
        />

          {/* Checklist Horizontal Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklist.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
                <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                  {/* Cyan / Teal circle checkmark */}
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>

                  <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                    <strong className="font-semibold text-black">{item.prefix}</strong>
                    {item.text}
                    {item.linkText && item.linkHref && (
                      <Link
                        href={item.linkHref}
                        className="font-medium text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                      >
                        {item.linkText}
                      </Link>
                    )}
                    {item.suffix || ""}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: Step-by-Step Treatment Pathway ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Treatment Pathway"
        />

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {pathways.map((item, idx) => (
              <StaggerItem key={idx}>
              <ProtocolCard
                number={item.number}
                title={item.title}
                bullets={item.bullets.map((b) =>
                  typeof b === "string"
                    ? b
                    : `${b.text}${b.linkText ?? ""}${b.suffix ?? ""}`,
                )}
              />
            </StaggerItem>
            ))}
          </Stagger>
        </div>
      </TreatmentSection>
  );
}

