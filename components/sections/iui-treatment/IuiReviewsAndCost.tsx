"use client";

import Link from "next/link";
import { FaFlask, FaCheckSquare, FaCalendarAlt, FaPills } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface CostCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const costCards: CostCard[] = [
  {
    icon: <FaCheckSquare className="size-3.5 text-white" />,
    title: "Insemination procedure",
    description: "Procedure and sterile catheter consumables.",
  },
  {
    icon: <FaFlask className="size-3.5 text-white" />,
    title: "Sperm washing and isolation",
    description: "Density-gradient media, centrifuge handling and post-wash motility check.",
  },
  {
    icon: <FaCalendarAlt className="size-3.5 text-white" />,
    title: "Follicular ultrasound scans",
    description: "3 to 4 serial tracking scans.",
  },
  {
    icon: <FaPills className="size-3.5 text-white" />,
    title: "Ovulation induction medicines",
    description: "Oral Letrozole and the hCG trigger injection.",
  },
];

interface PatientReview {
  body: string;
  initial: string;
  name: string;
  source: string;
}

const reviews: PatientReview[] = [
  {
    body: "As a PCOS patient, my wife never thought to conceive naturally. However, Dr. Mona Dahiya's tailored treatment of ovulation induction + timed intercourse—worked wonders for us. Within 6 months, my wife has got pregnant naturally! Her patience and knowledge of infertility are unmatched. She is Truly the best IVF doctor in Delhi.",
    initial: "G",
    name: "Gopi Shakya",
    source: "Google patient review",
  },
  {
    body: "Do not be scared of invasive procedures is what we can share. Dr. Mona uses latest techniques to minimize discomfort. Our embryo transfer felt like normal checkup. She cares for patient comfort along with success rates. We have got 3 babies with the help of Dr Mona through IUI/IVF.",
    initial: "S",
    name: "Scout pharoah",
    source: "Google patient review",
  },
  {
    body: "Nobody knows as much about ART and reproductive medicine than her. Our story is about 5 years of struggle and we completely lost trust in assisted reproductive technology (ART) after 3 failed cycles of IUI and 2 failed IVF cycles. our ... More 🔥 1",
    initial: "A",
    name: "Ajay Shakya",
    source: "Google patient review",
  },
];

export default function IuiReviewsAndCost() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        {/* ================= SECTION 1: What Patients Say About IUI with Dr. Mona ================= */}
        <div id="patient-reviews" className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Patient reviews
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-navy sm:text-[2.2rem] lg:text-[2.45rem]">
              What Patients Say About IUI with Dr. Mona
            </h2>
            <p className="mt-2 text-[14px] text-black sm:text-[15px]">
              Reviews from patients who mention IUI. These are individual experiences in patients&apos; own words.
            </p>
          </Reveal>

          <Stagger delay={0.04} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {reviews.map((rev, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 transition-all duration-300 hover:border-rose/40 hover:bg-white hover:shadow-md">
                  <p className="text-[13px] leading-relaxed text-slate-700 sm:text-[13.5px]">
                    {rev.body}
                  </p>

                  <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-200">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rose text-white font-bold text-sm shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                      {rev.initial}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-navy">{rev.name}</p>
                      <p className="text-[11.5px] text-black">{rev.source}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Read All Patient Reviews Button */}
          <Reveal variant="fadeUp" delay={0.12} className="mt-6">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-navy shadow-sm transition-all hover:border-rose hover:text-rose-dark sm:text-[13.5px]"
            >
              Read All Patient Reviews
            </Link>
          </Reveal>
        </div>

        {/* ================= SECTION 2: What Affects the Cost of IUI ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-navy sm:text-[2.2rem] lg:text-[2.45rem]">
              What Affects the Cost of IUI
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-black sm:text-[15px]">
              IUI is an accessible first-line option with clear component fees. The total is ₹15,000 per completed cycle.
            </p>
          </Reveal>

          {/* 4 Cards Grid */}
          <Stagger delay={0.04} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {costCards.map((card, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-md">
                  <div>
                    {/* Icon Pill + Title */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                        {card.icon}
                      </span>
                      <h3 className="font-serif text-[1rem] font-semibold text-navy leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

