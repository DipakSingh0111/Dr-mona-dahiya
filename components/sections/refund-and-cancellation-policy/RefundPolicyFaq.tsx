"use client";

import {
  FaqAccordion,
  TreatmentSection,
  TreatmentSectionHeader,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question:
      "Can fees be refunded if IVF or ICSI does not result in pregnancy?",
    answer:
      "No. Your money covers the doctor's expertise, cleanroom facilities, embryologists' time, micromanipulation and disposables used in your procedure. We cannot give a refund based on your outcome.",
  },
  {
    question: "When can a treatment package be cancelled for a partial refund?",
    answer:
      "Yes. You can cancel before starting your medications or undergoing any procedures, and you will be refunded the package balance, minus the tests you took before your cycle.",
  },
  {
    question: "Can unused fertility injections be returned?",
    answer:
      "No. Once cold chain injections are dispensed from our pharmacy we are unable to accept returns, as they have to be kept at 2°C to 8°C.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What happens to my payment if IVF is converted to IUI?",
    answer:
      "You will be billed accordingly at the IUI charges and will receive a credit for the retrieval/cleanroom/embryology costs that you haven't used.",
  },
  {
    question: "How long do approved refunds take?",
    answer:
      "Once reconciled, it can take anywhere from 14 - 21 business days, and it will be refunded via your previous method of payment.",
  },
];

export default function RefundPolicyFaq() {
  return (
    <TreatmentSection className="bg-pink">
      <TreatmentSectionHeader
        eyebrow="Any questions?"
        title={
          <>
            Frequently Asked Questions:
            <br className="hidden sm:inline" /> Refunds &amp; Cancellations
          </>
        }
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
