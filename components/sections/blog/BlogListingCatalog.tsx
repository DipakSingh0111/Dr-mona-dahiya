"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TreatmentSection } from "@/components/ui/treatment";
import {
  BLOG_LISTING_ARTICLES,
  BLOG_TOPICS,
} from "@/data/blogListing";

const topicAccentMap = new Map(
  BLOG_TOPICS.map((t) => [t.title, t.accent]),
);

export default function BlogListingCatalog() {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_LISTING_ARTICLES.filter((article) => {
      const matchesTopic =
        selectedTopic === "All" || article.topic === selectedTopic;
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.topic.toLowerCase().includes(q);
      return matchesTopic && matchesSearch;
    });
  }, [selectedTopic, searchQuery]);

  const handleSelectTopic = (topicTitle: string) => {
    setSelectedTopic(topicTitle);
    const el = document.getElementById("blog-articles-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Browse by topic section */}
      <TreatmentSection>
        <Reveal variant="fadeUp">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
                Browse by topic
              </p>
              <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
                Explore Articles by Topic
              </h2>
            </div>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-ink/75 sm:text-right sm:text-[14px]">
              Pick a topic to see every article in it, or search for what you
              need.
            </p>
          </div>
        </Reveal>

        <Stagger
          delay={0.04}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {BLOG_TOPICS.map((topic) => {
            const isBlue = topic.accent === "blue";
            const isSelected = selectedTopic === topic.title;
            return (
              <StaggerItem key={topic.id}>
                <button
                  type="button"
                  onClick={() => handleSelectTopic(topic.title)}
                  className={`group flex h-full w-full flex-col justify-start rounded-2xl p-5 text-left text-white shadow-[0_10px_28px_rgba(15,36,56,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,36,56,0.14)] sm:p-6 ${
                    isBlue
                      ? "bg-blue hover:bg-blue-dark"
                      : "bg-rose hover:bg-rose-dark"
                  } ${isSelected ? "ring-2 ring-ink ring-offset-2" : ""}`}
                >
                  <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-white sm:text-[1.15rem]">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/90 sm:text-[13.5px]">
                    {topic.description}
                  </p>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </TreatmentSection>

      {/* Filter Pills, Search & Articles Grid */}
      <TreatmentSection id="blog-articles-grid">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedTopic("All")}
              className={`rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors sm:text-[12.5px] ${
                selectedTopic === "All"
                  ? "border-rose bg-rose text-white shadow-xs"
                  : "border-rose/25 bg-white text-ink hover:border-rose/50 hover:text-rose"
              }`}
            >
              All topics
            </button>
            {BLOG_TOPICS.map((topic) => {
              const active = selectedTopic === topic.title;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopic(topic.title)}
                  className={`rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors sm:text-[12.5px] ${
                    active
                      ? "border-rose bg-rose text-white shadow-xs"
                      : "border-rose/25 bg-white text-ink hover:border-rose/50 hover:text-rose"
                  }`}
                >
                  {topic.title}
                </button>
              );
            })}
          </div>

          <div className="relative w-full shrink-0 lg:w-72">
            <FaSearch className="pointer-events-none absolute top-1/2 left-3.5 size-3.5 -translate-y-1/2 text-ink/45" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, e.g. AMH, IUI cost, PCOS"
              aria-label="Search blog articles"
              className="w-full rounded-full border border-rose/25 bg-white py-2 pr-4 pl-9 text-[12.5px] text-ink shadow-xs outline-none placeholder:text-ink/50 focus:border-rose focus:ring-2 focus:ring-rose/15 sm:text-[13px]"
            />
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-rose/20 bg-white p-8 text-center">
            <p className="text-[14.5px] font-medium text-ink">
              No articles matched your filter. Try clearing the search or
              selecting &ldquo;All topics&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedTopic("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-rose px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-rose-dark"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {filteredArticles.map((article, idx) => {
              const isBlue = topicAccentMap.get(article.topic) === "blue";
              return (
                <Link
                  key={`${article.title}-${idx}`}
                  href={article.href}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-rose/45 hover:shadow-[0_14px_32px_rgba(232,62,116,0.12)]"
                >
                  <div>
                    <div
                      className={`px-4 py-2.5 text-[11px] font-semibold leading-snug text-white ${
                        isBlue ? "bg-blue" : "bg-rose"
                      }`}
                    >
                      {article.topic}
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="font-serif text-[15px] leading-snug font-semibold text-ink transition-colors group-hover:text-rose sm:text-[15.5px]">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <span
                      className={`text-[11.5px] font-semibold ${
                        isBlue ? "text-blue" : "text-rose"
                      }`}
                    >
                      {article.date} · Read article ↗
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </TreatmentSection>
    </>
  );
}

