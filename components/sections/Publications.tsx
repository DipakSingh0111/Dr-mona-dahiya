"use client";

import { useState } from "react";
import Image from "next/image";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type TabId = "publications" | "member" | "speaker" | "awards";

function LogoCard({ logo, caption }: { logo: string; caption: string }) {
  return (
    <article className="flex h-full flex-col gap-3">
      <div className="flex min-h-[112px] items-center justify-center rounded-2xl border border-[#f5c9d6]/60 bg-white px-5 py-4 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:min-h-[128px]">
        <div className="relative h-14 w-full sm:h-16">
          <Image
            src={logo}
            alt={caption}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, 220px"
          />
        </div>
      </div>
      <p className="text-[12.5px] leading-snug text-[#5a3a45]/75 sm:text-[13.5px]">
        {caption}
      </p>
    </article>
  );
}

function AwardCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <article className="flex h-full flex-col gap-2.5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#f5c9d6]/50 bg-white/60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 240px"
        />
      </div>
      <div>
        <p className="text-[13px] leading-snug font-bold text-[#0f2438] sm:text-[13.5px]">
          {title}
        </p>
        <p className="mt-1 text-[12px] leading-snug text-[#5a3a45]/70 sm:text-[12.5px]">
          {subtitle}
        </p>
      </div>
    </article>
  );
}

function StatCard({
  value,
  label,
  description,
  compact = false,
}: {
  value: string;
  label: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl bg-[#3b2d2d] px-5 py-5 sm:px-6 sm:py-6 ${
        compact ? "justify-start" : "h-fit justify-center"
      }`}
    >
      <p
        className={`font-serif leading-none font-bold ${
          compact
            ? "text-[2.75rem] text-[#c4a090] sm:text-[3.25rem]"
            : "text-[2.35rem] text-[#e8838f] sm:text-[2.85rem]"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-3.5 font-serif font-bold text-white ${
          compact
            ? "text-[1.2rem] sm:text-[1.35rem]"
            : "text-[1.25rem] sm:text-[1.45rem]"
        }`}
      >
        {label}
      </p>
      <p className="mt-3 text-[12.5px] leading-relaxed text-white/70 sm:text-[13.5px]">
        {description}
      </p>
    </article>
  );
}

export default function Publications() {
  const data = siteData.publications;
  const [activeTab, setActiveTab] = useState<TabId>("publications");

  return (
    <section
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8"
      style={{
        background:
          "linear-gradient(90deg, #fff8fb 0%, #fff0f5 42%, #ffe4ee 78%, #ffdce8 100%)",
      }}
    >
      {/* Soft pink depth on the right — matches reference wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[55%] max-w-[720px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 85% 45%, rgba(255,180,210,0.35) 0%, rgba(255,214,230,0.18) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <Reveal>
          <header className="mb-7 max-w-none sm:mb-8">
            <p className="text-[13px] font-semibold text-[#e83e74] sm:text-[14px]">
              {data.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-[1.65rem] leading-tight font-bold tracking-tight text-[#0f2438] sm:text-[2.1rem] lg:whitespace-nowrap lg:text-[2.25rem] xl:text-[2.75rem]">
              {data.title}
            </h2>
            <p className="mt-3 max-w-none text-[13.5px] leading-relaxed text-[#5a3a45]/75 sm:text-[14.5px] lg:whitespace-nowrap xl:text-[15px]">
              {data.subtitle}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mb-7 flex flex-wrap gap-2.5 sm:mb-8 sm:gap-3">
            {data.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as TabId)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors sm:text-[14px] ${
                    isActive
                      ? "bg-[#e83e74] text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)]"
                      : "border border-[#e83e74]/30 bg-white/70 text-[#0f2438] hover:border-[#e83e74]/55 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {activeTab === "publications" ? (
          <Stagger
            key="publications"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            stagger={0.08}
          >
            <StaggerItem variant="scaleIn">
              <StatCard
                value={data.publications.stat.value}
                label={data.publications.stat.label}
                description={data.publications.stat.description}
              />
            </StaggerItem>
            {data.publications.items.map((item) => (
              <StaggerItem key={item.id} variant="scaleIn">
                <LogoCard logo={item.logo} caption={item.caption} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}

        {activeTab === "member" ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.85fr_2.15fr] lg:gap-5">
            <Reveal variant="slideLeft">
              <StatCard
                value={data.member.stat.value}
                label={data.member.stat.label}
                description={data.member.stat.description}
              />
            </Reveal>
            <Stagger
              key="member"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              stagger={0.06}
            >
              {data.member.items.map((item) => (
                <StaggerItem key={item.id} variant="scaleIn">
                  <LogoCard logo={item.logo} caption={item.caption} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ) : null}

        {activeTab === "speaker" ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_2.1fr] lg:gap-5">
            <Reveal variant="slideLeft">
              <StatCard
                value={data.speaker.stat.value}
                label={data.speaker.stat.label}
                description={data.speaker.stat.description}
              />
            </Reveal>
            <Stagger
              key="speaker"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.06}
            >
              {data.speaker.items.map((item) => (
                <StaggerItem key={item.id} variant="scaleIn">
                  <LogoCard logo={item.logo} caption={item.caption} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ) : null}

        {activeTab === "awards" ? (
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[0.85fr_3.15fr] lg:gap-5">
            <Reveal variant="slideLeft" className="self-start">
              <StatCard
                compact
                value={data.awards.stat.value}
                label={data.awards.stat.label}
                description={data.awards.stat.description}
              />
            </Reveal>
            <div className="space-y-5">
              <Stagger
                key="awards"
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
                stagger={0.06}
              >
                {data.awards.items.map((item) => (
                  <StaggerItem key={item.id} variant="scaleIn">
                    <AwardCard
                      image={item.image}
                      title={item.title}
                      subtitle={item.subtitle}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
              {data.awards.cta ? (
                <Reveal delay={0.1}>
                  <a
                    href={data.awards.cta.href}
                    className="inline-flex text-[14px] font-semibold text-[#e83e74] underline decoration-[#e83e74]/45 underline-offset-4 transition hover:text-[#c54866] hover:decoration-[#c54866]"
                  >
                    {data.awards.cta.label}
                  </a>
                </Reveal>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
