"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard
} from "@/components/ui/treatment";
const costCards = [
  {
    title: "Embryo warming and handling",
    description: "Number of embryos thawed and the laboratory work involved.",
  },
  {
    title: "Endometrial preparation medicines",
    description: "Oestrogen, progesterone and any supportive medicines.",
  },
  {
    title: "Monitoring",
    description: "Ultrasound scans and blood tests during the cycle.",
  },
  {
    title: "Optional add-ons",
    description:
      "Assisted hatching, embryo glue or endometrial testing, only when advised.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How is FET different from a fresh embryo transfer?",
    answer:
      "In FET, embryos frozen earlier are warmed and transferred into a lining prepared separately, so the uterus is not affected by stimulation medicines.",
  },
  {
    question: "Does freezing harm the embryo?",
    answer:
      "Modern vitrification freezes embryos very rapidly and most good-quality embryos survive warming well.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is natural cycle FET better than medicated FET?",
    answer:
      "Neither is better for everyone. Natural cycles suit regular ovulators; medicated cycles give more control for irregular cycles.",
  },
  {
    question: "How soon can I take a pregnancy test after FET?",
    answer:
      "A blood beta-hCG test is usually done about two weeks after transfer. Please avoid home tests before then.",
  },
];

export default function FetCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="FET cost depends on the protocol and the number of embryos. A written estimate is shared after your consultation."
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
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Frequently Asked Questions about Frozen Embryo Transfer"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
