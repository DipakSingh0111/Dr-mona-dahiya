"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const faqs: FaqItem[] = [
  {
    question: "How long can sperm be stored?",
    answer:
      "Properly frozen sperm remains viable for many years, subject to storage rules and consent renewals. Long-term liquid nitrogen storage at -196°C pauses all cellular aging without degrading the genetic material.",
  },
  {
    question: "How many samples should I freeze?",
    answer:
      "Usually more than one. Your doctor will advise based on your count, motility, and whether the stored vials will be used for multiple IUI cycles or future ICSI treatments.",
  },
  {
    question: "Does freezing reduce sperm quality?",
    answer:
      "Some sperm do not survive thawing, so a pre-freeze sample matters. ICSI needs just one sperm per egg, so even if post-thaw recovery is reduced, successful fertilization is consistently achievable.",
  },
  {
    question: "Can I use frozen sperm for IUI?",
    answer:
      "Yes, if the post-thaw quality is adequate. Otherwise IVF or ICSI is advised to maximize the fertilization and pregnancy chances per stored vial.",
  },
];

export default function SpermFreezingFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Frequently Asked Questions about Semen & Sperm Freezing"
      />
      <FaqAccordion items={faqs} />
    </TreatmentSection>
  );
}
