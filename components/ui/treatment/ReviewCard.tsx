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
    <div className="card-highlight relative flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-7">
      {title ? (
        <h3 className="font-serif mb-3 text-[1rem] font-semibold text-black sm:text-[1.0625rem]">
          {title}
        </h3>
      ) : null}
      <p className="text-[13.5px] leading-relaxed text-black sm:text-[14px]">
        {review}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-[#fde8ef] pt-4">
        <span className="card-badge flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
          {initial}
        </span>
        <div>
          <p className="text-[13.5px] leading-tight font-bold text-black">
            {name}
          </p>
          <p className="text-[11.5px] text-black">{source}</p>
        </div>
      </div>
    </div>
  );
}
