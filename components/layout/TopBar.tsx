import siteData from "@/data/site.json";
import { iconMap } from "@/components/ui/Icons";

type TopBarLink = (typeof siteData.topBar.links)[number];

function TopBarItem({ item }: { item: TopBarLink }) {
  const Icon = iconMap[item.icon as keyof typeof iconMap];
  const content = (
    <>
      {Icon ? <Icon className="size-3.5 shrink-0 opacity-90 sm:size-4" /> : null}
      <span className="whitespace-nowrap">{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className="inline-flex shrink-0 items-center gap-1.5 text-[11.5px] font-medium whitespace-nowrap text-white/90 transition-colors hover:text-white lg:text-[11.5px] xl:text-[13px]"
      >
        {content}
      </a>
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 text-[11.5px] font-medium whitespace-nowrap text-white/90 lg:text-[11.5px] xl:text-[13px]">
      {content}
    </span>
  );
}

export default function TopBar() {
  const { locations, links } = siteData.topBar;
  const Pin = iconMap.pin;
  const Phone = iconMap.phone;

  const topLinks = links;

  return (
    <div
      className="relative z-50 text-[11px] text-white/90 xl:text-[12px] border-b border-white/10"
      style={{
        background:
          "linear-gradient(90deg, var(--navy) 0%, var(--navy-mid) 50%, var(--navy) 100%)",
      }}
    >
      <div className="page-container flex h-7 items-center gap-2 sm:h-8 sm:gap-4">
        <div className="flex min-w-0 items-center justify-start gap-3 sm:gap-4 lg:gap-5">
          {locations.map((location, index) => (
            <a
              key={location.label}
              href={location.href}
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white ${
                index === 2 ? "max-[390px]:hidden" : ""
              }`}
            >
              <Pin className="size-3.5 shrink-0 opacity-80" />
              <span>{location.label}</span>
            </a>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3 md:flex lg:gap-3.5 xl:gap-6">
          {topLinks.map((item, idx) => (
            <div key={item.label} className="flex shrink-0 items-center gap-3 lg:gap-3.5 xl:gap-6">
              {idx > 0 && item.type === "hours" ? (
                <span className="text-white/30">|</span>
              ) : null}
              <TopBarItem item={item} />
            </div>
          ))}
        </div>

        <a
          href="tel:+919267982924"
          className="ml-auto inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium text-white/90 sm:gap-2 md:hidden"
        >
          <Phone className="size-3.5 opacity-80" />
          <span className="tabular-nums">+91 92679 82924</span>
        </a>
      </div>
    </div>
  );
}

