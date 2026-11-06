"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
  ProtocolCard,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Evaluate Previous Data",
    bullets: [
      "Data from all previous cycles",
      "Quality of embryos and transfer technique",
    ],
  },
  {
    number: "2",
    title: "Evaluate Uterus",
    bullets: [
      "Hysteroscopy to correct polyp, septum or adhesion",
      "Cure any infection or inflammation of the endometrium",
    ],
  },
  {
    number: "3",
    title: "Evaluate Embryos",
    bullets: ["PGT-A may be done", "Evaluate the lab practice"],
  },
  {
    number: "4",
    title: "Plan Embryo Transfer",
    bullets: [
      "Based on your requirement we will decide on protocol",
      "Transfer single best quality blastocyst",
    ],
  },
  {
    number: "5",
    title: "Luteal Support",
    bullets: ["Will provide proven luteal support", "Beta hcg and scanning"],
  },
];

const whyPoints = [
  {
    title: "100% Cost Transparency",
    desc: "We do tests and addons only when there is an indication.",
  },
  {
    title: "360-Degree Evaluation",
    desc: "Comprehensive evaluation: Embryo, Uterus to Male factor and Timing of Transfer",
  },
  {
    title: "IVF Failure Desk",
    desc: "Helping couples with previous failed IVF.",
  },
];

export default function RifProtocolWhyAndCase() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Our Approach Towards Recurrent Implantation Failure (RIF)"
          title="Step-by-Step Treatment Protocol"
          subtitle="Below is our approach towards treating Recurrent Implantation Failure (RIF)."
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
          eyebrow="Consult With Dr Mona Dahiya For Recurrent Implantation Failure (RIF)"
          title="Why Consult Dr. Mona Dahiya for Recurrent Implantation Failure?"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 space-y-2 text-[13px] leading-relaxed text-ink sm:mt-7 sm:text-[13.5px]">
          <p>
            <span className="font-semibold">Delhi</span> - Building Number 41,
            First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New
            Delhi 110024
          </p>
          <p>
            <span className="font-semibold">Noida</span> - 3rd Floor, K-06,
            above FirstCry, Garaula, Sector 49, Noida, Uttar Pradesh 201301
          </p>
          <p>
            <span className="font-semibold">Ghaziabad</span> - 2nd Floor, RDC,
            C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad,
            Uttar Pradesh 201002
          </p>
        </div>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Case Study"
          title="Clinical Case Insight"
        />

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
            <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
              After three failed transfers patient underwent hysteroscopy and
              was found to have a septum. She achieved an ongoing pregnancy
              after FET of one blastocyst once corrected.
            </p>
            <p className="mt-4 text-[12px] leading-relaxed text-ink/65 sm:text-[12.5px]">
              This is for educational purposes. Details have been modified for
              confidentiality.
            </p>
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
