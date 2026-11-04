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
    question: "Can a man with zero sperm count have a biological child?",
    answer: (
      <p>
        Often, yes. Azoospermia means no sperm in the semen, but sperm is
        frequently still made in the testes and can be retrieved by PESA, TESA
        or micro-TESE for ICSI.
      </p>
    ),
  },
  {
    question: "How long do male fertility treatments take to work?",
    answer: (
      <p>
        At least 3 months. Sperm takes about 72 to 74 days to form, plus 10 to
        14 days to mature, so a repeat semen test is done after about 90 days.
      </p>
    ),
  },
  {
    question: "Where is Dr. Mona Dahiya's male fertility clinic in Noida?",
    answer: (
      <p>
        At 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar
        Pradesh 201301, reached via Dadri Main Road and the Aqua Line (Sector 50
        station).
      </p>
    ),
  },
  {
    question: "What is a normal sperm count?",
    answer: (
      <p>
        At least 15 million per mL, with 40% or more total motility and 4% or
        more normal forms (WHO reference values).
      </p>
    ),
  },
  {
    question: "What is sperm DNA fragmentation and why does it matter?",
    answer: (
      <p>
        It is damage to the sperm&apos;s genetic material. A DFI above 25% to
        30% is linked to poor embryo growth, failed implantation and miscarriage.
      </p>
    ),
  },
  {
    question: "Does lifestyle really affect sperm?",
    answer: (
      <p>
        Yes. Smoking, heavy drinking, heat (saunas, laptops on the lap) and
        obesity all lower sperm quality, and changes show results in about 3
        months.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can varicocele cause infertility?",
    answer: (
      <p>
        It can lower count and motility. Repair is considered when a varicocele
        is clinically significant and semen quality is affected.
      </p>
    ),
  },
  {
    question: "Is surgical sperm retrieval painful?",
    answer: (
      <p>
        It is done under local or short general anaesthesia; most men have mild
        soreness for 2 to 3 days.
      </p>
    ),
  },
  {
    question: "Which tests should men do first?",
    answer: (
      <p>
        A semen analysis (CASA), then DNA fragmentation, hormone tests and a
        scrotal scan as needed.
      </p>
    ),
  },
  {
    question: "Should both partners be tested together?",
    answer: (
      <p>
        Yes. Male factors are involved in about half of cases, and testing
        together saves months.
      </p>
    ),
  },
  {
    question: "Can I consult online about a semen report?",
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
];

export default function MaleInfertilityNoidaFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Frequently Asked Questions: Male Infertility in Noida"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
