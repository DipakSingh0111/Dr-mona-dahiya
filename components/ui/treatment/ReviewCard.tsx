"use client";

export type ReviewCardItem = {
  title?: string;
  review: string;
  name: string;
  initial: string;
  source?: string;
};

export function ReviewCard({
  title,
  review,
  name,
  initial,
  source = "Google patient review",
}: ReviewCardItem) {
  return (
    <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/85 sm:p-7">
      {title ? (
        <h3 className="font-serif mb-3 text-[1.05rem] font-semibold text-white sm:text-[1.1rem]">
          {title}
        </h3>
      ) : null}
      <p className="text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
        {review}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
          {initial}
        </span>
        <div>
          <p className="text-[13.5px] leading-tight font-bold text-white">
            {name}
          </p>
          <p className="text-[11.5px] text-slate-400">{source}</p>
        </div>
      </div>
    </div>
  );
}
