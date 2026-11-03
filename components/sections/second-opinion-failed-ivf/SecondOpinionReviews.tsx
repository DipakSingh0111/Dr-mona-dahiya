"use client";

import Link from "next/link";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SecondOpinionReviews() {
  const reviews = [
    {
      title: "Superb Infertility Specialist",
      quote:
        "Dr. Mona Dahiya is superb infertility specialist. She expertly diagnosed and treated our uterine issues, including polyps and fibroids, because of which we were not able to conceive. Her thorough approach and attention to detail, especially in managing adhesions from past surgeries, was incredible. I highly recommend her as the best infertility doctor.",
      author: "Sachin Upadhyay",
      source: "Patient review",
      initial: "S",
      color: "bg-[#e83e74]",
    },
    {
      title: "",
      quote:
        "We are immensely grateful to Dr. Mona Dahiya for her expertise in treating my wife's infertility due to low AMH levels. Despite the challenges, Dr. Mona guided us through the IVF process with remarkable care and precision. Thanks to her, we achieved success. She truly is the best doctor for IVF with low AMH in India. 🙏",
      author: "Ashok Yadav",
      source: "Google patient review",
      initial: "A",
      color: "bg-[#0047ca]",
    },
    {
      title: "",
      quote:
        "Her fertility clinic is a boon for patients with complex infertility problems. Dr Mona is really good is what we can say. Her experience and success rates are one of the best in India. Her team is very friendly and cooperative. Our recommendation is that you should obviously meet her for the right guidance.",
      author: "Anand Kumar",
      source: "Google patient review",
      initial: "A",
      color: "bg-[#0d9488]",
    },
  ];

  return (
    <section id="patient-reviews" className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient reviews
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            What Patients Say About Dr. Mona
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Individual experiences in patients&apos; own words.
          </p>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((r, idx) => (
            <StaggerItem key={idx}>
              <div className="flex h-full flex-col justify-between rounded-[20px] border border-slate-200/90 bg-gradient-to-br from-slate-50/60 to-white p-6 shadow-[0_4px_18px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0047ca]/40 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)]">
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="size-3.5" />
                    ))}
                  </div>

                  {r.title && (
                    <h3 className="mt-3 text-[15px] font-bold text-slate-900">
                      {r.title}
                    </h3>
                  )}

                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
                  <span
                    className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-xs ${r.color}`}
                  >
                    {r.initial}
                  </span>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-slate-900">
                      {r.author}
                    </h4>
                    <p className="text-[11.5px] text-slate-500">{r.source}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8">
          <Link
            href="/patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-[13.5px] font-semibold text-slate-800 transition-all hover:border-[#0047ca] hover:bg-[#0047ca] hover:text-white"
          >
            Read All Patient Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

