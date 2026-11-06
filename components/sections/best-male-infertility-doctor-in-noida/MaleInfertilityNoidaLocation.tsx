"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

export default function MaleInfertilityNoidaLocation() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Location"
        title="Easy to Reach in Noida"
      />

      <div className="mt-7 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-6">
        {/* Left Card: Noida Clinic Card with Image */}
        <Reveal variant="slideLeft">
          <article className="card-highlight group relative flex flex-col overflow-hidden rounded-[24px] border border-[#fde8ef] bg-white shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fbcfe0] hover:shadow-[0_18px_36px_rgba(232,62,116,0.12)]">
            {/* Real Clinic Photo */}
            <div className="relative h-[180px] w-full overflow-hidden bg-[#fff0f5] sm:h-[195px]">
              <Image
                src="/images/clinics/noida.jpg"
                alt="Noida Sector 49 fertility clinic"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                priority={false}
              />
            </div>

            {/* Floating Map Pin Badge */}
            <div className="pointer-events-none absolute top-[180px] left-6 z-20 -translate-y-1/2 sm:top-[195px] sm:left-7">
              <div className="flex size-[48px] items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.12)] sm:size-[52px]">
                <div className="flex size-[34px] items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white sm:size-[38px]">
                  <FaMapMarkerAlt className="size-3.5" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 pt-7 sm:p-6 sm:pt-8">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-rose uppercase">
                  SECTOR 49
                </span>
                <h3 className="font-display mt-1 text-[20px] font-bold tracking-tight text-ink sm:text-[22px]">
                  Noida Clinic Address
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                  3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 border-t border-ink/5 pt-3.5 text-[12.5px] font-semibold">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-rose hover:text-rose-dark transition-colors"
                >
                  <span>Get directions</span>
                  <FaExternalLinkAlt className="size-2.5 opacity-70" />
                </a>
                <span className="text-ink/20">|</span>
                <Link
                  href="/best-ivf-doctor-in-noida"
                  className="text-ink/70 hover:text-rose transition-colors"
                >
                  Clinic page
                </Link>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Right Card: Getting there Card */}
        <Reveal variant="slideRight">
          <div className="card-highlight flex gap-4 rounded-2xl border border-[#fde2ec] bg-white p-5 backdrop-blur-md shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-200 hover:border-rose/35 hover:bg-[#fff0f5] sm:p-6">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
              <FaCheck className="size-3.5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-[15px] font-bold text-black sm:text-[16px]">
                Getting there
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                Via Dadri Main Road and Vikas Marg; close to Sector 50 Metro (Aqua Line).
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
