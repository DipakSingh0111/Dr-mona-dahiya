"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  query: string;
};

const areaDetailHrefMap: Record<string, string> = {
  "Sector 18": "/location/best-ivf-doctor-in-sector-18-noida",
};

function matchesQuery(label: string, query: string) {
  if (!query.trim()) return true;
  return label.toLowerCase().includes(query.trim().toLowerCase());
}

export default function LocationsDirectory({ query }: Props) {
  const {
    cities,
    phone,
    supportText,
    supportBookLabel,
    supportBookHref,
  } = siteData.locationsPage;

  const q = query.trim();

  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-7 lg:py-8 border-y border-[#fde2ec]/70">
      <div className="page-container relative space-y-12 sm:space-y-16">
        {cities.map((city) => {
          const groupsToShow = city.groups
            .map((group) => ({
              ...group,
              areas: group.areas.filter((area) => matchesQuery(area, q)),
            }))
            .filter((group) => group.areas.length > 0);

          const cityMatches =
            matchesQuery(city.name, q) || matchesQuery(city.address, q);

          // When query matches city name/address, show all groups; else show filtered areas only
          const visibleGroups = !q
            ? city.groups
            : cityMatches && groupsToShow.length === 0
              ? city.groups
              : groupsToShow;

          if (q && !cityMatches && visibleGroups.length === 0) return null;

          return (
            <Reveal key={city.id}>
              <div
                id={city.id}
                className="scroll-mt-36 rounded-[28px] border border-[#fde2ec] bg-white/55 p-5 shadow-[0_12px_36px_rgba(0,10,40,0.35)] sm:p-7 lg:p-9"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <h2 className="font-serif text-[2rem] font-semibold tracking-tight text-black sm:text-[2.35rem]">
                      {city.name}
                    </h2>
                    <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-black sm:text-[14px]">
                      {city.address}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <a
                      href={city.clinicHref}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose via-[#ea4c80] to-[var(--rose)] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_22px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 active:scale-95"
                    >
                      Clinic page
                    </a>
                    <a
                      href={phone.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-[13px] font-bold text-black transition-all hover:border-white/60 hover:bg-white/10 active:scale-95"
                    >
                      <FaPhoneAlt className="size-3" />
                      Call {phone.label}
                    </a>
                  </div>
                </div>

                <div className="mt-8 space-y-7">
                  {visibleGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[11.5px]">
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {group.areas.map((area) => {
                          const highlighted =
                            q.length > 0 && matchesQuery(area, q);
                          const areaHref = areaDetailHrefMap[area];
                          const pillClass = `rounded-full border px-3.5 py-2 text-[12.5px] font-medium transition-all sm:text-[13px] ${
                            highlighted
                              ? "border-rose/70 bg-rose/20 text-white ring-1 ring-rose/35"
                              : "border-[#fde2ec] bg-white text-ink hover:border-rose/40 hover:bg-rose/10 hover:text-rose"
                          }`;

                          if (areaHref) {
                            return (
                              <Link key={area} href={areaHref} className={pillClass}>
                                {area}
                              </Link>
                            );
                          }

                          return (
                            <a key={area} href="#" className={pillClass}>
                              {area}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal>
          <p className="text-center text-[14px] text-black sm:text-[15px]">
            {supportText}{" "}
            <a
              href={phone.href}
              className="font-semibold text-rose underline-offset-2 hover:text-rose hover:underline"
            >
              {phone.label}
            </a>{" "}
            or{" "}
            <Link
              href={supportBookHref}
              className="font-semibold text-blue underline-offset-2 hover:text-rose hover:underline"
            >
              {supportBookLabel}
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
