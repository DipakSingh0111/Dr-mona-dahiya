"use client";

import { FaCapsules } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
  type CostFactorItem,
} from "@/components/ui/treatment";

const costCards: CostFactorItem[] = [
  {
    title: "Defrosting & Handling Of Embryos",
    description: "Based on how many embryos you are transferring.",
  },
  {
    icon: <FaCapsules className="size-3.5" />,
    title: "Medicines",
    description: "Medicines required to prepare your endometrium.",
  },
  {
    title: "Scans",
    description: "Required during the cycle.",
  },
  {
    title: "Optional add-ons",
    description:
      "Such as Assisted Hatching, Embryo Glue etc., if we feel it's necessary.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How is FET different from a fresh embryo transfer?",
    answer:
      "With frozen embryo transfer, you are defrosting embryos that have been previously frozen and preparing your lining to receive the embryo, without the effect of drugs on your uterus.",
  },
  {
    question: "Does freezing harm the embryo?",
    answer:
      "With the vitrification technique, we freeze your embryos at a rapid speed. Most embryos, if of good quality, can be successfully thawed.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is natural cycle FET better than medicated FET?",
    answer:
      "It depends on your cycle. If you have a regular natural cycle, you can do natural cycles. But if you have an irregular cycle, hormonal replacement might be better.",
  },
  {
    question: "How soon can I take a pregnancy test after FET?",
    answer:
      "You should do a blood test 9–12 days after blastocyst transfer. Do not do a home pregnancy test before this.",
  },
];

export function FetCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Know Your Cost"
        title={
          <>
            Factors Affecting Cost Of
            <br className="hidden sm:inline" /> Frozen Embryo Transfer
          </>
        }
        subtitle="Your cost may vary depending on what protocol you do and how many embryos you transfer. At your consultation, we will give you an estimate of your cost."
      />

      <Stagger
        delay={0.05}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {costCards.map((card) => (
          <StaggerItem key={card.title}>
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function FetFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Questions Patients Ask"
        title={
          <>
            Frequently Asked Questions
            <br className="hidden sm:inline" /> about Frozen Embryo Transfer
          </>
        }
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}

export default function FetCostAndFaq() {
  return (
    <>
      <FetCost />
      <FetFaq />
    </>
  );
}
