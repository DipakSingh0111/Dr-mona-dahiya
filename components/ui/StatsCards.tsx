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
      <Stagger className="grid grid-cols-2 gap-5 xl:gap-6" stagger={0.08}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label} variant="scaleIn" className="min-w-0">
            <div className="stat-tile flex h-full flex-col justify-center rounded-2xl border border-white/30 bg-[rgba(255,255,255,0.1)] px-5 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-[3px] xl:px-6 xl:py-4">
              <p className="stat-value font-display text-[1.75rem] leading-none font-bold tracking-tight whitespace-nowrap text-white tabular-nums xl:text-[2.25rem]">
                <StatValue stat={stat} active={active} />
              </p>
              <p className="stat-label mt-2 text-[13px] leading-snug font-medium whitespace-nowrap text-white/85 xl:mt-2 xl:text-[14.5px]">
                {stat.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

