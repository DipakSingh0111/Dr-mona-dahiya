"use client";

import Link from "next/link";
import { FaFlask, FaCheckSquare, FaSnowflake } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface CostCard {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const costCards: CostCard[] = [
  {
    icon: <FaFlask className="size-3.5 text-white" />,
    title: "Extended blastocyst culture",
    description: "Sequential culture media and tri-gas incubator use: ₹15,000 to ₹25,000.",
  },
  {
    icon: <FaCheckSquare className="size-3.5 text-white" />,
    title: "Embryo transfer",
    description: "Sterile catheter, ultrasound guidance and the procedure: ₹20,000 to ₹35,000.",
  },
  {
    icon: <FaSnowflake className="size-3.5 text-white" />,
    title: "Freezing spare blastocysts",
    description: (
      <span>
        Vitrification straws and liquid-nitrogen storage: ₹15,000 to ₹25,000. See{" "}
        <Link href="/treatments" className="text-blue underline font-semibold hover:text-rose transition-colors">
          Embryo Cryopreservation
        </Link>
        .
      </span>
    ),
  },
  {
    icon: <FaFlask className="size-3.5 text-white" />,
    title: "PGT-A biopsy, if chosen",
    description: "Laser biopsy and chromosome sequencing, billed per embryo.",
  },
];

interface PatientReview {
  title?: string;
  body: string;
  initial: string;
  name: string;
  source: string;
}

const reviews: PatientReview[] = [
  {
    title: "Best IVF Success Rates.",
    body: "Dr Mona did our Egg retrieval herself and that too on a holiday. She is very good with ultrasound check-ups to find out any deviations. We did not feel any unease in the embryo transfer process. We had amazing results and a successful first transfer. My wife is 12 weeks pregnant and we would highly recommend Dr Mona's IVF Clinic in Delhi for best IVF success rates.",
    initial: "G",
    name: "Gaurav Baghel",
    source: "Patient review",
  },
  {
    body: "Dr Mona is a really good fertility doctor in Delhi. She has a very patient focussed approach which is unheard of these days with such famous doctors in Delhi. She came across as very genuine in every consultation. Her treatment was precise and it has resulted in a positive result in the First IVF Cycle.",
    initial: "B",
    name: "Brahm Prakash",
    source: "Google patient review",
  },
  {
    body: "Dr. Dahiya doesn't believe in a general approach for fertility treatment. She analyzed our case deeply and designed a tailored IVF plan that worked in the first IVF cycle. Her dedication makes her the Best Fertility Doctor in Ghaziabad. Thank you for our precious blessing and wish you infinite success.",
    initial: "A",
    name: "Arbaj khan",
    source: "Google patient review",
  },
];

export default function BlastocystReviewsAndCost() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-slate-100">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: What Patients Say About Blastocyst Transfer with Dr. Mona ================= */}
        <div id="patient-reviews" className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Patient reviews
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-navy sm:text-[2.2rem] lg:text-[2.45rem]">
              What Patients Say About Blastocyst Transfer with Dr. Mona
            </h2>
            <p className="mt-2 text-[14px] text-black sm:text-[15px]">
              Reviews from patients who mention Blastocyst Transfer. These are individual experiences in patients&apos; own words.
            </p>
          </Reveal>

          <Stagger delay={0.04} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {reviews.map((rev, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 transition-all duration-300 hover:border-rose/40 hover:bg-white hover:shadow-md">
                  <div>
                    {rev.title && (
                      <h3 className="font-serif text-[1.05rem] font-semibold text-navy mb-2 leading-snug">
                        {rev.title}
                      </h3>
                    )}
                    <p className="text-[13px] leading-relaxed text-slate-700 sm:text-[13.5px]">
                      {rev.body}
                    </p>
                  </div>

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

        {/* ================= SECTION 2: What Affects the Cost of Blastocyst Transfer ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-navy sm:text-[2.2rem] lg:text-[2.45rem]">
              What Affects the Cost of Blastocyst Transfer
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-black sm:text-[15px]">
              Blastocyst culture and transfer are part of an IVF cycle. The add-on components below are itemised in your estimate after consultation.
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

                    <div className="mt-4 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                      {card.description}
                    </div>
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

