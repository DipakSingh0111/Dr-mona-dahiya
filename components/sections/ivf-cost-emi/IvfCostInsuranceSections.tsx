"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck, FaFlask } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  ChecklistRow,
  type CostFactorItem,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose";

const insuranceCards: CostFactorItem[] = [
  {
    icon: <FaCheck className="size-3.5" />,
    title: "If You Have Regular Insurance",
    description:
      "Individual and family policies mostly do not cover IVF treatment, as it is on the exclusion list.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Corporate Health Insurance",
    description:
      "Corporate policies most of the time cover maternity benefits and infertility as well. Patients are able to claim the full cost of IVF.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Insurance That Supports Women",
    description:
      "Several insurance companies have included assisted pregnancy methods under their policy as well. Certain restrictions apply.",
  },
];

const policyRows = [
  {
    type: "Star Health insurance for Women",
    covers: "Women insurance covers IVF treatment",
    limit: "Up to ₹1 lakh – ₹2.5 lakh depending on total amount of insurance",
    wait: "After 36 months",
  },
  {
    type: "HDFC ERGO",
    covers: "Parenthood insurance option covers up to 2 IVF cycles in lifetime",
    limit:
      "Up to ₹50,000 / ₹1 lakh / ₹1.5 lakh / ₹2 lakh per pregnancy. After this the policy has to be renewed.",
    wait: "After 24 months",
  },
  {
    type: "Niva Bupa",
    covers: "Niva Bupa Aspire policy includes M-iracle benefit which covers IVF",
    limit: "Different amounts allowed as per level of policy",
    wait: "As little as 9 months",
  },
  {
    type: "Care Health Insurance",
    covers: "Classic or Joy plan will cover IVF under maternal benefits",
    limit: "₹2 lakh if you have insurance of more than ₹5 lakh",
    wait: "36 months",
  },
  {
    type: "Normal medical insurance policy",
    covers: "Will NOT cover IVF",
    limit: "0",
    wait: "0",
  },
];

const claimCards: CostFactorItem[] = [
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Laparoscopy/Hysteroscopy",
    description: (
      <>
        Can be claimed if done to remove cysts/fibroids or for other reasons.
        More about{" "}
        <Link href="/hysteroscopy-treatment" className={linkClass}>
          Laparoscopy/Hysteroscopy here
        </Link>
        .
      </>
    ),
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Surgery of Endometriosis/Cysts",
    description: "Surgical removal of disease is also covered.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Pathology & Scan",
    description:
      "Before any procedure, if admitted, you can claim scans and pathologies.",
  },
];

const cycleCoverage: { title: string; text: ReactNode }[] = [
  {
    title: "Procedure",
    text: "blood work to determine ovarian reserve, follicular studies and doctor charges.",
  },
  {
    title: "Medicines",
    text: "hormones required (rFSH/HMG) and antagonist as per your age and body weight.",
  },
  {
    title: "Laboratory charges",
    text: "ovum pickup surgery, anaesthesia, ICSI and blastocyst culture till Day 5.",
  },
  {
    title: "Storage of extra embryos",
    text: (
      <>
        see{" "}
        <Link href="/embryo-cryopreservation" className={linkClass}>
          Freezing of Embryos
        </Link>
        .
      </>
    ),
  },
];

export function IvfInsuranceOverview() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Medical Insurance"
        title="Does Health Insurance Cover IVF in India?"
        subtitle="You can check if your policy covers IVF by carrying your policy card and details to your appointment. Our medical desk can help you get approval before proceeding with treatment, at no cost."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {insuranceCards.map((item) => (
          <StaggerItem key={item.title}>
            <CostFactorCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function IvfPoliciesTable() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Compare Policies"
        title="Which Policies Cover IVF and Which Do Not?"
        subtitle="Below is a quick look at a few popular insurance policies that cover IVF. Kindly consult your insurance provider to know the exact benefits of your policy."
      />

      <Reveal variant="fadeUp" delay={0.08} className="mt-7">
        <div className="card-highlight overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="border-b-2 border-rose/25 bg-[#fff0f5]">
                <tr>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Type of Insurance
                  </th>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Will It Cover IVF
                  </th>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Limit on Amount
                  </th>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Time Limit Before Claim
                  </th>
                </tr>
              </thead>
              <tbody>
                {policyRows.map((row) => (
                  <tr
                    key={row.type}
                    className="border-b border-[#fde2ec] transition-colors last:border-b-0 hover:bg-[#fff0f5]/45"
                  >
                    <td className="px-4 py-4 font-bold text-ink sm:px-6">
                      {row.type}
                    </td>
                    <td className="px-4 py-4 text-ink/85 sm:px-6">
                      {row.covers}
                    </td>
                    <td className="px-4 py-4 text-ink/85 sm:px-6">
                      {row.limit}
                    </td>
                    <td className="px-4 py-4 text-ink/85 sm:px-6">
                      {row.wait}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-3 text-[12.5px] leading-relaxed text-ink/70 sm:text-[13px]">
          Insurance helpline numbers: Star Health: 1800 425 2255 | HDFC ERGO:
          022 6234 6234 | Niva Bupa: 1860 500 8888 | Care Health: 1800 102
          4488.
        </p>
      </Reveal>
    </TreatmentSection>
  );
}

export function IvfInsuranceClaims() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Benefit if your insurance does not include IVF"
        title="What You Can Still Claim If IVF Is Not Covered"
        subtitle="You may still be able to get reimbursement for other tests and procedures."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {claimCards.map((item) => (
          <StaggerItem key={item.title}>
            <CostFactorCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function IvfCycleCoverage() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Cost Breakdown of IVF"
        title="What Is Covered in an IVF Cycle?"
        subtitle="Know what you are paying for in an IVF cycle. We break down the cost into the following sections."
      />

      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
        {cycleCoverage.map((item, idx) => (
          <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
            <ChecklistRow title={item.title} text={item.text} />
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

