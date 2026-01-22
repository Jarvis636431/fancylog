import { formatText } from "@/format";
import { themes } from "@/themes";
import { mergeOptions, printMulti, printStyled, startGroup } from "@/utils";
import { renderAscii, renderPrayer } from "@/ascii";
import {
  FancyComboOptions,
  FancyMultiComboOptions,
  FancySegment,
  FancyGroupFunction,
  FancyLogFunction,
  FancyLogOptions,
  FancyLogger,
  FancyLogTheme,
} from "@/types";

function resolveOptions(
  options?: FancyLogOptions,
  themeName?: FancyLogTheme
): FancyLogOptions {
  const theme = themeName ? themes[themeName] : undefined;
  if (options && options.theme) {
    return mergeOptions(mergeOptions(themes[options.theme], theme), options);
  }
  return mergeOptions(theme, options);
}

export const log: FancyLogFunction = (message, options) => {
  const resolved = resolveOptions(options);
  const { format, styles, plain } = formatText(String(message), resolved);
  printStyled(format, styles, plain);
};

export const group: FancyGroupFunction = (title, options, fn) => {
  const resolved = resolveOptions(options);
  const { format, styles, plain } = formatText(String(title), resolved);
  startGroup(resolved.collapsed, format, styles, plain);
  if (typeof fn === "function") {
    try {
      fn();
    } finally {
      console.groupEnd();
    }
  }
};

export const badge: FancyLogFunction = (text, options) => {
  const resolved = resolveOptions(options, "badge");
  log(text, resolved);
};

export const banner: FancyLogFunction = (text, options) => {
  const resolved = resolveOptions(options, "banner");
  log(text, resolved);
};

export function logo(text = "fancylog", options?: FancyLogOptions): void {
  const resolved = resolveOptions(options, "logo");
  const art = renderAscii(text);
  const { format, styles, plain } = formatText(art, resolved);
  printStyled(format, styles, plain);
}

export function pray(options?: FancyLogOptions): void {
  const resolved = resolveOptions(options, "logo");
  const art = renderPrayer();
  const { format, styles, plain } = formatText(art, resolved);
  printStyled(format, styles, plain);
}

export function combo(
  label: string,
  message: string,
  options?: FancyComboOptions
): void {
  multi(
    [
      { text: label, options: resolveOptions(options?.label, "badge") },
      { text: message, options: resolveOptions(options?.text) },
    ],
    { gap: options?.gap ?? " " }
  );
}

export function multi(
  segments: FancySegment[],
  options?: FancyMultiComboOptions
): void {
  const gap = options?.gap ?? " ";
  const formats: string[] = [];
  const styles: string[] = [];
  const plainParts: string[] = [];

  segments.forEach((segment, index) => {
    const out = formatText(String(segment.text), segment.options || {});
    formats.push(out.format);
    styles.push(...out.styles);
    plainParts.push(out.plain);
    if (index < segments.length - 1) {
      formats.push(gap);
      plainParts.push(gap);
    }
  });

  printMulti(formats, styles, plainParts);
}

export function createLogger(defaultOptions?: FancyLogOptions): FancyLogger {
  return {
    log: (message, options) => log(message, mergeOptions(defaultOptions, options)),
    group: (title, options, fn) =>
      group(title, mergeOptions(defaultOptions, options), fn),
    badge: (text, options) => badge(text, mergeOptions(defaultOptions, options)),
    banner: (text, options) => banner(text, mergeOptions(defaultOptions, options)),
    logo: (text, options) => logo(text, mergeOptions(defaultOptions, options)),
    combo: (label, message, options) =>
      combo(label, message, {
        label: mergeOptions(defaultOptions, options?.label),
        text: mergeOptions(defaultOptions, options?.text),
      }),
    multi: (segments, options) => {
      const resolvedSegments = segments.map((segment) => ({
        text: segment.text,
        options: mergeOptions(defaultOptions, segment.options),
      }));
      multi(resolvedSegments, options);
    },
  };
}
