"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface IndicationItem {
  number: string;
  title: string;
  description: ReactNode;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Trying to Conceive",
    description:
      "If you have been trying for 1 year or 6 months if female age over 35 years, we suggest doing a basic work up.",
  },
  {
    number: "2",
    title: "Lower Ovarian Reserve/Advanced Maternal Age",
    description: (
      <>
        If your AMH is lower or your age is more than 35 years we may advise{" "}
        <Link
          href="/embryo-cryopreservation"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          freezing embryos
        </Link>{" "}
        to keep your options open.
      </>
    ),
  },
  {
    number: "3",
    title: "Low Male Fertility",
    description: (
      <>
        Low sperm count/motility/morphology. High DNA Fragmentation. No sperm in
        ejaculate. Read more on{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Sperm DNA Fragmentation
        </Link>{" "}
        and{" "}
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Azoospermia
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "Failed Pregnancies/Implantation Failures",
    description: (
      <>
        We will look at your embryo, endometrium and immunological/coagulation
        parameters. Read more on{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Implantation Failures
        </Link>
        .
      </>
    ),
  },
  {
    number: "5",
    title: "Endometriosis/PCOS/Blocked Tubes",
    description: (
      <>
        Customized approach. We perform{" "}
        <Link
          href="/hysteroscopy-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Hysteroscopy
        </Link>{" "}
        and treat{" "}
        <Link
          href="/endometriosis-fertility-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Endometriosis
        </Link>
        .
      </>
    ),
  },
  {
    number: "6",
    title: "Cancer and fertility preservation",
    description: (
      <>
        We can help you preserve your eggs/sperms/embryos. Read more on{" "}
        <Link
          href="/oncofertility-cancer-fertility-preservation"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Oncofertility
        </Link>
        .
      </>
    ),
  },
];

export default function BestIvfDelhiIndications() {
  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Clinical overview
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Indications: Who Needs IVF?
          </h2>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {indications.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-rose/35 bg-gradient-to-b from-white to-[#fff8fa] p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                <div>
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-black sm:text-[1.12rem]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3.5 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
