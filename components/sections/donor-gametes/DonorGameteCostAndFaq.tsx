"use client";

import { FaCheck, FaFlask, FaPills } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Procuring Donor Egg",
    description:
      "Procuring eggs from an ART Bank will cost you anywhere between ₹ 75,000 – ₹ 1,50,000. This includes the donor, virus free and payments to her.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Fertilisation & Lab charges",
    description:
      "Charges for fertilisation (ICSI) and growing embryos in lab.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Preparation of Recipient",
    description: "Using Estrogens and scans to prepare the lining.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the success rate of IVF with donor eggs?",
    answer:
      "You can expect success rate of 70-75% when using donor eggs. As they are young and have good quality of eggs. Provided the woman receiving them has a healthy uterus.",
  },
  {
    question: "Is egg donation legal in India under the ART Act?",
    answer:
      "Yes. Eggs can be donated as per the ART (Regulation) Act. But eggs need to be bought from licensed ART banks. All donors are screened and kept confidential.",
  },
  {
    question: "Will the baby share the mother's genes with donor eggs?",
    answer:
      "Baby will have DNA from the egg donor and Father (Sperm donor). As the child grows it will resemble both parents and the mother who gave birth to them.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for donor IVF?",
    answer:
      "We have three centres. One in Noida at 3rd floor K-06 Above first cry, Baraula Sector 49 Noida U.P. 201301. Second in Ghaziabad at 2nd Floor RDC C-53A Near Bikanerwala Sector 15 Sector 10 Raj Nagar Ghaziabad U.P. 201002. Last one in Delhi at Building No. 41 1st Floor Ring Road Block Q Lajpat Nagar IV Lajpat Nagar New Delhi 110024.",
  },
  {
    question: "How much does donor egg IVF cost?",
    answer:
      "Total cost will be between ₹ 1,33,000 – ₹ 2,40,000. Buying eggs from an ART bank ₹ 75,000 – ₹ 1,50,000. Lab charges ₹ 50,000 – ₹ 75,000 and preparing the uterus ₹ 8,000 – ₹ 15,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I choose my donor?",
    answer:
      "No. You cannot pick which donor will donate eggs to you. But you can select their skin tone, height and education from the ART Bank.",
  },
  {
    question: "Is there an age limit for recipients?",
    answer: "Women can use Donor eggs from the age of 21-50 years.",
  },
  {
    question: "How long does a donor egg cycle take?",
    answer:
      "Once you have selected a suitable donor and prepared your uterus. You can have transfer done in 4-6 weeks.",
  },
  {
    question: "Is donor sperm treatment different?",
    answer:
      "You can use donor sperm for IUI as well which will cost you ₹ 12,000 - ₹ 18,000 per cycle.",
  },
];

export default function DonorGameteCostAndFaq() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="How much does Donor Egg IVF cost?"
          title="What Affects the Cost of Donor Gamete IVF"
          subtitle="Cost of donor egg can vary between ₹ 1,33,000 – ₹ 2,40,000. This includes all the prices listed below plus the cost of transfer and storage."
        />
        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {costCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="FAQs"
          title="Top FAQs About Donor Egg and Donor Sperm IVF"
        />
        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
    </TreatmentSection>
  );
}
