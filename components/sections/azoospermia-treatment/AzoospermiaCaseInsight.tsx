"use client";

import { Reveal } from "@/components/ui/Reveal";
import { TreatmentSection, TreatmentSectionHeader } from "@/components/ui/treatment";

export default function AzoospermiaCaseInsight() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Our Patients Stories"
        title="Clinical Case Insight"
      />

      <Reveal variant="fadeUp" delay={0.06} className="mt-6">
        <div className="card-highlight rounded-2xl border border-[#fde2ec] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(232,62,116,0.06)]">
          <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
            Patient was azoospermic on 2 semen analysis&apos;s. His hormone levels
            were normal. We cleared the blockages through PESA and followed it
            with ICSI IVF using his own sperms and had a successful embryo
            transfer.
          </p>
          <p className="mt-3 text-[12px] text-ink/65">
            * All details have been altered for confidentiality purposes. Your
            results may vary.
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}
