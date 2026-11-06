"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function MedicalRegistration({ dark = false }: { dark?: boolean }) {
  const registrations = [
    {
      code: "DMC",
      councilName: "Delhi Medical Council",
      regNumber: "DMC-7795",
      regLabel: "Registration number",
      badgeBg: "bg-gradient-to-br from-navy to-navy-mid",
      numColor: "text-navy",
      borderColor: "border-navy/20 hover:border-navy/60",
      cardBg: "bg-gradient-to-br from-[#f8fafc] via-white to-white",
      glowShadow:
        "shadow-[0_4px_20px_rgba(6,21,50,0.06)] hover:shadow-[0_14px_36px_rgba(6,21,50,0.14)]",
      ringColor: "ring-navy/20",
    },
    {
      code: "MCI",
      councilName: "Medical Council of India",
      regNumber: "MCI-09/6820",
      regLabel: "Registration number",
      badgeBg: "bg-gradient-to-br from-rose to-rose-dark",
      numColor: "text-rose",
      borderColor: "border-[#fbcfe8] hover:border-rose/70",
      cardBg: "bg-gradient-to-br from-[#fff0f5] via-[#fdf2f8] to-white",
      glowShadow:
        "shadow-[0_4px_20px_rgba(232,62,116,0.08)] hover:shadow-[0_14px_36px_rgba(232,62,116,0.18)]",
      ringColor: "ring-[#fbcfe8]",
    },
    {
      code: "UPMC",
      councilName: "Uttar Pradesh Medical Council",
      regNumber: "UPMC-110541",
      regLabel: "Registration number",
      badgeBg: "bg-gradient-to-br from-navy to-navy-mid",
      numColor: "text-navy",
      borderColor: "border-navy/20 hover:border-navy/60",
      cardBg: "bg-gradient-to-br from-[#f8fafc] via-white to-white",
      glowShadow:
        "shadow-[0_4px_20px_rgba(6,21,50,0.06)] hover:shadow-[0_14px_36px_rgba(6,21,50,0.14)]",
      ringColor: "ring-navy/20",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-white py-6 sm:py-7 lg:py-8 border-y border-[#fde2ec]/70"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[340px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.12) 0%, rgba(0,71,202,0.08) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Registered Medical Practitioner
          </p>

          <h2 className="font-serif mt-2 text-[1.65rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
            Medical Council Registration Numbers
          </h2>

          <p className="mt-2 text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
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
                className={`card-highlight group relative flex h-full min-h-[120px] items-center overflow-hidden rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${item.cardBg} ${item.borderColor} ${item.glowShadow}`}
              >
                <div className="relative z-10 flex w-full items-center gap-4 sm:gap-5">
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

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[12.5px] font-semibold text-black sm:text-[13px]">
                      {item.councilName}
                    </h3>
                    <p
                      className={`font-serif mt-0.5 text-[21px] font-bold tracking-tight sm:text-[23px] ${item.numColor}`}
                    >
                      {item.regNumber}
                    </p>
                    <p className="mt-0.5 text-[11px] text-black sm:text-[11.5px]">
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
