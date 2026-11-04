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
        <div className="overflow-hidden rounded-2xl border border-[#fde2ec] bg-white backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#fde2ec]">
                  <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wider text-black uppercase sm:px-5 sm:text-[12px]">
                    Procedure
                  </th>
                  <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wider text-black uppercase sm:px-5 sm:text-[12px]">
                    US Price
                  </th>
                  <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wider text-black uppercase sm:px-5 sm:text-[12px]">
                    UK Price
                  </th>
                  <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wider text-black uppercase sm:px-5 sm:text-[12px]">
                    Price With Dr. Mona Dahiya
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.procedure}
                    className="border-b border-[#fde2ec] last:border-b-0"
                  >
                    <td className="px-4 py-4 text-[13.5px] font-semibold text-black sm:px-5 sm:text-[14px]">
                      {row.procedure}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-black sm:px-5 sm:text-[13.5px]">
                      {row.us}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-black sm:px-5 sm:text-[13.5px]">
                      {row.uk}
                    </td>
                    <td className="px-4 py-4 text-[13.5px] font-semibold text-rose sm:px-5 sm:text-[14px]">
                      {row.mona}
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
