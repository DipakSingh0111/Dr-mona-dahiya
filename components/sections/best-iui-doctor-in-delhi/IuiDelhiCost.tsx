"use client";

import { FaPills, FaHeartbeat, FaFlask, FaHeart } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiDelhiCost() {
  const costFactors = [
    {
      icon: <FaPills className="size-4 text-rose" />,
      title: "Medications Used For Stimulation",
      desc: "Oral Medications like Letrozole or Clomiphene Citrate can lower the cost of the cycle. Injectable gonadotropins can be required in cases of poor ovarian response which can increase the cost.",
    },
    {
      icon: <FaHeartbeat className="size-4 text-rose" />,
      title: "Number of Ultrasound Scans",
      desc: "Based on how long it takes for you to ovulate we may require more or fewer scans.",
    },
    {
      icon: <FaFlask className="size-4 text-rose" />,
      title: "Type of Sperm Wash",
      desc: "If you are using your partner's sperm it is washed using Density Gradient Method. Or we may procure a Donor Sample.",
    },
    {
      icon: <FaHeart className="size-4 text-rose" />,
      title: "Medications After IUI",
      desc: "Micronised Progesterone Tablets or Vaginal Suppositories are prescribed.",
    },
  ];

  return (
    <section
      id="iui-cost"
      className="relative overflow-hidden border-t border-[#fde2ec] bg-pink px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            Cost and Schedule of IUI
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            IUI Cost in Delhi
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
            IUI is more affordable than IVF. But it can vary based on the type of
            medications used in your case.
          </p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.1} className="mt-7">
          <div className="relative overflow-hidden rounded-2xl border border-[#fde2ec] bg-white p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
              style={{
                background: "radial-gradient(circle, var(--blue) 0%, transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4 lg:col-span-3">
                <p className="font-serif text-[2.2rem] font-bold tracking-tight text-black sm:text-[2.6rem] lg:text-[2.85rem]">
                  ₹15,000
                </p>
              </div>

              <div className="md:col-span-8 md:border-l md:border-[#fde2ec] md:pl-8 lg:col-span-9">
                <h3 className="text-[15px] font-bold text-black sm:text-[16px]">
                  Starting cost of IUI at our Delhi Clinic with Dr. Mona Dahiya
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                  This can vary based on the following. Please ask for a quote
                  when you book an appointment.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
          <h3 className="font-serif text-[1.15rem] font-semibold text-black sm:text-[1.25rem]">
            Factors that affect Cost of IUI
          </h3>

          <Stagger
            className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            stagger={0.06}
          >
            {costFactors.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-rose/30 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.1)] backdrop-blur-md transition-all duration-300 hover:border-rose/55 hover:bg-[#fff0f5] sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose/20 ring-1 ring-rose/35">
                      {item.icon}
                    </span>
                    <h4 className="text-[14px] font-bold leading-snug text-black sm:text-[14.5px]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
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
