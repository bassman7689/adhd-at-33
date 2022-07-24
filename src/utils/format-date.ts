export type dateFormatFn = (day: string, month: string, year: string) => string;

export function padZero(n: number): string {
  return n.toString().padStart(2, "0");
}

export const defaultFmt: dateFormatFn = (day, month, year) => {
  return `${month}/${day}/${year}`;
};

export function formatDate(
  ds: string,
  fmtFn: dateFormatFn = defaultFmt
): string {
  const date = new Date(ds);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return fmtFn(padZero(day), padZero(month), year.toString());
}
