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
    question: "Is Mini IVF as successful as conventional IVF?",
    answer:
      "For low reserve (AMH below 1.0 ng/mL) or poor past response, yes: cumulative pregnancy rates are comparable. High doses cannot force depleted ovaries to make more eggs, so gentle stimulation focuses on the few good ones.",
  },
  {
    question: "How many injections does Mini IVF need?",
    answer:
      "Usually 4 to 8 low-dose injections after 5 days of tablets, compared with 20 to 35 injections in conventional IVF.",
  },
  {
    question: "Does Mini IVF remove the risk of OHSS?",
    answer:
      "Almost entirely. Hormone levels stay near natural ranges and follicle numbers are controlled, so severe OHSS risk is close to zero, which makes it a safe option for PCOS.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for Mini IVF?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanervala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does Mini IVF cost?",
    answer:
      "₹85,000 to ₹1,40,000 per completed cycle on average, with medicines at ₹10,000 to ₹25,000 instead of ₹50,000 to ₹85,000 in conventional IVF.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How many eggs does Mini IVF produce?",
    answer:
      "Typically 2 to 5 mature eggs per cycle. Many patients bank embryos over 2 or 3 gentle cycles before a transfer.",
  },
  {
    question: "Who should not choose Mini IVF?",
    answer:
      "Women under 35 with good reserve who need many embryos (for example, for genetic testing) usually do better with conventional stimulation.",
  },
  {
    question: "How long does a Mini IVF cycle take?",
    answer:
      "From baseline scan to egg retrieval is usually about 12 to 14 days. Transfer may follow in the same cycle, or embryos may be frozen for a later FET.",
  },
  {
    question: "Is egg retrieval in Mini IVF painful?",
    answer:
      "No. With fewer follicles it takes about 10 minutes under light sedation, and most women go home within 2 hours.",
  },
];

export default function MiniIvfFaq() {
return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About Mini IVF in Delhi NCR"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </TreatmentSection>
  );
}
