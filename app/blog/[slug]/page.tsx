import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogPageView from "@/components/sections/blog/BlogPageView";
import JsonLd from "@/components/seo/JsonLd";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/data/blogs";
import { getBlogPostSchema } from "@/data/schemaData";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getBlogPostSchema(post)} />
      <BlogPageView post={post} />
    </>
  );
}

