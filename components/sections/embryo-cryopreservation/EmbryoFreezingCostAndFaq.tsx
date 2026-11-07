"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
} from "@/components/ui/treatment";

const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const pillIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

const costCards = [
  {
    icon: checkIcon,
    title: "Cost of Vitrification",
    description: "Each embryo/batch to be frozen.",
  },
  {
    icon: pillIcon,
    title: "Yearly Storage Cost",
    description: "Charged on a yearly basis.",
  },
  {
    icon: checkIcon,
    title: "Cost to Thaw Embryos",
    description: "When you want to use the embryos.",
  },
  {
    icon: checkIcon,
    title: "Genetics Cost (if applicable)",
    description: "Biopsy for PGT-A or PGT-SR.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How long can embryos be stored?",
    answer: (
      <p>
        There is no fixed time period. You can store them as long as you want,
        depending on the law and your wishes.
      </p>
    ),
  },
  {
    question: "Do frozen embryos work as well as fresh?",
    answer: (
      <p>
        Frozen embryo transfer has a similar outcome to fresh embryo transfer.
        Discuss this with your doctor.
      </p>
    ),
  },
  {
    question: "What happens to unused embryos?",
    answer: (
      <p>
        It depends upon you. You can store them, donate them to research as per
        law, or allow them to be disposed of. All of these would require
        consent.
      </p>
    ),
  },
  {
    question: "Is embryo freezing safe for the baby?",
    answer: (
      <p>
        Studies have shown that vitrified embryos have better health outcomes.
        Discuss this in more detail with your doctor.
      </p>
    ),
  },
  {
    question: "What is the success rate of pregnancy using frozen embryos?",
    answer: (
      <>
        <p>
          The pregnancy rate from frozen embryo transfer is equal to fresh
          embryo transfer. The survival rate of embryos after thawing is more
          than 95–98%. Here are the average pregnancy rates per transfer for
          each age group:
        </p>
        <ul className="mt-2.5 space-y-1.5">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
            <span>
              <strong className="font-bold text-ink">Below 35:</strong> approx.
              50–60%
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
            <span>
              <strong className="font-bold text-ink">35–37 years:</strong>{" "}
              approx. 40–45%
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
            <span>
              <strong className="font-bold text-ink">38–40 years:</strong>{" "}
              approx. 25–35%
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
            <span>
              <strong className="font-bold text-ink">Above 40 years:</strong>{" "}
              approx. 10–15%
            </span>
          </li>
        </ul>
        <p className="mt-2.5">
          If you transfer a euploid embryo (confirmed by PGT-A), pregnancy rates
          are greater than 60% at all ages. Also, the risk of developing OHSS is
          zero with frozen embryo transfer.
        </p>
      </>
    ),
  },
  {
    question: "How long can frozen embryos remain viable in storage?",
    answer: (
      <p>
        Studies have shown that embryos can be stored indefinitely. Babies have
        been born from embryos that were frozen for more than 30 years. As per
        the ART Act 2021, embryos can be stored for up to 10 years, beyond which
        they will be allowed to perish or can be donated to research.
      </p>
    ),
  },
  {
    question:
      "What is the difference between embryo freezing and egg freezing?",
    answer: (
      <p>
        Freezing embryos gives you a higher success rate and survival rate after
        thawing. An egg is a single cell with more water content, so its
        survival rate drops to 85–90%. A blastocyst contains 100–150 cells, with
        a higher survival rate after thawing (&gt;95%).
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does embryo freezing and long-term storage cost?",
    answer: (
      <>
        <p>
          There are 3 different costs you need to consider when you decide to
          store embryos:
        </p>
        <ul className="mt-2.5 space-y-1.5">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
            <span>
              Cost of stimulating the ovaries and vitrifying embryos
              (blastocysts)
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
            <span>Yearly cost of storing the embryos</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
            <span>Cost of thawing and transferring the embryos</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is embryo banking and who benefits most from it?",
    answer: (
      <p>
        Embryo banking involves 2–3 collections to have enough blastocysts to
        transfer. This helps patients who have a low ovarian reserve, who may
        produce only 1–2 blastocysts per retrieval. Having 2–3 euploid embryos
        gives you around a 95% chance of at least one baby. It can also save
        cost on genetic testing when we send all the samples at once.
      </p>
    ),
  },
  {
    question: "Are babies born from frozen embryos healthy?",
    answer: (
      <p>
        Babies born from frozen embryos are as healthy as those born from fresh
        embryos. There is no evidence that frozen embryos are unsafe. In fact,
        due to no hormonal effect during implantation, the baby has a 15–20%
        lower risk of low birth weight.
      </p>
    ),
  },
  {
    question: "How does the embryo freezing process work step-by-step?",
    answer: (
      <>
        <p>
          We use a method called vitrification to freeze the embryo. This
          ensures no ice crystals are formed inside the embryo. Here are the
          basic steps:
        </p>
        <ol className="mt-2.5 space-y-1.5">
          <li className="flex items-start gap-2">
            <span className="font-bold text-rose">1.</span>
            <span>A Day 5 or 6 embryo (blastocyst) is developed.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-rose">2.</span>
            <span>
              The blastocoel is collapsed and dehydrated to make room for
              freezing.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-rose">3.</span>
            <span>
              The embryo is placed in straws and dipped in liquid nitrogen.
            </span>
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "Can frozen embryos be genetically tested (PGT)?",
    answer: (
      <p>
        Normally we take a biopsy of the embryo before freezing to test for
        genetic defects. But if you have frozen embryos without a biopsy, they
        can be thawed, biopsied and refrozen. Most laboratories have a high
        survival rate of 85–90% even after double vitrification.
      </p>
    ),
  },
  {
    question: "What happens to unused or spare frozen embryos?",
    answer: (
      <p>
        Once you are done having children, you can either continue storing them,
        allow them to perish, or donate them to research. This depends on your
        wishes and requires consent forms to be signed.
      </p>
    ),
  },
  {
    question: "Does freezing and thawing damage the embryo?",
    answer: (
      <p>
        Vitrification freezes the embryo quickly and reduces harm to less than
        3–5% of embryos. When thawed, the blastocyst re-expands its cavity
        within 2–4 hours, showing that it is viable for transfer.
      </p>
    ),
  },
];

export function EmbryoFreezingCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Embryo Freezing Cost in Delhi, Noida & Ghaziabad"
        title="Embryo Freezing Cost Details"
        subtitle="It includes the cost to freeze embryos and yearly storage charges. Frozen embryo transfer would be an additional cost."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {costCards.map((card) => (
          <StaggerItem key={card.title}>
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function EmbryoFreezingFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Frequently Asked Questions about
            <br className="hidden sm:inline" /> Embryo Freezing &amp; Banking
          </>
        }
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}

export default function EmbryoFreezingCostAndFaq() {
  return (
    <>
      <EmbryoFreezingCost />
      <EmbryoFreezingFaq />
    </>
  );
}
