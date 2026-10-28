"use client";

import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaUser,
  FaIdBadge,
  FaMapMarkerAlt,
  FaStethoscope,
  FaBuilding,
  FaBookOpen,
  FaShieldAlt,
  FaClock,
  FaChevronRight,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaInfoCircle,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "./Reveal";

function NewBadge() {
  return (
    <span className="ml-1.5 inline-flex rounded bg-[#f5c542] px-1.5 py-[1px] text-[9px] font-bold tracking-wide text-[#3b2f00] uppercase">
      New
    </span>
  );
}

function FooterLink({
  href,
  children,
  isNew,
}: {
  href: string;
  children: ReactNode;
  isNew?: boolean;
}) {
  return (
    <a
      href={href}
      className="group flex items-start gap-1 text-[12.5px] leading-snug text-white/80 transition hover:text-[#f9a8c0]"
    >
      <span className="min-w-0 flex-1">
        {children}
        {isNew ? <NewBadge /> : null}
      </span>
      <FaChevronRight className="mt-1 size-2.5 shrink-0 text-white/35 transition group-hover:text-[#f9a8c0]" />
    </a>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <Icon className="size-3.5 text-[#f48fb1]" />
      <h3 className="text-[11px] font-bold tracking-[0.14em] text-[#f48fb1] uppercase">
        {children}
      </h3>
    </div>
  );
}

function SubLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-[10px] font-semibold tracking-[0.12em] text-white/45 uppercase">
      {children}
    </p>
  );
}

const contactIconMap = {
  phone: FaPhoneAlt,
  mail: FaEnvelope,
  whatsapp: FaWhatsapp,
  user: FaUser,
  badge: FaIdBadge,
} as const;

const socialIconMap = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
} as const;

export default function Footer() {
  const data = siteData.footer;

  return (
    <footer className="relative overflow-hidden bg-[#0c241f] text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] opacity-[0.22]">
        <Image
          src={data.image}
          alt=""
          fill
          sizes="40vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0c241f]/40 to-[#0c241f]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-3 pt-7 pb-7 sm:px-4 sm:pt-8 lg:pr-8 lg:pl-3 lg:pt-9 xl:pl-4">
        <Stagger
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6"
          stagger={0.08}
        >
          <StaggerItem className="lg:col-span-3">
            <div>
              <p className="font-serif text-[1.25rem] font-bold text-white">
                {data.brand.name}
              </p>
              <p className="mt-0.5 text-[12px] text-white/70">
                {data.brand.tagline}
              </p>
            </div>

            <p className="mt-4 text-[12.5px] leading-relaxed text-white/70">
              {data.brand.description}
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              {data.social.map((item) => {
                const Icon =
                  socialIconMap[item.id as keyof typeof socialIconMap] ||
                  FaInstagram;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-[#f48fb1] hover:text-[#f48fb1]"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <SectionTitle icon={FaPhoneAlt}>
                {data.helplineTitle}
              </SectionTitle>
              <div className="space-y-3">
                {data.contactBox.map((item) => {
                  const Icon =
                    contactIconMap[item.icon as keyof typeof contactIconMap] ||
                    FaPhoneAlt;
                  const text = item.value
                    ? `${item.label}: ${item.value}`
                    : item.label;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="flex items-start gap-2.5 transition hover:opacity-90"
                    >
                      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e83e74]/15 text-[#f48fb1]">
                        <Icon className="size-3" />
                      </span>
                      <span className="min-w-0 text-[12px] leading-snug text-white/85">
                        {text}
                        {"isNew" in item && item.isNew ? <NewBadge /> : null}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="border-white/10 lg:col-span-2 lg:border-l lg:pl-5">
            <SectionTitle icon={FaMapMarkerAlt}>
              {data.noidaClinic.title}
            </SectionTitle>
            <SubLabel>{data.noidaClinic.subtitle}</SubLabel>
            <p className="text-[13px] font-semibold text-white">
              {data.noidaClinic.hub}
            </p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-white/65">
              {data.noidaClinic.address}
            </p>

            <div className="mt-6">
              <SectionTitle icon={FaStethoscope}>
                {data.noidaTreatmentsTitle}
              </SectionTitle>
              <ul className="space-y-2">
                {data.noidaTreatments.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem className="border-white/10 lg:col-span-3 lg:border-l lg:pl-5">
            <SectionTitle icon={FaBuilding}>
              {data.delhiGhaziabad.title}
            </SectionTitle>
            <SubLabel>{data.delhiGhaziabad.subtitle}</SubLabel>
            <div className="space-y-4">
              {data.delhiGhaziabad.centers.map((center) => (
                <div key={center.name}>
                  <p className="text-[13px] font-semibold text-white">
                    {center.name}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/65">
                    {center.address}
                  </p>
                  <div className="mt-1.5">
                    <FooterLink href={center.href}>{center.linkLabel}</FooterLink>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <SectionTitle icon={FaBuilding}>{data.directoryTitle}</SectionTitle>
              <ul className="space-y-2">
                {data.directory.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2.5">
              <FaClock className="size-3.5 shrink-0 text-[#f48fb1]" />
              <p className="text-[11.5px] leading-snug text-white/80">
                {data.clinicHours}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="border-white/10 lg:col-span-2 lg:border-l lg:pl-5">
            <SectionTitle icon={FaBookOpen}>{data.guidesTitle}</SectionTitle>
            <SubLabel>{data.educationalHub.title}</SubLabel>
            <ul className="mb-5 space-y-2.5">
              {data.educationalHub.items.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
            <SubLabel>{data.highIntentGuides.title}</SubLabel>
            <ul className="space-y-2.5">
              {data.highIntentGuides.items.map((item) => (
                <li key={item.label}>
                  <FooterLink
                    href={item.href}
                    isNew={"isNew" in item ? Boolean(item.isNew) : false}
                  >
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="border-white/10 lg:col-span-2 lg:border-l lg:pl-5">
            <SectionTitle icon={FaShieldAlt}>{data.trustTitle}</SectionTitle>
            <SubLabel>{data.trust.subtitle}</SubLabel>
            <ul className="space-y-2.5">
              {data.trust.items.map((item) => (
                <li key={item.label}>
                  <FooterLink
                    href={item.href}
                    isNew={"isNew" in item ? Boolean(item.isNew) : false}
                  >
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>

        <div className="relative mt-10 space-y-4 border-t border-white/15 pt-5">
          <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-white/60">
            <FaInfoCircle className="mt-0.5 size-3.5 shrink-0 text-[#f48fb1]" />
            <span>{data.disclaimer}</span>
          </p>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-[12px] text-white/75">
              {data.bottomLinks.map((item, index) => (
                <span key={item.label} className="inline-flex items-center gap-4">
                  {index > 0 ? (
                    <span className="text-white/30" aria-hidden>
                      |
                    </span>
                  ) : null}
                  <a href={item.href} className="transition hover:text-[#f9a8c0]">
                    {item.label}
                  </a>
                </span>
              ))}
            </div>
            <p className="text-[12px] text-white/70">{data.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
