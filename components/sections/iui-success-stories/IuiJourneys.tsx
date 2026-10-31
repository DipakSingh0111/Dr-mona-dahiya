"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const reviews = [
  {
    body: "As a PCOS patient, my wife never thought to conceive naturally. However, Dr. Mona Dahiya's tailored treatment and carefully timed IUI gave us hope again. She explained every step clearly and stayed with us through the cycle. She is Truly the best IVF doctor in Delhi.",
    author: "Gopi Shakya",
    source: "Google patient review",
    initial: "G",
  },
  {
    body: "Do not be scared of invasive procedures is what we can share. Dr. Mona uses latest techniques to minimize discomfort during fertility treatment. Her gentle approach and clear guidance made IUI comfortable. We have got 3 babies with the help of Dr Mona through IUI/IVF.",
    author: "Scout pharoah",
    source: "Google patient review",
    initial: "S",
  },
  {
    body: "Nobody knows as much about ART and reproductive medicine than her. Our story is about 5 years of struggle before we met Dr. Mona. With her IUI protocol and careful monitoring we finally conceived. Forever grateful. 🔥 1",
    author: "Ajay Shakya",
    source: "Google patient review",
    initial: "A",
  },
];

export default function IuiJourneys() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            Patient stories
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-[#0f2438] sm:text-[2.4rem] lg:text-[2.65rem]">
            IUI Journeys in Patients&apos; Own Words
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Reviews from couples who conceived with IUI under Dr. Mona Dahiya.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {reviews.map((rev) => (
            <StaggerItem key={rev.author}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-[#f5c9d6]/70 bg-white p-6 shadow-[0_8px_28px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.12)]">
                <p className="text-[13.5px] leading-relaxed text-[#475569]">
                  {rev.body}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#fde2ec] pt-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[15px] font-bold text-white">
                    {rev.initial}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-[#0f2438]">
                      {rev.author}
                    </p>
                    <p className="text-[11.5px] text-[#94a3b8]">{rev.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-7">
          <Link
            href="/about#reviews"
            className="inline-flex items-center justify-center rounded-full border border-[#e83e74]/40 bg-white px-6 py-2.5 text-[13px] font-semibold text-[#0f2438] transition-all hover:border-[#e83e74] hover:bg-[#e83e74] hover:text-white active:scale-95"
          >
            Read All Patient Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
