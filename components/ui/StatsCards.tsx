"use client";

import { useEffect, useRef, useState } from "react";
import { Stagger, StaggerItem } from "./Reveal";

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
    if (!active) return;

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
    <div ref={ref} className="w-full">
      <Stagger className="grid grid-cols-2 gap-3 xl:gap-4" stagger={0.08}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label} variant="scaleIn" className="min-w-0">
            <div className="stat-tile flex h-full flex-col justify-center rounded-2xl border border-white/25 bg-[rgba(255,255,255,0.08)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] xl:px-5 xl:py-3.5">
              <p className="stat-value font-display text-[1.45rem] leading-none font-bold tracking-tight whitespace-nowrap text-white tabular-nums xl:text-[2rem]">
                <StatValue stat={stat} active={active} />
              </p>
              <p className="stat-label mt-1 text-[11.5px] leading-snug font-medium whitespace-nowrap text-white/85 xl:mt-1.5 xl:text-[13px]">
                {stat.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

