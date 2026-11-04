"use client";

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
}

const checklist: ChecklistItem[] = [
  {
    prefix: "Computer-assisted semen analysis (CASA): ",
    text: "count, progressive motility and strict Kruger morphology after 2 to 3 days of abstinence.",
  },
  {
    prefix: "Sperm DNA fragmentation index (Halosperm / SCD): ",
    text: "single- and double-strand DNA breaks.",
  },
  {
    prefix: "Hormones: ",
    text: "total testosterone, morning LH, FSH, prolactin and TSH.",
  },
  {
    prefix: "Scrotal Doppler ultrasound: ",
    text: "testicular volume and varicocele reflux.",
  },
  {
    prefix: "Karyotype and Y-chromosome microdeletion: ",
    text: "needed when the count is under 5 million/mL, before surgery.",
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
    title: "Step 1: Lifestyle and the 74-day sperm cycle",
    bullets: [
      {
        text: "Stop smoking, excess alcohol and heat exposure (saunas, tight clothing)",
      },
      {
        text: "Antioxidants (CoQ10, L-carnitine, zinc, selenium, lycopene) against oxidative stress",
      },
    ],
  },
  {
    number: "2",
    title: "Step 2: Medical and hormonal therapy",
    bullets: [
      {
        text: "Culture-directed antibiotics for hidden infection (leucocytospermia)",
      },
      {
        text: "Clomiphene or aromatase inhibitors for a low testosterone-to-estrogen ratio",
      },
    ],
  },
  {
    number: "3",
    title: "Step 3: Varicocele correction",
    bullets: [
      {
        text: "Referral for microsurgical varicocelectomy when a varicocele is clinically significant and semen quality is falling",
      },
    ],
  },
  {
    number: "4",
    title: "Step 4: IUI",
    bullets: [
      {
        text: "For mild low count with a post-wash motile count above 5 to 10 million. See ",
        linkText: "IUI Treatment",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "5",
    title: "Step 5: ICSI with microfluidics",
    bullets: [
      {
        text: "For severe OATS or high DFI, single-sperm selection on a microfluidic chip with ",
        linkText: "ICSI",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "6",
    title: "Step 6: Surgical sperm retrieval",
    bullets: [
      {
        text: "PESA, TESA or micro-TESE for azoospermia. See ",
        linkText: "Surgical Sperm Retrieval",
        linkHref: "/surgical-sperm-retrieval-tesa-pesa",
      },
    ],
  },
];

export default function MaleDiagnosticAndProtocol() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Diagnostic Checklist ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests show exactly what is affecting sperm, so treatment is targeted from the start."
        />

          {/* Checklist Horizontal Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklist.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>

                  <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                    <strong className="font-semibold text-black">{item.prefix}</strong>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: Step-by-Step Treatment Protocol ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Treatment Protocol"
        />

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
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

