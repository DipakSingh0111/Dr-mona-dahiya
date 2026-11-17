"use client";

import React, { cloneElement, isValidElement, type ReactNode } from "react";
import Link from "next/link";

const LINK_RULES: Array<{ pattern: string; href: string }> = [
  // Multi-word / specific phrases first (longest match wins)
  { pattern: "recurrent implantation failures", href: "/recurrent-implantation-failure-rif" },
  { pattern: "recurrent implantation failure", href: "/recurrent-implantation-failure-rif" },
  { pattern: "endometrial receptivity analysis", href: "/endometrial-receptivity-analysis-era-test-in-noida" },
  { pattern: "endometrial receptivity assay", href: "/endometrial-receptivity-analysis-era-test-in-noida" },
  { pattern: "sperm dna fragmentation test", href: "/sperm-dna-fragmentation-test" },
  { pattern: "sperm dna fragmentation", href: "/sperm-dna-fragmentation-test" },
  { pattern: "oligoasthenoteratozoospermia", href: "/low-sperm-count-oligospermia" },
  { pattern: "blocked fallopian tubes", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "surgical sperm retrieval", href: "/surgical-sperm-retrieval-tesa-pesa" },
  { pattern: "diagnostic hysteroscopy", href: "/hysteroscopy-treatment" },
  { pattern: "operative hysteroscopy", href: "/hysteroscopy-treatment" },
  { pattern: "laser assisted hatching", href: "/best-laser-assisted-hatching-doctor-in-noida" },
  { pattern: "diminished ovarian reserve", href: "/best-low-amh-treatment-in-noida" },
  { pattern: "frozen embryo transfer", href: "/frozen-embryo-transfer" },
  { pattern: "oocyte cryopreservation", href: "/best-egg-freezing-center-in-noida" },
  { pattern: "embryo cryopreservation", href: "/embryo-cryopreservation" },
  { pattern: "recurrent pregnancy loss", href: "/miscarriage-treatment-in-noida" },
  { pattern: "recurrent miscarriages", href: "/miscarriage-treatment-in-noida" },
  { pattern: "recurrent miscarriage", href: "/miscarriage-treatment-in-noida" },
  { pattern: "intrauterine insemination", href: "/iui-treatment" },
  { pattern: "intra uterine insemination", href: "/iui-treatment" },
  { pattern: "follicular ultrasound", href: "/follicular-ultrasound" },
  { pattern: "follicular monitoring", href: "/follicular-ultrasound" },
  { pattern: "implantation failures", href: "/recurrent-implantation-failure-rif" },
  { pattern: "implantation failure", href: "/recurrent-implantation-failure-rif" },
  { pattern: "laparoscopic surgery", href: "/best-laparoscopic-surgeon-in-noida" },
  { pattern: "fertility preservation", href: "/oncofertility-cancer-fertility-preservation" },
  { pattern: "blastocyst transfer", href: "/blastocyst-transfer" },
  { pattern: "blastocyst culture", href: "/blastocyst-transfer" },
  { pattern: "single embryo transfer", href: "/blastocyst-transfer" },
  { pattern: "embryo transfer", href: "/frozen-embryo-transfer" },
  { pattern: "low ovarian reserve", href: "/best-low-amh-treatment-in-noida" },
  { pattern: "ovarian reserve", href: "/best-low-amh-treatment-in-noida" },
  { pattern: "female infertility", href: "/female-infertility-treatment" },
  { pattern: "online consultation", href: "/ivf-consultation-online" },
  { pattern: "in-clinic consultation", href: "/book-appointment" },
  { pattern: "fertility assessment", href: "/fertility-assessment-quiz" },
  { pattern: "sperm cryopreservation", href: "/semen-sperm-freezing" },
  { pattern: "dna fragmentation", href: "/sperm-dna-fragmentation-test" },
  { pattern: "fallopian tubes", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "fallopian tube", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "male infertility", href: "/male-infertility-treatment" },
  { pattern: "intrauterine prp", href: "/platelet-rich-plasma-prp-ivf-treatment-in-noida" },
  { pattern: "laser hatching", href: "/best-laser-assisted-hatching-doctor-in-noida" },
  { pattern: "low sperm count", href: "/low-sperm-count-oligospermia" },
  { pattern: "zero sperm count", href: "/azoospermia-treatment" },
  { pattern: "chocolate cysts", href: "/endometriosis-fertility-treatment" },
  { pattern: "chocolate cyst", href: "/endometriosis-fertility-treatment" },
  { pattern: "uterine fibroids", href: "/hysteroscopy-treatment" },
  { pattern: "uterine septum", href: "/hysteroscopy-treatment" },
  { pattern: "laparoscopic ovarian drilling", href: "/best-laparoscopic-surgeon-in-noida" },
  { pattern: "ovarian drilling", href: "/best-laparoscopic-surgeon-in-noida" },
  { pattern: "ovulation induction", href: "/best-pcos-pcod-treatment-centre-in-noida" },
  { pattern: "semen analysis", href: "/male-infertility-treatment" },
  { pattern: "saline sonogram", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "sonohysterogram", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "pregnancy loss", href: "/miscarriage-treatment-in-noida" },
  { pattern: "miscarriages", href: "/miscarriage-treatment-in-noida" },
  { pattern: "miscarriage", href: "/miscarriage-treatment-in-noida" },
  { pattern: "donor programme", href: "/donor-gametes" },
  { pattern: "donor program", href: "/donor-gametes" },
  { pattern: "donor gametes", href: "/donor-gametes" },
  { pattern: "donor sperm", href: "/donor-gametes" },
  { pattern: "donor eggs", href: "/donor-gametes" },
  { pattern: "donor egg", href: "/donor-gametes" },
  { pattern: "blocked tubes", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "blocked tube", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "tubal blockage", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "tubal patency", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "embryo freezing", href: "/embryo-cryopreservation" },
  { pattern: "cryopreservation", href: "/embryo-cryopreservation" },
  { pattern: "vitrification", href: "/embryo-cryopreservation" },
  { pattern: "sperm freezing", href: "/semen-sperm-freezing" },
  { pattern: "semen freezing", href: "/semen-sperm-freezing" },
  { pattern: "second opinion", href: "/second-opinion-failed-ivf" },
  { pattern: "patient reviews", href: "/best-ivf-patient-reviews" },
  { pattern: "success stories", href: "/ivf-stories" },
  { pattern: "endometriosis", href: "/endometriosis-fertility-treatment" },
  { pattern: "oncofertility", href: "/oncofertility-cancer-fertility-preservation" },
  { pattern: "hydrosalpinx", href: "/fallopian-tube-blockage-treatment" },
  { pattern: "hysteroscopy", href: "/hysteroscopy-treatment" },
  { pattern: "oligospermia", href: "/low-sperm-count-oligospermia" },
  { pattern: "blastocysts", href: "/blastocyst-transfer" },
  { pattern: "blastocyst", href: "/blastocyst-transfer" },
  { pattern: "egg freezing", href: "/best-egg-freezing-center-in-noida" },
  { pattern: "laparoscopy", href: "/best-laparoscopic-surgeon-in-noida" },
  { pattern: "azoospermia", href: "/azoospermia-treatment" },
  { pattern: "varicocele", href: "/male-infertility-treatment" },
  { pattern: "fibroids", href: "/hysteroscopy-treatment" },
  { pattern: "fibroid", href: "/hysteroscopy-treatment" },
  { pattern: "polyps", href: "/hysteroscopy-treatment" },
  { pattern: "micro-tese", href: "/surgical-sperm-retrieval-tesa-pesa" },
  { pattern: "micro tese", href: "/surgical-sperm-retrieval-tesa-pesa" },
  { pattern: "failed ivf", href: "/second-opinion-failed-ivf" },
  { pattern: "mini ivf", href: "/minimal-stimulation-mini-ivf" },
  { pattern: "low amh", href: "/best-low-amh-treatment-in-noida" },
  { pattern: "era test", href: "/endometrial-receptivity-analysis-era-test-in-noida" },
  { pattern: "pgt-a", href: "/preimplantation-genetic-testing-pgt-center-in-noida" },
  { pattern: "pgt-m", href: "/preimplantation-genetic-testing-pgt-center-in-noida" },
  { pattern: "pgta", href: "/preimplantation-genetic-testing-pgt-center-in-noida" },
  { pattern: "pcos", href: "/best-pcos-pcod-treatment-centre-in-noida" },
  { pattern: "pcod", href: "/best-pcos-pcod-treatment-centre-in-noida" },
  { pattern: "icsi", href: "/intracytoplasmic-sperm-injection-icsi-treatment" },
  { pattern: "tesa", href: "/surgical-sperm-retrieval-tesa-pesa" },
  { pattern: "pesa", href: "/surgical-sperm-retrieval-tesa-pesa" },
  { pattern: "oats", href: "/low-sperm-count-oligospermia" },
  { pattern: "eset", href: "/blastocyst-transfer" },
  { pattern: "ivf", href: "/ivf-treatment" },
  { pattern: "iui", href: "/iui-treatment" },
  { pattern: "fet", href: "/frozen-embryo-transfer" },
  { pattern: "prp", href: "/platelet-rich-plasma-prp-ivf-treatment-in-noida" },
  { pattern: "dfi", href: "/sperm-dna-fragmentation-test" },
  { pattern: "pgt", href: "/preimplantation-genetic-testing-pgt-center-in-noida" },
];

