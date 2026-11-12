"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const eventName = "complexa-theme-change";
const getSnapshot = () => document.documentElement.dataset.theme === "dark";
const getServerSnapshot = () => true;

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    const theme = event.newValue === "dark" || event.newValue === "light"
      ? event.newValue
      : "dark";
    document.documentElement.dataset.theme = theme;
    onChange();
  };
  window.addEventListener(eventName, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(eventName, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export default function ThemeToggle({ italian = false }: { italian?: boolean }) {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  function toggle() {
    const next = getSnapshot() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(THEME_STORAGE_KEY, next); } catch { /* The choice still works for this visit. */ }
    window.dispatchEvent(new Event(eventName));
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={italian ? "Tema scuro" : "Dark theme"}
      aria-pressed={dark}
      title={italian ? (dark ? "Passa al tema chiaro" : "Passa al tema scuro") : (dark ? "Switch to light theme" : "Switch to dark theme")}
    >
      <Moon className="theme-icon-moon" size={17} aria-hidden="true" />
      <Sun className="theme-icon-sun" size={17} aria-hidden="true" />
    </button>
  );
}
