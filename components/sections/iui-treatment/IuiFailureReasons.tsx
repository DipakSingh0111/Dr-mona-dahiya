"use client";

import { FaCalendarAlt, FaSearch, FaSyncAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiFailureReasons() {
  const factors = [
    {
      icon: <FaCalendarAlt className="size-4" />,
      title: "Age",
      desc: "You have a higher chance of success if you are under the age of 35. After you hit the age of 40 your chances drop off.",
    },
    {
      icon: <FaSearch className="size-4" />,
      title: "What is Causing Your Infertility",
      desc: "Most of our patients who do IUI have unknown causes, cervical factor or mild male factor.",
    },
    {
      icon: <FaSyncAlt className="size-4" />,
      title: "May Take More Than One Cycle to Get Pregnant",
      desc: "You may need to do several cycles to become pregnant. Dr. Mona will reassess you after a couple of cycles.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f6f8] py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Title & Subtitle */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
                Reasons IUI May Fail
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
                What can cause you to be unsuccessful.
              </h2>

              <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
                No one can say for certain if you will succeed at IUI. Below are
                some factors that can affect your results.
              </p>
            </Reveal>
          </div>

          {/* Right Column: 3 Cards + Disclaimer Note Card */}
          <div className="min-w-0 lg:col-span-7">
            <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
              {factors.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex flex-col gap-2 rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#fbcfe0] hover:bg-[#fff0f5] hover:shadow-md sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="card-badge flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-white">
                        {item.icon}
                      </span>
                      <h3 className="text-[14.5px] font-bold text-ink sm:text-[15px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}

              <StaggerItem>
                <div className="mt-2 rounded-2xl border border-[#fde2ec] bg-gradient-to-br from-[#fff7fa] to-[#fff0f5] p-4.5 shadow-sm sm:p-5">
                  <p className="text-[13px] leading-relaxed text-slate-700 sm:text-[13.5px]">
                    Based on your age and cause, your doctor can tell you what
                    your chances may be. Just remember IUI is not going to
                    guarantee you a baby.
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
