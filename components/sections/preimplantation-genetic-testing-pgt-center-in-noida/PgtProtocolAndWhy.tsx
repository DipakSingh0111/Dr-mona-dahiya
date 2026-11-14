"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtProtocolAndWhy() {
  const steps = [
    {
      step: "1",
      title: "Stimulation of your Ovaries",
      desc: "Between Day 2-3 and Day 12 of your cycle we start you on IVF Stimulation medication to grow multiple eggs. You will be monitored with USG scan and Blood Estrogen levels.",
    },
    {
      step: "2",
      title: "Collection of Eggs + ICSI",
      desc: "Once we feel your eggs are mature enough. We will collect them with transvaginal USG guidance. After collection ICSI will be done on each egg. Instead of doing normal IVF we do ICSI as there may be contamination from other sperms attached to the embryo.",
    },
    {
      step: "3",
      title: "Grow Embryos for 5 to 6 Days",
      desc: "Embryos develop in Class 10,000 cleanroom benchtop incubators to the multi-cellular blastocyst stage (100–150 cells).",
    },
    {
      step: "4",
      title: "Biopsy of the Embryo (On Day 5/6)",
      desc: "Once the embryo reaches blastocyst stage the embryologist will biopsy the embryo using a non contact laser. 4-6 cells will be removed from the outside layer of the embryo.",
    },
    {
      step: "5",
      title: "Freeze the Embryos (On Day 5/6)",
      desc: "After removing cells the blastocysts will be frozen using Ultra rapid vitrification method. These embryos will stay in liquid nitrogen tank while waiting for their results.",
    },
    {
      step: "6",
      title: "Wait for Genetic Results",
      desc: "The biopsied cells will take 2 to 3 weeks to come back with results. Your embryos can be classified as Euploid (Normal), Aneuploid (Abnormal) or Mosaics.",
    },
    {
      step: "7",
      title: "Frozen Embryo Transfer",
      desc: "You can then choose to do Frozen Embryo transfer of only those that are Euploid (Normal). This can be done in your next cycle with HRT or Natural protocol.",
    },
  ];

  const whyPoints = [
    {
      title: "25 Years of Experience in Reproductive Medicine",
      desc: "With a background of MBBS Gold Medalist from LHMC, MD from MAMC and Fellow in Reproductive Medicine from Singapore. Dr Mona Dahiya has helped over 25000+ families become parents.",
    },
    {
      title: "Modern Embryology Lab",
      desc: "We use latest technology in our lab such as bench top incubators and Non contact lasers. This helps reduce trauma to embryos and achieve better survival rate.",
    },
    {
      title: "Sample Tracking System",
      desc: "Our lab uses double witness system with barcodes. So we can keep track of your cells from biopsy to freezing and warming.",
    },
    {
      title: "Honest Genetic Counselling",
      desc: "We believe in providing our patients with the best possible information. Whether your embryos are mosaic or have segmental abnormality. We will provide you with a clear picture of your chances.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Steps Involved in PGT
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
            Step-by-Step PGT Treatment Protocol
          </h2>
        </Reveal>

        <Stagger
          stagger={0.05}
          className="grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((st) => (
            <StaggerItem
              key={st.step}
              className="h-full min-h-[240px] sm:min-h-[260px]"
            >
              <div className="card-highlight group flex h-full min-h-[240px] flex-col rounded-[20px] border border-[#fde2ec] bg-white p-5.5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)] sm:min-h-[260px]">
                <div className="flex items-center gap-3">
                  <span className="card-badge inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(232,62,116,0.35)]">
                    {st.step}
                  </span>
                  <h3 className="text-[15px] font-bold text-ink transition-colors group-hover:text-rose sm:text-[16px]">
                    {st.title}
                  </h3>
                </div>
                <p className="mt-3.5 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                  {st.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-[#fde2ec] bg-white p-2 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/pgt.jpeg"
                alt="Embryo Development Stages from Zygote to Blastocyst for PGT"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2"
              />
            </div>
          </StaggerItem>
        </Stagger>

        </div>
      </section>

      <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="page-container relative">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Why choose us?
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
              Why Consult Dr. Mona Dahiya for PGT in Delhi | Noida | Ghaziabad?
            </h2>
          </Reveal>

          <Stagger stagger={0.06} className="space-y-3.5 sm:space-y-4">
            {whyPoints.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group flex flex-row items-start gap-3.5 rounded-[20px] border border-[#fde2ec] bg-white p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)] sm:gap-4 sm:p-6">
                  <div className="signature-tick mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-white">
                    <FaCheck className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-bold text-ink transition-colors group-hover:text-rose sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/75 sm:text-[14px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
