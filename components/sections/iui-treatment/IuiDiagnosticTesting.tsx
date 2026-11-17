"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { autoLinkNode } from "@/components/ui/treatment";

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
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            IUI Treatment Plan
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Things to keep in mind before IUI.
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
            Diagnostic tests that you will need to complete before IUI. These are some of the tests Dr. Mona will request you to complete before we begin an IUI cycle.
          </p>

          <h3 className="font-serif mt-7 text-[1.12rem] font-bold text-ink sm:text-[1.22rem]">
            Diagnostic Testing
          </h3>
        </Reveal>

        {/* 5 Cards + 6th Image Grid */}
        <Stagger className="mt-5 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.06}>
          {tests.map((item) => (
            <StaggerItem key={item.num} className="h-full">
              <div className="card-highlight flex h-full min-h-[220px] flex-col rounded-2xl border border-[#fde2ec] bg-gradient-to-br from-[#fff7fa] to-[#fff0f5] p-5 shadow-sm transition-all duration-300 hover:border-[#fbcfe0] hover:shadow-md sm:min-h-[240px] sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h4 className="text-[14.5px] font-bold text-ink sm:text-[15px]">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                  {autoLinkNode(item.desc)}
                </p>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem className="h-full">
            <div className="card-highlight relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-sm transition-all duration-300 hover:border-[#fbcfe0] hover:shadow-md sm:min-h-[240px]">
              <Image
                src="/shared-gallery/best iui doctor in noida.jpeg"
                alt="IUI Intrauterine Insemination Illustration"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
