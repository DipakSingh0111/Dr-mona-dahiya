"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function MedicalRegistration({ dark = false }: { dark?: boolean }) {
  const registrations = [
    {
      code: "DMC",
      councilName: "Delhi Medical Council",
      regNumber: "DMC-7795",
      regLabel: "Registration number",
      badgeBg: "bg-gradient-to-br from-[#0284c7] to-[#0369a1]",
      numColor: dark ? "text-[#38bdf8]" : "text-[#0284c7]",
      borderColor: dark
        ? "border-sky-500/35 hover:border-sky-400/70"
        : "border-[#bae6fd] hover:border-[#0284c7]/70",
      cardBg: dark
        ? "bg-[#091a3c]/80 backdrop-blur-md"
        : "bg-gradient-to-br from-[#f0f9ff] via-[#f8fafc] to-white",
      glowShadow: dark
        ? "shadow-[0_0_24px_rgba(14,165,233,0.12)] hover:shadow-[0_0_32px_rgba(14,165,233,0.25)]"
        : "shadow-[0_4px_20px_rgba(2,132,199,0.08)] hover:shadow-[0_14px_36px_rgba(2,132,199,0.18)]",
      ringColor: dark ? "ring-sky-400/40" : "ring-[#bae6fd]",
    },
    {
      code: "MCI",
      councilName: "Medical Council of India",
      regNumber: "MCI-09/6820",
      regLabel: "Registration number",
      badgeBg: "bg-gradient-to-br from-[#e83e74] to-[#c53658]",
      numColor: dark ? "text-[#f9a8d4]" : "text-[#c53658]",
      borderColor: dark
        ? "border-[#e83e74]/40 hover:border-[#e83e74]/70"
        : "border-[#fbcfe8] hover:border-[#e83e74]/70",
      cardBg: dark
        ? "bg-[#091a3c]/80 backdrop-blur-md"
        : "bg-gradient-to-br from-[#fff0f5] via-[#fdf2f8] to-white",
      glowShadow: dark
        ? "shadow-[0_0_24px_rgba(232,62,116,0.14)] hover:shadow-[0_0_32px_rgba(232,62,116,0.28)]"
        : "shadow-[0_4px_20px_rgba(232,62,116,0.08)] hover:shadow-[0_14px_36px_rgba(232,62,116,0.18)]",
      ringColor: dark ? "ring-rose-400/40" : "ring-[#fbcfe8]",
    },
    {
      code: "UPMC",
      councilName: "Uttar Pradesh Medical Council",
      regNumber: "UPMC-110541",
      regLabel: "Registration number",
      badgeBg: "bg-gradient-to-br from-[#0047ca] to-[#0037a3]",
      numColor: dark ? "text-[#93c5fd]" : "text-[#0047ca]",
      borderColor: dark
        ? "border-blue-500/35 hover:border-blue-400/70"
        : "border-[#bfdbfe] hover:border-[#0047ca]/70",
      cardBg: dark
        ? "bg-[#091a3c]/80 backdrop-blur-md"
        : "bg-gradient-to-br from-[#eff6ff] via-[#f8fafc] to-white",
      glowShadow: dark
        ? "shadow-[0_0_24px_rgba(0,71,202,0.14)] hover:shadow-[0_0_32px_rgba(0,71,202,0.28)]"
        : "shadow-[0_4px_20px_rgba(0,71,202,0.08)] hover:shadow-[0_14px_36px_rgba(0,71,202,0.18)]",
      ringColor: dark ? "ring-blue-400/40" : "ring-[#bfdbfe]",
    },
  ];

  return (
    <section
      className={`relative overflow-hidden px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8 ${
        dark ? "bg-[#061532] text-white" : "bg-white"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[340px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{
          background: dark
            ? "radial-gradient(circle, rgba(232,62,116,0.22) 0%, rgba(0,71,202,0.15) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(232,62,116,0.12) 0%, rgba(0,71,202,0.08) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Registered Medical Practitioner
          </p>

          <h2
            className={`font-serif mt-2 text-[2rem] leading-tight font-bold tracking-tight sm:text-[2.6rem] lg:text-[2.85rem] ${
              dark ? "text-white" : "text-[#0f2438]"
            }`}
          >
            Medical Council Registration Numbers
          </h2>

          <p
            className={`mt-2 text-[13.5px] leading-relaxed sm:text-[14.5px] ${
              dark ? "text-white/70" : "text-[#64748b]"
            }`}
          >
            Dr. Mona Dahiya is a registered fertility doctor.
          </p>
        </Reveal>

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
                  <div
                    className={`flex size-[62px] shrink-0 items-center justify-center rounded-full ${
                      dark ? "bg-[#061532]" : "bg-white"
                    } p-[3px] ring-4 ${item.ringColor} shadow-sm transition-transform duration-300 group-hover:scale-105 sm:size-[68px]`}
                  >
                    <div
                      className={`flex size-full items-center justify-center rounded-full ${item.badgeBg}`}
                    >
                      <span className="text-[13.5px] font-bold tracking-wide text-white sm:text-[14.5px]">
                        {item.code}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-[12.5px] font-semibold sm:text-[13px] ${
                        dark ? "text-slate-300" : "text-[#475569]"
                      }`}
                    >
                      {item.councilName}
                    </h3>
                    <p
                      className={`font-serif mt-0.5 text-[21px] font-bold tracking-tight sm:text-[23px] ${item.numColor}`}
                    >
                      {item.regNumber}
                    </p>
                    <p
                      className={`mt-0.5 text-[11px] sm:text-[11.5px] ${
                        dark ? "text-slate-400" : "text-[#94a3b8]"
                      }`}
                    >
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
