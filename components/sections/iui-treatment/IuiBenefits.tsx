"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiBenefits() {
  const benefits = [
    "We only focus on fertility and have been doing it for over 25 years.",
    "Treatment plan customised to you after diagnostic testing.",
    "Help with counselling, diet and lifestyle changes.",
    "We can offer IVF if IUI is unsuccessful.",
    "We offer both online and in-person consultations.",
    "We will tell you the costs before you start your treatment.",
  ];

  return (
    <section className="relative overflow-hidden bg-pink px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-[#fde2ec]">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Left Column: Title & 6 Benefit Cards */}
          <div className="min-w-0 lg:col-span-7 flex flex-col justify-between">
            <div>
              <Reveal variant="fadeUp">
                <h2 className="font-serif text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
                  Benefits of Doing IUI With Dr. Mona
                </h2>

                <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
                  Below is what you can expect from our clinic.
                </p>
              </Reveal>

              {/* 6 Benefit Cards (2 columns x 3 rows) */}
              <Stagger className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4" stagger={0.05}>
                {benefits.map((text, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white p-4.5 shadow-sm transition-all duration-200 hover:border-[#fbcfe0] hover:bg-[#fff0f5] sm:p-5">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-rose/20 text-rose ring-1 ring-rose/35">
                        <FaCheck className="size-2.5" />
                      </span>
                      <p className="text-[13px] leading-relaxed text-ink font-medium sm:text-[13.5px]">
                        {text}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>

          {/* Right Column: Doctor Photo (Equal Height to Left Content on Desktop) */}
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
              <div className="relative aspect-[4/5] sm:aspect-[1] min-h-[360px] sm:min-h-[420px] w-full overflow-hidden rounded-[24px] border border-[#fde2ec] bg-white shadow-[0_12px_32px_rgba(232,62,116,0.1)] lg:aspect-auto lg:h-full lg:min-h-0">
                <Image
                  src="/images/about-mona-dahiya/iui-benefits-doctor.jpg"
                  alt="Dr. Mona Dahiya — Benefits of Doing IUI With Dr. Mona"
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
