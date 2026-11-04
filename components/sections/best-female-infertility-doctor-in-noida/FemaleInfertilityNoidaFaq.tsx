"use client";

import Link from "next/link";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "When should I see a female infertility doctor in Noida?",
    answer: (
      <p>
        After 12 months of trying (6 months if you are 35 or older), or sooner
        with irregular periods, severe period pain or past miscarriages.
      </p>
    ),
  },
  {
    question: "Where is Dr. Mona Dahiya’s female fertility clinic in Noida?",
    answer: (
      <p>
        At 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar
        Pradesh 201301, easily reached from Sectors 50, 75, 76 and 78 and the
        Noida-Greater Noida Expressway.
      </p>
    ),
  },
  {
    question: "Can blocked fallopian tubes be treated without surgery?",
    answer: (
      <p>
        Not usually. Medicines cannot clear true blockages or scar tissue. Minor
        mucus plugs sometimes clear during an HSG, but true blockages on both
        sides are usually bypassed with IVF.
      </p>
    ),
  },
  {
    question: "Does every woman with infertility need IVF?",
    answer: (
      <p>
        No. More than half conceive with simpler steps such as Letrozole, timed
        intercourse or IUI.
      </p>
    ),
  },
  {
    question: "Which tests should I do first?",
    answer: (
      <p>
        AMH with an antral follicle scan, an HSG, a uterine scan, and thyroid
        and prolactin tests, with a semen analysis for your partner.
      </p>
    ),
  },
  {
    question: "Can PCOS be treated in Noida without IVF?",
    answer: (
      <p>
        Often, yes. Lifestyle changes, inositol or metformin and Letrozole
        restore ovulation for many women.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I get pregnant with low AMH?",
    answer: (
      <p>
        Yes. Low AMH means fewer eggs, not poor quality. Tailored protocols help
        many women conceive with their own eggs.
      </p>
    ),
  },
  {
    question: "How much does a female fertility workup cost?",
    answer: (
      <p>
        ₹8,000 to ₹16,000 for the initial tests; ovulation induction then costs
        ₹3,000 to ₹6,000 a cycle.
      </p>
    ),
  },
  {
    question: "Is hysteroscopy painful?",
    answer: (
      <p>
        Office hysteroscopy takes 10 to 15 minutes under a local block; operative
        hysteroscopy is done under short anaesthesia.
      </p>
    ),
  },
  {
    question: "Can I consult online before visiting the Noida clinic?",
    answer: (
      <p>
        Yes. An online consultation costs ₹1,000. See{" "}
        <Link
          href="/ivf-consultation-online"
          className="underline decoration-[var(--blue)]/50 underline-offset-2 text-blue"
        >
          Online Consultation
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Does age affect female fertility?",
    answer: (
      <p>
        Yes. Egg numbers and quality fall after 35, so early evaluation helps
        protect your options.
      </p>
    ),
  },
];

export default function FemaleInfertilityNoidaFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Frequently Asked Questions: Female Infertility in Noida"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
