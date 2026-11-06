"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { NumberedCard } from "@/components/ui/treatment";

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
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
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
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
        >
          Sperm DNA Fragmentation
        </Link>{" "}
        and{" "}
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
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
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
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
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
        >
          Hysteroscopy
        </Link>{" "}
        and treat{" "}
        <Link
          href="/endometriosis-fertility-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
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
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
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
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
