"use client";

import { FaCalendarAlt, FaSearch, FaSyncAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiFailureReasons() {
  const factors = [
    {
      icon: <FaCalendarAlt className="size-4 text-[#f9a8d4]" />,
      title: "Age",
      desc: "You have a higher chance of success if you are under the age of 35. After you hit the age of 40 your chances drop off.",
    },
    {
      icon: <FaSearch className="size-4 text-[#f9a8d4]" />,
      title: "What is Causing Your Infertility",
      desc: "Most of our patients who do IUI have unknown causes, cervical factor or mild male factor.",
    },
    {
      icon: <FaSyncAlt className="size-4 text-[#f9a8d4]" />,
      title: "May Take More Than One Cycle to Get Pregnant",
      desc: "You may need to do several cycles to become pregnant. Dr. Mona will reassess you after a couple of cycles.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Title & Subtitle */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
                Reasons IUI May Fail
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                What can cause you to be unsuccessful.
              </h2>

              <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
                No one can say for certain if you will succeed at IUI. Below are some factors that can affect your results.
              </p>
            </Reveal>
          </div>

          {/* Right Column: 3 Cards + Disclaimer Note Card */}
          <div className="min-w-0 lg:col-span-7">
            <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
              {factors.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#091a3c]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#0c224e] sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74]/20 ring-1 ring-[#e83e74]/35">
                        {item.icon}
                      </span>
                      <h3 className="text-[14.5px] font-bold text-white sm:text-[15px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}

              <StaggerItem>
                <div className="mt-2 rounded-2xl border border-teal-500/30 bg-[#0d2a3a]/75 p-4.5 backdrop-blur-md sm:p-5">
                  <p className="text-[13px] leading-relaxed text-slate-200 sm:text-[13.5px]">
                    Based on your age and cause, your doctor can tell you what your chances may be. Just remember IUI is not going to guarantee you a baby.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

