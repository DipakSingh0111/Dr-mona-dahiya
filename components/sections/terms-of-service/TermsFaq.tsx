"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Does booking a consultation guarantee acceptance for IVF?",
    answer:
      "No. A booking secures a consultation and evaluation. Starting IVF, ICSI or IUI depends on 4 checks: diagnostic results, clinical safety, biological feasibility and legal eligibility under the ART (Regulation) Act, 2021.",
  },
  {
    question: "Are online consultations valid under these terms?",
    answer:
      "Yes. They follow the NMC and Ministry of Health Telemedicine Practice Guidelines and are used for case reviews, second opinions and follow-ups. Procedures themselves need an in-person visit.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What documents are needed before treatment starts?",
    answer:
      "3 things under the ART Act: government photo ID and age proof, proof of marital status where the law requires it, and signed informed consent, before any stimulation or procedure.",
  },
  {
    question: "Where are procedures and embryology carried out?",
    answer:
      "Only at registered clinics in South Delhi (Lajpat Nagar IV), Noida (Sector 49) and Ghaziabad (Raj Nagar RDC), as required by the National ART Registry.",
  },
];

export default function TermsFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Frequently Asked Questions: Terms of Service"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
