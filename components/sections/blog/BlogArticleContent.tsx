"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  DEFAULT_BLOG_POST,
  type ArticleBlock,
  type BlogPostData,
  type InlineTextSegment,
} from "@/data/blogs";

const linkClass =
  "font-semibold text-blue underline decoration-blue/45 underline-offset-2 transition-colors hover:text-rose hover:decoration-rose";

const headingLinkClass =
  "underline decoration-rose/45 underline-offset-4 transition-colors hover:text-rose";

const subheadingLinkClass = "hover:underline";

function renderInlineSegments(segments: InlineTextSegment[]): ReactNode {
  return segments.map((segment, idx) => {
    if (typeof segment === "string") {
      return <span key={idx}>{segment}</span>;
    }

    if ("bold" in segment) {
      return (
        <strong key={idx} className="font-semibold text-ink">
          {segment.bold}
        </strong>
      );
    }

    const cls =
      segment.variant === "heading"
        ? headingLinkClass
        : segment.variant === "subheading"
          ? subheadingLinkClass
          : linkClass;

    return (
      <Link key={idx} href={segment.href} className={cls}>
        {segment.text}
      </Link>
    );
  });
}

function ArticleHeading({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-serif scroll-mt-[calc(var(--site-header-h,8.75rem)+1.5rem)] border-l-[3px] border-rose pl-3.5 text-[1.45rem] leading-snug font-normal tracking-tight text-ink sm:text-[1.75rem]"
    >
      {children}
    </h2>
  );
}

function SubHeading({
  id,
  first,
  children,
}: {
  id?: string;
  first?: boolean;
  children: ReactNode;
}) {
  return (
    <h3
      id={id}
      className={`${first ? "" : "mt-5 "}scroll-mt-[calc(var(--site-header-h,8.75rem)+1.5rem)] text-[15px] font-bold text-rose sm:text-[16px]`}
    >
      {children}
    </h3>
  );
}

