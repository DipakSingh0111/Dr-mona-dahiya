"use client";

import Link from "next/link";
import { FaCheck, FaFlask, FaPills, FaCalendarAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Workup for Recurrent Miscarriage",
    description:
      "Antiphospholipid Panel, Karyotype of both partners and 3D Ultrasound. Cost : 18000 – 35000 INR",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Hysteroscopic Procedure",
    description: (
      <>
        In case a uterine septum needs correction. Cost : 35000 – 60000 INR. Read
        More On{" "}
        <Link
          href="/best-laparoscopic-surgeon-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
        >
          Laparoscopy and Hysteroscopy
        </Link>
        .
      </>
    ),
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Blood Thinners",
    description:
      "Heparin Injections everyday during pregnancy + Progesterone Support.",
  },
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "IVF with PGTA",
    description:
      "Cost of Biopsying and Testing each embryo for Chromosomal abnormalities.",
  },
];

export default function RecurrentMiscarriageCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Costs"
        title="How Much Does Treatment For Miscarriages Cost ?"
        subtitle="Workup typically costs between 18000 – 35000 INR. Subsequent treatment will vary depending on results."
      />

      <Stagger
        delay={0.05}
        className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {costCards.map((card) => (
          <StaggerItem key={card.title} className="h-full">
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
