"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Are these stories from real patients?",
    answer:
      "Yes, all our patients write their reviews about us and how their pregnancy journey went with Dr Mona Dahiya.",
  },
  {
    question: "Can women with PCOS conceive without IVF?",
    answer:
      "Many of our patients are able to get pregnant by correcting their lifestyle and using medication like insulin or Letrozole.",
  },
  {
    question: "How is OHSS prevented in PCOS?",
    answer:
      "When doing an IVF on women that may develop OHSS we can lower their chance by using low dose antagonists and using agonist triggers as well as doing freeze all.",
  },
  {
    question: "Is Letrozole better than clomiphene for PCOS?",
    answer:
      "There are not many studies that say why Letrozole is better, but it does have higher ovulation and live birth rates compared to clomiphene. It also has less effect on the uterine lining.",
  },
  {
    question: "How many Letrozole cycles are tried?",
    answer:
      "Usually we will try around 3 to 6 cycles before moving on to other procedures such as IUI or IVF.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Does weight loss help PCOS fertility?",
    answer:
      "If you can lose any weight it will benefit you greatly. Even if you just lose 5-10 percent of your body weight it can help you ovulate.",
  },
  {
    question: "Do women with PCOS have good egg reserves?",
    answer:
      "Most likely yes. Women with PCOS tend to have higher AMH. They just ovulate poorly.",
  },
  {
    question: "Is PCOS the same as PCOD?",
    answer:
      "They are used interchangeably in India so you can call them both the same thing.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "You can find our clinics in Noida (Ghazipur), Delhi, Ghaziabad (Raj Nagar). Mon- Sat 10AM-5PM.",
  },
  {
    question: "Can I share my reports online first?",
    answer:
      "Yes, we offer an online consultation for ₹1000 inside of India, or $25 USD outside of India.",
  },
];

export default function PcosStoriesFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions: PCOS Success Stories"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
