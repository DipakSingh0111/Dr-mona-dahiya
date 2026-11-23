import siteData from "./site.json";
import rawBlogData from "./blog.json";
import {
  DEFAULT_BLOG_POST,
  type ArticleBlock,
  type BlogPostData,
  type BlogSectionData,
  type InlineTextSegment,
} from "./blogTypes";

export type {
  ArticleBlock,
  BlogPostData,
  BlogSectionData,
  InlineTextSegment,
};
export { DEFAULT_BLOG_POST };

type RawBlogSection = {
  id?: string;
  type?: string;
  eyebrow?: string;
  h1?: string;
  lead?: string;
  cta1?: { label?: string; href?: string };
  cta2?: { label?: string; href?: string };
  glink?: { label?: string; href?: string };
  html?: string;
};

type RawBlogPage = {
  path: string;
  content: {
    seo?: {
      title?: string;
      description?: string;
      breadcrumbs?: { t: string; href?: string }[];
    };
    sections?: RawBlogSection[];
  };
};

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&hellip;/g, "…")
    .replace(/&times;/g, "×")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripTags(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHref(href: string): string {
  if (!href) return "#";
  if (href === "#appointment" || href === "#appt") return "#book-consultation";
  let cleaned = href.trim();
  if (cleaned.startsWith("https://drmonadahiya.com")) {
    cleaned = cleaned.slice("https://drmonadahiya.com".length) || "/";
  }
  if (
    cleaned.startsWith("/") &&
    cleaned.length > 1 &&
    !cleaned.startsWith("/#")
  ) {
    cleaned = cleaned.replace(/\/+$/, "");
  }
  return cleaned;
}

function parseInlineHtml(
  html: string,
  linkVariant?: "heading" | "subheading",
): InlineTextSegment[] {
  const segments: InlineTextSegment[] = [];
  const tokenRe =
    /<(a)\b([^>]*)>([\s\S]*?)<\/a>|<(strong|b)\b[^>]*>([\s\S]*?)<\/\4>/gi;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRe.exec(html)) !== null) {
    if (match.index > lastIndex) {
      const text = decodeEntities(
        html.slice(lastIndex, match.index).replace(/<[^>]+>/g, ""),
      );
      if (text) segments.push(text);
    }

    if (match[1]) {
      // <a> tag
      const attrs = match[2] || "";
      const hrefMatch = attrs.match(/href="([^"]*)"/i);
      const href = cleanHref(hrefMatch ? hrefMatch[1] : "#");
      const text = stripTags(match[3] || "");
      if (text) {
        segments.push(
          linkVariant ? { text, href, variant: linkVariant } : { text, href },
        );
      }
    } else if (match[4]) {
      // <strong> or <b> tag
      const inner = match[5] || "";
      const linkMatch = inner.match(/<a\b([^>]*)>([\s\S]*?)<\/a>/i);
      if (linkMatch) {
        const hrefMatch = (linkMatch[1] || "").match(/href="([^"]*)"/i);
        const href = cleanHref(hrefMatch ? hrefMatch[1] : "#");
        const text = stripTags(linkMatch[2] || "");
        if (text) {
          segments.push(
            linkVariant ? { text, href, variant: linkVariant } : { text, href },
          );
        }
      } else {
        const boldText = stripTags(inner);
        if (boldText) {
          if (linkVariant) {
            segments.push(boldText);
          } else {
            segments.push({ bold: boldText });
          }
        }
      }
    }

    lastIndex = tokenRe.lastIndex;
  }

  if (lastIndex < html.length) {
    const tail = decodeEntities(html.slice(lastIndex).replace(/<[^>]+>/g, ""));
    if (tail) segments.push(tail);
  }

  return segments.length > 0 ? segments : [stripTags(html)];
}

