"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  CostFactorCard,
  type NumberedCardItem,
  type CostFactorItem,
} from "@/components/ui/treatment";

const laws: NumberedCardItem[] = [
  {
    number: "1",
    title: "The ART (Regulation) Act 2021",
    description: (
      <a
        href="https://artsurrogacy.gov.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
      >
        Read About ART Rules 2022.
      </a>
    ),
  },
  {
    number: "2",
    title: "The Surrogacy (Regulation) Act 2021",
    description: (
      <a
        href="https://artsurrogacy.gov.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
      >
        Read About Surrogacy Rules 2022.
      </a>
    ),
  },
  {
    number: "3",
    title: "The PC-PNDT Act 1994",
    description: (
      <>
        Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex
        Selection) Act.{" "}
        <a
          href="https://www.indiacode.nic.in/handle/123456789/1928"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
        >
          Read About PC-PNDT Act.
        </a>
      </>
    ),
  },
  {
    number: "4",
    title: "NMC",
    description: (
      <>
        Ethics to be followed by doctors as per NMC.{" "}
        <a
          href="https://www.nmc.org.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
        >
          Read More.
        </a>
      </>
    ),
  },
  {
    number: "5",
    title: "DPDP Act 2023",
    description: (
      <>
        Act to be followed while storing medical records.{" "}
        <a
          href="https://www.indiacode.nic.in/handle/123456789/22037"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
        >
          Read more
        </a>
      </>
    ),
  },
];

const prohibitedPractices: CostFactorItem[] = [
  {
    title: "Sex Selection",
    description:
      "Identifying, revealing or selecting the sex of embryos, gametes or foetus is illegal. We perform PGT-A and PGT-M solely to identify chromosome abnormalities and inherited disorders. Any request for sex selection is turned down and reported to the proper authorities.",
  },
  {
    title: "Buying of Eggs/Sperm",
    description: (
      <>
        Eggs and sperm are procured only from an authorised ART Bank. No amount
        of money will be exchanged between you and the donor.{" "}
        <Link
          href="/donor-gametes"
          className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
        >
          Read More About Donor Gametes.
        </Link>
      </>
    ),
  },
  {
    title: "Mixing of Sperm or Eggs",
    description:
      "We do not mix more than one semen sample or the eggs of more than one woman.",
  },
  {
    title: "Transportation of Embryos/Gametes Outside India",
    description:
      "No export or import of gametes/embryos is permitted without due clearance from the National ART & Surrogacy Board.",
  },
];

export default function ArtLawsAndProhibited() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="What laws are being followed at our practice"
          title="The Laws Our Practice Follows"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {laws.map((law) => (
            <StaggerItem key={law.number} className="h-full">
              <NumberedCard {...law} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Activities that we strictly do NOT perform"
          title="Practices Prohibited by Law"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {prohibitedPractices.map((practice) => (
            <StaggerItem key={practice.title} className="h-full">
              <CostFactorCard {...practice} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
    </>
  );
}

