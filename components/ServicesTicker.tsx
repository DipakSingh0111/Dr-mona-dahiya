"use client";

const tickerItems = [
  "PGT",
  "IVF",
  "ICSI",
  "IUI",
  "Low AMH care",
  "PCOS",
  "Egg freezing",
  "Laparoscopy & hysteroscopy",
];

export default function ServicesTicker() {
  // Duplicate items 4 times to ensure perfectly seamless, infinite marquee scrolling
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="relative z-20 w-full select-none overflow-hidden border-y border-white/5 bg-[#2e2427] py-3">
      <div className="animate-ticker flex w-max items-center whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="px-3 font-serif text-[14.5px] font-normal italic tracking-wide text-[#e5d1d4] sm:px-4 sm:text-[15.5px] md:text-[16px]">
              {item}
            </span>
            <span className="select-none px-1 text-[10px] leading-none text-[#e5d1d4]/75">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

