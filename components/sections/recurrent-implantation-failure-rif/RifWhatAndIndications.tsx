"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "Failure of more than one transfer",
    description:
      "Transfer of embryo(s) with good quality that did not result in pregnancy.",
  },
  {
    number: "2",
    title: "Embryos failing to grow",
    description: "Low number of blastocyst formation.",
  },
  {
    number: "3",
    title: "Possible Uterus factor",
    description: "Polyp, septum, adhesion or thin lining.",
  },
  {
    number: "4",
    title: "High maternal age",
    description: "Embryos may have chromosomal abnormalities.",
  },
  {
    number: "5",
    title: "Unknown cause",
    description: "No obvious cause found.",
  },
];

const checklistItems = [
  "Check all the previous data on stimulation, embryo grading and transfer technique",
  "Cavity study with hysteroscopy and 3d usg",
  "Test for chronic endometritis, thyroid and other metabolic issues",
  "Only if required Coagulation and immune workup",
  "Check sperm parameters and sperm dna fragmentation",
];

export default function RifWhatAndIndications() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="About Recurrent Implantation Failure (RIF)"
          title="What Is Recurrent Implantation Failure (RIF)?"
        />

        <Reveal variant="fadeUp" delay={0.06} className="mt-6">
          <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
            <div className="flex items-center gap-3">
              <span className="card-badge flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                <FaCheck className="size-3" />
              </span>
              <h3 className="font-serif text-[1.05rem] font-semibold text-black sm:text-[1.12rem]">
                Recurrent Implantation Failure (RIF)
              </h3>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
              RIF is when there is no pregnancy after transfer of more than 2
              blastocyst of good grade. 10%-15% of patients who undergo IVF will
              experience RIF. More than 50% are due to chromosomal abnormality
              in embryo (with PGT-A we can achieve 65%-70% pregnancy) and rest
              25%-30% are due to shift in window of implantation (can be
              detected with ERA) or other causes such as chronic endometritis or
              thin lining less than 7mm.
            </p>
          </div>
        </Reveal>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Reasons For Recurrent Implantation Failure (RIF)"
          title="Indications: Who Needs a RIF Evaluation?"
          subtitle="Some of the common indications to consult Dr Mona Dahiya for recurrent implantation failure (RIF) are."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Test To Diagnose Recurrent Implantation Failure (RIF)"
          title="Diagnostic Checklist"
          subtitle="We suggest these tests to diagnose Recurrent Implantation Failure (RIF). Not everyone will require all the tests."
        />

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-3.5">
          {checklistItems.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow text={item} />
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
