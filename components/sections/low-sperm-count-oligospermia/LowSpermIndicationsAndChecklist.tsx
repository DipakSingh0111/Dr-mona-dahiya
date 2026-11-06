"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard
} from "@/components/ui/treatment";
interface IndicationItem {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Abnormal semen report",
    description: "Low concentration, motility or abnormal morphology.",
  },
  {
    number: "2",
    title: "Varicocele",
    description: "Enlarged scrotal veins that may lower sperm quality.",
  },
  {
    number: "3",
    title: "Hormonal or medical causes",
    description: "Thyroid disorder, diabetes or low testosterone.",
  },
  {
    number: "4",
    title: "Lifestyle exposure",
    description: "Smoking, alcohol, obesity, heat or certain medicines.",
  },
  {
    number: "5",
    title: "Failed IUI cycles",
    description: "When sperm quality limits success.",
  },
];

interface ChecklistItem {
  text: string;
}

const checklist: ChecklistItem[] = [
  { text: "Two semen analyses a few weeks apart" },
  { text: "Hormone profile including FSH, LH, testosterone and prolactin" },
  { text: "Scrotal ultrasound with Doppler" },
  { text: "Sperm DNA fragmentation where indicated" },
];

export default function LowSpermIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Indications: Who Needs Evaluation ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={<>Indications: Who Needs
              <br className="hidden sm:inline" /> Evaluation for Low Sperm Count?</>}
          subtitle="Common reasons Dr. Mona Dahiya recommends low sperm count &amp; motility care."
        />

          {/* 5 Cards Grid */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {indications.map((item, idx) => (
              <StaggerItem key={idx}>
              <NumberedCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Diagnostic Checklist (2x2 Grid) ================= */}
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
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35 sm:size-6">
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
  );
}

