import type { Metadata } from "next";

import IvfCostEmiHero from "@/components/sections/ivf-cost-emi/IvfCostEmiHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  IvfInsuranceOverview,
  IvfPoliciesTable,
  IvfInsuranceClaims,
  IvfCycleCoverage,
} from "@/components/sections/ivf-cost-emi/IvfCostInsuranceSections";
import {
  IvfLoanOptionsTable,
  IvfEmiApprovalSteps,
  IvfCostWhyChoose,
} from "@/components/sections/ivf-cost-emi/IvfCostEmiLoanSections";
import {
  IvfCostTiers,
  IvfCostReviews,
} from "@/components/sections/ivf-cost-emi/IvfCostTiersAndReviews";
import {
  IvfCostFaq,
  IvfCostRelated,
} from "@/components/sections/ivf-cost-emi/IvfCostFaqAndRelated";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";
import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "IVF Cost and EMI Financing in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Transparent medical costs of IVF treatment at Noida, Delhi and Ghaziabad by Dr Mona Dahiya, with health insurance details and flexible EMI plans from leading banks and NBFCs.",
};

export default function IvfCostEmiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <IvfCostEmiHero />

      <SectionReveal>
        <MedicalRegistration
          eyebrow="Registered medical practitioner"
          title="Medical Registration"
          subtitle="Dr. Mona Dahiya is registered with the following medical councils."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfInsuranceOverview />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfPoliciesTable />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfInsuranceClaims />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfCycleCoverage />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfLoanOptionsTable />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfEmiApprovalSteps />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfCostWhyChoose />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfCostTiers />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfCostReviews />
      </SectionReveal>

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
        <IvfCostFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfCostRelated />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Request a Confidential Cost Estimate"
          subtitle="Get an itemised medical estimate and EMI eligibility guidance from Dr. Mona Dahiya's team in Noida, Ghaziabad or Delhi. Financial helpdesk: +91 92679 82924."
          appendContacts={false}
          consultationDuration="30 minutes"
          defaultClinic="Noida"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

