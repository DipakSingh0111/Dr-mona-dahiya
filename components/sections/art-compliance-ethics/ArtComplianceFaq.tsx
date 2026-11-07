"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Is sex determination or gender selection available at your clinics?",
    answer:
      "No. It's an offence under the ART (Regulation) Act 2021 and the PC-PNDT Act 1994. Our centres have zero tolerance towards any case of sex selection.",
  },
  {
    question: "What are the legal age limits for IVF in India?",
    answer:
      "As per the ART Act, women can undergo IVF between the ages of 21 and 50, and men from 21 to 55 years.",
  },
  {
    question: "Can a single woman have fertility treatment under Indian law?",
    answer:
      "Yes. A single woman who is unmarried, divorced or a widow can undergo IVF from the age of 21 to 50.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How are donor gametes sourced, and can we meet the donor?",
    answer:
      "We only source donors from a government-licensed bank. There is complete anonymity between donor and commissioning parent.",
  },
  {
    question: "Does a gamete donor have any rights over the child?",
    answer:
      "No. Once the child is born, he/she legally belongs to the commissioning parents.",
  },
];

export default function ArtComplianceFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What are some of the FAQs about ethical practices at our centre?"
        title={
          <>
            Frequently Asked Questions:
            <br />
            ART Compliance &amp; Ethics
          </>
        }
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}

