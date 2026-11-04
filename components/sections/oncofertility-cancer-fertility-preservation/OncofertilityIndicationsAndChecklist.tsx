"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";
const indications: { number: string; title: string; description: ReactNode }[] =
  [
    {
      number: "1",
      title: "Women facing chemotherapy",
      description:
        "Lymphoma, leukaemia or sarcoma treated with alkylating drugs such as cyclophosphamide, which carry a high risk of ovarian failure.",
    },
    {
      number: "2",
      title: "Hormone-sensitive breast cancer",
      description:
        "Letrozole-supported protocols keep estradiol low while eggs are banked.",
    },
    {
      number: "3",
      title: "Pelvic radiotherapy",
      description:
        "Gynaecological, colorectal or pelvic cancers needing egg freezing or ovarian transposition out of the radiation field.",
    },
    {
      number: "4",
      title: "Men facing cancer treatment",
      description: (
        <>
          Chemotherapy, pelvic radiation or orchiectomy, with urgent{" "}
          <Link
            href="/treatments"
            className="font-medium text-blue underline underline-offset-2 hover:text-white"
          >
            Semen Freezing
          </Link>
          .
        </>
      ),
    },
    {
      number: "5",
      title: "Non-cancer conditions",
      description:
        "Severe autoimmune disease (lupus nephritis, vasculitis) needing high-dose cytotoxic drugs.",
    },
  ];

const checklist = [
  {
    title: "Oncology coordination",
    text: "direct contact with your oncologist to confirm the safe window before therapy.",
  },
  {
    title: "Rapid reserve check",
    text: "AMH, antral follicle count and estradiol, without waiting for a period.",
  },
  {
    title: "Hormone-receptor status",
    text: "ER/PR results in breast and gynaecological cancers to tailor the protocol.",
  },
  {
    title: "Emergency viral markers (HIV I & II, HBsAg, HCV, VDRL)",
    text: "so the lab can process samples.",
  },
  {
    title: "Urgent semen analysis",
    text: "to confirm samples suitable for direct freezing.",
  },
];

export default function OncofertilityIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical indications"
          title="Indications: Who Needs Emergency Oncofertility Care?"
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
          title="Diagnostic Checklist: Rapid-Response Workup"
          subtitle="All tests are done within a day or two so treatment can start on time."
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
                <ChecklistRow>
                  <strong className="font-semibold text-black">{item.title}:</strong>{" "}
                  {item.text}
                </ChecklistRow>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
