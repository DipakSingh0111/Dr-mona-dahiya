"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Will be done at the start of your cycle.",
    bullets: [
      "You will be given instructions regarding medications and fasting prior to your procedure.",
    ],
  },
  {
    number: "2",
    title: "Your uterine cavity will be examined using a telescope.",
    bullets: [
      "We can look at the shape of your cavity and also visualise the openings of your fallopian tubes.",
    ],
  },
  {
    number: "3",
    title: "If a defect is found we can correct this in the same procedure.",
    bullets: ["Any samples taken will be sent to the lab for analysis."],
  },
  {
    number: "4",
    title: "You will be observed for a couple of hours after the procedure.",
    bullets: ["You may experience some mild cramping and spotting."],
  },
  {
    number: "5",
    title:
      "Your results and photos will be shown to you at your next appointment.",
    bullets: [
      "You will be advised when to start trying to conceive or when to transfer your embryos.",
    ],
  },
];

const whyPoints = [
  "When performing surgery on your uterus we are looking to optimise your cavity so you have the best chance of conceiving and maintaining your pregnancy.",
  "Dr Mona Dahiya is well versed in treating the female reproductive system and many abnormalities can be corrected at the same time as diagnosing the issue. We can then advise you on the best time to try for pregnancy naturally or transfer your embryos.",
  "By using state of the art, micro-instruments we can help prevent any damage to the uterus that would cause adhesions(scarring). Allowing the uterus to stay receptive for the embryo.",
];

export default function HysteroscopyProtocolWhyAndCase() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="How it is done"
          title="Step-by-Step Treatment Protocol"
          subtitle="Step by step guide on what to expect during your procedure. Will be discussed with you in your appointment."
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
                src="/shared-gallery/hysteroscopy.jpeg"
                alt="Hysteroscopy Procedure Overview"
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
          eyebrow="Our speciality"
          title="Why Consult Dr. Mona Dahiya for Hysteroscopy?"
        />
        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point} variant="fadeUp" delay={idx * 0.05}>
              <div className="flex items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:border-[#f8b4cb] hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:px-5 sm:py-4">
                <span className="signature-tick mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-white">
                  <FaCheck className="size-3" />
                </span>
                <p className="min-w-0 flex-1 text-[13.5px] leading-relaxed font-medium text-black sm:text-[14px]">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="From the clinic"
          title="Clinical Case Insight"
        />
        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
            <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
              A patient with repeated failed embryo transfers had a small
              endometrial polyp picked up at hysteroscopy. It was removed in the
              same sitting, and her next frozen embryo transfer was planned once
              the lining had healed.
            </p>
            <p className="mt-3 text-[12px] text-ink/65">
              Details changed to protect patient privacy. Individual results
              vary.
            </p>
          </div>
        </Reveal>
      </div>
      </TreatmentSection>
    </>
  );
}
