"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard
} from "@/components/ui/treatment";
const costCards = [
  {
    iconType: "check" as const,
    title: "Vitrification",
    description: "Freezing of each embryo or batch.",
  },
  {
    iconType: "pills" as const,
    title: "Annual storage",
    description: "Charge for each storage year.",
  },
  {
    iconType: "check" as const,
    title: "Embryo warming",
    description: "At the time of transfer.",
  },
  {
    iconType: "check" as const,
    title: "Genetic testing (optional)",
    description: "If biopsy is planned.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How long can embryos be stored?",
    answer:
      "Embryos can be stored for many years, with timelines set by law and by your consent.",
  },
  {
    question: "Do frozen embryos work as well as fresh?",
    answer:
      "In many patients, frozen transfers do equally well and sometimes better. Your doctor will explain your case.",
  },
  {
    question: "What happens to unused embryos?",
    answer:
      "You decide: continue storage, donate within legal norms or discontinue, with written consent.",
  },
  {
    question: "Is embryo freezing safe for the baby?",
    answer:
      "Current evidence for vitrified embryos is reassuring. Your doctor will go through the details.",
  },
  {
    question: "What is the success rate of pregnancy using frozen embryos?",
    answer: (
      <>
        <p>
          Frozen Embryo Transfer (FET) achieves live birth rates equal to or higher than
          fresh transfers, with post-thaw survival rates exceeding{" "}
          <strong className="text-white">95% to 98%</strong>. Live birth rates per
          transfer by age group:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong className="text-white">Under 35:</strong> ~50%–60%
          </li>
          <li>
            <strong className="text-white">35–37:</strong> ~40%–45%
          </li>
          <li>
            <strong className="text-white">38–40:</strong> ~25%–35%
          </li>
          <li>
            <strong className="text-white">Over 40:</strong> ~10%–15% (rises to{" "}
            <strong className="text-white">60%+</strong> across all ages when transferring
            a PGT-A confirmed euploid blastocyst).
          </li>
        </ul>
        <p className="mt-2">
          FET also eliminates ovarian hyperstimulation syndrome (OHSS) risks by avoiding
          fresh stimulation during implantation.
        </p>
      </>
    ),
  },
  {
    question: "How long can frozen embryos remain viable in storage?",
    answer: (
      <>
        Biologically, embryos stored in liquid nitrogen at{" "}
        <strong className="text-white">-196°C</strong> remain viable indefinitely because
        metabolic activity is suspended. Healthy live births have occurred from embryos
        stored for over <strong className="text-white">20 years</strong>. Under India&apos;s{" "}
        <strong className="text-white">ART Act 2021 (Section 23)</strong>, statutory embryo
        storage is permitted for up to <strong className="text-white">10 years</strong>,
        after which embryos are allowed to perish or be donated to accredited research with
        patient consent.
      </>
    ),
  },
  {
    question: "What is the difference between embryo freezing and egg freezing?",
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-white">Cellular Resilience:</strong> An unfertilised egg
          is a single, water-dense cell with an 85%–90% thaw survival rate. A Day 5
          blastocyst contains 100–150 cells, achieving{" "}
          <strong className="text-white">&gt;95% thaw survival</strong>.
        </li>
        <li>
          <strong className="text-white">Diagnostic Certainty:</strong> Egg freezing
          preserves unverified potential. Embryo freezing confirms fertilization, cleavage
          rates, and blastocyst development beforehand.
        </li>
      </ul>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does embryo freezing and long-term storage cost?",
    answer: (
      <>
        <p>Costs divide into three transparent phases:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Initial Clinical Cycle:</strong> Ovarian
            stimulation, egg retrieval, fertilization (IVF/ICSI), and blastocyst
            vitrification.
          </li>
          <li>
            <strong className="text-white">Annual Storage Maintenance:</strong> Liquid
            nitrogen upkeep and cryo-tank monitoring, billed annually or in multi-year
            blocks.
          </li>
          <li>
            <strong className="text-white">Thaw &amp; Transfer (FET):</strong> Endometrial
            preparation, laboratory embryo warming, and ultrasound-guided transfer when
            ready to conceive.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "What is embryo banking and who benefits most from it?",
    answer: (
      <>
        <p>
          Embryo banking involves{" "}
          <strong className="text-white">2 to 3 consecutive retrieval cycles</strong> to
          stockpile blastocysts before scheduling a transfer. It is ideal for:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Diminished Ovarian Reserve (DOR):</strong>{" "}
            Patients with low AMH (below 1.1 ng/mL) or AFC below 6 yielding only 1–2
            blastocysts per cycle.
          </li>
          <li>
            <strong className="text-white">Multi-Child Planning:</strong> Securing{" "}
            <strong className="text-white">2 to 3 euploid blastocysts</strong> gives a ~95%
            statistical chance of at least one live birth.
          </li>
          <li>
            <strong className="text-white">Cost Efficiency for PGT-A:</strong> Batching
            biopsies from multiple rounds into one lab shipment lowers genetic testing
            fees.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Are babies born from frozen embryos healthy?",
    answer: (
      <>
        Extensive data covering over{" "}
        <strong className="text-white">1 million FET births</strong> shows no increase in
        congenital defects, developmental delays, or genetic abnormalities compared to
        spontaneous conceptions. Because FET occurs in an unmedicated or hormonally
        balanced uterine lining, babies have a{" "}
        <strong className="text-white">
          15% to 20% lower risk of low birth weight and prematurity
        </strong>{" "}
        compared to fresh IVF transfers.
      </>
    ),
  },
  {
    question: "How does the embryo freezing process work step-by-step?",
    answer: (
      <>
        <p>
          Vitrification flash-freezes embryos at over{" "}
          <strong className="text-white">15,000°C per minute</strong> to prevent damaging
          ice crystals:
        </p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Blastocyst Culture:</strong> Embryos grow to Day
            5/6 (100–150 cells).
          </li>
          <li>
            <strong className="text-white">Collapsing &amp; Dehydration:</strong> The fluid
            cavity is collapsed via laser pulse, and cryoprotectants replace intracellular
            water.
          </li>
          <li>
            <strong className="text-white">Vitrification:</strong> Embryos are loaded onto
            micro-straws and plunged directly into liquid nitrogen at{" "}
            <strong className="text-white">-196°C</strong>.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "Can frozen embryos be genetically tested (PGT)?",
    answer: (
      <>
        Yes. While the standard protocol biopsies 4–6 trophectoderm cells on{" "}
        <strong className="text-white">Day 5/6 prior to initial vitrification</strong>,
        previously frozen unbiopsied embryos can be thawed, biopsied, and re-frozen.
        High-complexity labs maintain an{" "}
        <strong className="text-white">95%–98% survival rate</strong> for double-vitrified
        embryos.
      </>
    ),
  },
  {
    question: "What happens to unused or spare frozen embryos?",
    answer: (
      <>
        <p>
          Once family building is complete, patients have clear, legally documented
          choices:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Continued Storage:</strong> Extended through
            annual renewal within statutory limits.
          </li>
          <li>
            <strong className="text-white">Compassionate Thaw:</strong> Allowed to perish
            naturally in the laboratory under written consent of both partners.
          </li>
          <li>
            <strong className="text-white">Research Donation:</strong> Donated to registered
            stem cell and reproductive biology research under the ART Act 2021.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Does freezing and thawing damage the embryo?",
    answer: (
      <>
        With modern vitrification, post-thaw damage occurs in fewer than{" "}
        <strong className="text-white">2% to 5% of embryos</strong>. Because it solidifies
        cells into a glass-like state without jagged ice crystals, cellular membranes and
        DNA remain intact. Thawed blastocysts re-expand their cavity within 2 to 4 hours
        in the incubator, confirming functional viability before transfer.
      </>
    ),
  },
];

export default function EmbryoFreezingCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="Cost covers the freezing procedure and an annual storage charge. Transfers are charged separately."
        />

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >
            {costCards.map((card) => (
              <StaggerItem key={card.title}>
              <CostFactorCard {...card} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Frequently Asked Questions about Embryo Freezing &amp; Banking"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
