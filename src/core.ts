import { formatText } from "./format";
import { presets } from "./presets";
import { mergeOptions } from "./utils";
import { renderAscii } from "./ascii";
import {
  FancyGroupFunction,
  FancyLogFunction,
  FancyLogOptions,
  FancyLogger,
  FancyLogPreset,
} from "./types";

function resolveOptions(
  options?: FancyLogOptions,
  presetName?: FancyLogPreset
): FancyLogOptions {
  const preset = presetName ? presets[presetName] : undefined;
  if (options && options.preset) {
    return mergeOptions(mergeOptions(presets[options.preset], preset), options);
  }
  return mergeOptions(preset, options);
}

export const log: FancyLogFunction = (message, options) => {
  const resolved = resolveOptions(options);
  const { format, styles } = formatText(String(message), resolved);
  console.log(format, ...styles);
};

export const group: FancyGroupFunction = (title, options, fn) => {
  const resolved = resolveOptions(options);
  const { format, styles } = formatText(String(title), resolved);
  const start = resolved.collapsed ? console.groupCollapsed : console.group;
  start(format, ...styles);
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
  const { format, styles } = formatText(art, resolved);
  console.log(format, ...styles);
}

export function createLogger(defaultOptions?: FancyLogOptions): FancyLogger {
  return {
    log: (message, options) => log(message, mergeOptions(defaultOptions, options)),
    group: (title, options, fn) =>
      group(title, mergeOptions(defaultOptions, options), fn),
    badge: (text, options) => badge(text, mergeOptions(defaultOptions, options)),
    banner: (text, options) => banner(text, mergeOptions(defaultOptions, options)),
    logo: (text, options) => logo(text, mergeOptions(defaultOptions, options)),
  };
}
