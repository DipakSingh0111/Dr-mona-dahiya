"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function forceScrollTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && document.getElementById(hash)) return;

    forceScrollTop();
  }, [pathname]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && document.getElementById(hash)) return;

    forceScrollTop();
    const frame = requestAnimationFrame(forceScrollTop);
    const t1 = window.setTimeout(forceScrollTop, 0);
    const t2 = window.setTimeout(forceScrollTop, 50);
    const t3 = window.setTimeout(forceScrollTop, 150);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [pathname]);

  return null;
}
