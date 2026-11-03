"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiCycleSteps() {
  const steps = [
    {
      num: "1",
      title: "Consultation",
      desc: "Dr. Mona will see you in person or online.",
    },
    {
      num: "2",
      title: "Give Medications to Induce Ovulation",
      desc: "We will give you medication to induce ovulation.",
    },
    {
      num: "3",
      title: "Monitoring of Follicles",
      desc: "You will be monitored with scans.",
    },
    {
      num: "4",
      title: "Wash Sperm",
      desc: "The sperm sample will be collected at the clinic and washed to obtain higher quality sperm.",
    },
    {
      num: "5",
      title: "Insemination",
      desc: "The sperm is then placed in your uterus at the time of ovulation.",
    },
    {
      num: "6",
      title: "Take Pregnancy Test",
      desc: "Once 2 weeks have passed you can take your pregnancy test.",
    },
  ];

  return (
    <section id="iui-steps" className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
            IUI Steps
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            How does an IUI cycle go?
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
            Below are the steps that are performed when you are doing an IUI cycle.{" "}
            <a
              href="#iui-cost"
              className="text-teal-400 underline decoration-teal-400/40 underline-offset-2 hover:text-teal-300"
            >
              Click here
            </a>{" "}
            to learn more about each step and the days they occur.
          </p>
        </Reveal>

        {/* 6 Step Cards Grid */}
        <Stagger className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.06}>
          {steps.map((item) => (
            <StaggerItem key={item.num} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#091a3c]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#0c224e] sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h3 className="text-[14.5px] font-bold text-white sm:text-[15px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="fadeUp" delay={0.2} className="mt-8">
          <Link
            href="#iui-cost"
            className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-teal-500/10 px-6 py-2.5 text-[13px] font-medium text-teal-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white active:scale-95 sm:text-[13.5px]"
          >
            Learn More About IUI Cycles and Prices
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

