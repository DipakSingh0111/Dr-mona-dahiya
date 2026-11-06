"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type AboutReviewsProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  sectionBg?: string;
};

export default function AboutReviews({
  eyebrow = "Reviews",
  title = "Feedback From Our Patients.",
  subtitle = "Here are some of the feedback from our patients.",
  ctaLabel = "View More Reviews",
  sectionBg = "bg-white border-t border-rose/15",
}: AboutReviewsProps = {}) {
  const reviews = [
    {
      initial: "S",
      name: "Shivam Singh",
      source: "Google patient review",
      comment:
        "Unlike other fertility doctors who seem to have major Ego issues,Dr Mona Dahiya is so lovable and approachable. She provides individualized attention so that couples feel heard and supported. We were always well-informed for the medicines,tests and costs involved.We will rate her as simply exceptional.",
      reaction: "🔥 1",
      avatarBg: "bg-rose",
    },
    {
      initial: "C",
      name: "Chute Yakcho",
      source: "Google patient review",
      comment:
        "Dr. Mona provides ethical infertility care with amazing success results. Her explanations are very clear and the costs are transparent. She prioritizes necessary treatments and has very good infertility experience. I Highly recommend Doctor Mona as one of the Best Fertility doctors in the world today.",
      avatarBg: "bg-rose",
    },
    {
      initial: "A",
      name: "Atul Rajput",
      source: "Google patient review",
      comment:
        "Choosing IVF procedure was an emotional journey, but Dr. Mona Dahiya's compassionate guidance made all the difference. Her ethical approach and high moral values gave us peace of mind. Today, we hold our healthy baby boy in our arms, forever grateful for the selfless gift of Dr. Dahiya's expertise.",
      avatarBg: "bg-rose",
    },
  ];

  return (
    <section
      id="reviews"
      className={`relative overflow-hidden py-8 sm:py-10 lg:py-12 ${sectionBg}`}
    >
      <div className="page-container relative">
        <Reveal className="mb-8">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {eyebrow}
          </p>

          <h2 className="font-serif mt-1.5 text-[1.95rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.6rem]">
            {title}
          </h2>

          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/80 sm:text-[14.5px]">
            {subtitle}
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.08}
        >
          {reviews.map((rev) => (
            <StaggerItem key={rev.name} variant="scaleIn" className="h-full">
              <article className="card-highlight group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-rose/20 bg-white p-6 shadow-[0_4px_18px_rgba(232,62,116,0.06)] transition-all duration-300 hover:border-rose/40 hover:shadow-[0_12px_28px_rgba(232,62,116,0.12)] sm:p-7">
                <div>
                  <p className="text-[13.5px] leading-relaxed text-ink/85 sm:text-[14px]">
                    {rev.comment}
                  </p>
                  {rev.reaction ? (
                    <p className="mt-2 text-[13px] text-ink/85">
                      {rev.reaction}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-rose/15 pt-5">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white shadow-sm ${rev.avatarBg}`}
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">
                      {rev.name}
                    </h3>
                    <p className="text-[12px] text-ink/65">{rev.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-rose/40 bg-white px-6 py-2.5 text-[13px] font-semibold text-ink shadow-sm transition-all duration-200 hover:border-rose hover:bg-pink hover:text-rose active:scale-95 sm:text-[13.5px]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
