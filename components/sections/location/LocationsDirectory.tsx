"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import siteData from "@/data/site.json";
import { AREA_DETAIL_HREF_MAP } from "@/data/locationAreaMap";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  query: string;
};

const areaDetailHrefMap: Record<string, string> = AREA_DETAIL_HREF_MAP;

function matchesQuery(label: string, query: string) {
  if (!query.trim()) return true;
  return label.toLowerCase().includes(query.trim().toLowerCase());
}

function renderAreaLabel(area: string) {
  const match = area.match(/^(.+?)\s*\(([^)]+)\)$/);
  if (!match) return area;
  return (
    <>
      <span>{match[1].trim()}</span>{" "}
      <span className="text-[11px] font-normal text-ink/60">
        {match[2].trim()}
      </span>
    </>
  );
}

export default function LocationsDirectory({ query }: Props) {
  const { cities, phone, supportText, supportBookLabel, supportBookHref } =
    siteData.locationsPage;

  const q = query.trim();

  const visibleCities = cities
    .map((city) => {
      const groupsToShow = city.groups
        .map((group) => ({
          ...group,
          areas: group.areas.filter((area) => matchesQuery(area, q)),
        }))
        .filter((group) => group.areas.length > 0);

      const cityMatches =
        matchesQuery(city.name, q) || matchesQuery(city.address, q);

      const visibleGroups = !q
        ? city.groups
        : cityMatches && groupsToShow.length === 0
          ? city.groups
          : groupsToShow;

      if (q && !cityMatches && visibleGroups.length === 0) return null;

      return { ...city, visibleGroups };
    })
    .filter((c): c is NonNullable<typeof c> => c !== null);

  return (
    <>
      {visibleCities.map((city, idx) => {
        const isWhite = idx % 2 === 0;
        return (
          <section
            key={city.id}
            id={city.id}
            className={`scroll-mt-24 relative overflow-hidden border-t border-[#fde2ec]/70 py-8 sm:py-10 lg:py-12 ${
              isWhite ? "bg-white" : "bg-pink"
            }`}
          >
            <div className="page-container relative">
              <Reveal>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-ink sm:text-[2.25rem]">
                      {city.name}
                    </h2>
                    <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-ink/75 sm:text-[14px]">
                      {city.address}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <a
                      href={city.clinicHref}
                      className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark active:scale-95"
                    >
                      Clinic page
                    </a>
                    <a
                      href={phone.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/25 bg-white px-5 py-2.5 text-[13px] font-semibold text-ink transition-all hover:border-rose hover:text-rose active:scale-95"
                    >
                      <FaPhoneAlt className="size-3" />
                      Call {phone.label}
                    </a>
                  </div>
                </div>

                <div className="mt-7 space-y-6">
                  {city.visibleGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[11.5px]">
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {group.areas.map((area) => {
                          const highlighted =
                            q.length > 0 && matchesQuery(area, q);
                          const areaHref = areaDetailHrefMap[area];
                          const pillClass = `rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all sm:text-[13px] ${
                            highlighted
                              ? "border-rose bg-rose text-white shadow-sm"
                              : "border-[#fde2ec] bg-white text-ink hover:border-rose/50 hover:bg-[#fff0f5] hover:text-rose"
                          }`;

                          if (areaHref) {
                            return (
                              <Link
                                key={area}
                                href={areaHref}
                                className={pillClass}
                              >
                                {renderAreaLabel(area)}
                              </Link>
                            );
                          }

                          return (
                            <a key={area} href="#" className={pillClass}>
                              {renderAreaLabel(area)}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Bottom Support Bar */}
      <section className="relative overflow-hidden border-t border-[#fde2ec]/70 bg-pink py-6 sm:py-7">
        <div className="page-container relative">
          <Reveal>
            <p className="text-[13.5px] text-ink/85 sm:text-[14.5px]">
              {supportText} Call{" "}
              <a
                href={phone.href}
                className="font-semibold text-rose underline underline-offset-2 hover:text-rose-dark"
              >
                {phone.label}
              </a>{" "}
              or{" "}
              <Link
                href={supportBookHref}
                className="font-semibold text-blue underline underline-offset-2 hover:text-rose"
              >
                {supportBookLabel}
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
