import type { Metadata } from "next";

import BlogListingHero from "@/components/sections/blog/BlogListingHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import BlogListingCatalog from "@/components/sections/blog/BlogListingCatalog";
import BlogListingReviews from "@/components/sections/blog/BlogListingReviews";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";
import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Fertility & IVF Blog by Dr. Mona Dahiya | Patient Guides & Articles",
  description:
    "Learn more about fertility testing, IVF, IUI, low AMH, PCOS, diet, and choosing the best fertility doctor in Noida, Delhi & Ghaziabad with Dr. Mona Dahiya.",
};

export default function BlogListingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <BlogListingHero />

      <SectionReveal>
        <MedicalRegistration
          title="Medical Registration"
          subtitle="Dr. Mona Dahiya is registered with the following medical councils."
        />
      </SectionReveal>

      <BlogListingCatalog />

      <SectionReveal delay={0.04}>
        <BlogListingReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Have a Question the Blog Doesn't Answer?"
          subtitle="Speak to Dr. Mona Dahiya directly. Book an in-clinic consultation in Noida, Ghaziabad or Delhi, or an online consultation. Call +91 92679 82924."
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
