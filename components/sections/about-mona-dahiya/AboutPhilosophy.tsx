"use client";

import {
  FaSlidersH,
  FaShieldAlt,
  FaMicrophone,
  FaStethoscope,
  FaVideo,
} from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function AboutPhilosophy() {
  const cards = [
    {
      icon: FaSlidersH,
      title: "No fixed protocol",
      desc: "There are no package plans in IVF. We create a stimulation protocol according to the patients hormones and ovarian reserve.",
      iconBg: "bg-gradient-to-br from-[#f43f5e] to-[#e11d48]",
      border: "border-[#fde2ec] hover:border-[#f43f5e]/50",
      glow: "radial-gradient(circle at 85% 15%, rgba(244,63,94,0.22) 0%, transparent 65%)",
    },
    {
      icon: FaShieldAlt,
      title: "Treat with own eggs",
      desc: "Whenever possible we use DuoStim, micro dose flare and PRP to help patients get pregnant with own eggs.",
      iconBg: "bg-gradient-to-br from-blue to-blue-dark",
      border: "border-[#fde2ec] hover:border-blue/50",
      glow: "radial-gradient(circle at 85% 15%, rgba(13,148,136,0.22) 0%, transparent 65%)",
    },
    {
      icon: FaMicrophone,
      title: "Teaches at International level",
      desc: "Dr. Mona has been a speaker at international conferences such as ESHRE, IFFS and Fertivision.",
      iconBg: "bg-gradient-to-br from-[#eab308] to-[#ca8a04]",
      border: "border-[#fde2ec] hover:border-[#eab308]/50",
      glow: "radial-gradient(circle at 85% 15%, rgba(234,179,8,0.22) 0%, transparent 65%)",
    },
    {
      icon: FaStethoscope,
      title: "Treatment by doctor only",
      desc: "Consultation, scans, pick up and transfer will be done by Dr. Mona Dahiya.",
      iconBg: "bg-gradient-to-br from-[#f97316] to-[#ea580c]",
      border: "border-[#fde2ec] hover:border-[#f97316]/50",
      glow: "radial-gradient(circle at 85% 15%, rgba(249,115,22,0.22) 0%, transparent 65%)",
    },
    {
      icon: FaShieldAlt,
      title: "Follow Ethical practices",
      desc: "We follow the ART Act. Have itemised billing and don't do sex selection.",
      iconBg: "bg-gradient-to-br from-blue to-[#0369a1]",
      border: "border-[#fde2ec] hover:border-blue/50",
      glow: "radial-gradient(circle at 85% 15%, rgba(2,132,199,0.22) 0%, transparent 65%)",
    },
    {
      icon: FaVideo,
      title: "3 Clinics & Online Consultation",
      desc: "Three fertility centres in Noida, Ghaziabad and Delhi. You can also consult us online if you are from outstation or abroad.",
      iconBg: "bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed]",
      border: "border-[#fde2ec] hover:border-[#8b5cf6]/50",
      glow: "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.22) 0%, transparent 65%)",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 border-t border-slate-100">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <Reveal className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 md:flex-row md:items-end md:gap-6">
          <div>
            <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
              Clinical philosophy
            </span>

            <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
              Philosophy of Dr. Mona Dahiya
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-relaxed text-slate-600 sm:text-[14px] md:text-right">
            Her treatment protocol and what she stands for.
          </p>
        </Reveal>

        {/* 6 Cards Grid (3 cols x 2 rows) */}
        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.08}
        >
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <StaggerItem key={c.title} variant="scaleIn" className="h-full">
                <article
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#fbcfe0] hover:bg-[#fff0f5] hover:shadow-md sm:p-7 ${c.border}`}
                >
                  {/* Ambient Glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300 group-hover:opacity-75"
                    style={{ background: c.glow }}
                  />

                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <span
                      className={`inline-flex size-11 items-center justify-center rounded-2xl text-white shadow-sm sm:size-12 ${c.iconBg}`}
                    >
                      <Icon className="size-5" />
                    </span>

                    {/* Card Title */}
                    <h3 className="font-serif mt-5 text-[18px] leading-snug font-bold text-ink sm:text-[19.5px]">
                      {c.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                      {c.desc}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
