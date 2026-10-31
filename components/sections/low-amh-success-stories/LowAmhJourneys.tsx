"use client";

import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface JourneyReview {
  title?: string;
  body: string;
  author: string;
  source: string;
  avatarLetter: string;
}

const reviews: JourneyReview[] = [
  {
    body: "We are immensely grateful to Dr. Mona Dahiya for her expertise in treating my wife's infertility due to low AMH levels. Despite the challenges, Dr. Mona guided us through the IVF process with remarkable care and precision. Thanks to her, we achieved success. She truly is the best doctor for IVF with low AMH in India. 🙏 1",
    author: "Ashok Yadav",
    source: "Google patient review",
    avatarLetter: "A",
  },
  {
    body: "After 3 years of trying to conceive naturally my wife was diagnosed with diminished ovarian reserve (DOR) and low AMH levels. Our journey was emotionally challenging but Dr. Mona Dahiya sorted it for us. With her guidance, we decided to ... More 🙏 1",
    author: "Ganesh Kumar",
    source: "Google patient review",
    avatarLetter: "G",
  },
  {
    title: "Tailored Treatment Plan",
    body: "Facing IVF with low AMH was daunting, but Dr. Mona Dahiya's tailored treatment plan worked wonders. Her unwavering support and positivity helped us achieve a successful pregnancy. She truly is the best IVF doctor.",
    author: "Vikram Gupta",
    source: "Patient review",
    avatarLetter: "V",
  },
];

export default function LowAmhJourneys() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[12%] h-[280px] w-[280px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            Patient stories
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-[#0f2438] sm:text-[2.4rem] lg:text-[2.65rem]">
            Low AMH Journeys in
            <br />
            Patients&apos; Own Words
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Reviews from women who were treated for low ovarian reserve by Dr.
            Mona Dahiya.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {reviews.map((rev, idx) => (
            <StaggerItem key={idx}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#f5c9d6]/70 bg-white p-6 shadow-[0_8px_28px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.12)]">
                <div>
                  <div className="mb-3 text-[#e83e74]/50">
                    <FaQuoteLeft className="h-4 w-4" />
                  </div>
                  {rev.title ? (
                    <h3 className="font-serif mb-2 text-[18px] font-normal text-[#0f2438]">
                      {rev.title}
                    </h3>
                  ) : null}
                  <p className="text-[13.5px] leading-relaxed text-[#475569]">
                    {rev.body}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[#fde2ec] pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[15px] font-bold text-white shadow-md">
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#0f2438]">
                      {rev.author}
                    </p>
                    <p className="text-[11.5px] text-[#94a3b8]">{rev.source}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-7">
          <Link
            href="/about#reviews"
            className="inline-flex items-center justify-center rounded-full border border-[#e83e74]/40 bg-white px-6 py-2.5 text-[13px] font-semibold text-[#0f2438] transition-all duration-200 hover:border-[#e83e74] hover:bg-[#e83e74] hover:text-white hover:shadow-lg active:scale-95"
          >
            Read All Patient Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
