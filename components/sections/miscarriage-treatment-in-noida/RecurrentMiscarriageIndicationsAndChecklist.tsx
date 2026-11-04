"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow
} from "@/components/ui/treatment";
interface IndicationCard {
  number: string;
  title: string;
  description: React.ReactNode;
}

const indications: IndicationCard[] = [
  {
    number: "1",
    title: "2 or more miscarriages",
    description: "Early pregnancy losses before 20 weeks.",
  },
  {
    number: "2",
    title: "Unexplained early loss",
    description: "A blighted ovum or loss of heartbeat after earlier positive scans.",
  },
  {
    number: "3",
    title: "Age over 35 with losses",
    description: "Repeated miscarriages linked to age-related chromosomal errors.",
  },
  {
    number: "4",
    title: "Failed implantation with early losses",
    description: (
      <span>
        Biochemical pregnancies and early losses. See{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="text-rose underline hover:text-white transition-colors"
        >
          Recurrent Implantation Failure
        </Link>
      </span>
    ),
  },
  {
    number: "5",
    title: "Known autoimmune or clotting history",
    description: "Lupus (SLE) or a past deep vein thrombosis.",
  },
];

interface ChecklistItem {
  text: React.ReactNode;
}

const checklistItems: ChecklistItem[] = [
  {
    text: (
      <span>
        Karyotype of both partners to find balanced or Robertsonian translocations.
      </span>
    ),
  },
  {
    text: (
      <span>
        Uterine imaging: 3D saline sonography or{" "}
        <Link
          href="/hysteroscopy-treatment"
          className="text-rose underline hover:text-white transition-colors"
        >
          Hysteroscopy
        </Link>{" "}
        for septum, fibroids, polyps or adhesions.
      </span>
    ),
  },
  {
    text: (
      <span>
        Antiphospholipid and thrombophilia panel: lupus anticoagulant, anti-cardiolipin, anti-β2-glycoprotein I, protein C and S, and Factor V Leiden.
      </span>
    ),
  },
  {
    text: (
      <span>
        Hormonal and metabolic screen: TSH, anti-TPO, HbA1c, prolactin and luteal progesterone.
      </span>
    ),
  },
  {
    text: (
      <span>
        Partner&apos;s{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="text-rose underline hover:text-white transition-colors"
        >
          Sperm DNA Fragmentation Test
        </Link>{" "}
        to check the sperm contribution.
      </span>
    ),
  },
];

export default function RecurrentMiscarriageIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Indications ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={<>Indications: Who Needs a
              <br className="hidden sm:inline" /> Recurrent Miscarriage Evaluation?</>}
        />

          {/* Row 1: 3 Cards */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {indications.slice(0, 3).map((item, idx) => (
              <StaggerItem key={idx}>
                <NumberedCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>

          {/* Row 2: 2 Cards (centered or 2-col) */}
          <Stagger delay={0.05} className="mt-4 sm:mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-5 max-w-4xl">
            {indications.slice(3, 5).map((item, idx) => (
              <StaggerItem key={idx}>
                <NumberedCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Diagnostic Checklist: The 5-Pillar Investigation ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist: The 5-Pillar Investigation"
          subtitle="Five groups of tests look for every treatable cause."
        />

          {/* Checklist Full-Width Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklistItems.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item.text}</ChecklistRow>
            </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}

