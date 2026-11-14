"use client";

import Image from "next/image";
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
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Our Approach Towards Recurrent Implantation Failure (RIF)"
          title="Step-by-Step Treatment Protocol"
          subtitle="Below is our approach towards treating Recurrent Implantation Failure (RIF)."
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
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/RIF.jpeg"
                alt="Recurrent Implantation Failure Evaluation and Care"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
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
      </TreatmentSection>

      <TreatmentSection>
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
    </>
  );
}
