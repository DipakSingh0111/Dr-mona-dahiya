"use client";

import Link from "next/link";
import { FaCheckSquare, FaFlask, FaCalendarAlt, FaPills } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

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
    body: "Do not be scared of invasive procedures is what we can share. Dr. Mona uses latest techniques to minimize discomfort. Our embryo transfer felt like normal checkup. She cares for patient comfort along with success rates. We have got 3 babies with the help of Dr Mona though IUI/IVF.",
    initial: "S",
    name: "Scout pharoah",
    source: "Google patient review",
  },
  {
    body: "Nobody knows as much about ART and reproductive medicine than her. Our story is about 5 years of struggle and we completely lost trust in assisted reproductive technology (ART) after 3 failed cycles of IUI and 2 failed IVF cycles, our ... More",
    initial: "A",
    name: "Ajay Shakya",
    source: "Google patient review",
  },
];

interface CostCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const costCards: CostCard[] = [
  {
    icon: <FaCheckSquare className="size-4 text-white" />,
    title: "IUI Procedure",
    description: "Includes the procedure and disposable materials used, such as catheters.",
  },
  {
    icon: <FaFlask className="size-4 text-white" />,
    title: "Washing of Sperm",
    description: "Includes the cost of media used and lab processing to get good motile sperm.",
  },
  {
    icon: <FaCalendarAlt className="size-4 text-white" />,
    title: "Scans",
    description: "You will need 3–4 scans during your cycle.",
  },
  {
    icon: <FaPills className="size-4 text-white" />,
    title: "Medications",
    description: "Letrozole tablets and trigger shot.",
  },
];

export function IuiReviews() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            What our patients say
          </p>
          <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
            What Patients Say About IUI with Dr. Mona
          </h2>
          <p className="mt-2 text-[14px] text-ink/75 sm:text-[15px]">
            Here are some patients who have mentioned IUI in their reviews.
          </p>
        </Reveal>

        <Stagger
          delay={0.04}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {reviews.map((rev, idx) => (
            <StaggerItem key={idx}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_4px_20px_rgba(15,36,56,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-md">
                <p className="text-[13.5px] leading-relaxed text-ink/80 sm:text-[14px]">
                  &ldquo;{rev.body}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-[#fde2ec] pt-3.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose font-bold text-sm text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                    {rev.initial}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-ink">{rev.name}</p>
                    <p className="text-[11.5px] text-ink/60">{rev.source}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* See all patient reviews pill */}
        <div className="mt-7">
          <Reveal variant="fadeUp" delay={0.1}>
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center justify-center rounded-full border border-rose/30 bg-white px-6 py-2.5 text-[13px] font-semibold text-ink shadow-sm transition-all hover:border-rose hover:bg-rose hover:text-white sm:text-[14px]"
            >
              See all patient reviews
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function IuiCost() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Pricing
          </p>
          <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
            Cost of IUI Treatment
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
            IUI is a cost-effective form of fertility treatment. Here are the charges involved in IUI.
          </p>
        </Reveal>

        {/* Big Cost Banner */}
        <Reveal variant="fadeUp" delay={0.06} className="mt-7">
          <div className="relative overflow-hidden rounded-2xl border border-rose/20 bg-gradient-to-r from-navy via-navy-mid to-navy p-6 shadow-md sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full bg-rose/20 blur-3xl"
            />
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
              <p className="font-serif text-[2.5rem] font-bold text-white sm:text-[3.2rem]">
                ₹15,000
              </p>
              <div className="sm:border-l sm:border-white/15 sm:pl-8">
                <h3 className="text-[17px] font-bold text-white">Cost of IUI</h3>
                <p className="text-[13px] text-white/75 sm:text-[14px]">
                  Approximate cost per IUI cycle.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Cost Breakdown Cards */}
        <Stagger
          delay={0.04}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
        >
          {costCards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_4px_16px_rgba(15,36,56,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-md">
                <div>
                  <div className="flex size-9 items-center justify-center rounded-xl bg-rose text-white shadow-xs">
                    {card.icon}
                  </div>
                  <h3 className="font-serif mt-3 text-[1.02rem] font-bold text-ink leading-snug">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-3.5 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default function IuiReviewsAndCost() {
  return (
    <>
      <IuiReviews />
      <IuiCost />
    </>
  );
}
