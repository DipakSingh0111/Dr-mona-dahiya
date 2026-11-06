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
    answer: (
      <p>
        DFI should be less than 15%. From 15%-25% it is moderate and above
        25%-30% it is high.
      </p>
    ),
  },
  {
    question: "Does a high DFI mean I cannot have a baby?",
    answer: (
      <p>
        There are chances that you won&apos;t conceive easily. Also you may face
        miscarriages. But you can still go ahead with your treatment.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can DFI be improved?",
    answer: (
      <p>
        We can cure infections or varicocele if you have one. Try reducing bad
        habits and taking antioxidants. Avoid exposure to heat. Get your self
        retested after 3 months.
      </p>
    ),
  },
  {
    question: "How do I prepare for the test?",
    answer: (
      <p>
        Keep in mind that you should be on abstinence and inform if you had
        fever or any medication.
      </p>
    ),
  },
];

export default function DfiFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions about Sperm DNA Fragmentation"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
