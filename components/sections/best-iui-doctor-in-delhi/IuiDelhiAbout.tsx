"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiDelhiAbout() {
  const requirements = [
    "A bit abnormal semen parameters",
    "Hostile Cervical Mucus",
    "Difficulty Ejaculating or Sexual Dysfunction",
    "Unexplained Infertility for a period of 1 year or more",
    "If you want to use Donor Sperm",
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
                What is IUI?
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                IUI and Why it is done?
              </h2>

              <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
                IUI is where prepared sperm is introduced into the uterus around
                the time of ovulation. This method is less invasive than IVF and
                relatively cheaper. Fewer visits are required.
              </p>

              <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
                Dr Mona can tell you if you are a candidate for IUI and help you
                avoid moving to further procedures if not required. She might
                suggest IUI if you have:
              </p>

              <h3 className="font-serif mt-6 text-[1.05rem] font-semibold text-white sm:text-[1.15rem]">
                Who needs IUI
              </h3>
            </Reveal>

            <Stagger className="mt-4 flex flex-col gap-2.5 sm:gap-3" stagger={0.04}>
              {requirements.map((item) => (
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

            <Reveal variant="fadeUp" delay={0.2} className="mt-6">
              <Link
                href="#iui-steps"
                className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-teal-500/10 px-6 py-2.5 text-[13px] font-medium text-teal-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white active:scale-95 sm:text-[13.5px]"
              >
                To know more about IUI
              </Link>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:col-span-5 lg:max-w-none">
            <Reveal variant="slideRight" delay={0.1}>
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-50 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,62,116,0.3) 0%, rgba(0,71,202,0.2) 60%, transparent 75%)",
                }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-[#091a3c] shadow-[0_16px_36px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/about-mona-dahiya/iui-about-doctor.jpg"
                  alt="Dr. Mona Dahiya — IUI and Why it is done"
                  fill
                  sizes="(max-width: 1024px) 400px, 500px"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
