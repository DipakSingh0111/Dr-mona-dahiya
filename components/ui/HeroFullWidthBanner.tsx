"use client";

import Image from "next/image";

interface HeroFullWidthBannerProps {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
  showDesktopGradient?: boolean;
  imageClassName?: string;
}

const BANNER_SCALE_MAP: Record<string, number> = {
  "/pageBanner/M0500359.jpg": 1.089,
  "/pageBanner/M0500360.jpg": 1.067,
  "/pageBanner/M0500363.jpg": 1.066,
  "/pageBanner/M0500365.jpg": 0.982,
  "/pageBanner/M0500367.jpg": 1.041,
  "/pageBanner/M0500369.jpg": 1.016,
  "/pageBanner/M0500373.jpg": 1.03,
  "/pageBanner/M0500381.jpg": 0.976,
  "/pageBanner/M0500386.jpg": 1.103,
  "/pageBanner/M0500389_1.jpg": 1.021,
  "/pageBanner/M0500393.jpg": 1.025,
  "/pageBanner/M0500395.jpg": 1.035,
  "/pageBanner/M0500395_1.jpg": 1.079,
  "/pageBanner/M0500400.jpg": 1.07,
  "/pageBanner/M0500401.jpg": 1.004,
  "/pageBanner/M0500406.jpg": 1.098,
  "/pageBanner/M0500406_1.jpg": 1.096,
  "/pageBanner/M0500407.jpg": 1.03,
  "/pageBanner/M0500407_1.jpg": 1.03,
  "/pageBanner/M0500412.jpg": 1.142,
  "/pageBanner/M0500415.jpg": 1.118,
  "/pageBanner/M0500417.jpg": 1.081,
  "/pageBanner/M0500419.jpg": 1.132,
  "/pageBanner/M0500422.jpg": 1.093,
  "/pageBanner/M0500424.jpg": 1.071,
  "/pageBanner/M0500426.jpg": 1.088,
  "/pageBanner/M0500428.jpg": 1.062,
  "/pageBanner/M0500430.jpg": 1.062,
  "/pageBanner/M0500432.jpg": 1.047,
  "/pageBanner/M0500434.jpg": 1.088,
  "/pageBanner/M0500436.jpg": 1.087,
  "/pageBanner/M0500438.jpg": 1.111,
  "/pageBanner/M0500440.jpg": 1.092,
  "/pageBanner/M0500442.jpg": 1.09,
  "/pageBanner/M0500444.jpg": 1.14,
  "/pageBanner/M0500446.jpg": 1.113,
  "/pageBanner/M0500448.jpg": 1.102,
  "/pageBanner/M0500450.jpg": 1.101,
  "/pageBanner/M0500452.jpg": 1.097,
  "/pageBanner/M0500454.jpg": 1.1,
  "/pageBanner/M0500456.jpg": 1.18,
  "/pageBanner/M0500458.jpg": 1.138,
  "/pageBanner/M0500460.jpg": 1.118,
  "/pageBanner/M0500462.jpg": 1.107,
  "/pageBanner/M0500464.jpg": 1.135,
  "/pageBanner/M0500466.jpg": 1.099,
  "/pageBanner/M0500468.jpg": 1.146,
  "/pageBanner/M0500470.jpg": 1.097,
  "/pageBanner/M0500472.jpg": 1.08,
  "/pageBanner/M0500474.jpg": 1.082,
  "/pageBanner/M0500476.jpg": 1.065,
  "/pageBanner/M0500478.jpg": 1.09,
  "/pageBanner/M0500480.jpg": 1.133,
  "/pageBanner/M0500483.jpg": 1.079,
  "/pageBanner/M0500485.jpg": 1.05,
  "/pageBanner/M0500487.jpg": 1.114,
  "/pageBanner/M0500489.jpg": 1.083,
  "/pageBanner/M0500491.jpg": 1.076,
  "/pageBanner/M0500493.jpg": 1.14,
  "/pageBanner/M0500495.jpg": 1.1,
  "/pageBanner/M0500497.jpg": 1.126,
  "/pageBanner/M0500499.jpg": 1.094,
  "/pageBanner/M0500501.jpg": 1.127,
  "/pageBanner/M0500503.jpg": 1.13,
  "/pageBanner/M0500505.jpg": 1.089,
  "/pageBanner/M0500507.jpg": 1.082,
  "/pageBanner/M0500509.jpg": 1.1,
  "/pageBanner/M0500511.jpg": 1.123,
  "/pageBanner/M0500512.jpg": 1.071,
  "/pageBanner/M0500515.jpg": 1.077,
  "/pageBanner/M0500517.jpg": 1.086,
  "/pageBanner/M0500519.jpg": 1.104,
  "/pageBanner/M0500521.jpg": 1.11,
  "/pageBanner/M0500523.jpg": 1.1,
  "/pageBanner/M0500525.jpg": 1.103,
  "/pageBanner/M0500527.jpg": 1.073,
  "/pageBanner/M0500529.jpg": 1.06,
};

export function HeroFullWidthBanner({
  src,
  alt,
  priority = true,
  objectPosition = "",
  imageClassName = "",
}: HeroFullWidthBannerProps) {
  const scale = BANNER_SCALE_MAP[src] ?? 1;

  return (
    <div className="hero-fullwidth-banner pointer-events-none relative h-[250px] w-full shrink-0 overflow-hidden bg-white min-[420px]:h-[280px] sm:h-[340px] md:h-[400px] lg:absolute lg:inset-0 lg:z-[2] lg:h-auto">
      <div className="relative h-full w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:[mask-image:linear-gradient(to_right,transparent_0%,transparent_46%,#000_56%,#000_100%)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={100}
          unoptimized
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "right bottom",
            ["--banner-scale" as string]: scale,
          }}
          className={`object-contain lg:origin-bottom-right lg:scale-[var(--banner-scale)] ${objectPosition} ${imageClassName}`}
        />
      </div>
    </div>
  );
}

export function HeroMobileBanner(_props: HeroFullWidthBannerProps) {
  return null;
}
