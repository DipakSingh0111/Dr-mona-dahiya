"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
  type ProtocolCardItem,
  type WhyPointItem,
} from "@/components/ui/treatment";

const bankRows = [
  {
    bank: "Axis Bank",
    facility: "Personal loan / medical loan",
    rate: "Starts at 11%–15% p.a.",
    tenure: "Between 12 and 60 months",
  },
  {
    bank: "HDFC Bank",
    facility: "Personal loan / medical loan",
    rate: "Starts at 10.75%–14.50% p.a.",
    tenure: "Between 12 and 60 months",
  },
  {
    bank: "ICICI Bank",
    facility: "Personal loan / medical emergency",
    rate: "Starts at 10.85%–15.00% p.a.",
    tenure: "Between 12 and 72 months",
  },
  {
    bank: "Tata Capital",
    facility: "Personal loan / medical loan",
    rate: "Starts at 10.99%–16.00% p.a.",
    tenure: "Between 12 and 48 months",
  },
  {
    bank: "Various healthcare NBFCs",
    facility: "EMI with no interest",
    rate: "Processing fee charged",
    tenure: "Between 6 and 18 months",
  },
];

const approvalSteps: ProtocolCardItem[] = [
  {
    number: "1",
    title: "Get Your Medical Estimate",
    bullets: [
      "Dr Mona Dahiya will provide you with an itemised quote for your treatment.",
    ],
  },
  {
    number: "2",
    title: "Talk to Our Desk",
    bullets: [
      "Our team can refer you to a loan officer at the bank/NBFC of your choice.",
    ],
  },
  {
    number: "3",
    title: "Apply for Loan",
    bullets: [
      "All-digital process involving PAN card, Aadhaar card and last 3 months' bank statements and payslips, which can be shared directly with the bank/NBFC.",
    ],
  },
  {
    number: "4",
    title: "Loan Is Approved",
    bullets: [
      "The bank/NBFC will check if you qualify for the loan and tell you the EMI amount and the number of months it takes to repay it. Most banks/NBFCs approve a loan within 4 to 24 hours.",
    ],
  },
  {
    number: "5",
    title: "Start Your Treatment",
    bullets: [
      "Once the loan amount is paid towards your bill, you can begin your treatment.",
    ],
  },
];

const whyChoosePoints: WhyPointItem[] = [
  {
    title: "We Don't Charge Any Additional Costs",
    desc: "We share a clear breakdown of all charges involved in your treatment, like medicines, lab charges and embryo storage.",
  },
  {
    title: "No Unnecessary Charges Added to Your Cycle",
    desc: "We only advise PGT-A or other techniques if there is a need to do so based on your previous failure.",
  },
  {
    title: "Same Doctor from Beginning to End of Treatment",
    desc: "Dr Mona Dahiya sees you from starting your medicines to transferring your embryo.",
  },
];

export function IvfLoanOptionsTable() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="EMI & Finance"
        title="Typical Medical Loan and EMI Options in India"
      />

      <Reveal variant="fadeUp" delay={0.05} className="mt-5">
        <div className="rounded-xl border border-rose/30 border-l-4 border-l-rose bg-white px-4 py-3.5 shadow-[0_6px_18px_rgba(232,62,116,0.06)] sm:px-5 sm:py-4">
          <p className="text-[13.5px] font-bold text-rose sm:text-[14.5px]">
            Please note the below information is only to educate you.
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-ink/80 sm:text-[14px]">
            Dr Mona Dahiya and her clinics provide medical services and do not
            provide loans. Any loan application you make is handled by a
            third-party bank/NBFC authorised by RBI to give out loans. Interest
            and processing fees are charged by the bank/NBFC as per their own
            rules and your creditworthiness, i.e. your CIBIL score.
          </p>
        </div>
      </Reveal>

      <Reveal variant="fadeUp" delay={0.08} className="mt-6">
        <div className="card-highlight overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="border-b-2 border-rose/25 bg-[#fff0f5]">
                <tr>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Bank
                  </th>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Facility
                  </th>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Rate of Interest (% Per Annum)
                  </th>
                  <th className="px-4 py-3.5 text-[11.5px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[12.5px]">
                    Tenure of Repayment
                  </th>
                </tr>
              </thead>
              <tbody>
                {bankRows.map((row) => (
                  <tr
                    key={row.bank}
                    className="border-b border-[#fde2ec] transition-colors last:border-b-0 hover:bg-[#fff0f5]/45"
                  >
                    <td className="px-4 py-4 font-bold text-ink sm:px-6">
                      {row.bank}
                    </td>
                    <td className="px-4 py-4 text-ink/85 sm:px-6">
                      {row.facility}
                    </td>
                    <td className="px-4 py-4 text-ink/85 sm:px-6">
                      {row.rate}
                    </td>
                    <td className="px-4 py-4 text-ink/85 sm:px-6">
                      {row.tenure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-3 text-[12.5px] leading-relaxed text-ink/70 sm:text-[13px]">
          Rates may vary as per the bank/NBFC&apos;s current rates of interest.
          Check with them for the latest rate before applying for a loan.
        </p>
      </Reveal>
    </TreatmentSection>
  );
}

export function IvfEmiApprovalSteps() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Process to get Loan / EMI plan"
        title="Step-by-Step EMI Loan Approval"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {approvalSteps.map((step) => (
          <StaggerItem
            key={step.number}
            className="h-full min-h-[240px] sm:min-h-[260px]"
          >
            <ProtocolCard {...step} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/ivf cost banner picture.jpeg"
              alt="IVF Cost and EMI Loan Options"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}

export function IvfCostWhyChoose() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Experience & Trust"
        title="Why Choose Dr. Mona Dahiya for Cost-Conscious Fertility Care?"
      />

      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
        {whyChoosePoints.map((item, idx) => (
          <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
            <WhyPointRow {...item} />
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

