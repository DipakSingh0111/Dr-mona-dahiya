"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How long does it take to improve sperm count and motility?",
    answer:
      "At least 3 months. Sperm takes 72-74 days to form so we will repeat your semen analysis after 90 days.",
  },
  {
    question: "Can a man with zero sperm count father a biological child?",
    answer:
      "Yes if you have Azoospermia. We can try to retrieve sperm from your testes and use it for IVF.",
  },
  {
    question: "Does abnormal sperm shape cause birth defects?",
    answer: "No it only affects your sperm ability to swim and fertilise the egg.",
  },
  {
    question: "What is a normal sperm count?",
    answer:
      "Count > 15 million/ml with good motility > 30% and morphology > 4% is considered normal.",
  },
  {
    question: "What is sperm DNA fragmentation?",
    answer:
      "DNA Fragmentation is damage to your sperms DNA. High DNA Fragmentation can cause poor embryo growth and non implantation. Miscarriage may occur if DFI is >25%.",
  },
  {
    question: "Can varicocele cause infertility?",
    answer:
      "It can cause low sperm count and motility. If clinically significant we will advise you to repair varicocele.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is surgical sperm retrieval painful?",
    answer:
      "No PESA/TESE can be done under local anesthesia/sedation. Some discomfort may be felt for 2-3 days.",
  },
  {
    question: "How much does male fertility testing cost?",
    answer:
      "Around Rs. 4000-9000 depending on what tests we would like to do.",
  },
  {
    question: "Should both partners be tested together?",
    answer:
      "Yes since 50% of infertility can be caused by males and the balance 50% by females, its best to see both partners.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "She is available in 3 locations: Noida, Ghaziabad and Delhi. Mon-Sat from 10am-5pm.",
  },
  {
    question: "Can I share my reports online first?",
    answer:
      "Yes you can share your reports on whatsapp/mail before your visit or while you are at the clinic.",
  },
];

export default function MaleInfertilityFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Frequently Asked Questions"
        title="Frequently Asked Questions: Male Infertility"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
