"use client";

import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

export default function MaleFertilityWorkup() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Indications"
        title="Who Needs a Dedicated Male Fertility Workup?"
        subtitle="Reasons why you may want to consult us for Male Infertility."
      />

      <Stagger
        delay={0.06}
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        <StaggerItem>
          <NumberedCard
            number="1"
            title="Oligoasthenoteratozoospermia (Decreased count motility and morphology)"
            description={
              <>
                Consult us if you have sperm count &lt; 15 million/ml or sperm
                motility &lt; 32% or sperm morphology &lt;4%.{" "}
                <Link href="/low-sperm-count-oligospermia" className={linkClass}>
                  Click here
                </Link>{" "}
                →
              </>
            }
          />
        </StaggerItem>
        <StaggerItem>
          <NumberedCard
            number="2"
            title="High Sperm DNA fragmentation"
            description={
              <>
                If your sperm DFI is &gt;25% you may want to read this article.
                High DFI can cause unexplained infertility and repeated
                miscarriages. (
                <Link href="/sperm-dna-fragmentation-test" className={linkClass}>
                  read this article
                </Link>
                )
              </>
            }
          />
        </StaggerItem>
        <StaggerItem>
          <NumberedCard
            number="3"
            title="Azoospermia"
            description={
              <>
                When there is no sperm found in your ejaculate. Either it can be
                blocked or there is no production of sperm. We can retrieve sperm
                from you surgically.{" "}
                <Link href="/azoospermia-treatment" className={linkClass}>
                  Read more
                </Link>{" "}
                →
              </>
            }
          />
        </StaggerItem>
        <StaggerItem>
          <NumberedCard
            number="4"
            title="Varicocele"
            description="Varicocele is when there is dilation of veins in your scrotum. This leads to higher temperature in your testes and reduced sperm production."
          />
        </StaggerItem>
        <StaggerItem>
          <NumberedCard
            number="5"
            title="Sexual problems"
            description='This may include problems with Ejaculation such as retrograde ejaculation no ejaculation and Erectile Dysfunction.'
          />
        </StaggerItem>
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white p-2 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/male infertility treatment overview.jpeg"
              alt="Healthy Testis vs Varicocele Testis Diagram"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-2"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}
