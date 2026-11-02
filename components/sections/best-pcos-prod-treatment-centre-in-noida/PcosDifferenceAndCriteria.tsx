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
      "Polycystic Ovary Syndrome is a hormonal and metabolic disorder. It is diagnosed when two of three signs are present: irregular or absent ovulation, raised androgens, and polycystic ovaries on scan. It often comes with insulin resistance and raises long-term risk of type 2 diabetes and heart disease, so it needs structured medical care alongside lifestyle changes.",
  },
  {
    title: "What is PCOD?",
    description:
      "Polycystic Ovarian Disease (or Disorder) is the term widely used in India for ovaries that release immature or partly mature eggs, which collect as many small follicles. It is usually milder and closely linked to weight, diet and stress. Many women still ovulate and conceive, often with diet, exercise and simple ovulation support.",
  },
];

const criteria = [
  {
    number: "1",
    title: "Irregular or absent ovulation",
    description: "Cycles longer than 35 days, or no periods at all.",
  },
  {
    number: "2",
    title: "Raised androgens",
    description:
      "High free testosterone, excess hair growth, acne or hair thinning.",
  },
  {
    number: "3",
    title: "Polycystic ovaries on scan",
    description:
      "20 or more small follicles (2 to 9 mm) per ovary with dense stroma.",
  },
  {
    number: "4",
    title: "Insulin resistance",
    description:
      "Dark skin patches (acanthosis nigricans), high fasting insulin and altered glucose-insulin ratios.",
  },
  {
    number: "5",
    title: "Infertility from anovulation",
    description: "Follicles that do not mature and release an egg on their own.",
  },
];

export default function PcosDifferenceAndCriteria() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Understanding the difference"
          title="What Is PCOS and What Is PCOD?"
        />
        <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {comparisons.map((card) => (
            <StaggerItem key={card.title}>
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={
            <>
              Indications: PCOS Diagnostic
              <br className="hidden sm:inline" /> Criteria (Rotterdam)
            </>
          }
        />
        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {criteria.map((item) => (
            <StaggerItem key={item.number}>
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </TreatmentSection>
  );
}
