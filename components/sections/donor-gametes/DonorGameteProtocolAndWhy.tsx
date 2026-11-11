"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  type ProtocolCardItem,
} from "@/components/ui/treatment";

const protocols: ProtocolCardItem[] = [
  {
    number: "1",
    title: "Determine indication and file necessary papers",
    bullets: [
      "With the ART Bank",
      "Complete paperwork and counselling with the doctor",
    ],
  },
  {
    number: "2",
    title: "Pick a suitable donor",
    bullets: ["As per height, skin tone, blood group and qualification."],
  },
  {
    number: "3",
    title: "Prepare lining of uterus (Day 1 to 14)",
    bullets: [
      "Give Estrogen valerate 6-8 mg PO. Scan on day 10-12 and proceed if thickness is more than 8mm",
    ],
  },
  {
    number: "4",
    title: "Retrieve eggs and fertilise them with partners sperm",
    bullets: [
      <>
        Donor eggs are brought in lab and matured oocytes are injected with
        sperm using{" "}
        <Link
          href="/intracytoplasmic-sperm-injection-icsi-treatment"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          ICSI
        </Link>
      </>,
    ],
  },
  {
    number: "5",
    title: "Grow embryos for 5 days",
    bullets: ["Incubate in Tri-gas incubators"],
  },
  {
    number: "6",
    title: "Perform Frozen transfer and give Progesterone",
    bullets: ["Check for positive pregnancy test (Blood Beta-hcg) after 14 days"],
  },
];

const whyPoints = [
  "We will try your own eggs first. DuoStim, Micro dose flare protocol and PRP can be done before moving on to Donor Eggs.",
  "Follow all laws and regulations regarding use of donor eggs. We will only procure eggs from registered ART Banks. There will be no direct monetary exchange between donor and recipient.",
  "Labs use clean rooms with bench top incubators. Fertilisation rate more than 80% and good blastocyst formation rate.",
];

export default function DonorGameteProtocolAndWhy() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Steps involved in Donor Egg / Donor Sperm IVF"
          title="Step-by-Step Donor Gamete Protocol"
        />
        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protocols.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Qualification"
          title="Why Trust Dr. Mona Dahiya for Donor Gamete IVF?"
        />
        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point} variant="fadeUp" delay={idx * 0.05}>
              <div className="flex items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:border-[#f8b4cb] hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:px-5 sm:py-4">
                <span className="signature-tick mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-white">
                  <FaCheck className="size-3" />
                </span>
                <p className="min-w-0 flex-1 text-[13.5px] leading-relaxed font-medium text-black sm:text-[14px]">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </TreatmentSection>
  );
}
