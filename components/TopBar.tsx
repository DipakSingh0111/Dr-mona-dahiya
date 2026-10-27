import siteData from "@/data/site.json";
import { iconMap } from "./Icons";

type TopBarLink = (typeof siteData.topBar.links)[number];

function TopBarItem({ item }: { item: TopBarLink }) {
  const Icon = iconMap[item.icon as keyof typeof iconMap];
  const content = (
    <>
      {Icon ? <Icon className="size-3.5 shrink-0 opacity-90" /> : null}
      <span>{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/90 transition-colors hover:text-white"
      >
        {content}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/90">
      {content}
    </span>
  );
}

export default function TopBar() {
  const { locations, links } = siteData.topBar;
  const Pin = iconMap.pin;
  const Phone = iconMap.phone;

  return (
    <div className="relative z-50 border-b border-white/10 bg-[#06152d]/40 text-[11.5px] text-white/80 backdrop-blur-[2px]">
      <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-5">
          {locations.map((location) => (
            <a
              key={location.label}
              href={location.href}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Pin className="size-3 opacity-75" />
              <span>{location.label}</span>
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          {links.map((item) => (
            <TopBarItem key={item.label} item={item} />
          ))}
        </div>

        <a
          href="tel:+919267982924"
          className="inline-flex items-center gap-1.5 font-medium text-white/90 md:hidden"
        >
          <Phone className="size-3 opacity-80" />
          <span>+91 92679 82924</span>
        </a>
      </div>
    </div>
  );
}
