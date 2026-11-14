"use client";

import Image from "next/image";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import { Reveal } from "@/components/ui/Reveal";

export default function PatientReviewsHero() {
  return (
    <>
      <section
        className="relative overflow-hidden py-8 sm:py-10 lg:py-14"
        style={{ background: "var(--pink)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
          }}
        />

        <div className="page-container relative z-10 w-full">
          <Breadcrumb
            items={[
              { label: "Success Stories", href: "/success-stories" },
              { label: "IVF patient reviews" },
            ]}
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading, Rating & Stats, CTAs */}
            <div className="lg:col-span-7">
              <Reveal variant="slideLeft">
                <p className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
                  Google Verified Patient Reviews
                </p>

                <h1 className="font-serif mt-2 max-w-[34rem] text-[1.85rem] leading-[1.15] font-normal tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.75rem] xl:text-[3rem]">
                  Highest Rated IVF Doctor{" "}
                  <span className="text-rose">in India</span>
                </h1>

                <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[15px]">
                  Every rating below comes from a patient who completed their
                  treatment journey with Dr. Mona Dahiya — unedited, and
                  published exactly as written.
                </p>

                {/* Rating Summary Card */}
                <div className="mt-5 max-w-xl rounded-2xl border border-[#fde2ec] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:mt-6 sm:px-6 sm:py-5">
                  <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                    <div>
                      <p className="font-serif text-[2rem] leading-none font-bold text-ink sm:text-[2.4rem]">
                        4.9
                      </p>
                      <p className="mt-1 text-[10.5px] font-bold tracking-wider text-ink/70 uppercase sm:text-[11px]">
                        Average Rating
                      </p>
                    </div>

                    <div className="min-w-0 flex-1 border-l border-[#fde2ec] pl-5 sm:pl-7">
                      <div
                        className="flex items-center gap-1.5 text-rose"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} className="size-4 sm:size-5" />
                        ))}
                      </div>
                      <p className="mt-1.5 text-[12.5px] font-medium text-ink/80 sm:text-[13.5px]">
                        4.9 out of 5 &middot; across Google and clinic reviews
                      </p>
                    </div>
                  </div>
                </div>

                {/* Two Stat Cards */}
                <div className="mt-3.5 grid max-w-xl grid-cols-2 gap-3.5">
                  <div className="rounded-2xl border border-[#fde2ec] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(232,62,116,0.05)]">
                    <p className="font-serif text-[1.6rem] leading-none font-bold text-ink sm:text-[1.95rem]">
                      1000+
                    </p>
                    <p className="mt-1.5 text-[12px] font-medium text-ink/75 sm:text-[13px]">
                      Patient reviews
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#fde2ec] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(232,62,116,0.05)]">
                    <p className="font-serif text-[1.6rem] leading-none font-bold text-ink sm:text-[1.95rem]">
                      100%
                    </p>
                    <p className="mt-1.5 text-[12px] font-medium text-ink/75 sm:text-[13px]">
                      Patients recommend
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
                  <a
                    href="#book-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-rose px-5 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-[0_8px_22px_rgba(232,62,116,0.3)] transition-all hover:bg-rose-dark active:scale-95 sm:px-6 sm:py-3 sm:text-[13.5px]"
                  >
                    <FaCalendarAlt className="size-3.5" aria-hidden />
                    Book Consultation
                  </a>
                  <a
                    href="#first-cycle"
                    className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-6 sm:py-3 sm:text-[13.5px]"
                  >
                    Read Patient Reviews
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Award Plaque Image */}
            <div className="lg:col-span-5">
              <Reveal variant="scaleIn">
                <div className="relative mx-auto flex max-w-[420px] flex-col items-center justify-center p-4 sm:p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <div className="size-[260px] rounded-full border border-rose/10 sm:size-[300px]" />
                    <div className="absolute size-[340px] rounded-full border border-rose/5 sm:size-[390px]" />
                  </div>

                  <div className="relative z-10 w-full max-w-[260px] sm:max-w-[290px]">
                    <Image
                      src="/images/Best IVF Doctor Award 2026.png"
                      alt="Best IVF Doctor Award 2026 - Dr. Mona Dahiya"
                      width={600}
                      height={740}
                      priority
                      quality={95}
                      className="h-auto w-full object-contain drop-shadow-[0_12px_28px_rgba(15,36,56,0.15)]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#fde2ec]/70 bg-white py-7 sm:py-9">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
              {
                target: 25000,
                suffix: "+",
                label: "patients treated",
              },
              {
                target: 25,
                suffix: "+",
                label: "years' expertise",
              },
              {
                target: 90,
                suffix: "%+",
                label: "IVF success rate",
              },
              {
                target: 15000,
                suffix: "+",
                label: "IVF cycles",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
