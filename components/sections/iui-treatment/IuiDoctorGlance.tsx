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
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Doctor Photo */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:col-span-5 lg:max-w-none">
            <Reveal variant="slideLeft" delay={0.1}>
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-45 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,71,202,0.3) 0%, rgba(232,62,116,0.2) 60%, transparent 75%)",
                }}
              />
              <div className="relative aspect-[4/3] sm:aspect-[1.1] overflow-hidden rounded-[24px] border border-white/10 bg-[#091a3c] shadow-[0_16px_36px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/about-mona-dahiya/dr-mona-dahiya.jpg"
                  alt="Dr. Mona Dahiya — IVF, Fertility & IUI Doctor"
                  fill
                  sizes="(max-width: 1024px) 400px, 500px"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
                About Dr. Mona Dahiya
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                Dr. Mona Dahiya
              </h2>

              <p className="mt-1 text-[13.5px] font-medium text-[#f9a8d4] sm:text-[14.5px]">
                IVF, Fertility &amp; IUI Doctor
              </p>

              <p className="mt-3.5 text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                Dr. Mona has over 25 years&apos; experience in performing IUI and other fertility treatments. She is currently working as Senior Visiting Consultant at multiple IUI clinics in Noida, Delhi and Ghaziabad.
              </p>

              <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                She has taught many gynaecologists over the years and is a member of the Indian Fertility Society and the Indian Council of Medical Research.
              </p>
            </Reveal>

            {/* 4 Credentials Rows */}
            <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#091a3c]/75 backdrop-blur-md">
              {credentials.map((cred) => (
                <div
                  key={cred.degree}
                  className="flex flex-col justify-between gap-1 px-4 py-3 sm:flex-row sm:items-center sm:px-5 sm:py-3.5"
                >
                  <span className="text-[13px] font-bold text-white sm:text-[13.5px]">
                    {cred.degree}
                  </span>
                  <span className="text-[12.5px] text-slate-300 sm:text-[13px]">
                    {cred.institution}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/about-mona-dahiya"
                className="inline-flex items-center gap-2 rounded-full border border-teal-500/50 bg-teal-500/10 px-5 py-2.5 text-[13px] font-medium text-teal-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white active:scale-95 sm:text-[13.5px]"
              >
                <FaUserMd className="size-3.5" />
                <span>Learn More About Dr. Mona</span>
              </Link>

              <a
                href="https://www.youtube.com/@drmonadahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 active:scale-95 sm:text-[13.5px]"
              >
                <span className="flex size-4 items-center justify-center rounded-[3px] bg-[#e50914] text-white">
                  <PlayIcon className="ml-0.5 size-2 fill-white" />
                </span>
                <span>See Videos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

