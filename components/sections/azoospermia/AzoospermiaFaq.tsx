"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answerContent: React.ReactNode;
}

const leftFaqs: FAQItem[] = [
  {
    question:
      "What is azoospermia, and what is the difference between obstructive and non-obstructive?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Azoospermia means no measurable spermatozoa in the ejaculate after
          centrifugation. Two clinical types guide treatment:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
                Obstructive Azoospermia (OA, ~40% of cases):
              </strong>{" "}
              Sperm is produced but blocked from reaching the semen.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
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
    answerContent: (
      <div className="space-y-3">
        <p>
          Diagnosis does not mean sterility. Many men still have usable sperm
          in the testis or epididymis:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">OA:</strong> Sperm
              retrieval success is typically 95%–100% with PESA or TESA.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">NOA:</strong>{" "}
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
    answerContent: (
      <div className="space-y-3">
        <p>
          A thorough clinical workup differentiates obstructive from
          non-obstructive causes in four steps:
        </p>
        <ol className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-0.5 text-[13px] font-bold text-[#e83e74]">1.</span>
            <p>
              <strong className="font-semibold text-white">
                Centrifuged Semen Analysis:
              </strong>{" "}
              Verifies zero sperm in the resuspended pellet alongside semen
              volume and pH (pH below 7.2 with low volume indicates ejaculatory
              duct obstruction or CBAVD).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-0.5 text-[13px] font-bold text-[#e83e74]">2.</span>
            <p>
              <strong className="font-semibold text-white">
                Endocrine Profiling:
              </strong>{" "}
              Morning serum Total Testosterone, FSH, LH and Prolactin. Markedly
              elevated FSH (above 7.6–10 mIU/mL) with small testicular volume
              strongly indicates primary testicular failure (NOA).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-0.5 text-[13px] font-bold text-[#e83e74]">3.</span>
            <p>
              <strong className="font-semibold text-white">
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
            <span className="pt-0.5 text-[13px] font-bold text-[#e83e74]">4.</span>
            <p>
              <strong className="font-semibold text-white">
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
    answerContent: (
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
    answerContent: (
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

const rightFaqs: FAQItem[] = [
  {
    question: "What is the difference between PESA, TESA, and Micro-TESE?",
    answerContent: (
      <ul className="space-y-2.5 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              PESA (Percutaneous Epididymal Sperm Aspiration):
            </strong>{" "}
            Needle aspiration from the epididymis — mainly for obstructive
            cases.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              TESA (Testicular Sperm Aspiration):
            </strong>{" "}
            Needle aspiration from testicular tissue; useful in selected OA and
            milder NOA.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
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
    answerContent: (
      <ul className="space-y-2.5 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Genetic Anomalies:
            </strong>{" "}
            e.g. Klinefelter syndrome.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Surgical & Medical History:
            </strong>{" "}
            undescended testes, chemotherapy, prior genital surgery.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Physical Blockages:
            </strong>{" "}
            infections (e.g. Chlamydia), vasectomy, ejaculatory duct stones.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
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
    answerContent: (
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
    answerContent: (
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
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
                Fertilisation Rates:
              </strong>{" "}
              65% to 75% per injected mature oocyte.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
                Clinical Pregnancy Rates:
              </strong>{" "}
              50% to 60% per transfer, primarily dictated by the female
              partner&apos;s age and ovarian reserve.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
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
    answerContent: (
      <div className="space-y-3">
        <p>
          Treatment pricing depends on whether the approach involves medical
          therapy or surgical intervention:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
                Diagnostic Workup (Semen Pellet, Hormones, Karyotype, AZF):
              </strong>{" "}
              ₹8,000 to ₹16,000
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
                Percutaneous Aspiration (PESA / TESA):
              </strong>{" "}
              ₹18,000 to ₹35,000
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
                Advanced Micro-TESE Surgery:
              </strong>{" "}
              ₹65,000 to ₹1,20,000 (reflects operative microscopy, surgical
              consumables and high-complexity embryologist micro-search)
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
            <p>
              <strong className="font-semibold text-white">
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

function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border bg-[#091a3c]/70 transition-colors duration-200 ${
        isOpen
          ? "border-[#e83e74]/45"
          : "border-white/10 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
      >
        <span className="text-[13.5px] leading-snug font-medium text-white sm:text-[14.5px]">
          {item.question}
        </span>
        <FaChevronDown
          className={`size-3 shrink-0 text-slate-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "rotate-180 text-[#f9a8d4]" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-white/10 px-4 pt-3.5 pb-4.5 text-[13px] leading-relaxed text-slate-300 transition-opacity duration-300 sm:px-5 sm:pb-5 sm:text-[13.5px] ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.answerContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AzoospermiaFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Top FAQs About Azoospermia
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {leftFaqs.map((faq, idx) => {
              const id = `left-${idx}`;
              return (
                <FaqCard
                  key={id}
                  item={faq}
                  isOpen={openId === id}
                  onToggle={() => toggle(id)}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {rightFaqs.map((faq, idx) => {
              const id = `right-${idx}`;
              return (
                <FaqCard
                  key={id}
                  item={faq}
                  isOpen={openId === id}
                  onToggle={() => toggle(id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
