"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const reviews: {
  title?: string;
  review: string;
  initial: string;
  name: string;
  source: string;
}[] = [
  {
    title: "Compassion & Dedication",
    review:
      "I had a fantastic experience with Dr. Mona Dahiya. From the moment we entered their IVF centre, I felt welcome and at ease. Dr. Mona was attentive, listened to my concerns, and explained my condition and treatment options clearly. Her professionalism and expertise shone through. I highly recommend Dr. Mona for her compassionate approach and dedication to patient care.",
    initial: "R",
    name: "Rajesh Shakya",
    source: "Patient review",
  },
  {
    title: "Compassion & Care",
    review:
      "Dr. Mona Dahiya's expertise and compassionate care made our IVF journey a truly positive one. Her guidance throughout ovarian stimulation was exceptional. She clearly explained each step, addressed our concerns with patience, and her constant encouragement made all the difference. Thank you, Dr. Dahiya, for helping make our dream of parenthood a reality.",
    initial: "F",
    name: "Firoj khan",
    source: "Patient review",
  },
  {
    review:
      "Dr. Mona Dahiya's reputation as a top IVF doctor is so well-deserved. Her expertise, combined with her genuine care and compassion, sets her apart. She treated us with respect, listened to our concerns, and empowered us to make informed decisions. Thanks to her, we're now proud parents, and our hearts are overflowing with gratitude.",
    initial: "M",
    name: "Manjesh Rajput",
    source: "Google patient review",
  },
];

export default function EraReviews() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient reviews
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            What Patients Say About Dr. Mona
          </h2>
          <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
            Individual experiences in patients&apos; own words.
          </p>
        </Reveal>

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {reviews.map((rev) => (
            <StaggerItem key={rev.name}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/85 sm:p-7">
                <div>
                  {rev.title ? (
                    <h3 className="font-serif mb-3 text-[1.05rem] font-semibold text-white">
                      {rev.title}
                    </h3>
                  ) : null}
                  <p className="text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                    {rev.review}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                    {rev.initial}
                  </span>
                  <div>
                    <p className="text-[13.5px] leading-tight font-bold text-white">
                      {rev.name}
                    </p>
                    <p className="text-[11.5px] text-slate-400">{rev.source}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="fadeUp" delay={0.1} className="mt-8">
          <Link
            href="/patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:border-[#93c5fd] hover:bg-white/5 hover:text-[#93c5fd]"
          >
            Read All Patient Reviews
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
