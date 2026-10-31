"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface JourneyReview {
  title?: string;
  body: string;
  author: string;
  source: string;
  initial: string;
  avatarBg: string;
  accentBorder: string;
}

const reviews: JourneyReview[] = [
  {
    title: "Pregnancy in the 1st IVF Cycle",
    body: "After extensive online research for the Best IVF doctor in Ghaziabad, we consulted Dr. Mona Dahiya. We were amazed with her complete knowledge of IVF treatment. Her IVF clinic in Ghaziabad has very good fertility testing facilities. Her team is also very knowledge and supportive. The care that we got though the entire IVF process were incredible. The frozen embryo transfer done by her was spot on and we had a healthy pregnancy in the first IVF Cycle. We are forever grateful to her for helping us expand our family.",
    author: "Vinesh",
    source: "Patient review",
    initial: "V",
    avatarBg: "bg-[#e83e74]",
    accentBorder: "hover:border-[#e83e74]/50",
  },
  {
    title: "Best IVF Success Rates.",
    body: "Dr Mona did our Egg retrieval herself and that too on a holiday. She is very good with ultrasound check-ups to find out any deviations. We did not feel any unease in the embryo transfer process. We had amazing results and a successful first transfer. My wife is 12 weeks pregnant and we would highly recommend Dr Mona's IVF Clinic in Delhi for best IVF success rates.",
    author: "Gaurav Baghel",
    source: "Patient review",
    initial: "G",
    avatarBg: "bg-[#0047ca]",
    accentBorder: "hover:border-[#0047ca]/50",
  },
  {
    body: "Dr. Dahiya doesn't believe in a general approach for fertility treatment. She analyzed our case deeply and designed a tailored IVF plan that worked in the first IVF cycle. Her dedication makes her the Best Fertility Doctor in Ghaziabad. Thank you for our precious blessing and wish you infinite success.",
    author: "Arbaj khan",
    source: "Google patient review",
    initial: "A",
    avatarBg: "bg-[#c53658]",
    accentBorder: "hover:border-[#c53658]/50",
  },
  {
    body: "Dr Mona is a really good fertility doctor in Delhi. She has a very patient focussed approach which is unheard of these days with such famous doctors in Delhi. She came across as very genuine in every consultation. Her treatment was precise and it has resulted in a positive result in the First IVF Cycle.",
    author: "Brahm Prakash",
    source: "Google patient review",
    initial: "B",
    avatarBg: "bg-[#0047ca]",
    accentBorder: "hover:border-[#0047ca]/50",
  },
  {
    title: "Incredibly Talented IVF Doctor",
    body: "I sincerely thank Dr Mona Dahiya and her Medical Team for being very supportive in our infertility journey. She is an incredibly talented IVF Doctor in Ghaziabad with magical hands. She diagnosed our infertility problems and did the best possible IVF procedure to make us parents in the first IVF Cycle.",
    author: "Udaryaj Saroj",
    source: "Patient review",
    initial: "U",
    avatarBg: "bg-[#e83e74]",
    accentBorder: "hover:border-[#e83e74]/50",
  },
  {
    body: "We got excellent fertility counselling at her IVF centre in noida.we became pregnant in the 1st IVF cycle.",
    author: "Aman goswami123",
    source: "Google patient review",
    initial: "A",
    avatarBg: "bg-[#c53658]",
    accentBorder: "hover:border-[#c53658]/50",
  },
];

export default function IVFJourneys() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[340px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.12) 0%, rgba(0,71,202,0.08) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-8 sm:mb-10">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient stories
          </span>

          <h2 className="font-display mt-2 text-[2rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.5rem] lg:text-[2.75rem]">
            IVF Journeys in Patients&apos; Own Words
          </h2>

          <p className="mt-2 text-[14px] text-slate-600 sm:text-[15px]">
            Reviews from couples who completed IVF or ICSI with Dr. Mona Dahiya.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.06}
        >
          {reviews.map((rev, index) => (
            <StaggerItem key={index} variant="scaleIn" className="h-full">
              <article
                className={`flex h-full flex-col justify-between rounded-[22px] border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 ${rev.accentBorder} hover:-translate-y-1 hover:shadow-lg`}
              >
                <div>
                  {rev.title ? (
                    <h3 className="font-display mb-3 text-[16px] font-bold text-[#0f2438]">
                      {rev.title}
                    </h3>
                  ) : null}

                  <p className="text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                    {rev.body}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full ${rev.avatarBg} text-[13px] font-bold text-white shadow-xs`}
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0f2438]">
                      {rev.author}
                    </h4>
                    <p className="text-[12px] text-slate-500">{rev.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-9 sm:mt-11">
          <Link
            href="/about#reviews"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-[13.5px] font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-[#e83e74] hover:bg-[#e83e74] hover:text-white hover:shadow-lg hover:shadow-[#e83e74]/25 active:scale-98"
          >
            Read All Patient Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
