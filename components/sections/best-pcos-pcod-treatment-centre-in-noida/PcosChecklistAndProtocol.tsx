"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
  ChecklistRow,
} from "@/components/ui/treatment";

const checklist = [
  "Ultrasound to check ovarian volume and number of follicles",
  "LH & FSH on Day 2 or 3. Usually LH:FSH ratio is >2:1",
  "Total Testosterone, Free Androgen Index & DHEA-S",
  "Fasting Blood Sugar, Fasting Insulin (Calculate HOMA-IR), Lipid Profile & HbA1C",
  "Check Thyroid profile and Prolactin to exclude other causes",
];

const whyPoints = [
  {
    title: "Avoids OHSS",
    desc: "By using GnRH Agonist trigger and Freeze all blastocysts. We have reduced OHSS to near zero in our clinic.",
  },
  {
    title: "Addressing all factors of PCOS",
    desc: "We treat Insulin resistance and High Androgens before we move to IVF to improve egg quality.",
  },
  {
    title: "Gradual Approach",
    desc: "Oral medications are given before we proceed to IVF or surgery (Laparoscopic Ovarian Drilling).",
  },
];

function LinkedProtocolCard({
  number,
  title,
  bullets,
}: {
  number: string;
  title: string;
  bullets: ReactNode[];
}) {
  return (
    <div className="card-highlight relative flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
          {number}
        </span>
        <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-black sm:text-[1.12rem]">
          {title}
        </h3>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
        {bullets.map((bullet, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-black sm:text-[13.5px]"
          >
            <span className="pt-0.5 text-[14px] leading-none text-rose select-none">
              ↳
            </span>
            <p className="flex-1">{bullet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PcosChecklistAndProtocol() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Prior to starting"
          title="Diagnostic Checklist: Metabolic & Hormonal Profiling"
          subtitle="It is very important to address the metabolic part of PCOS before treating your fertility."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="About this process"
          title="Step-by-Step PCOS Treatment Protocol"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          <StaggerItem className="h-full">
            <ProtocolCard
              number="1"
              title="Diet + Medications for 4 to 8 weeks"
              bullets={[
                "Diet modification. Follow low glycemic foods and increase activity",
                "Start Myo-Inositol 4,000mg with D-Chiro Inositol",
                "Metformin can be started depending on blood sugar levels 500 to 1,500 mg daily",
              ]}
            />
          </StaggerItem>
          <StaggerItem className="h-full">
            <LinkedProtocolCard
              number="2"
              title="Induce ovulation on Day 3 to 7"
              bullets={[
                "Start Letrozole 2.5mg or 5mg",
                <>
                  <Link
                    href="/follicular-ultrasound"
                    className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
                  >
                    Follicular Ultrasound
                  </Link>{" "}
                  done to monitor single growing follicle
                </>,
              ]}
            />
          </StaggerItem>
          <StaggerItem className="h-full">
            <LinkedProtocolCard
              number="3"
              title="Do IUI if required"
              bullets={[
                <>
                  If natural conception does not happen do{" "}
                  <Link
                    href="/best-iui-doctor-in-noida"
                    className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
                  >
                    IUI
                  </Link>{" "}
                  with mild stimulation
                </>,
              ]}
            />
          </StaggerItem>
          <StaggerItem className="h-full">
            <ProtocolCard
              number="4"
              title="Antagonist IVF Cycle to avoid OHSS"
              bullets={[
                "Use low dose of injectables and add antagonist",
                "Trigger using GnRH Agonist instead of HCG",
                "Embryos grown till Blastocyst stage on Benchtop Incubator",
              ]}
            />
          </StaggerItem>
          <StaggerItem className="h-full">
            <LinkedProtocolCard
              number="5"
              title="Freeze All Blastocysts and do FET later"
              bullets={[
                "All embryos are frozen and patient is allowed to recover",
                <>
                  Once recovered she can undergo Elective{" "}
                  <Link
                    href="/frozen-embryo-transfer"
                    className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
                  >
                    Frozen Embryo Transfer
                  </Link>
                </>,
              ]}
            />
          </StaggerItem>
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Experience and Knowledge"
          title="Why Consult Dr. Mona Dahiya for PCOS?"
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
