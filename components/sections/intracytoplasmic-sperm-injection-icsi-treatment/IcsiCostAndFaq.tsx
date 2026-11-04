"use client";

import Link from "next/link";
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
    title: "Core ICSI procedure fee",
    description:
      "An advanced laboratory fee over standard IVF, covering micro-tools, holding pipettes and embryologist time.",
  },
  {
    title: "Advanced sperm processing",
    description:
      "Optional microfluidic sorting chips or PICSI binding dishes for high DNA fragmentation.",
  },
  {
    title: "Surgical retrieval, if needed",
    description:
      "Needle aspiration (PESA or TESA) or microscope-assisted Micro-TESE for azoospermic men.",
  },
  {
    title: "PGT-A screening and vitrification",
    description: "Per-embryo biopsy fees and freezing and storage tiers.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the difference between IVF and ICSI?",
    answer:
      "In IVF, thousands of sperm are placed with an egg and one enters naturally. In ICSI, an embryologist picks 1 healthy sperm under high magnification and injects it into the egg, bypassing physical barriers.",
  },
  {
    question: "When is ICSI advised instead of standard IVF?",
    answer:
      "In 4 situations: severe male factor, high DNA fragmentation (DFI above 25%), earlier fertilisation failure, and cycles using frozen eggs or PGT testing.",
  },
  {
    question: "Is ICSI safe for the baby?",
    answer:
      "Yes. Decades of data and hundreds of thousands of births worldwide show children conceived by ICSI are as healthy as those conceived naturally or by standard IVF, with comparable development.",
  },
  {
    question: "Does ICSI cost more than IVF?",
    answer:
      "Yes, a little. ICSI adds a lab fee to the IVF cycle for micro-tools and embryologist time. The full cycle stays within ₹1.5 lakh to ₹2.5 lakh, and your estimate itemises it.",
  },
  {
    question: "Can ICSI work with a zero sperm count?",
    answer:
      "Yes. In azoospermia, sperm retrieved from the epididymis (PESA) or testis (TESA or Micro-TESE) is often few in number or non-moving. ICSI needs only 1 living sperm per egg.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Does a male factor problem always need surgery?",
    answer:
      "No. Surgery (TESA, PESA or Micro-TESE) is only for azoospermia. With low count or poor motility, a normal semen sample processed by microfluidic sorting is enough for ICSI.",
  },
  {
    question: "Where can I have ICSI with Dr. Mona Dahiya?",
    answer:
      "3 centres: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "Can the male partner improve sperm before ICSI?",
    answer: (
      <>
        Often, yes. 3 to 4 months of lifestyle changes, treating infections or varicocele,
        and antioxidants can lower DNA fragmentation. A repeat{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          DNA fragmentation test
        </Link>{" "}
        shows the result.
      </>
    ),
  },
  {
    question: "How successful is ICSI?",
    answer:
      "Fertilisation rates are 75% to 85% of injected mature eggs, and over 95% of eggs survive the injection. Pregnancy chances then depend mainly on the woman's age and embryo quality.",
  },
];

export default function IcsiCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of ICSI"
          subtitle="ICSI is added to an IVF cycle, so it sits within the ₹1.5 lakh to ₹2.5 lakh range for a full cycle. The exact figure depends on the 4 items below, with no hidden lab surcharges, and is itemised after consultation."
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
          title="Top FAQs About ICSI Treatment in Delhi NCR"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
