"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard
} from "@/components/ui/treatment";
const indications = [
  {
    number: "1",
    title: "Fresh transfer not advisable",
    description:
      "Embryos are frozen when high oestrogen levels or a risk of OHSS make an immediate transfer unsafe.",
  },
  {
    number: "2",
    title: "Genetic testing (PGT)",
    description:
      "Biopsied embryos are frozen while results are awaited, then transferred in a prepared cycle.",
  },
  {
    number: "3",
    title: "Surplus embryos from an earlier cycle",
    description:
      "Good-quality embryos can be used without repeating ovarian stimulation.",
  },
  {
    number: "4",
    title: "Thin or out-of-phase lining",
    description:
      "Freezing lets the lining be prepared separately from egg retrieval.",
  },
  {
    number: "5",
    title: "Planned or medically advised delay",
    description:
      "Couples who need to defer transfer for medical or personal reasons.",
  },
];

const checklist = [
  "Embryo grade, day of freezing and vitrification records",
  "Hormone profile including oestradiol and progesterone",
  "Thyroid, prolactin and glucose review when relevant",
  "Ultrasound assessment of lining thickness and pattern",
  "Uterine cavity check (hysteroscopy or saline sonography) where indicated",
];

export default function FetIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Frozen Embryo Transfer?"
          subtitle="Common reasons Dr. Mona Dahiya recommends frozen embryo transfer care."
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {indications.map((item) => (
              <StaggerItem key={item.number}>
              <NumberedCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test."
        />

          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
