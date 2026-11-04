"use client";

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
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {steps.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
