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
    badge: "bg-gradient-to-br from-blue to-blue-dark",
    number: "text-blue",
    border: "border-blue/30 hover:border-blue/65",
    glow: "shadow-[0_4px_20px_rgba(0,71,202,0.08)] hover:shadow-[0_14px_36px_rgba(0,71,202,0.18)]",
  },
  rose: {
    badge: "bg-gradient-to-br from-rose to-rose-dark",
    number: "text-rose",
    border: "border-rose/35 hover:border-rose/70",
    glow: "shadow-[0_4px_20px_rgba(232,62,116,0.08)] hover:shadow-[0_14px_36px_rgba(232,62,116,0.18)]",
  },
  navy: {
    badge: "bg-gradient-to-br from-blue to-blue-dark",
    number: "text-blue",
    border: "border-blue/30 hover:border-blue/65",
    glow: "shadow-[0_4px_20px_rgba(0,71,202,0.08)] hover:shadow-[0_14px_36px_rgba(0,71,202,0.18)]",
  },
};

export default function LocationsRegistration() {
  return (
    <section className="relative overflow-hidden bg-pink py-6 sm:py-7 lg:py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 h-[300px] w-[400px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.16) 0%, rgba(0,71,202,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Registered medical practitioner
          </p>
          <h2 className="font-serif mt-2 text-[2rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.75rem]">
            Medical Registration
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink sm:text-[14.5px]">
            Dr. Mona Dahiya is registered with the following medical councils.
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
                  className={`flex h-full flex-col rounded-[22px] border bg-white p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${styles.border} ${styles.glow}`}
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
