"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface HeroBannerImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /**
   * Object position for the image. Defaults to centering toward the upper
   * body so heads stay in frame without harsh side cropping.
   */
  objectPosition?: string;
}

export default function HeroBannerImage({
  src,
  alt,
  priority = true,
  className = "",
  objectPosition = "object-top",
}: HeroBannerImageProps) {
  return (
    <Reveal
      delay={0.1}
      variant="slideRight"
      className={`relative mx-auto w-full max-w-[340px] justify-self-center sm:max-w-[400px] lg:col-span-5 lg:mx-0 lg:max-w-[450px] lg:justify-self-end xl:max-w-[480px] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-60 blur-xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.28) 0%, rgba(232,62,116,0.12) 50%, transparent 75%)",
        }}
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border-4 border-white bg-[#fff8fb] shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:rounded-[28px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={95}
          sizes="(max-width: 640px) 680px, (max-width: 1024px) 800px, 960px"
          className={`object-cover ${objectPosition}`}
        />
      </div>
    </Reveal>
  );
}
