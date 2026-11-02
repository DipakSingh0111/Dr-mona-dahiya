"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
  NumberedCard,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "Multiple failed transfers",
    description: "Transfers of good-quality embryos that did not implant.",
  },
  {
    number: "2",
    title: "Poor embryo development",
    description: "Few embryos reaching blastocyst stage.",
  },
  {
    number: "3",
    title: "Suspected uterine factor",
    description: "Polyps, septum, adhesions or a thin lining.",
  },
  {
    number: "4",
    title: "Advanced maternal age",
    description: "Where chromosomal abnormalities in embryos are more likely.",
  },
  {
    number: "5",
    title: "Unexplained failure",
    description: "No clear cause after a standard work-up.",
  },
];

const checklistItems: string[] = [
  "Review of previous stimulation, embryo grading and transfer technique",
  "Hysteroscopy and 3D ultrasound for the cavity",
  "Screen for chronic endometritis, thyroid and metabolic factors",
  "Clotting and immune screen only where clinically justified",
  "Semen and sperm DNA fragmentation assessment",
];

export default function RifWhatAndIndications() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: What Is Recurrent Implantation Failure (RIF)? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Understanding the condition"
          title="What Is Recurrent Implantation Failure (RIF)?"
        />

          {/* Single large card from screenshot */}
          <Reveal variant="fadeUp" delay={0.06} className="mt-6">
            <div className="rounded-2xl border border-[#e83e74]/35 bg-gradient-to-r from-[#141b36] via-[#0e223d] to-[#0a1024] p-6 sm:p-7 shadow-[0_0_24px_rgba(232,62,116,0.12)]">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                  <FaCheck className="size-3" />
                </span>
                <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem]">
                  Recurrent Implantation Failure (RIF)
                </h3>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
                Recurrent Implantation Failure (RIF) is the failure to achieve pregnancy after transferring ≥2 top-grade blastocysts, affecting 10% to 15% of IVF patients. Roughly 50% of cases stem from embryonic chromosomal abnormalities—where PGT-A screening restores implantation rates to 65%–70%—while 25% to 30% involve a displaced implantation window (identified via ERA) or silent uterine issues like chronic endometritis and thin linings (&lt;7 mm).
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= SECTION 2: Indications: Who Needs a RIF Evaluation? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs a RIF Evaluation?"
          subtitle="Common reasons Dr. Mona Dahiya recommends recurrent implantation failure care."
        />

          {/* Row 1: 3 Cards */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {indications.slice(0, 3).map((item) => (
              <StaggerItem key={item.number}>
                <NumberedCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>

          {/* Row 2: 2 Cards (centered or 2-col max-w-4xl) */}
          <Stagger delay={0.05} className="mt-4 sm:mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-5 max-w-4xl">
            {indications.slice(3, 5).map((item) => (
              <StaggerItem key={item.number}>
                <NumberedCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 3: Diagnostic Checklist ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test."
        />

          {/* 2-column or grid checklist bars */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-3.5">
            {checklistItems.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}

