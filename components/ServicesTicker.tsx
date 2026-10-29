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
    <div className="relative w-full overflow-hidden bg-[#1f191b] py-3 border-y border-white/5 select-none z-20">
      <div className="flex w-max animate-ticker items-center whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="font-serif italic text-[14.5px] sm:text-[15.5px] md:text-[16px] text-white/90 tracking-wide px-3 sm:px-4 font-normal">
              {item}
            </span>
            <span className="text-[#a8a29e] text-[10px] leading-none px-1 select-none">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

