import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MedicalRegistration from "@/components/MedicalRegistration";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import AdvancedServices from "@/components/AdvancedServices";
import HowItWorks from "@/components/HowItWorks";
import MeetYourDoctor from "@/components/MeetYourDoctor";
import FertilityPreservation from "@/components/FertilityPreservation";
import Affiliations from "@/components/Affiliations";
import ClinicsSection from "@/components/ClinicsSection";
import SuccessStories from "@/components/SuccessStories";
import InternationalPatients from "@/components/InternationalPatients";
import LatestBlog from "@/components/LatestBlog";
import BookAppointment from "@/components/BookAppointment";
import FAQSection from "@/components/FAQSection";
import ParenthoodCta from "@/components/ParenthoodCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col">
      <div className="relative isolate overflow-hidden bg-[#0047ca]">
        <div className="absolute inset-x-0 top-0 z-50">
          <TopBar />
          <Navbar />
        </div>
        <HeroSection />
      </div>

      {/* 3. Medical Registration (DMC, MCI, UPMC) */}
      <MedicalRegistration />

      {/* 4. Why couples choose Dr. Mona Dahiya */}
      <WhyChooseUs />

      {/* 5. Fertility treatment in Noida | Delhi | Ghaziabad (Our Services Grid) */}
      <OurServices />

      {/* 6. Advanced Services (Fertility Testing, Genetic, Preservation & Conditions) */}
      <AdvancedServices />

      {/* 7. How It Works (We guide you through every stage with transparency) */}
      <HowItWorks />

      {/* 8. Meet Your Doctor (Overseeing fertility care from first visit to positive pregnancy) */}
      <MeetYourDoctor />

      {/* 9. Fertility Preservation (Keep the option of parenthood open) */}
      <FertilityPreservation />

      {/* 10. Affiliations (Present & Past Affiliations) */}
      <Affiliations />

      {/* 11. Three clinics across Delhi NCR (Noida, Ghaziabad, Delhi) */}
      <ClinicsSection />

      {/* 12. Patient Testimonials (Our success stories slider) */}
      <SuccessStories />

      {/* 13. Travelling to India for IVF? (International Patients) */}
      <InternationalPatients />

      {/* 14. Latest Blog (Guides from the clinic) */}
      <LatestBlog />

      {/* 15. Consult the Best IVF Specialist in India (Book Consultation / Appointment) */}
      <BookAppointment />

      {/* 16. Frequently asked questions (FAQ Accordion) */}
      <FAQSection />

      {/* 17. Take your first step towards parenthood with Dr. Mona Dahiya (Bottom CTA) */}
      <ParenthoodCta />

      {/* 18. Footer */}
      <Footer />
    </main>
  );
}
