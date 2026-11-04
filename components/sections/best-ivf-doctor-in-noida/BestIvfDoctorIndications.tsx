"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const indications: { number: string; title: string; description: ReactNode }[] =
  [
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
          A low AMH level (&lt;1.0 ng/mL) indicates lesser number of eggs.
          Through IVF we can retrieve 2-6 eggs to attempt pregnancy. After egg
          retrieval, we will perform{" "}
          <Link
            href="/frozen-embryo-transfer"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            frozen Embryo Transfer
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
          A low sperm count, poor sperm motility, sperm DNA damage or absence of
          sperm. Read more –{" "}
          <Link
            href="/sperm-dna-fragmentation-test"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Sperm DNA Fragmentation treatment
          </Link>
          ,{" "}
          <Link
            href="/low-sperm-count-oligospermia"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Low sperm count treatment
          </Link>{" "}
          and{" "}
          <Link
            href="/azoospermia-treatment"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
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
          We will analyze the thickness of your endometrial lining and quality
          of embryos before your next cycle. Read –{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
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
          Perform surgery in a way that protects your remaining eggs. Read more
          –{" "}
          <Link
            href="/endometriosis-fertility-treatment"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Endometriosis treatment
          </Link>{" "}
          and{" "}
          <Link
            href="/fallopian-tube-blockage-treatment"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            What is fallopian tube blockage?
          </Link>
          .
        </>
      ),
    },
    {
      number: "6",
      title: "PCOS or irregular ovulation patterns",
      description:
        "Perform customized IVF cycles such as freeze-all to prevent ovarian hyperstimulation condition (OHSS).",
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
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