function BulletList({
  items,
  spacing = "sm",
  ordered = false,
}: {
  items: InlineTextSegment[][];
  spacing?: "sm" | "md";
  ordered?: boolean;
}) {
  if (ordered) {
    return (
      <ol
        className={`${spacing === "md" ? "mt-4" : "mt-3"} list-decimal space-y-2 pl-5 text-[14px] leading-relaxed text-ink/85 marker:font-semibold marker:text-rose sm:text-[15px]`}
      >
        {items.map((item, idx) => (
          <li key={idx} className="pl-1">
            {renderInlineSegments(item)}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul
      className={`${spacing === "md" ? "mt-4" : "mt-3"} space-y-2 text-[14px] leading-relaxed text-ink/85 sm:text-[15px]`}
    >
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-2 size-1.5 shrink-0 rounded-full bg-rose"
          />
          <span className="min-w-0 flex-1">{renderInlineSegments(item)}</span>
        </li>
      ))}
    </ul>
  );
}

const spacingClassMap = {
  sm: "mt-2",
  md: "mt-3",
  lg: "mt-4",
} as const;

function renderArticleBlock(block: ArticleBlock, idx: number): ReactNode {
  switch (block.type) {
    case "subheading":
      return (
        <SubHeading key={idx} id={block.id} first={block.first}>
          {renderInlineSegments(block.content)}
        </SubHeading>
      );

    case "paragraph":
      return (
        <p
          key={idx}
          className={spacingClassMap[block.spacing ?? "lg"]}
        >
          {renderInlineSegments(block.content)}
        </p>
      );

    case "paragraphs": {
      const topClass = spacingClassMap[block.topMargin ?? "md"];
      const spaceClass =
        block.spacing === "tight" ? "space-y-2.5" : "space-y-4";
      return (
        <div key={idx} className={`${topClass} ${spaceClass}`}>
          {block.items.map((item, pIdx) => (
            <p key={pIdx}>{renderInlineSegments(item)}</p>
          ))}
        </div>
      );
    }

    case "lead": {
      const leadMargin =
        block.spacing === "lg"
          ? "mt-5"
          : block.spacing === "md"
            ? "mt-4"
            : "mt-3";
      return (
        <p key={idx} className={`${leadMargin} font-medium text-ink`}>
          {renderInlineSegments(block.text)}
        </p>
      );
    }

    case "list":
      return (
        <BulletList
          key={idx}
          items={block.items}
          spacing={block.spacing}
          ordered={block.ordered}
        />
      );

    case "table":
      return (
        <div
          key={idx}
          className="mt-5 overflow-x-auto rounded-2xl border border-rose/20 bg-white shadow-[0_8px_24px_rgba(232,62,116,0.06)]"
        >
          <table className="w-full min-w-[540px] border-collapse text-left text-[13.5px] sm:text-[14px]">
            <thead>
              <tr className="border-b border-rose/20 bg-pink/80">
                {block.headers.map((header, hIdx) => (
                  <th
                    key={hIdx}
                    className="px-4 py-3 font-bold text-rose"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-rose/10">
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-pink/35">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-3 align-top leading-relaxed ${
                        cIdx === 0 ? "font-semibold text-ink" : "text-ink/85"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "image":
      return (
        <div
          key={idx}
          className="mt-6 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_14px_36px_rgba(232,62,116,0.1)]"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover object-[50%_22%]"
            />
          </div>
        </div>
      );

    case "faqs":
      return (
        <div key={idx} className="mt-5 space-y-3.5">
          {block.items.map((faq, fIdx) => (
            <div
              key={fIdx}
              className="rounded-xl border border-[#fde2ec] bg-white px-5 py-4 shadow-[0_6px_18px_rgba(232,62,116,0.05)]"
            >
              <h3 className="text-[15px] font-bold text-rose sm:text-[16px]">
                {renderInlineSegments(faq.question)}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/85 sm:text-[14.5px]">
                {renderInlineSegments(faq.answer)}
              </p>
            </div>
          ))}
        </div>
      );
  }
}

export default function BlogArticleContent({
  post = DEFAULT_BLOG_POST,
}: {
  post?: BlogPostData;
}) {
  const tocItems = useMemo(() => {
    const items: { id: string; label: string; nested?: boolean }[] = [];
    for (const section of post.sections) {
      if (section.id && section.tocLabel) {
        items.push({ id: section.id, label: section.tocLabel });
      }
      for (const block of section.blocks) {
        if (block.type === "subheading" && block.id && block.tocLabel) {
          items.push({ id: block.id, label: block.tocLabel, nested: true });
        }
      }
    }
    return items;
  }, [post.sections]);

  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id ?? "");

  useEffect(() => {
    setActiveId(tocItems[0]?.id ?? "");
  }, [tocItems]);

  useEffect(() => {
    const headings = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <section className="treatment-section relative overflow-x-clip py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Sticky Sidebar: TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-[calc(var(--site-header-h,8.75rem)+1.5rem)] lg:col-span-4 lg:self-start">
            <div className="rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] sm:p-6">
              <p className="text-[11.5px] font-bold tracking-[0.14em] text-rose uppercase">
                Table of Contents
              </p>
              <nav aria-label="Table of Contents" className="mt-3.5">
                <ul className="max-h-[280px] space-y-1.5 overflow-y-auto pr-1 lg:max-h-[calc(100dvh-var(--site-header-h,8.75rem)-8rem)]">
                  {tocItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={() => setActiveId(item.id)}
                          className={`block rounded-lg py-1.5 leading-snug transition-colors ${
                            item.nested
                              ? "pr-2.5 pl-5 text-[12px] sm:text-[12.5px]"
                              : "px-2.5 text-[12.5px] sm:text-[13px]"
                          } ${
                            isActive
                              ? "bg-pink font-semibold text-rose"
                              : "font-medium text-ink/80 hover:bg-pink/70 hover:text-rose"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right Main Article Column */}
          <article className="min-w-0 lg:col-span-8">
            {/* Meta row: Date & Category Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink/75 sm:text-[13px]">
                <FaRegCalendarAlt className="size-3.5 text-rose" />
                {post.meta.date}
              </span>
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-0.5 text-[11.5px] font-semibold text-rose shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Blog Image */}
            <div className="mt-5 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_14px_36px_rgba(232,62,116,0.1)]">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.meta.image.src}
                  alt={post.meta.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover object-[50%_22%]"
                />
              </div>
            </div>

            {/* Article Prose Content */}
            <div className="mt-8 space-y-10 text-[14px] leading-relaxed text-ink/85 sm:text-[15px]">
              {post.sections.map((section, sectionIdx) => (
                <section key={section.id ?? `section-${sectionIdx}`}>
                  {section.heading ? (
                    <ArticleHeading id={section.id}>
                      {renderInlineSegments(section.heading)}
                    </ArticleHeading>
                  ) : null}
                  {section.blocks.map((block, blockIdx) =>
                    renderArticleBlock(block, blockIdx),
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
