"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function TreatmentSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12 ${className}`}
    >
      <div className="page-container relative">{children}</div>
    </section>
  );
}

export function TreatmentSectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <Reveal variant="fadeUp">
      {eyebrow ? (
        <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-[14px] leading-relaxed text-ink/80 sm:text-[15px]">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
