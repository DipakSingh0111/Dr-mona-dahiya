import type { Metadata } from "next";

import FertilityAssessmentHero from "@/components/sections/fertility-assessment-quiz/FertilityAssessmentHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FertilityAssessmentQuiz from "@/components/sections/fertility-assessment-quiz/FertilityAssessmentQuiz";
import FertilityScoreBreakdown from "@/components/sections/fertility-assessment-quiz/FertilityScoreBreakdown";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import FertilityAssessmentFaq from "@/components/sections/fertility-assessment-quiz/FertilityAssessmentFaq";
import RecurrentMiscarriageRelatedTreatments from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Fertility Assessment Quiz: 10-Point Fertility Score in 2 Minutes | Dr. Mona Dahiya",
  description:
    "Take Dr. Mona Dahiya's free 5-question fertility assessment quiz to get your 10-point fertility score and personalised next steps for women and men.",
};

export default function FertilityAssessmentQuizPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <FertilityAssessmentHero />

      <SectionReveal>
        <MedicalRegistration
          eyebrow="Registered medical practitioner"
          title="Medical Registration"
          subtitle="Dr. Mona Dahiya is registered with the following medical councils."
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
      </SectionReveal>

      <FertilityAssessmentQuiz />

      <FertilityScoreBreakdown />

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Visit Dr. Mona"
          title="Book a Consultation at Our Clinics"
          subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
          directionsLinkText="Get directions"
          clinicLinkText="Clinic page"
          bookButtonText="Book appointment"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FertilityAssessmentFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title={
            <>
              Discuss Your Score
              <br />
              with Dr. Mona Dahiya
            </>
          }
          subtitle={
            <>
              Book an in-clinic consultation in Noida, Ghaziabad or Delhi, or an
              online consultation, to turn your score into a personal plan.
              Direct line:{" "}
              <a
                href="tel:+919267982924"
                className="font-medium text-blue hover:text-rose"
              >
                +91 92679 82924
              </a>
              .
            </>
          }
          appendContacts={false}
          consultationDuration="30 minutes"
          defaultClinic="Noida"
          sectionBg="bg-white"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
