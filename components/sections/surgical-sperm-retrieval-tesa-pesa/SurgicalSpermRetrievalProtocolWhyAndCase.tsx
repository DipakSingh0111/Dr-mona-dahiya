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
    title: "Step 1: PESA",
    bullets: [
      "We will extract sperm by using a needle from epididymis.",
      "If you have obstruction.",
    ],
  },
  {
    number: "2",
    title: "Step 2: TESA",
    bullets: [
      "Will take sperm using needle from testis.",
      "If you have obstruction or did not get any sperm from PESA.",
    ],
  },
  {
    number: "3",
    title: "Step 3: Micro TESE",
    bullets: [
      "Under microscope we will look for spermatic tubules.",
      "If you have Non Obstructive azoospermia. Less amount of tissue will be extracted.",
    ],
  },
  {
    number: "4",
    title: "Lab",
    bullets: [
      "Lab staff will check if any sperm are available and prepare for ICSI.",
      "If there is more sperm left we can cryopreserve it.",
    ],
  },
  {
    number: "5",
    title: "ICSI",
    bullets: [
      "Your egg will be fertilized using these sperm.",
      "Patient can leave the clinic same day. Pain medication will be prescribed.",
    ],
  },
];

const whyPoints = [
  {
    title: "We will perform the Correct Method.",
    desc: "Be it PESA TESA or Micro TESE.",
  },
  {
    title: "Will sync womans cycle.",
    desc: "We will either ovulate and pick up eggs. Or store sperm for future use.",
  },
  {
    title: "Will have lab staff on standby.",
    desc: "So that your sperm can be checked and stored by an embryologist.",
  },
];

export default function SurgicalSpermRetrievalProtocolWhyAndCase() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Steps"
          title="Step-by-Step Treatment Protocol"
          subtitle="Following is a stepwise plan of how we will proceed with your treatment. Each individual will have their own plan."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protocols.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Why choose us"
          title="Why Consult Dr. Mona Dahiya for Surgical Sperm Retrieval?"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Azoospermia Couple"
          title="Clinical Case Insight"
        />

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
            <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
              Male was operated on and we got his sperm frozen. So he wont have
              to be operated again for future ICSI cycles.
            </p>
            <p className="mt-3 text-[12px] text-ink/65">
              Patient name changed. Outcomes can vary from person to person.
            </p>
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
