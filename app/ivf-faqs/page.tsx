import type { Metadata } from "next";

import IvfFaqsHero from "@/components/sections/ivf-faqs/IvfFaqsHero";
import IvfFaqsContent from "@/components/sections/ivf-faqs/IvfFaqsContent";
import IvfFaqsClinics from "@/components/sections/ivf-faqs/IvfFaqsClinics";
import IvfFaqsReviews from "@/components/sections/ivf-faqs/IvfFaqsReviews";
import LocationsRegistration from "@/components/sections/locations/LocationsRegistration";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "IVF FAQs | Answered by Dr. Mona Dahiya",
  description:
    "IVF frequently asked questions answered by Dr. Mona Dahiya — clinical process, embryo transfer, success rates, costs, ART Act rules and clinic details.",
};

export default function IvfFaqsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <IvfFaqsHero />

      <SectionReveal>
        <LocationsRegistration />
      </SectionReveal>

      <IvfFaqsContent />

      <SectionReveal delay={0.04}>
        <IvfFaqsClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfFaqsReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Have More Questions?"
          subtitle={
            <>
              Speak directly with our clinical team on{" "}
              <a
                href="tel:+919267982924"
                className="text-white/85 hover:text-white"
              >
                +91 92679 82924
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@drmonadahiya.com"
                className="text-white/85 hover:text-white"
              >
                info@drmonadahiya.com
              </a>
              , or book a consultation in Noida, Ghaziabad or Delhi.
            </>
          }
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
