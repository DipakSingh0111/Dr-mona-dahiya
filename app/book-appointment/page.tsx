import type { Metadata } from "next";

import BookAppointmentHero from "@/components/sections/book-appointment/BookAppointmentHero";
import BookAppointmentMedicalReg from "@/components/sections/book-appointment/BookAppointmentMedicalReg";
import BookAppointmentSteps from "@/components/sections/book-appointment/BookAppointmentSteps";
import BookAppointmentNotice from "@/components/sections/book-appointment/BookAppointmentNotice";
import BookAppointmentClinics from "@/components/sections/book-appointment/BookAppointmentClinics";
import BookAppointmentFaq from "@/components/sections/book-appointment/BookAppointmentFaq";
import BookAppointmentReviews from "@/components/sections/book-appointment/BookAppointmentReviews";
import BookAppointmentDirect from "@/components/sections/book-appointment/BookAppointmentDirect";
import ParenthoodCta from "@/components/sections/Home/ParenthoodCta";

export const metadata: Metadata = {
  title: "Book Appointment for In-Clinic or Online Consultation | Dr. Mona Dahiya",
  description:
    "Make an appointment to see infertility specialist doctor Mona Dahiya online or in-person in Noida, Ghaziabad and Delhi. Direct registration details, steps, clinic addresses and FAQs.",
};

export default function BookAppointmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <BookAppointmentHero />
      <BookAppointmentMedicalReg />
      <BookAppointmentSteps />
      <BookAppointmentNotice />
      <BookAppointmentClinics />
      <BookAppointmentFaq />
      <BookAppointmentReviews />
      <BookAppointmentDirect />
      <ParenthoodCta />
    </main>
  );
}
