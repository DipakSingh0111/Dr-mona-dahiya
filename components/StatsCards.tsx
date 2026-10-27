"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  icon: string;
  value: string;
  label: string;
  target: number;
  suffix?: string;
  prefix?: string;
  from?: number;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatValue({
  stat,
  active,
}: {
  stat: StatItem;
  active: boolean;
}) {
  const isRange = stat.from != null;
  const primary = useCountUp(stat.target, active);
  const secondary = useCountUp(stat.from ?? 0, active && isRange);

  if (isRange) {
    return (
      <span>
        {secondary}-{primary}
        {stat.suffix ?? ""}
      </span>
    );
  }

  return (
    <span>
      {stat.prefix ?? ""}
      {primary.toLocaleString("en-IN")}
      {stat.suffix ?? ""}
    </span>
  );
}

export default function StatsCards({ stats }: { stats: StatItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid w-full grid-cols-2 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/20 bg-white/[0.04] px-5 py-4 backdrop-blur-[3px] transition-colors hover:border-white/35 sm:px-6 sm:py-5"
        >
          <p className="text-[2rem] leading-none font-bold tracking-tight text-white tabular-nums sm:text-[2.25rem]">
            <StatValue stat={stat} active={active} />
          </p>
          <p className="mt-2.5 text-[13px] font-medium leading-snug text-white/85 sm:text-[14px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
