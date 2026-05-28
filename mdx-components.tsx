import type { MDXComponents } from "mdx/types";

// Map MDX elements to plain HTML — styling is provided by the .prose-bk
// container wrapped around them in the post layout (see app/posts/layout.tsx).
// This file MUST live at the repo root to be picked up by @next/mdx.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
