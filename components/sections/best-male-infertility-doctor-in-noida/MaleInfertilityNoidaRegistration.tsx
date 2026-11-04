"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const registrations = [
  {
    code: "DMC",
    councilName: "Delhi Medical Council",
    regNumber: "DMC-7795",
    regLabel: "DMC registration number",
    badgeBg: "bg-gradient-to-br from-blue to-[#0369a1]",
    numColor: "text-[#38bdf8]",
    glow: "border-sky-400/35 shadow-[0_0_24px_rgba(14,165,233,0.12)]",
  },
  {
    code: "MCI",
    councilName: "Medical Council of India",
    regNumber: "MCI-09/6820",
    regLabel: "MCI registration number",
    badgeBg: "bg-gradient-to-br from-rose to-rose-dark",
    numColor: "text-rose",
    glow: "border-rose/40 shadow-[0_0_24px_rgba(232,62,116,0.14)]",
  },
  {
    code: "UPMC",
    councilName: "Uttar Pradesh Medical Council",
    regNumber: "UPMC-110541",
    regLabel: "UPMC registration number",
    badgeBg: "bg-gradient-to-br from-blue to-blue-dark",
    numColor: "text-blue",
    glow: "border-blue/35 shadow-[0_0_24px_rgba(0,71,202,0.14)]",
  },
];

export default function MaleInfertilityNoidaRegistration() {
  return (
    <section className="relative overflow-hidden bg-pink px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Registered medical practitioner
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Medical Registration
          </h2>
          <p className="mt-2 text-[14px] text-black sm:text-[15px]">
            Dr. Mona Dahiya is registered with the following medical councils.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          stagger={0.08}
        >
          {registrations.map((item) => (
            <StaggerItem key={item.code} variant="scaleIn" className="h-full">
              <article
                className={`flex h-full items-center gap-4 rounded-2xl border bg-white p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 sm:p-6 ${item.glow}`}
              >
                <span
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full text-[13px] font-bold tracking-wide text-white shadow-lg sm:size-16 sm:text-[14px] ${item.badgeBg}`}
                >
                  {item.code}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold text-black sm:text-[16px]">
                    {item.councilName}
                  </h3>
                  <p
                    className={`mt-1 font-serif text-[1.25rem] font-bold tracking-tight sm:text-[1.35rem] ${item.numColor}`}
                  >
                    {item.regNumber}
                  </p>
                  <p className="mt-0.5 text-[12px] text-black">
                    {item.regLabel}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
