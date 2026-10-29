import siteData from "@/data/site.json";
import { iconMap } from "./Icons";

type TopBarLink = (typeof siteData.topBar.links)[number];

function TopBarItem({ item }: { item: TopBarLink }) {
  const Icon = iconMap[item.icon as keyof typeof iconMap];
  const content = (
    <>
      {Icon ? <Icon className="size-3.5 shrink-0 opacity-90 sm:size-4" /> : null}
      <span>{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/90 transition-colors hover:text-white sm:text-[13.5px]"
      >
        {content}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/90 sm:text-[13.5px]">
      {content}
    </span>
  );
}

export default function TopBar() {
  const { locations, links } = siteData.topBar;
  const Pin = iconMap.pin;
  const Phone = iconMap.phone;

  // Filter links for desktop top bar: exclude phone and hours (phone is shown in middle header)
  // Or show International desk, email, phone, hours
  const topLinks = links;

  return (
    <div
      className="relative z-50 text-[12px] text-white/90 sm:text-[13px]"
      style={{
        background:
          "linear-gradient(105deg, #0039b8 0%, #0047ca 42%, #1a5fd4 72%, #2b7de8 100%)",
      }}
    >
      <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between gap-2 px-4 sm:h-10 sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          {locations.map((location, index) => (
            <a
              key={location.label}
              href={location.href}
              className={`inline-flex shrink-0 items-center gap-1.5 transition-colors hover:text-white ${
                index === 2 ? "max-[390px]:hidden" : ""
              }`}
            >
              <Pin className="size-3.5 opacity-80" />
              <span>{location.label}</span>
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3.5 md:flex lg:gap-5 xl:gap-6">
          {topLinks.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-3.5 lg:gap-5 xl:gap-6">
              {idx > 0 && item.type === "hours" ? (
                <span className="text-white/30">|</span>
              ) : null}
              <TopBarItem item={item} />
            </div>
          ))}
        </div>

        <a
          href="tel:+919267982924"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium text-white/90 sm:gap-2 md:hidden"
        >
          <Phone className="size-3.5 opacity-80" />
          <span className="tabular-nums">+91 92679 82924</span>
        </a>
      </div>
    </div>
  );
}
