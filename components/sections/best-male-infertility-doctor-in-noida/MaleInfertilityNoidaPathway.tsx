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
    title: "Lifestyle advice and know your Spermatogenesis cycle (74 Days)",
    bullets: [
      "Avoid smoking, excess heat and pollution",
      "Take antioxidants for 90 days like Co Enzyme Q10, L-carnitine, zinc and lycopene.",
    ],
  },
  {
    number: "2",
    title: "Medication if any problem found",
    bullets: [
      "If any occult infection is found (leucocytospermia) we can start oral antibiotics, or use hormones (Clomid or Arimidex) to improve testosterone level if the ratio of testosterone to estrogen is reduced.",
    ],
  },
  {
    number: "3",
    title: "Treatment of Varicocele",
    bullets: [
      "If a clinical varicocele is found we will refer you for varicocele repair.",
    ],
  },
  {
    number: "4",
    title: "Intra Uterine Insemination (IUI)",
    bullets: [
      <>
        In case of mild oligo asthenozoospermia, if your count after wash is
        more than 5 to 10 million live moving sperm.{" "}
        <Link
          href="/best-iui-doctor-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Read More
        </Link>
      </>,
    ],
  },
  {
    number: "5",
    title: "Intra Cytoplasmic Sperm Injection (ICSI) using microfluidic technique",
    bullets: [
      <>
        This technique helps in selecting good sperm having less DNA
        fragmentation.{" "}
        <Link
          href="/intracytoplasmic-sperm-injection-icsi-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Read More
        </Link>
      </>,
    ],
  },
  {
    number: "6",
    title: "Retrieval of sperm from body (PESA/TESE/Micro TESE)",
    bullets: [
      <>
        If there is no sperm present in the ejaculated sample we can get sperm
        from the body to inject directly into ova.{" "}
        <Link
          href="/surgical-sperm-retrieval-tesa-pesa"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Read More
        </Link>
      </>,
    ],
  },
];

export default function MaleInfertilityNoidaPathway() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Treatment For Male Infertility"
        title="Treatment Protocol for Male Infertility in Noida"
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
                <h3 className="text-[14.5px] font-bold text-ink sm:text-[15px]">
                  {item.title}
                </h3>
              </div>
              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="relative pl-4 text-[13px] leading-relaxed text-ink/80 before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose sm:text-[13.5px]"
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
