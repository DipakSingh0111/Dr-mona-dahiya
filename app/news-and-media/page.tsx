import type { Metadata } from "next";

import NewsMediaHero from "@/components/sections/news-and-media/NewsMediaHero";
import LocationsRegistration from "@/components/sections/location/LocationsRegistration";
import MediaFeatures from "@/components/sections/news-and-media/MediaFeatures";
import AboutReviews from "@/components/sections/about-mona-dahiya/AboutReviews";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Dr. Mona Dahiya in the News & Media | Fertility & IVF Specialist",
  description:
    "Dr. Mona Dahiya's interviews, articles and features have appeared in some of India's top publications, covering national news and business media as well as healthcare and fertility-focused publications.",
};

export default function NewsMediaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <NewsMediaHero />

      <SectionReveal>
        <LocationsRegistration />
      </SectionReveal>

      <SectionReveal>
        <MediaFeatures />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutReviews
          eyebrow="Patient reviews"
          title="What Patients Say About Dr. Mona"
          subtitle="Individual experiences in patients' own words."
          ctaLabel="Read All Patient Reviews"
          sectionBg="bg-white"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Media enquiries"
          title="Media & Interview Requests"
          subtitle={
            <>
              Journalists and event organisers can reach Dr. Mona Dahiya&apos;s
              team on{" "}
              <a
                href="tel:+919267982924"
                className="font-medium text-blue hover:text-rose"
              >
                +91 92679 82924
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@drmonadahiya.com"
                className="font-medium text-blue hover:text-rose"
              >
                info@drmonadahiya.com
              </a>
              . Patients can book an in-clinic or online consultation.
            </>
          }
          appendContacts={false}
          consultationDuration="30 minutes"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
