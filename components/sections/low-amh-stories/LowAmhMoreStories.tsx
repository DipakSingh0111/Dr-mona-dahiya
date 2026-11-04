"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  RelatedTreatmentCard,
} from "@/components/ui/treatment";

const stories = [
  {
    title: "IVF & ICSI Success Stories",
    href: "/ivf-stories",
    subtitle: "Failed cycles, male factor and tubal blockage.",
  },
  {
    title: "PCOS & PCOD Success Stories",
    href: "/success-stories",
    subtitle: "Safe ovulation and OHSS-free IVF.",
  },
  {
    title: "IUI Success Stories",
    href: "/iui-stories",
    subtitle: "Gentle, first-line treatment within 2 to 3 cycles.",
  },
  {
    title: "Low AMH Treatment",
    href: "/best-low-amh-treatment-in-noida",
    subtitle: "How low AMH is treated.",
  },
];

export default function LowAmhMoreStories() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Browse by diagnosis"
        title="More Patient Stories"
      />

      <Stagger
        delay={0.03}
        className="mt-7 grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
      >
        {stories.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <RelatedTreatmentCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
