"use client";

import Link from "next/link";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/ui/treatment/ReviewCard";

export default function BookAppointmentReviews() {
  const { reviews } = siteData.bookAppointmentPage;

  if (!reviews) return null;

  return (
    <section className="relative overflow-hidden bg-pink py-10 sm:py-12 lg:py-16">
      <div className="page-container relative">
        <Reveal variant="fadeUp" className="text-center">
          <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {reviews.eyebrow}
          </span>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {reviews.title}
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-[14px] leading-relaxed text-ink/75 sm:text-[14.5px]">
            {reviews.subtitle}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7"
          stagger={0.08}
        >
          {reviews.items.map((item, idx) => (
            <StaggerItem key={idx} className="h-full">
              <ReviewCard
                name={item.name}
                initial={item.initial}
                source={item.source}
                review={item.review}
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Read All Patient Reviews Button */}
        <Reveal variant="fadeUp" delay={0.1} className="mt-8 text-center sm:mt-10">
          <Link
            href={reviews.cta.href}
            className="inline-flex items-center justify-center rounded-full border border-rose/30 bg-white px-6 py-2.5 text-[13px] font-semibold text-rose shadow-sm transition-all hover:bg-rose hover:text-white hover:shadow-md active:scale-95 sm:text-[14px]"
          >
            {reviews.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

