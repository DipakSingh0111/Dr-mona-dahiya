"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar, FaHeart } from "react-icons/fa";
import { MdWaterDrop, MdOutlineEgg } from "react-icons/md";
import siteData from "@/data/site.json";

const categoryStyles = {
  pink: {
    bg: "bg-[#fff0f5]",
    border: "border-[#f9c5d4]",
    iconWrap: "bg-[#e83e74] text-white",
    text: "text-[#c2185b]",
    active: "bg-[#e83e74] text-white border-[#e83e74]",
  },
  teal: {
    bg: "bg-[#eefbf3]",
    border: "border-[#b7ebc8]",
    iconWrap: "bg-[#d8f5e3] text-[#1b9e55]",
    text: "text-[#1b7a45]",
    active: "bg-[#1b9e55] text-white border-[#1b9e55]",
  },
  purple: {
    bg: "bg-[#f6f0ff]",
    border: "border-[#ddc9f8]",
    iconWrap: "bg-[#efe5ff] text-[#7c3aed]",
    text: "text-[#6d28d9]",
    active: "bg-[#7c3aed] text-white border-[#7c3aed]",
  },
  blue: {
    bg: "bg-[#eef7ff]",
    border: "border-[#b8dbf8]",
    iconWrap: "bg-[#dff0ff] text-[#0284c7]",
    text: "text-[#0369a1]",
    active: "bg-[#0284c7] text-white border-[#0284c7]",
  },
  yellow: {
    bg: "bg-[#fffbeb]",
    border: "border-[#fde68a]",
    iconWrap: "bg-[#fef3c7] text-[#ca8a04]",
    text: "text-[#a16207]",
    active: "bg-[#ca8a04] text-white border-[#ca8a04]",
  },
  peach: {
    bg: "bg-[#fff4f0]",
    border: "border-[#fdc9b5]",
    iconWrap: "bg-[#ffe4d6] text-[#e85d04]",
    text: "text-[#c2410c]",
    active: "bg-[#e85d04] text-white border-[#e85d04]",
  },
} as const;

/** IVF: magnifying glass over cell — matches reference */
function IvfIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="10" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="10" cy="10" r="2.2" fill="currentColor" opacity="0.85" />
      <circle cx="8.2" cy="8.4" r="0.7" fill="currentColor" opacity="0.5" />
      <path
        d="M14.2 14.2L19.5 19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** PCOS: reproductive / floral atom style */
function PcosIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="7.5"
        ry="3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="7.5"
        ry="3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(-60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="7.5"
        ry="3.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CategoryIcon({
  type,
  className = "size-5",
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "ivf":
      return <IvfIcon className={className} />;
    case "egg":
      return <MdOutlineEgg className={className} />;
    case "pcos":
      return <PcosIcon className={className} />;
    case "drop":
      return <MdWaterDrop className={className} />;
    case "star":
      return <FaStar className={className} />;
    case "heart":
    default:
      return <FaHeart className={className} />;
  }
}

