"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Anaesthetize and prepare your cervix",
    bullets: [
      "Light general anesthesia",
      "Cervical ripening with Misoprostol",
    ],
  },
  {
    number: "2",
    title: "Perform Diagnostic Laparoscopy and Hysteroscopy",
    bullets: [
      "Hysteroscopy: Using a 2.9mm telescope we inspect your endocervical canal, uterine cavity and ostia of your fallopian tubes.",
      "Laparoscopy: We place a camera 5mm telescope in your abdomen just below your umbilicus. We place 5mm ports just above your symphysis.",
    ],
  },
  {
    number: "3",
    title: "Operate via hysteroscopy",
    bullets: [
      "We can remove endometrial polyps and sub mucous fibroid using bipolar forceps or cold scissor.",
      "We divide your septum till both ostia of your tubes are equidistant from each other.",
      "Release adhesions and apply antiadhesive barrier.",
    ],
  },
  {
    number: "4",
    title: "Operate via laparoscopy",
    bullets: [
      "Chromopertubation (dye test) to identify patent fallopian tubes.",
      "Clip or remove hydrosalpinx if you plan for IVF treatment.",
      "Ovary sparing excision of endometriomas.",
    ],
  },
  {
    number: "5",
    title: "Antiadhesive and discharge",
    bullets: [
      "Place hyaluronic acid gel to prevent recurrence of adhesions.",
      "You will be discharged between 6-12 hours post surgery.",
    ],
  },
];

const whyPoints = [
  {
    title: "Ovarian Reserve Sparing Surgeries",
    desc: "We use cold scissor technique and careful bipolar diathermy to remove pathology with minimal damage to normal ovarian tissue.",
  },
  {
    title: "Simultaneous hysteroscopy and laparoscopy",
    desc: "Both these procedures can be performed in one setting to treat your uterine and pelvic pathology simultaneously.",
  },
  {
    title: "Experience of more than 25 Years",
    desc: "Fellowship from Singapore General Hospital and trained in advanced endoscopic surgeries.",
  },
];

export default function LaparoscopyProtocolAndWhy() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Laparoscopic and Hysteroscopic Surgery procedure"
          title="Step-by-Step Surgical Protocol"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {protocols.map((item) => (
            <StaggerItem
              key={item.number}
              className="h-full min-h-[240px] sm:min-h-[260px]"
            >
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/laparoscopy.jpeg"
                alt="Laparoscopic and Hysteroscopic Reproductive Surgery"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Why Dr Mona Dahiya?"
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
    </>
  );
}
