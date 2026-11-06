"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "What is the most common cause of recurrent miscarriage?",
    answer:
      "Abnormality in Chromosomes is the most common cause accounting for >50% of all pregnancy losses. Antiphospholipid syndrome, Uterine septum and Weak Cervix are also correctable causes of Recurrent Miscarriage. So is Thyroid if left untreated.",
  },
  {
    question: "Can IVF with PGT-A prevent future miscarriages?",
    answer:
      "Yes. By testing the blastocyst we can select only normal chromosomes and reduce the rate of miscarriage. Especially useful if female is over 35 years.",
  },
  {
    question: "How does blood clotting cause pregnancy loss?",
    answer:
      "Yes. Clotting disorders like Antiphospholipid syndrome can cause micro thrombosis in the Placental vessels leading to deprivation of oxygen and nutrients to the fetus. This can be prevented by starting blood thinners like Aspirin and Heparin Injections.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for recurrent miscarriage?",
    answer:
      "Dr. Mona Dahiya is available at 3 locations. In Noida at 3rd Floor, K-06 Above Firstcry, Baraula, Sector 49 Noida, Uttar Pradesh 201301, in Ghaziabad at 2nd Floor RDC C-53A Near Bikanerwala, Sector 15 Sector 10 Raj Nagar Ghaziabad, Uttar Pradesh 201002 and in Delhi at Building Number 41, First Floor Ring Road Block Q, Lajpat Nagar IV, Lajpat Nagar New Delhi, 110024.",
  },
  {
    question: "After how many miscarriages should I get tested?",
    answer:
      "We recommend testing after 2 consecutive pregnancy losses. If you are over 35 or had a loss after 10 weeks we would send for workup even after one loss.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question:
      "What are my chances of a successful pregnancy after recurrent loss?",
    answer:
      "The chances of you carrying your baby to term is high. With appropriate management we have helped around 70-75% of our patients deliver a healthy baby. Even if no cause is identified you still have more than 60% chance of carrying your next baby to term.",
  },
  {
    question: "How much does recurrent miscarriage evaluation cost?",
    answer:
      "The workup for Recurrent Miscarriage is between 18000 to 35000 INR. If a Hysteroscopic procedure is required that would cost an additional 35000 – 60000 INR.",
  },
  {
    question: "How soon can I try again after a miscarriage?",
    answer:
      "Once you have had 1 normal period. You can start trying as soon as investigations are completed and medications like aspirin have been started.",
  },
  {
    question: "Is progesterone helpful after recurrent miscarriage?",
    answer:
      "Progesterone can help improve live birth rates if you are having bleeding in early pregnancy and have a history of Recurrent Miscarriages.",
  },
];

export default function RecurrentMiscarriageFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions about Recurrent Miscarriages"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
