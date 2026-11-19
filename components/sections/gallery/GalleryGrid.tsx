"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaExpandAlt, FaTimes } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface GalleryItemData {
  id: string;
  src: string;
  alt: string;
  wide?: boolean;
  ultraWide?: boolean;
}

const ultraWideImageFiles = new Set([
  "IMG_20260813_133713 (1).jpg",
  "IMG_20260813_134222.jpg",
  "WhatsApp Image 2026-05-12 at 6.38.36 PM.jpeg",
]);

const wideImageFiles = new Set([
  "5.jpg",
  "ECS_2050.JPG",
  "ECS_2110.JPG",
  "ECS_2116.JPG",
  "ECS61533.JPG",
  "ECS61549.JPG",
  "LHMC REUNION.JPG",
  "M0500478.jpg",
  ...ultraWideImageFiles,
]);

const galleryImageFiles = [
  "ECS_2050.JPG",
  "1189565907.jpeg",
  "1204522376.jpeg",
  "1597252084.jpg",
  "1602443401.jpeg",
  "ECS_2110.JPG",
  "1607802653.jpg",
  "166907336.jpeg",
  "1758993377.jpg",
  "1907391592.jpg",
  "M0500478.jpg",
  "1962464101.jpeg",
  "1990452690.jpeg",
  "206548300.jpeg",
  "2162582765.jpeg",
  "LHMC REUNION.JPG",
  "2169936274.jpg",
  "2230143795.jpg",
  "2480925783.jpeg",
  "2605817447.jpeg",
  "ECS_2116.JPG",
  "2609593685.jpeg",
  "2732257609.jpg",
  "288260690.jpg",
  "2923368161.jpeg",
  "ECS61533.JPG",
  "2942957944.jpg",
  "3063628241.jpeg",
  "3072566767.jpeg",
  "3092741929.jpeg",
  "ECS61549.JPG",
  "3116298800.jpeg",
  "3135102946.jpg",
  "3148831349.jpeg",
  "3177618561.jpeg",
  "IMG_20260813_133713 (1).jpg",
  "3191323732.jpeg",
  "3433885741.jpg",
  "3499710315.jpg",
  "3531011697.jpeg",
  "IMG_20260813_134222.jpg",
  "3565562632.jpg",
  "3587478081.jpeg",
  "3595599613.jpeg",
  "3748526087.jpg",
  "5.jpg",
  "3839431400.webp",
  "3989814099.jpg",
  "4052404361.jpeg",
  "4069670618.jpg",
  "WhatsApp Image 2026-05-12 at 6.38.36 PM.jpeg",
  "4082692111.jpeg",
  "4161776517.jpg",
  "4215327288.jpg",
  "4265644867.jpg",
  "4271621534.jpeg",
  "438260864.jpeg",
  "454448835.jpeg",
  "519188390.jpeg",
  "621025601.jpeg",
  "707192920.jpeg",
  "776180035.jpg",
  "81243615.jpeg",
  "898263377.jpg",
  "999815180.jpeg",
  "IMG_0605.jpeg",
  "IMG_0636.jpeg",
  "IMG_0651.jpeg",
  "IMG_0662.jpeg",
  "IMG_0681.jpeg",
  "IMG_0687.jpeg",
  "WhatsApp Image 2026-05-12 at 6.37.37 PM.jpeg",
  "WhatsApp Image 2026-05-12 at 6.41.05 PM.jpeg",
  "WhatsApp Image 2026-05-12 at 6.46.46 PM.jpeg",
  "WhatsApp Image 2026-11-18 at 4.42.14 PM.jpeg",
  "WhatsApp Image 2026-11-18 at 4.42.26 PM.jpeg",
];

const galleryItems: GalleryItemData[] = galleryImageFiles.map((file, idx) => ({
  id: `gallery-${idx + 1}`,
  src: `/GalleryImages/${file}`,
  alt: `Dr. Mona Dahiya Gallery Moment ${idx + 1}`,
  wide: wideImageFiles.has(file),
  ultraWide: ultraWideImageFiles.has(file),
}));

