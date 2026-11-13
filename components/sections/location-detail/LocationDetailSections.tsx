"use client";

import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";
import type { LocationPageData } from "@/data/locations";

export function LocationScenario({
  scenario,
}: {
  scenario: LocationPageData["scenario"];
}) {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow={scenario.eyebrow}
        title={scenario.title}
      />

      <Reveal delay={0.05}>
        <div className="card-highlight mt-6 max-w-4xl rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_10px_30px_rgba(232,62,116,0.06)] sm:p-7">
          <p className="text-[14.5px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
            {scenario.text}
          </p>
          <p className="mt-3 text-[12px] text-ink/65 sm:text-[12.5px]">
            {scenario.disclaimer}
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}

export function LocationHowToReach({
  howToReach,
}: {
  howToReach: LocationPageData["howToReach"];
}) {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow={howToReach.eyebrow}
        title={howToReach.title}
        subtitle={howToReach.subtitle}
      />

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white px-4 py-1.5 text-[12.5px] font-semibold text-rose shadow-xs sm:text-[13px]">
          <FaMapMarkerAlt className="size-3.5 shrink-0" />
          {howToReach.originLabel}
        </span>
      </div>

      <Stagger
        delay={0.04}
        className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6"
      >
        {howToReach.clinics.map((clinic) => (
          <StaggerItem key={clinic.number}>
            <div className="card-highlight flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-6">
              <div>
                <div className="flex items-start gap-3">
                  <span className="card-badge flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white">
                    {clinic.number}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10.5px] font-bold tracking-[0.12em] text-rose uppercase">
                      {clinic.tag}
                    </p>
                    <h3 className="font-serif mt-0.5 text-[1rem] leading-snug font-semibold text-ink sm:text-[1.0625rem]">
                      {clinic.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-md border border-rose/20 bg-pink/80 px-2.5 py-1 text-[11.5px] font-semibold text-ink">
                    {clinic.distance}
                  </span>
                  <span className="rounded-md border border-rose/20 bg-pink/80 px-2.5 py-1 text-[11.5px] font-semibold text-ink">
                    {clinic.duration}
                  </span>
                  <span className="rounded-md border border-rose/20 bg-pink/80 px-2.5 py-1 text-[11.5px] font-medium text-ink/85">
                    {clinic.routeBadge}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-ink/85 sm:text-[13.5px]">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.1em] text-rose uppercase">
                      By Road / Cab
                    </p>
                    <p className="mt-1">{clinic.byRoad}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.1em] text-blue uppercase">
                      By Metro / Rail
                    </p>
                    <p className="mt-1">{clinic.byMetro}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-[#fde2ec] pt-3.5">
                <Link
                  href={clinic.linkHref}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-rose transition-colors hover:text-blue"
                >
                  {clinic.linkLabel}
                </Link>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function LocationNearbyAreas({
  nearbyAreas,
}: {
  nearbyAreas: LocationPageData["nearbyAreas"];
}) {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow={nearbyAreas.eyebrow}
        title={nearbyAreas.title}
      />

      <Stagger
        delay={0.03}
        className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
      >
        {nearbyAreas.items.map((area) => (
          <StaggerItem key={area.title}>
            <Link
              href={area.href}
              className="card-highlight group relative flex items-center justify-between rounded-xl border border-[#fde2ec] bg-white p-4 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f8b4cb] hover:shadow-[0_14px_32px_rgba(232,62,116,0.1)]"
            >
              <div className="min-w-0 pr-3">
                <h3 className="font-serif text-[14.5px] font-semibold text-ink transition-colors group-hover:text-rose sm:text-[15.5px]">
                  {area.title}
                </h3>
                <p className="mt-0.5 text-[12px] text-ink/70">
                  {area.subtitle}
                </p>
              </div>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-pink text-rose transition-colors group-hover:bg-rose group-hover:text-white">
                <FaArrowRight className="size-3.5" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

