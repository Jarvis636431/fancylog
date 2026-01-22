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
