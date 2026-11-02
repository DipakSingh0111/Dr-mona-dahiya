"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ReviewCard {
  title?: string;
  review: string;
  initial: string;
  name: string;
  label: string;
}

const reviews: ReviewCard[] = [
  {
    title: "Most Knowledgeable IVF Doctor",
    review:
      "Words cannot describe how Dr Mona has changed our life through IVF treatment. She is the most knowledgeable IVF doctor in India and gave us all the time to answer our questions. We were inspired with her down to earth attitude even though she is an Internationally recognized IVF Doctor. We were told that she is a miracle IVF doctor and we agree now. We now have precious baby boy and hope he becomes a Doctor like Dr Mona some day in the future.",
    initial: "S",
    name: "Shiv Kaushal",
    label: "Patient review",
  },
  {
    review:
      "Doctor Mona Dahya is a name synonymous with trust and expertise for infertility treatment in India. Her accurate diagnosis and valuable advice have helped us become parents in this life. Her motivational conversations are very inspiring and uplifting. She is a true legend in the field of infertility treatment and a wonderful human being.",
    initial: "Y",
    name: "Yatendra Yadav",
    label: "Google patient review",
  },
  {
    review:
      "Dr Mona's Clinic is one of the leading IVF Clinics in India. Dr. Mona Dahiya offers outstanding care and expertise. Her commitment to her patients is evident in every interaction. We felt confident and reassured throughout our treatment, and we highly recommend her IVF clinic in India to anyone struggling with infertility.",
    initial: "S",
    name: "Suman Mishra",
    label: "Google patient review",
  },
];

export default function FemalePatientReviews() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Eyebrow & Title */}
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

        {/* 3 Review Cards Grid */}
        <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {reviews.map((rev, idx) => (
            <StaggerItem key={idx}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/70 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/85">
                <div>
                  {rev.title && (
                    <h3 className="font-serif text-[1.12rem] font-semibold text-white mb-3">
                      {rev.title}
                    </h3>
                  )}
                  <p className="text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                    {rev.review}
                  </p>
                </div>

                {/* Patient Signature */}
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                    {rev.initial}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-white leading-tight">
                      {rev.name}
                    </p>
                    <p className="text-[11.5px] text-slate-400">
                      {rev.label}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Read All Patient Reviews Button */}
        <Reveal variant="fadeUp" delay={0.1} className="mt-8">
          <Link
            href="/patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-[#0a1e3b]/80 px-5 py-2.5 text-[13px] font-semibold text-teal-300 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-500/20 hover:text-white"
          >
            Read All Patient Reviews
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

