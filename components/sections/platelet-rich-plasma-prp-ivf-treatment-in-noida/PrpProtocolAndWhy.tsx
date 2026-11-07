"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  type ProtocolCardItem,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols: ProtocolCardItem[] = [
  {
    number: "1",
    title: "Collection of blood on the day of procedure",
    bullets: ["20 to 30 ml of blood will be collected in ACD-A vials"],
  },
  {
    number: "2",
    title: "Centrifugation in clean room",
    bullets: [
      "First spin @1200 rpm for 10 mins (soft spin) to get rid of RBC",
      "Second spin @3000 rpm for 10 mins (hard spin) to concentrate platelets 4–6 fold (1.5 – 2.0 ml of PRP will be obtained)",
    ],
  },
  {
    number: "3",
    title:
      "Instillation into uterus on day 10 to 12 of cycle with exogenous estrogen (Estradiol valerate 6mg – 8mg)",
    bullets: [
      "Intracavitary placement of 0.5 to 1 ml of PRP via soft catheter. Repeat after 48 hrs if lining is <7mm",
    ],
  },
  {
    number: "4",
    title: "Injecting into Ovaries (if needed)",
    bullets: [
      "Inject 1 to 2 ml of PRP in each ovary with 17G needle under USG guidance with sedation.",
    ],
  },
  {
    number: "5",
    title: "Follow up with FET after 48 – 72 hrs",
    bullets: [
      <>
        Start Progesterone once lining is ≥7.5 mm and trilaminar and proceed
        with{" "}
        <Link
          href="/frozen-embryo-transfer"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Frozen Embryo Transfer.
        </Link>
      </>,
    ],
  },
];

const whyPoints = [
  {
    title: "Controlled preparation standards",
    desc: "Closed, double-spin centrifugation gives a reliable platelet yield without white-cell contamination that could inflame the lining.",
  },
  {
    title: "Precise timing",
    desc: "PRP is built into a hormonally timed frozen transfer cycle, never given as an unmonitored one-off.",
  },
  {
    title: "Complete lining care",
    desc: "Diagnostic hysteroscopy first clears adhesions, so PRP works on a clean cavity.",
  },
];

export default function PrpProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Procedure steps"
          title="Step-by-Step PRP Protocol"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protocols.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Consult with Dr. Mona Dahiya for your PRP treatment"
          title="Why Consult Dr. Mona Dahiya for PRP Treatment?"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {whyPoints.map((point, idx) => (
            <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
          ))}
        </div>
      </TreatmentSection>
    </>
  );
}
