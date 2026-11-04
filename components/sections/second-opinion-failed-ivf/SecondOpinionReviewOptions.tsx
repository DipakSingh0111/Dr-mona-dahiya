"use client";

import { FaHospitalUser, FaVideo } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SecondOpinionReviewOptions() {
  const options = [
    {
      title: "In-clinic comprehensive consultation",
      desc: "45-minute record review with a baseline 2D transvaginal scan, in Noida, Ghaziabad or Delhi: ₹1,500 to ₹2,500.",
      icon: FaHospitalUser,
      color: "from-rose to-[#f43f5e]",
      iconBg: "bg-rose/10 text-rose",
      border: "hover:border-rose/50",
    },
    {
      title: "Remote video consultation",
      desc: "30 to 45-minute virtual file review for outstation and international couples: ₹1,000 (US$25 for international patients).",
      icon: FaVideo,
      color: "from-blue to-[var(--blue)]",
      iconBg: "bg-blue/10 text-blue",
      border: "hover:border-blue/50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Transparency
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Second-Opinion Review Options
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-black sm:text-[15px]">
            Choose an in-clinic review or a video review of your records.
          </p>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-4xl"
        >
          {options.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div
                  className={`group flex h-full flex-col justify-start rounded-[20px] border border-slate-200/90 bg-white p-6 shadow-[0_4px_18px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${item.border}`}
                >
                  <div
                    className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-[16px] font-bold text-slate-900 group-hover:text-blue transition-colors sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

