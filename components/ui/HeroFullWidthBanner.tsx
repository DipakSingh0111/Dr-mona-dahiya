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
  objectPosition = "object-[72%_25%] md:object-[72%_22%] lg:object-[82%_42%] xl:object-[80%_42%] 2xl:object-[76%_40%]",
}: HeroFullWidthBannerProps) {
  return (
    <div className="hero-fullwidth-banner pointer-events-none relative h-[250px] w-full shrink-0 overflow-hidden min-[420px]:h-[280px] sm:h-[340px] md:h-[400px] lg:absolute lg:inset-0 lg:h-auto">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={100}
        unoptimized
        sizes="100vw"
        className={`origin-[72%_26%] scale-[1.35] object-cover sm:scale-[1.15] md:scale-[1.05] lg:origin-center lg:scale-100 ${objectPosition}`}
      />

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
