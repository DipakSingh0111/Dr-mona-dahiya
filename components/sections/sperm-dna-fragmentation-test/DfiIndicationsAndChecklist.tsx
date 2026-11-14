"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";
interface IndicationItem {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Unexplained infertility",
    description: "Normal semen analysis and female work-up, yet no pregnancy.",
  },
  {
    number: "2",
    title: "Recurrent miscarriage",
    description:
      "Two or more early losses where sperm DNA quality may contribute.",
  },
  {
    number: "3",
    title: "Failed IUI or IVF",
    description:
      "Poor fertilisation or embryo development without a clear cause.",
  },
  {
    number: "4",
    title: "Lifestyle and exposure risks",
    description:
      "Smoking, heat exposure, long sitting hours, varicocele or infection.",
  },
  {
    number: "5",
    title: "Advanced paternal age",
    description: "Older age can raise sperm DNA damage.",
  },
];

interface ChecklistItem {
  text: string;
}

const checklist: ChecklistItem[] = [
  { text: "Standard semen analysis (count, motility, morphology)" },
  { text: "Sperm DNA fragmentation assay after 2 to 5 days of abstinence" },
  { text: "Hormone profile and scrotal examination or ultrasound" },
  { text: "Review of fever, medicines, smoking, alcohol and heat exposure" },
];

export default function DfiIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={
            <>
              Indications: Who Needs a Sperm
              <br className="hidden sm:inline" /> DNA Fragmentation Test?
            </>
          }
          subtitle="Common reasons Dr. Mona Dahiya recommends sperm dna fragmentation care."
        />

        {/* 5 Cards Grid */}
        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {indications.map((item, idx) => (
            <StaggerItem key={idx}>
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test."
        />

        {/* 2-Column Checklist Cards */}
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
              <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white shadow-[0_4px_12px_rgba(232,62,116,0.3)] sm:size-6">
                  <FaCheck className="size-2.5 sm:size-3" />
                </span>
                <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
