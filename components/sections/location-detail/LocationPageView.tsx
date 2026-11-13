import {
  FaCalendarCheck,
  FaCheckCircle,
  FaFlask,
  FaPills,
} from "react-icons/fa";

import LocationHero from "@/components/sections/location-detail/LocationHero";
import {
  LocationHowToReach,
  LocationNearbyAreas,
  LocationScenario,
} from "@/components/sections/location-detail/LocationDetailSections";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";
import { SectionReveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  ChecklistRow,
  CostFactorCard,
  FaqAccordion,
  NumberedCard,
  ProtocolCard,
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
} from "@/components/ui/treatment";
import type { LocationPageData } from "@/data/locations";

const costIconMap = {
  medicine: <FaPills className="size-3.5" />,
  lab: <FaFlask className="size-3.5" />,
  calendar: <FaCalendarCheck className="size-3.5" />,
  check: <FaCheckCircle className="size-3.5" />,
} as const;

export default function LocationPageView({
  page,
}: {
  page: LocationPageData;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <LocationHero hero={page.hero} />

      <SectionReveal>
        <MedicalRegistration
          title={page.registration.title}
          subtitle={page.registration.subtitle}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TreatmentSection>
          <TreatmentSectionHeader
            eyebrow={page.indications.eyebrow}
            title={page.indications.title}
          />
          <Stagger
            delay={0.04}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {page.indications.items.map((item) => (
              <StaggerItem key={item.number}>
                <NumberedCard
                  number={String(item.number)}
                  title={item.title}
                  description={item.description}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </TreatmentSection>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TreatmentSection>
          <TreatmentSectionHeader
            eyebrow={page.checklist.eyebrow}
            title={page.checklist.title}
            subtitle={page.checklist.subtitle}
          />
          <Stagger delay={0.04} className="mt-7 space-y-3">
            {page.checklist.items.map((item) => (
              <StaggerItem key={item.title}>
                <ChecklistRow title={item.title} text={item.description} />
              </StaggerItem>
            ))}
          </Stagger>
        </TreatmentSection>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TreatmentSection>
          <TreatmentSectionHeader
            eyebrow={page.protocol.eyebrow}
            title={page.protocol.title}
          />
          <Stagger
            delay={0.04}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {page.protocol.items.map((item) => (
              <StaggerItem key={item.step}>
                <ProtocolCard
                  number={String(item.step)}
                  title={item.title}
                  bullets={[item.description]}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </TreatmentSection>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TreatmentSection>
          <TreatmentSectionHeader
            eyebrow={page.whyConsult.eyebrow}
            title={page.whyConsult.title}
          />
          <Stagger delay={0.04} className="mt-7 space-y-3.5">
            {page.whyConsult.items.map((item) => (
              <StaggerItem key={item.title}>
                <WhyPointRow
                  title={item.title}
                  desc={item.description}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </TreatmentSection>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LocationScenario scenario={page.scenario} />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LocationHowToReach howToReach={page.howToReach} />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LocationNearbyAreas nearbyAreas={page.nearbyAreas} />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TreatmentSection>
          <TreatmentSectionHeader
            eyebrow={page.costFactors.eyebrow}
            title={page.costFactors.title}
            subtitle={page.costFactors.subtitle}
          />
          <Stagger
            delay={0.04}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {page.costFactors.items.map((item) => (
              <StaggerItem key={item.title}>
                <CostFactorCard
                  icon={costIconMap[item.icon]}
                  title={item.title}
                  description={item.description}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </TreatmentSection>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <TreatmentSection>
          <TreatmentSectionHeader
            eyebrow={page.faq.eyebrow}
            title={page.faq.title}
            subtitle={page.faq.subtitle}
          />
          <div className="mt-7">
            <FaqAccordion items={page.faq.items} />
          </div>
        </TreatmentSection>
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId={page.consultation.sectionId}
          eyebrow={page.consultation.eyebrow}
          title={page.consultation.title}
          subtitle={page.consultation.subtitle}
          appendContacts={false}
          consultationDuration={page.consultation.consultationDuration}
          defaultClinic={page.consultation.defaultClinic}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
