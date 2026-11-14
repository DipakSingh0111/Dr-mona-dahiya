"use client";

import Image from "next/image";
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
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {protocols.map((item) => (
          <StaggerItem
            key={item.number}
            className="h-full min-h-[240px] sm:min-h-[260px]"
          >
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/pcos.jpeg"
              alt="PCOS Fertility Care and Treatment Overview"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}
