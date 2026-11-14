"use client";

import { FaFlask } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtWhatAndModalities() {
  const modalities = [
    {
      title: "PGT-A",
      desc: "This screens all the 23 chromosomes in your body for any errors. Like having an extra chromosome 21 which causes Down Syndrome, Extra chromosome 18 Edwards Syndrome or no sex chromosome which causes Turner's Syndrome.",
    },
    {
      title: "PGT-M",
      desc: "If either or both of the partners are carrier for any known monogenic disease. Then PGT can help find those that are not affected. Examples include Thalassaemia, Cystic Fibrosis, Sickle Cell Anaemia, Spinal Muscular Atrophy, Huntington Disease.",
    },
    {
      title: "PGT-SR",
      desc: "If one of the couple is carrier for a balanced translocation or inversion of chromosome. This leads to increased chances of miscarriage and can be detected by PGT.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            About Preimplantation Genetic Testing
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
            What is Preimplantation Genetic Testing (PGT)?
          </h2>
        </Reveal>

        <Reveal variant="fadeUp">
          <div className="card-highlight rounded-[22px] border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-8">
            <p className="text-[14.5px] leading-relaxed text-ink/80 sm:text-[15.5px]">
              Preimplantation Genetic Testing or PGT allows us to combine the
              art of IVF and science of genetics. During a standard IVF cycle
              once we have formed embryos in the lab they are allowed to grow
              till day 5 or 6 stage of blastocyst formation. The embryologist
              picks 4 to 6 cells from the outside layer of embryo
              (Trophectoderm). Which will later form the placenta. The rest of
              the embryo is left intact which will later become your baby.
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/80 sm:text-[15.5px]">
              These cells are then sent to a Genomics lab where it is tested by
              Next Generation Sequencing (NGS). This helps us find if any
              genetic disorder or chromosomal anomaly is present.
            </p>
          </div>
        </Reveal>

        </div>
      </section>

      <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="page-container relative">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Types of Preimplantation Genetic Testing
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
              The Three Clinical Modalities of PGT
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
              There are 3 different types of PGT that can be done.
            </p>
          </Reveal>

          <Stagger
            stagger={0.06}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {modalities.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-highlight group flex h-full flex-col rounded-[20px] border border-[#fde2ec] bg-white p-5.5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)]">
                  <div className="card-badge inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
                    <FaFlask className="size-4" />
                  </div>
                  <h3 className="mt-3.5 text-[15px] font-bold text-ink transition-colors group-hover:text-rose sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/75">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
