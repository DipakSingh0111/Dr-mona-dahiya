"use client";

import { FaCheck, FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaPills className="size-3.5" />,
    title: "Ovulation Induction",
    description: (
      <>
        Tablets and Follicular Scanning
        <br />
        ₹4000 to ₹8000
      </>
    ),
  },
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "IUI With Scanning",
    description: "₹12000 to ₹18000",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "OHSS Free IVF Cycle",
    description: (
      <>
        With Low dose injections, Antagonist, Trigger and Freezing
        <br />
        ₹125000 to ₹175000
      </>
    ),
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Frozen Embryo Transfer",
    description: "For prepared Frozen Embryo Transfer",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Can a woman with severe PCOS get pregnant naturally?",
    answer:
      "Yes. Women who have PCOS usually have good number of eggs. Its just that they are not releasing them. Once insulin resistance is addressed and ovulation is induced with Letrozole they can get pregnant.",
  },
  {
    question: "What is OHSS and how is it prevented in PCOS?",
    answer:
      "Ovarian Hyper Stimulation Syndrome occurs when too many eggs are released. Fluid from the abdomen moves to the chest cavity and can be life threatening. We use 4 techniques to avoid it. Antagonist protocol, low dose of injectables, trigger with GnRH Agonist and Freeze all blastocysts.",
  },
  {
    question: "Why is Letrozole preferred over clomiphene for PCOS?",
    answer:
      "Letrozole has shown improved ovulation rate and Live Birth rate. Also it does not reduce endometrial thickness and dries up cervical mucus. Twin rate is also lower with Letrozole.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for PCOS?",
    answer:
      "Dr Mona has 3 Clinics in Noida - 3rd floor K-06 Above FirstCry Baraula Sector 49 Noida Uttar Pradesh 201301. Ghaziabad - 2nd Floor RDC C-53A Near Bikanerwala Sector 15 Sector 10 Raj Nagar Ghaziabad Uttar Pradesh 201002 and Delhi - Building No 41 1st Floor Ring Road Block Q Lajpat Nagar IV Lajpat Nagar New Delhi 110024.",
  },
  {
    question: "Is PCOS the same as PCOD?",
    answer:
      "PCOD means Polycystic Ovaries with irregular periods. Where as PCOS is a syndrome. Most of the times both are used interchangeably. That said, the treatments available are the same.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does PCOS fertility treatment cost?",
    answer:
      "The cost of ovulation induction can range between ₹4000 to ₹8000 depending on the clinic. IUI Costs ₹12000 to ₹18000. IVF Cycle costs ₹125000 to ₹175000.",
  },
  {
    question: "Does weight loss help PCOS fertility?",
    answer:
      "Losing 5 - 10 % of your body weight can help you ovulate naturally. It can also help you respond better to medication.",
  },
  {
    question: "How many Letrozole cycles should I try?",
    answer:
      "You can take it for 3 - 6 cycles under monitoring. If you ovulate but don't conceive you can go ahead with IUI or IVF.",
  },
  {
    question: "Is metformin necessary for PCOS?",
    answer:
      "If you have Insulin resistance you should definitely take Metformin. Calculate your HOMA-IR if it is high take Metformin with Inositol for 4 to 8 weeks before starting treatment.",
  },
];

export default function PcosCostAndFaq() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Pricing"
          title="What Affects the Cost of PCOS Treatment"
          subtitle="Most patients will require Ovulation Induction only. Which is inexpensive and few may require IVF."
        />

        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
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
          eyebrow="Frequently Asked Questions"
          title="Top FAQs About PCOS and PCOD Fertility Treatment"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
    </TreatmentSection>
  );
}
