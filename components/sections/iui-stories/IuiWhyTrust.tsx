"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

const whyPoints = [
  {
    title: "Careful Case Selection",
    desc: "We only perform IUI if you have the assurance of becoming pregnant. If your tubes are open and your husband has a good sperm count you can get pregnant.",
  },
  {
    title: "Precise Timing",
    desc: (
      <>
        Make sure you&apos;re having your IUI at the right time. At Dr Mona
        Dahiya&apos;s clinic we track you with{" "}
        <Link href="/follicular-ultrasound" className={linkClass}>
          ultrasound
        </Link>{" "}
        so you can predict ovulation right.
      </>
    ),
  },
  {
    title: "Standardised Sperm Preparation",
    desc: "Make sure your doctor is using a sperm wash during your IUI. Our center uses a density gradient sperm wash. This helps you get the best sperm and reduces cramping.",
  },
];

export default function IuiWhyTrust() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Things To Keep In Mind When Doing IUI"
        title="Why Trust Dr. Mona Dahiya with IUI?"
      />

      <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
        {whyPoints.map((point, idx) => (
          <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
            <WhyPointRow {...point} />
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}
