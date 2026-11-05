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
        Yes, in most cases there is sperm production happening inside the testes
        which we can retrieve through surgery (PESA/TESE/Micro TESE) and use for
        doing ICSI.
      </p>
    ),
  },
  {
    question: "How long do male fertility treatments take to work?",
    answer: (
      <p>
        Minimum 3 months, because sperm take 72-74 days to develop and 10-14 days
        to get ready for ejaculation. So we generally repeat the test after 90
        days.
      </p>
    ),
  },
  {
    question: "Where is Dr. Mona Dahiya’s male fertility clinic in Noida?",
    answer: (
      <p>
        We are at 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida,
        U.P. 201301. You can reach us via Dadri Main Road or Aqua Line Metro
        station at Sector 50, Noida.
      </p>
    ),
  },
  {
    question: "What is a normal sperm count?",
    answer: (
      <p>
        Your count should be more than 15 million/ml with at least 40% total
        motility and more than 4% normal morphology.
      </p>
    ),
  },
  {
    question: "What is sperm DNA fragmentation and why does it matter?",
    answer: (
      <p>
        These are damage caused to your sperm DNA. If your sperm has more than
        25-30% DNA fragmented, its chances of giving a healthy embryo are lower
        and it can lead to abortion as well.
      </p>
    ),
  },
  {
    question: "Does lifestyle really affect sperm?",
    answer: (
      <p>
        Yes. If you quit smoking, alcohol and avoid exposure to heat (sitting
        with a laptop on your lap and baths in hot water) and reduce your weight,
        it will help in improving your sperm quality in 3 months’ time.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can varicocele cause infertility?",
    answer: (
      <p>
        Yes, it can reduce your count and motility. We will treat you for
        varicocele if it is of clinical significance.
      </p>
    ),
  },
  {
    question: "Is surgical sperm retrieval painful?",
    answer: (
      <p>
        You will feel some pain after the procedure but we use either local
        anaesthetic or a small dose of general anaesthesia to keep you
        comfortable.
      </p>
    ),
  },
  {
    question: "Which tests should men do first?",
    answer: (
      <p>
        Semen analysis + DNA fragmentation, followed by hormonal work up and USG
        depending on findings of the initial semen analysis.
      </p>
    ),
  },
  {
    question: "Should both partners be tested together?",
    answer: (
      <p>
        Yes, almost 50% of the time the issue is because of male factor. It’s
        always better to diagnose the couple together to save time.
      </p>
    ),
  },
  {
    question: "Can I consult online about a semen report?",
    answer: (
      <p>
        Yes, you can schedule an online consultation and we will evaluate your
        semen reports. Price is ₹1,000.{" "}
        <Link
          href="/ivf-consultation-online"
          className="underline decoration-[var(--blue)]/50 underline-offset-2 text-blue"
        >
          Click here
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
        eyebrow="Some common questions asked by our male infertility patients"
        title="Frequently Asked Questions: Male Infertility in Noida"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
