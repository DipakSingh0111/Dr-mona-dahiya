"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiDiagnosticTesting() {
  const tests = [
    {
      num: "1",
      title: "Tube Patency (HSG/SSG)",
      desc: "We want to ensure that you have at least one open tube.",
    },
    {
      num: "2",
      title: "Semen Analysis and Morphology",
      desc: "We want to ensure that you have a sufficient TMSC after washing.",
    },
    {
      num: "3",
      title: "Check Ovarian Reserve (AMH/Day 2/3 FSH)",
      desc: "To estimate how many follicles may respond to ovulation medication.",
    },
    {
      num: "4",
      title: "Pelvic Ultrasound",
      desc: "Will look for any polyps or fibroids in the uterus and any cysts on the ovaries.",
    },
    {
      num: "5",
      title: "Rule Out Any Infections",
      desc: "Both male and female partners will be tested for any infections.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
            IUI Treatment Plan
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Things to keep in mind before IUI.
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
            Diagnostic tests that you will need to complete before IUI. These are some of the tests Dr. Mona will request you to complete before we begin an IUI cycle.
          </p>

          <h3 className="font-serif mt-7 text-[1.12rem] font-semibold text-white sm:text-[1.22rem]">
            Diagnostic Testing
          </h3>
        </Reveal>

        {/* 5 Cards Grid */}
        <Stagger className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.06}>
          {tests.map((item) => (
            <StaggerItem key={item.num} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#091a3c]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#0c224e] sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h4 className="text-[14.5px] font-bold text-white sm:text-[15px]">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

