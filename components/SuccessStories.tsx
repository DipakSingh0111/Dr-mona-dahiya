"use client";

import { useEffect, useRef, useState, useEffectEvent } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const categoryStyles = {
  pink: {
    bg: "bg-[#fff0f5]",
    border: "border-[#f9c5d4]",
    icon: "text-[#e83e74]",
    text: "text-[#c2185b]",
    activeBg: "bg-[#e83e74]",
  },
  teal: {
    bg: "bg-[#eefbf3]",
    border: "border-[#b7ebc8]",
    icon: "text-[#1b9e55]",
    text: "text-[#1b7a45]",
    activeBg: "bg-[#1b9e55]",
  },
  purple: {
    bg: "bg-[#f6f0ff]",
    border: "border-[#ddc9f8]",
    icon: "text-[#7c3aed]",
    text: "text-[#6d28d9]",
    activeBg: "bg-[#7c3aed]",
  },
  blue: {
    bg: "bg-[#eef7ff]",
    border: "border-[#b8dbf8]",
    icon: "text-[#0284c7]",
    text: "text-[#0369a1]",
    activeBg: "bg-[#0284c7]",
  },
  yellow: {
    bg: "bg-[#fffbeb]",
    border: "border-[#fde68a]",
    icon: "text-[#ca8a04]",
    text: "text-[#a16207]",
    activeBg: "bg-[#ca8a04]",
  },
  peach: {
    bg: "bg-[#fff4f0]",
    border: "border-[#fdc9b5]",
    icon: "text-[#e85d04]",
    text: "text-[#c2410c]",
    activeBg: "bg-[#e85d04]",
  },
} as const;

function IvfIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="10" cy="10" r="5.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12.2 8.2c.9-.9 2.2-.7 2.6.4-.4 1.1-1.7 1.8-2.6.9-.9.9-2.2.2-2.6-.9.4-1.1 1.7-1.3 2.6-.4Z"
        fill="currentColor"
      />
      <path
        d="M14.2 14.2 19.2 19.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 20.5S5.5 16.2 5.5 10.2C5.5 6.8 8.2 4 12 4s6.5 2.8 6.5 6.2c0 6-6.5 10.3-6.5 10.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 12.5c1.8-.8 3.2-2.2 3.8-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.8l-1.6-5.6L5 10.6 10.4 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 15.2 19.2 17.5 21.5 18.2 19.2 18.9 18.5 21.2 17.8 18.9 15.5 18.2 17.8 17.5 18.5 15.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DropIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3.5C12 3.5 6.5 10.2 6.5 14.2a5.5 5.5 0 0 0 11 0C17.5 10.2 12 3.5 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 15.2c.6 1.2 1.8 1.8 3.2 1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3.5 14.4 9.2 20.5 9.8 15.9 13.8 17.3 19.8 12 16.7 6.7 19.8 8.1 13.8 3.5 9.8 9.6 9.2 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 20s-6.8-4.2-8.6-8.2C2.2 9.2 3.4 6.2 6.2 5.4c1.6-.5 3.3.1 4.3 1.4C11.5 5.5 13.2 4.9 14.8 5.4c2.8.8 4 3.8 2.8 6.4C16.8 15.8 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CategoryIcon({
  type,
  className = "size-6",
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "ivf":
      return <IvfIcon className={className} />;
    case "egg":
      return <LeafIcon className={className} />;
    case "pcos":
      return <SparkleIcon className={className} />;
    case "drop":
      return <DropIcon className={className} />;
    case "star":
      return <StarIcon className={className} />;
    case "heart":
    default:
      return <HeartIcon className={className} />;
  }
}

