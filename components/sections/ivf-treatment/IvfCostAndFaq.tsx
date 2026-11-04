"use client";

import Link from "next/link";
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
    title: "Ovarian stimulation medicines",
    description:
      "Dose and duration vary with age, AMH and response — the largest variable in most cycles.",
  },
  {
    title: "Laboratory and cleanroom fees",
    description:
      "Egg retrieval, fertilisation, culture and embryologist time in a controlled lab environment.",
  },
  {
    title: "Advanced laboratory technologies",
    description:
      "ICSI, assisted hatching or genetic testing when indicated — priced only if used.",
  },
  {
    title: "Vitrification and storage",
    description:
      "Freezing surplus embryos and annual storage, if you bank embryos for later transfer.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the success rate of IVF?",
    answer:
      "Success depends on age, ovarian reserve, embryo quality and uterine factors. Younger patients with good reserve generally see higher live-birth rates per transfer. Dr. Mona shares realistic numbers for your profile at consultation — not a one-size clinic average.",
  },
  {
    question: "Is IVF painful?",
    answer:
      "Daily injections cause mild discomfort for most people. Egg retrieval is done under sedation, so you should not feel pain during the procedure. Mild cramping afterward is common and settles quickly.",
  },
  {
    question: "How long does one IVF cycle take?",
    answer:
      "A typical fresh cycle spans about 4–6 weeks from baseline scan to pregnancy test. Freeze-all or deferred transfer cycles may add time for lining preparation.",
  },
  {
    question: "What is included in the IVF cost breakdown?",
    answer:
      "Estimates usually cover stimulation monitoring, retrieval, lab fertilisation/culture and one transfer. Medicines, ICSI, freezing, PGT and anaesthesia are itemised separately so you know what you are paying for.",
  },
  {
    question: "Where are the clinics located?",
    answer:
      "Dr. Mona Dahiya consults in Lajpat Nagar (Delhi), Sector 49 (Noida) and Raj Nagar Extension (Ghaziabad). You can book in-clinic or online follow-ups.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "IUI vs IVF — which should I choose?",
    answer: (
      <>
        IUI is simpler and suited to selected mild cases. IVF is preferred for tubal
        factor, significant male factor, low reserve, endometriosis, or after failed
        IUI. Your age and reports decide the safer first step.
      </>
    ),
  },
  {
    question: "When is embryo transfer done?",
    answer:
      "Blastocyst transfer is usually on day 5 after retrieval for fresh cycles. Frozen transfers are scheduled when the lining is ready, often in a later cycle.",
  },
  {
    question: "IVF vs ICSI — what is the difference?",
    answer: (
      <>
        In IVF, sperm and egg are combined in a dish. In{" "}
        <Link
          href="/treatments"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          ICSI Treatment
        </Link>
        , a single sperm is injected into each mature egg — useful for male factor or
        prior fertilisation failure.
      </>
    ),
  },
  {
    question: "Can IVF help with PCOS or low AMH?",
    answer: (
      <>
        Yes. PCOS needs careful stimulation to avoid OHSS; low AMH needs tailored dosing
        and realistic counselling. See also{" "}
        <Link
          href="/best-pcos-prod-treatment-centre-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          PCOS treatment
        </Link>{" "}
        and{" "}
        <Link
          href="/best-low-amh-treatment-in-noida"
          className="font-medium text-blue underline underline-offset-2 hover:text-white"
        >
          Low AMH care
        </Link>
        .
      </>
    ),
  },
];

export default function IvfCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of IVF"
          subtitle="Most cycles in Delhi NCR fall between roughly ₹1.5 lakh and ₹2.5 lakh, depending on medicines and lab add-ons. A written estimate is shared before you start."
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
          title="Top FAQs About IVF Treatment in Delhi NCR"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
