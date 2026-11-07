"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const pathways = [
  {
    number: "1",
    title: "Emergency egg or embryo freezing",
    bullets: [
      "This can take around 10–12 days. You can start on any day of your menstrual cycle.",
      "Letrozole 2.5 to 5 mg in case of hormone-sensitive breast cancer.",
      "Every 48 hours we will scan you and test your hormone levels.",
      "When we feel ready we will trigger with a GnRH agonist at around 18 mm to reduce the chances of OHSS.",
      "Your eggs can be frozen, or fertilized to store embryos.",
    ],
  },
  {
    number: "2",
    title: "Ovary transposition, also known as oophoropexy",
    bullets: [
      "A surgical procedure where one or both ovaries are moved out of the field of radiation therapy.",
    ],
  },
  {
    number: "3",
    title: "Semen freezing",
    bullets: [
      "Can be done within 24–48 hours before chemotherapy begins. 2–3 samples can be stored.",
      "Once processed, it will be kept in liquid nitrogen at −196°C.",
    ],
  },
];

const whyPoints = [
  {
    title: "Experience",
    desc: "We have more than 25 years of experience in reproductive endocrinology and fertility preservation. MBBS and MD Gold Medalist.",
  },
  {
    title: "Protocol for hormone-sensitive cancers",
    desc: "We use a protocol to help your follicles grow without elevating estrogen too high, by adding Letrozole along with your FSH injection.",
  },
  {
    title: "Coordinating with your oncologist",
    desc: "We coordinate with your medical, surgical or radiation oncologist in Delhi NCR.",
  },
];

export default function OncofertilityProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Here is what we can do for you"
          title="Different Options for Your Fertility Preservation"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {pathways.map((item) => (
            <StaggerItem key={item.number}>
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <TreatmentSectionHeader
              eyebrow="Know more about Dr. Mona Dahiya"
              title="Why Choose Us"
            />

            <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
              {whyPoints.map((point, idx) => (
                <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                  <WhyPointRow {...point} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <Reveal
              variant="scaleIn"
              delay={0.08}
              className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px]"
            >
              <div className="relative aspect-[11/10] w-full overflow-hidden rounded-[22px] border-4 border-white bg-pink shadow-[0_20px_50px_rgba(232,62,116,0.12)] ring-1 ring-rose/15 sm:rounded-[26px]">
                <Image
                  src="/images/about-mona-dahiya/oncofertility.jpg"
                  alt="Dr. Mona Dahiya — India 7th IVF Summit & Awards"
                  fill
                  sizes="(max-width: 640px) 420px, (max-width: 1024px) 480px, 540px"
                  quality={95}
                  className="object-cover object-[center_45%]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </TreatmentSection>
    </>
  );
}
