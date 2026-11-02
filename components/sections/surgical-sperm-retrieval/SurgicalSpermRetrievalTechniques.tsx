"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const techniques = [
  {
    title: "PESA",
    description:
      "Percutaneous Epididymal Sperm Aspiration. A fine needle draws sperm from the epididymis under local anaesthesia. Used mainly for obstructive azoospermia.",
  },
  {
    title: "TESA",
    description:
      "Testicular Sperm Aspiration. A needle takes sperm-bearing tissue directly from the testis. Suits obstructive cases, failed PESA or high sperm DNA fragmentation.",
  },
  {
    title: "Micro-TESE",
    description:
      "Microsurgical Testicular Sperm Extraction. Under an operating microscope, the surgeon finds and takes only the sperm-producing tubules. The gold standard for non-obstructive azoospermia.",
  },
];

export default function SurgicalSpermRetrievalTechniques() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Retrieval techniques
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            PESA, TESA and Micro-TESE at a Glance
          </h2>
          <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
            Three ways to collect sperm directly, chosen by the cause of
            azoospermia.
          </p>
        </Reveal>

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {techniques.map((item) => (
            <StaggerItem key={item.title}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    <FaCheck className="size-3" />
                  </span>
                  <h3 className="font-serif text-[1.1rem] font-semibold text-white sm:text-[1.15rem]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
