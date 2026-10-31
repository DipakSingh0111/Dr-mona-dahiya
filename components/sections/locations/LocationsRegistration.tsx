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
    badge: "bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8]",
    number: "text-[#93c5fd]",
    border: "border-[#3b82f6]/45 hover:border-[#60a5fa]/80",
    glow: "hover:shadow-[0_14px_36px_rgba(59,130,246,0.22)]",
  },
  rose: {
    badge: "bg-gradient-to-br from-[#e83e74] to-[#c53658]",
    number: "text-[#f9a8d4]",
    border: "border-[#e83e74]/50 hover:border-[#f472b6]/80",
    glow: "hover:shadow-[0_14px_36px_rgba(232,62,116,0.25)]",
  },
  navy: {
    badge: "bg-gradient-to-br from-[#0047ca] to-[#0037a3]",
    number: "text-[#bfdbfe]",
    border: "border-[#0047ca]/50 hover:border-[#60a5fa]/70",
    glow: "hover:shadow-[0_14px_36px_rgba(0,71,202,0.28)]",
  },
};

export default function LocationsRegistration() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 h-[300px] w-[400px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.16) 0%, rgba(0,71,202,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Registered medical practitioner
          </p>
          <h2 className="font-serif mt-2 text-[2rem] leading-tight font-bold tracking-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]">
            Medical Registration
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-white/65 sm:text-[14.5px]">
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
                  className={`flex h-full flex-col rounded-[22px] border bg-[#0a1f45]/90 p-5 shadow-[0_8px_28px_rgba(0,10,40,0.35)] transition-all duration-300 sm:p-6 ${styles.border} ${styles.glow}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold tracking-wide text-white shadow-md sm:size-14 sm:text-[14px] ${styles.badge}`}
                    >
                      {item.code}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold text-white sm:text-[16px]">
                        {item.councilName}
                      </h3>
                      <p
                        className={`mt-1.5 font-display text-[1.35rem] font-bold tracking-tight sm:text-[1.5rem] ${styles.number}`}
                      >
                        {item.regNumber}
                      </p>
                      <p className="mt-1 text-[12px] text-white/50 sm:text-[12.5px]">
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
