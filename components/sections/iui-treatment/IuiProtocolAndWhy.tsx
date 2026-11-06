"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
  ProtocolCard,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Baseline ultrasound and strategy (days 2–3)",
    bullets: [
      "Scan to rule out leftover ovarian cysts",
      "Baseline estradiol below 50 pg/mL",
    ],
  },
  {
    number: "2",
    title: "Controlled ovulation induction (days 3–7)",
    bullets: [
      "Letrozole 2.5 to 5 mg by mouth, or low-dose gonadotropins",
      "Target: 1 or 2 dominant follicles, to avoid higher-order multiples",
    ],
  },
  {
    number: "3",
    title: "Follicle and lining monitoring (days 8–12)",
    bullets: [
      "Serial scans tracking follicle size (aim for 18 to 20 mm)",
      "Endometrium of at least 7.5 mm with a trilaminar pattern",
    ],
  },
  {
    number: "4",
    title: "Ovulation trigger (day 12 or 13)",
    bullets: [
      "5,000 to 10,000 IU recombinant hCG when the lead follicle is ready",
    ],
  },
  {
    number: "5",
    title: "Semen collection and washing (day 14 or 15)",
    bullets: [
      "Sample collected after 2 to 3 days of abstinence, about 2 hours before insemination",
      "Density-gradient centrifugation separates healthy motile sperm from fluid and debris",
    ],
  },
  {
    number: "6",
    title: "Insemination (36 hours after trigger)",
    bullets: [
      "A soft, flexible catheter places 0.5 mL of prepared sperm in the uterus",
      "Painless, about 5 minutes, no anaesthesia, then 15 minutes of rest",
    ],
  },
  {
    number: "7",
    title: "Luteal support and pregnancy test",
    bullets: [
      "Micronised progesterone for 14 days",
      "Blood Beta-hCG test on Day 28",
    ],
  },
];

const whyPoints = [
  {
    title: "Experienced clinical judgment",
    desc: (
      <span>
        IUI is advised only when tubes are open and sperm parameters support it, so you avoid repeat cycles when{" "}
        <Link href="/ivf-treatment" className="text-rose underline hover:text-rose transition-colors transition-colors">
          IVF Treatment
        </Link>{" "}
        is the better route.
      </span>
    ),
  },
  {
    title: "Strict single-follicle safety",
    desc: "Careful dose titration aims for 1 egg, keeping multiple pregnancy rates below 5%.",
  },
  {
    title: "Standardised semen washing",
    desc: "Double-wash density-gradient separation removes prostaglandins, which prevents cramping and concentrates motile sperm.",
  },
];

export default function IuiProtocolAndWhy() {
  return (
    <TreatmentSection className="lg:py-14">
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-rose/15 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
            eyebrow="How it works"
            title="Step-by-Step IUI Treatment Protocol"
          />

          <Stagger
            delay={0.04}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.slice(0, 3).map((item) => (
              <StaggerItem key={item.number}>
                <ProtocolCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger
            delay={0.04}
            className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.slice(3, 6).map((item) => (
              <StaggerItem key={item.number}>
                <ProtocolCard {...item} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-4 grid grid-cols-1 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal variant="fadeUp" delay={0.1}>
              <ProtocolCard {...protocols[6]} />
            </Reveal>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <TreatmentSectionHeader
                eyebrow="Expertise & authority"
                title={
                  <>
                    Why Consult Dr.
                    <br className="hidden sm:inline" /> Mona Dahiya for IUI?
                  </>
                }
              />

              <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
                {whyPoints.map((point, idx) => (
                  <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
                    <WhyPointRow {...point} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Reveal variant="scaleIn" delay={0.1}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-[#fbcfe0] shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about-mona-dahiya/male-infertility.jpg"
                    alt="Dr. Mona Dahiya - Senior Infertility & IUI Specialist"
                    width={420}
                    height={500}
                    className="max-h-[380px] w-full object-cover object-top sm:max-h-[440px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </TreatmentSection>
  );
}
