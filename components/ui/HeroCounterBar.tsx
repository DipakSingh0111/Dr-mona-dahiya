"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { FaStar } from "react-icons/fa";

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

  const isGoogleRating = /google/i.test(item.label);
  const cleanSuffix = isGoogleRating
    ? (item.suffix ?? "").replace(/★/g, "")
    : (item.suffix ?? "");

  return (
    <span className="font-sans text-[1.9rem] leading-none font-bold tracking-tight text-white tabular-nums sm:text-[2.2rem] lg:text-[2.5rem]">
      {item.displayText ?? (
        <>
          {item.prefix ?? ""}
          {formatted}
          {cleanSuffix}
          {item.suffixNode ??
            (isGoogleRating ? (
              <FaStar
                aria-hidden
                className="ml-1.5 inline-block size-[0.72em] align-[-0.04em] text-white"
              />
            ) : null)}
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
    <div ref={ref} className="w-full">
      <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {items.map((item, idx) => (
          <div
            key={item.label}
            className={`flex min-w-0 flex-col items-center justify-center rounded-[24px] px-4 py-5 text-center text-white shadow-md sm:rounded-[28px] sm:px-6 sm:py-6 ${
              idx % 2 === 0 ? "bg-rose" : "bg-navy"
            }`}
          >
            <CounterValue item={item} active={active} />
            <p className="mt-2 text-[13px] leading-snug font-medium text-white/95 sm:text-[14.5px]">
              {item.label.replace(/(^|[\s/–-])([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase())}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
