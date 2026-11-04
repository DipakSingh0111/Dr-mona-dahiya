"use client";

import { FaPills, FaHeartbeat, FaFlask, FaSyncAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiCostSection() {
  const costFactors = [
    {
      icon: <FaPills className="size-4 text-rose" />,
      title: "If You Are Doing An Induced Cycle or Natural Cycle",
      desc: "Taking pills will typically be cheaper than using injections.",
    },
    {
      icon: <FaHeartbeat className="size-4 text-rose" />,
      title: "Scans to Monitor Follicles",
      desc: "How many times you will need to come in for scans.",
    },
    {
      icon: <FaFlask className="size-4 text-rose" />,
      title: "Sperm Can Be Washed Using Density Gradient Method or Swim Up Method",
      desc: "Can be used on partner or a certified donor.",
    },
    {
      icon: <FaSyncAlt className="size-4 text-rose" />,
      title: "May Require Multiple Cycles to Get Pregnant",
      desc: "You may need to do more than one cycle to become pregnant.",
    },
  ];

  return (
    <section id="iui-cost" className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-slate-100">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            IUI Costs
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            How Much Does IUI Cost In Noida?
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
            IUI is cheaper than IVF but can vary in price depending on your needs.
          </p>
        </Reveal>

        {/* Highlight Price Banner */}
        <Reveal variant="fadeUp" delay={0.1} className="mt-7">
          <div className="relative overflow-hidden rounded-2xl border border-[#fde2ec] bg-gradient-to-br from-[#fff7fa] to-[#fff0f5] p-6 shadow-sm sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--blue) 0%, transparent 70%)" }}
            />
            <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4 lg:col-span-3">
                <p className="font-serif text-[2.2rem] font-bold tracking-tight text-rose sm:text-[2.6rem] lg:text-[2.85rem]">
                  Rs. 15,000
                </p>
              </div>

              <div className="md:col-span-8 lg:col-span-9 md:border-l md:border-[#fde2ec] md:pl-8">
                <h3 className="text-[15px] font-bold text-ink sm:text-[16px]">
                  Price for 1 IUI cycle with Dr. Mona Dahiya at Little Angel IVF.
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                  This includes the IUI procedure, scans to monitor follicles, sperm washing, ovulation medication and trigger shot, as well as any additional charges that may come with that. Prices may vary based on your treatment plan, so please enquire when booking your appointment.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Cost Factors Grid */}
        <div className="mt-10">
          <h3 className="font-serif text-[1.15rem] font-bold text-ink sm:text-[1.25rem]">
            Cost of IUI Can Vary Based On
          </h3>

          <Stagger className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.06}>
            {costFactors.map((item, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#fbcfe0] hover:bg-[#fff0f5] hover:shadow-md sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose/15 text-rose">
                      {item.icon}
                    </span>
                    <h4 className="text-[14px] font-bold leading-snug text-ink sm:text-[14.5px]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
