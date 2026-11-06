"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiAbout() {
  const requirements = [
    "Irregular cycles",
    "Been unable to conceive after 1 year",
    "Mild male factor",
    "Need for donor sperm",
    "Cervical factor",
    "Unknown cause",
  ];

  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-14 border-t border-[#fde2ec]">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content + Checklist */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
                What is IUI?
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
                More about IUI.
              </h2>

              <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
                Intrauterine insemination, or IUI, is when sperm is introduced into the uterus. This can be done closer to ovulation and is a less invasive technique than IVF. It also requires fewer clinic visits.
              </p>

              <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
                Dr. Mona may do IUI if you fulfill these requirements. A few examples are below.
              </p>

              <h3 className="font-serif mt-6 text-[1.05rem] font-bold text-ink sm:text-[1.15rem]">
                Women can undergo IUI if they have
              </h3>
            </Reveal>

            {/* Checklist Bars */}
            <Stagger className="mt-4 flex flex-col gap-2.5 sm:gap-3" stagger={0.04}>
              {requirements.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 rounded-xl border-4 border-white bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-[#fbcfe0] hover:bg-[#fff0f5] sm:px-5 sm:py-3.5">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35">
                      <FaCheck className="size-2.5" />
                    </span>
                    <span className="text-[13px] font-medium text-ink sm:text-[14px]">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal variant="fadeUp" delay={0.2} className="mt-6">
              <Link
                href="#iui-steps"
                className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-6 py-2.5 text-[13px] font-semibold text-blue shadow-sm transition-all duration-200 hover:border-blue hover:bg-blue hover:text-white active:scale-95 sm:text-[13.5px]"
              >
                Learn more about IUI treatment
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Doctor Photo */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:col-span-5 lg:max-w-none">
            <Reveal variant="slideRight" delay={0.1}>
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-40 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,62,116,0.25) 0%, rgba(0,71,202,0.15) 60%, transparent 75%)",
                }}
              />
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(232,62,116,0.12)]">
                <Image
                  src="/images/best-iui-doctor.jpg"
                  alt="Dr. Mona Dahiya — More about IUI"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 400px, 520px"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
