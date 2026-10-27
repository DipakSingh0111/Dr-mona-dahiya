import Image from "next/image";
import {
  FaFileAlt,
  FaVideo,
  FaBed,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPlane,
} from "react-icons/fa";
import siteData from "@/data/site.json";

const colorMap = {
  pink: "bg-[#e83e74]",
  blue: "bg-[#3b82f6]",
  green: "bg-[#22a06b]",
} as const;

const featureIconMap = {
  file: FaFileAlt,
  video: FaVideo,
  bed: FaBed,
} as const;

const contactIconMap = {
  phone: FaPhoneAlt,
  mail: FaEnvelope,
  pin: FaMapMarkerAlt,
} as const;

type ColorKey = keyof typeof colorMap;

function WorldMapArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 520 280"
      className="pointer-events-none absolute top-[8%] right-[-2%] h-[78%] w-[58%] text-[#9ec4ff] opacity-[0.22]"
      fill="currentColor"
    >
      {/* Simplified continents as soft blobs */}
      <ellipse cx="120" cy="90" rx="70" ry="42" opacity="0.55" />
      <ellipse cx="210" cy="130" rx="55" ry="36" opacity="0.45" />
      <ellipse cx="300" cy="100" rx="80" ry="48" opacity="0.5" />
      <ellipse cx="400" cy="140" rx="65" ry="40" opacity="0.45" />
      <ellipse cx="160" cy="190" rx="48" ry="30" opacity="0.35" />
      <ellipse cx="340" cy="200" rx="70" ry="32" opacity="0.4" />
      {/* Dotted flight path */}
      <path
        d="M70 210 C160 150, 250 120, 360 90 S470 50, 500 40"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.7"
      />
    </svg>
  );
}

export default function InternationalPatients() {
  const data = siteData.internationalPatients;

  return (
    <section className="relative overflow-hidden bg-white px-3 py-12 sm:px-4 sm:py-16 lg:pr-8 lg:pl-3 xl:pl-4">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative isolate overflow-hidden rounded-[26px] bg-[#0c1833] sm:rounded-[32px] shadow-xl">
          {/* Full Card Width Background Image */}
          <div className="absolute inset-0">
            <Image
              src={data.image}
              alt="Mother holding baby — international IVF patients"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[75%_center] sm:object-[80%_center] lg:object-[86%_center]"
            />
          </div>

          {/* Smooth Dark Gradient Background over text side */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,22,46,0.98) 0%, rgba(10,22,46,0.95) 32%, rgba(10,22,46,0.85) 46%, rgba(10,22,46,0.48) 60%, rgba(10,22,46,0.12) 74%, transparent 90%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,22,46,0.95) 0%, rgba(10,22,46,0.88) 55%, rgba(10,22,46,0.45) 100%)",
            }}
          />

          <WorldMapArt />

          {/* Plane top-right */}
          <FaPlane
            aria-hidden
            className="pointer-events-none absolute top-7 right-10 z-[2] hidden size-5 rotate-[18deg] text-white/55 lg:block"
          />

          <div className="relative z-10 px-6 py-10 sm:px-9 sm:py-12 lg:max-w-[58%] lg:px-11 lg:py-14 xl:px-12">
            <div className="mb-4 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#e83e74]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#e83e74] uppercase sm:text-xs">
                {data.badge}
              </span>
            </div>

            <h2 className="max-w-xl text-[1.75rem] leading-[1.2] font-bold tracking-tight text-white sm:text-[2.25rem] lg:text-[2.55rem]">
              <span className="block">{data.titleLine1}</span>
              <span className="block">
                {data.titleLine2}{" "}
                <span className="text-[#e83e74]">{data.titleAccent}</span>
              </span>
            </h2>

            <p className="mt-3.5 max-w-lg text-[13px] leading-relaxed text-white/75 sm:text-[14.5px]">
              {data.subtitle}
            </p>

            {/* Feature pills — one row on desktop */}
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              {data.features.map((feature) => {
                const Icon =
                  featureIconMap[feature.icon as keyof typeof featureIconMap];
                const color = colorMap[feature.color as ColorKey];
                return (
                  <div
                    key={feature.id}
                    className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.06] px-3 py-2"
                  >
                    <span
                      className={`flex size-[30px] shrink-0 items-center justify-center rounded-full text-white ${color}`}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    <span className="pr-1.5 text-[12px] font-medium whitespace-nowrap text-white sm:text-[13px]">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Contact row */}
            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-7 sm:grid-cols-3 sm:gap-4">
              {data.contacts.map((contact) => {
                const Icon =
                  contactIconMap[contact.icon as keyof typeof contactIconMap];
                const color = colorMap[contact.color as ColorKey];
                return (
                  <a
                    key={contact.id}
                    href={contact.href}
                    className="group flex items-start gap-3"
                  >
                    <span
                      className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full text-white ${color}`}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold text-white">
                        {contact.label}:
                      </span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-white/80 group-hover:text-[#f9a8c0]">
                        {contact.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            {/* CTA + dotted flight path */}
            <div className="relative mt-9">
              <a
                href={data.cta.href}
                className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-[#e83e74] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_12px_30px_rgba(232,62,116,0.4)] transition hover:bg-[#d13266]"
              >
                {data.cta.label}
                <FaArrowRight className="size-3.5" />
              </a>

              <div
                aria-hidden
                className="pointer-events-none absolute top-[18px] left-[170px] hidden w-[220px] sm:block lg:w-[280px]"
              >
                <svg
                  viewBox="0 0 280 50"
                  className="h-12 w-full text-white/45"
                  fill="none"
                >
                  <path
                    d="M2 38 C50 38, 80 10, 140 16 S220 40, 270 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeDasharray="3.5 5"
                  />
                </svg>
                <FaPlane className="absolute top-0 right-0 size-3.5 rotate-[-8deg] text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
