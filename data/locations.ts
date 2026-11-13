import siteData from "./site.json";

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

export const LOCATION_PAGES: LocationPageData[] =
  (siteData as { locationPages?: LocationPageData[] }).locationPages ?? [];

export function getLocationPageBySlug(
  slug: string,
): LocationPageData | undefined {
  return LOCATION_PAGES.find((page) => page.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATION_PAGES.map((page) => page.slug);
}