type Testimonial = (typeof siteData.successStories.testimonials)[number];

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
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const total = testimonials.length;

  const goTo = (index: number) => {
    setCurrentIndex(((index % total) + total) % total);
  };

  const handlePrev = () => goTo(currentIndex - 1);
  const handleNext = () => goTo(currentIndex + 1);

  const onAutoNext = useEffectEvent(() => {
    if (!paused) goTo(currentIndex + 1);
  });

  useEffect(() => {
    const id = window.setInterval(() => onAutoNext(), 4200);
    return () => window.clearInterval(id);
  }, [onAutoNext]);

  // Build a window of 3 cards starting at currentIndex (wrapping)
  const visible = Array.from({ length: 3 }, (_, i) => {
    const item = testimonials[(currentIndex + i) % total];
    return { ...item, key: `${item.id}-${currentIndex}-${i}` };
  });

  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-6 flex flex-col justify-between gap-6 lg:mb-8 lg:flex-row lg:items-start">
          <Reveal variant="slideLeft" className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#e83e74] sm:w-10" />
              <span className="rounded-full border border-[#e83e74]/50 px-3.5 py-1 text-[11px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[12px]">
                {eyebrow}
              </span>
              <span className="h-px w-8 bg-[#e83e74] sm:w-10" />
            </div>

            <h2 className="font-display text-3xl leading-[1.14] font-bold tracking-tight text-[#0f2438] sm:text-4xl md:text-[46px] lg:text-[50px]">
              {titlePrefix}{" "}
              <span className="text-[#e83e74]">{titleHighlight}</span>
            </h2>

            <p className="mt-3.5 max-w-md text-sm text-[#64748b] sm:text-base">
              {subtitle}
            </p>
          </Reveal>

          <Reveal
            variant="slideRight"
            className="w-full rounded-[22px] bg-[#fff7fa] p-4 sm:p-5 lg:max-w-[720px] xl:max-w-[760px]"
          >
            <h3 className="font-display mb-3.5 text-[17px] font-bold text-[#0f2438] sm:text-[18px]">
              Browse stories by treatment
            </h3>
            <Stagger
              className="flex flex-nowrap items-stretch gap-2.5 overflow-x-auto pb-1 scrollbar-none sm:gap-3"
              stagger={0.05}
            >
              {categories.map((cat) => {
                const style =
                  categoryStyles[cat.color as keyof typeof categoryStyles];
                const isActive = activeCategory === cat.id;

                return (
                  <StaggerItem key={cat.id} variant="scaleIn">
                    <button
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex h-[108px] w-[100px] shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-[16px] border px-2 py-2.5 text-center transition-all duration-300 ease-out hover:-translate-y-0.5 sm:h-[112px] sm:w-[106px] ${
                        isActive
                          ? `${style.activeBg} border-transparent text-white shadow-[0_8px_20px_rgba(232,62,116,0.25)]`
                          : `${style.bg} ${style.border} bg-white shadow-sm`
                      }`}
                    >
                      <span
                        className={`flex size-9 items-center justify-center transition-colors duration-300 ${
                          isActive ? "text-white" : style.icon
                        }`}
                      >
                        <CategoryIcon type={cat.icon} className="size-6" />
                      </span>
                      <span
                        className={`line-clamp-2 text-[10.5px] leading-tight font-bold transition-colors duration-300 sm:text-[11px] ${
                          isActive ? "text-white" : style.text
                        }`}
                      >
                        {cat.label}
                      </span>
                    </button>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Reveal>
        </div>

        <Reveal variant="fadeUp" delay={0.1}>
        <div
          className="relative mt-2 px-7 sm:px-10 lg:px-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="absolute top-1/2 left-0 z-20 flex size-[36px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#e83e74] text-white shadow-[0_8px_22px_rgba(232,62,116,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#d13266] active:scale-95 sm:size-[44px] lg:size-[48px]"
          >
            <FaChevronLeft className="size-3.5" />
          </button>

          <div
            className="overflow-hidden"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(delta) < 40) return;
              if (delta > 0) handlePrev();
              else handleNext();
            }}
          >
            {/* Desktop 3-card grid with fade/slide */}
            <div
              key={currentIndex}
              className="story-slide hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              {visible.map((item) => (
                <TestimonialCard key={item.key} item={item} />
              ))}
            </div>

            {/* Mobile single card */}
            <div key={`m-${currentIndex}`} className="story-slide md:hidden">
              <TestimonialCard item={testimonials[currentIndex]} />
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonials"
            className="absolute top-1/2 right-0 z-20 flex size-[36px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#e83e74] text-white shadow-[0_8px_22px_rgba(232,62,116,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#d13266] active:scale-95 sm:size-[44px] lg:size-[48px]"
          >
            <FaChevronRight className="size-3.5" />
          </button>
        </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ease-out ${
                currentIndex === idx
                  ? "w-6 bg-[#e83e74]"
                  : "w-2.5 bg-[#ffd1e0] hover:bg-[#fca5c2]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full overflow-hidden rounded-[22px] border border-[#fde2ec] bg-white p-3.5 shadow-[0_12px_32px_rgba(232,62,116,0.07)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(232,62,116,0.14)] sm:p-4">
      <div className="flex w-full items-stretch gap-3.5 sm:gap-4">
        <div className="relative aspect-[3/4] w-[40%] min-w-[112px] max-w-[140px] shrink-0 overflow-hidden rounded-[16px] bg-[#fff0f5] sm:rounded-[18px]">
          <Image
            src={item.image}
            alt={item.author}
            fill
            sizes="140px"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col py-1">
          <span
            aria-hidden
            className="font-display text-[42px] leading-none font-bold text-[#f48fb1] select-none"
          >
            “
          </span>

          <p className="font-display -mt-1 line-clamp-4 text-[15px] leading-snug font-bold tracking-tight text-[#0f2438] sm:text-[16px]">
            {item.quote.replace(/"$/, "")}
          </p>

          <div className="my-3.5 h-px w-full bg-[#f8d7e2]" />

          <div className="mt-auto flex items-center gap-2.5">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ffe4ee] text-[11px] font-bold text-[#e83e74]">
              {item.initials}
            </div>
            <div className="min-w-0">
              <h4 className="truncate text-[13.5px] font-bold text-[#0f2438] sm:text-[14px]">
                {item.author}
              </h4>
              <p className="text-[11.5px] text-[#94a3b8]">{item.type}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
