import type { Metadata } from "next";

import DisclaimerHero from "@/components/sections/medical-disclaimer/DisclaimerHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import DisclaimerNoGuarantees from "@/components/sections/medical-disclaimer/DisclaimerNoGuarantees";
import DisclaimerNotSubstitute from "@/components/sections/medical-disclaimer/DisclaimerNotSubstitute";
import DisclaimerEmergencies from "@/components/sections/medical-disclaimer/DisclaimerEmergencies";
import DisclaimerOversight from "@/components/sections/medical-disclaimer/DisclaimerOversight";
import DisclaimerFaqs from "@/components/sections/medical-disclaimer/DisclaimerFaqs";
import DisclaimerBooking from "@/components/sections/medical-disclaimer/DisclaimerBooking";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

export const metadata: Metadata = {
  title: "Medical & Clinical Information Disclaimer | Dr. Mona Dahiya",
  description:
    "Medical and clinical information disclaimer for Dr. Mona Dahiya. Content on this website is for educational purposes only and not a substitute for clinical consultation.",
  alternates: {
    canonical: "https://drmonadahiya.com/medical-disclaimer/",
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero */}
      <DisclaimerHero />

      {/* 2. Registered Medical Practitioner Council Numbers */}
      <MedicalRegistration
        dark={false}
        eyebrow="Registered medical practitioner"
        title="Medical Registration"
        subtitle="Dr. Mona Dahiya is registered with the following medical councils."
      />

      {/* 3. Section 1: No Guaranteed Outcomes */}
      <DisclaimerNoGuarantees />

      {/* 4. Section 2: Not a Substitute for Medical Consultation */}
      <DisclaimerNotSubstitute />

      {/* 5. Section 3: Emergencies & Warning Signs Table */}
      <DisclaimerEmergencies />

      {/* 6. Authoritative Information: Physician Oversight & Review */}
      <DisclaimerOversight />

      {/* 7. Frequently Asked Questions: Medical Disclaimer */}
      <DisclaimerFaqs />

      {/* 8. Book an In-Person Evaluation (Form & Clinic Info) */}
      <DisclaimerBooking />

      {/* 9. Parenthood CTA Banner */}
      <AboutParenthoodCta />
    </main>
  );
}

