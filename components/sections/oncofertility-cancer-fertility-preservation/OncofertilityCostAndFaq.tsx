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

const costCards = [
  {
    icon: pillIcon,
    title: "Medication to grow eggs",
    description:
      "Injectable hormones that will grow your eggs, and anti-estrogen medication: ₹35,000 to ₹65,000.",
  },
  {
    icon: checkIcon,
    title: "Procedure to retrieve eggs and anaesthesia",
    description:
      "Your egg retrieval procedure will cost ₹30,000 to ₹45,000, which includes a daycare facility and IV anaesthesia.",
  },
  {
    icon: flaskIcon,
    title: "To freeze your eggs",
    description: "Cost of freezing your eggs: ₹20,000 to ₹30,000.",
  },
  {
    icon: flaskIcon,
    title: "To freeze your semen",
    description:
      "Cost to freeze your semen is ₹4,000 to ₹8,000 per sample. This includes processing and storing in multiple vials. You can store them for a longer period if needed.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Will fertility preservation delay my cancer treatment?",
    answer:
      "No. Usually you have a few weeks to stage your cancer and decide on treatment. We can start stimulation on any day of your cycle. The whole process will take around 10 to 12 days.",
  },
  {
    question: "Is stimulation safe with estrogen-sensitive breast cancer?",
    answer:
      "Yes, by using a protocol that oncologists approve. We can add Letrozole (2.5 to 5 mg) to reduce estrogen levels while growing your eggs.",
  },
  {
    question: "Can chemotherapy cause permanent infertility?",
    answer:
      "Yes. Certain drugs are known to induce ovarian failure, which can lead to menopause. Men can lose their ability to produce sperm. It's better to store your eggs, embryos or semen before chemotherapy begins.",
  },
  {
    question: "Where can I get emergency oncofertility care with Dr. Mona Dahiya?",
    answer:
      "Dr. Mona can see you at our Noida clinic (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, UP 201301), Ghaziabad clinic (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, UP 201002) and Delhi clinic (Building No. 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, Delhi 110024). For urgent cases, please book an appointment online.",
  },
  {
    question: "How quickly can preservation start?",
    answer:
      "We can get started within 24 to 48 hours. We can do all your testing within 1–2 days.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does oncofertility care cost?",
    answer:
      "To freeze your eggs you will spend around ₹85,000 to ₹1,40,000: medications cost ₹35,000 to ₹65,000, the procedure to retrieve your eggs is ₹30,000 to ₹45,000, and freezing your eggs costs ₹20,000 to ₹30,000. If you want to store your semen, it will cost ₹4,000 to ₹8,000.",
  },
  {
    question: "Should I freeze eggs or embryos?",
    answer:
      "If you are single or haven't found someone yet, it's better to store your eggs. If you have a partner, storing embryos might be better as it can tell you about egg quality. Both have a very good survival rate when thawed (>90%).",
  },
  {
    question: "How many sperm samples should men bank?",
    answer:
      "Ideally he should store 2 to 3 samples, within 24 to 48 hours before chemotherapy starts.",
  },
  {
    question: "Can I get pregnant after cancer treatment?",
    answer:
      "Yes, most patients become pregnant after completing treatment. It's recommended to wait at least 2 years. Your oncologist will let you know when it's OK to get pregnant.",
  },
];

export default function OncofertilityCostAndFaq() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Price for Oncofertility"
          subtitle="Here's what we charge. As these patients are emergent, we will discuss the price on the day itself."
        />

        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {costCards.map((card) => (
            <StaggerItem key={card.title}>
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About Oncofertility in Delhi NCR"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </TreatmentSection>
    </>
  );
}
