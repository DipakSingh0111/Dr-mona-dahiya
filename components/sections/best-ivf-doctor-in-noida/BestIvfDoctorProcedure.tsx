"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
} from "@/components/ui/treatment";

const steps = [
  {
    number: "1",
    title: "Workup",
    bullets: [
      "Pre IVF workup and Ultrasound for female partner and Semen analysis for male partner.",
    ],
  },
  {
    number: "2",
    title: "Stimulation & Monitoring",
    bullets: [
      "We prescribe appropriate medication and monitor you using ultrasound and blood tests.",
    ],
  },
  {
    number: "3",
    title: "Oocyte Retrieval & Semen Collection",
    bullets: [
      "We retrieve your oocytes (eggs) through minor procedure using Ultrasound and collect the semen sample of male partner.",
    ],
  },
  {
    number: "4",
    title: "Fertilization & Embryo culture",
    bullets: [
      "We perform fertilization through conventional IVF or ICSI and grow embryos till Blastocyst stage.",
    ],
  },
  {
    number: "5",
    title: "Embryo Transfer",
    bullets: [
      "We transfer the best grade embryo to your uterus as fresh cycle or freeze it for future use.",
    ],
  },
  {
    number: "6",
    title: "Follow Up",
    bullets: [
      "After embryo transfer you will be put on hormonal supplements to support your pregnancy. We will advise you to do pregnancy test and further follow up.",
    ],
  },
];

export default function BestIvfDoctorProcedure() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How it works"
        title="Procedure of IVF Treatment"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {steps.map((item) => (
          <StaggerItem
            key={item.number}
            className="h-full min-h-[240px] sm:min-h-[260px]"
          >
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/best ivf doctor in noida.jpeg"
              alt="ICSI Microinjection and IVF Embryo Culture in Noida"
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