function parseArticleHtml(html: string, fallbackTitle: string) {
  // 1. Extract TOC labels by id
  const tocLabels = new Map<string, string>();
  const tocMatch = html.match(/<details class="bt-toc"[\s\S]*?<\/details>/i);
  if (tocMatch) {
    const liRe = /<a href="#([^"]+)">([\s\S]*?)<\/a>/gi;
    let m: RegExpExecArray | null;
    while ((m = liRe.exec(tocMatch[0])) !== null) {
      tocLabels.set(m[1], stripTags(m[2]));
    }
  }

  // 2. Isolate <article class="bt-art"> body
  const artStart = html.indexOf('<article class="bt-art">');
  const artEnd = html.indexOf("</article>");
  const artHtml =
    artStart !== -1
      ? html.slice(
          artStart + '<article class="bt-art">'.length,
          artEnd !== -1 ? artEnd : undefined,
        )
      : html;

  // 3. Extract meta date & tags
  let date = "";
  const tags: string[] = [];
  const metaMatch = artHtml.match(/<div class="bt-meta">([\s\S]*?)<\/div>/i);
  if (metaMatch) {
    const dateText = stripTags(
      metaMatch[1].replace(/<span class="bt-cats">[\s\S]*?<\/span>/i, ""),
    );
    date = dateText;
    const catRe = /<a[^>]*>([\s\S]*?)<\/a>/gi;
    let cm: RegExpExecArray | null;
    while ((cm = catRe.exec(metaMatch[1])) !== null) {
      const t = stripTags(cm[1]);
      if (t) tags.push(t);
    }
  }

  // 4. Remove meta div, featured figure, and top h1 from body stream
  let body = artHtml
    .replace(/<div class="bt-meta">[\s\S]*?<\/div>/i, "")
    .replace(/<figure class="bt-fig[^"]*featured[^"]*"[\s\S]*?<\/figure>/i, "")
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "");

  // 5. Tokenize top-level blocks in order
  const sections: BlogSectionData[] = [];
  let currentSection: BlogSectionData = { blocks: [] };

  const flushSection = () => {
    if (
      currentSection.heading ||
      currentSection.blocks.length > 0
    ) {
      sections.push(currentSection);
    }
  };

  const blockRe =
    /<(h2|h3)\b([^>]*)>([\s\S]*?)<\/\1>|<(p)\b[^>]*>([\s\S]*?)<\/p>|<(ul|ol)\b[^>]*>([\s\S]*?)<\/\6>|<div class="bt-scroll">([\s\S]*?)<\/div>|<div class="bt-faq">([\s\S]*?)<\/div>|<figure class="bt-fig[^"]*"[^>]*>([\s\S]*?)<\/figure>|<div class="bt-q">([\s\S]*?)<\/div>/gi;

  let bm: RegExpExecArray | null;
  while ((bm = blockRe.exec(body)) !== null) {
    if (bm[1]) {
      const tag = bm[1].toLowerCase();
      const attrs = bm[2] || "";
      const idMatch = attrs.match(/id="([^"]+)"/i);
      const id = idMatch ? idMatch[1] : undefined;
      const inner = bm[3] || "";

      if (tag === "h2") {
        flushSection();
        const plain = stripTags(inner);
        currentSection = {
          id,
          tocLabel: (id && tocLabels.get(id)) || plain,
          heading: parseInlineHtml(inner, "heading"),
          blocks: [],
        };
      } else {
        const plain = stripTags(inner);
        currentSection.blocks.push({
          type: "subheading",
          id,
          tocLabel: (id && tocLabels.get(id)) || plain,
          content: parseInlineHtml(inner, "subheading"),
          first: currentSection.blocks.length === 0,
        });
      }
    } else if (bm[4]) {
      const inner = bm[5] || "";
      const plain = stripTags(inner);
      if (plain) {
        currentSection.blocks.push({
          type: "paragraph",
          content: parseInlineHtml(inner),
        });
      }
    } else if (bm[6]) {
      const ordered = bm[6].toLowerCase() === "ol";
      const listHtml = bm[7] || "";
      const items: InlineTextSegment[][] = [];
      const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let lm: RegExpExecArray | null;
      while ((lm = liRe.exec(listHtml)) !== null) {
        const segs = parseInlineHtml(lm[1]);
        if (segs.length > 0 && stripTags(lm[1])) {
          items.push(segs);
        }
      }
      if (items.length > 0) {
        currentSection.blocks.push({
          type: "list",
          ordered,
          items,
        });
      }
    } else if (bm[8]) {
      // Table inside bt-scroll
      const tableHtml = bm[8];
      const headers: string[] = [];
      const rows: string[][] = [];
      const theadMatch = tableHtml.match(/<thead>([\s\S]*?)<\/thead>/i);
      if (theadMatch) {
        const thRe = /<th[^>]*>([\s\S]*?)<\/th>/gi;
        let tm: RegExpExecArray | null;
        while ((tm = thRe.exec(theadMatch[1])) !== null) {
          headers.push(stripTags(tm[1]));
        }
      }
      const tbodyMatch = tableHtml.match(/<tbody>([\s\S]*?)<\/tbody>/i);
      const rowSource = tbodyMatch ? tbodyMatch[1] : tableHtml;
      const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
      let trm: RegExpExecArray | null;
      while ((trm = trRe.exec(rowSource)) !== null) {
        if (/<th\b/i.test(trm[1]) && headers.length > 0) continue;
        const cells: string[] = [];
        const tdRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
        let tdm: RegExpExecArray | null;
        while ((tdm = tdRe.exec(trm[1])) !== null) {
          cells.push(stripTags(tdm[1]));
        }
        if (cells.length > 0) rows.push(cells);
      }
      if (headers.length > 0 || rows.length > 0) {
        currentSection.blocks.push({
          type: "table",
          headers,
          rows,
        });
      }
    } else if (bm[9]) {
      // FAQs inside bt-faq
      const faqHtml = bm[9];
      const faqItems: {
        question: InlineTextSegment[];
        answer: InlineTextSegment[];
      }[] = [];
      const qRe =
        /<details class="bt-q"[^>]*>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi;
      let qm: RegExpExecArray | null;
      while ((qm = qRe.exec(faqHtml)) !== null) {
        const question = parseInlineHtml(qm[1]);
        const answer = parseInlineHtml(qm[2]);
        if (stripTags(qm[1])) {
          faqItems.push({ question, answer });
        }
      }
      if (faqItems.length > 0) {
        currentSection.blocks.push({
          type: "faqs",
          items: faqItems,
        });
      }
    } else if (bm[10]) {
      const figHtml = bm[10];
      const imgMatch = figHtml.match(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/i);
      if (imgMatch && !imgMatch[1].startsWith("data:")) {
        currentSection.blocks.push({
          type: "image",
          src: imgMatch[1],
          alt: decodeEntities(imgMatch[2] || fallbackTitle),
        });
      }
    } else if (bm[11]) {
      // Standalone <div class="bt-q"><h3>...</h3><p>...</p></div>
      const qHtml = bm[11];
      const hMatch = qHtml.match(/<h[34][^>]*>([\s\S]*?)<\/h[34]>/i);
      if (hMatch && stripTags(hMatch[1])) {
        const question = parseInlineHtml(hMatch[1]);
        const answerHtml = qHtml.replace(/<h[34][^>]*>[\s\S]*?<\/h[34]>/i, "");
        const answer = parseInlineHtml(answerHtml);
        const lastBlock = currentSection.blocks[currentSection.blocks.length - 1];
        if (lastBlock && lastBlock.type === "faqs") {
          lastBlock.items.push({ question, answer });
        } else {
          currentSection.blocks.push({
            type: "faqs",
            items: [{ question, answer }],
          });
        }
      }
    }
  }

  flushSection();

  return { date, tags, sections };
}

