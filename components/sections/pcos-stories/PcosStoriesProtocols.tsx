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

const protocols = [
  {
    number: "1",
    title: "Fix Your Metabolism",
    description: "Take correct diet and meds for 6 weeks.",
  },
  {
    number: "2",
    title: "Take Medication For Ovulation Induction",
    description: (
      <>
        Medicated to induce ovulation. Track through{" "}
        <Link href="/follicular-ultrasound" className={linkClass}>
          follicular ultrasound
        </Link>{" "}
        and trigger when needed.
      </>
    ),
  },
  {
    number: "3",
    title: "Try An IUI",
    description: (
      <>
        If you are still not getting pregnant try our IUI program.{" "}
        <Link href="/best-iui-doctor-in-noida" className={linkClass}>
          Click here to learn more about IUI.
        </Link>
      </>
    ),
  },
  {
    number: "4",
    title: "Try IVF With Low Dose Antagonist Protocol",
    description:
      "Safe from OHSS by using agonist triggers and freeze all protocol.",
  },
];

export default function PcosStoriesProtocols() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Why We Are Different"
        title="Step-by-Step PCOS Fertility Care"
        subtitle="We Help Get You Pregnant Step By Step."
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
