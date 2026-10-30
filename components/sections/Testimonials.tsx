"use client";

import { useEffect, useRef, useState, useEffectEvent } from "react";
import { FaChevronLeft, FaChevronRight, FaTint, FaStar, FaHeart } from "react-icons/fa";
import { GiEmbryo } from "react-icons/gi";
import { LuEgg, LuCircleDot } from "react-icons/lu";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const categoryStyles = {
  pink: {
    circle: "bg-[#e83e74]",
    glow: "shadow-[0_0_22px_rgba(232,62,116,0.55)]",
  },
  teal: {
    circle: "bg-[#0d9488]",
    glow: "shadow-[0_0_22px_rgba(13,148,136,0.55)]",
  },
  purple: {
    circle: "bg-[#8b5cf6]",
    glow: "shadow-[0_0_22px_rgba(139,92,246,0.55)]",
  },
  blue: {
    circle: "bg-[#3b82f6]",
    glow: "shadow-[0_0_22px_rgba(59,130,246,0.55)]",
  },
  yellow: {
    circle: "bg-[#eab308]",
    glow: "shadow-[0_0_22px_rgba(234,179,8,0.55)]",
  },
  peach: {
    circle: "bg-[#f97316]",
    glow: "shadow-[0_0_22px_rgba(249,115,22,0.55)]",
  },
} as const;

function CategoryIcon({
  type,
  className = "size-6",
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "ivf":
      return <GiEmbryo className={className} />;
    case "egg":
      return <LuEgg className={className} />;
    case "pcos":
      return <LuCircleDot className={className} />;
    case "drop":
      return <FaTint className={className} />;
    case "star":
      return <FaStar className={className} />;
    case "heart":
    default:
      return <FaHeart className={className} />;
  }
}

type Testimonial = (typeof siteData.successStories.testimonials)[number];

export default function Testimonials() {
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

  // Build a window of 4 cards starting at currentIndex (wrapping)
  const visible = Array.from({ length: 4 }, (_, i) => {
    const item = testimonials[(currentIndex + i) % total];
    return { ...item, key: `${item.id}-${currentIndex}-${i}` };
  });

  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col justify-between gap-6 lg:mb-8 lg:flex-row lg:items-start lg:gap-8">
          <Reveal variant="slideLeft" className="min-w-0 shrink-0 lg:max-w-[440px] xl:max-w-[500px]">
            <div className="mb-4 inline-flex max-w-full items-center gap-2.5 sm:gap-3">
              <span className="h-px w-6 shrink-0 bg-[#e83e74] sm:w-10" />
              <span className="rounded-full border border-[#e83e74]/50 px-3 py-1 text-[10.5px] font-bold tracking-[0.12em] text-[#e83e74] uppercase sm:whitespace-nowrap sm:px-3.5 sm:text-[12px] sm:tracking-[0.14em]">
                {eyebrow}
              </span>
              <span className="h-px w-6 shrink-0 bg-[#e83e74] sm:w-10" />
            </div>

            <h2 className="font-display text-2xl leading-[1.14] font-bold tracking-tight text-[#0f2438] sm:text-3xl lg:text-[2.15rem] xl:text-[2.75rem]">
              {titlePrefix}{" "}
              <span className="text-[#e83e74]">{titleHighlight}</span>
            </h2>

            <p className="mt-3 max-w-md text-xs text-[#64748b] sm:text-sm xl:text-base">
              {subtitle}
            </p>
          </Reveal>

          <Reveal
            variant="slideRight"
            className="w-full min-w-0 flex-1 p-0 lg:max-w-[780px] lg:pr-14 xl:max-w-[840px]"
          >
            <h3 className="font-display mb-3.5 text-[17px] font-bold whitespace-nowrap text-[#0f2438] sm:text-[18px]">
              Browse stories by treatment
            </h3>
            <Stagger
              className="grid grid-cols-3 gap-2.5 pb-1 sm:grid-cols-6 sm:gap-2.5 xl:gap-3"
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
                      className={`flex h-[112px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[16px] border bg-white px-2 py-2.5 text-center transition-all duration-300 ease-out hover:-translate-y-0.5 sm:h-[118px] xl:px-2.5 ${
                        isActive
                          ? "border-[#e83e74]/40 shadow-[0_8px_20px_rgba(232,62,116,0.12)] ring-1 ring-[#e83e74]/20"
                          : "border-slate-200 shadow-sm hover:border-slate-300"
                      }`}
                    >
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full text-white xl:size-11 ${style.circle} ${style.glow}`}
                      >
                        <CategoryIcon type={cat.icon} className="size-[20px] xl:size-[22px]" />
                      </span>
                      <span className="line-clamp-2 text-[10px] leading-tight font-bold text-[#0f2438] xl:text-[11px]">
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
            {/* Desktop 4-card grid with fade/slide */}
            <div
              key={currentIndex}
              className="story-slide hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5"
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
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#fde2ec] bg-white p-5 shadow-[0_12px_32px_rgba(232,62,116,0.07)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(232,62,116,0.14)] sm:p-6">
      <div>
        <span
          aria-hidden
          className="font-display block text-[42px] leading-none font-bold text-[#f48fb1] select-none"
        >
          “
        </span>

        <p className="font-display -mt-1 line-clamp-4 text-[15px] leading-snug font-bold tracking-tight text-[#0f2438] sm:text-[16px]">
          {item.quote.replace(/"$/, "")}
        </p>
      </div>

      <div>
        <div className="my-4 h-px w-full bg-[#f8d7e2]" />

        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ffe4ee] text-[12px] font-bold text-[#e83e74]">
            {item.initials}
          </div>
          <div className="min-w-0">
            <h4 className="truncate text-[14px] font-bold text-[#0f2438] sm:text-[14.5px]">
              {item.author}
            </h4>
            <p className="text-[12px] text-[#94a3b8]">{item.type}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

// Named export for compatibility
export { Testimonials as SuccessStories };

