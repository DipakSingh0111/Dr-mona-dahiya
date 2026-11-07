"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  ChecklistRow,
  type CostFactorItem,
} from "@/components/ui/treatment";

const eligibilityRows = [
  {
    clients: "Married Couple",
    age: "Female 21–50 yrs · Male 21–55 yrs",
    documents: "Proof of valid marital relationship and documents to verify age.",
    treatment:
      "Treatment with self gametes. Donor gametes from a licensed ART Bank if required.",
  },
  {
    clients: "Single Woman",
    age: "Age 21–50 yrs",
    documents:
      "Document that verifies she is either unmarried, divorced or widowed.",
    treatment:
      "Treatment with self eggs and donor sperm from a licensed ART Bank.",
  },
  {
    clients: "Surrogacy Clients",
    age: "Female 23–50 yrs · Male 26–55 yrs",
    documents:
      "Essentiality and Eligibility Certificate from District / State Medical Board.",
    treatment:
      "Surrogacy with the couple's gametes. Eggs of donor in certain conditions.",
  },
];

function FlaskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden
    >
      <path d="M9 3h6" />
      <path d="M10 3v5.4L5.2 17.1A2 2 0 0 0 7 20h10a2 2 0 0 0 1.8-2.9L14 8.4V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

const embryologyCards: CostFactorItem[] = [
  {
    title: "Multi Witnessing",
    description:
      "Multiple levels of verification to ensure that there is no chance of any confusion or cross contamination.",
  },
  {
    title: "Use of Blastocyst Culture",
    icon: <FlaskIcon />,
    description: (
      <>
        Culturing embryos till blastocyst stage using tri-gas incubators and
        recommending eSET.{" "}
        <Link
          href="/blastocyst-transfer"
          className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
        >
          Read About Blastocyst Transfer.
        </Link>
      </>
    ),
  },
  {
    title: "Maintaining Cryo Samples",
    icon: <CalendarIcon />,
    description:
      "Frozen at −196°C. Maintaining storage limits and updating the national registry accordingly.",
  },
];

const singleTransferPoints = [
  "Encouraging single embryo transfers, to keep the risk of twins and triplets within defined parameters.",
  "Storage of extra blastocysts: we only store them if given permission by the patient. They cannot be stored indefinitely as per the ART Act. We will discard, donate to research or allow to perish based on instructions given by the patient.",
  "Maintaining registry: we report all case numbers to the national registry along with success rates. Cases of moderate to severe OHSS are also reported to the National ART and Surrogacy Board.",
];

export default function ArtEligibilityAndEthics() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Who can receive treatment"
          title={
            <>
              Legal Eligibility for ART
              <br />
              and Surrogacy in India
            </>
          }
        />

        <Reveal variant="fadeUp">
          <div className="mt-7 overflow-hidden rounded-2xl border border-rose/30 bg-white shadow-[0_10px_30px_rgba(232,62,116,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-rose-dark/20 bg-rose text-white">
                    <th className="px-5 py-4 text-[12px] font-bold tracking-[0.1em] text-white uppercase sm:px-6 sm:text-[13px]">
                      Clients
                    </th>
                    <th className="px-5 py-4 text-[12px] font-bold tracking-[0.1em] text-white uppercase sm:px-6 sm:text-[13px]">
                      Age
                    </th>
                    <th className="px-5 py-4 text-[12px] font-bold tracking-[0.1em] text-white uppercase sm:px-6 sm:text-[13px]">
                      Documents to Provide
                    </th>
                    <th className="px-5 py-4 text-[12px] font-bold tracking-[0.1em] text-white uppercase sm:px-6 sm:text-[13px]">
                      Treatment Permitted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose/15">
                  {eligibilityRows.map((row) => (
                    <tr
                      key={row.clients}
                      className="transition-colors hover:bg-pink/40"
                    >
                      <td className="px-5 py-4 align-top text-[13.5px] font-bold text-ink sm:px-6 sm:text-[14px]">
                        {row.clients}
                      </td>
                      <td className="px-5 py-4 align-top text-[13px] leading-relaxed text-ink/85 sm:px-6 sm:text-[13.5px]">
                        {row.age}
                      </td>
                      <td className="px-5 py-4 align-top text-[13px] leading-relaxed text-ink/85 sm:px-6 sm:text-[13.5px]">
                        {row.documents}
                      </td>
                      <td className="px-5 py-4 align-top text-[13px] leading-relaxed text-ink/85 sm:px-6 sm:text-[13.5px]">
                        {row.treatment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-3.5 text-[12.5px] leading-relaxed text-ink/65 sm:text-[13px]">
            As laws are amended, the above criteria may change. Your documents
            will be verified at the time of consultation.
          </p>
        </Reveal>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Ethical practices we follow in our labs"
          title="Embryology Ethics & Biosafety"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {embryologyCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Single Embryo Transfer, Embryo Storage and Updating National Registry"
          title="Single Transfer, Storage & Registry Reporting"
          subtitle="Some points that help us take care of mother and child and maintain regulatory compliance."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {singleTransferPoints.map((point, idx) => (
            <Reveal key={point} variant="fadeUp" delay={idx * 0.05}>
              <ChecklistRow>
                <span>{point}</span>
              </ChecklistRow>
            </Reveal>
          ))}
        </div>
      </TreatmentSection>
    </>
  );
}

