"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
} from "@/components/ui/treatment";

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

const costCards = [
  {
    icon: flaskIcon,
    title: "Centrifugation",
    description:
      "Cost of materials for PRP preparation (closed tube system + gel + catheter): Rs. 10,000 – Rs. 18,000 / instillation",
  },
  {
    icon: calendarIcon,
    title: "Monitoring with Doppler",
    description:
      "USG with Doppler to see blood flow and lining: Rs. 3000 – Rs. 5000 for 2-3 scans",
  },
  {
    icon: checkIcon,
    title: "PRP into Ovaries (If applicable)",
    description:
      "Rs. 35,000 – Rs. 60,000 for Ovarian injection of PRP under USG guidance with sedation",
  },
  {
    icon: pillIcon,
    title: "Frozen Embryo Transfer",
    description: "As per your Frozen Embryo Transfer charges.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does intrauterine PRP help a thin lining?",
    answer:
      "PRP has high amount of growth factors (VEGF, PDGF, EGF, TGF-beta) which help to build new vasculature and proliferation of cells below your endometrium. This leads to increase in lining thickness from 5mm to >7.5 mm in 48 – 72 hrs.",
  },
  {
    question: "Is intrauterine PRP painful?",
    answer:
      "No it takes about 5 minutes and you don’t need any anesthesia. Similar to having an embryo transferred. You’ll feel like a pap smear.",
  },
  {
    question: "Can ovarian PRP increase my AMH?",
    answer:
      "Yes it can but only for certain duration. Many patients have improved AMH and follicle count with PRP over 2-6 months. However it depends on the ovarian reserve left. So it’s a helpful add on treatment if you have poor responder.",
  },
  {
    question: "Where can I have PRP therapy with Dr. Mona Dahiya?",
    answer:
      "We have 3 centres where we do this. Noida - 3rd Floor, K-06 above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301 | Ghaziabad – 2nd floor, RDC, C-53A near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002 | Delhi – Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
  },
  {
    question: "How many PRP sessions are needed?",
    answer:
      "Usually 1 or 2 sessions will suffice at a gap of 48 hrs each. This is done in a prepared cycle (day 10 and day 12 typically).",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is PRP safe?",
    answer:
      "Since we use your own blood there is no risk of reaction or allergy. Risk of infection is minimal since we use a closed tube system.",
  },
  {
    question: "How much does PRP cost?",
    answer:
      "It’s Rs. 10,000 – Rs. 18,000 for one session of intra uterine PRP. Plus you will have to pay Rs. 3000 – Rs. 5000 for dopplers. If PRP into ovaries is done it’s Rs. 35,000 – Rs. 60,000.",
  },
  {
    question: "When is embryo transfer done after PRP?",
    answer:
      "After getting the desired lining of >7.5 mm and trilaminer pattern we start progesterone. Which is generally 2 – 4 days after last instillation.",
  },
  {
    question: "Who is not suitable for PRP?",
    answer:
      "Anyone with platelets <1.5 lakh / infection in pelvis / Endometritis or Blood cancers shouldn’t take PRP. We will screen you for all of these before hand.",
  },
];

export default function PrpCostAndFaq() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Components involved in PRP therapy"
          title="What Affects the Cost of PRP Therapy"
          subtitle="PRP is an additional treatment we offer along with Frozen Embryo Transfer. Following are the charges."
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
          eyebrow="Frequently asked questions about PRP in IVF"
          title="Top FAQs About PRP Therapy in IVF"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </TreatmentSection>
    </>
  );
}
