"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const reasons = [
  {
    number: "1",
    title: "Low Cost",
    description: (
      <>
        IVF in the USA, UK, Canada and Australia can range from US$15k-$25k, not
        including medicines. Dr. Mona will provide you with a similar high
        quality of treatment for 70-80% less.
      </>
    ),
  },
  {
    number: "2",
    title: "No Wait Time",
    description: (
      <>
        Due to heavy loads on the NHS and other government systems, there can be
        a wait time of 12-24 months. By having an online consultation with us,
        we can have you treated when you arrive.
      </>
    ),
  },
  {
    number: "3",
    title: "Expertise In Complex Cases",
    description: (
      <>
        Special protocols for high-grade male factor/
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Azoospermia
        </Link>{" "}
        patients, failed IVF cycles and{" "}
        <Link
          href="/best-low-amh-treatment-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Low AMH
        </Link>
        /poor ovarian reserve.
      </>
    ),
  },
  {
    number: "4",
    title: "State of The Art Embryology Lab",
    description: (
      <>
        Our lab is equipped with Laser Assisted Hatching, ZyMōt microfluidics
        and NGS for PGT-A/M.
      </>
    ),
  },
];

export default function IntlWhyIndia() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Why India?"
        title="Reasons Why Patients Fly to India For IVF With Dr. Mona Dahiya"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {reasons.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {item.number}
                </span>
                <h3 className="text-[15px] font-bold text-black sm:text-[16px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
