"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiNotSuitable() {
  const reasons = [
    "Severe male factor infertility",
    "Tubes blocked or damaged",
    "Endometriosis",
    "Previous pelvic infections",
    "Eggs are poor quality",
    "Over 40 may do better with IVF",
  ];

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Left Column: Heading, Subtitle & Checklist */}
          <div className="min-w-0 lg:col-span-7 flex flex-col justify-between">
            <div>
              <Reveal variant="fadeUp">
                <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
                  Other Procedures
                </span>

                <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                  When is IUI not suitable?
                </h2>

                <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
                  IUI can be used as your first attempt to get pregnant, but it may not be suitable for everyone. Below are some reasons why you should not do IUI.
                </p>

                <h3 className="font-serif mt-6 text-[1.05rem] font-semibold text-white sm:text-[1.15rem]">
                  If you have any of these, you
                  <br />
                  may be better suited to do IVF.
                </h3>
              </Reveal>

              {/* Checklist Items */}
              <Stagger className="mt-4 flex flex-col gap-2.5 sm:gap-3" stagger={0.04}>
                {reasons.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#091a3c]/75 px-4 py-3 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-[#0c224e] sm:px-5 sm:py-3.5">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/40">
                        <FaCheck className="size-2.5" />
                      </span>
                      <span className="text-[13px] font-medium text-slate-200 sm:text-[14px]">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              {/* IVF pill button */}
              <Reveal variant="fadeUp" delay={0.2} className="mt-6">
                <Link
                  href="/best-ivf-doctor-in-noida"
                  className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-teal-500/10 px-6 py-2 text-[13px] font-medium text-teal-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white active:scale-95 sm:text-[13.5px]"
                >
                  IVF
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Doctor Photo thumbs up */}
          <div className="relative mx-auto flex w-full max-w-[400px] flex-col lg:col-span-5 lg:h-full lg:max-w-none">
            <Reveal variant="slideRight" delay={0.1} className="relative flex h-full w-full flex-col">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-45 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,62,116,0.3) 0%, rgba(0,71,202,0.2) 60%, transparent 75%)",
                }}
              />
              <div className="relative aspect-[4/5] sm:aspect-[1] min-h-[360px] sm:min-h-[420px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#091a3c] shadow-[0_16px_36px_rgba(0,0,0,0.4)] lg:aspect-auto lg:h-full lg:min-h-0">
                <Image
                  src="/images/about-mona-dahiya/rif-doctor.jpg"
                  alt="Dr. Mona Dahiya — When is IUI not suitable?"
                  fill
                  sizes="(max-width: 1024px) 400px, (max-width: 1280px) 500px, 600px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

