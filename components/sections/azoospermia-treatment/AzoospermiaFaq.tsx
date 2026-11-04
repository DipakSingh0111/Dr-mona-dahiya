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
          Azoospermia means no measurable spermatozoa in the ejaculate after
          centrifugation. Two clinical types guide treatment:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Obstructive Azoospermia (OA, ~40% of cases):
              </strong>{" "}
              Sperm is produced but blocked from reaching the semen.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Non-Obstructive Azoospermia (NOA, ~60% of cases):
              </strong>{" "}
              Production inside the testis is severely reduced or absent.
            </p>
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
          Diagnosis does not mean sterility. Many men still have usable sperm
          in the testis or epididymis:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">OA:</strong> Sperm
              retrieval success is typically 95%–100% with PESA or TESA.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">NOA:</strong>{" "}
              Micro-TESE finds sperm in about 50%–60% of carefully selected
              cases.
            </p>
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
          A thorough clinical workup differentiates obstructive from
          non-obstructive causes in four steps:
        </p>
        <ol className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-0.5 text-[13px] font-bold text-rose">1.</span>
            <p>
              <strong className="font-semibold text-black">
                Centrifuged Semen Analysis:
              </strong>{" "}
              Verifies zero sperm in the resuspended pellet alongside semen
              volume and pH (pH below 7.2 with low volume indicates ejaculatory
              duct obstruction or CBAVD).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-0.5 text-[13px] font-bold text-rose">2.</span>
            <p>
              <strong className="font-semibold text-black">
                Endocrine Profiling:
              </strong>{" "}
              Morning serum Total Testosterone, FSH, LH and Prolactin. Markedly
              elevated FSH (above 7.6–10 mIU/mL) with small testicular volume
              strongly indicates primary testicular failure (NOA).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-0.5 text-[13px] font-bold text-rose">3.</span>
            <p>
              <strong className="font-semibold text-black">
                Genetic Testing:
              </strong>{" "}
              Karyotyping to rule out Klinefelter syndrome (47,XXY) and
              Y-chromosome microdeletion testing (AZF a, b, c regions). Men with
              complete AZFa or AZFb deletions have virtually no chance of sperm
              retrieval; AZFc deletions retain about a 50% Micro-TESE retrieval
              success rate.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-0.5 text-[13px] font-bold text-rose">4.</span>
            <p>
              <strong className="font-semibold text-black">
                Scrotal & Transrectal Ultrasound (TRUS):
              </strong>{" "}
              Identifies subclinical varicoceles, epididymal dilation, seminal
              vesicle cysts, or absent vas deferens.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "What is Micro-TESE, and why is it the gold standard for Non-Obstructive Azoospermia?",
    answer: (
      <div className="space-y-3">
        <p>
          Microdissection Testicular Sperm Extraction (Micro-TESE) is an
          advanced microsurgical procedure performed under an operating
          microscope at 20x to 25x magnification. Unlike blind random needle
          biopsies (TESA) that hit active tubules only 15%–25% of the time,
          Micro-TESE allows the surgeon to inspect the seminiferous tubules
          directly.
        </p>
        <p>
          The surgeon selectively excises only opaque, dilated, sperm-producing
          tubules while preserving thin, atrophic tubules and delicate
          testicular blood vessels. This doubles sperm retrieval rates to
          50%–60% while reducing tissue loss by 70-fold compared to conventional
          open biopsies.
        </p>
      </div>
    ),
  },
  {
    question: "Can azoospermia be cured or treated with medications?",
    answer: (
      <div className="space-y-3">
        <p>
          Medication is only curative in cases of Hypogonadotropic Hypogonadism
          (secondary testicular failure), which accounts for roughly 1% to 2% of
          all azoospermia cases. In these patients, the pituitary gland fails to
          signal otherwise normal testes.
        </p>
        <p>
          Gonadotropin therapy (hCG paired with recombinant FSH), and in
          selected men clomiphene citrate or anastrozole, stimulates natural
          spermatogenesis, restoring viable sperm directly into the ejaculate
          within 6 to 12 months without surgery. For physical obstructions or
          intrinsic testicular damage, medications are ineffective.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What is the difference between PESA, TESA, and Micro-TESE?",
    answer: (
      <ul className="space-y-2.5 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-rose select-none">•</span>
          <p>
            <strong className="font-semibold text-black">
              PESA (Percutaneous Epididymal Sperm Aspiration):
            </strong>{" "}
            Needle aspiration from the epididymis — mainly for obstructive
            cases.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-rose select-none">•</span>
          <p>
            <strong className="font-semibold text-black">
              TESA (Testicular Sperm Aspiration):
            </strong>{" "}
            Needle aspiration from testicular tissue; useful in selected OA and
            milder NOA.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-rose select-none">•</span>
          <p>
            <strong className="font-semibold text-black">
              Micro-TESE (Microsurgical Testicular Sperm Extraction):
            </strong>{" "}
            Microscope-guided search for sperm-producing tubules — the preferred
            approach for NOA.
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "What are the common causes and risk factors for azoospermia?",
    answer: (
      <ul className="space-y-2.5 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-rose select-none">•</span>
          <p>
            <strong className="font-semibold text-black">
              Genetic Anomalies:
            </strong>{" "}
            e.g. Klinefelter syndrome.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-rose select-none">•</span>
          <p>
            <strong className="font-semibold text-black">
              Surgical & Medical History:
            </strong>{" "}
            undescended testes, chemotherapy, prior genital surgery.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-rose select-none">•</span>
          <p>
            <strong className="font-semibold text-black">
              Physical Blockages:
            </strong>{" "}
            infections (e.g. Chlamydia), vasectomy, ejaculatory duct stones.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-rose select-none">•</span>
          <p>
            <strong className="font-semibold text-black">
              Exogenous Hormone Use:
            </strong>{" "}
            Anabolic steroid misuse or testosterone replacement therapy (TRT),
            which shuts down pituitary LH/FSH signals via negative feedback.
          </p>
        </li>
      </ul>
    ),
  },
  {
    question:
      "Does azoospermia affect sexual performance, erection, or semen appearance?",
    answer: (
      <div className="space-y-3">
        <p>
          In the vast majority of men, no. Over 90% of ejaculate volume is made
          downstream by the seminal vesicles and prostate gland; sperm
          contributes less than 2% to 5% of total seminal fluid.
        </p>
        <p>
          Ejaculate colour, consistency, libido and erectile function remain
          entirely normal unless severe primary hypogonadism is present (low
          testosterone causing fatigue and reduced sex drive). Men with
          azoospermia ejaculate normally and rarely suspect any issue until an
          infertility workup is conducted.
        </p>
      </div>
    ),
  },
  {
    question:
      "What is the success rate of IVF/ICSI using surgically retrieved sperm?",
    answer: (
      <div className="space-y-3">
        <p>
          When viable sperm is retrieved via PESA, TESA or Micro-TESE, it is
          paired with Intracytoplasmic Sperm Injection (ICSI). Because
          testicular sperm lack the full progressive motility of ejaculated
          cells, an embryologist manually selects structurally sound, viable
          sperm and injects one into each mature egg:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Fertilisation Rates:
              </strong>{" "}
              65% to 75% per injected mature oocyte.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Clinical Pregnancy Rates:
              </strong>{" "}
              50% to 60% per transfer, primarily dictated by the female
              partner&apos;s age and ovarian reserve.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Neonatal Health:
              </strong>{" "}
              Long-term follow-up data shows children conceived using surgically
              retrieved testicular sperm have birth defect rates comparable to
              conventional IVF with ejaculated sperm (~2%–3%).
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "How much does azoospermia treatment and surgical sperm retrieval cost in India?",
    answer: (
      <div className="space-y-3">
        <p>
          Treatment pricing depends on whether the approach involves medical
          therapy or surgical intervention:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Diagnostic Workup (Semen Pellet, Hormones, Karyotype, AZF):
              </strong>{" "}
              ₹8,000 to ₹16,000
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Percutaneous Aspiration (PESA / TESA):
              </strong>{" "}
              ₹18,000 to ₹35,000
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Advanced Micro-TESE Surgery:
              </strong>{" "}
              ₹65,000 to ₹1,20,000 (reflects operative microscopy, surgical
              consumables and high-complexity embryologist micro-search)
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-rose select-none">•</span>
            <p>
              <strong className="font-semibold text-black">
                Subsequent ICSI & Vitrification Cycle:
              </strong>{" "}
              ₹1,25,000 to ₹1,85,000 (excluding female stimulation medications)
            </p>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function remain() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Top FAQs About Azoospermia"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
