"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const reviews = [
  {
    name: "Vipin Pal",
    initial: "V",
    review:
      "Dr. Mona Dahiya is the best IVF doctor in Delhi! Her wealth of experience and dedication to personalized care made all the difference during our treatment. The success rates at Little Angel IVF are exceptional, and Dr. Dahiya's support kept us positive throughout our journey. We couldn't be happier with the results!",
    source: "Google patient review",
  },
  {
    name: "Bantu Pal",
    initial: "B",
    review:
      "When we started our search for top fertility clinics in India, Dr. Mona Dahiya's clinic in Delhi stood out. The state-of-the art facilities and her personalized care plan gave us hope. Her dedication and attention to detail were remarkable, leading to our successful IVF treatment. We couldn't be happier!",
    source: "Google patient review",
  },
  {
    name: "Updesh Pal",
    initial: "U",
    review:
      "After years of trying, Dr. Mona Dahiya made our dream of parenthood a reality. Her expertise in IVF is unmatched in Delhi. She's compassionate, patient, and truly invested in her patients' success. We're forever grateful to her for what she has done for us.",
    source: "Google patient review",
  },
];

export default function BestIvfDelhiReviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            Patient reviews
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            What Patients in Delhi Say
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
            Reviews from patients who mention Delhi. These are individual
            experiences in patients&apos; own words.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3"
          stagger={0.08}
        >
          {reviews.map((item) => (
            <StaggerItem key={item.name} className="h-full">
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/85 sm:p-7">
                <p className="text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                  &ldquo;{item.review}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                    {item.initial}
                  </span>
                  <div>
                    <p className="text-[13.5px] leading-tight font-bold text-white">
                      {item.name}
                    </p>
                    <p className="text-[11.5px] text-slate-400">{item.source}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="fadeUp" delay={0.2} className="mt-8 flex justify-center">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-[#0037a3] hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:text-[14px]"
          >
            Read All Patient Reviews
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
