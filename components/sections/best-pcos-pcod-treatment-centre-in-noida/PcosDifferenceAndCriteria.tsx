"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  CostFactorCard,
} from "@/components/ui/treatment";

const comparisons = [
  {
    title: "What is PCOS?",
    description:
      "Polycystic Ovary Syndrome is a endocrine metabolic disorder. If a female has any 2 out of 3 of the following symptoms then she has PCOS. Ovulation doesn't happen regularly or is absent, elevated androgens and polycystic ovaries on ultrasound. Insulin resistance can lead to type 2 diabetes and cardiovascular problems if untreated. So it must be medically managed along with lifestyle modifications.",
  },
  {
    title: "What is PCOD?",
    description:
      "Polycystic Ovarian Disease / Disorder is a commonly used terminology in India. The ovaries secrete immature eggs or partially mature eggs which build up on the surface of the ovary as numerous small sized follicles. It may be associated with obesity, but most women can still ovulate and become pregnant. By following proper diet and exercise and taking oral medications to induce ovulation.",
  },
];

const criteria = [
  {
    number: "1",
    title: "Anovulation",
    description:
      "Irregular / absent periods. Menstrual cycle >35 days or absent.",
  },
  {
    number: "2",
    title: "Elevated Androgens",
    description:
      "Increased free testosterone. Causes unwanted hair growth / acne / hair fall.",
  },
  {
    number: "3",
    title: "Polycystic ovaries on USG",
    description:
      "Multiple follicles measuring 2mm to 9mm in diameter ≥20 follicles per ovary and increased stromal volume.",
  },
  {
    number: "4",
    title: "Insulin Resistance",
    description:
      "Acanthosis Nigricans (Dark patches on skin), Increased Fasting Insulin and altered Glucose:Insulin ratio.",
  },
  {
    number: "5",
    title: "Female Infertility",
    description:
      "Due to absence of ovulation. As follicles don't grow to maturity and don't release an egg.",
  },
];

export default function PcosDifferenceAndCriteria() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Know More"
          title="What Is PCOS and What Is PCOD?"
        />
        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2"
        >
          {comparisons.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="More Information"
          title="Indications: PCOS Diagnostic Criteria (Rotterdam)"
        />
        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {criteria.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </TreatmentSection>
  );
}
