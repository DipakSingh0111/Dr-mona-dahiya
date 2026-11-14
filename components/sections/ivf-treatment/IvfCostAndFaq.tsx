"use client";

import { FaFlask, FaPills, FaCalendarAlt } from "react-icons/fa";

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
    title: "Medications",
    icon: <FaPills className="size-3.5" />,
    description:
      "Will depend on the amount of drugs you require to stimulate your ovaries. Can cost anywhere between 45,000-75,000 rupees. Based on Age, BMI and Ovarian Reserve.",
  },
  {
    title: "Lab Cost",
    icon: <FaFlask className="size-3.5" />,
    description:
      "This includes Anaesthesia, Incubator charges and Micro tools used during Egg Retrieval and Embryo Culture.",
  },
  {
    title: "Other Lab Procedures",
    icon: <FaFlask className="size-3.5 rotate-12" />,
    description:
      "Can include Micro fluidic sperm processing or Laser Assisted Hatching and/or PGT-A if needed.",
  },
  {
    title: "Embryo Freezing",
    icon: <FaCalendarAlt className="size-3.5" />,
    description:
      "If you wish to store extra Embryos they will be frozen in Liquid Nitrogen.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the true success rate of IVF with Dr. Mona Dahiya?",
    answer:
      "Our success rates are more than 90%. If you are under 35 years of age you have a 65-75% chance of getting pregnant with a single blastocyst transfer. For those who are above 38 or have had unsuccessful IVF in the past. You have a greater than 50% chance of success with Blastocyst Culture and PGT-A with proper Lining preparation.",
  },
  {
    question: "How painful is the IVF procedure?",
    answer:
      "No there is no pain involved. You will have to take injections to grow your follicles. When we are picking up your eggs we will sedate you through IV line so there is no pain. The procedure to put the Embryo back is just like a normal scan no pain or sedation is required.",
  },
  {
    question: "How long does a complete IVF cycle take?",
    answer:
      "It takes about 12-14 days to stimulate your ovaries from Day 2 of your cycle to Egg pick up. Then another 2-3 weeks if you are doing Frozen Embryo Transfer to prepare your lining. After 14 days you will get your pregnancy test. So it takes about 4-6 weeks.",
  },
  {
    question: "What is the cost of one IVF cycle?",
    answer:
      "Anywhere between 1.5-2.5 lakhs. It all depends on what medicines you need, if you need any additional Lab work such as ICSI, Freezing your Embryos and PGT etc. After your first consultation we will give you a quote.",
  },
  {
    question: "Where are Dr. Mona Dahiya's clinics?",
    answer:
      "We are located at Sector 49 Noida (3rd Floor K-06 Above First Cry Baraula Sector 49 Noida UP 201301), Raj Nagar Extension Ghaziabad (2nd Floor RDC-C-53A Near Bikanerwala Sector 15 Sector 10 Raj Nagar Ghaziabad UP 201002) and Lajpat Nagar Delhi (Building No. 41 First Floor Ring Road Block Q Lajpat Nagar IV Lajpat Nagar New Delhi 110024).",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "When should I move from IUI to IVF?",
    answer:
      "You need IVF if you have tried 3-4 IUIs and didn't get pregnant. Or if you have blocked tubes, Low sperm counts, Low Ovarian reserve or Endometriosis. Also if you are older than 38 years.",
  },
  {
    question: "How many embryos are transferred?",
    answer:
      "We only transfer 1 Embryo sometimes 2. We like to do Single Embryo transfer to prevent you from having multiples. Any extra Embryos can be frozen.",
  },
  {
    question: "What is the difference between IVF and ICSI?",
    answer:
      "In IVF we add many Sperms around each egg to increase chances of fertilization. In ICSI we take one Sperm and inject it directly into the egg. We recommend ICSI if you have a bad Male factor or High Sperm DNA Fragmentation or have failed fertilization in past.",
  },
  {
    question: "Can I have IVF if I have PCOS or low AMH?",
    answer:
      "Yes we have protocols to prevent this. If you have PCOS we do IVF with lower risk of OHSS. By doing Antagonist protocol and freezing all your embryos. If you have low AMH ( < 1.1ng/ml) we can do Micro Dose Flare Protocol or DuoStim to get more eggs.",
  },
];

export default function IvfCostAndFaq() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Cost"
          title="What determines your cost of IVF Treatment?"
          subtitle="Depending on your case your IVF Treatment with Dr. Mona Dahiya can cost anywhere between 1.5-2.5 lakhs. There are 4 main things that will determine your cost. You will be quoted an approximate amount after your first visit."
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
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About IVF Treatment in Delhi NCR"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
      </TreatmentSection>
    </>
  );
}
