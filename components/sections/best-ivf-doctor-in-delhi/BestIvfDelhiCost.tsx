"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

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
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-rose/35 bg-gradient-to-b from-white to-[#fff8fa] p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      <FaCheck className="size-3.5" />
                    </span>
                    <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
