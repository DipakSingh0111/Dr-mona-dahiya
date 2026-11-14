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
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Left Column: Heading, Subtitle & Checklist */}
          <div className="min-w-0 lg:col-span-7 flex flex-col justify-between">
            <div>
              <Reveal variant="fadeUp">
                <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
                  Other Procedures
                </span>

                <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
                  When is IUI not suitable?
                </h2>

                <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
                  IUI can be used as your first attempt to get pregnant, but it may not be suitable for everyone. Below are some reasons why you should not do IUI.
                </p>

                <h3 className="font-serif mt-6 text-[1.05rem] font-bold text-ink sm:text-[1.15rem]">
                  If you have any of these, you
                  <br />
                  may be better suited to do IVF.
                </h3>
              </Reveal>

              {/* Checklist Items */}
              <Stagger className="mt-4 flex flex-col gap-2.5 sm:gap-3" stagger={0.04}>
                {reasons.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3 rounded-xl border border-[#fde2ec] bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-[#fbcfe0] hover:bg-[#fff0f5] sm:px-5 sm:py-3.5">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white shadow-[0_4px_12px_rgba(232,62,116,0.3)]">
                        <FaCheck className="size-2.5" />
                      </span>
                      <span className="text-[13px] font-medium text-ink sm:text-[14px]">
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
                  className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-6 py-2 text-[13px] font-semibold text-blue shadow-sm transition-all duration-200 hover:border-blue hover:bg-blue hover:text-white active:scale-95 sm:text-[13.5px]"
                >
                  IVF
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Clean real Doctor Photo */}
          <div className="relative mx-auto flex w-full max-w-[400px] flex-col lg:col-span-5 lg:h-full lg:max-w-none">
            <Reveal variant="slideRight" delay={0.1} className="relative flex h-full w-full flex-col">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-40 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,62,116,0.25) 0%, rgba(0,71,202,0.15) 60%, transparent 75%)",
                }}
              />
              <div className="relative aspect-[4/5] sm:aspect-[1] min-h-[360px] sm:min-h-[420px] w-full overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:rounded-[28px] lg:aspect-auto lg:h-full lg:min-h-0">
                <Image
                  src="/images/best-iui-procedures.jpg"
                  alt="Dr. Mona Dahiya — When is IUI not suitable?"
                  fill
                  quality={95}
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
