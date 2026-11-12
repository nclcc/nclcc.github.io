export function isItalianPath(pathname: string) {
  return pathname === "/it" || pathname.startsWith("/it/");
}

export function alternateLanguagePath(pathname: string) {
  if (pathname === "/_not-found") return "/it/";
  return isItalianPath(pathname) ? pathname.slice(3) || "/" : `/it${pathname}`;
}
