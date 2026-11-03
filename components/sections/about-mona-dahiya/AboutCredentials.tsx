"use client";

import { useState } from "react";
import Image from "next/image";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type TabId =
  | "education"
  | "experience"
  | "publications"
  | "member"
  | "speaker"
  | "awards";

type QualCard = {
  badge: string;
  title: string;
  institution: string;
};

type LogoItem = {
  id: string;
  logo?: string;
  brand?: string;
  subBrand?: string;
  brandColor?: string;
  caption: string;
};

const educationCards: QualCard[] = [
  {
    badge: "MBBS",
    title: "MBBS (Gold Medalist)",
    institution: "Lady Hardinge Medical College, University of Delhi.",
  },
  {
    badge: "MD",
    title: "MD Obs & Gynae (Gold Medalist)",
    institution: "Maulana Azad Medical College, University of Delhi.",
  },
  {
    badge: "DNB",
    title: "DNB",
    institution: "DNB from National Board of Examination.",
  },
  {
    badge: "IVF",
    title: "Fellowship in IVF",
    institution: "Singapore General Hospital.",
  },
];

const experienceItems: LogoItem[] = [
  {
    id: "apollo",
    logo: "/images/credentials/apollo-fertility.png",
    caption: "Apollo Fertility",
  },
  {
    id: "max",
    logo: "/images/credentials/max-healthcare.svg",
    caption: "Max Fertility",
  },
  {
    id: "birla",
    logo: "/images/credentials/birla-fertility.png",
    caption: "Birla Fertility & IVF",
  },
  {
    id: "milann",
    brand: "milann",
    subBrand: "THE FERTILITY CENTER",
    brandColor: "text-[#5b2c6f]",
    caption: "Milann Fertility",
  },
  {
    id: "nova",
    brand: "NOVA IVF",
    subBrand: "FERTILITY",
    brandColor: "text-[#c0392b]",
    caption: "NOVA IVF Fertility Centre",
  },
  {
    id: "mamc",
    brand: "MAMC",
    subBrand: "AGRASEN MEDICAL",
    brandColor: "text-[#1a5276]",
    caption: "Maharaja Agrasen Medical College",
  },
  {
    id: "pravi",
    logo: "/images/affiliations/icon-hospital-purple.jpg",
    caption: "Pravi Global IVF Polyclinic",
  },
  {
    id: "nayra",
    logo: "/images/affiliations/icon-hospital-pink.jpg",
    caption: "Nayra Fertility and IVF Centre",
  },
  {
    id: "echs",
    brand: "ECHS",
    subBrand: "POLYCLINIC",
    brandColor: "text-[#2e4053]",
    caption: "ECHS Clinic",
  },
  {
    id: "little-angel",
    logo: "/images/affiliations/icon-baby-heart.jpg",
    caption: "Little Angel IVF",
  },
];

function FeatureStat({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <article
      className="flex h-full flex-col justify-center rounded-[22px] px-6 py-7 text-white sm:px-7 sm:py-8"
      style={{
        background:
          "linear-gradient(160deg, #3d1b28 0%, #2f1822 45%, #231119 100%)",
      }}
    >
      <p className="font-serif text-[2.1rem] leading-[1.1] font-bold text-[#e8838f] sm:text-[2.5rem]">
        {value}
      </p>
      <p className="mt-4 font-serif text-[1.2rem] leading-snug font-bold text-white sm:text-[1.35rem]">
        {label}
      </p>
      <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
        {description}
      </p>
    </article>
  );
}

function EducationCard({ badge, title, institution }: QualCard) {
  return (
    <article className="flex h-full items-start gap-3.5 rounded-[20px] border border-white/12 bg-[#091a3c]/80 p-4.5 backdrop-blur-md transition-all duration-200 hover:border-[#60a5fa]/35 hover:bg-[#0c224e] sm:gap-4 sm:p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#0047ca] to-[#0037a3] text-[11.5px] font-bold tracking-wide text-white shadow-[0_8px_18px_rgba(0,71,202,0.35)] sm:size-12 sm:rounded-2xl sm:text-[12.5px]">
        {badge}
      </span>
      <div className="min-w-0 pt-0.5">
        <h4 className="text-[14px] leading-snug font-bold text-white sm:text-[15px]">
          {title}
        </h4>
        <p className="mt-1.5 text-[12px] leading-snug text-white/60 sm:text-[13px]">
          {institution}
        </p>
      </div>
    </article>
  );
}

function LogoCard({ logo, brand, subBrand, brandColor, caption }: LogoItem) {
  return (
    <article className="flex h-full flex-col gap-2.5">
      <div className="flex min-h-[100px] items-center justify-center rounded-2xl bg-white px-4 py-4 shadow-sm sm:min-h-[112px]">
        {logo ? (
          <div className="relative h-12 w-full sm:h-14">
            <Image
              src={logo}
              alt={caption}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 45vw, 180px"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <p
              className={`text-[17px] font-black tracking-tight ${
                brandColor || "text-[#0f2438]"
              }`}
            >
              {brand || caption}
            </p>
            {subBrand ? (
              <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">
                {subBrand}
              </span>
            ) : null}
          </div>
        )}
      </div>
      <p className="text-left text-[12px] leading-snug text-white/70 sm:text-[13px]">
        {caption}
      </p>
    </article>
  );
}

