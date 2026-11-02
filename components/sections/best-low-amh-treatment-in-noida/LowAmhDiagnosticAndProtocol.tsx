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
  text: string;
  linkText?: string;
  linkHref?: string;
  suffix?: string;
}

const checklist: ChecklistItem[] = [
  { text: "High-sensitivity AMH (ECLIA) for an accurate baseline." },
  { text: "Day 2 or 3 scan counting antral follicles (2 to 9 mm)." },
  {
    text: "Day 2 FSH and estradiol to understand how hard the ovaries are being pushed.",
  },
  {
    text: "DHEA-S, vitamin D3 and free testosterone to guide priming.",
  },
  {
    text: "Partner's ",
    linkText: "Sperm DNA Fragmentation Test",
    linkHref: "/treatments",
    suffix:
      ", so sperm quality does not add to the challenge of fewer eggs.",
  },
];

interface ProtocolCard {
  number: string;
  title: string;
  bullets: Array<{
    text: string;
    linkText?: string;
    linkHref?: string;
    suffix?: string;
  }>;
}

const protocols: ProtocolCard[] = [
  {
    number: "1",
    title: "Ovarian priming (6-8 weeks before)",
    bullets: [
      { text: "Micronized DHEA" },
      { text: "CoQ10" },
      { text: "Vitamin D" },
    ],
  },
  {
    number: "2",
    title: "Protocol selection and stimulation",
    bullets: [
      { text: "Micro-dose flare" },
      {
        text: "",
        linkText: "Mini IVF",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "3",
    title: "DuoStim: two stimulations in one cycle",
    bullets: [
      { text: "Wave 1 (follicular)" },
      { text: "Wave 2 (luteal)" },
    ],
  },
  {
    number: "4",
    title: "ICSI and extended culture",
    bullets: [
      {
        text: "Fertilisation by ",
        linkText: "ICSI",
        linkHref: "/treatments",
      },
      { text: "Benchtop culture to blastocyst" },
    ],
  },
  {
    number: "5",
    title: "Embryo banking and frozen transfer",
    bullets: [
      { text: "Blastocysts banked across cycles" },
      {
        text: "",
        linkText: "Frozen Embryo Transfer",
        linkHref: "/treatments",
      },
    ],
  },
];

export default function LowAmhDiagnosticAndProtocol() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title={<>Diagnostic Checklist: Assessing True
              <br className="hidden sm:inline" /> Functional Reserve</>}
          subtitle="These tests show how much reserve is really there and how to prime it."
        />

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklist.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0047ca]/25 text-[#93c5fd] ring-1 ring-[#0047ca]/45 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
                    {item.text}
                    {item.linkText && item.linkHref && (
                      <Link
                        href={item.linkHref}
                        className="font-medium text-[#93c5fd] underline decoration-[#93c5fd]/50 underline-offset-2 transition-colors hover:text-sky-200 hover:decoration-sky-300"
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

        <div>
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Low AMH Protocol"
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
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