const BLOG_FEATURED_IMAGE_MAP: Record<string, string> = {
  "can-you-work-during-ivf": "https://drmonadahiya.com/wp-content/uploads/2026/10/Screenshot-2026-10-02-174354.png",
  "iui-specialist-in-noida-complete-guide-to-intrauterine-insemination-iui": "https://drmonadahiya.com/wp-content/uploads/2026/08/IUI-Specialist-in-Noida.png",
  "know-what-secondary-infertility-is": "https://drmonadahiya.com/wp-content/uploads/2026/07/secondary-infertility.png",
  "male-infertility-causes-tests-treatment-options": "https://drmonadahiya.com/wp-content/uploads/2026/07/Male-infertility.png",
  "preparing-for-ivf-diet-lifestyle-medical-tips": "https://drmonadahiya.com/wp-content/uploads/2026/07/Preparing-for-IVF.png",
  "can-ivf-be-successful-after-multiple-failed-cycles": "https://drmonadahiya.com/wp-content/uploads/2026/07/Can-IVF-Be-Successful-After-Multiple-Failed-Cycles.png",
  "pcos-and-pregnancy": "https://drmonadahiya.com/wp-content/uploads/2026/07/PCOS-and-Pregnancy-1.png",
  "ivf-success-rates-by-age": "https://drmonadahiya.com/wp-content/uploads/2026/07/IVF-Success-Rates-by-Age.png",
  "diminished-ovarian-reserve": "https://drmonadahiya.com/wp-content/uploads/2026/07/8a79ca4d-9399-4b6c-b2b4-08f79e41eb22.png",
  "pcos-fertility-treatment-in-noida-expert-solutions-for-every-stage-of-your-pregnancy-journey": "https://drmonadahiya.com/wp-content/uploads/2026/07/PCOS-Fertility-Specialist-in-Noida-1.png",
  "expert-fertility-specialist-and-ivf-treatment-guide": "https://drmonadahiya.com/wp-content/uploads/2026/07/Experienced-IVF-Doctor-in-Noida-2.png",
  "best-gynecologist-for-ivf-in-noida": "https://drmonadahiya.com/wp-content/uploads/2026/07/Best-Gynecologist-for-IVF-in-Noida.png",
  "endometriosis-and-infertility": "https://drmonadahiya.com/wp-content/uploads/2026/07/endometriosis.jpeg",
  "hysteroscopy-surgery-in-delhi": "https://drmonadahiya.com/wp-content/uploads/2026/07/Hysteroscopy-Specialist-in-Delhi.png",
  "the-science-behind-laser-assisted-hatching": "https://drmonadahiya.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-6.39.33-PM.jpeg",
  "best-ivf-specialist-in-noida-expert-fertility-care-and-advanced-ivf-treatment": "https://drmonadahiya.com/wp-content/uploads/2026/07/IVF-Specialist-in-Noida.png",
  "icsi-vs-ivf": "https://drmonadahiya.com/wp-content/uploads/2026/07/Screenshot-2026-07-08-170718.png",
  "best-ivf-doctor-in-noida-2026": "https://drmonadahiya.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-8-2026-01_00_53-AM.png",
  "what-is-pgt-a-testing-in-india": "https://drmonadahiya.com/wp-content/uploads/2026/07/Screenshot-2026-07-06-121332.png",
  "everything-you-should-know-about-hsg-test": "https://drmonadahiya.com/wp-content/uploads/2026/02/Everything-you-should-know-about-the-HSG-test.png",
  "how-to-get-pregnant-fast": "https://drmonadahiya.com/wp-content/uploads/2025/06/HOW-TO-GET-PREGNANT-FAST.jpg",
  "can-ivf-decide-gender-of-baby": "https://drmonadahiya.com/wp-content/uploads/2024/04/pic1-1.webp",
  "best-ivf-clinic-in-delhi": "https://drmonadahiya.com/wp-content/uploads/2024/02/1.png",
  "best-ivf-clinics-in-india": "https://drmonadahiya.com/wp-content/uploads/2024/02/14.jpeg",
  "consult-the-best-fertility-doctor-in-noida": "https://drmonadahiya.com/wp-content/uploads/2024/05/dr.jpg",
  "understanding-uterine-polyps-a-comprehensive-guide-by-dr-mona-dahiya": "https://drmonadahiya.com/wp-content/uploads/2024/05/tt.jpg",
  "blastocyst-explained-frequently-asked-questions": "https://drmonadahiya.com/wp-content/uploads/2024/03/c.jpg",
  "what-is-healthy-eating": "https://drmonadahiya.com/wp-content/uploads/2023/11/What-is-healthy-eating.jpg",
  "assisted-reproductive-technology": "https://drmonadahiya.com/wp-content/uploads/2023/11/Assisted-Reproductive-Technology1.jpg",
  "what-is-infertility": "https://drmonadahiya.com/wp-content/uploads/2023/11/What-is-infertility.jpg",
  "pcos-and-infertility": "https://drmonadahiya.com/wp-content/uploads/2023/11/PCOS-and-Infertility.jpg",
  "infertility-signs-and-symptoms": "https://drmonadahiya.com/wp-content/uploads/2023/11/infertility-signs-and-symptoms.jpg",
  "infertility-treatment-options": "https://drmonadahiya.com/wp-content/uploads/2023/11/Infertility-Treatment-Options-in-India.jpg",
  "ovulation-and-fertility": "https://drmonadahiya.com/wp-content/uploads/2023/11/concept-fertilization-period-ovulation-ovum.jpg",
  "who-should-do-fertility-preservation": "https://drmonadahiya.com/wp-content/uploads/2023/10/Fertility-Preservation.jpg",
  "meditation-and-fertility": "https://drmonadahiya.com/wp-content/uploads/2023/10/Meditation-and-Fertility.jpeg",
  "stress-and-fertility": "https://drmonadahiya.com/wp-content/uploads/2023/10/Stress-and-Fertility.jpg",
  "low-amh-ivf-treatment": "https://drmonadahiya.com/wp-content/uploads/2023/10/LOW-AMH-IVF-TREATMENT.jpeg",
  "best-infertility-specialist-in-india": "https://drmonadahiya.com/wp-content/uploads/2023/10/Best-Infertility-Specialist-in-India.jpeg",
  "icsi-ivf": "https://drmonadahiya.com/wp-content/uploads/2024/02/v9.jpg",
  "how-aging-affects-fertility-and-pregnancy": "https://drmonadahiya.com/wp-content/uploads/2024/04/ivf.webp",
  "fertility-yoga-5-yoga-poses-to-increase-fertility-in-females": "https://drmonadahiya.com/wp-content/uploads/2024/02/image-accordion-9.jpg",
  "iui-treatment-procedure-step-by-step": "https://drmonadahiya.com/wp-content/uploads/2023/09/IUI-Process-Step-by-Step.jpeg",
  "infertility-treatment-by-prp-in-ivf": "https://drmonadahiya.com/wp-content/uploads/2023/12/bg.jpg",
  "causes-of-infertility-in-male-female": "https://drmonadahiya.com/wp-content/uploads/2023/09/Causes-of-Female-Infertility.jpg",
  "who-is-the-best-ivf-doctor-in-noida": "https://drmonadahiya.com/wp-content/uploads/2020/06/cc.jpg",
  "how-to-treat-low-amh-level": "https://drmonadahiya.com/wp-content/uploads/2024/02/c6.jpg",
  "how-low-amh-impact-fertility": "https://drmonadahiya.com/wp-content/uploads/2023/12/pic2.jpg",
  "ivf-process-step-by-step": "https://drmonadahiya.com/wp-content/uploads/revslider/slider-rtl-demo-3/rtl-slider-03-b.jpg",
  "10-ways-ai-impact-infertility-treatment": "https://drmonadahiya.com/wp-content/uploads/revslider/slider-demo-1/slider-01-b.jpg",
};

