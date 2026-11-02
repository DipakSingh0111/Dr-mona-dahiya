"use client";

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
    title: "Anaesthesia and preparation",
    bullets: [
      "Light general anaesthesia",
      "Gentle cervical softening with misoprostol",
    ],
  },
  {
    number: "2",
    title: "Combined diagnostic survey",
    bullets: [
      "Hysteroscopy: a 2.9 mm scope checks the canal, cavity and tube openings",
      "Laparoscopy: a 5 mm camera below the navel, with small 5 mm ports above the pubic bone",
    ],
  },
  {
    number: "3",
    title: "Hysteroscopic correction",
    bullets: [
      "Polyp or fibroid removal with bipolar or cold scissors",
      "Septum division until both tube openings are level",
      "Adhesion release, then anti-adhesion gel",
    ],
  },
  {
    number: "4",
    title: "Laparoscopic correction",
    bullets: [
      "Dye test (chromopertubation) to check the tubes",
      "Clipping or removal of a hydrosalpinx before IVF",
      "Ovary-sparing removal of endometriosis",
    ],
  },
  {
    number: "5",
    title: "Recovery and discharge",
    bullets: [
      "Hyaluronic acid anti-adhesion barrier applied",
      "Home in 6 to 12 hours",
    ],
  },
];

const whyPoints = [
  {
    title: "Protecting ovarian reserve",
    desc: "Cold-scissor dissection and fine bipolar cautery avoid heavy burning of healthy ovarian tissue.",
  },
  {
    title: "Two procedures, one anaesthetic",
    desc: "Hysteroscopy and laparoscopy are combined so uterine and pelvic problems are fixed together.",
  },
  {
    title: "25+ years of endoscopic surgery",
    desc: "A Singapore General Hospital fellow with long experience in minimally invasive reproductive surgery.",
  },
];

export default function LaparoscopyProtocolAndWhy() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Surgical Protocol"
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
          title="Why Choose Dr. Mona Dahiya for Reproductive Surgery?"
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}
