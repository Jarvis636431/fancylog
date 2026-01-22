export function mergeOptions<T extends object, U extends object>(
  base?: T,
  overrides?: U
): T & U {
  return Object.assign({}, base || {}, overrides || {});
}

export function normalizeSize(value?: number | string): string | undefined {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
}

export function supportsConsoleStyles(): boolean {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}

export function printStyled(format: string, styles: string[], plain: string): void {
  if (supportsConsoleStyles()) {
    console.log(format, ...styles);
  } else {
    console.log(plain);
  }
}

export function startGroup(
  collapsed: boolean | undefined,
  format: string,
  styles: string[],
  plain: string
): void {
  const start = collapsed ? console.groupCollapsed : console.group;
  if (supportsConsoleStyles()) {
    start(format, ...styles);
  } else {
    start(plain);
  }
}

export function printMulti(
  formats: string[],
  styles: string[],
  plainParts: string[]
): void {
  if (supportsConsoleStyles()) {
    console.log(formats.join(""), ...styles);
  } else {
    console.log(plainParts.join(""));
  }
}
