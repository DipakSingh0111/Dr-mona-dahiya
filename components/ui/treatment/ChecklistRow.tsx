"use client";

import { isValidElement, type ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export interface ChecklistRowProps {
  title?: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  className?: string;
}

function splitColonString(raw: string): { heading: string; body: string } | null {
  const colonIndex = raw.indexOf(":");
  if (colonIndex > 0 && colonIndex < 70) {
    const heading = raw.slice(0, colonIndex).trim();
    const body = raw.slice(colonIndex + 1).trim();
    if (heading && body) {
      return { heading, body };
    }
  }
  return null;
}

function extractSplitFromNode(node: ReactNode): { heading: string; body: string } | null {
  if (typeof node === "string") {
    return splitColonString(node);
  }
  if (isValidElement<{ children?: ReactNode }>(node) && typeof node.props?.children === "string") {
    return splitColonString(node.props.children);
  }
  return null;
}

export function ChecklistRow({
  title,
  text,
  children,
  className = "",
}: ChecklistRowProps) {
  let heading: ReactNode =
    typeof title === "string" ? title.replace(/:\s*$/, "") : title;
  let body: ReactNode = text;

  if (!heading) {
    const split = extractSplitFromNode(children) ?? extractSplitFromNode(text);
    if (split) {
      heading = split.heading;
      body = split.body;
    }
  }

  const hasSeparateHeading = Boolean(heading && body);

  return (
    <div
      className={`flex h-full items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:border-[#f8b4cb] hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:gap-4 sm:px-5 sm:py-4 ${className}`}
    >
      <span className="mt-0.5 flex size-5.5 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose ring-1 ring-rose/35 sm:size-6">
        <FaCheck className="size-2.5 sm:size-3" />
      </span>

      {hasSeparateHeading ? (
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-[1rem] leading-snug text-ink sm:text-[1.0625rem]">
            {heading}
          </h3>
          <p className="mt-1 text-[13.5px] leading-relaxed text-slate-600 sm:text-[14px]">
            {body}
          </p>
        </div>
      ) : (
        <div className="min-w-0 flex-1 text-[13.5px] leading-relaxed text-ink sm:text-[14px]">
          {children || heading || body}
        </div>
      )}
    </div>
  );
}
