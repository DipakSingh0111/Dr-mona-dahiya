import siteData from "./site.json";
import rawLocationData from "./location.json";

export type LocationPageData = {
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
    descriptionPrefix: string;
    highlightLocation: string;
    descriptionSuffix: string;
    image: string;
    imageAlt: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    pills: string[];
  };
  registration: {
    title: string;
    subtitle: string;
  };
  indications: {
    eyebrow: string;
    title: string;
    items: {
      number: number;
      title: string;
      description: string;
    }[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  protocol: {
    eyebrow: string;
    title: string;
    items: {
      step: number;
      title: string;
      description: string;
    }[];
  };
  whyConsult: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  scenario: {
    eyebrow: string;
    title: string;
    text: string;
    disclaimer: string;
  };
  howToReach: {
    eyebrow: string;
    title: string;
    subtitle: string;
    originLabel: string;
    clinics: {
      number: number;
      tag: string;
      title: string;
      distance: string;
      duration: string;
      routeBadge: string;
      byRoad: string;
      byMetro: string;
      linkLabel: string;
      linkHref: string;
    }[];
  };
  nearbyAreas: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      subtitle: string;
      href: string;
    }[];
  };
  costFactors: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      icon: "medicine" | "lab" | "calendar" | "check";
      title: string;
      description: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  consultation: {
    sectionId: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    consultationDuration: string;
    defaultClinic: string;
  };
};

type RawSection = Record<string, unknown> & { id?: string; type?: string };

type RawLocationPage = {
  path: string;
  content: {
    seo?: {
      title?: string;
      description?: string;
      breadcrumbs?: { t: string; href?: string }[];
    };
    sections?: RawSection[];
  };
};

function cleanHref(href?: string): string {
  if (!href) return "#";
  if (href === "#appointment" || href === "#appt") return "#book-consultation";
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return href;
  }
  return href.length > 1 ? href.replace(/\/+$/, "") : href;
}

