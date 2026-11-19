"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export interface VideoInsightsSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  videoHref?: string;
  instagramHref?: string;
}

export default function VideoInsightsSection({
  title,
  imageSrc,
  imageAlt,
  videoHref = "https://www.youtube.com/@drmonadahiya",
  instagramHref = "https://www.instagram.com/drmonadahiya/",
}: VideoInsightsSectionProps) {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <Reveal variant="slideLeft">
            <div>
              <p className="font-semibold tracking-wide text-rose">
                Video Insights
              </p>
              <h2 className="mt-2 max-w-md tracking-tight text-ink">
                {title}
              </h2>
            </div>
          </Reveal>

          <Reveal variant="slideRight" delay={0.06}>
            <div className="mx-auto w-full max-w-[600px] lg:mr-0 lg:ml-auto">
              <a
                href={videoHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} — Watch video`}
                className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_14px_38px_rgba(15,36,56,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-[0_20px_48px_rgba(232,62,116,0.16)]"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>

              <p className="mt-2.5 text-[11.5px] text-ink/70 sm:text-[12px]">
                Also watch on{" "}
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink/85 underline-offset-2 hover:text-rose hover:underline"
                >
                  Instagram
                </a>{" "}
                and{" "}
                <a
                  href={videoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink/85 underline-offset-2 hover:text-rose hover:underline"
                >
                  Facebook
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
