"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const registrations = [
  {
    code: "DMC",
    councilName: "Delhi Medical Council",
    regNumber: "DMC-7795",
    regLabel: "DMC registration number",
    accent: "blue" as const,
  },
  {
    code: "MCI",
    councilName: "Medical Council of India",
    regNumber: "MCI-09/6820",
    regLabel: "MCI registration number",
    accent: "rose" as const,
  },
  {
    code: "UPMC",
    councilName: "Uttar Pradesh Medical Council",
    regNumber: "UPMC-110541",
    regLabel: "UPMC registration number",
    accent: "navy" as const,
  },
];

const accentStyles = {
  blue: {
    badge: "bg-gradient-to-br from-navy to-navy-mid",
    number: "text-navy",
    border: "border-navy/25 hover:border-navy/60",
    glow: "shadow-[0_4px_20px_rgba(6,21,50,0.06)] hover:shadow-[0_14px_36px_rgba(6,21,50,0.14)]",
  },
  rose: {
    badge: "bg-gradient-to-br from-rose to-rose-dark",
    number: "text-rose",
    border: "border-rose/35 hover:border-rose/70",
    glow: "shadow-[0_4px_20px_rgba(232,62,116,0.08)] hover:shadow-[0_14px_36px_rgba(232,62,116,0.18)]",
  },
  navy: {
    badge: "bg-gradient-to-br from-navy to-navy-mid",
    number: "text-navy",
    border: "border-navy/25 hover:border-navy/60",
    glow: "shadow-[0_4px_20px_rgba(6,21,50,0.06)] hover:shadow-[0_14px_36px_rgba(6,21,50,0.14)]",
  },
};

export default function LocationsRegistration() {
  return (
    <section className="relative overflow-hidden border-y border-[#fde2ec]/70 bg-white py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.12em] text-rose sm:text-[13px]">
            Registered Medical Practitioner
          </p>
          <h2 className="font-serif mt-1.5 text-[1.75rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.5rem]">
            Medical Council Registration Numbers
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14.5px]">
            Dr. Mona Dahiya is a registered fertility doctor.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6"
          stagger={0.08}
        >
          {registrations.map((item) => {
            const styles = accentStyles[item.accent];
            return (
              <StaggerItem key={item.code}>
                <article
                  className={`card-highlight flex h-full flex-col rounded-[22px] border bg-white p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${styles.border} ${styles.glow}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold tracking-wide text-white shadow-md sm:size-14 sm:text-[14px] ${styles.badge}`}
                    >
                      {item.code}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold text-ink sm:text-[16px]">
                        {item.councilName}
                      </h3>
                      <p
                        className={`mt-1.5 font-display text-[1.35rem] font-bold tracking-tight sm:text-[1.5rem] ${styles.number}`}
                      >
                        {item.regNumber}
                      </p>
                      <p className="mt-1 text-[12px] text-ink/75 sm:text-[12.5px]">
                        {item.regLabel}
                      </p>
                    </div>
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
