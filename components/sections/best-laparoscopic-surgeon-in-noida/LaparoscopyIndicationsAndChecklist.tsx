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
      title: "Endometriomas and pelvic adhesions",
      description: (
        <>
          Removal of endometriotic cysts and adhesions. See{" "}
          <Link
            href="/endometriosis-fertility-treatment"
            className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
          >
            Endometriosis Treatment
          </Link>
          .
        </>
      ),
    },
    {
      number: "2",
      title: "Tubal disease and hydrosalpinx",
      description: (
        <>
          Tubal cannulation for blocks, or clipping or removal of a fluid-filled tube
          before IVF. See{" "}
          <Link
            href="/fallopian-tube-blockage-treatment"
            className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
          >
            Fallopian Tube Blockage
          </Link>
          .
        </>
      ),
    },
    {
      number: "3",
      title: "Uterine cavity malformations",
      description:
        "Septum resection, T-shaped cavity correction or release of Asherman's adhesions.",
    },
    {
      number: "4",
      title: "Submucosal and intramural fibroids",
      description:
        "Myomectomy for fibroids that push into the cavity or distort it.",
    },
    {
      number: "5",
      title: "Medication-resistant PCOS",
      description:
        "Laparoscopic ovarian drilling (LOD) when tablets do not restore ovulation.",
    },
  ];

const checklist = [
  {
    title: "3D saline infusion sonohysterography",
    text: "shows lesions inside the cavity and their depth.",
  },
  {
    title: "Pelvic MRI, if needed",
    text: "maps deep endometriosis or fibroid margins.",
  },
  {
    title: "Anaesthesia clearance",
    text: "blood count, clotting (PT/INR, APTT), kidney and liver tests, and ECG.",
  },
  {
    title: "Timing",
    text: "days 6 to 10 of the cycle, when the lining is thin and the view is clearest.",
  },
  {
    title: "Infection screening (HIV, HBsAg, HCV, VDRL)",
    text: "as required under the Indian ART Act.",
  },
];

export default function LaparoscopyIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: When Is Reproductive Surgery Recommended?"
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
          title="Diagnostic Checklist: Pre-Operative Workup"
          subtitle="These tests map the problem exactly so surgery is short and precise."
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
                <ChecklistRow>
                  <strong className="font-semibold text-white">{item.title}:</strong>{" "}
                  {item.text}
                </ChecklistRow>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
