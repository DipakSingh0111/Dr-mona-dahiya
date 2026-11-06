"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const registrations = [
  {
    code: "DMC",
    councilName: "Delhi Medical Council",
    regNumber: "DMC-7795",
    badgeBg: "bg-gradient-to-br from-navy to-navy-mid",
    badgeRing: "ring-navy/30",
    numColor: "text-navy",
    glow: "border-navy/20 hover:border-navy/50 shadow-[0_0_24px_rgba(6,21,50,0.08)]",
  },
  {
    code: "MCI",
    councilName: "Medical Council of India",
    regNumber: "MCI-09/6820",
    badgeBg: "bg-gradient-to-br from-rose to-rose-dark",
    badgeRing: "ring-rose/40",
    numColor: "text-rose",
    glow: "border-rose/40 hover:border-rose/70 shadow-[0_0_24px_rgba(232,62,116,0.14)]",
  },
  {
    code: "UPMC",
    councilName: "Uttar Pradesh Medical Council",
    regNumber: "UPMC-110541",
    badgeBg: "bg-gradient-to-br from-navy to-navy-mid",
    badgeRing: "ring-navy/30",
    numColor: "text-navy",
    glow: "border-navy/20 hover:border-navy/50 shadow-[0_0_24px_rgba(6,21,50,0.08)]",
  },
];

export default function BestIvfDelhiMedicalRegistration() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12 border-y border-[#fde2ec]/70">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Registered Medical Practitioner
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Medical Council Registration Numbers
          </h2>
          <p className="mt-2 text-[14px] text-black sm:text-[15px]">
            Dr. Mona Dahiya is a registered fertility doctor.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          stagger={0.08}
        >
          {registrations.map((item) => (
            <StaggerItem key={item.code} variant="scaleIn" className="h-full">
              <article
                className={`card-highlight flex h-full items-center gap-4 rounded-2xl border bg-white p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 sm:p-6 ${item.glow}`}
              >
                <span
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full text-[13px] font-bold tracking-wide text-white ring-2 shadow-lg sm:size-16 sm:text-[14px] ${item.badgeBg} ${item.badgeRing}`}
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
                    Registration number
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
