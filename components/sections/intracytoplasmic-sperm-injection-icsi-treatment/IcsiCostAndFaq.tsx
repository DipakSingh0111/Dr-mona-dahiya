"use client";

import Link from "next/link";
import { FaCalendarAlt, FaCheck, FaFlask, FaVial } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    title: "Cost of ICSI",
    description: "Additional lab charges on top of regular IVF charges.",
    icon: <FaFlask className="size-3.5" />,
  },
  {
    title: "Additional Cost for Processing Sperm",
    description:
      "If you need sperm to be sorted on microfluidic chips or PICSI plates.",
    icon: <FaVial className="size-3.5" />,
  },
  {
    title: "Sperm Retrieval",
    description:
      "If you have azoospermia, we will need to retrieve sperm by PESA, TESA or Micro-TESE.",
    icon: <FaCheck className="size-3.5" />,
  },
  {
    title: "Genetic Testing and Cryopreservation",
    description:
      "Cost of doing PGT-A on each embryo and the cost of cryopreservation.",
    icon: <FaCalendarAlt className="size-3.5" />,
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the difference between IVF and ICSI?",
    answer:
      "During IVF, we add many sperm to the eggs and hope that one will fertilise each egg. With ICSI, we select one sperm and inject it directly inside the egg.",
  },
  {
    question: "When is ICSI advised instead of standard IVF?",
    answer:
      "ICSI should be chosen if you have a male factor problem or high sperm DNA fragmentation, if you had fertilisation failure previously, or if you are using frozen eggs or doing PGT.",
  },
  {
    question: "Is ICSI safe for the baby?",
    answer:
      "Studies have shown that babies born from ICSI are as healthy as babies born naturally or through regular IVF. There are no differences in terms of development.",
  },
  {
    question: "Does ICSI cost more than IVF?",
    answer:
      "It is slightly more expensive than IVF, as we charge additional lab charges for performing ICSI. The total cost will remain between 1.5 Lakhs and 2.5 Lakhs. We will give you your quote.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can ICSI work with a zero sperm count?",
    answer:
      "Yes. If there is azoospermia, we can get sperm from the epididymis (PESA) or testes (TESA/Micro-TESE). These sperm are usually low in number and may not move, but ICSI requires only 1 sperm per egg.",
  },
  {
    question: "Does a male factor problem always need surgery?",
    answer:
      "Not always. Surgery is done only in case of azoospermia. If you have low count or low motility, we can process your sample on microfluidic chips and perform ICSI.",
  },
  {
    question: "Where can I have ICSI with Dr. Mona Dahiya?",
    answer:
      "We have 3 locations where you can get ICSI treatment: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "Can the male partner improve sperm before ICSI?",
    answer: (
      <>
        Yes, there are many ways he can improve his sperm DNA fragmentation. He can change his lifestyle, treat any infections or varicocele if present, take supplements, and then retest his{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          sperm DNA fragmentation
        </Link>
        .
      </>
    ),
  },
];

export default function IcsiCostAndFaq() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Cost"
          title="Factors Which Affect Cost Of ICSI"
          subtitle="As ICSI is performed along with IVF, the total cost will lie between 1.5 Lakhs and 2.5 Lakhs. Below are some things which will affect your cost. We don't charge any extra amount from the lab."
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
          eyebrow="FAQ"
          title="Top FAQs About ICSI Treatment in Delhi NCR"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />

        <Reveal variant="fadeUp" delay={0.06} className="mt-10">
          <div className="rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_10px_30px_rgba(232,62,116,0.06)] sm:p-7">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              How successful is ICSI?
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
              The fertilisation rate with ICSI is 70%-85%, and egg survival after ICSI is
              more than 95%. Your chance of pregnancy will depend on your age and embryo
              quality.
            </p>
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
