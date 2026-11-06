"use client";

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
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
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
      </Stagger>
    </TreatmentSection>
  );
}
