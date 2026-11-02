"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "What is a good DFI value?",
    answer:
      "Below 15% is generally considered good. Between 15% and 25% is borderline, and above 25 to 30% is high.",
  },
  {
    question: "Can DFI be improved?",
    answer:
      "Often yes. Treating infection or varicocele, stopping smoking, avoiding heat and a course of antioxidants may help, and the test is repeated after about three months.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Does a high DFI mean I cannot have a baby?",
    answer:
      "No. It lowers the chance of natural conception and can raise miscarriage risk, but there are effective treatment routes.",
  },
  {
    question: "How do I prepare for the test?",
    answer:
      "Abstain for the period your doctor advises, usually 2 to 5 days, and tell us about any recent fever or medicines.",
  },
];

export default function DfiFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title={
          <>
            Frequently Asked Questions
            <br className="hidden sm:inline" /> about Sperm DNA Fragmentation
          </>
        }
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