function cleanMarkdownLinks(text?: string): string {
  if (!text) return "";
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function mapCostIcon(icon?: string): "medicine" | "lab" | "calendar" | "check" {
  switch (icon) {
    case "pill":
      return "medicine";
    case "flask":
      return "lab";
    case "calendar":
      return "calendar";
    default:
      return "check";
  }
}

function inferDefaultClinic(text: string, parentHref: string): string {
  const combined = `${text} ${parentHref}`.toLowerCase();
  if (combined.includes("lajpat nagar") || combined.includes("delhi")) return "Delhi";
  if (combined.includes("raj nagar") || combined.includes("ghaziabad")) return "Ghaziabad";
  return "Noida";
}

function mapRawLocationPage(raw: RawLocationPage): LocationPageData {
  const slug = raw.path
    .replace(/^https?:\/\/[^/]+\/location\//i, "")
    .replace(/\/+$/, "");

  const seo = raw.content?.seo ?? {};
  const sections = raw.content?.sections ?? [];
  const byId = new Map<string, RawSection>();
  for (const sec of sections) {
    if (sec.id) byId.set(sec.id, sec);
  }

  const hero = (byId.get("hero") ?? {}) as Record<string, unknown>;
  const breadcrumbs = seo.breadcrumbs ?? [];
  const parentBc = breadcrumbs[1];
  const currentBc = breadcrumbs[breadcrumbs.length - 1];
  const lead2 = (hero.lead2 ?? {}) as { pre?: string; link?: string; post?: string };
  const cta1 = (hero.cta1 ?? {}) as { label?: string; href?: string };
  const cta2 = (hero.cta2 ?? {}) as { label?: string; href?: string };
  const rawImg = (hero.image ?? {}) as { src?: string; alt?: string };
  const imageSrc =
    rawImg.src && !rawImg.src.startsWith("data:")
      ? rawImg.src
      : "/pageBanner/M0500491.jpg";

  const ind = (byId.get("indications") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    groups?: { items?: { t?: string; d?: string }[] }[];
  };
  const indItems = (ind.groups ?? []).flatMap((g) => g.items ?? []);

  const cl = (byId.get("checklist") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    paras?: string[];
    points?: string[];
  };
  const clItems = (cl.points ?? []).map((pt) => {
    const cleaned = cleanMarkdownLinks(pt);
    const colonIdx = cleaned.indexOf(":");
    if (colonIdx > 0 && colonIdx < 60) {
      return {
        title: cleaned.slice(0, colonIdx).trim(),
        description: cleaned.slice(colonIdx + 1).trim(),
      };
    }
    return { title: "", description: cleaned };
  });

  const pr = (byId.get("protocol") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    steps?: { t?: string; sub?: string[] }[];
  };

  const why = (byId.get("why") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    items?: { t?: string; d?: string }[];
  };

  const caseSec = (byId.get("case") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    text?: string;
    cap?: string;
  };

  const tr = (byId.get("transit") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    lead?: string;
    origin?: string;
    routes?: {
      tag?: string;
      t?: string;
      dist?: string;
      time?: string;
      via?: string;
      href?: string;
      hl?: string;
      road?: string;
      metro?: string;
    }[];
  };

  const peers = (byId.get("peers") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    items?: { t?: string; d?: string; href?: string }[];
  };

  const cost = (byId.get("cost") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    lead?: string;
    groups?: { items?: { icon?: string; t?: string; d?: string }[] }[];
  };
  const costItems = (cost.groups ?? []).flatMap((g) => g.items ?? []);

  const faqs = (byId.get("faqs") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    lead?: string;
    items?: { q?: string; a?: string }[];
  };

  const appt = (byId.get("appointment") ?? {}) as {
    eyebrow?: string;
    h2?: string;
    text?: string;
  };

  const breadcrumbParentHref = cleanHref(parentBc?.href || "/best-ivf-doctor-in-noida");

  return {
    slug,
    metadata: {
      title: seo.title || `${(hero.h1 as string) || slug} | Little Angel IVF`,
      description: seo.description || "",
    },
    hero: {
      breadcrumbParent: {
        label: parentBc?.t || "Best IVF Doctor in Noida",
        href: breadcrumbParentHref,
      },
      breadcrumbLabel: currentBc?.t || (hero.h1 as string) || slug,
      eyebrow: (hero.eyebrow as string) || "Fertility Treatment",
      title: (hero.h1 as string) || "",
      descriptionPrefix: lead2.pre ?? (hero.lead as string) ?? "",
      highlightLocation: lead2.link ?? "",
      descriptionSuffix: lead2.post ?? "",
      image: imageSrc,
      imageAlt: rawImg.alt || `${(hero.h1 as string) || slug} — Dr. Mona Dahiya`,
      primaryCta: {
        label: cta1.label || "Book In-Clinic Consultation",
        href:
          !cta1.label || cta1.label === "Book In-Clinic Consultation"
            ? "/book-appointment"
            : cleanHref(cta1.href || "#book-consultation"),
      },
      secondaryCta: {
        label: cta2.label || "Schedule Online Consultation",
        href: cleanHref(cta2.href || "/ivf-consultation-online"),
      },
      pills: Array.isArray(hero.chips) ? (hero.chips as string[]) : [],
    },
    registration: {
      title: "Medical Registration",
      subtitle: "Dr. Mona Dahiya is registered with the following medical councils.",
    },
    indications: {
      eyebrow: ind.eyebrow || "Who Will Require Assistance?",
      title: ind.h2 || "Indications: Who Needs Advanced Fertility Care?",
      items: indItems.map((item, idx) => ({
        number: idx + 1,
        title: item.t || "",
        description: cleanMarkdownLinks(item.d),
      })),
    },
    checklist: {
      eyebrow: cl.eyebrow || "Before Test",
      title: cl.h2 || "Diagnostic Checklist: Pre-IVF Evaluation",
      subtitle: cl.paras?.[0] || "Tests required prior to starting IVF.",
      items: clItems,
    },
    protocol: {
      eyebrow: pr.eyebrow || "Process for Treatment",
      title: pr.h2 || "Step-by-Step Clinical Treatment Protocol",
      items: (pr.steps ?? []).map((step, idx) => ({
        step: idx + 1,
        title: step.t || "",
        description: cleanMarkdownLinks((step.sub ?? []).join(" ")),
      })),
    },
    whyConsult: {
      eyebrow: why.eyebrow || "About Us",
      title: why.h2 || "Why Residents Consult Dr. Mona Dahiya",
      items: (why.items ?? []).map((item) => ({
        title: item.t || "",
        description: cleanMarkdownLinks(item.d),
      })),
    },
    scenario: {
      eyebrow: caseSec.eyebrow || "Case Study",
      title: caseSec.h2 || "Illustrative Patient Scenario",
      text: cleanMarkdownLinks(caseSec.text),
      disclaimer:
        caseSec.cap ||
        "Disclaimer: Outcomes may vary from patient to patient.",
    },
    howToReach: {
      eyebrow: tr.eyebrow || "Reach Us",
      title: tr.h2 || "How to Reach Our Clinics",
      subtitle: tr.lead || "",
      originLabel: tr.origin || "",
      clinics: (tr.routes ?? []).map((route, idx) => ({
        number: idx + 1,
        tag: (route.tag || "").toUpperCase(),
        title: route.t || "",
        distance: route.dist || "",
        duration: route.time || "",
        routeBadge: route.via || "",
        byRoad: route.road || "",
        byMetro: route.metro || "",
        linkLabel: route.hl
          ? route.hl.includes("→")
            ? route.hl
            : `${route.hl} →`
          : "Read More →",
        linkHref: cleanHref(route.href || "/best-ivf-doctor-in-noida"),
      })),
    },
    nearbyAreas: {
      eyebrow: peers.eyebrow || "Nearby locations",
      title: peers.h2 || "Nearby Areas Served",
      items: (peers.items ?? []).map((item) => ({
        title: item.t || "",
        subtitle: item.d || "",
        href: cleanHref(item.href || "#book-consultation"),
      })),
    },
    costFactors: {
      eyebrow: cost.eyebrow || "Price List",
      title: cost.h2 || "Transparent IVF Cost Factors",
      subtitle: cost.lead || "",
      items: costItems.map((item) => ({
        icon: mapCostIcon(item.icon),
        title: item.t || "",
        description: cleanMarkdownLinks(item.d),
      })),
    },
    faq: {
      eyebrow: faqs.eyebrow || "FAQ",
      title: faqs.h2 || "Frequently Asked Questions",
      subtitle:
        faqs.lead ||
        "Here are some questions that are frequently asked by patients.",
      items: (faqs.items ?? []).map((item) => ({
        question: item.q || "",
        answer: cleanMarkdownLinks(item.a),
      })),
    },
    consultation: {
      sectionId: "book-consultation",
      eyebrow: appt.eyebrow || "Next step",
      title: appt.h2 || "Book an In-Clinic or Online Consultation",
      subtitle: appt.text || "",
      consultationDuration: "30 minutes",
      defaultClinic: inferDefaultClinic(
        appt.text || "",
        breadcrumbParentHref,
      ),
    },
  };
}

const siteLocationPages: LocationPageData[] =
  (siteData as { locationPages?: LocationPageData[] }).locationPages ?? [];

const siteLocationBySlug = new Map(
  siteLocationPages.map((page) => [page.slug, page]),
);

const rawPages: RawLocationPage[] =
  (rawLocationData as { pages?: RawLocationPage[] }).pages ?? [];

const mappedFromJson: LocationPageData[] = rawPages.map((raw) => {
  const mapped = mapRawLocationPage(raw);
  return siteLocationBySlug.get(mapped.slug) ?? mapped;
});

const jsonSlugs = new Set(mappedFromJson.map((p) => p.slug));
const extraSitePages = siteLocationPages.filter((p) => !jsonSlugs.has(p.slug));

export const LOCATION_PAGES: LocationPageData[] = [
  ...mappedFromJson,
  ...extraSitePages,
];

export function getLocationPageBySlug(
  slug: string,
): LocationPageData | undefined {
  return LOCATION_PAGES.find((page) => page.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATION_PAGES.map((page) => page.slug);
}
