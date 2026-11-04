"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Priming your body",
    description:
      "By taking supplements such as CoQ10, DHEA and more for at least 6 weeks before stimulation, if your body allows it.",
  },
  {
    number: "2",
    title: "Perform DuoStim",
    description:
      "By performing DuoStim we can collect more eggs from your ovaries and get you more embryos frozen in less time. Doing two stimulations in one month.",
  },
  {
    number: "3",
    title: "Mini stimulation cycle",
    description:
      "If your previous stimulations did not allow you to grow many eggs, we can perform milder stimulation with medications such as Letrozole. This allows you to do mini IVF using lower doses of injections.",
  },
  {
    number: "4",
    title: "Bank your embryos",
    description:
      "We want to make sure we bank your extra embryos over 2-3 months of cycles so you can have an embryo transfer with good odds of success.",
  },
];

export default function LowAmhProtocols() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How we are different"
        title="Own-Egg Protocols for Low AMH"
        subtitle="How do we help you achieve pregnancies with your own eggs when you have low AMH?"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {protocols.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
