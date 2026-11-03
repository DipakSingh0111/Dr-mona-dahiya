"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

interface IndicationItem {
  number: string;
  title: string;
  description: ReactNode;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Failure to get pregnant",
    description:
      "Failure to conceive naturally till age 35 after trying for 12 months and above 35 after 6 months of unprotected sex.",
  },
  {
    number: "2",
    title: "Poor ovarian reserve (low AMH)",
    description: (
      <>
        AMH level &lt;1.0 ng/mL. See{" "}
        <Link
          href="/frozen-embryo-transfer"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Frozen Embryo Transfer
        </Link>
        .
      </>
    ),
  },
  {
    number: "3",
    title: "Problems with sperm",
    description: (
      <>
        Low sperm count/motility. See{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Sperm DNA Fragmentation treatment
        </Link>
        ,{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Low sperm count treatment
        </Link>{" "}
        and{" "}
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Azoospermia
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "If you have had unsuccessful IVF cycles",
    description: (
      <>
        See{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Recurrent implantation failure
        </Link>
        .
      </>
    ),
  },
  {
    number: "5",
    title:
      "Conditions like endometriosis, adenomyosis, and damaged fallopian tubes",
    description: (
      <>
        See{" "}
        <Link
          href="/endometriosis-fertility-treatment"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Endometriosis treatment
        </Link>{" "}
        and{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          What is fallopian tube blockage?
        </Link>
      </>
    ),
  },
  {
    number: "6",
    title: "PCOS or irregular ovulation patterns",
    description:
      "Customized IVF cycles to prevent OHSS.",
  },
];

export default function BestIvfDoctorIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Clinical breakdown"
        title="Indications: Who requires IVF treatment?"
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
    </TreatmentSection>
  );
}
