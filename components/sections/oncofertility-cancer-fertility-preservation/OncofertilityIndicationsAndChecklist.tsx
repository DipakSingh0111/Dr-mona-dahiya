"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications: { number: string; title: string; description: ReactNode }[] =
  [
    {
      number: "1",
      title: "If you are a female who needs to undergo chemotherapy",
      description:
        "Lymphoma, leukemia, sarcoma. Drugs used are alkylators, i.e. cyclophosphamide, which has a high probability of inducing ovarian failure.",
    },
    {
      number: "2",
      title: "Breast cancers that are sensitive to hormones",
      description:
        "By adding letrozole we can reduce estradiol levels and still preserve fertility.",
    },
    {
      number: "3",
      title: "Radiation therapy in the pelvic region",
      description:
        "Gynecological cancers or colorectal cancers where we need to preserve eggs or do ovary transposition.",
    },
    {
      number: "4",
      title: "Males who are going to undergo cancer treatment",
      description: (
        <>
          They may require chemotherapy, radiation therapy in the pelvic region
          or removal of the testes.{" "}
          <Link
            href="/semen-sperm-freezing"
            className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
          >
            Semen freezing
          </Link>{" "}
          can be done in urgent scenarios.
        </>
      ),
    },
    {
      number: "5",
      title:
        "Patients who don't have cancer but may need aggressive immunosuppressive therapy",
      description:
        "Like severe lupus or other autoimmune conditions which require high doses of cytotoxics.",
    },
  ];

const checklist = [
  "Get in touch with your oncologist to figure out how soon you will have to begin treatment.",
  "Test your ovarian reserve: AMH, AFC and estradiol levels, without waiting for your periods.",
  "Check receptor status in breast and gynae cancers.",
  "Viral markers done urgently (HIV I & II, HBsAg, HCV, VDRL); this is needed so the lab can work on your samples.",
  "If it's a male, we will do a semen analysis urgently to check if the sample can be directly frozen.",
];

export default function OncofertilityIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="What you need to know"
          title="Indications: Who Needs Emergency Oncofertility Care?"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem
              key={item.number}
              className="h-full min-h-[240px] sm:min-h-[260px]"
            >
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/oncofertility cancer preservation.jpeg"
                alt="Oncofertility Cancer Fertility Preservation Cryostorage"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="What we do before we begin your treatment"
          title="Here Is What We Do Before We Get Started With Your Oncofertility"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((text, idx) => (
            <Reveal key={text} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>
                <span>{text}</span>
              </ChecklistRow>
            </Reveal>
          ))}
        </div>
      </TreatmentSection>
    </>
  );
}
