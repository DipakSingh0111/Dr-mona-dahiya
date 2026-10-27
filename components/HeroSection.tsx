import Image from "next/image";
import siteData from "@/data/site.json";
import StatsCards from "./StatsCards";
import { CalendarIcon, PlayIcon } from "./Icons";

export default function HeroSection() {
  const { backgroundImage, eyebrow, title, primaryCta, secondaryCta, stats } =
    siteData.hero;

  return (
    <section className="relative flex min-h-[620px] w-full flex-col overflow-hidden bg-[#0051e4] sm:min-h-[660px] lg:min-h-[700px] xl:min-h-[740px]">
      {/* Full-width BlueStage awards image shifted cleanly to the right side */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full translate-x-[6%] sm:translate-x-[8%] lg:translate-x-[10%]">
          <Image
            src={backgroundImage}
            alt="Dr. Mona Dahiya — Fertility & IVF Specialist"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-right"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Gentle left royal blue/navy gradient to keep text readable while retaining the vibrant blue stage color */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,25,82,0.92) 0%, rgba(3,32,105,0.85) 30%, rgba(0,55,185,0.52) 48%, rgba(0,75,225,0.1) 64%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,25,82,0.92) 0%, rgba(3,32,105,0.75) 45%, rgba(0,60,200,0.2) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-4 pt-[7.25rem] pb-12 sm:px-6 sm:pt-[8rem] sm:pb-14 lg:px-8 lg:pt-[8.5rem] lg:pb-16">
        <div className="hero-copy flex w-full max-w-[540px] flex-col">
          <p className="hero-fade-up text-[11px] font-semibold tracking-[0.18em] text-white/90 uppercase sm:text-[12px]">
            {eyebrow}
          </p>

          <h1 className="hero-fade-up font-display mt-2.5 text-[3rem] leading-[1.05] font-bold tracking-tight text-white sm:text-[3.8rem] lg:text-[4.2rem]">
            {title}
          </h1>

          <div className="hero-fade-up mt-7 w-full max-w-[460px] sm:mt-8">
            <StatsCards stats={stats} />
          </div>

          <div className="hero-fade-up mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#c54866] px-8 text-[13.5px] font-bold text-white whitespace-nowrap shadow-md transition-all hover:bg-[#b03a55]"
            >
              <CalendarIcon className="size-4 shrink-0" />
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/60 bg-transparent px-8 text-[13.5px] font-bold text-white whitespace-nowrap transition-all hover:bg-white/10"
            >
              <span className="inline-flex size-5 items-center justify-center rounded-[3px] bg-[#e50914] text-white">
                <PlayIcon className="size-2.5 fill-white text-white" />
              </span>
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
