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
      avatarBg: "bg-[#e83e74]",
    },
    {
      initial: "C",
      name: "Chute Yakcho",
      source: "Google patient review",
      comment:
        "Dr. Mona provides ethical infertility care with amazing success results. Her explanations are very clear and the costs are transparent. She prioritizes necessary treatments and has very good infertility experience. I Highly recommend Doctor Mona as one of the Best Fertility doctors in the world today.",
      avatarBg: "bg-[#e83e74]",
    },
    {
      initial: "A",
      name: "Atul Rajput",
      source: "Google patient review",
      comment:
        "Choosing IVF procedure was an emotional journey, but Dr. Mona Dahiya's compassionate guidance made all the difference. Her ethical approach and high moral values gave us peace of mind. Today, we hold our healthy baby boy in our arms, forever grateful for the selfless gift of Dr. Dahiya's expertise.",
      avatarBg: "bg-[#e83e74]",
    },
  ];

  return (
    <section id="reviews" className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-8">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
            Reviews
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Feedback From Our Patients.
          </h2>

          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
            Here are some of the feedback from our patients.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.08}
        >
          {reviews.map((rev) => (
            <StaggerItem key={rev.name} variant="scaleIn" className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-white/10 bg-[#091a3c]/75 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#e83e74]/40 hover:bg-[#0c224e] sm:p-7">
                <div>
                  <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14px]">
                    {rev.comment}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-white/10 pt-5">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white shadow-sm ${rev.avatarBg}`}
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-white">
                      {rev.name}
                    </h3>
                    <p className="text-[12px] text-slate-400">{rev.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-teal-500/10 px-6 py-2.5 text-[13px] font-medium text-teal-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white active:scale-95 sm:text-[13.5px]"
          >
            View More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
