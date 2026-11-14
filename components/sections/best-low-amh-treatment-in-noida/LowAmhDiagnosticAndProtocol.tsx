"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const checklist = [
  "AMH High Sensitivity (ECLIA Method). Gives you idea about your reserve.",
  "Usg scan Day 2/3 For AFC (Antral Follicle Count) of size 2-9 mm.",
  "Day 2 Fsh And Estrogen To Find Out What You're Pushing Your Ovary With.",
  "DHEA-S , Vit D3 And Free Testosterone Levels For Dhea Priming.",
];

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

const protocols: {
  number: string;
  title: string;
  bullets: ReactNode[];
}[] = [
  {
    number: "1",
    title: "Dhea Priming",
    bullets: [
      "For 6 - 8 Weeks Prior To Your First Treatment Plan Start Taking Micronised Dhea 25mg x3 Times A Day And Coq 600 mg x1. Top Up Vitamin D3 Level If Required.",
    ],
  },
  {
    number: "2",
    title: "Stimulate With Low Dose Flare Or Mini Ivf.",
    bullets: [
      <>
        By Using Low Dose Flare Method You Can Give Your Body A Boost In Its Own
        Fsh Level. We Will Use The Mild Low Dose Method To Get Quality Eggs.{" "}
        <Link href="/minimal-stimulation-mini-ivf" className={linkClass}>
          Mini IVF
        </Link>
      </>,
    ],
  },
  {
    number: "3",
    title: "Duostim (2 Stimulations In One Cycle)",
    bullets: [
      "Stimulation and Retrieval in first wave (follicular phase). Followed by 5 days and stimulation in Second Wave (Luteal Phase).",
    ],
  },
  {
    number: "4",
    title: "In Vitro Fertilisation With Icsi.",
    bullets: [
      <>
        We Will Do{" "}
        <Link href="/ivf-treatment" className={linkClass}>
          In Vitro Fertilisation
        </Link>{" "}
        With Extended Culturing To Obtain Maximum No Of Blastocyst From Lower No
        Of Eggs.
      </>,
    ],
  },
  {
    number: "5",
    title: "Embryo Banking / Frozen Embryo Transfer",
    bullets: [
      <>
        Bank Your Blastocyst and Undergo{" "}
        <Link href="/frozen-embryo-transfer" className={linkClass}>
          Frozen Embryo Transfer
        </Link>{" "}
        after preparation.
      </>,
    ],
  },
];

export default function LowAmhDiagnosticAndProtocol() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Before Treatment"
          title="Diagnostic Checklist: Assessing True Functional Reserve"
          subtitle="Test Required To Find Out How Much Functional Reserve You Have and How To Improve It"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
          <Reveal variant="fadeUp" delay={0.2}>
            <ChecklistRow>
              <Link href="/sperm-dna-fragmentation-test" className={linkClass}>
                Sperm DNA Fragmentation
              </Link>{" "}
              Of Partner To Make Sure Sperm is Not An Issue When You Already
              Have Limited Number Of Eggs.
            </ChecklistRow>
          </Reveal>
        </div>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Steps For Treatment For Low Amh Patient"
          title="Step-by-Step Low AMH Protocol"
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
              <ProtocolCard
                number={item.number}
                title={item.title}
                bullets={item.bullets}
              />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/low amh test.jpeg"
                alt="AMH Blood Test for Ovarian Reserve"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>
    </>
  );
}
