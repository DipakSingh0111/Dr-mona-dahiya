"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CostFactorCard } from "@/components/ui/treatment";

const costFactors = [
  {
    title: "Drugs",
    description: "Based on age/weight and ovarian reserve",
  },
  {
    title: "Lab Work",
    description: "ICSI/Sperm selection/Genetic testing if indicated",
  },
  {
    title: "Freezing & Storage",
    description:
      "Freeze remaining embryos and store them. Storage charges yearly.",
  },
  {
    title: "Frozen Embryo Transfers",
    description: "Prepare lining, warm up and monitor for transfer",
  },
];

export default function BestIvfDelhiCost() {
  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Transparency
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Cost of IVF in Delhi
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-black sm:text-[15px]">
            IVF can cost between 1.5 Lakhs to 2.5 Lakhs at Dr. Mona Dahiya. It
            will vary based on drugs, lab work and transfers needed.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {costFactors.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <CostFactorCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
