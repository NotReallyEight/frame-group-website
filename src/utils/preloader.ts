/**
 * Checks if the page was refreshed
 * @returns - Whether the page was refreshed or not
 */
export const isPageRefresh = (): boolean => {
  if (typeof window === "undefined") return false;

  const entries = performance.getEntriesByType("navigation");
  const nav = entries[0] as PerformanceNavigationTiming | undefined;
  console.log("🚀 ~ isPageRefresh ~ nav:", nav);

  if (!nav) return false;

  return nav.type === "reload";
};
