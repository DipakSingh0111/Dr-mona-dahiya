"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type HeroCounterItem = {
  /** Final number to count to */
  target: number;
  /** Label under the number — exact screenshot copy */
  label: string;
  /** Text before the number, e.g. ">", "US$", "₹" */
  prefix?: string;
  /** Text after the number, e.g. "+", "%+", "★" */
  suffix?: string;
  /** Decimal places (e.g. 1 for 4.9) */
  decimals?: number;
  /** Optional custom rendered suffix (e.g. star icon) */
  suffixNode?: ReactNode;
  /** Optional static display text (e.g. "24–48 hrs") instead of animated number */
  displayText?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(
  target: number,
  active: boolean,
  decimals = 0,
  duration = 1600,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = easeOutCubic(progress) * target;
      setValue(
        decimals > 0
          ? Number(next.toFixed(decimals))
          : Math.round(next),
      );
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, decimals, duration]);

  return value;
}

function CounterValue({
  item,
  active,
}: {
  item: HeroCounterItem;
  active: boolean;
}) {
  const value = useCountUp(item.target, active, item.decimals ?? 0);
  const formatted =
    item.decimals && item.decimals > 0
      ? value.toFixed(item.decimals)
      : value.toLocaleString("en-IN");

  return (
    <span className="font-serif text-[1.75rem] leading-none font-bold tracking-tight text-rose tabular-nums sm:text-[2.1rem] lg:text-[2.35rem]">
      {item.displayText ?? (
        <>
          {item.prefix ?? ""}
          {formatted}
          {item.suffix ?? ""}
          {item.suffixNode ?? null}
        </>
      )}
    </span>
  );
}

export default function HeroCounterBar({ items }: { items: HeroCounterItem[] }) {
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
    <div
      ref={ref}
      className="mt-8 rounded-2xl border border-rose/15 bg-white px-4 py-5 shadow-sm sm:mt-9 sm:px-6 sm:py-6 lg:mt-10 lg:px-8 lg:py-7"
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {items.map((item) => (
          <div key={item.label} className="min-w-0 text-center sm:text-left">
            <CounterValue item={item} active={active} />
            <p className="mt-1.5 text-[12px] leading-snug font-medium text-ink/70 sm:text-[13px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
