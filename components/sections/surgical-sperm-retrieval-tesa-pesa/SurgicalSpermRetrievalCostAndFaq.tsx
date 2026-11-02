"use client";

import { FaCheck, FaPills } from "react-icons/fa";
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
    icon: <FaCheck className="size-3.5" />,
    title: "Procedure",
    description: "PESA, TESA or Micro-TESE.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Anaesthesia and day-care",
    description: "Anaesthesia and short stay.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Laboratory search and freezing",
    description: "Sperm search, preparation and storage.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "ICSI cycle",
    description: "Partner stimulation, ICSI and embryo transfer.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is Surgical Sperm Retrieval (SSR), and who needs it?",
    answer:
      "Surgical Sperm Retrieval refers to a group of minimally invasive procedures used to extract viable sperm directly from the testicle or epididymis when none are present in the ejaculate. It is primarily indicated for men with azoospermia (zero sperm count)—either obstructive (caused by blockages, prior vasectomy, or congenital absence of the vas deferens) or non-obstructive (testicular production failure due to genetic, hormonal, or post-chemotherapy factors).",
  },
  {
    question:
      "What are the different types of SSR (PESA, TESA, TESE, Micro-TESE)?",
    answer: (
      <>
        <p>
          SSR techniques range from simple needle aspirations to advanced
          microsurgical dissections:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-4">
          <li>
            <strong className="text-white">
              PESA (Percutaneous Epididymal Sperm Aspiration):
            </strong>{" "}
            A fine needle draws fluid directly from the epididymis; standard for
            obstructive azoospermia.
          </li>
          <li>
            <strong className="text-white">
              TESA (Testicular Sperm Aspiration):
            </strong>{" "}
            A needle aspirates seminiferous tubule tissue directly from the
            testis; useful for obstructive azoospermia or high DNA fragmentation.
          </li>
          <li>
            <strong className="text-white">
              TESE (Testicular Sperm Extraction):
            </strong>{" "}
            A small open biopsy through the scrotal skin to remove a small piece
            of testicular tissue.
          </li>
          <li>
            <strong className="text-white">
              Micro-TESE (Microsurgical TESE):
            </strong>{" "}
            Performed under an operating microscope (20x–25x magnification) to
            pinpoint dilated, sperm-producing tubules; the gold standard for
            non-obstructive azoospermia (NOA).
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the success rate of finding sperm with SSR?",
    answer: (
      <>
        <p>
          Success depends directly on whether the condition is obstructive or
          non-obstructive:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-4">
          <li>
            <strong className="text-white">
              Obstructive Azoospermia (OA):
            </strong>{" "}
            Sperm retrieval success rates exceed{" "}
            <strong className="text-white">95% to 100%</strong> using PESA or
            TESA, as normal sperm production is taking place in the testicle.
          </li>
          <li>
            <strong className="text-white">
              Non-Obstructive Azoospermia (NOA):
            </strong>{" "}
            Conventional TESE finds sperm in roughly 30% to 40% of cases, while{" "}
            <strong className="text-white">
              Micro-TESE achieves a 50% to 60% sperm retrieval rate
            </strong>{" "}
            by selectively targeting active tubules while preserving healthy
            testicular tissue.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Is surgical sperm retrieval painful, and what anesthesia is used?",
    answer:
      "The procedure is virtually painless during execution. Needle aspiration procedures (PESA/TESA) are typically completed under local anesthesia with mild sedation in 15 to 20 minutes. Open or microsurgical techniques (TESE/Micro-TESE) are conducted under short general or spinal anesthesia. Post-procedure discomfort is mild to moderate, feels like a dull ache, and is well controlled with standard oral analgesics and scrotal support for 2 to 3 days.",
  },
  {
    question:
      "Can surgically retrieved sperm be used for IUI, or is IVF/ICSI mandatory?",
    answer: (
      <>
        Surgically retrieved sperm cannot be used for Intrauterine Insemination
        (IUI). Sperm taken directly from the epididymis or testis are present in
        very low concentrations and lack the full progressive motility acquired
        during transit. Therefore,{" "}
        <strong className="text-white">
          Intracytoplasmic Sperm Injection (ICSI)
        </strong>{" "}
        is mandatory, where an embryologist selects a single viable retrieved
        sperm and injects it directly into each mature egg.
      </>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What is the difference between TESA and Micro-TESE?",
    answer:
      "TESA is a blind, needle-based aspiration suitable when sperm production is uniform and plentiful but physically blocked from exiting (obstructive azoospermia). Micro-TESE is an extensive surgical procedure using an operating microscope to carefully inspect the testicular parenchyma, selectively harvesting isolated pockets of active sperm production in men with primary testicular failure while minimizing vascular damage and preserving testosterone production.",
  },
  {
    question: "How much does Surgical Sperm Retrieval cost in India / Delhi NCR?",
    answer: (
      <>
        <p>
          The cost varies based on the complexity of the technique and surgical
          equipment:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-4">
          <li>
            <strong className="text-white">PESA / TESA:</strong> ₹15,000 to
            ₹30,000
          </li>
          <li>
            <strong className="text-white">Conventional Open TESE:</strong>{" "}
            ₹25,000 to ₹45,000
          </li>
          <li>
            <strong className="text-white">Micro-TESE:</strong> ₹55,000 to
            ₹1,10,000
          </li>
        </ul>
        <p className="mt-2">
          Pricing is influenced by operating room time, the use of
          high-resolution micro-surgical optics, and on-site embryology
          witnessing and cryopreservation of retrieved samples.
        </p>
      </>
    ),
  },
  {
    question: "Can surgically retrieved sperm be frozen for future IVF cycles?",
    answer:
      "Yes. When sufficient viable sperm are retrieved during SSR, they are immediately cryopreserved (vitrified) in liquid nitrogen at -196°C. Banking frozen testicular or epididymal sperm eliminates the need for the male partner to undergo repeat surgical procedures on the exact day of the female partner's future egg retrieval cycles, with thaw survival rates typically exceeding 80% to 90%.",
  },
  {
    question: "What is the recovery time after a surgical sperm retrieval procedure?",
    answer: (
      <>
        <p>Recovery is rapid because these are day-care procedures:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-4">
          <li>
            <strong className="text-white">PESA / TESA:</strong> Patients return
            to desk work and routine non-strenuous activities within{" "}
            <strong className="text-white">24 to 48 hours</strong>.
          </li>
          <li>
            <strong className="text-white">Micro-TESE / Open TESE:</strong> Expect{" "}
            <strong className="text-white">2 to 4 days</strong> of rest to allow
            scrotal incisions to heal cleanly.
          </li>
        </ul>
        <p className="mt-2">
          Patients are advised to wear snug scrotal support underwear and avoid
          heavy weightlifting, cycling, and sexual intercourse for 7 to 10 days.
        </p>
      </>
    ),
  },
  {
    question:
      "Does surgical sperm retrieval affect natural testosterone levels or sexual function?",
    answer: (
      <>
        Simple aspiration (PESA/TESA) has no measurable impact on long-term
        testosterone production or erectile function. With Micro-TESE, because
        tissue removal is highly targeted and micro-vascular structures are
        preserved, long-term testosterone levels remain stable in over{" "}
        <strong className="text-white">90% to 95% of patients</strong>, though a
        transient, self-resolving dip in serum testosterone may occur for the
        first 3 to 6 months post-surgery.
      </>
    ),
  },
];

export default function SurgicalSpermRetrievalCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="Cost depends on the procedure, anaesthesia, laboratory work and whether sperm is frozen for later use."
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
          title="Frequently Asked Questions about Surgical Sperm Retrieval"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
