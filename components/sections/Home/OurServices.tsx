"use client";

import type { ReactNode } from "react";
import {
  FaFacebookF,
  FaFlask,
  FaInstagram,
  FaPlus,
  FaSyringe,
  FaVideo,
  FaYoutube,
} from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import siteData from "@/data/site.json";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const SERVICE_ICONS: Record<string, ReactNode> = {
  ivf: <FaFlask className="size-[17px]" />,
  iui: <FaSyringe className="size-[17px]" />,
  "follicular-ultrasound": <MdMonitor className="size-[19px]" />,
};

export default function OurServices({
  showBreadcrumb = false,
}: {
  showBreadcrumb?: boolean;
}) {
  const { eyebrow, titlePrefix, titleLocations, description, cta, items } =
    siteData.ourServices;

  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12"
    >
      <div className="page-container">
        {showBreadcrumb ? (
          <Breadcrumb
            items={[
              { label: "Treatments", href: "/our-services" },
              { label: "All Services Hub" },
            ]}
          />
        ) : null}

        <Reveal>
          <div className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {eyebrow}
            </p>

            <h2 className="font-serif mt-2 text-[1.75rem] leading-[1.18] font-bold tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.6rem]">
              {titlePrefix}{" "}
              <span className="text-rose">
                {titleLocations.join(" | ")}
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[14.5px]">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 sm:mt-6">
              <a
                href={cta.href}
                className="inline-flex items-center rounded-full border-[1.5px] border-ink bg-white px-5 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-ink transition-colors hover:bg-ink hover:text-white sm:px-6 sm:text-[13px]"
              >
                {cta.label}
              </a>

              <a
                href="https://www.youtube.com/@drmonadahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-wrap items-center gap-2.5 rounded-full border-[1.5px] border-ink bg-white px-3.5 py-1.5 shadow-xs transition-transform hover:-translate-y-0.5 sm:px-4 sm:py-2"
              >
                <FaVideo className="size-[18px] shrink-0 text-rose sm:size-[20px]" />
                <span className="font-serif text-[14px] font-bold text-ink sm:text-[16px]">
                  Video Insights by
                </span>
                <span className="rounded-full bg-rose px-3.5 py-1 font-serif text-[13.5px] font-bold text-white sm:text-[15px]">
                  Dr. Mona Dahiya
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.05}
        >
          {items.map((item) => {
            const icon = SERVICE_ICONS[item.id] ?? (
              <FaPlus className="size-[16px]" />
            );

            return (
              <StaggerItem key={item.id} variant="fadeUp" className="h-full">
                <article className="group flex h-full flex-col justify-between rounded-[18px] border-[1.5px] border-rose/80 bg-white p-5 shadow-[0_6px_20px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose hover:shadow-[0_14px_30px_rgba(232,62,116,0.14)] sm:p-6">
                  <div>
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#fde2ec] bg-pink text-rose transition-transform duration-300 group-hover:scale-105">
                        {icon}
                      </span>

                      <h3 className="font-serif text-[16px] leading-snug font-bold tracking-tight text-ink sm:text-[17.5px]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3.5 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="mb-4 h-px w-full bg-[#fde2ec]" />

                    <div className="flex items-center justify-between px-1">
                      <a
                        href={item.videoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${item.title} on YouTube`}
                        className="flex size-11 items-center justify-center rounded-full border border-[#fde2ec] bg-white text-rose transition-colors hover:border-rose hover:bg-rose hover:text-white"
                      >
                        <FaYoutube className="size-[20px]" />
                      </a>

                      <a
                        href={item.instagramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${item.title} on Instagram`}
                        className="flex size-11 items-center justify-center rounded-full border border-[#fde2ec] bg-white text-rose transition-colors hover:border-rose hover:bg-rose hover:text-white"
                      >
                        <FaInstagram className="size-[19px]" />
                      </a>

                      <a
                        href={item.facebookHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${item.title} on Facebook`}
                        className="flex size-11 items-center justify-center rounded-full border border-[#fde2ec] bg-white text-blue transition-colors hover:border-blue hover:bg-blue hover:text-white"
                      >
                        <FaFacebookF className="size-[18px]" />
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
