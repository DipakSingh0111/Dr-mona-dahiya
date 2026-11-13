import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogPageView from "@/components/sections/blog/BlogPageView";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/data/blogs";

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

  return <BlogPageView post={post} />;
}

