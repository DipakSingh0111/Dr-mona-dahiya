"use client";

import { useEffect, useRef, useState } from "react";
import { FaYoutube } from "react-icons/fa";
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
      label: "years in reproductive medicine",
    },
    {
      target: 25000,
      suffix: "+",
      label: "families across India & overseas",
    },
    {
      target: 15000,
      suffix: "+",
      label: "IVF/ICSI cycles",
    },
    {
      target: 100,
      suffix: "+",
      label: "research publications",
    },
    {
      target: 50,
      suffix: "+",
      label: "national & international awards",
    },
    {
      target: 10,
      suffix: "",
      label: "leading fertility centres",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          {/* Left Column: Doctor Bio & CTAs */}
          <Reveal variant="slideLeft" className="w-full">
            <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Meet your doctor
            </span>

            <h2 className="font-display mt-3 text-[1.95rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.5rem] lg:text-[2.75rem]">
              Doctor-led fertility care, backed by{" "}
              <span className="text-[#e83e74]">25+ years of expertise</span>
            </h2>

            <p className="mt-5 text-[14px] leading-relaxed text-[#64748b] sm:text-[15.5px]">
              Dr. Mona Dahiya trained at Lady Hardinge Medical College and Maulana
              Azad Medical College (University of Delhi), where she graduated as a
              gold medalist in both MBBS and MD, and completed her IVF fellowship at
              Singapore General Hospital. She has taught as an associate professor,
              published widely in reproductive medicine, and still meets every
              couple herself at each visit.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:flex-nowrap">
              <a
                href="#book-appointment"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#e83e74] via-[#f0518e] to-[#c53658] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_10px_26px_rgba(232,62,116,0.35)] transition-all hover:brightness-105 active:scale-95"
              >
                Book In-Clinic Consultation
              </a>

              <a
                href="https://www.youtube.com/@drmonadahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-3 text-[13px] font-semibold text-[#0f2438] shadow-sm transition-all hover:border-[#ff0033]/40 hover:bg-[#fff5f7] active:scale-95"
              >
                <FaYoutube className="size-5 text-[#ff0033]" />
                <span>Watch Dr. Mona Dahiya</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column: "Dr. Mona Dahiya at a glance" Stats Card (Home Theme: Royal Navy & Rose) */}
          <Reveal variant="slideRight" className="w-full">
            <div
              ref={cardRef}
              className="rounded-[28px] border border-white/15 p-6 shadow-[0_20px_50px_rgba(0,25,90,0.18)] sm:p-8"
              style={{
                background:
                  "linear-gradient(145deg, #061e52 0%, #08296f 60%, #0047ca 100%)",
              }}
            >
              <h3 className="text-[12.5px] font-bold tracking-[0.14em] text-[#ff8fb3] uppercase sm:text-[13px]">
                Dr. Mona Dahiya at a glance
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/15 pt-6 sm:gap-x-8 sm:gap-y-8">
                {stats.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`pb-2 ${
                      idx < 4 ? "border-b border-white/12 pb-5" : ""
                    }`}
                  >
                    <p className="font-display text-[2.1rem] leading-none font-bold tracking-tight text-white tabular-nums sm:text-[2.5rem]">
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
