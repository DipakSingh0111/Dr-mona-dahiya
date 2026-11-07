"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How long can sperm be stored?",
    answer: (
      <p>
        As long as you follow the protocol for storing and renew your consent,
        you can store it for many years.
      </p>
    ),
  },
  {
    question: "Does freezing reduce sperm quality?",
    answer: (
      <p>
        After thawing, the quality of sperm will always be lower, so we advise
        you to freeze more than one sample. In the case of ICSI, one good sperm
        can fertilise an egg.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How many samples should I freeze?",
    answer: (
      <p>
        It depends on your sperm count, but usually it would be more than one.
      </p>
    ),
  },
  {
    question: "Can I use frozen sperm for IUI?",
    answer: (
      <p>
        Yes, if after thawing the sperm is of good enough quality to be used.
      </p>
    ),
  },
];

export default function SpermFreezingFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQ"
        title={
          <>
            Frequently Asked Questions
            <br className="hidden sm:inline" /> about Semen &amp; Sperm Freezing
          </>
        }
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
