"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserMd } from "react-icons/fa";
import { PlayIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export default function IuiDoctorGlance() {
  const credentials = [
    {
      degree: "MBBS (Gold Medalist)",
      institution: "Lady Hardinge Medical College, Delhi",
    },
    {
      degree: "MD (Gold Medalist)",
      institution: "Maulana Azad Medical College, Delhi",
    },
    {
      degree: "DNB (Obs & Gyn)",
      institution: "National Board",
    },
    {
      degree: "Fellowship in IVF and Reproductive Medicine",
      institution: "Singapore General Hospital",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Doctor Photo */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:col-span-5 lg:max-w-none">
            <Reveal variant="slideLeft" delay={0.1}>
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-40 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,71,202,0.2) 0%, rgba(232,62,116,0.15) 60%, transparent 75%)",
                }}
              />
              <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] rounded-br-[88px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(232,62,116,0.12)]">
                <Image
                  src="/images/best-iui-about.jpg"
                  alt="Dr. Mona Dahiya — IVF, Fertility & IUI Doctor"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 440px, 560px"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
                About Dr. Mona Dahiya
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
                Dr. Mona Dahiya
              </h2>

              <p className="mt-1 text-[13.5px] font-medium text-rose sm:text-[14.5px]">
                IVF, Fertility &amp; IUI Doctor
              </p>

              <p className="mt-3.5 text-[13.5px] leading-relaxed text-slate-600 sm:text-[14px]">
                Dr. Mona has over 25 years&apos; experience in performing IUI and other fertility treatments. She is currently working as Senior Visiting Consultant at multiple IUI clinics in Noida, Delhi and Ghaziabad.
              </p>

              <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600 sm:text-[14px]">
                She has taught many gynaecologists over the years and is a member of the Indian Fertility Society and the Indian Council of Medical Research.
              </p>
            </Reveal>

            {/* 4 Credentials Rows */}
            <div className="mt-6 divide-y divide-[#fde2ec] rounded-2xl border-4 border-white bg-white shadow-sm">
              {credentials.map((cred) => (
                <div
                  key={cred.degree}
                  className="flex flex-col justify-between gap-1 px-4 py-3 sm:flex-row sm:items-center sm:px-5 sm:py-3.5"
                >
                  <span className="text-[13px] font-bold text-ink sm:text-[13.5px]">
                    {cred.degree}
                  </span>
                  <span className="text-[12.5px] text-slate-600 sm:text-[13px]">
                    {cred.institution}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/about-mona-dahiya"
                className="inline-flex items-center gap-2 rounded-full border border-blue/40 bg-white px-5 py-2.5 text-[13px] font-semibold text-blue shadow-sm transition-all duration-200 hover:bg-blue hover:text-white active:scale-95 sm:text-[13.5px]"
              >
                <FaUserMd className="size-3.5" />
                <span>Learn More About Dr. Mona</span>
              </Link>

              <a
                href="https://www.youtube.com/@drmonadahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white px-5 py-2.5 text-[13px] font-semibold text-rose shadow-sm transition-all duration-200 hover:border-rose hover:bg-[#fff0f5] active:scale-95 sm:text-[13.5px]"
              >
                <PlayIcon className="size-3 text-rose" />
                <span>Watch YouTube Videos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
