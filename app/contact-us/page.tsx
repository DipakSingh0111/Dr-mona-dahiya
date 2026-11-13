import type { Metadata } from "next";

import ContactHero from "@/components/sections/contact-us/ContactHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import ContactTeamCards from "@/components/sections/contact-us/ContactTeamCards";
import ContactClinicsSection from "@/components/sections/contact-us/ContactClinicsSection";
import ContactRemoteConsultation from "@/components/sections/contact-us/ContactRemoteConsultation";
import ContactFirstVisitChecklist from "@/components/sections/contact-us/ContactFirstVisitChecklist";
import ContactPatientReviews from "@/components/sections/contact-us/ContactPatientReviews";
import ContactFaqsSection from "@/components/sections/contact-us/ContactFaqsSection";
import ContactBookingSection from "@/components/sections/contact-us/ContactBookingSection";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

export const metadata: Metadata = {
  title: "Contact Dr. Mona Dahiya | IVF Clinics in Noida, Delhi & Ghaziabad",
  description:
    "Direct contact consultation with Dr Mona Dahiya (MBBS, MD Gold Medalist). Book in-clinic or online consultation at our Noida, Delhi, and Ghaziabad fertility clinics.",
  alternates: {
    canonical: "https://drmonadahiya.com/contact-us/",
  },
};

export default function ContactUsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Registered Medical Practitioner Council Numbers */}
      <MedicalRegistration
        dark={false}
        eyebrow="Registered Medical Practitioner"
        title="Medical Council Registration Numbers"
        subtitle="Dr. Mona Dahiya is a registered fertility doctor."
      />

      {/* 3. Contact Dr. Mona Dahiya's Team Cards */}
      <ContactTeamCards />

      {/* 4. Clinics in Delhi | Noida | Ghaziabad */}
      <ContactClinicsSection />

      {/* 5. Remote Consultations for Outstation & International Patients */}
      <ContactRemoteConsultation />

      {/* 6. What to Bring to Your First Consultation */}
      <ContactFirstVisitChecklist />

      {/* 7. What Patients Say About Dr. Mona (Reviews) */}
      <ContactPatientReviews />

      {/* 8. Frequently Asked Questions: Contact & Booking */}
      <ContactFaqsSection />

      {/* 9. Book Your Consultation Today (Interactive Form & Address Info) */}
      <ContactBookingSection />

      {/* 10. Parenthood CTA Banner */}
      <AboutParenthoodCta />
    </main>
  );
}

