"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const cards = [
  {
    number: "1",
    title: "Unexplained infertility",
    description:
      "You don't know the cause of your infertility. You have just been trying for 1 year and have had no luck. We always try IUI first because you have open tubes and normal sperm counts.",
  },
  {
    number: "2",
    title: "Cervical factor",
    description:
      "You have poor quality cervical mucus. Some patients produce cervical mucus that is too thick for sperm to pass through. IUI skips the cervix by placing sperm right past the cervical mucus.",
  },
  {
    number: "3",
    title: "Mild male factor",
    description:
      "You have mild male factor infertility. As long as your sperm count is over 5 million - 10 million you can do IUIs after we do a sperm wash.",
  },
  {
    number: "4",
    title: "Ovulation problems",
    description:
      "Ovulation problems. IUI can be used along with medication to help those who don't ovulate on their own. Women with PCOD can use medications like Letrozole along with IUI.",
  },
];

export default function IuiWhenWorks() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Why Do IUI Work?"
        title="When IUI Works Best"
        subtitle="There are a few reasons you would only do IUI when trying to conceive. Below are some reasons we treat patients with IUI."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {cards.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
