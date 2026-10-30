"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function MedicalRegistration() {
  const registrations = [
    {
      code: "DMC",
      councilName: "Delhi Medical Council",
      regNumber: "DMC-7795",
      regLabel: "DMC registration number",
      badgeBg: "bg-gradient-to-br from-[#0284c7] to-[#0369a1]",
      numColor: "text-[#0284c7]",
      borderColor: "border-[#bae6fd] hover:border-[#0284c7]/70",
      cardBg: "bg-gradient-to-br from-[#f0f9ff] via-[#f8fafc] to-white",
      glowShadow:
        "shadow-[0_4px_20px_rgba(2,132,199,0.08)] hover:shadow-[0_14px_36px_rgba(2,132,199,0.18)]",
      ringColor: "ring-[#bae6fd]",
    },
    {
      code: "MCI",
      councilName: "Medical Council of India",
      regNumber: "MCI-09/6820",
      regLabel: "MCI registration number",
      badgeBg: "bg-gradient-to-br from-[#e83e74] to-[#c53658]",
      numColor: "text-[#c53658]",
      borderColor: "border-[#fbcfe8] hover:border-[#e83e74]/70",
      cardBg: "bg-gradient-to-br from-[#fff0f5] via-[#fdf2f8] to-white",
      glowShadow:
        "shadow-[0_4px_20px_rgba(232,62,116,0.08)] hover:shadow-[0_14px_36px_rgba(232,62,116,0.18)]",
      ringColor: "ring-[#fbcfe8]",
    },
    {
      code: "UPMC",
      councilName: "Uttar Pradesh Medical Council",
      regNumber: "UPMC-110541",
      regLabel: "UPMC registration number",
      badgeBg: "bg-gradient-to-br from-[#0047ca] to-[#0037a3]",
      numColor: "text-[#0047ca]",
      borderColor: "border-[#bfdbfe] hover:border-[#0047ca]/70",
      cardBg: "bg-gradient-to-br from-[#eff6ff] via-[#f8fafc] to-white",
      glowShadow:
        "shadow-[0_4px_20px_rgba(0,71,202,0.08)] hover:shadow-[0_14px_36px_rgba(0,71,202,0.18)]",
      ringColor: "ring-[#bfdbfe]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      {/* Subtle ambient light glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[340px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.12) 0%, rgba(0,71,202,0.08) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Left-Aligned Header matching Screenshot */}
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Registered medical practitioner
          </p>

          <h2 className="font-serif mt-2 text-[2rem] leading-tight font-bold tracking-tight text-[#0f2438] sm:text-[2.6rem] lg:text-[2.85rem]">
            Medical Registration
          </h2>

          <p className="mt-2 text-[13.5px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
            Dr. Mona Dahiya is registered with the following medical councils.
          </p>
        </Reveal>

        {/* 3 Medical Councils Cards Grid matching Screenshot with Theme Colors */}
        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6"
          stagger={0.08}
        >
          {registrations.map((item) => (
            <StaggerItem key={item.code} variant="scaleIn" className="h-full">
              <article
                className={`group relative flex h-full min-h-[120px] items-center overflow-hidden rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${item.cardBg} ${item.borderColor} ${item.glowShadow}`}
              >
                <div className="relative z-10 flex w-full items-center gap-4 sm:gap-5">
                  {/* Circular Code Badge with thick outer ring */}
                  <div
                    className={`flex size-[62px] shrink-0 items-center justify-center rounded-full bg-white p-[3px] ring-4 ${item.ringColor} shadow-sm transition-transform duration-300 group-hover:scale-105 sm:size-[68px]`}
                  >
                    <div
                      className={`flex size-full items-center justify-center rounded-full ${item.badgeBg}`}
                    >
                      <span className="text-[13.5px] font-bold tracking-wide text-white sm:text-[14.5px]">
                        {item.code}
                      </span>
                    </div>
                  </div>

                  {/* Council Info & Registration Number */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[12.5px] font-semibold text-[#475569] sm:text-[13px]">
                      {item.councilName}
                    </h3>
                    <p
                      className={`font-serif mt-0.5 text-[21px] font-bold tracking-tight sm:text-[23px] ${item.numColor}`}
                    >
                      {item.regNumber}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#94a3b8] sm:text-[11.5px]">
                      {item.regLabel}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
