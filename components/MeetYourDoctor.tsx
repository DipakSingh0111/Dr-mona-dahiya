import Image from "next/image";
import {
  FaCheck,
  FaArrowRight,
  FaYoutube,
  FaStethoscope,
  FaGraduationCap,
  FaUserMd,
  FaHospital,
  FaCertificate,
  FaAward,
} from "react-icons/fa";
import siteData from "@/data/site.json";

const qualIconMap = {
  pink: { Icon: FaGraduationCap, bg: "bg-[#fde8ef]", text: "text-[#e11d60]" },
  purple: { Icon: FaUserMd, bg: "bg-[#efe8ff]", text: "text-[#7b5bb8]" },
  green: { Icon: FaHospital, bg: "bg-[#e4f7f1]", text: "text-[#1a9b7a]" },
  orange: { Icon: FaCertificate, bg: "bg-[#fff0e4]", text: "text-[#e8893a]" },
  blue: { Icon: FaAward, bg: "bg-[#e8f2ff]", text: "text-[#4a90d9]" },
} as const;

type QualColor = keyof typeof qualIconMap;

export default function MeetYourDoctor() {
  const data = siteData.meetYourDoctor;
  const { card } = data;

  return (
    <section
      id="about"
      className="relative overflow-visible bg-white px-3 pt-12 pb-16 sm:px-4 sm:pt-14 sm:pb-20 lg:pr-8 lg:pl-3 xl:pl-4"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.95fr)_minmax(300px,1fr)] lg:gap-5 xl:gap-8">
          {/* Left copy — matches reference */}
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ffe8f0] px-3.5 py-1.5 text-[12px] font-semibold text-[#e83e74]">
              <span className="size-1.5 rounded-full bg-[#e83e74]" />
              {data.badge}
            </span>

            <h2 className="font-display mt-5 text-[2.1rem] leading-[1.18] font-bold tracking-[-0.02em] text-[#0f2038] sm:text-[2.5rem] lg:text-[2.75rem]">
              {data.titleLine1}
              <br />
              {data.titleLine2}
              <br />
              <span className="text-[#e83e74]">{data.titleAccent}</span>
            </h2>

            <p className="mt-4 max-w-[470px] text-[13.5px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
              {data.description}
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ffe8f0] text-[#e83e74]">
                    <FaCheck className="size-2.5" />
                  </span>
                  <span className="text-[13px] leading-snug font-semibold text-[#1e293b] sm:text-[13.5px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e83e74] px-5 py-3 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_rgba(232,62,116,0.25)] transition hover:bg-[#d13266]"
              >
                {data.primaryCta.label}
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#e83e74]">
                  <FaArrowRight className="size-2.5" />
                </span>
              </a>

              <a
                href={data.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#e83e74] bg-white px-5 py-3 text-[13.5px] font-semibold text-[#e83e74] transition hover:bg-[#fff5f8]"
              >
                <FaYoutube className="size-5 text-[#ff0033]" />
                {data.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Center portrait */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-[380px] items-end justify-center sm:h-[480px] lg:h-[540px] lg:max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute top-[6%] left-1/2 z-0 aspect-square w-[94%] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, #f9c5d8 0%, #fbd5e5 40%, #feeaf2 65%, rgba(255,255,255,0) 76%)",
              }}
            />

            <div
              aria-hidden
              className="pointer-events-none absolute top-[8%] right-[4%] z-[1] size-[48%] rounded-full border-[2.5px] border-dashed border-[#f18aaa]/75"
              style={{
                clipPath: "polygon(20% 0%, 100% 0%, 100% 65%, 45% 50%)",
              }}
            />

            <div className="absolute top-[16%] right-[8%] z-[5] flex size-14 items-center justify-center rounded-full bg-white text-[#e83e74] shadow-[0_10px_26px_rgba(232,62,116,0.2)] ring-1 ring-[#fde2ec] sm:size-16">
              <FaStethoscope className="size-6 sm:size-7" />
            </div>

            <div className="relative z-10 h-full w-full">
              <Image
                src={data.image}
                alt="Dr. Mona Dahiya"
                fill
                sizes="(max-width: 1024px) 380px, 420px"
                className="object-contain object-bottom"
                priority
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-white via-white/80 to-transparent"
            />
          </div>

          {/* Right qualifications card */}
          <div className="relative z-10 mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none">
            <article className="rounded-[28px] border border-[#f7c9d8]/70 bg-[#fff5f8] p-6 shadow-[0_20px_48px_rgba(232,62,116,0.1)] sm:p-7 lg:p-8">
              <p className="text-[13px] font-bold tracking-wide text-[#e11d60] sm:text-[14px]">
                {card.eyebrow}
              </p>
              <h3 className="font-display mt-2 text-[2.2rem] leading-none font-bold sm:text-[2.45rem]">
                <span className="text-[#0f2438]">{card.namePrefix}</span>{" "}
                <span className="text-[#e11d60]">{card.name}</span>
              </h3>

              <div className="mt-6 mb-1 flex items-center gap-3">
                <span className="shrink-0 text-[11px] font-bold tracking-[0.14em] text-[#94a3b8] uppercase sm:text-[12px]">
                  {card.sectionLabel}
                </span>
                <span className="h-px flex-1 bg-[#f0a8bc]/80" />
              </div>

              <ul className="flex flex-col">
                {card.qualifications.map((item, index) => {
                  const theme = qualIconMap[item.color as QualColor];
                  const Icon = theme.Icon;
                  const isLast = index === card.qualifications.length - 1;
                  return (
                    <li
                      key={item.title}
                      className={`flex items-start gap-4 py-4 ${
                        isLast ? "" : "border-b border-[#f3d0dc]/80"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12 ${theme.bg} ${theme.text}`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-[15.5px] leading-snug font-bold text-[#0f2438] sm:text-[16.5px]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[13px] leading-snug text-[#667d99] sm:text-[14px]">
                          {item.subtitle}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
