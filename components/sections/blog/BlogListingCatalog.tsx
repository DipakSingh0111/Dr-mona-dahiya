"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TreatmentSection } from "@/components/ui/treatment";
import {
  BLOG_LISTING_ARTICLES,
  BLOG_TOPICS,
  FEATURED_PILLAR_GUIDES,
} from "@/data/blogListing";

const topicAccentMap = new Map(
  BLOG_TOPICS.map((t) => [t.title, t.accent]),
);

// Map each topic to authorized theme gradient for its Featured Pillar Guide Banner
const topicGradientMap: Record<string, string> = {
  "Understanding Infertility & Diagnosis": "from-rose via-[#e83e74] to-rose-dark text-white",
  "ART & Advanced Procedures": "from-blue via-[#0047ca] to-blue-dark text-white",
  "Complex Conditions & Low Ovarian Reserve": "from-rose via-[#b32b55] to-navy text-white",
  "Diet, Lifestyle & Natural Fertility": "from-amber-600 via-[#c25e00] to-rose-dark text-white",
  "Patient Guides, Regulations & FAQs": "from-blue-dark via-[#0a3273] to-navy text-white",
  "Choosing Your Doctor & Clinic": "from-navy via-[#0f2d5c] to-blue-dark text-white",
};

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

  const activePillarGuide = useMemo(() => {
    if (selectedTopic !== "All" && FEATURED_PILLAR_GUIDES[selectedTopic]) {
      return FEATURED_PILLAR_GUIDES[selectedTopic];
    }
    // Default to first guide when "All" is active and not searching
    if (selectedTopic === "All" && !searchQuery.trim()) {
      return FEATURED_PILLAR_GUIDES["Understanding Infertility & Diagnosis"];
    }
    return null;
  }, [selectedTopic, searchQuery]);

  return (
    <TreatmentSection id="blog-articles-grid" className="py-8 sm:py-12">
      {/* 1. Filter Pills Row & Search Input */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedTopic("All")}
            className={`rounded-full border px-4 py-2 text-xs font-bold transition-all sm:text-[12.5px] cursor-pointer ${
              selectedTopic === "All"
                ? "border-rose bg-rose text-white shadow-sm"
                : "border-rose/20 bg-white text-ink hover:border-rose/50 hover:text-rose"
            }`}
          >
            All topics
          </button>
          {BLOG_TOPICS.map((topic) => {
            const active = selectedTopic === topic.title;
            const isBlue = topic.accent === "blue";
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopic(topic.title)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-all sm:text-[12.5px] cursor-pointer ${
                  active
                    ? isBlue
                      ? "border-blue bg-blue text-white shadow-sm"
                      : "border-rose bg-rose text-white shadow-sm"
                    : "border-rose/20 bg-white text-ink hover:border-rose/50 hover:text-rose"
                }`}
              >
                {topic.title}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full shrink-0 lg:w-80">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3.5 size-3.5 -translate-y-1/2 text-ink/45" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, e.g. AMH, IUI cost, PCOS"
            aria-label="Search blog articles"
            className="w-full rounded-full border border-rose/25 bg-white py-2.5 pr-4 pl-9 text-xs sm:text-[13px] text-ink shadow-xs outline-none placeholder:text-ink/45 focus:border-rose focus:ring-2 focus:ring-rose/15"
          />
        </div>
      </div>

      {/* 2. Featured Pillar Guide Banner (Shown when category tab is active or default) */}
      {activePillarGuide && (
        <Reveal variant="fadeUp" className="mt-8">
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-r p-6 sm:p-8 lg:p-10 shadow-md ${
              topicGradientMap[activePillarGuide.topic] ||
              topicGradientMap[selectedTopic] ||
              "from-rose to-rose-dark text-white"
            }`}
          >
            <div className="relative z-10 max-w-4xl">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-white/90">
                FEATURED PILLAR GUIDE - {activePillarGuide.topic}
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                {activePillarGuide.title}
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-white/85">
                {activePillarGuide.description}
              </p>
              <div className="mt-4">
                <Link
                  href={activePillarGuide.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white underline underline-offset-4 hover:text-white/85"
                >
                  <span>Read the guide</span>
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Subtle background glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
          </div>
        </Reveal>
      )}

      {/* 3. Filtered Articles Grid */}
      <div className="mt-8">
        {filteredArticles.length === 0 ? (
          <div className="rounded-2xl border border-rose/20 bg-white p-8 text-center">
            <p className="text-sm font-medium text-ink">
              No articles matched your filter. Try clearing the search or
              selecting &ldquo;All topics&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedTopic("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-rose px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-rose-dark"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {filteredArticles.map((article, idx) => {
              const isBlue = topicAccentMap.get(article.topic) === "blue";
              return (
                <StaggerItem key={`${article.title}-${idx}`}>
                  <Link
                    href={article.href}
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-rose/15 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose/40 hover:shadow-md"
                  >
                    <div>
                      {/* Top Topic Banner Strip */}
                      <div
                        className={`px-4 py-2 text-[10.5px] font-bold tracking-wide uppercase text-white ${
                          isBlue ? "bg-blue" : "bg-rose"
                        }`}
                      >
                        {article.topic}
                      </div>

                      {/* Title */}
                      <div className="p-4 sm:p-5">
                        <h3 className="font-display text-[14.5px] sm:text-[15px] leading-snug font-bold text-ink transition-colors group-hover:text-rose">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    {/* Footer Date & Read */}
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-rose/5">
                      <span
                        className={`text-[11.5px] font-semibold ${
                          isBlue ? "text-blue" : "text-rose"
                        }`}
                      >
                        {article.date} · Read article ↗
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        )}
      </div>
    </TreatmentSection>
  );
}
