"use client";

import Image from "next/image";

interface HeroFullWidthBannerProps {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
  showDesktopGradient?: boolean;
}

export function HeroFullWidthBanner({
  src,
  alt,
  priority = true,
  objectPosition = "object-[72%_25%] md:object-[72%_22%]",
}: HeroFullWidthBannerProps) {
  return (
    <div className="hero-fullwidth-banner pointer-events-none relative h-[250px] w-full shrink-0 overflow-hidden min-[420px]:h-[280px] sm:h-[340px] md:h-[400px] lg:absolute lg:inset-0 lg:z-[2] lg:h-auto lg:bg-white">
      <div className="relative h-full w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:[mask-image:linear-gradient(to_right,transparent_0%,transparent_40%,black_55%,black_100%)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={100}
          unoptimized
          sizes="100vw"
          className={`origin-[72%_26%] scale-[1.35] object-cover sm:scale-[1.15] md:scale-[1.05] ${objectPosition} lg:origin-bottom-right lg:scale-100 lg:object-contain lg:object-right`}
        />
      </div>
    </div>
  );
}

export function HeroMobileBanner(_props: HeroFullWidthBannerProps) {
  return null;
}
