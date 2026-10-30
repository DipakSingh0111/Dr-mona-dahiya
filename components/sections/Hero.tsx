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

  // On mobile: center the subjects in the top banner frame
  // On desktop (sm+): full banner framing (object-[55%_0%])
  const slidePositions = [
    "object-[74%_0%] sm:object-[55%_0%] lg:object-[55%_0%]", // HeroBanner.jpeg (Award stage)
    "object-[58%_0%] sm:object-[60%_0%] lg:object-[55%_0%]", // HeroBanner_02.png (Royal blue portrait)
    "object-[76%_0%] sm:object-[60%_0%] lg:object-[55%_0%]", // HeroBanner_03.png (IVF Summit Award stage)
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
    <section className="hero-section relative flex w-full flex-col overflow-hidden bg-[#0047ca]">
      {/* Top on mobile (unobstructed image slider), full-bleed background on sm+ */}
      <div className="hero-banner-frame relative h-[250px] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:h-auto">
        {slides.map((slideItem, index) => {
          const isActive = index === activeSlide;
          const src = slideItem.image;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Desktop & regular slides */}
              <Image
                src={src}
                alt={`Dr. Mona Dahiya banner slide ${index + 1}`}
                fill
                priority={index === 0}
                quality={100}
                unoptimized
                className={`hero-banner-img object-cover ${
                  index === 1 ? "hidden sm:block" : ""
                } ${slidePositions[index % slidePositions.length]}`}
                style={{
                  objectFit: "cover",
                }}
                sizes="100vw"
              />

              {/* Mobile-centered composition for Slide 2 (Royal blue waves + Dr. Mona centered) */}
              {index === 1 && (
                <div className="relative flex size-full items-end justify-center overflow-hidden bg-gradient-to-b from-[#002f96] via-[#003db8] to-[#0047ca] sm:hidden">
                  <Image
                    src={src}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-[12%_100%] opacity-95"
                    sizes="100vw"
                  />
                  <div className="relative z-10 flex h-[94%] w-full items-end justify-center">
                    <Image
                      src="/images/why-choose/doctor-cutout.png"
                      alt="Dr. Mona Dahiya"
                      width={260}
                      height={320}
                      unoptimized
                      className="h-full w-auto object-contain object-bottom"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Subtle bottom fade on mobile */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 bg-gradient-to-t from-[#003db8] to-transparent sm:hidden"
        />

        {/* Mobile Slide Dots inside the top image slider */}
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

      {/* Soft left veil for copy on tablet/desktop */}
      <div
        aria-hidden
        className="hero-veil pointer-events-none absolute inset-0 z-10 hidden sm:block"
      />

      {/* Below image slider on mobile, overlaid on left on sm+ */}
      <div className="hero-content relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 items-center bg-gradient-to-b from-[#003db8] via-[#0044c4] to-[#003399] px-4 pt-5 pb-7 sm:bg-none sm:px-6 sm:py-8 lg:px-8 lg:py-8 xl:py-12">
        <div className="hero-copy flex w-full max-w-[460px] flex-col gap-3 lg:gap-3.5 xl:max-w-[560px] xl:gap-5">
          <HeroReveal key={`eyebrow-${activeSlide}`} delay={0.05}>
            <p className="hero-eyebrow text-[10.5px] font-semibold tracking-[0.14em] text-white/90 uppercase sm:whitespace-nowrap sm:tracking-[0.16em] lg:text-[11px] xl:text-[12px] xl:tracking-[0.18em] transition-all duration-500">
              {currentSlide.eyebrow || eyebrow}
            </p>
            <h1 className="hero-title mt-1.5 font-display font-bold tracking-tight text-white transition-all duration-500 xl:mt-2.5">
              {currentSlide.title || title}
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <div className="hero-stats w-full max-w-[380px] xl:max-w-[440px]">
              <StatsCards stats={stats} />
            </div>
          </HeroReveal>

          <HeroReveal delay={0.32}>
            <div className="hero-ctas flex flex-col gap-2.5 sm:flex-row sm:flex-nowrap sm:items-center sm:gap-3 xl:gap-3.5">
              <a
                href={primaryCta.href}
                className="hero-cta inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#c54866] px-5 text-[12px] font-bold text-white whitespace-nowrap shadow-[0_10px_24px_rgba(197,72,102,0.35)] transition-all hover:bg-[#b03a55] xl:h-12 xl:gap-2.5 xl:px-8 xl:text-[13.5px]"
              >
                <CalendarIcon className="size-3.5 shrink-0 xl:size-4" />
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-white/55 bg-transparent px-5 text-[12px] font-bold text-white whitespace-nowrap transition-all hover:bg-white/10 xl:h-12 xl:gap-2.5 xl:px-8 xl:text-[13.5px]"
              >
                <span className="inline-flex size-4.5 shrink-0 items-center justify-center rounded-[3px] bg-[#e50914] text-white xl:size-5">
                  <PlayIcon className="size-2 fill-white text-white xl:size-2.5" />
                </span>
                {secondaryCta.label}
              </a>
            </div>
          </HeroReveal>

          {/* Google Review Badge */}
          <HeroReveal delay={0.4}>
            <div className="hero-review-badge flex w-fit items-center gap-2 rounded-xl border border-[#fed7aa] bg-[#fffbf2] px-3.5 py-1.5 whitespace-nowrap shadow-sm backdrop-blur-md xl:px-4 xl:py-2">
              <div className="flex items-center gap-0.5 text-[#f59e0b]">
                <FaStar className="size-3 fill-current xl:size-3.5" />
                <FaStar className="size-3 fill-current xl:size-3.5" />
                <FaStar className="size-3 fill-current xl:size-3.5" />
                <FaStar className="size-3 fill-current xl:size-3.5" />
                <FaStar className="size-3 fill-current xl:size-3.5" />
              </div>
              <span className="text-[12px] font-bold text-[#0f2438] xl:text-[13px]">4.9</span>
              <span className="text-[11px] font-medium text-gray-600 xl:text-[12px]">
                Google patient reviews
              </span>
            </div>
          </HeroReveal>
        </div>
      </div>

      {/* Slide Navigation Dots (desktop/tablet bottom-right) */}
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

