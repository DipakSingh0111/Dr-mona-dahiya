"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader
} from "@/components/ui/treatment";
const indications = [
  {
    number: "1",
    title: "No sperm on repeated semen analysis",
    description: "Confirmed on at least two samples after centrifugation.",
  },
  {
    number: "2",
    title: "Previous infection, surgery or injury",
    description: "Mumps orchitis, hernia repair, trauma or torsion.",
  },
  {
    number: "3",
    title: "Absent or blocked vas deferens",
    description: "Congenital absence or obstruction of the ducts.",
  },
  {
    number: "4",
    title: "Hormonal imbalance",
    description: "Low FSH and LH or pituitary problems.",
  },
  {
    number: "5",
    title: "Genetic conditions",
    description: "Karyotype or Y-chromosome microdeletions.",
  },
];

export default function AzoospermiaIndications() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={<>Indications: Who Needs an Azoospermia
            <br className="hidden sm:inline" /> Evaluation?</>}
          subtitle="Common reasons Dr. Mona Dahiya recommends azoospermia care."
        />

        <Stagger
          delay={0.06}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number}>
              <div className="card-highlight relative flex h-full flex-col rounded-2xl border border-rose/40 bg-gradient-to-b from-white to-[#fff8fa] p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/70 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="card-badge flex size-8 shrink-0 items-center justify-center rounded-full bg-rose text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-[1.05rem] font-semibold text-black sm:text-[1.12rem]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3.5 text-[13px] leading-relaxed text-black sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}
