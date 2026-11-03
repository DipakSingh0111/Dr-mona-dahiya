"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiGhaziabadAbout() {
  const checklist = [
    "Male factor subfertility",
    "If you have a cervical factor",
    "Unexplained infertility for more than 1 year",
    "Endometriosis and PCOS with poor ovulation",
    "If you require insemination with donor's sperm",
  ];

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-between min-w-0 lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
                What is IUI?
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.6rem]">
                IUI in simple words
              </h2>

              <p className="mt-3.5 text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
                Intra Uterine Insemination (IUI) is where the best quality sperm is injected in the uterus during the time of ovulation. It is a cheaper and easier procedure compared to IVF. It requires less visits as well.
              </p>

              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
                Dr Mona will evaluate you and tell you if IUI is the right option for you before you proceed to other procedures. Here are some scenarios where she may recommend IUI.
              </p>

              <h3 className="font-serif mt-6 text-[1.15rem] font-medium text-white sm:text-[1.25rem]">
                IUI may be helpful in the following cases
              </h3>
            </Reveal>

            {/* Checklist */}
            <Stagger className="mt-4 flex flex-col gap-2.5 sm:gap-3" stagger={0.05}>
              {checklist.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 rounded-xl border border-teal-500/30 bg-[#091a3c]/60 px-4 py-2.5 backdrop-blur-md transition-all hover:border-teal-500/50 hover:bg-[#0c224e]">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                      <FaCheck className="size-2.5" />
                    </span>
                    <span className="text-[13px] font-medium text-slate-200 sm:text-[13.5px]">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Learn about IUI Button */}
            <Reveal variant="fadeUp" delay={0.2} className="mt-6">
              <a
                href="#iui-steps"
                className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-teal-500/10 px-6 py-2.5 text-[13px] font-medium text-teal-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white active:scale-95 sm:text-[13.5px]"
              >
                Learn about IUI
              </a>
            </Reveal>
          </div>

          {/* Right Column: Doctor in Armchair Photo */}
          <div className="flex min-w-0 lg:col-span-5">
            <Reveal
              variant="slideRight"
              delay={0.1}
              className="relative mx-auto w-full max-w-[420px] self-stretch lg:mx-0 lg:max-w-none"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-50 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,62,116,0.3) 0%, rgba(59,130,246,0.2) 50%, transparent 75%)",
                }}
              />
              <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-[24px] border-4 border-white bg-[#091a3c] shadow-[0_18px_40px_rgba(0,18,60,0.5)] sm:rounded-[28px] sm:min-h-[460px] lg:min-h-0">
                <Image
                  src="/images/about-mona-dahiya/iui-about-doctor.jpg"
                  alt="Dr. Mona Dahiya — IUI in simple words"
                  fill
                  sizes="(max-width: 1024px) 420px, 480px"
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

