"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface IndicationCard {
  number: string;
  title: string;
  description: React.ReactNode;
}

const indications: IndicationCard[] = [
  {
    number: "1",
    title: "Infertility due to unknown causes",
    description:
      "If you are less than 35 years old with patent tubes and a normal semen analysis, and have been trying to conceive for at least 1 year.",
  },
  {
    number: "2",
    title: "Male factor subfertility",
    description: (
      <span>
        If the post-wash Total Motile Sperm Count (TMSC) is between 5 and 10 million with normal morphology. Read more on{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="text-rose font-semibold underline hover:text-rose-dark transition-colors"
        >
          Low Sperm Count and Motility
        </Link>
        .
      </span>
    ),
  },
  {
    number: "3",
    title: "Cervical factors",
    description:
      "When the cervical mucus is thick or acidic in nature, which blocks sperm entry into the uterus.",
  },
  {
    number: "4",
    title: "Irregular periods",
    description:
      "Polycystic Ovary Syndrome (PCOS), where you don't ovulate regularly. Oral Letrozole can induce ovulation with a single egg.",
  },
  {
    number: "5",
    title: "Pain during intercourse or ejaculatory problems",
    description:
      "Vaginismus, erectile dysfunction and retrograde ejaculation are some of these problems.",
  },
  {
    number: "6",
    title: "Use of donor sperm",
    description:
      "You can opt for donor sperm if you're a single woman or have non-obstructive azoospermia.",
  },
];

const checklistItems = [
  {
    title: "Tubal Patency",
    text: "You will need an HSG or SIS done to confirm that at least 1 tube is working.",
  },
  {
    title: "Semen Analysis",
    text: "The initial sample should show at least 5 million/ml sperm with good motility after washing.",
  },
  {
    title: "Ovarian Reserve",
    text: "Blood workup to know your AMH levels. A TVS is done on Day 2/3 to assess your antral follicle count.",
  },
  {
    title: "Clearance of infections in both partners",
    text: "HIV I and II, HBsAg, HCV and VDRL, as mandated by the Indian ART Act.",
  },
];

export default function IuiIndicationsAndChecklist() {
  return (
    <>
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
        <div className="page-container relative">
          {/* ================= SECTION 1: Who is a Good Candidate for IUI? ================= */}
          <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              About the treatment
            </p>
            <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
              Who is a Good Candidate for IUI?
            </h2>
          </Reveal>

          {/* 6 Cards Grid (3 columns on lg, 2 on sm, 1 on mobile) */}
          <Stagger
            delay={0.04}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          >
            {indications.map((item) => (
              <StaggerItem key={item.number}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_4px_20px_rgba(15,36,56,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_12px_30px_rgba(232,62,116,0.12)]">
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[14px] font-bold text-white shadow-[0_3px_10px_rgba(232,62,116,0.35)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.08rem] font-bold text-ink leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-3.5 text-[13.5px] leading-relaxed text-ink/75">
                    {item.description}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
        <div className="page-container relative">
          {/* ================= SECTION 2: What tests are required before IUI? ================= */}
          <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              What happens before treatment?
            </p>
            <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
              What tests are required before IUI?
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
              IUI requires that your tubes are open, so tubal patency needs to be established before starting the IUI treatment protocol.
            </p>
          </Reveal>

          {/* Checklist Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklistItems.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(15,36,56,0.03)] transition-all hover:border-rose/40 hover:shadow-sm sm:items-center sm:px-6">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-rose text-[11px] text-white shadow-sm mt-0.5 sm:mt-0">
                    <FaCheck />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-ink sm:text-[14.5px]">
                    <span className="font-semibold text-ink">{item.title}:</span>{" "}
                    <span className="text-ink/80">{item.text}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
