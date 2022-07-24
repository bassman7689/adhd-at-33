import { formatDate } from "./format-date";

export function blogPath(ds: string, slug: string): string {
  return formatDate(
    ds,
    (day, month, year) => `/${year}/${month}/${day}/${slug}`
  );
}
