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
        "Unlike other fertility doctors who seem to have major Ego issues,Dr Mona Dahiya is so lovable and approachable. She provides individualized attention so that couples feel heard and supported. We were always well-informed for the medicines,tests and costs involved.We will rate her as simply exceptional. 🔥 1",
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
    <section id="reviews" className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 border-t border-slate-100">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-8">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            Reviews
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Feedback From Our Patients.
          </h2>

          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
            Here are some of the feedback from our patients.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.08}
        >
          {reviews.map((rev) => (
            <StaggerItem key={rev.name} variant="scaleIn" className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#fde2ec] bg-white p-6 shadow-sm transition-all duration-300 hover:border-rose/40 hover:bg-[#fff0f5] hover:shadow-md sm:p-7">
                <div>
                  <p className="text-[13.5px] leading-relaxed text-slate-700 sm:text-[14px]">
                    {rev.comment}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-[#fde2ec] pt-5">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white shadow-sm ${rev.avatarBg}`}
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">
                      {rev.name}
                    </h3>
                    <p className="text-[12px] text-slate-500">{rev.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-rose/40 bg-white px-6 py-2.5 text-[13px] font-semibold text-ink shadow-sm transition-all duration-200 hover:border-rose hover:bg-[#fff0f5] hover:text-rose active:scale-95 sm:text-[13.5px]"
          >
            View More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
