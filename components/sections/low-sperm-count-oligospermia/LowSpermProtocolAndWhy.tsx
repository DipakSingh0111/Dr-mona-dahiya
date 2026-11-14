"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Know why it's happening",
    description: (
      <p>
        There can be many reasons for poor sperm quality. By repeating a semen
        analysis and doing a physical we can find these correctable causes.
      </p>
    ),
  },
  {
    number: "2",
    title: "Treat what we can",
    description: (
      <p>
        Varicocele/ Infection/ Hormones. Change in lifestyle habits for ~3
        months.
      </p>
    ),
  },
  {
    number: "3",
    title: "Supplements and Medications",
    description: (
      <p>
        Prescribed antioxidants/medications. Do a repeat semen after 3 months
        (one Sperm life cycle)
      </p>
    ),
  },
  {
    number: "4",
    title: "Treatment Options",
    description: (
      <p>
        IUI if low values, IVF or ICSI if sperm-count, morphology or motility
        is severely affected.
      </p>
    ),
  },
];

const whyPoints = [
  {
    title: "Comprehensive Care for Both Partners",
    desc: "We optimize for both female and male factors in order to achieve higher success rates.",
  },
  {
    title: "Transparent Treatment Options",
    desc: "Dr Mona Dahiya will help you guide when to choose IUI, IVF, ICSI.",
  },
  {
    title: "Equal Priority for Male Fertility",
    desc: "Sharing a clear and actionable report for sperm health.",
  },
];

export default function LowSpermProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Protocol for Improving Low Sperm Count and Motility"
          title="Treatment Protocol for Low Sperm Count & Motility"
          subtitle="Our approach to treating you at each step."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-5"
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
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white p-2 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/oligospermia.jpeg"
                alt="Normal Sperm Count vs Low Sperm Count Oligospermia"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain p-2"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="What we do for improving male parameters at our clinic?"
          title={
            <>
              Why Consult Dr. Mona Dahiya for Low Sperm Count?
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
          <div className="rounded-xl border border-[#fde2ec] bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink sm:text-[13px]">
            <p>
              <strong className="text-ink">Delhi</strong> - Building Number 41,
              First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar,
              New Delhi 110024
            </p>
            <p className="mt-1.5">
              <strong className="text-ink">Noida</strong> - 3rd Floor, K-06,
              above FirstCry, Bansula, Sector 49, Noida, Uttar Pradesh 201301
            </p>
            <p className="mt-1.5">
              <strong className="text-ink">Ghaziabad</strong> - 2nd Floor, RDC,
              C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar,
              Ghaziabad, Uttar Pradesh 201002
            </p>
          </div>
        </Reveal>
      </div>
      </TreatmentSection>
    </>
  );
}
