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
  /** Short brand shown inside white card when no logo file */
  brand?: string;
  caption: string;
};

const educationCards: QualCard[] = [
  {
    badge: "MBBS",
    title: "MBBS (Gold Medalist)",
    institution: "Lady Hardinge Medical College, University of Delhi",
  },
  {
    badge: "MD",
    title: "MD, Obstetrics & Gynaecology (Gold Medalist)",
    institution: "Maulana Azad Medical College, University of Delhi",
  },
  {
    badge: "DNB",
    title: "DNB (Diplomate of National Board)",
    institution: "National Board of Examinations, India",
  },
  {
    badge: "ART",
    title: "Fellowship in Reproductive Medicine & IVF",
    institution: "Singapore General Hospital, Singapore",
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
    caption: "Milann Fertility",
  },
  {
    id: "nova",
    brand: "NOVA IVF",
    caption: "NOVA IVF Fertility Centre",
  },
  {
    id: "mamc",
    brand: "MAMC",
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
          "linear-gradient(160deg, #4a2a32 0%, #3b2d2d 45%, #2f2428 100%)",
      }}
    >
      <p className="font-serif text-[2.6rem] leading-none font-bold text-[#e8838f] sm:text-[3.1rem]">
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
    <article className="flex h-full items-start gap-3.5 rounded-[20px] border border-white/12 bg-white/[0.06] p-4 transition-all duration-200 hover:border-[#60a5fa]/35 hover:bg-white/[0.09] sm:gap-4 sm:p-5">
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

function LogoCard({ logo, brand, caption }: LogoItem) {
  return (
    <article className="flex h-full flex-col gap-2.5">
      <div className="flex min-h-[100px] items-center justify-center rounded-2xl bg-white px-4 py-4 sm:min-h-[112px]">
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
          <p className="px-2 text-center text-[15px] font-bold tracking-tight text-[#0f2438] sm:text-[16px]">
            {brand || caption}
          </p>
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
    { id: "education", label: "Educational qualifications" },
    { id: "experience", label: "Clinical experience" },
    { id: "publications", label: "Publications" },
    { id: "member", label: "Member" },
    { id: "speaker", label: "Speaker" },
    { id: "awards", label: "Awards & events" },
  ];

  return (
    <section
      id="credentials"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8"
      style={{
        background:
          "linear-gradient(165deg, #061e52 0%, #0a2a6e 42%, #082458 72%, #051a45 100%)",
      }}
    >
      {/* Soft depth accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,71,202,0.28) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12%] left-[-6%] h-[380px] w-[380px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal>
          <header className="mb-7 sm:mb-8">
            <p className="text-[13px] font-semibold text-[#e8838f] sm:text-[14px]">
              Credentials
            </p>
            <h2 className="mt-2 font-serif text-[1.65rem] leading-tight font-bold tracking-tight text-white sm:text-[2.1rem] lg:text-[2.35rem]">
              Qualifications, experience & recognition
            </h2>
            <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/65 sm:text-[14.5px]">
              Education, clinical experience, research, memberships and awards
              from 25+ years in reproductive medicine.
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
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-[12.5px] font-semibold transition-colors sm:px-5 sm:text-[14px] ${
                    isActive
                      ? "bg-[#e83e74] text-white shadow-[0_8px_22px_rgba(232,62,116,0.45)]"
                      : "border border-white/25 bg-transparent text-white/85 hover:border-white/45 hover:text-white"
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
                value="2× Gold"
                label="Educational qualifications"
                description="Gold medals in both MBBS and MD, national board certification, and sub-specialty IVF training in Singapore."
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
                value={pubData.publications.stat.value}
                label={pubData.publications.stat.label}
                description={pubData.publications.stat.description}
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
