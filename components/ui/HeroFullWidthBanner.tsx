"use client";

import Image from "next/image";

interface HeroFullWidthBannerProps {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
}

export function HeroFullWidthBanner({
  src,
  alt,
  priority = true,
  objectPosition = "object-[72%_25%] md:object-[72%_22%] lg:object-[78%_35%] xl:object-[75%_35%]",
}: HeroFullWidthBannerProps) {
  return (
    <div className="pointer-events-none relative h-[250px] w-full shrink-0 overflow-hidden min-[420px]:h-[280px] sm:h-[340px] md:h-[400px] lg:absolute lg:inset-0 lg:h-auto">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={95}
        sizes="100vw"
        className={`origin-[72%_26%] scale-[1.38] object-cover sm:scale-[1.18] md:scale-[1.08] lg:origin-[15%_35%] lg:scale-[1.12] ${objectPosition}`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 lg:hidden"
        style={{
          background: "linear-gradient(to top, var(--pink), transparent)",
        }}
      />
    </div>
  );
}

export function HeroMobileBanner(_props: HeroFullWidthBannerProps) {
  return null;
}
