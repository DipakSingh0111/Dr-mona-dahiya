"use client";

import {
  FaCalendarAlt,
  FaCapsules,
  FaCheck,
  FaFlask,
} from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  ChecklistRow,
  CostFactorCard,
  ProtocolCard,
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const nonRefundableServices = [
  {
    title: "Consultations",
    icon: <FaCheck className="size-3.5" />,
    description:
      "For all consultations, whether online or offline, the fee is earned once the consultation begins.",
  },
  {
    title: "Lab tests and scans",
    icon: <FaFlask className="size-3.5" />,
    description:
      "Bloods, virus markers, semen analysis (CASA, Halosperm DFI) and USG scans are non-refundable once samples are drawn or the scan is performed.",
  },
  {
    title: "Fertility medicines",
    icon: <FaCapsules className="size-3.5" />,
    description:
      "Any cold-chain medication dispensed from our pharmacy is non-returnable, as it needs to be stored at 2°C–8°C, which we cannot validate once it is taken out of our store.",
  },
];

const outcomePoints = [
  "All your fees include, but are not limited to, expert advice, lab work, micromanipulation, disposables, sterilisation and use of facility.",
  "If your cycle ends with a lower number of oocytes, infertile oocytes, arrested embryo, failed implantation or pregnancy loss, no refunds or remission will be given.",
];

const cancellationStages = [
  {
    number: "1",
    title: "Stage 1: Before treatment starts",
    bullets: [
      "By giving us written intimation prior to your stimulation/procedure",
      "You will receive a refund for the unused package, excluding the tests you did before the cycle",
    ],
  },
  {
    number: "2",
    title: "Stage 2: After treatment has started",
    bullets: [
      "Fees are non-refundable once your medications start, monitoring begins or lab procedures are done",
      "If there are surgical/lab steps that were not done, we may allow a credit on a future cycle at our discretion",
    ],
  },
];

const preTreatmentCriteria = [
  "Provide us written intimation along with supporting documents (a relevant medical condition that will not allow you to undergo anaesthesia/stimulation, or unforeseen circumstances).",
  "Deduct fees paid for consultation and counselling.",
  "Deduct all scans, bloods and semen tests that you have done previously.",
  "Once reconciled by us, your refund will take 14–21 business days. It will be refunded through NEFT/RTGS/card, whichever you used initially.",
];

const cycleConversions = [
  {
    title: "IVF converted to IUI",
    icon: <FaCalendarAlt className="size-3.5" />,
    description:
      "If you don't get enough follicles and are advised to continue with an IUI, your billing will be adjusted to an IUI bill. You will receive a credit for the unused embryology costs.",
  },
  {
    title: "Cycle stopped before egg retrieval",
    icon: <FaCheck className="size-3.5" />,
    description:
      "If your cycle is halted due to poor response or ovulation, your theatre and embryology cost will be refunded or credited on a future cycle. Scans and medication will not.",
  },
  {
    title: "Elective freeze-all",
    icon: <FaFlask className="size-3.5" />,
    description:
      "If your transfer is held back due to high progesterone levels or risk of OHSS, your transfer cost will be deducted from your future frozen embryo transfer.",
  },
];

export default function RefundPolicySections() {
  return (
    <>
      {/* Section 1: Services That Cannot Be Refunded Once Started */}
      <TreatmentSection className="bg-white">
        <TreatmentSectionHeader
          eyebrow="Section 1: These services are non-refundable once performed"
          title="Services That Cannot Be Refunded Once Started"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {nonRefundableServices.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <CostFactorCard
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      {/* Section 2: Fees Are Not Linked to Outcome */}
      <TreatmentSection className="bg-pink">
        <TreatmentSectionHeader
          eyebrow="Section 2: Your fees are not dependent on your outcome"
          title="Fees Are Not Linked to Outcome"
          subtitle="Billing covers the services and materials used, not the result."
        />

        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
          {outcomePoints.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </TreatmentSection>

      {/* Cancellation Process: How Cancellation and Refunds Work */}
      <TreatmentSection className="bg-white">
        <TreatmentSectionHeader
          eyebrow="Cancellation process"
          title="How Cancellation and Refunds Work"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-2"
        >
          {cancellationStages.map((stage) => (
            <StaggerItem key={stage.number} className="h-full">
              <ProtocolCard {...stage} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      {/* Pre-Treatment Cancellation: Criteria, Deductions & Timeline */}
      <TreatmentSection className="bg-pink">
        <TreatmentSectionHeader
          eyebrow="How do I calculate my refund?"
          title="Pre-Treatment Cancellation: Criteria, Deductions & Timeline"
          subtitle="If you want to cancel before starting treatment:"
        />

        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
          {preTreatmentCriteria.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </TreatmentSection>

      {/* Section 3: Cycle Conversions & Protocol Changes */}
      <TreatmentSection className="bg-white">
        <TreatmentSectionHeader
          eyebrow="Section 3: Conversions of cycle"
          title="Cycle Conversions & Protocol Changes"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {cycleConversions.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <CostFactorCard
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
    </>
  );
}
