"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const tests = [
  "Check ovarian reserve with Serum AMH & TVS (day 2/3) to know Antral Follicle count",
  "Semen analysis + Sperm DNA Fragmentation index if needed",
  "Assess the Uterus with 3D sonogram/SIS and Hysteroscopy if indicated",
  "Baseline Hormone profile. Check TSH, Prolactin, HbA1c, FSH, LH, Estradiol",
  "Both partners should be tested for infections like HIV I & II, HBs Ag, Anti HCV & VDRL",
];

export default function BestIvfDelhiDiagnostic() {
  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            What to expect
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Tests required before IVF
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-black sm:text-[15px]">
            You may or may not need all these tests. These will help us diagnose
            and formulate a plan.
          </p>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Stagger className="flex flex-col gap-3 lg:col-span-7" stagger={0.06}>
            {tests.map((text) => (
              <StaggerItem key={text}>
                <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white/80 px-4 py-3.5 backdrop-blur-md sm:px-5 sm:py-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                    <FaCheck className="size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px]">
                    {text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal variant="scaleIn" className="lg:col-span-5">
            <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[22px] border border-[#fde2ec] shadow-[0_20px_50px_rgba(0,10,40,0.4)]">
              <Image
                src="/images/about-mona-dahiya/follicular.jpg"
                alt="Dr. Mona Dahiya - Tests required before IVF"
                width={600}
                height={600}
                className="h-auto w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
