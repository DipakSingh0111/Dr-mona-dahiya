"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const steps = [
  {
    number: "1",
    title: "History",
    description:
      "Ask you about your periods and if you have had any surgeries. Explain what basic work up we will do on you.",
  },
  {
    number: "2",
    title: "Test",
    description: (
      <>
        See if you are not{" "}
        <Link
          href="/best-pcos-pcod-treatment-centre-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          ovulating
        </Link>
        , tubes are blocked or have endo.
      </>
    ),
  },
  {
    number: "3",
    title: "Small surgery",
    description: (
      <>
        Perform{" "}
        <Link
          href="/best-iui-doctor-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          insemination
        </Link>{" "}
        and/or small{" "}
        <Link
          href="/best-laparoscopic-surgeon-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          key hole surgery
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "Medications",
    description: "Medicate you to resolve these issues.",
  },
  {
    number: "5",
    title: "IVF",
    description: (
      <>
        Blocked tubes or endo or have low ovarian reserve. Blastocyst will be
        cultured using{" "}
        <Link
          href="/ivf-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          IVF
        </Link>
        .
      </>
    ),
  },
];

export default function FemaleInfertilityNoidaPathway() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What to expect at a consultation"
        title="Step-by-Step Treatment Pathway"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {steps.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <div className="card-highlight flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="card-badge flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {item.number}
                </span>
                <h3 className="text-[14.5px] font-bold text-ink sm:text-[15px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 flex items-start gap-2 text-[13px] leading-relaxed text-ink/80 sm:text-[13.5px]">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-rose"
                />
                <span>{item.description}</span>
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
