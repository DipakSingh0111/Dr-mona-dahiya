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
        One year if you have normal cycles. If your cycles are irregular see a
        doctor sooner. If you are over 35 years old you should see a doctor after
        6 months of trying. If you have extremely painful periods, or you know
        you have blocked tubes, you should see a doctor earlier.
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
        No. If you have blocked tubes on both sides you will have to do IVF. You
        can also have your tubes repaired with Tubal Cannulation or Laparoscopy
        to clip them open.{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="underline decoration-[var(--blue)]/50 underline-offset-2 text-blue"
        >
          Learn more about repairing blocked fallopian tubes
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Does every woman with infertility need IVF?",
    answer: (
      <p>
        No. Only about 1/3 of our patients require IVF to get pregnant. IUI
        stands for Intra Uterine Insemination, and many call it artificial
        insemination. IUI can help many women become pregnant.{" "}
        <Link
          href="/best-iui-doctor-in-noida"
          className="underline decoration-[var(--blue)]/50 underline-offset-2 text-blue"
        >
          Read about IUI and how it can get you pregnant
        </Link>
        .
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
        Yes, many women with PCOD can get pregnant on fertility medication.{" "}
        <Link
          href="/best-pcos-pcod-treatment-centre-in-noida"
          className="underline decoration-[var(--blue)]/50 underline-offset-2 text-blue"
        >
          Read about how medication can help you get pregnant
        </Link>
        .
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I get pregnant with low AMH?",
    answer: (
      <p>
        Yes you can. Women with low AMH have eggs, just less of them. See{" "}
        <Link
          href="/best-low-amh-treatment-in-noida"
          className="underline decoration-[var(--blue)]/50 underline-offset-2 text-blue"
        >
          Low AMH Treatment
        </Link>
        .
      </p>
    ),
  },
  {
    question: "How much does a female fertility workup cost?",
    answer: (
      <p>
        Female infertility evaluations will range from ₹8,000 to ₹16,000, based
        on how many tests you need to have done. Medications to help you ovulate
        will be around ₹3,500 a cycle.
      </p>
    ),
  },
  {
    question: "Is hysteroscopy painful?",
    answer: (
      <p>
        No. We use local anesthesia to perform hysteroscopies, so you will feel
        no pain. If you need general anesthesia you will be asleep.
      </p>
    ),
  },
  {
    question: "Can I consult online before visiting the Noida clinic?",
    answer: (
      <p>
        Yes, we offer a teleconsultation for ₹999 to start your treatment. See{" "}
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
        Yes. Once you reach the age of 35 you start to lose fertility. Don&apos;t
        wait to get pregnant until it&apos;s too late. Schedule an appointment
        today.
      </p>
    ),
  },
];

export default function FemaleInfertilityNoidaFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions: Female Infertility in Noida"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
