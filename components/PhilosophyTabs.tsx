"use client";

import { useState } from "react";

const TABS = [
  {
    title: "Extremes Are Not Rare",
    body:
      "Most analysis assumes the future will look like the average past — that shocks are uncommon, that big surprises are flukes. For political systems, financial markets, and human institutions, that assumption is wrong. Crises, collapses, and runaway events aren't outliers to be set aside. They are how these systems actually change.",
  },
  {
    title: "What Can and Can't Be Predicted",
    body:
      "In systems where small shocks compound and old patterns keep echoing forward, predicting specific events — who wins which election, when a market will crack — is not just hard. Past a certain horizon, it stops being mathematically meaningful. What you can know is the state of the system right now: stable, under stress, or close to a tipping point. Good analysis is the discipline of answering only the questions that admit honest answers.",
  },
  {
    title: "Crises Travel Together",
    body:
      "No serious crisis happens in isolation. Food prices spike and politics fragment. Banks wobble and supply chains seize. Public anger sharpens and institutions strain. The hidden multiplier in every breakdown is how it spreads across domains that look unrelated. Analysis that watches each domain on its own will miss it. The warning signs live in how they move together.",
  },
  {
    title: "Hard Methods, Honest Answers",
    body:
      "Using statistical methods built for the unusual and the rare — instead of the convenient and the familiar — isn't about looking technical. It's about not fooling yourself. Standard statistics work beautifully on data that behaves nicely. They produce confidently wrong answers when the data doesn't. The honest path is accepting where ordinary tools break down, and building better ones that take heavy-tailed risk, long memory, and structural change seriously.",
  },
  {
    title: "Patterns Repeat at Every Scale",
    body:
      "Complex systems repeat themselves at different time horizons. The shape of stress visible in daily data echoes the shape visible in monthly and yearly data — not in magnitude, but in structure. That's not a mathematical curiosity; it's a tool. Reading the same underlying signature across short, medium, and long timeframes at once turns a noisy stream of data into a continuous read on where a system actually stands — and how it's moving.",
  },
  {
    title: "What We Know Has a Half-Life",
    body:
      "Knowledge about how a system works has a shelf life — and the shelf life is shorter when there are more thinking, acting things inside it. Physics is the most stable because matter doesn't model itself. Ecosystems are harder. Economies harder still. And now, with humans rewriting the atmosphere, reshaping ecosystems, and introducing materials nothing evolved alongside, the biosphere joins that list. The more intelligent activity is involved in a system, the more rigour you need, not less.",
  },
];

const CLOSING =
  "These principles were not derived from theory alone. They were forged in enterprise-scale practice — in the persistent gap between what convenient models predict and what complex systems actually do.";

export default function PhilosophyTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div>
      {/* Tab strip — horizontally scrollable on narrow screens, wraps on wider */}
      <div
        role="tablist"
        aria-label="Philosophy tabs"
        className="flex sm:flex-wrap gap-1 border-b mb-6 -mx-1 overflow-x-auto sm:overflow-visible whitespace-nowrap sm:whitespace-normal scrollbar-thin"
        style={{ borderColor: "var(--bk-rule)" }}
      >
        {TABS.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.title}
              role="tab"
              aria-selected={isActive}
              aria-controls={`phil-panel-${i}`}
              id={`phil-tab-${i}`}
              onClick={() => setActive(i)}
              className="px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-mono tracking-wide transition border-b-2 -mb-px shrink-0"
              style={{
                color: isActive ? "var(--bk-green-dk)" : "var(--bk-ink-lt)",
                borderBottomColor: isActive ? "var(--bk-sienna)" : "transparent",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              <span className="opacity-50 mr-1.5">{String(i + 1).padStart(2, "0")}</span>
              {t.title}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`phil-panel-${active}`}
        aria-labelledby={`phil-tab-${active}`}
        key={active}
        className="animate-fade-up"
      >
        <h3
          className="font-serif text-xl font-semibold mb-3"
          style={{ color: "var(--bk-green-dk)" }}
        >
          {tab.title}
        </h3>
        <p className="leading-relaxed text-[1.0625rem]" style={{ color: "var(--bk-ink)" }}>
          {tab.body}
        </p>
      </div>

      {/* Closing */}
      <blockquote
        className="mt-10 pl-4 border-l-2 italic text-sm leading-relaxed"
        style={{ borderColor: "var(--bk-sienna)", color: "var(--bk-ink-mid)" }}
      >
        “{CLOSING}”
      </blockquote>
    </div>
  );
}
