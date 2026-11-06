"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

const indications = [
  {
    number: "1",
    title: "Trying To Conceive For More Than 1 Year",
    description: "Didn't Try In The Past 1 Year",
  },
  {
    number: "2",
    title: "Your Cycle Is Irregular",
    description: "Cycles Lasting Longer Than 35 Days / Irregular",
  },
  {
    number: "3",
    title: "Severe Period Pain",
    description: "Backache During Periods, Pain While Having Intercourse",
  },
  {
    number: "4",
    title: "Previous Pelvic Infections/Surgery",
    description: "PID, Ruptured Appendix/TB Genitalia",
  },
  {
    number: "5",
    title: "Recurrent Miscarriages More Than 2 Times",
    description: (
      <>
        <Link href="/miscarriage-treatment-in-noida" className={linkClass}>
          Need To Do Scan, Hormones &amp; Clotting Profile
        </Link>
      </>
    ),
  },
];

export default function FemaleFertilityIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Signs that you may be infertile"
        title="Indications: When to Seek a Female Fertility Evaluation"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
