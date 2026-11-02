"use client";

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
    title: "Consultation",
    bullets: [
      "Reason for freezing and the number of samples needed",
      "Consent and storage terms explained",
    ],
  },
  {
    number: "2",
    title: "Collection",
    bullets: [
      "Sample collected in a private room at the clinic",
      "Multiple samples may be advised",
    ],
  },
  {
    number: "3",
    title: "Processing",
    bullets: [
      "Sample assessed and mixed with a cryoprotectant",
      "Divided into labelled vials",
    ],
  },
  {
    number: "4",
    title: "Freezing and storage",
    bullets: [
      "Vials stored in liquid nitrogen",
      "Tracked with a secure labelling system",
    ],
  },
  {
    number: "5",
    title: "Later use",
    bullets: [
      "Thawed for IUI, IVF or ICSI",
      "Post-thaw quality checked before use",
    ],
  },
];

const whyPoints = [
  {
    title: "Rapid Access for Onco-Fertility & Urgent Medical Needs",
    desc: "Same-day, prioritized appointments ensure fast semen cryopreservation before chemotherapy, radiation, or surgery—avoiding any delay to medical care.",
  },
  {
    title: "Advanced Cryopreservation for Maximum Post-Thaw Viability",
    desc: "Ultra-low temperature storage at -196°C protects sperm motility, morphology, and DNA integrity for reliable long-term security.",
  },
  {
    title: "Tailored Integration with Future IUI and IVF/ICSI Plans",
    desc: "Every sample is prepared with clear long-term storage terms and optimized for downstream treatments, from simple IUI to microfluidic ICSI cycles.",
  },
];

export default function SpermFreezingProtocolAndWhy() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Treatment Protocol"
          subtitle="What to expect at each stage. The exact plan is set at your consultation."
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
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Consult Dr. Mona Dahiya for Semen & Sperm Freezing?"
        />
        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
