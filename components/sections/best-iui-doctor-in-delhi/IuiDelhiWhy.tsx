"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiDelhiWhy() {
  const reasons = [
    "Over 25 years of experience in the field of fertility",
    "Gold Medalist in MBBS and MD, DNB and fellowship from Singapore",
    "Perform all baseline tests before initiating any stimulation",
    "Suggest moving to IVF after 3 to 4 cycles of IUI",
    "Use Andrology department for preparation of sperm for IUI",
    "Clinic located in Lajpat Nagar South Delhi",
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#fde2ec] bg-pink py-8 sm:py-10 lg:py-14">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="flex min-w-0 flex-col justify-between lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
                Why Choose Us For IUI
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
                Reasons To See Dr. Mona Dahiya For IUI
              </h2>
            </Reveal>

            <Stagger
              className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4"
              stagger={0.05}
            >
              {reasons.map((text) => (
                <StaggerItem key={text}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-[#fde2ec] bg-white p-4.5 backdrop-blur-md transition-all duration-200 hover:border-[#fbcfe0] hover:bg-[#fff0f5] sm:p-5">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-rose/20 text-rose ring-1 ring-rose/35">
                      <FaCheck className="size-2.5" />
                    </span>
                    <p className="text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                      {text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="relative mx-auto flex w-full max-w-[400px] flex-col lg:col-span-5 lg:h-full lg:max-w-none">
            <Reveal
              variant="slideRight"
              delay={0.1}
              className="relative flex h-full w-full flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-45 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,62,116,0.3) 0%, rgba(0,71,202,0.2) 60%, transparent 75%)",
                }}
              />
              <div className="relative aspect-[1.08/1] min-h-[340px] w-full overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[400px] lg:aspect-auto lg:h-full lg:min-h-0">
                <Image
                  src="/images/why-choose-IUI.jpg"
                  alt="Dr. Mona Dahiya — Reasons To See Dr. Mona Dahiya For IUI"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 420px, (max-width: 1280px) 520px, 600px"
                  className="object-cover object-[54%_center]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
