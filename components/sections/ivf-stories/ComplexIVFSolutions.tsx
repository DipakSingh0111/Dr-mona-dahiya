"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const solutions = [
  {
    num: "1",
    title: "Blocked tubes and hydrosalpinx",
    description: (
      <span>
        Embryos are frozen first, then a fluid-filled tube is removed by{" "}
        <span className="font-semibold text-[#38bdf8] underline decoration-[#38bdf8]/60 underline-offset-3 hover:text-white transition-colors cursor-pointer">
          laparoscopy
        </span>{" "}
        before a frozen transfer.
      </span>
    ),
  },
  {
    num: "2",
    title: "Repeated implantation failure",
    description: (
      <span>
        An{" "}
        <span className="font-semibold text-[#38bdf8] underline decoration-[#38bdf8]/60 underline-offset-3 hover:text-white transition-colors cursor-pointer">
          ERA Test
        </span>{" "}
        and CD138 biopsy check the implantation window and hidden infection.
      </span>
    ),
  },
  {
    num: "3",
    title: "Male factor",
    description: (
      <span>
        Microfluidic sperm selection with{" "}
        <span className="font-semibold text-[#38bdf8] underline decoration-[#38bdf8]/60 underline-offset-3 hover:text-white transition-colors cursor-pointer">
          ICSI
        </span>{" "}
        for low count or high DNA damage.
      </span>
    ),
  },
  {
    num: "4",
    title: "Embryo genetics",
    description: (
      <span>
        PGT-A screening of blastocysts when repeated failure or age suggests chromosomal problems.
      </span>
    ),
  },
];

export default function ComplexIVFSolutions() {
  return (
    <section className="relative overflow-hidden bg-pink py-8 text-ink sm:py-10 lg:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-[440px] w-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.4) 0%, rgba(0,71,202,0.3) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-10 h-[360px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,71,202,0.45) 0%, transparent 68%)",
        }}
      />

      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-9">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#ff7fa9] uppercase sm:text-[13px]">
            What makes the difference
          </span>

          <h2 className="font-serif mt-2 text-[2.1rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.65rem] lg:text-[2.9rem]">
            How Complex IVF Cases Are Solved
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.07}
        >
          {solutions.map((item) => (
            <StaggerItem key={item.num} variant="scaleIn" className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/45 hover:shadow-[0_14px_36px_rgba(232,62,116,0.12)] sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full opacity-40 blur-2xl transition-opacity duration-300 group-hover:opacity-75"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(232,62,116,0.7) 0%, rgba(255,107,157,0.3) 40%, transparent 70%)",
                  }}
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--rose)]/60 to-transparent"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#ff6b9d] via-[var(--rose)] to-[var(--rose)] text-white shadow-[0_6px_18px_rgba(232,62,116,0.4)] ring-1 ring-white/20">
                      <span className="font-serif text-[20px] font-bold leading-none">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-[17px] font-normal leading-snug tracking-tight text-black transition-colors group-hover:text-rose sm:text-[18.5px]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
