import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LocationPageView from "@/components/sections/location-detail/LocationPageView";
import {
  getAllLocationSlugs,
  getLocationPageBySlug,
} from "@/data/locations";

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.metadata.title,
    description: page.metadata.description,
  };
}

export default async function LocationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLocationPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <LocationPageView page={page} />;
}

