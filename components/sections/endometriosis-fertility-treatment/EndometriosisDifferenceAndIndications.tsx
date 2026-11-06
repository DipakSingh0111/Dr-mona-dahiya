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
      "Endometrial tissue is present outside the uterus. It can be around the ovaries, fallopian tubes or pelvis. Causes severe pain during periods. Can cause scar tissue and cysts called endometrioma. Around 1 out of 10 women in reproductive age group are affected by this disease. Can cause infertility in 30%-50% of these women.",
  },
  {
    title: "Adenomyosis",
    description:
      "When the womb lining invades the muscle of the uterus. Can cause enlargement of the uterus. Causes severe heavy periods. Can lower your chances of an embryo implanting and lead to miscarriages. Seen in women greater than 35 years of age. Can coexist with Endometriosis.",
  },
];

const indications = [
  {
    number: "1",
    title: "Period pain / Pain in abdomen",
    description:
      "If its affecting your daily routine or is becoming more painful each month",
  },
  {
    number: "2",
    title: "Can't get pregnant",
    description:
      "Tried for over 1 year and still haven't been able to conceive",
  },
  {
    number: "3",
    title: "Endometriomas",
    description:
      "If you have had cysts in your ovary this can reduce your reserve",
  },
  {
    number: "4",
    title: "Bigger uterus on examination",
    description:
      "If your uterus feels big and painful on touch you may have adenomyosis",
  },
  {
    number: "5",
    title: "IVF Failures / IUI failures",
    description: "Can be due to poor implantation / egg quality",
  },
];

export function EndometriosisAbout() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About the Disease"
        title={
          <>
            What Are Endometriosis
            <br className="hidden sm:inline" /> and Adenomyosis?
          </>
        }
        subtitle="Both conditions involve tissue of the womb growing where it's not supposed to. Both can cause infertility."
      />
      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2"
      >
        {comparisons.map((card) => (
          <StaggerItem key={card.title}>
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function EndometriosisIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Indications"
        title={
          <>
            Indications: Who Needs Endometriosis
            <br className="hidden sm:inline" /> or Adenomyosis Fertility Care?
          </>
        }
        subtitle="Here are the top 5 problems that our patients complain of"
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
    </TreatmentSection>
  );
}

export default function EndometriosisDifferenceAndIndications() {
  return (
    <>
      <EndometriosisAbout />
      <EndometriosisIndications />
    </>
  );
}
