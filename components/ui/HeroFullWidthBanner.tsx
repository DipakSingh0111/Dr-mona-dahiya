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
    <div className="hero-fullwidth-banner pointer-events-none relative h-[250px] w-full shrink-0 overflow-hidden min-[420px]:h-[280px] sm:h-[340px] md:h-[400px] lg:absolute lg:inset-0 lg:h-auto lg:bg-white">
      <div className="relative h-full w-full lg:absolute lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-auto lg:aspect-[3/2] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={100}
          unoptimized
          sizes="(max-width: 1023px) 100vw, 850px"
          className={`origin-[72%_26%] scale-[1.35] object-cover sm:scale-[1.15] md:scale-[1.05] lg:origin-[100%_98%] lg:scale-[1.22] lg:object-contain lg:object-right ${objectPosition}`}
        />
      </div>

      {/* Mobile bottom fade only */}
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
