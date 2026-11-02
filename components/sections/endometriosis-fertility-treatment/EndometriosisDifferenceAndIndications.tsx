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
    title: "Endometriosis",
    description:
      "Tissue similar to the womb lining grows outside the uterus, on the ovaries, fallopian tubes or pelvic lining. It causes painful periods, scarring and ovarian cysts (endometriomas). It affects about 1 in 10 women of reproductive age, and 30–50% of women with endometriosis face difficulty conceiving.",
  },
  {
    title: "Adenomyosis",
    description:
      "Womb-lining tissue grows into the muscular wall of the uterus, which thickens and enlarges it. It causes heavy, painful periods and can lower embryo implantation and raise miscarriage risk. It is more common after 35 and often occurs together with endometriosis.",
  },
];

const indications = [
  {
    number: "1",
    title: "Painful periods or pelvic pain",
    description: "Pain that disrupts daily life or is getting worse.",
  },
  {
    number: "2",
    title: "Trying to conceive without success",
    description: "Especially after a year or more of attempts.",
  },
  {
    number: "3",
    title: "Ovarian endometrioma",
    description: "Cysts that can affect ovarian reserve and need a considered plan.",
  },
  {
    number: "4",
    title: "Enlarged, tender uterus",
    description: "A pattern that may point to adenomyosis.",
  },
  {
    number: "5",
    title: "Failed IUI or IVF",
    description: "When implantation or egg quality is the concern.",
  },
];

export default function EndometriosisDifferenceAndIndications() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Understanding the conditions"
          title={
            <>
              What Are Endometriosis
              <br className="hidden sm:inline" /> and Adenomyosis?
            </>
          }
          subtitle="Two related conditions in which womb-lining-like tissue grows where it should not, often affecting fertility."
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
              Indications: Who Needs Endometriosis
              <br className="hidden sm:inline" /> or Adenomyosis Fertility Care?
            </>
          }
          subtitle="Common reasons Dr. Mona Dahiya recommends endometriosis & adenomyosis care."
        />
        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number}>
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </TreatmentSection>
  );
}
