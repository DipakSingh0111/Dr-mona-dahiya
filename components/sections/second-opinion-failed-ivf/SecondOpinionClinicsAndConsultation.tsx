"use client";

import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import SecondOpinionFaqAndRelated from "@/components/sections/second-opinion-failed-ivf/SecondOpinionFaqAndRelated";

export default function SecondOpinionClinicsAndConsultation() {
  return (
    <>
      <IvfSuccessClinics
        eyebrow="Visit Dr. Mona"
        title="Book a Consultation at Our Clinics"
        subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
        directionsLinkText="Get directions"
        clinicLinkText="Clinic page"
        bookButtonText="Book appointment"
      />

      <SecondOpinionFaqAndRelated />

      <AboutConsultation
        sectionId="book-consultation"
        eyebrow="Next step"
        title={
          <>
            Book a Second-
            <br />
            Opinion Review
          </>
        }
        subtitle={
          <>
            Book an in-clinic review in Noida, Ghaziabad or Delhi, or a video
            review of your past cycle records with Dr. Mona Dahiya. Direct line:{" "}
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
    </>
  );
}
