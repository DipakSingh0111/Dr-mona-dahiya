"use client";

export type ProtocolCardItem = {
  number: string;
  title: string;
  bullets: string[];
};

export function ProtocolCard({ number, title, bullets }: ProtocolCardItem) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
          {number}
        </span>
        <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-black sm:text-[1.12rem]">
          {title}
        </h3>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
        {bullets.map((bullet) => (
          <div
            key={bullet}
            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-black sm:text-[13.5px]"
          >
            <span className="pt-0.5 text-[14px] leading-none text-rose select-none">
              ↳
            </span>
            <p className="flex-1">{bullet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
