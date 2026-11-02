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
    title: "Laser calibration and consumables",
    description:
      "Optical calibration, laser time and sterile dishes: ₹18,000 to ₹28,000.",
  },
  {
    title: "Embryology time",
    description:
      "Performed by senior embryologists within the core IVF Treatment cycle.",
  },
  {
    title: "Frozen transfer cycle",
    description:
      "Often paired with a hormone-prepared frozen transfer and post-thaw recovery.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Can laser-assisted hatching damage the embryo?",
    answer:
      "Rarely. With a modern non-contact diode laser and an experienced embryologist, the risk is under 1%. Microsecond pulses hit only the outer shell, away from the living cells.",
  },
  {
    question: "Does laser hatching increase the risk of identical twins?",
    answer:
      "Only slightly, in theory, if the embryo splits while squeezing through a full opening. Dr. Dahiya mainly uses thinning (about 60% of the shell depth, without breaching it), which does not raise twin risk.",
  },
  {
    question: "Why does freezing make laser hatching more useful?",
    answer:
      "Vitrification can cross-link shell proteins and harden the zona. LAH helps a thawed embryo shed that harder shell and attach to the lining.",
  },
  {
    question: "Where does Dr. Mona Dahiya offer laser-assisted hatching?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does laser-assisted hatching cost?",
    answer:
      "₹18,000 to ₹28,000 as an add-on to your IVF or frozen transfer cycle.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Does every IVF patient need laser hatching?",
    answer:
      "No. It is advised in 4 main groups: age 37 or over, repeated implantation failure, frozen-thawed embryos and a measured thick zona (15 μm or more).",
  },
  {
    question: "When is laser hatching done?",
    answer:
      "On Day 3 or Day 5, about 2 to 4 hours before transfer or before a PGT biopsy.",
  },
  {
    question: "Is LAH the same as embryo biopsy?",
    answer:
      "No. LAH thins or opens the shell to help hatching. A biopsy removes 4 to 6 outer cells for genetic testing, and LAH is often the first step of that biopsy.",
  },
  {
    question: "What success can I expect with LAH?",
    answer:
      "In selected groups (older women and repeated failure), implantation reaches 60% to 70%. It does not help women under 35 with fresh, normal embryos.",
  },
];

export default function LahCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of Laser-Assisted Hatching"
          subtitle="LAH is an add-on to an IVF or frozen transfer cycle, with standard pricing of ₹18,000 to ₹28,000 for the laser procedure itself."
        />

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
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
          title="Top FAQs About Laser-Assisted Hatching in Delhi NCR"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
