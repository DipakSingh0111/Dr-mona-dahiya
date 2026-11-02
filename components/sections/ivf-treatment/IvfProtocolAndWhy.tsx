"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow
} from "@/components/ui/treatment";
const protocols = [
  {
    number: "1",
    title: "Baseline assessment (days 1–3)",
    bullets: [
      "Scan and hormone bloods to confirm readiness",
      "Protocol and medicine plan confirmed",
    ],
  },
  {
    number: "2",
    title: "Controlled ovarian stimulation (days 3–11)",
    bullets: [
      "Daily or tailored gonadotropin injections",
      "Serial scans and estradiol to track response",
    ],
  },
  {
    number: "3",
    title: "Ovulatory trigger (day 11 or 12)",
    bullets: [
      "hCG or agonist trigger timed to follicle maturity",
      "Retrieval scheduled 34–36 hours later",
    ],
  },
  {
    number: "4",
    title: "Egg retrieval and semen processing (day 13 or 14)",
    bullets: [
      "Ultrasound-guided oocyte pickup under sedation",
      "Partner sample prepared or frozen sperm thawed",
    ],
  },
  {
    number: "5",
    title: "Fertilisation and extended culture (days 14–19)",
    bullets: [
      "IVF or ICSI based on semen and egg factors",
      "Culture to day 5 blastocyst when possible",
    ],
  },
  {
    number: "6",
    title: "Blastocyst transfer (day 18 or 19)",
    bullets: [
      "Fresh transfer or freeze-all, as clinically indicated",
      "Single embryo transfer preferred when suitable",
    ],
  },
  {
    number: "7",
    title: "Luteal support and pregnancy test (days 19–33)",
    bullets: [
      "Progesterone support after transfer",
      "Serum β-hCG about 10–12 days after transfer",
    ],
  },
];

const whyPoints = [
  {
    title: "Gold-medalist clinical training",
    desc: "MBBS gold medalist with MD and DNB — rigorous foundations for complex IVF decisions.",
  },
  {
    title: "International fellowship",
    desc: "IVF fellowship at Singapore General Hospital, bringing global lab and clinical standards home.",
  },
  {
    title: "Laboratory precision",
    desc: "Protocols tuned for egg quality, ICSI when needed, and careful blastocyst selection.",
  },
  {
    title: "Direct physician care",
    desc: "Dr. Mona meets couples herself at key visits — not a hand-off between rotating teams.",
  },
];

export default function IvfProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step IVF Treatment Protocol"
          subtitle="What to expect at each stage. Exact days are set at your consultation."
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Consult Dr. Mona Dahiya for IVF?"
        />

          <div className="mt-7 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
              {whyPoints.map((point, idx) => (
                <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-[380px] lg:col-span-5 lg:mx-0 lg:max-w-none">
              <Reveal variant="scaleIn" delay={0.08}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/70 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about-mona-dahiya/female-infertility.jpg"
                    alt="Dr. Mona Dahiya at clinic consultation"
                    width={480}
                    height={560}
                    className="max-h-[420px] w-full object-cover object-top sm:max-h-[480px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </TreatmentSection>
  );
}
