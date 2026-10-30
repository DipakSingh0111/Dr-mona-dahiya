"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function AboutReviews() {
  const reviews = [
    {
      initial: "S",
      name: "Shivam Singh",
      source: "Google patient review",
      comment:
        "Unlike other fertility doctors who seem to have major Ego issues,Dr Mona Dahiya is so lovable and approachable. She provides individualized attention so that couples feel heard and supported. We were always well-informed for the medicines,tests and costs involved.We will rate her as simply exceptional.",
      reaction: "🔥 1",
      avatarBg: "bg-[#e83e74]",
      accentBorder: "hover:border-[#e83e74]/50",
    },
    {
      initial: "C",
      name: "Chute Yakcho",
      source: "Google patient review",
      comment:
        "Dr. Mona provides ethical infertility care with amazing success results. Her explanations are very clear and the costs are transparent. She prioritizes necessary treatments and has very good infertility experience. I Highly recommend Doctor Mona as one of the Best Fertility doctors in the world today.",
      reaction: null,
      avatarBg: "bg-[#0047ca]",
      accentBorder: "hover:border-[#0047ca]/50",
    },
    {
      initial: "A",
      name: "Atul Rajput",
      source: "Google patient review",
      comment:
        "Choosing IVF procedure was an emotional journey, but Dr. Mona Dahiya's compassionate guidance made all the difference. Her ethical approach and high moral values gave us peace of mind. Today, we hold our healthy baby boy in our arms, forever grateful for the selfless gift of Dr. Dahiya's expertise.",
      reaction: null,
      avatarBg: "bg-[#c53658]",
      accentBorder: "hover:border-[#c53658]/50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Soft ambient theme glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[340px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.12) 0%, rgba(0,71,202,0.08) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Section Header matching Theme */}
        <Reveal className="mb-10 sm:mb-12">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient reviews
          </span>

          <h2 className="font-display mt-2 text-[2rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.65rem] lg:text-[2.85rem]">
            What Patients Say About Dr. Mona
          </h2>

          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Individual experiences in patients&apos; own words.
          </p>
        </Reveal>

        {/* 3 Review Cards Grid matching Theme */}
        <Stagger
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          stagger={0.08}
        >
          {reviews.map((rev) => (
            <StaggerItem key={rev.name} variant="scaleIn" className="h-full">
              <article
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${rev.accentBorder}`}
              >
                <div>
                  {/* Review Text */}
                  <p className="text-[14px] leading-relaxed text-slate-700 sm:text-[14.5px]">
                    &ldquo;{rev.comment}&rdquo;
                  </p>

                  {/* Reaction icon if present */}
                  {rev.reaction && (
                    <div className="mt-3 inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[12px] font-medium text-slate-700 shadow-2xs">
                      <span>{rev.reaction}</span>
                    </div>
                  )}
                </div>

                {/* Author Info matching Theme */}
                <div className="mt-7 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-sm ${rev.avatarBg}`}
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0f2438]">
                      {rev.name}
                    </h3>
                    <p className="text-[12.5px] text-slate-500">{rev.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Action Button matching Theme */}
        <div className="mt-10 sm:mt-12">
          <Link
            href="/patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-[13.5px] font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-[#0047ca] hover:bg-[#0047ca] hover:text-white hover:shadow-md active:scale-98"
          >
            Read All Patient Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
