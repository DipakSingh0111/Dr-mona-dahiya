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
    title: "Stimulation medicines",
    description:
      "Gonadotropins and antagonist injections: ₹45,000 to ₹70,000, depending on reserve.",
  },
  {
    title: "Retrieval and anaesthesia",
    description:
      "Egg collection, day-care room and IV sedation: ₹35,000 to ₹50,000.",
  },
  {
    title: "Vitrification",
    description:
      "Egg preparation, cryoprotectant media and straw loading: ₹25,000 to ₹35,000.",
  },
  {
    title: "Yearly storage",
    description:
      "Monitored liquid-nitrogen storage: ₹15,000 to ₹25,000 per year.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the best age to freeze my eggs?",
    answer:
      "27–35 is best; 36–39 is possible but may need more cycles.",
  },
  {
    question: "How many eggs should I freeze?",
    answer:
      "10–15 eggs for under 35; 15–20 eggs for 36–38.",
  },
  {
    question: "How long can frozen eggs be stored in India?",
    answer:
      "At -196°C metabolism stops; storage follows the ART Regulation Act with documented consent and chain of custody.",
  },
  {
    question: "Where can I freeze my eggs with Dr. Mona Dahiya?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does egg freezing cost?",
    answer:
      "₹1,25,000 to ₹1,80,000 per cycle + yearly storage.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is egg retrieval painful?",
    answer:
      "No, about 15 minutes under sedation; most women return to work in 24–48 hours.",
  },
  {
    question: "Does egg freezing affect my natural fertility later?",
    answer:
      "No, it uses eggs that would have been lost in that cycle anyway.",
  },
  {
    question: "How are frozen eggs used later?",
    answer:
      "Warmed, fertilized by ICSI, grown to blastocysts, and transferred.",
  },
  {
    question: "How long does an egg freezing cycle take?",
    answer:
      "About 2 weeks: 10–12 days of injections, 4–5 scans, then retrieval.",
  },
];

export default function EggFreezingCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of Egg Freezing"
          subtitle="A complete egg freezing cycle averages ₹1,25,000 to ₹1,80,000, excluding future thaw and ICSI cycles. Your estimate is itemized after consultation."
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
          title="Top FAQs About Egg Freezing in Noida and Delhi NCR"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
