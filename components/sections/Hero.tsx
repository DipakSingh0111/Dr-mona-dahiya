"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import siteData from "@/data/site.json";
import StatsCards from "@/components/ui/StatsCards";
import { CalendarIcon, PlayIcon } from "@/components/ui/Icons";
import { FaStar } from "react-icons/fa";
import { HeroReveal } from "@/components/ui/Reveal";

export default function Hero() {
  const {
    slides: heroSlides,
    backgroundImage,
    eyebrow,
    title,
    primaryCta,
    secondaryCta,
    stats,
  } = siteData.hero;

  const slides =
    heroSlides && heroSlides.length > 0
      ? heroSlides
      : [{ image: backgroundImage, eyebrow, title }];

  const slidePositions = [
    "object-[62%_8%] sm:object-[52%_0%] lg:object-[48%_0%]",
    "object-[70%_6%] sm:object-[65%_0%] lg:object-[60%_0%]",
    "object-[72%_4%] sm:object-[58%_0%] lg:object-[52%_0%]",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[activeSlide] || slides[0];

  return (
    <section className="hero-section relative flex w-full flex-col overflow-x-hidden bg-[#0047ca]">
      <div className="hero-banner-frame relative h-[250px] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:h-auto">
        {slides.map((slideItem, index) => {
          const isActive = index === activeSlide;
          const src = slideItem.image;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Dr. Mona Dahiya banner slide ${index + 1}`}
                fill
                priority={index === 0}
                quality={100}
                unoptimized
                className={`hero-banner-img object-cover ${slidePositions[index % slidePositions.length]}`}
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
          );
        })}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 bg-gradient-to-t from-[#003db8] to-transparent sm:hidden"
        />

        {slides.length > 1 && (
          <div className="absolute right-4 bottom-3 z-30 flex items-center gap-1.5 sm:hidden">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  activeSlide === idx
                    ? "w-6 bg-white shadow-sm"
                    : "w-1.5 bg-white/55 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div
        aria-hidden
        className="hero-veil pointer-events-none absolute inset-0 z-10 hidden sm:block"
      />

      <div className="hero-content relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 items-center bg-gradient-to-b from-[#003db8] via-[#0044c4] to-[#003399] px-4 pt-5 pb-7 sm:bg-none sm:px-6 lg:px-8">
        <div className="hero-copy flex w-full max-w-[520px] flex-col gap-6 xl:max-w-[600px] xl:gap-7">
          <HeroReveal key={`eyebrow-${activeSlide}`} delay={0.05}>
            <p className="hero-eyebrow text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase transition-all duration-500 sm:tracking-[0.16em] lg:text-[13px] xl:text-[14px] xl:tracking-[0.18em]">
              {currentSlide.eyebrow || eyebrow}
            </p>
            <h1 className="hero-title font-display font-bold tracking-tight text-white transition-all duration-500">
              {currentSlide.title || title}
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <div className="hero-stats w-full max-w-[450px] xl:max-w-[500px]">
              <StatsCards stats={stats} />
            </div>
          </HeroReveal>

          <HeroReveal delay={0.32}>
            <div className="hero-ctas grid w-full max-w-[450px] grid-cols-2 gap-5 xl:max-w-[500px] xl:gap-6">
              <a
                href={primaryCta.href}
                className="hero-cta inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#e83e74] px-3 text-[12.5px] font-bold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(232,62,116,0.35)] transition-all hover:bg-[#c53658] sm:h-14 sm:gap-2.5 sm:px-4 sm:text-[14.5px] xl:h-[3.75rem] xl:text-[15.5px]"
              >
                <CalendarIcon className="size-3.5 shrink-0 sm:size-4 xl:size-[18px]" />
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/55 bg-transparent px-3 text-[12.5px] font-bold whitespace-nowrap text-white transition-all hover:bg-white/10 sm:h-14 sm:gap-2.5 sm:px-4 sm:text-[14.5px] xl:h-[3.75rem] xl:text-[15.5px]"
              >
                <span className="inline-flex h-[14px] w-[20px] shrink-0 items-center justify-center rounded-[4px] bg-[#e50914] text-white sm:h-4 sm:w-[22px] xl:h-[18px] xl:w-6">
                  <PlayIcon className="ml-0.5 size-2 fill-white text-white sm:size-2.5 xl:size-[11px]" />
                </span>
                {secondaryCta.label}
              </a>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.4}>
            <div className="hero-review-badge flex w-fit items-center gap-2.5 rounded-full border border-[#fed7aa] bg-[#fffbf2] px-5 py-2.5 whitespace-nowrap shadow-sm backdrop-blur-md xl:px-5.5 xl:py-3">
              <div className="flex items-center gap-0.5 text-[#f59e0b]">
                <FaStar className="size-3.5 fill-current xl:size-4" />
                <FaStar className="size-3.5 fill-current xl:size-4" />
                <FaStar className="size-3.5 fill-current xl:size-4" />
                <FaStar className="size-3.5 fill-current xl:size-4" />
                <FaStar className="size-3.5 fill-current xl:size-4" />
              </div>
              <span className="text-[14px] font-bold text-[#0f2438] xl:text-[15px]">
                4.9
              </span>
              <span className="text-[13px] font-medium text-gray-600 xl:text-[14px]">
                Google patient reviews
              </span>
            </div>
          </HeroReveal>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute right-6 bottom-3.5 z-30 hidden items-center gap-2 sm:right-7 sm:bottom-4 sm:flex">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                activeSlide === idx
                  ? "w-7 bg-white shadow-sm"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
