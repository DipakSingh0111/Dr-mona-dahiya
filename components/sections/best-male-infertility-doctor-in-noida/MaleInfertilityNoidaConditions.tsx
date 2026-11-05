"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const conditions = [
  {
    number: "1",
    title: "Oligo/Astheno/Teratozoospermi (OATS)",
    description: (
      <>
        If your sperm count is less than 15 million/ml, motility less than 30%
        or you have teratozoospermia.{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Read More
        </Link>
      </>
    ),
  },
  {
    number: "2",
    title: "DNA Fragmentation greater than 25% (DFI > 25%)",
    description: (
      <>
        Antioxidants and microfluidic method of sperm selection.{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Read More
        </Link>
      </>
    ),
  },
  {
    number: "3",
    title: "Azoospermia",
    description: (
      <>
        Find out whether you have obstructive or non-obstructive azoospermia and
        plan for sperm retrieval.{" "}
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Read More
        </Link>
      </>
    ),
  },
  {
    number: "4",
    title: "Blockage or Ejaculatory Problems",
    description: (
      <>
        Retrieving sperm from the body using PESA/TESE/micro TESE technique.{" "}
        <Link
          href="/surgical-sperm-retrieval-tesa-pesa"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Read More
        </Link>
      </>
    ),
  },
  {
    number: "5",
    title: "Varicocele",
    description:
      "Veins that swell up around the testis, reducing your sperm quality.",
  },
];

export default function MaleInfertilityNoidaConditions() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Male Fertility Issues Treated in Noida"
        title="Male Fertility Conditions Treated in Noida"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {conditions.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {item.number}
                </span>
                <h3 className="text-[15px] font-bold text-ink sm:text-[16px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/80 sm:text-[13.5px]">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