export default function SuccessStories() {
  const {
    eyebrow,
    titlePrefix,
    titleHighlight,
    subtitle,
    categories,
    testimonials,
  } = siteData.successStories;

  const [activeCategory, setActiveCategory] = useState("ivf");
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, testimonials.length - 1);
  const visibleCount = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Rotate testimonials so currentIndex is first visible
  const ordered = [
    ...testimonials.slice(currentIndex),
    ...testimonials.slice(0, currentIndex),
  ].slice(0, visibleCount);

  // For mobile show one at a time from currentIndex
  const mobileItem = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-white px-3 pt-14 pb-20 sm:px-4 sm:pt-16 sm:pb-24 lg:pr-8 lg:pl-3 xl:pl-4">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-8 lg:mb-12 lg:flex-row lg:items-start">
          <div className="max-w-xl">
            <div className="mb-3.5 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#e83e74]" />
              <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
                {eyebrow}
              </span>
              <span className="h-[2px] w-8 rounded-full bg-[#e83e74]" />
            </div>

            <h2 className="font-display text-3xl leading-[1.14] font-bold tracking-tight text-[#0f2438] sm:text-4xl md:text-[46px] lg:text-[50px]">
              {titlePrefix}{" "}
              <span className="text-[#e83e74]">{titleHighlight}</span>
            </h2>

            <p className="mt-3.5 max-w-md text-sm font-normal text-gray-500 sm:text-base">
              {subtitle}
            </p>
          </div>

          {/* Browse by treatment */}
          <div className="w-full lg:max-w-[700px] xl:max-w-[740px] lg:pt-1">
            <h3 className="font-display mb-3.5 text-[17px] font-bold text-[#0f2438] sm:text-[18px]">
              Browse stories by treatment
            </h3>
            <div className="flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none sm:gap-3">
              {categories.map((cat) => {
                const style =
                  categoryStyles[cat.color as keyof typeof categoryStyles];
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex h-[106px] w-[96px] shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-[18px] border px-2 py-2.5 text-center transition-all duration-200 hover:-translate-y-0.5 sm:h-[110px] sm:w-[102px] xl:w-[106px] ${
                      isActive
                        ? style.active
                        : `${style.bg} ${style.border} shadow-[0_2px_10px_rgba(15,23,42,0.03)]`
                    }`}
                  >
                    <span
                      className={`flex size-10 items-center justify-center rounded-full ${
                        isActive ? "bg-white/20 text-white" : style.iconWrap
                      }`}
                    >
                      <CategoryIcon type={cat.icon} className="size-5" />
                    </span>
                    <span
                      className={`line-clamp-2 text-[10.5px] leading-tight font-bold sm:text-[11px] ${
                        isActive ? "text-white" : style.text
                      }`}
                    >
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-2 px-2 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="absolute top-1/2 left-0 z-20 flex size-[44px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#e83e74] text-white shadow-[0_8px_22px_rgba(232,62,116,0.4)] transition hover:scale-105 active:scale-95 sm:size-[48px] lg:-left-1"
          >
            <FaChevronLeft className="size-4" />
          </button>

          {/* Desktop: 3 cards */}
          <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {ordered.map((item) => (
              <TestimonialCard key={`${item.id}-${currentIndex}`} item={item} />
            ))}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <TestimonialCard item={mobileItem} />
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonials"
            className="absolute top-1/2 right-0 z-20 flex size-[44px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#e83e74] text-white shadow-[0_8px_22px_rgba(232,62,116,0.4)] transition hover:scale-105 active:scale-95 sm:size-[48px] lg:-right-1"
          >
            <FaChevronRight className="size-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`size-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-2.5 bg-[#e83e74]"
                  : "bg-[#ffd1e0] hover:bg-[#fca5c2]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
}: {
  item: {
    id: string;
    quote: string;
    initials: string;
    author: string;
    type: string;
    image: string;
  };
}) {
  return (
    <article className="flex h-full overflow-hidden rounded-[24px] border border-[#fde2ec] bg-white p-4 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(232,62,116,0.1)] sm:p-5">
      <div className="flex w-full items-stretch gap-4 sm:gap-5">
        <div className="relative aspect-[4/5] w-[42%] min-w-[120px] max-w-[150px] shrink-0 overflow-hidden rounded-[18px] bg-[#fff0f5] sm:rounded-[20px]">
          <Image
            src={item.image}
            alt={item.author}
            fill
            sizes="150px"
            className="object-cover object-center"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col py-0.5">
          <span
            aria-hidden
            className="font-display text-[40px] leading-none font-bold text-[#f48fb1] select-none"
          >
            “
          </span>

          <p className="font-display mt-1 line-clamp-4 text-[15px] leading-snug font-bold tracking-tight text-[#0f2438] sm:text-[16.5px]">
            {item.quote.replace(/"$/, "")}
          </p>

          <div className="my-3 h-px w-10 bg-[#f8b4c8]" />

          <div className="mt-auto flex items-center gap-2.5">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ffe4ee] text-[11px] font-bold text-[#e83e74]">
              {item.initials}
            </div>
            <div className="min-w-0">
              <h4 className="truncate text-[13.5px] font-bold text-[#0f2438] sm:text-[14px]">
                {item.author}
              </h4>
              <p className="text-[11.5px] text-gray-500">{item.type}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
