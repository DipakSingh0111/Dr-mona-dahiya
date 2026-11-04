"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiDelhiSteps() {
  const steps = [
    {
      num: "1",
      title: "Day 2 Ultrasound Scan",
      desc: "A trans vaginal scan is performed on Day 2 of the cycle. To make sure the ovaries are quiescent and there are no cysts from previous cycles.",
    },
    {
      num: "2",
      title: "Stimulate the Ovaries",
      desc: "Medications are started to induce ovulation. These can be Oral tablets or Injections. Goal is to get one or 2 follicles to grow and reduce the chances of a Multiple Pregnancy.",
    },
    {
      num: "3",
      title: "Monitor Growth Of Follicles",
      desc: "Ultrasound Scans are done around Day 8 to 12 of the cycle to monitor growth of the follicles and thickness of Endometrium.",
    },
    {
      num: "4",
      title: "Trigger Shot",
      desc: "Once the dominant follicle reaches 18 to 20 mm an injection is given to cause ovulation.",
    },
    {
      num: "5",
      title: "Preparation of Sperm",
      desc: "Semen sample is collected and prepared using density gradient technique. To separate healthy and mobile sperms from the sample.",
    },
    {
      num: "6",
      title: "Insemination",
      desc: "Sperm is inserted into the uterus using a fine catheter under aseptic precautions. It takes about 10 minutes.",
    },
    {
      num: "7",
      title: "Pregnancy Test After 14 Days",
      desc: "You are advised to take progesterone to improve the lining of the uterus. After 14 days a blood test is performed to confirm pregnancy.",
    },
  ];

  return (
    <section
      id="iui-steps"
      className="relative overflow-hidden border-t border-[#fde2ec] bg-pink py-8 sm:py-10 lg:py-14"
    >
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            Steps involved
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Steps in an IUI Cycle
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
            Following are the steps that are explained to every couple who comes
            for IUI at our Delhi clinic.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          stagger={0.06}
        >
          {steps.map((item) => (
            <StaggerItem key={item.num} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h3 className="text-[14.5px] font-bold text-black sm:text-[15px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="fadeUp" delay={0.2} className="mt-8">
          <Link
            href="#iui-cost"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-2.5 text-[13px] font-medium text-black shadow-sm transition-all duration-200 hover:border-blue/60 hover:bg-blue/10 hover:text-blue active:scale-95 sm:text-[13.5px]"
          >
            See the full IUI timetable and cost
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
