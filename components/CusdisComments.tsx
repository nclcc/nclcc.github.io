"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Cusdis comment thread for a post.
 *
 * Requires `NEXT_PUBLIC_CUSDIS_APP_ID` to be set at build time (the UUID of
 * your site in the Cusdis dashboard at https://cusdis.com). If unset, the
 * component renders a small placeholder explaining the missing config — keeps
 * the build working in local dev without secrets.
 *
 * Each post gets its own thread keyed on the pathname.
 */
export default function CusdisComments({ title }: { title: string }) {
  const pathname = usePathname() || "/";
  const containerRef = useRef<HTMLDivElement>(null);
  const appId = process.env.NEXT_PUBLIC_CUSDIS_APP_ID;

  useEffect(() => {
    if (!appId || !containerRef.current) return;

    // Cusdis embed script — loaded once per page
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-cusdis="loader"]',
    );
    if (existing) {
      // Already loaded; if the script exposes a global re-init API, call it
      // (Cusdis exposes window.CUSDIS for SPA re-rendering).
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cusdis = (window as any).CUSDIS;
      if (cusdis && typeof cusdis.initial === "function") cusdis.initial();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    script.dataset.cusdis = "loader";
    document.body.appendChild(script);
  }, [appId, pathname]);

  // No app ID configured → render nothing (silent fail). When the env var is
  // set at build time, the full thread renders below.
  if (!appId) return null;

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.origin + pathname
      : `https://nclcc.github.io${pathname}`;

  return (
    <div className="mt-12">
      <hr className="hr-bk mb-6" />
      <h3
        className="font-serif text-xl font-semibold mb-4"
        style={{ color: "var(--bk-green-dk)" }}
      >
        Comments
      </h3>
      <div
        ref={containerRef}
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id={appId}
        data-page-id={pathname}
        data-page-url={pageUrl}
        data-page-title={title}
        data-theme="dark"
      />
    </div>
  );
}