const SLOTS_PER_PAGE = 16;

type PagedGalleryItem = GalleryItemData & { globalIndex: number };

const galleryPages: PagedGalleryItem[][] = (() => {
  const remaining: PagedGalleryItem[] = galleryItems.map((item, globalIndex) => ({
    ...item,
    globalIndex,
  }));
  const pages: PagedGalleryItem[][] = [];

  while (remaining.length > 0) {
    const page: PagedGalleryItem[] = [];
    let slots = 0;

    while (remaining.length > 0 && slots < SLOTS_PER_PAGE) {
      const spaceLeft = SLOTS_PER_PAGE - slots;
      const nextIdx = remaining.findIndex(
        (item) => (item.wide ? 2 : 1) <= spaceLeft,
      );
      if (nextIdx === -1) break;
      const [picked] = remaining.splice(nextIdx, 1);
      page.push(picked);
      slots += picked.wide ? 2 : 1;
    }

    if (remaining.length > 0 && remaining.length <= 7) {
      page.push(...remaining.splice(0, remaining.length));
    }

    pages.push(page);
  }

  return pages;
})();

export default function GalleryGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const totalPages = galleryPages.length;
  const paginatedItems = galleryPages[currentPage - 1] ?? [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryItems.length) % galleryItems.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length,
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <section
      ref={sectionRef}
      id="gallery-grid"
      className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      <div className="page-container relative">
        <Reveal>
          <div className="mb-6 sm:mb-8">
            <p className="font-semibold tracking-wide text-rose">
              Moments &amp; Milestones
            </p>
            <h2 className="mt-1.5 text-ink">
              Clinic, Conferences &amp; Patient Moments
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-flow-dense grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {paginatedItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(item.globalIndex)}
              className={`group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-[#fde2ec] bg-pink text-left shadow-[0_8px_22px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/45 hover:shadow-[0_14px_32px_rgba(232,62,116,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose ${
                item.wide ? "aspect-[3/2] sm:col-span-2" : "aspect-[5/7]"
              }`}
              aria-label={`View ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={currentPage === 1 && idx < 4}
                sizes={
                  item.wide
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                  item.wide ? "object-[50%_22%]" : "object-top"
                }`}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-navy/80 text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100"
              >
                <FaExpandAlt className="size-3.5" />
              </span>
            </button>
          ))}
        </div>

        {/* Pagination Controls */}
        <nav
          aria-label="Gallery pagination"
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10"
        >
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full border border-[#fde2ec] bg-white px-4 text-[13px] font-semibold text-ink transition hover:border-rose hover:text-rose disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaChevronLeft className="size-3" />
            <span>Prev</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-[13px] font-semibold transition ${
                  isActive
                    ? "bg-rose text-white shadow-[0_6px_16px_rgba(232,62,116,0.3)]"
                    : "border border-[#fde2ec] bg-white text-ink hover:border-rose hover:text-rose"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full border border-[#fde2ec] bg-white px-4 text-[13px] font-semibold text-ink transition hover:border-rose hover:text-rose disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span>Next</span>
            <FaChevronRight className="size-3" />
          </button>
        </nav>
      </div>

      {selectedIndex !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy/92 p-4 backdrop-blur-xs sm:p-8"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery viewer"
              className="absolute top-4 right-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-rose hover:text-white sm:top-6 sm:right-6"
            >
              <FaTimes className="size-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-rose hover:text-white sm:left-6 sm:size-11"
            >
              <FaChevronLeft className="size-4" />
            </button>

            <div
              className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-white/20 bg-navy"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <div className="absolute right-4 bottom-4 rounded-full bg-navy/80 px-3.5 py-1 text-[12px] font-semibold text-white">
                {selectedIndex + 1} / {galleryItems.length}
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:bg-rose hover:text-white sm:right-6 sm:size-11"
            >
              <FaChevronRight className="size-4" />
            </button>
          </div>,
          document.body,
        )}
    </section>
  );
}
