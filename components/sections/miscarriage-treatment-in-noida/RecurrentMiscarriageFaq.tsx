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
    answer: (
      <div className="space-y-3">
        <p>
          Chromosomal errors in the embryo cause over 50% of early losses. Other treatable causes include antiphospholipid syndrome, a uterine septum, cervical weakness and untreated thyroid problems.
        </p>
      </div>
    ),
  },
  {
    question: "Can IVF with PGT-A prevent future miscarriages?",
    answer: (
      <div className="space-y-3">
        <p>
          It can reduce them. PGT-A tests blastocysts before transfer, and transferring only chromosomally normal embryos lowers early miscarriage risk, especially over 35.
        </p>
      </div>
    ),
  },
  {
    question: "How does blood clotting cause pregnancy loss?",
    answer: (
      <div className="space-y-3">
        <p>
          Disorders like antiphospholipid syndrome form tiny clots in placental vessels, cutting off oxygen and nutrients. Treatment is low-dose aspirin plus daily heparin injections.
        </p>
      </div>
    ),
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for recurrent miscarriage?",
    answer: (
      <div className="space-y-2">
        <p>3 clinics:</p>
        <p>
          <strong className="text-white">Noida</strong> (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301)
        </p>
        <p>
          <strong className="text-white">Ghaziabad</strong> (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002)
        </p>
        <p>
          <strong className="text-white">Delhi</strong> (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024)
        </p>
      </div>
    ),
  },
  {
    question: "After how many miscarriages should I get tested?",
    answer: (
      <div className="space-y-3">
        <p>
          After 2 consecutive losses, or after 1 if you are over 35 or had a loss after 10 weeks.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What are my chances of a successful pregnancy after recurrent loss?",
    answer: (
      <div className="space-y-3">
        <p>
          Good. With targeted treatment, 70% to 75% of couples go on to a live birth, and even with no cause found, the chance in the next pregnancy is often over 60%.
        </p>
      </div>
    ),
  },
  {
    question: "How much does recurrent miscarriage evaluation cost?",
    answer: (
      <div className="space-y-3">
        <p>
          ₹18,000 to ₹35,000 for the full workup, plus ₹35,000 to ₹60,000 for hysteroscopic correction if needed.
        </p>
      </div>
    ),
  },
  {
    question: "How soon can I try again after a miscarriage?",
    answer: (
      <div className="space-y-3">
        <p>
          Usually after 1 normal period, once tests are done and any treatment such as aspirin is started.
        </p>
      </div>
    ),
  },
  {
    question: "Is progesterone helpful after recurrent miscarriage?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes, in women with early bleeding and a history of losses, progesterone support through the first trimester improves live birth rates.
        </p>
      </div>
    ),
  },
];

export default function RecurrentMiscarriageFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About Recurrent Miscarriage Treatment"
        />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
