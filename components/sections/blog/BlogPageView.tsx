import BlogHero from "@/components/sections/blog/BlogHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import BlogArticleContent from "@/components/sections/blog/BlogArticleContent";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";
import { SectionReveal } from "@/components/ui/Reveal";
import type { BlogPostData } from "@/data/blogs";

export default function BlogPageView({ post }: { post: BlogPostData }) {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <BlogHero hero={post.hero} />

      <SectionReveal>
        <MedicalRegistration
          title={post.registration.title}
          subtitle={post.registration.subtitle}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BlogArticleContent post={post} />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId={post.consultation.sectionId}
          eyebrow={post.consultation.eyebrow}
          title={post.consultation.title}
          subtitle={post.consultation.subtitle}
          appendContacts={false}
          consultationDuration={post.consultation.consultationDuration}
          defaultClinic={post.consultation.defaultClinic}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

