"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const governanceCards = [
  {
    title: "Laws we follow",
    description:
      "ART (Regulation) Act, 2021; Surrogacy (Regulation) Act, 2021; and the PC-PNDT Act, 1994.",
  },
  {
    title: "Laboratory standards",
    description:
      "Class 10,000 cleanroom labs with HEPA / VOC air filtration and standardised witnessing.",
  },
  {
    title: "Informed consent",
    description: (
      <>
        Documented informed consent before every procedure. See{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
        >
          ART Compliance &amp; Ethics
        </Link>
        .
      </>
    ),
  },
];

const platformCards = [
  {
    title: "Intellectual property",
    description:
      "All text, diagrams, media and educational material on drmonadahiya.com are protected under the Copyright Act, 1957 and the IT Act, 2000. Scraping, uncredited copying or commercial reuse is not allowed.",
  },
  {
    title: "Governing law and disputes",
    description:
      "These terms are governed by Indian law. Any dispute about website use or treatment falls under the exclusive jurisdiction of the competent courts of New Delhi.",
  },
];

export default function TermsGovernanceAndIp() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Regulatory standards"
          title="Statutory Governance & Clinical Quality"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {governanceCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Platform terms"
          title="Intellectual Property & Legal Jurisdiction"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {platformCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </TreatmentSection>
  );
}
