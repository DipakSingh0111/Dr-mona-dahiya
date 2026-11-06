"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem
} from "@/components/ui/treatment";
const leftFaqs: FaqItem[] = [
  {
    question: "How long does it take to improve sperm count and motility?",
    answer:
      "At least 3 months. Sperm takes 72 to 74 days to form plus 10 to 14 days to mature, so a repeat semen test is done after about 90 days.",
  },
  {
    question: "Can a man with zero sperm count father a biological child?",
    answer:
      "Often, yes. Sperm is frequently still made in the testes and can be retrieved by PESA, TESA or micro-TESE for ICSI.",
  },
  {
    question: "Does abnormal sperm shape cause birth defects?",
    answer:
      "No. Abnormal shape mainly affects swimming and egg penetration; it is not linked to birth defects.",
  },
  {
    question: "What is a normal sperm count?",
    answer:
      "At least 16 million per mL, with 30% or more progressive motility and 4% or more normal forms (WHO reference values).",
  },
  {
    question: "What is sperm DNA fragmentation?",
    answer:
      "Damage to the sperm's genetic material. A DFI above 25% is linked to poor embryo growth, failed implantation and miscarriage.",
  },
  {
    question: "Can varicocele cause infertility?",
    answer:
      "It can lower count and motility. Repair is considered when it is clinically significant and semen quality is falling.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is surgical sperm retrieval painful?",
    answer:
      "It is done under local anaesthesia or short sedation; most men have mild soreness for 2 to 3 days.",
  },
  {
    question: "How much does male fertility testing cost?",
    answer:
      "₹4,000 to ₹9,000 for semen analysis, DFI and a scrotal Doppler scan.",
  },
  {
    question: "Should both partners be tested together?",
    answer:
      "Yes. Male factors are involved in about half of cases, and testing together saves months.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "At 3 clinics: Noida (Sector 49), Ghaziabad (Raj Nagar) and Delhi (Lajpat Nagar IV), Monday to Saturday, 10:00 AM to 5:00 PM.",
  },
  {
    question: "Can I share my reports online first?",
    answer: (
      <>
        Yes. A 30-minute online consultation costs ₹1,000 in India or US$25 abroad. See{" "}
        <a
          href="#book-consultation"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
        >
          Online Consultation
        </a>
        .
      </>
    ),
  },
];

export default function MaleInfertilityFaq() {
  return (
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Patient questions"
          title={<>Frequently Asked
            <br className="hidden sm:inline" /> Questions: Male Infertility</>}
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </TreatmentSection>
  );
}

