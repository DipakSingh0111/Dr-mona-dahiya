"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import siteData from "@/data/site.json";
import StatsCards from "./StatsCards";
import { CalendarIcon, PlayIcon } from "./Icons";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { HeroReveal } from "./Reveal";

export default function HeroSection() {
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

  // All 3 slides use cover with object-[50%_0%] so top logos (TIMES / IVF) never get clipped
  const slidePositions = [
    "object-[55%_0%] lg:object-[55%_0%]", // HeroBanner.jpeg (Award stage)
    "object-[60%_0%] lg:object-[55%_0%]", // HeroBanner_02.png (Royal blue portrait matching slide 1)
    "object-[60%_0%] lg:object-[55%_0%]", // HeroBanner_03.png (IVF Summit Award stage)
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
      {/* Banner starts below topbar+navbar with ultra smooth crossfade */}
      <div className="hero-banner-frame absolute inset-0 overflow-hidden">
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
              <Image
                src={src}
                alt={`Dr. Mona Dahiya banner slide ${index + 1}`}
                fill
                priority={index === 0}
                quality={100}
                unoptimized
                className={`hero-banner-img object-cover ${slidePositions[index % slidePositions.length]}`}
                style={{
                  objectFit: "cover",
                }}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* Soft left veil for copy */}
      <div
        aria-hidden
        className="hero-veil pointer-events-none absolute inset-0 z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,40,130,0.88) 0%, rgba(0,50,160,0.55) 48%, rgba(0,55,180,0.18) 100%)",
        }}
      />

      <div className="hero-content relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-4 py-8 sm:py-10 lg:py-12 sm:px-6 lg:px-8">
        <div className="hero-copy flex w-full max-w-[520px] flex-col gap-5 xl:max-w-[560px]">
          <HeroReveal key={`eyebrow-${activeSlide}`} delay={0.05}>
            <p className="hero-eyebrow text-[11px] font-semibold tracking-[0.18em] text-white/90 uppercase sm:text-[12px] transition-all duration-500">
              {currentSlide.eyebrow || eyebrow}
            </p>
            <h1 className="hero-title mt-2.5 font-display font-bold tracking-tight text-white transition-all duration-500">
              {currentSlide.title || title}
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <div className="hero-stats w-full max-w-[440px]">
              <StatsCards stats={stats} />
            </div>
          </HeroReveal>

          <HeroReveal delay={0.32}>
            <div className="hero-ctas flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href={primaryCta.href}
                className="hero-cta inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#c54866] px-7 text-[13.5px] font-bold text-white whitespace-nowrap shadow-[0_10px_24px_rgba(197,72,102,0.35)] transition-all hover:bg-[#b03a55] sm:px-8"
              >
                <CalendarIcon className="size-4 shrink-0" />
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/55 bg-transparent px-7 text-[13.5px] font-bold text-white whitespace-nowrap transition-all hover:bg-white/10 sm:px-8"
              >
                <span className="inline-flex size-5 items-center justify-center rounded-[3px] bg-[#e50914] text-white">
                  <PlayIcon className="size-2.5 fill-white text-white" />
                </span>
                {secondaryCta.label}
              </a>
            </div>
          </HeroReveal>

          {/* Google Review Badge (matches slide design) */}
          <HeroReveal delay={0.4}>
            <div className="flex w-fit items-center gap-2 rounded-xl border border-[#fed7aa] bg-[#fffbf2] px-4 py-2 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-0.5 text-[#f59e0b]">
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
              </div>
              <span className="text-[13px] font-bold text-[#0f2438]">4.9</span>
              <span className="text-[12px] font-medium text-gray-600">
                Google patient reviews
              </span>
            </div>
          </HeroReveal>
        </div>
      </div>

      {/* Slide Navigation Dots (bottom-right, no background pill) */}
      {slides.length > 1 && (
        <div className="absolute right-5 bottom-5 z-30 flex items-center gap-2 sm:right-8 sm:bottom-6">
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
