"use client";

import Link from "next/link";
import { FaFlask, FaCheck, FaRegCalendarAlt } from "react-icons/fa";
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
    icon: <FaFlask className="size-3.5" />,
    title: "Laser calibration and materials",
    description:
      "Includes calibration of the laser, laser time and materials used. Average cost is between ₹18,000 and ₹28,000.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Embryologist's time",
    description: (
      <>
        Time spent by a senior embryologist performing laser assisted hatching
        as part of{" "}
        <Link
          href="/ivf-treatment"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          IVF Treatment
        </Link>
        .
      </>
    ),
  },
  {
    icon: <FaRegCalendarAlt className="size-3.5" />,
    title: "Frozen embryo transfer",
    description:
      "If you are undergoing a frozen transfer, you may require hormonal preparation of the endometrium.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Can laser-assisted hatching damage the embryo?",
    answer:
      "Very rarely, if a non-contact laser is used by an experienced embryologist. The chance of harming an embryo is under 1%, as we use microsecond pulses on the outer shell of the embryo, far from the cells.",
  },
  {
    question: "Does laser hatching increase the risk of identical twins?",
    answer:
      "It may slightly increase the chances if a hole is opened in the shell and the embryo splits as it tries to come out. We prefer to thin the zona pellucida by 60% without making a hole, which does not increase the chances of monozygotic (identical) twins.",
  },
  {
    question: "Why does freezing make laser hatching more useful?",
    answer:
      "Vitrification causes cross-linking of proteins in the zona pellucida and makes it stiffer. Laser assisted hatching allows your embryo to break free from this thicker shell and implant.",
  },
  {
    question: "Where does Dr. Mona Dahiya offer laser-assisted hatching?",
    answer:
      "At all three of our clinics in Noida, Ghaziabad and Delhi. Noida: 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301. Ghaziabad: 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002. Delhi: Building No. 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024.",
  },
  {
    question: "How much does laser-assisted hatching cost?",
    answer:
      "The cost of laser assisted hatching ranges between ₹18,000 and ₹28,000 as part of your IVF or frozen embryo transfer.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Does every IVF patient need laser hatching?",
    answer:
      "No. There are 4 categories of women who benefit from laser assisted hatching: those over 37 years, with recurrent implantation failure, with a thick zona pellucida (over 15 µm) or having a frozen embryo transfer.",
  },
  {
    question: "When is laser hatching done?",
    answer:
      "Laser assisted hatching is usually performed on Day 3 or Day 5, prior to transfer or before PGT.",
  },
  {
    question: "Is LAH the same as embryo biopsy?",
    answer:
      "No. Laser assisted hatching helps the embryo hatch by making a hole in its shell. A biopsy removes 4 to 6 blastomeres for PGT. We can, however, perform laser assisted hatching before PGT.",
  },
  {
    question: "What success can I expect with LAH?",
    answer:
      "For women over 35 and those with recurrent implantation failure, the chance of implantation ranges from 60% to 70%. It does not increase implantation rates in women under 35 with good-quality embryos.",
  },
];

export function LahCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Cost"
        title={
          <>
            What Determines the Cost
            <br className="hidden sm:inline" /> of Laser Assisted Hatching
          </>
        }
        subtitle="Laser assisted hatching is an additional cost to IVF or frozen embryo transfer. The average cost of laser assisted hatching is between ₹18,000 and ₹28,000."
      />

      <Stagger
        delay={0.05}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
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

export function LahFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQs"
        title={
          <>
            Frequently Asked Questions About
            <br className="hidden sm:inline" /> Laser Assisted Hatching in Delhi
            NCR
          </>
        }
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}

export default function LahCostAndFaq() {
  return (
    <>
      <LahCost />
      <LahFaq />
    </>
  );
}
