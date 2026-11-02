"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Can a woman with severe PCOS get pregnant naturally?",
    answer:
      "Yes. Many women with PCOS have plenty of eggs that are simply not released. Treating insulin resistance and using Letrozole to restore ovulation lets many conceive without IVF.",
  },
  {
    question: "What is OHSS and how is it prevented in PCOS?",
    answer:
      "OHSS is when overstimulated ovaries cause fluid to shift into the abdomen and chest. It is prevented with 4 measures: antagonist protocols, low doses, a GnRH agonist trigger instead of hCG and a freeze-all strategy.",
  },
  {
    question: "Why is Letrozole preferred over clomiphene for PCOS?",
    answer:
      "Letrozole gives higher ovulation and live-birth rates in PCOS, does not thin the lining or dry cervical mucus, and carries a lower twin risk.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for PCOS?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "Is PCOS the same as PCOD?",
    answer:
      "They overlap. PCOD usually describes polycystic ovaries with irregular cycles; PCOS is the full syndrome with hormonal and metabolic features. Fertility treatment is similar.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does PCOS fertility treatment cost?",
    answer:
      "Ovulation induction ₹4,000 to ₹8,000 a cycle, IUI ₹12,000 to ₹18,000, and an OHSS-safe IVF cycle ₹1,25,000 to ₹1,75,000.",
  },
  {
    question: "Does weight loss help PCOS fertility?",
    answer:
      "Yes. Losing 5% to 10% of body weight often restores regular ovulation and improves response to medicines.",
  },
  {
    question: "How many Letrozole cycles should I try?",
    answer:
      "Usually 3 to 6 monitored cycles. If ovulation happens but pregnancy does not, IUI or IVF is the next step.",
  },
  {
    question: "Is metformin necessary for PCOS?",
    answer:
      "Not for everyone. It helps women with insulin resistance (high HOMA-IR) and is often combined with inositol for 4 to 8 weeks before treatment.",
  },
];

export default function PcosFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title={
          <>
            Top FAQs About PCOS and
            <br className="hidden sm:inline" /> PCOD Fertility Treatment
          </>
        }
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
