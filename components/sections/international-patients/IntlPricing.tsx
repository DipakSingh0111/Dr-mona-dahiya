"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const rows = [
  {
    procedure: "IVF + ICSI",
    us: "$15,000 - $22,000",
    uk: "£6,000 - £9,000",
    mona: "$2,500 - $3,500",
  },
  {
    procedure: "Medication",
    us: "$4,000 - $7,000",
    uk: "£1,500 - £2,500",
    mona: "$700 - $1,100",
  },
  {
    procedure: "Embryo Freezing + Storage For 1 Year",
    us: "$1,500 - $2,500",
    uk: "£800 - £1,200",
    mona: "$350 - $500",
  },
  {
    procedure: "Genetic Testing PGT-A",
    us: "$3,500 - $5,000",
    uk: "£2,000 - £3,000",
    mona: "$1,200 - $1,800",
  },
];

export default function IntlPricing() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Pricing"
        title="Cost Of IVF In India Vs US/UK"
        subtitle="Here is a rough estimate of what most patients pay per procedure. Once we complete your online consultation, we can give you an exact quote for your treatment."
      />

      <Reveal variant="fadeUp" delay={0.08} className="mt-7">
        <div className="card-highlight overflow-hidden rounded-2xl border border-[#fde2ec] bg-white backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="border-b-2 border-rose/30 bg-[#fff0f5]">
                <tr>
                  <th className="px-4 py-4 text-[12px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[13px]">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#fde2ec] bg-white px-3 py-1.5 font-bold text-ink shadow-[0_2px_6px_rgba(232,62,116,0.06)]">
                      <span className="size-2 rounded-full bg-rose shrink-0" />
                      Procedure
                    </span>
                  </th>
                  <th className="px-4 py-4 text-[12px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[13px]">
                    <span className="inline-flex items-center rounded-lg border border-[#fde2ec] bg-white px-3 py-1.5 font-bold text-ink shadow-[0_2px_6px_rgba(232,62,116,0.06)]">
                      US Price
                    </span>
                  </th>
                  <th className="px-4 py-4 text-[12px] font-bold tracking-wider text-ink uppercase sm:px-6 sm:text-[13px]">
                    <span className="inline-flex items-center rounded-lg border border-[#fde2ec] bg-white px-3 py-1.5 font-bold text-ink shadow-[0_2px_6px_rgba(232,62,116,0.06)]">
                      UK Price
                    </span>
                  </th>
                  <th className="px-4 py-4 text-[12px] font-bold tracking-wider uppercase sm:px-6 sm:text-[13px]">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose px-3.5 py-1.5 font-bold text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
                      Price With Dr. Mona Dahiya
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.procedure}
                    className="border-b border-[#fde2ec] transition-colors hover:bg-[#fff0f5]/40 last:border-b-0"
                  >
                    <td className="px-4 py-4 text-[13.5px] font-bold text-ink sm:px-6 sm:text-[14px]">
                      <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-rose shrink-0" />
                        <span>{row.procedure}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[13px] text-ink/85 sm:px-6 sm:text-[13.5px]">
                      {row.us}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-ink/85 sm:px-6 sm:text-[13.5px]">
                      {row.uk}
                    </td>
                    <td className="px-4 py-4 sm:px-6">
                      <span className="inline-flex items-center rounded-lg border border-rose/25 bg-[#fff0f5] px-3 py-1 text-[13.5px] font-bold text-rose shadow-xs sm:text-[14px]">
                        {row.mona}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}
