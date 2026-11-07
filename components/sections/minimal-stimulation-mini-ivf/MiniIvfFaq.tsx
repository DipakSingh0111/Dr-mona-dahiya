"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Is Mini IVF as successful as conventional IVF?",
    answer:
      "Yes, it is. In case of low AMH (<1 ng/ml) or poor responder patients, the pregnancy rate is similar if we pool embryos from multiple cycles. A higher dose cannot give you more eggs if your ovaries have exhausted their stock.",
  },
  {
    question: "How many injections does Mini IVF need?",
    answer:
      "Normally we require 4-8 injections after 5 days of tablets. In conventional IVF you require 20-35 injections.",
  },
  {
    question: "Does Mini IVF remove the risk of OHSS?",
    answer:
      "Yes. Since your hormone levels remain within physiological limits and we keep the number of follicles low, there is almost no chance of getting OHSS. Hence it is recommended for PCOS patients.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for Mini IVF?",
    answer:
      "She is available at her clinics located in Noida, Ghaziabad and Delhi. She also offers online consultations.",
  },
  {
    question: "How much does Mini IVF cost?",
    answer:
      "On average, a complete cycle of mini IVF will cost you between ₹85,000 and ₹1,40,000. Drug cost will be lower, i.e. ₹10,000-25,000, compared to conventional IVF (₹50,000-85,000).",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How many eggs does Mini IVF produce?",
    answer:
      "2-5 eggs can be obtained from each cycle. You can also freeze embryos over 2-3 mild cycles to have more embryos available for transfer.",
  },
  {
    question: "Who should not choose Mini IVF?",
    answer:
      "If you are below 35 years and have a good ovarian reserve, or you may need more embryos for genetic testing, then conventional IVF can be tried.",
  },
  {
    question: "How long does a Mini IVF cycle take?",
    answer:
      "From the day you start the tablets to egg pickup, it takes about 10-14 days. You may need 3-4 visits for scans and blood workup.",
  },
  {
    question: "Is egg retrieval in Mini IVF painful?",
    answer:
      "As fewer follicles are growing, the procedure is over in 10 mins. Under light sedation, most patients can go home within 2 hrs.",
  },
];

export default function MiniIvfFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQ"
        title={
          <>
            Frequently Asked
            <br className="hidden sm:inline" /> Questions About Mini IVF
          </>
        }
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
