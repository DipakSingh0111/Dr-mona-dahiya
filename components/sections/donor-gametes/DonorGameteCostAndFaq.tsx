"use client";

import { FaCheck, FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaCheck className="size-3.5" />,
    title: "ART bank sourcing",
    description:
      "Screening, viral clearance, donor compensation and logistics required by the ART Act: ₹75,000 to ₹1,50,000.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Lab fertilisation and culture",
    description: "ICSI, media and blastocyst culture: ₹50,000 to ₹75,000.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Recipient preparation",
    description: "Estrogen priming and monitoring scans: ₹8,000 to ₹15,000.",
  },
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "Transfer and freezing",
    description: "Embryo transfer and storage of spare blastocysts.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the success rate of IVF with donor eggs?",
    answer:
      "70% to 75% clinical pregnancy per transfer, because donors are under 30 with normal reserve, provided the recipient's uterus is healthy.",
  },
  {
    question: "Is egg donation legal in India under the ART Act?",
    answer:
      "Yes. Donation is legal under the ART (Regulation) Act, 2021. Donors must come through government-registered ART banks, be fully screened and stay anonymous.",
  },
  {
    question: "Will the baby share the mother's genes with donor eggs?",
    answer:
      "The baby inherits DNA from the egg donor and the father (or sperm donor). The birth mother carries the pregnancy, and her uterine environment influences how genes are expressed.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for donor IVF?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does donor egg IVF cost?",
    answer:
      "Typically ₹1,33,000 to ₹2,40,000. ART bank sourcing ₹75,000 to ₹1,50,000, lab work ₹50,000 to ₹75,000 and recipient preparation ₹8,000 to ₹15,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I choose my donor?",
    answer:
      "Not by identity. Under the ART Act donors are anonymous, but the bank matches physical traits, blood group and education.",
  },
  {
    question: "Is there an age limit for recipients?",
    answer:
      "Yes. Under the ART Act, women can receive treatment between 21 and 50 years of age.",
  },
  {
    question: "How long does a donor egg cycle take?",
    answer:
      "About 4 to 6 weeks from matching to embryo transfer, including 2 weeks of lining preparation.",
  },
  {
    question: "Is donor sperm treatment different?",
    answer:
      "It is simpler. Screened donor sperm from an ART bank can be used for IUI (₹12,000 to ₹18,000 a cycle) or IVF/ICSI.",
  },
];

export default function DonorGameteCostAndFaq() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of Donor Gamete IVF"
          subtitle="Donor egg IVF typically totals ₹1,33,000 to ₹2,40,000 across the components below, plus transfer and storage."
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
          title="Top FAQs About Donor Egg and Donor Sperm IVF"
        />
        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
    </TreatmentSection>
  );
}
