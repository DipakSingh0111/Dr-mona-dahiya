"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const indications: {
  number: string;
  title: string;
  description: ReactNode;
}[] = [
  {
    number: "1",
    title: "Infertility with normal basic workup.",
    description:
      "When tests are normal but pregnancy does not occur after one year. We may try IUI first. If it's unsuccessful we move ahead with IVF.",
  },
  {
    number: "2",
    title: "Failed previous IVF cycles.",
    description: (
      <>
        Sometimes one or two failed IVF cycles require further workup. Quality
        of embryo, endometrium and sperm DNA are checked. Read more here:{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Recurrent implantation failure
        </Link>
        .
      </>
    ),
  },
  {
    number: "3",
    title: "Infertility due to Male factor.",
    description: (
      <>
        Sperm count and motility can be low. Or there can be increased sperm DNA
        fragmentation or no sperms in the ejaculate. Read more about{" "}
        <Link
          href="/low-sperm-count-oligospermia"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Low sperm count
        </Link>
        ,{" "}
        <Link
          href="/azoospermia-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Azoospermia
        </Link>{" "}
        and{" "}
        <Link
          href="/surgical-sperm-retrieval-tesa-pesa"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Surgical Sperm Extraction
        </Link>
        .
      </>
    ),
  },
  {
    number: "4",
    title: "Female Factor Infertility - PCOS or Irregular cycles.",
    description:
      "Induction of ovulation is performed first and IVF is done if necessary. Protocols to prevent OHSS are followed.",
  },
  {
    number: "5",
    title: "Tubal blockage, Endometriosis and Fibroids.",
    description: (
      <>
        Ultrasound and sometimes{" "}
        <Link
          href="/hysteroscopy-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          hysteroscopy
        </Link>{" "}
        / laparoscopy is performed before treatment. Read more about{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Blocked Fallopian tubes
        </Link>
        .
      </>
    ),
  },
  {
    number: "6",
    title: "Decreased AMH or Above 35 years.",
    description: (
      <>
        You may need to act faster and plan ahead with{" "}
        <Link
          href="/embryo-cryopreservation"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          freezing embryos
        </Link>
        .
      </>
    ),
  },
];

export default function BestIvfGhaziabadIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Know More"
        title="Who needs IVF or advanced fertility treatment?"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number}>
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
