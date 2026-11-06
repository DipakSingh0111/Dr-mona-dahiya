"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question:
      "What is azoospermia, and what is the difference between obstructive and non-obstructive?",
    answer: (
      <div className="space-y-3">
        <p>
          Azoospermia can be defined as no measurable amount of spermatozoa
          present in an individual&apos;s ejaculate when examined under
          centrifugal pellet. Approximately 1% of men have Azoospermia and
          around 10-15% of infertile men.
        </p>
        <p>Azoospermia can be obstructive or non obstructive in nature.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">Obstructive Azoospermia:</span> When
            the testes are healthy and are able to produce sperms. However the
            spermatozoa are blocked from reaching the ejaculate. Can be caused
            due to previous vasectomy or infection or due to vas deferens not
            being present.
          </li>
          <li>
            <span className="font-semibold">Non Obstructive Azoospermia:</span>{" "}
            Can be caused due to defective genes, Varicocele, hormonal
            imbalance, cryptorchidism and previous exposure to toxic substances.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can a man with azoospermia father a biological child?",
    answer: (
      <div className="space-y-3">
        <p>
          There are several ways in which we can get sperm from you and perform
          ICSI. Hence giving you the option to have biological children. Roughly
          70% - 80% of patients who have obstructive or non obstructive
          azoospermia are able to have biological children.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">For Obstructive Azoospermia:</span>{" "}
            We are able to obtain viable sperms 95-100% of the time using simple
            needle aspiration method (PESA/TESA)
          </li>
          <li>
            <span className="font-semibold">
              For Non Obstructive Azoospermia:
            </span>{" "}
            Using advanced technique of Micro TESE we are able to obtain sperms
            50-60% of the time.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What diagnostic tests are essential to evaluate azoospermia?",
    answer: (
      <div className="space-y-3">
        <p>
          Following are some basic tests that can determine the cause of your
          Azoospermia.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">
              Check semen after centrifugation:
            </span>{" "}
            Semen pellet should not have any spermatozoa and also check for
            semen volume and ph. Low ph with low volume can indicate a blockage
            in ejaculatory duct or absence of vas deferens.
          </li>
          <li>
            <span className="font-semibold">Hormones:</span> Check Total
            Testosterone in morning, FSH, LH and Prolactin. If your FSH value is
            significantly higher (&gt;7.6-10 mIU/ml) and you have low testicular
            volume. There is a high chance of you having NOA.
          </li>
          <li>
            <span className="font-semibold">Genetics:</span> Check for
            Klinefelters (47,XXY) by doing a karyotype. Y-Micro Deletion can
            detect defects in AZF a,b,c region. If you have AZF a/b deletion the
            chances of finding sperms are very negligible. You still have about
            50% chance of obtaining sperms if you have AZFc deletion.
          </li>
          <li>
            <span className="font-semibold">Ultrasound:</span> Scan for any
            varicocele or enlargement of epididymis. Trans rectal scan can
            identify any abnormalities in seminal vesicles and vas deferens.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What is Micro-TESE, and why is it the gold standard for Non-Obstructive Azoospermia?",
    answer:
      "Micro TESE is a technique where sperms can be extracted using a microscope. The magnification used during the procedure is about 20x-25x. The advantage of doing a Micro TESE procedure versus blind picking sperms (TESA) is you increase the chances of finding sperms by almost twice. Where with TESA you have 15% -25% chance of hitting the sperm producing tubules during random biopsy. During Micro TESE we can pick out those tubules that contain sperms and biopsy only those. Reducing damage to the testis by about 70 times.",
  },
  {
    question: "Can azoospermia be cured or treated with medications?",
    answer:
      "Yes if you have secondary causes of testicular failure (Hypogonadotrophic) which makes up 1-2% of all azoospermia cases. We can stimulate spermatogenesis in these patients with Hcg + Recombinant FSH or Clomid or Anastrozole. Once your sperms have reached your ejaculate they can be used for IVF procedure. If your azoospermia is due to blockage or damage in your testis you will not respond to medicines.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What is the difference between PESA, TESA, and Micro-TESE?",
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-semibold">
            PESA (Percutaneous Epididymal Sperm Aspiration):
          </span>{" "}
          Uses a butterfly shaped needle to aspirate sperm containing fluid from
          epididymis. Used when there is a blockage or after Vasectomy.
        </li>
        <li>
          <span className="font-semibold">
            TESA (Testicular Sperm Aspiration):
          </span>{" "}
          Aspirates spermatogenic tissue from testis. Can be used if you have
          obstructive azoospermia or unresolvable high DNA fragmentations.
        </li>
        <li>
          <span className="font-semibold">
            Micro TESE (Micro Surgical Testicular Sperm Aspiration):
          </span>{" "}
          Micro dissecting the testicular tissue to find sperms. Can be used for
          patients with testicular failure.
        </li>
      </ul>
    ),
  },
  {
    question: "What are the common causes and risk factors for azoospermia?",
    answer: (
      <div className="space-y-3">
        <p>Azoospermia can be caused due to many factors.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">Genetics:</span> Klinefelters make
            up for 10%-12% of all non obstructive azoospermia cases. Micro
            Deletions (AZF gene), absence of vas deferens due to mutations in
            CFTR gene.
          </li>
          <li>
            <span className="font-semibold">Past Surgeries/Medical Problems:</span>{" "}
            Having undescended testes at birth, previous history of Mumps in
            childhood. Testicular Torsion/Hernia repair, chemo/radiation.
          </li>
          <li>
            <span className="font-semibold">Blockage:</span> Vasectomy or
            infection from STDs. Chlamydia and Gonorrhea can lead to scar tissue
            formation in Epididymis.
          </li>
          <li>
            <span className="font-semibold">Hormonal Problems:</span> Taking
            Testosterone injections or using steroids can also lead to
            Azoospermia.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Does azoospermia affect sexual performance, erection, or semen appearance?",
    answer:
      "No your sexual life should not be impacted by having azoospermia. Sperms make up less than 2%-5% of your ejaculate. Your volume and colour should appear to be normal. Unless you have a significant drop in testosterone due to primary hypogonadism. Which can cause a decrease in your libido and sex drive.",
  },
  {
    question:
      "What is the success rate of IVF/ICSI using surgically retrieved sperm?",
    answer: (
      <div className="space-y-3">
        <p>
          Once we extract sperms from your testes they will be used for an ICSI
          procedure. Since sperms extracted from your testes are not mobile we
          will need an embryologist to pick good looking sperms. And inject them
          into your partner&apos;s egg.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">
              Rates of fertilization with ICSI:
            </span>{" "}
            65%-75% per egg
          </li>
          <li>
            <span className="font-semibold">Rates of pregnancy:</span> 50%-60%
            per transfer depends on your partner&apos;s age.
          </li>
        </ul>
        <p>
          Yes there are no known anomalies if using sperm from the testes.
          Studies have shown similar outcomes of birth defects using testicular
          sperms compared to conventional IVF (around 2%-3%).
        </p>
      </div>
    ),
  },
  {
    question:
      "How much does azoospermia treatment and surgical sperm retrieval cost in India?",
    answer: (
      <div className="space-y-3">
        <p>Cost depends on the procedure you require.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Workup - Semen Analysis pellet, Hormones, Karyotype and Micro
            Deletion - Range between Rs. 8,000 - Rs. 16,000
          </li>
          <li>
            PESA/TESA - Cost range between Rs. 18,000 - 35,000 depending on the
            procedure and location.
          </li>
          <li>
            Micro TESE - Will cost you between Rs. 65,000 - 1,20,000 depending
            on your case.
          </li>
        </ul>
        <p>
          Once sperms are found we will proceed to do an IVF/ICSI cycle with
          your partner. This will cost you about Rs. 1,25,000 - 1,85,000 (does
          not include medicines for partner).
        </p>
      </div>
    ),
  },
];

export default function AzoospermiaFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Some commonly asked questions about Azoospermia."
        title="Top FAQs About Azoospermia"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
