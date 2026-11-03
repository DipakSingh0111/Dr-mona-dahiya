"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedStat({
  target,
  suffix = "",
  active,
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  active: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return (
    <span>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function AboutDoctorGlance() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      target: 25,
      suffix: "+",
      label: "Years Experience",
    },
    {
      target: 25000,
      suffix: "+",
      label: "Patients from India & Abroad",
    },
    {
      target: 15000,
      suffix: "+",
      label: "Cycles done",
    },
    {
      target: 100,
      suffix: "+",
      label: "Publications",
    },
    {
      target: 50,
      suffix: "+",
      label: "Awards",
    },
    {
      target: 10,
      suffix: "",
      label: "Centres across India",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          {/* Left Column: Doctor Bio & CTAs */}
          <Reveal variant="slideLeft" className="w-full">
            <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Know Your Doctor
            </span>

            <h2 className="font-serif mt-3 text-[1.95rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]">
              25+ years experience in treating fertility patients
            </h2>

            <p className="mt-5 text-[14px] leading-relaxed text-slate-300 sm:text-[15.5px]">
              Dr. Mona Dahiya is MBBS Gold medalist from Lady Hardinge Medical
              College and MD Gold Medalist from Maulana Azad Medical College,
              University of Delhi. She has done her Fellowship in IVF from
              Singapore General Hospital. She was an Associate Professor and has
              published many papers. She will meet you on every visit.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:flex-nowrap">
              <a
                href="#book-consultation"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#c53658] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-md transition-all hover:bg-[#a82946] active:scale-95"
              >
                Book In-Clinic Consultation
              </a>

              <a
                href="https://www.youtube.com/@drmonadahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-red-600 text-[9px] text-white">
                  <FaPlay className="ml-0.5" />
                </span>
                <span>Watch Dr. Mona Dahiya</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column: "Quick Facts About Dr. Mona Dahiya" Stats Card */}
          <Reveal variant="slideRight" className="w-full">
            <div
              ref={cardRef}
              className="rounded-[28px] border border-white/15 bg-[#091a3c]/85 p-6 shadow-2xl backdrop-blur-md sm:p-8"
            >
              <h3 className="text-[12.5px] font-bold tracking-[0.14em] text-[#ff8fb3] uppercase sm:text-[13px]">
                Quick Facts About Dr. Mona Dahiya
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/15 pt-6 sm:gap-x-8 sm:gap-y-8">
                {stats.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`pb-2 ${
                      idx < 4 ? "border-b border-white/12 pb-5" : ""
                    }`}
                  >
                    <p className="font-serif text-[2.1rem] leading-none font-bold tracking-tight text-white tabular-nums sm:text-[2.5rem]">
                      <AnimatedStat
                        target={s.target}
                        suffix={s.suffix}
                        active={active}
                        duration={1500 + idx * 100}
                      />
                    </p>
                    <p className="mt-2 text-[12px] leading-snug text-white/80 sm:text-[13px]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
