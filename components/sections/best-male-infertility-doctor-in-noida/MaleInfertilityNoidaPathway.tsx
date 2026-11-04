"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const steps: {
  number: string;
  title: string;
  bullets: ReactNode[];
}[] = [
  {
    number: "1",
    title: "Lifestyle and the 74-day sperm cycle",
    bullets: [
      "Remove smoking, heat and toxin exposure",
      "90 days of antioxidants (CoQ10, L-carnitine, zinc, lycopene)",
    ],
  },
  {
    number: "2",
    title: "Medical and hormonal treatment",
    bullets: [
      "Antibiotics for hidden infection (leucocytospermia)",
      "Hormonal treatment (clomiphene or aromatase inhibitors) for testosterone-estrogen imbalance",
    ],
  },
  {
    number: "3",
    title: "Varicocele correction",
    bullets: [
      "Referral for microsurgical varicocelectomy where clinically indicated",
    ],
  },
  {
    number: "4",
    title: "IUI",
    bullets: [
      <>
        For mild cases with a post-wash motile count above 5 to 10 million. See{" "}
        <Link
          href="/best-iui-doctor-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          IUI
        </Link>
      </>,
    ],
  },
  {
    number: "5",
    title: "ICSI with microfluidics",
    bullets: [
      <>
        For severe OATS or high DFI. See{" "}
        <Link
          href="/intracytoplasmic-sperm-injection-icsi-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          ICSI
        </Link>
      </>,
    ],
  },
  {
    number: "6",
    title: "Surgical sperm retrieval",
    bullets: [
      <>
        PESA, TESA or micro-TESE for azoospermia. See{" "}
        <Link
          href="/surgical-sperm-retrieval-tesa-pesa"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Surgical Sperm Retrieval
        </Link>
      </>,
    ],
  },
];

export default function MaleInfertilityNoidaPathway() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How it works"
        title="Step-by-Step Treatment Pathway"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {steps.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {item.number}
                </span>
                <h3 className="text-[14.5px] font-bold text-black sm:text-[15px]">
                  {item.title}
                </h3>
              </div>
              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="relative pl-4 text-[13px] leading-relaxed text-black before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose sm:text-[13.5px]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
