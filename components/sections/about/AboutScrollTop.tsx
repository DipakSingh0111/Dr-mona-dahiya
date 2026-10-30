"use client";

import { useLayoutEffect } from "react";

/** Ensures /about (no hash) paints from the top, not a restored mid-page position. */
export default function AboutScrollTop() {
  useLayoutEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return null;
}
