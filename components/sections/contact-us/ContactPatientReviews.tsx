"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function ContactPatientReviews() {
  const reviews = [
    {
      title: "Fertility Specialist Who Truly Cares",
      text: "Dr. Mona's infectious energy and positivity are truly remarkable. She has a unique ability to make her patients feel at ease and understood, and her passion for helping women navigate the fertility journey is inspiring. Her dedication to empowering women with knowledge and comfort is unparalleled, and we feel grateful to have had the opportunity to get treated by her. If you're seeking a fertility specialist who truly cares, look no further than Dr. Mona - she's a true gem!",
      author: "Vijay Veer",
      source: "Patient review",
      avatarLetter: "V",
      avatarBg: "bg-rose",
    },
    {
      title: "",
      text: "We are forever grateful to Dr. Dahiya for helping us start our family. As a leading fertility specialist, she customized a treatment plan that worked for us when others couldn't. Her expertise in infertility treatment is remarkable, and her warm demeanor made the journey less stressful. She's simply the best IVF doctor.",
      author: "Md Kalam",
      source: "Google patient review",
      avatarLetter: "M",
      avatarBg: "bg-rose-dark",
    },
    {
      title: "",
      text: "We were struggling to conceive for years, but Dr. Mona Dahiya made our dream come true! Her expertise in IVF treatment and compassion are unbeatable. We are now happy that we have got twins in one go. We Thank you, Dr. Mona for your dedication and care.",
      author: "Radha Kishan",
      source: "Google patient review",
      avatarLetter: "R",
      avatarBg: "bg-rose",
    },
  ];

  return (
    <section id="patient-reviews" className="relative overflow-hidden py-14 lg:py-20 bg-white">
      <div className="page-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Reveal variant="fadeUp">
            <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
              Patient reviews
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
              What Patients Say About Dr. Mona
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.12}>
            <p className="mt-2 text-sm sm:text-base text-ink/70">
              Individual experiences in patients&apos; own words.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <StaggerItem key={idx}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-rose/15 bg-gradient-to-b from-[#fff8fb] to-white p-6 sm:p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm fill-current" />
                    ))}
                  </div>

                  {rev.title && (
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-2">
                      {rev.title}
                    </h3>
                  )}

                  <p className="text-xs sm:text-sm leading-relaxed text-ink/80 italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-rose/10 pt-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${rev.avatarBg} text-sm font-bold text-white shadow-sm`}
                  >
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-ink/60">
                      {rev.source}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border-2 border-rose px-6 py-2.5 text-sm font-bold text-rose transition hover:bg-rose hover:text-white shadow-sm"
          >
            Read All Patient Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