function LogoGrid({
  items,
  cols = "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}: {
  items: LogoItem[];
  cols?: string;
}) {
  return (
    <Stagger className={`grid grid-cols-2 gap-3 sm:gap-4 ${cols}`} stagger={0.05}>
      {items.map((item) => (
        <StaggerItem key={item.id} variant="scaleIn" className="h-full">
          <LogoCard {...item} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default function AboutCredentials() {
  const [activeTab, setActiveTab] = useState<TabId>("education");
  const pubData = siteData.publications;

  const tabs: { id: TabId; label: string }[] = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publication" },
    { id: "member", label: "Membership" },
    { id: "speaker", label: "Speaker" },
    { id: "awards", label: "Awards" },
  ];

  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,71,202,0.28) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12%] left-[-6%] h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal>
          <header className="mb-7 sm:mb-8">
            <p className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
              Credentials
            </p>
            <h2 className="mt-2 font-serif text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Qualifications, experience &amp; recognition
            </h2>
            <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14.5px]">
              Qualifications, Publications and Awards from more than 25 Years
              Experience.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mb-7 flex flex-wrap gap-2.5 sm:mb-8 sm:gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-[12.5px] font-semibold transition-all duration-200 cursor-pointer sm:px-5 sm:text-[13.5px] ${
                    isActive
                      ? "bg-[#0047ca] text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] ring-1 ring-white/20"
                      : "border border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {activeTab === "education" ? (
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[0.85fr_2.15fr] lg:gap-5">
            <Reveal variant="slideLeft" className="h-full">
              <FeatureStat
                value="2 Times Gold Medalist"
                label="Education"
                description="MBBS Gold Medalist, MD Gold Medalist. National Board Certified and Fellowship from Singapore."
              />
            </Reveal>
            <Stagger
              className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4"
              stagger={0.06}
            >
              {educationCards.map((card) => (
                <StaggerItem key={card.badge} variant="scaleIn" className="h-full">
                  <EducationCard {...card} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ) : null}

        {activeTab === "experience" ? (
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[0.85fr_2.15fr] lg:gap-5">
            <Reveal variant="slideLeft">
              <FeatureStat
                value="10"
                label="Senior IVF Consultant at leading IVF & fertility centres"
                description="Clinical experience across India's leading fertility chains, IVF centres, a teaching medical college and ECHS clinics."
              />
            </Reveal>
            <LogoGrid items={experienceItems} />
          </div>
        ) : null}

        {activeTab === "publications" ? (
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[0.85fr_2.15fr] lg:gap-5">
            <Reveal variant="slideLeft">
              <FeatureStat
                value="100+"
                label="Publications"
                description="Research papers in national and international journals on infertility treatment."
              />
            </Reveal>
            <LogoGrid
              items={pubData.publications.items.map((item) => ({
                id: item.id,
                logo: item.logo,
                caption: item.caption,
              }))}
              cols="sm:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        ) : null}

        {activeTab === "member" ? (
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[0.85fr_2.15fr] lg:gap-5">
            <Reveal variant="slideLeft">
              <FeatureStat
                value={pubData.member.stat.value}
                label={pubData.member.stat.label}
                description={pubData.member.stat.description}
              />
            </Reveal>
            <LogoGrid
              items={pubData.member.items.map((item) => ({
                id: item.id,
                logo: item.logo,
                caption: item.caption,
              }))}
            />
          </div>
        ) : null}

        {activeTab === "speaker" ? (
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[0.85fr_2.15fr] lg:gap-5">
            <Reveal variant="slideLeft">
              <FeatureStat
                value={pubData.speaker.stat.value}
                label={pubData.speaker.stat.label}
                description={pubData.speaker.stat.description}
              />
            </Reveal>
            <LogoGrid
              items={pubData.speaker.items.map((item) => ({
                id: item.id,
                logo: item.logo,
                caption: item.caption,
              }))}
              cols="sm:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        ) : null}

        {activeTab === "awards" ? (
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[0.85fr_2.15fr] lg:gap-5">
            <Reveal variant="slideLeft">
              <FeatureStat
                value={pubData.awards.stat.value}
                label={pubData.awards.stat.label}
                description={pubData.awards.stat.description}
              />
            </Reveal>
            <Stagger
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
              stagger={0.06}
            >
              {pubData.awards.items.slice(0, 6).map((item) => (
                <StaggerItem key={item.id} variant="scaleIn">
                  <article className="flex h-full flex-col gap-2.5">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 280px"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] leading-snug font-bold text-white sm:text-[13.5px]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[12px] leading-snug text-white/60">
                        {item.subtitle}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ) : null}
      </div>
    </section>
  );
}
