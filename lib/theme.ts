export const THEME_STORAGE_KEY = "complexa-theme";

// Runs before the page paints; storage may be unavailable in private browsing.
export const themeInitializationScript = `(() => {
  let theme;
  try { theme = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}); } catch {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = 'dark';
  }
  document.documentElement.dataset.theme = theme;
})();`;
