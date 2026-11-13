import siteData from "./site.json";

export type InlineTextSegment =
  | string
  | {
      bold: string;
    }
  | {
      text: string;
      href: string;
      variant?: "default" | "heading" | "subheading";
    };

export type ArticleBlock =
  | {
      type: "paragraph";
      content: InlineTextSegment[];
      spacing?: "sm" | "md" | "lg";
    }
  | {
      type: "paragraphs";
      items: InlineTextSegment[][];
      spacing?: "normal" | "tight";
      topMargin?: "sm" | "md" | "lg";
    }
  | {
      type: "lead";
      text: InlineTextSegment[];
      spacing?: "sm" | "md" | "lg";
    }
  | {
      type: "subheading";
      id?: string;
      tocLabel?: string;
      content: InlineTextSegment[];
      first?: boolean;
    }
  | {
      type: "list";
      items: InlineTextSegment[][];
      spacing?: "sm" | "md";
      ordered?: boolean;
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    }
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "faqs";
      items: {
        question: InlineTextSegment[];
        answer: InlineTextSegment[];
      }[];
    };

export type BlogSectionData = {
  id?: string;
  tocLabel?: string;
  heading?: InlineTextSegment[];
  blocks: ArticleBlock[];
};

export type BlogPostData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    breadcrumbParent: { label: string; href: string };
    breadcrumbLabel: string;
    eyebrow: string;
    title: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    reviewLink: { label: string; href: string };
  };
  registration: {
    title: string;
    subtitle: string;
  };
  meta: {
    date: string;
    tags: string[];
    image: {
      src: string;
      alt: string;
    };
  };
  sections: BlogSectionData[];
  consultation: {
    sectionId: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    consultationDuration: string;
    defaultClinic: string;
  };
};

export const BLOG_POSTS: BlogPostData[] = siteData.blogPosts as BlogPostData[];

export const DEFAULT_BLOG_POST: BlogPostData = BLOG_POSTS[0];

export function getBlogPostBySlug(slug: string): BlogPostData | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
