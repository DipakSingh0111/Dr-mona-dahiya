"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Positioning the embryo",
    bullets: [
      "The embryo is placed in a drop of media surrounded by oil on a sterile glass plate, under the microscope.",
    ],
  },
  {
    number: "2",
    title: "Laser software",
    bullets: [
      "Imaging software sets the focus and the diameter of the target circle over the zona pellucida. Typically a 40x objective lens is used.",
    ],
  },
  {
    number: "3",
    title: "Exposing the embryo to the laser",
    bullets: [
      "Pulses are delivered to the zona pellucida using set laser settings, typically around the edges of the zona, away from the cells.",
      "This either thins the zona by 50% to 70% or creates an opening in it.",
    ],
  },
  {
    number: "4",
    title: "Assessing embryo integrity",
    bullets: [
      "The embryologist ensures the laser has been performed appropriately and the embryo is intact.",
    ],
  },
  {
    number: "5",
    title: "Incubation",
    bullets: [
      "The embryo is washed and returned to the incubator for 2 to 4 hours.",
    ],
  },
  {
    number: "6",
    title: "Transfer",
    bullets: [
      "Embryo transfer is performed through a soft catheter under ultrasound guidance into the prepared endometrium.",
    ],
  },
];

const whyPoints = [
  {
    title: "Experience",
    desc: "Over 25 years of performing micromanipulation procedures on embryos. Fellowship training at Singapore General Hospital, and has led lab protocols in over 25,000 IVF cycles.",
  },
  {
    title: "Use of the latest technology",
    desc: "A computerised, non-contact laser is used, which is safer than chemical techniques. Laser assisted hatching was previously performed by chemical (Tyrode's acid) and mechanical means; the laser avoids exposure to toxic chemicals.",
  },
  {
    title: "Evidence-based selection",
    desc: "Laser assisted hatching is only advised when indicated, never applied blindly to all embryos.",
  },
];

export function LahProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Procedure"
        title={
          <>
            Steps Involved in Laser
            <br className="hidden sm:inline" /> Assisted Hatching
          </>
        }
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {protocols.map((item) => (
          <StaggerItem key={item.number}>
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function LahWhy() {
  return (
    <TreatmentSection>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <TreatmentSectionHeader
            eyebrow="About Dr. Mona Dahiya"
            title={
              <>
                Why Choose Dr. Mona
                <br className="hidden sm:inline" /> Dahiya for Laser
                <br className="hidden sm:inline" /> Assisted Hatching?
              </>
            }
          />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                <WhyPointRow {...point} />
              </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={0.15} className="mt-6">
            <Link
              href="/about-mona-dahiya"
              className="inline-flex items-center justify-center rounded-full border border-rose/30 bg-white px-5 py-2.5 text-[13px] font-semibold text-ink shadow-sm transition-all hover:border-rose hover:text-rose sm:text-[13.5px]"
            >
              Meet Dr. Mona Dahiya
            </Link>
          </Reveal>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <Reveal
            variant="scaleIn"
            delay={0.1}
            className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] border-4 border-white bg-pink shadow-[0_20px_50px_rgba(232,62,116,0.12)] ring-1 ring-rose/15 sm:rounded-[26px]">
              <Image
                src="/images/about-mona-dahiya/laser.jpg"
                alt="Dr. Mona Dahiya - Laser Assisted Hatching Specialist"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 460px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </TreatmentSection>
  );
}

export default function LahProtocolAndWhy() {
  return (
    <>
      <LahProtocol />
      <LahWhy />
    </>
  );
}
