"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function IuiDelhiReviews() {
  return (
    <section className="relative overflow-hidden border-t border-[#fde2ec] bg-pink px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose sm:text-[13px]">
            Patient reviews
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Google patient reviews
          </h2>

          <p className="mt-2.5 text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
            Patient words, shown exactly as written.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-5">
            <Reveal variant="fadeUp">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-6 backdrop-blur-md">
                <p className="text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                  We have got our little Angel and we are elated. Dr Mona Maam
                  thanks for your warmth and encouragement. Grateful forever.
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#fde2ec] pt-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white">
                    R
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-black">
                      Ritu &amp; Sanjay
                    </p>
                    <p className="text-[11px] text-black">
                      Google patient review
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.05}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-6 backdrop-blur-md">
                <div>
                  <h3 className="font-serif text-[1.1rem] font-medium text-black sm:text-[1.2rem]">
                    Compassionate Approach
                  </h3>
                  <p className="mt-4 text-[12.5px] leading-relaxed text-black sm:text-[13px]">
                    We are so grateful to Dr. Mona Dahiya for her exceptional
                    care during our IUI treatment at Apollo Fertility Clinic in
                    Noida. Her expertise and support made the process smooth and
                    hopeful. Thanks to her guidance, the timing of the procedure
                    aligned perfectly with our cycle. Dr. Mona&apos;s
                    compassionate approach and the clinic&apos;s professionalism
                    truly boosted our chances of pregnancy. We highly recommend
                    her to anyone seeking IUI treatment. Thank you, Dr. Mona,
                    for helping us on our journey to parenthood.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-[#fde2ec] pt-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white">
                    S
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-black">
                      Surja Lohar
                    </p>
                    <p className="text-[11px] text-black">
                      Google patient review
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fadeUp" delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-6 backdrop-blur-md sm:p-7">
              <div>
                <h3 className="font-serif text-[1.1rem] font-medium text-black sm:text-[1.2rem]">
                  Exceptional Knowledge &amp; Patience
                </h3>
                <p className="mt-4 text-[12.5px] leading-relaxed text-black sm:text-[13px]">
                  Our first online consultation with Dr. Mona was a game-changer.
                  From the moment we connected, we felt a sense of comfort and
                  trust that&apos;s rare in the fertility world. Dr. Mona&apos;s
                  exceptional knowledge, patience, and thoroughness put us at
                  ease, and her ability to explain complex concepts in a clear
                  and concise manner was impressive. We appreciated her
                  willingness to take the time to understand our unique situation
                  and provide us with detailed options for moving forward. Her
                  guidance was invaluable, and we&apos;re grateful for her
                  knowledge. We&apos;re excited to embark on our first IUI cycle
                  in December, and we&apos;re confident that Dr. Mona&apos;s care
                  will help us achieve our goal to start a family with IUI
                  Treatment. If you&apos;re seeking a fertility specialist who
                  will treat you with concern and an intention to really help
                  look no further than Dr. Mona Dahiya.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-[#fde2ec] pt-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white">
                  S
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-black">
                    Shashank Mishra
                  </p>
                  <p className="text-[11px] text-black">
                    Google patient review
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fadeUp" delay={0.15} className="mt-8">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-2.5 text-[13px] font-medium text-black transition-all duration-200 hover:border-blue/60 hover:bg-blue/10 hover:text-blue active:scale-95 sm:text-[13.5px]"
          >
            Read more patient journeys and reviews
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
