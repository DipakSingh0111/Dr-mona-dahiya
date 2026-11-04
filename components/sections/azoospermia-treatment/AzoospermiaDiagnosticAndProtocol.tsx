"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard
} from "@/components/ui/treatment";
const checklistLeft = [
  "Repeat semen analysis with centrifugation",
  "Scrotal ultrasound for testicular size and varicocele",
];

const checklistRight = [
  "FSH, LH, testosterone and prolactin",
  "Karyotype and Y-chromosome microdeletion test where indicated",
];

const protocols = [
  {
    number: "1",
    title: "Pathway A: Obstructive azoospermia",
    bullets: [
      "Normal hormones and normal testicular size point to a blockage.",
      "Sperm retrieved by PESA or TESA, or the blockage is corrected.",
    ],
  },
  {
    number: "2",
    title: "Pathway B: Non-obstructive azoospermia",
    bullets: [
      "Sperm production is low or absent in the testis.",
      "Hormone optimisation first, then Micro-TESE to find pockets of sperm.",
    ],
  },
  {
    number: "3",
    title: "Pathway C: Hormonal cause",
    bullets: [
      "Pituitary or hypogonadotropic causes respond to treatment.",
      "Hormone therapy can bring sperm into the semen.",
    ],
  },
  {
    number: "4",
    title: "Sperm use",
    bullets: [
      "Retrieved sperm is used for ICSI with partner eggs.",
      "Surplus sperm can be frozen for later cycles.",
    ],
  },
  {
    number: "5",
    title: "Counselling",
    bullets: [
      "Genetic counselling where relevant.",
      "Donor sperm discussed as an option if no sperm is found.",
    ],
  },
];

export default function AzoospermiaDiagnosticAndProtocol() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test."
        />

          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
            {[checklistLeft, checklistRight].map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3">
                {col.map((item, idx) => (
                  <Reveal
                    key={item}
                    variant="fadeUp"
                    delay={(colIdx * 2 + idx) * 0.05}
                  >
                    <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/25 text-blue ring-1 ring-blue/45 sm:size-6">
                        <FaCheck className="size-2.5 sm:size-3" />
                      </span>
                      <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Treatment Protocol"
          subtitle="What to expect at each stage. The exact plan is set at your consultation."
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>
      </TreatmentSection>
  );
}
