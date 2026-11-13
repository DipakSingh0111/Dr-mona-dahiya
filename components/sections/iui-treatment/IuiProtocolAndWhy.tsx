"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ProtocolStep {
  number: string;
  title: string;
  bullets: string[];
}

const protocols: ProtocolStep[] = [
  {
    number: "1",
    title: "Ultrasound on Day 2/3 of your cycle",
    bullets: [
      "Check for any residual ovarian cysts",
      "Baseline Estradiol level should be <50 pg/ml",
    ],
  },
  {
    number: "2",
    title: "Ovulation Induction starting from Day 3-7 of cycle",
    bullets: [
      "Oral Letrozole 2.5–5 mg or injectable gonadotropins at a low dose",
      "We want to see 1–2 dominant follicles to prevent higher-order multiples",
    ],
  },
  {
    number: "3",
    title: "Monitoring Follicular Growth and Endometrial Thickness from Day 8-12",
    bullets: [
      "Ultrasound every 2–3 days to check follicle size. Follicles should reach 18–20 mm in diameter",
      "Endometrial thickness >7.5 mm with a triple layer pattern",
    ],
  },
  {
    number: "4",
    title: "Trigger shot given on Day 12/13",
    bullets: [
      "Inject 5000–10000 IU of Recombinant hCG when follicles are mature",
    ],
  },
  {
    number: "5",
    title: "Semen Collection and Washing on Day 14/15",
    bullets: [
      "The sample will be collected after 2–3 days of abstinence, usually 2 hours before the procedure",
      "The sample is processed using the density gradient separation method to separate good motile sperm from other fluids and debris",
    ],
  },
  {
    number: "6",
    title: "Insemination performed 38 hours after trigger shot",
    bullets: [
      "The sperm sample is loaded into a thin catheter and introduced inside your uterus",
      "No pain, takes 5 minutes. You'll be asked to lie down for 15 minutes",
    ],
  },
  {
    number: "7",
    title: "Progesterone Support and Pregnancy Test",
    bullets: [
      "Micronized Progesterone will be prescribed for 14 days",
      "Beta hCG levels checked on Day 28",
    ],
  },
];

const whyPoints = [
  {
    title: "IUI done wisely",
    desc: (
      <span>
        We ensure that your tubes are open and sperm parameters are good before we recommend IUI, saving you the money of repeating unsuccessful IUI cycles and going ahead with{" "}
        <Link
          href="/ivf-treatment"
          className="text-rose font-semibold underline hover:text-rose-dark transition-colors"
        >
          IVF Treatment
        </Link>
        .
      </span>
    ),
  },
  {
    title: "Fewer multiples",
    desc: "We keep our multiples rate under 5% by inducing ovulation with 1 egg.",
  },
  {
    title: "Better sperm washing technique",
    desc: "Our double wash protocol helps remove prostaglandins from your sample. This prevents pain and gives us a better concentration of motile sperm.",
  },
];

export default function IuiProtocolAndWhy() {
  return (
    <section className="relative overflow-hidden bg-pink py-10 sm:py-14 lg:py-16 border-t border-[#fde2ec]">
      <div className="page-container relative">
        {/* ================= SECTION 1: Step-by-Step IUI Treatment Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Procedure explained
            </p>
            <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
              Step-by-Step IUI Treatment Protocol
            </h2>
          </Reveal>

          {/* Cards 1-3 */}
          <Stagger
            delay={0.04}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          >
            {protocols.slice(0, 3).map((item) => (
              <StaggerItem key={item.number}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_4px_20px_rgba(15,36,56,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_12px_30px_rgba(232,62,116,0.12)]">
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[14px] font-bold text-white shadow-[0_3px_10px_rgba(232,62,116,0.35)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-bold text-ink leading-snug pt-0.5 sm:text-[1.1rem]">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Cards 4-6 */}
          <Stagger
            delay={0.04}
            className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          >
            {protocols.slice(3, 6).map((item) => (
              <StaggerItem key={item.number}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_4px_20px_rgba(15,36,56,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_12px_30px_rgba(232,62,116,0.12)]">
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[14px] font-bold text-white shadow-[0_3px_10px_rgba(232,62,116,0.35)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-bold text-ink leading-snug pt-0.5 sm:text-[1.1rem]">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Card 7 */}
          <div className="mt-4 grid grid-cols-1 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal variant="fadeUp" delay={0.1}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_4px_20px_rgba(15,36,56,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_12px_30px_rgba(232,62,116,0.12)]">
                <div className="flex items-start gap-3.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[14px] font-bold text-white shadow-[0_3px_10px_rgba(232,62,116,0.35)]">
                    {protocols[6].number}
                  </span>
                  <h3 className="font-serif text-[1.05rem] font-bold text-ink leading-snug pt-0.5 sm:text-[1.1rem]">
                    {protocols[6].title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                  {protocols[6].bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for IUI? ================= */}
        <div>
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <Reveal variant="fadeUp">
                <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
                  Why us?
                </p>
                <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
                  Why Consult Dr. Mona Dahiya for IUI?
                </h2>
              </Reveal>

              <div className="mt-6 flex flex-col gap-4 sm:mt-7">
                {whyPoints.map((point, idx) => (
                  <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                    <div className="rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_4px_18px_rgba(15,36,56,0.03)] transition-all hover:border-rose/40 hover:shadow-md sm:p-6">
                      <div className="flex items-start gap-3.5">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[12px] text-white shadow-sm mt-0.5">
                          <FaCheck />
                        </span>
                        <div>
                          <h3 className="font-serif text-[1.05rem] font-bold text-ink sm:text-[1.12rem]">
                            {point.title}
                          </h3>
                          <div className="mt-2 text-[13.5px] leading-relaxed text-ink/75 sm:text-[14px]">
                            {point.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Doctor Sitting Photo with Bookshelf */}
            <div className="relative mx-auto flex w-full max-w-[480px] flex-col lg:col-span-5 lg:h-full lg:max-w-none">
              <Reveal
                variant="slideRight"
                delay={0.1}
                className="relative flex h-full w-full flex-col"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-45 blur-xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(232,62,116,0.25) 0%, rgba(0,71,202,0.15) 60%, transparent 75%)",
                  }}
                />
                <div className="relative aspect-[1.12/1] min-h-[340px] w-full overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_20px_50px_rgba(232,62,116,0.15)] sm:min-h-[400px] lg:aspect-auto lg:h-full lg:min-h-0">
                  <Image
                    src="/images/VID00010.jpeg"
                    alt="Dr. Mona Dahiya — Why Consult Dr. Mona Dahiya for IUI"
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 440px, (max-width: 1280px) 520px, 600px"
                    className="origin-[36%_top] scale-[1.08] -translate-y-2.5 sm:-translate-y-4 object-cover object-[36%_top] transition-transform duration-300"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
