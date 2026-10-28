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
  FaFacebookF,
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
  facebook: FaFacebookF,
} as const;

export default function Footer() {
  const data = siteData.footer;

  return (
    <footer className="relative overflow-hidden bg-[#0c241f] text-white">
      {/* Soft mother-baby image on right — no Book Consultation CTA */}
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
          {/* Col 1 — Brand + contact */}
          <StaggerItem className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-[#e83e74]/15 text-[#f48fb1] ring-1 ring-[#e83e74]/35">
                <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
                  <path d="M12 21c-4.2-3.3-7-6.2-7-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 3.6c0 3.2-2.8 6.1-7 9.4Z" opacity="0.9" />
                  <circle cx="12" cy="11.2" r="2.1" fill="#0c241f" />
                </svg>
              </span>
              <div>
                <p className="font-display text-[1.15rem] font-bold text-white">
                  {data.brand.name}
                </p>
                <p className="text-[11.5px] text-white/65">{data.brand.tagline}</p>
              </div>
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
                    className="flex size-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-[#f48fb1] hover:text-[#f48fb1]"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-5 space-y-3 rounded-2xl border border-white/15 bg-white/[0.03] p-3.5">
              {data.contactBox.map((item) => {
                const Icon =
                  contactIconMap[item.icon as keyof typeof contactIconMap] ||
                  FaPhoneAlt;
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
                      {item.value}
                      {"isNew" in item && item.isNew ? <NewBadge /> : null}
                    </span>
                  </a>
                );
              })}
            </div>
          </StaggerItem>

          {/* Col 2 — Noida */}
          <StaggerItem className="border-white/10 lg:col-span-2 lg:border-l lg:pl-5">
            <SectionTitle icon={FaMapMarkerAlt}>
              {data.noidaClinic.title}
            </SectionTitle>
            <p className="text-[13px] font-semibold text-white">
              {data.noidaClinic.hub}
            </p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-white/65">
              {data.noidaClinic.address}
            </p>

            <div className="mt-6">
              <SectionTitle icon={FaStethoscope}>
                Noida Specific Treatments
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

          {/* Col 3 — Delhi / Ghaziabad */}
          <StaggerItem className="border-white/10 lg:col-span-3 lg:border-l lg:pl-5">
            <SectionTitle icon={FaBuilding}>
              {data.delhiGhaziabad.title}
            </SectionTitle>
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
              <SectionTitle icon={FaBuilding}>Directory</SectionTitle>
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

          {/* Col 4 — Guides */}
          <StaggerItem className="border-white/10 lg:col-span-2 lg:border-l lg:pl-5">
            <SectionTitle icon={FaBookOpen}>
              Patient Guides & Articles
            </SectionTitle>
            <ul className="space-y-2.5">
              {data.guides.map((item) => (
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

          {/* Col 5 — Trust (Book Consultation CTA intentionally omitted) */}
          <StaggerItem className="border-white/10 lg:col-span-2 lg:border-l lg:pl-5">
            <SectionTitle icon={FaShieldAlt}>Trust & Compliance</SectionTitle>
            <ul className="space-y-2.5">
              {data.trust.map((item) => (
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

        {/* Bottom bar */}
        <div className="relative mt-12 border-t border-white/15 pt-6">
          <span
            aria-hidden
            className="absolute -top-2.5 left-1/2 flex size-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#0c241f] text-[#f48fb1]"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
              <path d="M8 2.2c.6 1.2 1.6 2 2.8 2.2-1.2.2-2.2 1-2.8 2.2-.6-1.2-1.6-2-2.8-2.2C6.4 4.2 7.4 3.4 8 2.2Zm0 5.2c.5 1 1.3 1.7 2.3 1.9-1 .2-1.8.9-2.3 1.9-.5-1-1.3-1.7-2.3-1.9 1-.2 1.8-.9 2.3-1.9Z" />
            </svg>
          </span>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-[12px] text-white/70">{data.copyright}</p>
            <p className="max-w-xl text-[11.5px] leading-relaxed text-white/55 sm:text-right">
              {data.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
