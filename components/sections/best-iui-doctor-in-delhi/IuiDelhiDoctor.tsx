"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserMd } from "react-icons/fa";
import { PlayIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export default function IuiDelhiDoctor() {
  const credentials = [
    {
      degree: "MBBS (Gold Medalist)",
      institution: "Lady Hardinge Medical College Delhi",
    },
    {
      degree: "MD (Gold Medalist)",
      institution: "Maulana Azad Medical College Delhi",
    },
    {
      degree: "DNB (OBG)",
      institution: "National Board Of Examinations",
    },
    {
      degree: "Fellowship In IVF And Reproductive Medicine",
      institution: "Singapore General Hospital Singapore",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#fde2ec] bg-pink py-8 sm:py-10 lg:py-14">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
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
              <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] rounded-br-[88px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(232,62,116,0.12)]">
                <Image
                  src="/images/meet-iui-doctor.jpg"
                  alt="Dr. Mona Dahiya — Meet Your IUI Doctor"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 440px, 560px"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <Reveal variant="fadeUp">
              <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
                Meet Your IUI Doctor
              </span>

              <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
                Dr. Mona Dahiya
              </h2>

              <p className="mt-1 text-[13.5px] font-medium text-rose sm:text-[14.5px]">
                Fertility Specialist | IVF &amp; IUI Treatments
              </p>

              <p className="mt-3.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                Dr Mona Dahiya has 25+ years of experience in helping couples
                achieve pregnancy through IUI. Her clinic is located in Lajpat
                Nagar South Delhi and she also sees patients in Noida and
                Ghaziabad.
              </p>

              <p className="mt-2.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                She has performed 10,000 IUI cycles at her clinic. Before
                starting any form of stimulation she would perform all the
                required baseline tests to ensure that IUI is indicated.
              </p>
            </Reveal>

            <div className="mt-6 divide-y divide-white/10 rounded-2xl border-4 border-white bg-white backdrop-blur-md">
              {credentials.map((cred) => (
                <div
                  key={cred.degree}
                  className="flex flex-col justify-between gap-1 px-4 py-3 sm:flex-row sm:items-center sm:px-5 sm:py-3.5"
                >
                  <span className="text-[13px] font-bold text-black sm:text-[13.5px]">
                    {cred.degree}
                  </span>
                  <span className="text-[12.5px] text-black sm:text-[13px]">
                    {cred.institution}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/about-mona-dahiya"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-black transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-95 sm:text-[13.5px]"
              >
                <FaUserMd className="size-3.5" />
                <span>Know more about her</span>
              </Link>

              <a
                href="https://www.youtube.com/@drmonadahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-black transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-95 sm:text-[13.5px]"
              >
                <span className="flex size-4 items-center justify-center rounded-[3px] bg-[#e50914] text-white">
                  <PlayIcon className="ml-0.5 size-2 fill-white" />
                </span>
                <span>Take a look at the video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
