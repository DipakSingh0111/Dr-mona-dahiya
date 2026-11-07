"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
} from "@/components/ui/treatment";

const pillIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const flaskIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <path d="M10 2v7.31" />
    <path d="M14 9.3V1.99" />
    <path d="M8.5 2h7" />
    <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
    <path d="M5.52 16h12.96" />
  </svg>
);

const calendarIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const costCards = [
  {
    icon: pillIcon,
    title: "Medicines and scanning for Mock Cycle",
    description:
      "Includes Estradiol Valerate tablets, Progesterone injections and Scanning - Rs 6000 to Rs 12000",
  },
  {
    icon: checkIcon,
    title: "Biopsy of Endometrium",
    description:
      "Includes sterile Pipelle Catheter and Biopsy - Rs 5000 to Rs 8000",
  },
  {
    icon: flaskIcon,
    title: "Gene Analysis",
    description:
      "Extraction of RNA from your biopsy and analysing for 248 genes involved in implantation - Rs 25000 to Rs 35000",
  },
  {
    icon: calendarIcon,
    title: "Personalised Frozen Embryo Transfer",
    description: "Charged as a standard frozen embryo transfer.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does the ERA test find the window of implantation?",
    answer:
      "We use Next Generation Sequencing to analyse 248 genes from your biopsy which help us diagnose whether you are Receptive, Pre-Receptive or Post-Receptive at that point in time.",
  },
  {
    question: "Is the ERA biopsy painful?",
    answer:
      "It takes 15 to 30 seconds to take an endometrial biopsy using a fine flexible catheter. Most patients complain of mild cramping which they describe similar to their menstrual period. Some patients are given anti spasmotic medication to ease this.",
  },
  {
    question: "Can embryo transfer happen in the same cycle as the ERA test?",
    answer:
      "No. You need to complete your mock cycle to collect your endometrial sample. Your personalised embryo transfer will be done using a frozen embryo and appropriate progesterone dose based on your ERA result.",
  },
  {
    question: "Where can I have an ERA test with Dr. Mona Dahiya?",
    answer:
      "With Dr Mona you can get your ERA test done at her clinics in Noida (3rd Floor K-06 above First Cry Baraula Sector 49 Noida, Uttar Pradesh - 201301), Ghaziabad (2nd floor RDC C-53A Near Bikanerwala Sector 15, Sector 10 Raj Nagar Ghaziabad, Uttar Pradesh - 201002) and Delhi (Building No 41 First Floor Ring Road, Block Q Lajpat Nagar IV, Lajpat Nagar, New Delhi - 110024).",
  },
  {
    question: "How much does an ERA test cost?",
    answer:
      "Rs 36000 to Rs 55000 for the whole process. This includes your mock cycle of Rs 6000 to Rs 12000, Endometrial biopsy of Rs 5000 to Rs 8000 and Gene analysis for Rs 25000 to Rs 35000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How long do ERA results take?",
    answer:
      "ERA tests take around 2 to 3 weeks so your personalised transfer would be done the next month.",
  },
  {
    question: "What percentage of women have a displaced window?",
    answer:
      "Many studies have shown that approximately 1 in 4 to 1 in 3 women have a shifted window of implantation.",
  },
  {
    question: "Should every IVF patient have an ERA test?",
    answer:
      "ERA test is recommended if you have had 2 or more failed transfers with good quality blastocysts. If you have only one good blastocyst or you have had failed transfers of euploid embryos.",
  },
  {
    question: "Do I need to repeat the ERA test?",
    answer:
      "Most patients do not need to repeat their ERA test. However if your result is either pre or post receptive your doctor may ask you to repeat at the revised time to confirm.",
  },
];

export default function EraCostAndFaq() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Cost of an ERA Test"
          title="What Affects the Cost of an ERA Test"
          subtitle="Below you will find the various components of an ERA test. Your personalised frozen embryo transfer will be charged as your regular frozen embryo transfer cycle."
        />

        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {costCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Frequently Asked Questions"
          title="Top FAQs About the ERA Test"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </TreatmentSection>
    </>
  );
}
