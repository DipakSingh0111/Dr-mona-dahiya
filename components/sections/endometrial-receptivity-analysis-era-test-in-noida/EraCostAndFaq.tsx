"use client";

import { FaCheck, FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
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
    icon: <FaPills className="size-3.5" />,
    title: "Mock cycle medicines and scans",
    description:
      "Estradiol valerate, progesterone and serial scans: ₹6,000 to ₹12,000.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Endometrial biopsy",
    description: "Sterile Pipelle catheter and procedure: ₹5,000 to ₹8,000.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "NGS genomic analysis",
    description: "RNA extraction, gene panel and analysis: ₹25,000 to ₹35,000.",
  },
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "Personalised frozen transfer",
    description: "Billed as a standard frozen transfer, timed to your result.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does the ERA test find the window of implantation?",
    answer:
      "It measures 248 receptivity genes by next-generation sequencing and classifies your lining as receptive, pre-receptive (needs more progesterone time) or post-receptive (needs less) at the moment of biopsy.",
  },
  {
    question: "Is the ERA biopsy painful?",
    answer:
      "It takes 15 to 30 seconds with a thin, flexible catheter. Most women feel a period-like cramp that settles quickly, sometimes with an antispasmodic tablet.",
  },
  {
    question: "Can embryo transfer happen in the same cycle as the ERA test?",
    answer:
      "No. The ERA cycle is a mock cycle for sampling only. The personalised transfer uses frozen embryos in the next cycle, with progesterone timed to your result.",
  },
  {
    question: "Where can I have an ERA test with Dr. Mona Dahiya?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does an ERA test cost?",
    answer:
      "About ₹36,000 to ₹55,000: mock cycle ₹6,000 to ₹12,000, biopsy ₹5,000 to ₹8,000 and NGS analysis ₹25,000 to ₹35,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How long do ERA results take?",
    answer:
      "Usually 2 to 3 weeks from biopsy, so the personalised transfer is planned for the following cycle.",
  },
  {
    question: "What percentage of women have a displaced window?",
    answer:
      "Studies suggest about 1 in 4 to 1 in 3 women with recurrent implantation failure have a non-receptive result at the standard time.",
  },
  {
    question: "Should every IVF patient have an ERA test?",
    answer:
      "No. It is advised after 2 or more failed good-quality transfers, failed euploid transfers, or when only 1 embryo is available.",
  },
  {
    question: "Do I need to repeat the ERA test?",
    answer:
      "Usually not. If the result is pre- or post-receptive, a repeat at the adjusted time may be advised to confirm it in some cases.",
  },
];

export default function EraCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of an ERA Test"
          subtitle="An ERA test costs about ₹36,000 to ₹55,000 in total across the 3 items below. The personalised transfer is billed as a standard frozen transfer."
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
          title="Top FAQs About the ERA Test"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
