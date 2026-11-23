import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/data/blogs";
import { getAllLocationSlugs, getLocationPageBySlug } from "@/data/locations";
import { SITEMAP_GROUPS } from "@/data/sitemapData";

export const metadata: Metadata = {
  title: "Sitemap | Dr. Mona Dahiya — Fertility & IVF Specialist",
  description:
    "Complete HTML sitemap of Dr. Mona Dahiya's fertility and IVF clinic website including treatments, conditions, clinic locations, patient stories, and blog articles.",
  alternates: {
    canonical: "https://drmonadahiya.com/sitemap",
  },
};

export default function HtmlSitemapPage() {
  const locationItems = getAllLocationSlugs().map((slug) => {
    const page = getLocationPageBySlug(slug);
    return {
      slug,
      href: `/location/${slug}`,
      label: page?.hero.breadcrumbLabel || page?.metadata.title || slug,
    };
  });

  const blogItems = getAllBlogSlugs().map((slug) => {
    const post = getBlogPostBySlug(slug);
    return {
      slug,
      href: `/blog/${slug}`,
      label: post?.hero.title || post?.metadata.title || slug,
    };
  });

  const staticCount = SITEMAP_GROUPS.reduce(
    (sum, group) => sum + group.items.length,
    0
  );
  const totalUrls = staticCount + locationItems.length + blogItems.length;

  return (
    <main className="bg-pink text-ink font-sans">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="mb-10 rounded-2xl border border-rose/15 bg-white p-6 shadow-sm sm:p-10">
          <span className="inline-block rounded-full bg-pink px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose">
            Website Directory
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            HTML Sitemap
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/80">
            Browse all {totalUrls} pages across Dr. Mona Dahiya&apos;s website,
            including IVF &amp; fertility treatments, conditions treated, clinic
            locations across Delhi NCR, patient stories, and educational blog
            articles.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center rounded-lg bg-rose px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-dark"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Static Route Groups */}
        <div className="grid gap-6 md:grid-cols-2">
          {SITEMAP_GROUPS.map((group) => (
            <section
              key={group.title}
              className="rounded-2xl border border-rose/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 border-b border-pink pb-3">
                <div>
                  <h2 className="text-xl font-bold text-navy">{group.title}</h2>
                  <p className="mt-1 text-sm text-ink/70">{group.description}</p>
                </div>
                <span className="shrink-0 rounded-full bg-pink px-2.5 py-0.5 text-xs font-semibold text-rose">
                  {group.items.length}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-baseline justify-between gap-2 rounded-md px-2 py-1 text-sm text-ink transition hover:bg-pink hover:text-rose"
                    >
                      <span className="font-medium group-hover:underline">
                        {item.label}
                      </span>
                      <span className="hidden shrink-0 text-xs text-ink/45 sm:inline">
                        {item.href}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Location Pages */}
        <section className="mt-8 rounded-2xl border border-rose/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-pink pb-4">
            <div>
              <h2 className="text-2xl font-bold text-navy">
                Delhi NCR Location Pages
              </h2>
              <p className="mt-1 text-sm text-ink/70">
                City and neighbourhood fertility clinic guides across Delhi,
                Noida, Ghaziabad, and NCR.
              </p>
            </div>
            <span className="rounded-full bg-pink px-3 py-1 text-xs font-semibold text-rose">
              {locationItems.length} Locations
            </span>
          </div>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {locationItems.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={loc.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-pink hover:text-rose hover:underline"
                >
                  {loc.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Blog Articles */}
        <section className="mt-8 rounded-2xl border border-rose/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-pink pb-4">
            <div>
              <h2 className="text-2xl font-bold text-navy">
                Fertility &amp; IVF Blog Articles
              </h2>
              <p className="mt-1 text-sm text-ink/70">
                Evidence-based guides on IVF, ICSI, IUI, PCOS, Low AMH, egg
                freezing, and reproductive health.
              </p>
            </div>
            <span className="rounded-full bg-pink px-3 py-1 text-xs font-semibold text-rose">
              {blogItems.length} Articles
            </span>
          </div>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {blogItems.map((post) => (
              <li key={post.slug}>
                <Link
                  href={post.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-pink hover:text-rose hover:underline"
                >
                  {post.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
