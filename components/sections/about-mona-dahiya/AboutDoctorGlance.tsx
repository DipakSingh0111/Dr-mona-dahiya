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
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12 border-t border-slate-100">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          {/* Left Column: Doctor Bio & CTAs */}
          <Reveal variant="slideLeft" className="w-full">
            <span className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Know Your Doctor
            </span>

            <h2 className="font-serif mt-3 text-[1.95rem] leading-[1.18] font-bold tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.75rem]">
              25+ years experience in treating fertility patients
            </h2>

            <p className="mt-5 text-[14px] leading-relaxed text-slate-600 sm:text-[15.5px]">
              Dr. Mona Dahiya is MBBS Gold medalist from Lady Hardinge Medical
              College and MD Gold Medalist from Maulana Azad Medical College,
              University of Delhi. She has done her Fellowship in IVF from
              Singapore General Hospital. She was an Associate Professor and has
              published many papers. She will meet you on every visit.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:flex-nowrap">
              <a
                href="#book-consultation"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-rose px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-md transition-all hover:bg-rose-dark active:scale-95"
              >
                Book In-Clinic Consultation
              </a>

              <a
                href="https://www.youtube.com/@drmonadahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-[#fbcfe0] bg-white px-5 py-3 text-[13px] font-semibold text-ink shadow-sm transition-all hover:border-rose hover:text-rose active:scale-95"
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
              className="card-highlight rounded-[28px] border-2 border-[#fbcfe0] bg-white p-6 shadow-[0_20px_50px_rgba(232,62,116,0.12)] backdrop-blur-md sm:p-8"
            >
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-rose animate-pulse" />
                <h3 className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
                  Quick Facts About Dr. Mona Dahiya
                </h3>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-4.5">
                {stats.map((s, idx) => (
                  <div
                    key={s.label}
                    className="group rounded-2xl border border-[#fde2ec] bg-[#fff5f8]/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-rose/50 hover:shadow-[0_10px_28px_rgba(232,62,116,0.14)] sm:p-5"
                  >
                    <p className="font-serif text-[2.1rem] leading-none font-bold tracking-tight text-rose tabular-nums transition-transform duration-300 group-hover:scale-105 sm:text-[2.5rem]">
                      <AnimatedStat
                        target={s.target}
                        suffix={s.suffix}
                        active={active}
                        duration={1500 + idx * 100}
                      />
                    </p>
                    <p className="mt-2 text-[12px] leading-snug font-semibold text-ink sm:text-[13px]">
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
