"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const conditions = [
  {
    number: "1",
    title: "PCOD / Not ovulating",
    description: (
      <>
        Letrozole can be used to get you to ovulate. Keep you protected with IVF
        protocols of lower dosing. Read more about what you should know when
        treating{" "}
        <Link
          href="/best-pcos-pcod-treatment-centre-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          PCOD
        </Link>
        .
      </>
    ),
  },
  {
    number: "2",
    title: "Low AMH / Ovarian reserve",
    description: (
      <>
        Read more about what to know if you have{" "}
        <Link
          href="/best-low-amh-treatment-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Low AMH
        </Link>{" "}
        and want to have a baby.
      </>
    ),
  },
  {
    number: "3",
    title: "Blocked tubes",
    description: (
      <>
        Blocked tubes and hydrosalpinx. Do your tubes need testing? Read more.{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Blocked tubes treatment
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "Endometriosis",
    description: (
      <>
        Learn about mild endo suppression and egg harvesting to get pregnant.{" "}
        <Link
          href="/endometriosis-fertility-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Endo treatment
        </Link>
        .
      </>
    ),
  },
  {
    number: "5",
    title: "Septum / Fibroids in uterus",
    description: (
      <>
        <Link
          href="/best-laparoscopic-surgeon-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          When should you see a doctor?
        </Link>
      </>
    ),
  },
];

export default function FemaleInfertilityNoidaConditions() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Things we can treat"
        title="Female Fertility Conditions Treated in Noida"
      />

      <Reveal variant="fadeUp" delay={0.04}>
        <h3 className="mt-6 border-b border-ink/15 pb-2 text-[1.05rem] font-semibold text-ink sm:text-[1.15rem]">
          Treatments for Women
        </h3>
      </Reveal>

      <Stagger
        delay={0.06}
        className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
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
