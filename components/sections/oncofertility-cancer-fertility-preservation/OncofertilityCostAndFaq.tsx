"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard
} from "@/components/ui/treatment";
const costCards = [
  {
    title: "Stimulation medicines",
    description:
      "Gonadotropins, antagonists and Letrozole: ₹25,000 to ₹65,000.",
  },
  {
    title: "Egg retrieval and anaesthesia",
    description:
      "Retrieval, day-care suite and IV sedation: ₹20,000 to ₹45,000.",
  },
  {
    title: "Emergency vitrification",
    description: "Freezing straws and media: ₹20,000 to ₹30,000.",
  },
  {
    title: "Emergency semen freezing",
    description:
      "Processing, screening and multi-vial banking: ₹4,000 to ₹8,000 per sample.",
  },
  {
    title: "Long-term storage",
    description:
      "Flexible multi-year storage plans for extended cancer treatment.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Will fertility preservation delay my cancer treatment?",
    answer:
      "Usually no. Random-start stimulation begins on any day of your cycle, and the whole process takes 10 to 12 days, which typically fits within the staging and planning window before chemotherapy.",
  },
  {
    question: "Is stimulation safe with estrogen-sensitive breast cancer?",
    answer:
      "Yes, with an oncology protocol. Adding Letrozole 2.5 to 5 mg keeps estrogen close to natural levels while follicles grow.",
  },
  {
    question: "Can chemotherapy cause permanent infertility?",
    answer:
      "It can. Alkylating drugs such as cyclophosphamide can wipe out the ovarian follicle pool and cause early menopause, and in men can damage sperm-producing cells. Freezing eggs, embryos or sperm first gives a biological backup.",
  },
  {
    question: "Where can I get emergency oncofertility care with Dr. Mona Dahiya?",
    answer:
      "Emergency consultations are prioritised at 3 clinics: Noida (3rd Floor, K-06, above FirstCry, Bansal, Sector 48, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanervala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How quickly can preservation start?",
    answer:
      "Within 24 to 48 hours of referral. Tests are done the same day, and stimulation can start immediately.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does oncofertility care cost?",
    answer:
      "Egg freezing runs about ₹95,000 to ₹1,40,000 in total (medicines ₹25,000 to ₹65,000, retrieval ₹20,000 to ₹45,000, vitrification ₹20,000 to ₹30,000). Semen freezing is ₹4,000 to ₹8,000 per sample.",
  },
  {
    question: "Should I freeze eggs or embryos?",
    answer:
      "Eggs if you are single or unsure about a partner; embryos if you have a partner, since they give slightly more information about quality. Both survive warming over 90% of the time.",
  },
  {
    question: "How many sperm samples should men bank?",
    answer:
      "2 to 3 samples within 24 to 48 hours, ideally before the first chemotherapy dose, because even one cycle can damage sperm DNA.",
  },
  {
    question: "Can I get pregnant after cancer treatment?",
    answer:
      "Many patients can, often 2 or more years after treatment ends, with oncologist clearance. Stored eggs or embryos are then used through IVF or ICSI.",
  },
];

export default function OncofertilityCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of Oncofertility Care"
          subtitle="Oncofertility cases are prioritised and priced clearly. The components below are itemised the same day so treatment is not held up."
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
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About Oncofertility in Delhi NCR"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
