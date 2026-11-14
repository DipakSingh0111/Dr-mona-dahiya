"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
  NumberedCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

const diagnosticRows = [
  {
    title: "Semen Analysis",
    text: "After 2-3 days abstinence a computer aided Semen Analysis is done. We check your sperm count, motility and morphology. Strict krugers criteria is used.",
  },
  {
    title: "Sperm DNA Fragmentation Index",
    text: "DFI is measured to know the number of single and double strand breaks in your sperm DNA. Can be done by Halosperm or SCD method.",
  },
  {
    title: "Blood Hormones",
    text: "Hormone profile including total testosterone, LH (early morning fasting sample), FSH, prolactin and thyroid are checked.",
  },
  {
    title: "Scrotal Ultrasound",
    text: "Size of your testes are noted along with presence/absence of varicocele. Done with Colour Doppler.",
  },
  {
    title: "Chromosomal karyotyping and Y chromosome micro-deletions",
    text: "If your sperm count is less than 5 million/ml this test should be done before we try to retrieve sperm from you surgically.",
  },
];

export default function MaleDiagnosticAndProtocol() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Tests to be done before treating male infertility"
          title="Diagnostic Checklist"
          subtitle="Below tests are required to know why your sperm quality is low."
        />

        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
          {diagnosticRows.map((item, idx) => (
            <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow title={item.title} text={item.text} />
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="How do we treat Male Infertility?"
          title="Male Infertility Treatment Protocol"
          subtitle="Below are the treatments offered for male infertility."
        />

        <Stagger
          delay={0.06}
          className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <NumberedCard
              number="1"
              title="Modify Life style"
              description="Life style modifications are the first step towards improving your sperm health. Since it takes 74 days for sperm to develop. Try to avoid smoking and excessive alcohol. Keep your testicles away from high temperature. We will give you anti oxidants to improve your sperm health."
            />
          </StaggerItem>
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <NumberedCard
              number="2"
              title="Medications"
              description="If you have any infection we will start you on antibiotics. In case of low testosterone and high estrogen ratio we will give you medications like Clomiphene or an aromatase inhibitor."
            />
          </StaggerItem>
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <NumberedCard
              number="3"
              title="Repair of Varicocele"
              description="We will recommend surgery for varicocele if you have one and low semen parameters. We can refer you to our urologist to get it done."
            />
          </StaggerItem>
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <NumberedCard
              number="4"
              title="Intra Uterine Insemination (IUI)"
              description={
                <>
                  IUI can be done if your count is slightly low but after
                  processing you have greater than 5-10 million/ml good quality
                  sperm.{" "}
                  <Link href="/best-iui-doctor-in-noida" className={linkClass}>
                    Know more
                  </Link>{" "}
                  →
                </>
              }
            />
          </StaggerItem>
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <NumberedCard
              number="5"
              title="ICSI by using microfluidics"
              description={
                <>
                  If you have severe OAT or high sperm DFI we will process your
                  sperm by microfluidics and pick the best sperm for{" "}
                  <Link
                    href="/intracytoplasmic-sperm-injection-icsi-treatment"
                    className={linkClass}
                  >
                    ICSI
                  </Link>
                  .
                </>
              }
            />
          </StaggerItem>
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <NumberedCard
              number="6"
              title="Surgically retrieve sperm from you."
              description={
                <>
                  PESA, TESA or micro TESE can be done if you don&apos;t have any
                  sperm in your ejaculate.{" "}
                  <Link
                    href="/surgical-sperm-retrieval-tesa-pesa"
                    className={linkClass}
                  >
                    Know more
                  </Link>{" "}
                  →
                </>
              }
            />
          </StaggerItem>
          <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
            <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white p-2 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
              <Image
                src="/shared-gallery/male infertility treatment overview.jpeg"
                alt="Healthy Testis vs Varicocele Testis Diagram"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2"
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Why choose us?"
          title="Why Consult Dr. Mona Dahiya for Male Infertility?"
        />

        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
          <Reveal variant="fadeUp">
            <WhyPointRow
              title="Couple first approach"
              desc="Both partners are treated together and not in isolation."
            />
          </Reveal>
          <Reveal variant="fadeUp" delay={0.04}>
            <WhyPointRow
              title="Sperm selection"
              desc="Use microfluidic device to pick highly motile sperm with less DNA fragmentation. No high speed spinning involved."
            />
          </Reveal>
          <Reveal variant="fadeUp" delay={0.08}>
            <WhyPointRow
              title="Retriever + ICSI can happen on same day."
              desc="Take fresh sperm from testis/epididymis and use for ICSI on top of mature oocyte."
            />
          </Reveal>
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