const ROUTE_BY_PATTERN = new Map<string, string>(
  LINK_RULES.map((r) => [r.pattern.toLowerCase(), r.href]),
);

const COMBINED_REGEX = new RegExp(
  `\\b(${LINK_RULES.map((r) =>
    r.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  ).join("|")})\\b`,
  "gi",
);

const LINK_CLASS =
  "font-semibold text-blue underline underline-offset-2 transition-colors hover:text-rose";

function linkString(text: string, seenRoutes: Set<string>): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(COMBINED_REGEX)) {
    const matchedText = match[0];
    const start = match.index ?? 0;
    const href = ROUTE_BY_PATTERN.get(matchedText.toLowerCase());

    if (!href || seenRoutes.has(href)) {
      continue;
    }

    seenRoutes.add(href);

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    parts.push(
      <Link key={`${href}-${start}`} href={href} className={LINK_CLASS}>
        {matchedText}
      </Link>,
    );

    lastIndex = start + matchedText.length;
  }

  if (parts.length === 0) return text;
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function autoLinkNode(
  node: ReactNode,
  seenRoutes: Set<string> = new Set(),
): ReactNode {
  if (typeof node === "string") {
    return linkString(node, seenRoutes);
  }

  if (Array.isArray(node)) {
    return node.map((child, idx) => (
      <React.Fragment key={idx}>
        {autoLinkNode(child, seenRoutes)}
      </React.Fragment>
    ));
  }

  if (isValidElement<{ href?: string; children?: ReactNode }>(node)) {
    if (
      node.type === "a" ||
      node.type === Link ||
      node.type === "button" ||
      node.type === "code" ||
      typeof node.props?.href === "string"
    ) {
      if (typeof node.props?.href === "string") {
        seenRoutes.add(node.props.href);
      }
      return node;
    }

    if (node.props?.children !== undefined) {
      return cloneElement(
        node,
        undefined,
        autoLinkNode(node.props.children, seenRoutes),
      );
    }
  }

  return node;
}
