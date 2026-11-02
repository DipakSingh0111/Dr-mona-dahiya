"use client";

import Link from "next/link";
import { FaCheckSquare, FaFlask, FaCalendarAlt, FaSyringe } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
interface CostCard {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const costCards: CostCard[] = [
  {
    icon: <FaFlask className="size-3.5 text-white" />,
    title: "Diagnostic workup",
    description: (
      <span>
        APS panel, both partners&apos; karyotypes and 3D sonography: ₹18,000 to ₹35,000.
      </span>
    ),
  },
  {
    icon: <FaCheckSquare className="size-3.5 text-white" />,
    title: "Hysteroscopic correction, if needed",
    description: (
      <span>
        Day-care septum resection: ₹35,000 to ₹60,000. See{" "}
        <Link
          href="/hysteroscopy-treatment"
          className="text-[#f9a8d4] underline hover:text-white transition-colors"
        >
          Laparoscopy &amp; Hysteroscopy
        </Link>
      </span>
    ),
  },
  {
    icon: <FaSyringe className="size-3.5 text-white" />,
    title: "Anticoagulation",
    description: (
      <span>
        Daily heparin injections and luteal support through the first trimester.
      </span>
    ),
  },
  {
    icon: <FaCalendarAlt className="size-3.5 text-white" />,
    title: "IVF with PGT-A, if needed",
    description: (
      <span>
        Per-embryo biopsy and chromosome testing fees.
      </span>
    ),
  },
];

export default function RecurrentMiscarriageCost() {
  return (
    <TreatmentSection>
        {/* ================= SECTION: What Affects the Cost of Miscarriage Treatment ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of Miscarriage Treatment"
          subtitle="Most couples start with a full workup costing ₹18,000 to ₹35,000, and treatment depends on what it finds."
        />

          {/* 4 Cards Grid */}
          <Stagger delay={0.05} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {costCards.map((card, idx) => (
              <StaggerItem key={idx}>
              <CostFactorCard {...card} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>
      </TreatmentSection>
  );
}

