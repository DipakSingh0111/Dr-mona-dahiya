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
      title: "No standardised IVF packages",
      desc: "Each stimulation protocol is designed around the patient's own hormone profile and ovarian reserve.",
      iconBg: "bg-gradient-to-br from-[#f43f5e] to-[#e11d48]",
      border: "border-[#fbcfe8] hover:border-[#f43f5e]/60",
      shadow: "hover:shadow-[0_16px_36px_rgba(244,63,94,0.12)]",
      glow: "radial-gradient(circle at 85% 15%, rgba(244,63,94,0.15) 0%, transparent 65%)",
    },
    {
      icon: FaShieldAlt,
      title: "Own-egg first",
      desc: "DuoStim, micro-dose flare cycles and autologous PRP help patients conceive with their own eggs whenever possible.",
      iconBg: "bg-gradient-to-br from-[#0d9488] to-[#0f766e]",
      border: "border-[#99f6e4] hover:border-[#0d9488]/60",
      shadow: "hover:shadow-[0_16px_36px_rgba(13,148,136,0.12)]",
      glow: "radial-gradient(circle at 85% 15%, rgba(13,148,136,0.15) 0%, transparent 65%)",
    },
    {
      icon: FaMicrophone,
      title: "Academic leadership",
      desc: "Invited speaker at international conferences including ESHRE, IFFS and Fertivision.",
      iconBg: "bg-gradient-to-br from-[#eab308] to-[#ca8a04]",
      border: "border-[#fde68a] hover:border-[#eab308]/60",
      shadow: "hover:shadow-[0_16px_36px_rgba(234,179,8,0.12)]",
      glow: "radial-gradient(circle at 85% 15%, rgba(234,179,8,0.15) 0%, transparent 65%)",
    },
    {
      icon: FaStethoscope,
      title: "Doctor-led, start to finish",
      desc: "Consultations, scans, egg retrievals and embryo transfers are performed by Dr. Dahiya herself.",
      iconBg: "bg-gradient-to-br from-[#f97316] to-[#ea580c]",
      border: "border-[#fed7aa] hover:border-[#f97316]/60",
      shadow: "hover:shadow-[0_16px_36px_rgba(249,115,22,0.12)]",
      glow: "radial-gradient(circle at 85% 15%, rgba(249,115,22,0.15) 0%, transparent 65%)",
    },
    {
      icon: FaShieldAlt,
      title: "Ethical & transparent",
      desc: "Care follows the ART Act, with clear, itemised plans and no sex selection.",
      iconBg: "bg-gradient-to-br from-[#0284c7] to-[#0369a1]",
      border: "border-[#bae6fd] hover:border-[#0284c7]/60",
      shadow: "hover:shadow-[0_16px_36px_rgba(2,132,199,0.12)]",
      glow: "radial-gradient(circle at 85% 15%, rgba(2,132,199,0.15) 0%, transparent 65%)",
    },
    {
      icon: FaVideo,
      title: "Three clinics & online consults",
      desc: "Noida, Ghaziabad and Delhi, plus online consultations for outstation and international couples.",
      iconBg: "bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed]",
      border: "border-[#ddd6fe] hover:border-[#8b5cf6]/60",
      shadow: "hover:shadow-[0_16px_36px_rgba(139,92,246,0.12)]",
      glow: "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.15) 0%, transparent 65%)",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header matching Screenshot */}
        <Reveal className="mb-8 sm:mb-10">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Clinical philosophy
          </span>

          <h2 className="font-display mt-2 text-[2rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.65rem] lg:text-[2.85rem]">
            Clinical Philosophy & Research Contributions
          </h2>

          <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
            How Dr. Mona Dahiya plans care, and the work behind it.
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
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border bg-[#fafbfe] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:p-7 ${c.border} ${c.shadow}`}
                >
                  {/* Top-Right Ambient Glow Spot */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: c.glow }}
                  />

                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <span
                      className={`inline-flex size-12 items-center justify-center rounded-2xl text-white shadow-sm sm:size-[52px] ${c.iconBg}`}
                    >
                      <Icon className="size-5 sm:size-5.5" />
                    </span>

                    {/* Card Title */}
                    <h3 className="font-display mt-5 text-[18px] leading-snug font-bold tracking-tight text-[#0f2438] sm:text-[19.5px]">
                      {c.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#64748b] sm:text-[14px]">
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