function withSeoYear2027(title: string): string {
  if (/\b2027\b/.test(title)) return title;
  if (/\b2026\b/.test(title)) return title.replace(/\b2026\b/g, "2027");
  return `${title} (2027)`;
}

function mapRawBlogPage(raw: RawBlogPage, imageSrc?: string): BlogPostData {
  const slug = raw.path
    .replace(/^https?:\/\/[^/]+\/blog\//i, "")
    .replace(/\/+$/, "");

  const seo = raw.content?.seo ?? {};
  const sections = raw.content?.sections ?? [];
  const hero =
    sections.find((s) => s.id === "hero") ??
    sections.find((s) => s.type === "homehero") ??
    {};
  const articleSec =
    sections.find((s) => s.id === "article") ??
    sections.find((s) => s.type === "raw") ??
    {};

  const breadcrumbs = seo.breadcrumbs ?? [];
  const parentBc = breadcrumbs[1];
  const currentBc = breadcrumbs[breadcrumbs.length - 1];

  const parsed = parseArticleHtml(articleSec.html || "", hero.h1 || slug);

  return {
    slug,
    metadata: {
      title: seo.title || `${hero.h1 || slug} | Dr. Mona Dahiya`,
      description: seo.description || "",
    },
    hero: {
      breadcrumbParent: {
        label: parentBc?.t || "Blog",
        href: cleanHref(parentBc?.href || "/blog"),
      },
      breadcrumbLabel: currentBc?.t || hero.h1 || slug,
      eyebrow: hero.eyebrow || "Fertility & IVF Insights",
      title: hero.h1 || slug,
      primaryCta: {
        label: hero.cta1?.label || "Book Consultation",
        href:
          hero.cta1?.label === "Book In-Clinic Consultation"
            ? "/book-appointment"
            : cleanHref(hero.cta1?.href || "#book-consultation"),
      },
      secondaryCta: {
        label: hero.cta2?.label || "Schedule Online Consultation",
        href: cleanHref(hero.cta2?.href || "/ivf-consultation-online"),
      },
      reviewLink: {
        label: hero.glink?.label || "See what patients say on Google",
        href: cleanHref(hero.glink?.href || "/best-ivf-patient-reviews"),
      },
    },
    registration: {
      title: "Medical Registration",
      subtitle:
        "Dr. Mona Dahiya is registered with the following medical councils.",
    },
    meta: {
      date: parsed.date || "2026",
      tags: parsed.tags.length > 0 ? parsed.tags : ["Fertility", "IVF"],
      ...(imageSrc
        ? {
            image: {
              src: imageSrc,
              alt: hero.h1 || slug,
            },
          }
        : {}),
    },
    sections: parsed.sections,
    consultation: {
      sectionId: "book-consultation",
      eyebrow: "Next step",
      title: "Book a Consultation with Dr. Mona Dahiya",
      subtitle:
        "Consult Dr. Mona Dahiya in person at our Delhi, Noida or Ghaziabad clinics, or book an online video consultation.",
      consultationDuration: "30 minutes",
      defaultClinic: "Noida",
    },
  };
}

const siteBlogPosts: BlogPostData[] = siteData.blogPosts as BlogPostData[];
const siteBlogBySlug = new Map(siteBlogPosts.map((p) => [p.slug, p]));

const rawBlogPages: RawBlogPage[] =
  (rawBlogData as { pages?: RawBlogPage[] }).pages ?? [];

const mappedBlogs: BlogPostData[] = rawBlogPages.map((raw) => {
  const rawSlug = raw.path
    .replace(/^https?:\/\/[^/]+\/blog\//i, "")
    .replace(/\/+$/, "");
  const featuredFromJson = BLOG_FEATURED_IMAGE_MAP[rawSlug];
  const existing = siteBlogBySlug.get(rawSlug);
  if (existing) {
    if (featuredFromJson) {
      return {
        ...existing,
        meta: {
          ...existing.meta,
          image: {
            src: featuredFromJson,
            alt: existing.meta.image?.alt ?? existing.hero.title,
          },
        },
      };
    }
    return existing;
  }
  return mapRawBlogPage(raw, featuredFromJson);
});

const jsonBlogSlugs = new Set(mappedBlogs.map((p) => p.slug));
const extraSiteBlogs = siteBlogPosts.filter((p) => !jsonBlogSlugs.has(p.slug));

export const BLOG_POSTS: BlogPostData[] = [
  ...mappedBlogs,
  ...extraSiteBlogs,
].map((post) => ({
  ...post,
  metadata: {
    ...post.metadata,
    title: withSeoYear2027(post.metadata.title),
  },
}));

export function getBlogPostBySlug(slug: string): BlogPostData | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
