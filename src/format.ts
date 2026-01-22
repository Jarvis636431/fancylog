import { FancyLogOptions } from "./types";
import { mergeOptions, normalizeSize } from "./utils";

export function buildCss(options: FancyLogOptions): string {
  const css: string[] = [];
  if (options.color) css.push(`color:${options.color}`);
  if (options.background) css.push(`background:${options.background}`);
  if (options.bold) css.push("font-weight:700");
  if (options.size) css.push(`font-size:${normalizeSize(options.size)}`);
  if (options.padding) css.push(`padding:${options.padding}`);
  if (options.radius) css.push(`border-radius:${options.radius}`);
  if (options.border) css.push(`border:${options.border}`);
  if (options.shadow) css.push(`text-shadow:${options.shadow}`);
  if (options.font) css.push(`font-family:${options.font}`);
  if (options.letterSpacing) css.push(`letter-spacing:${options.letterSpacing}`);
  if (options.transform) css.push(`text-transform:${options.transform}`);
  if (options.align) css.push(`text-align:${options.align}`);
  if (options.display) css.push(`display:${options.display}`);
  if (options.lineHeight) css.push(`line-height:${options.lineHeight}`);
  if (options.margin) css.push(`margin:${options.margin}`);
  return css.join(";");
}

export function formatText(
  text: string,
  options: FancyLogOptions
): { format: string; styles: string[]; plain: string } {
  if (options.gradient && options.gradient.length >= 2) {
    const styles: string[] = [];
    const parts: string[] = [];
    const colors = options.gradient;

    for (let i = 0; i < text.length; i += 1) {
      const color = colors[i % colors.length];
      const nextOptions = mergeOptions(options, { color });
      styles.push(buildCss(nextOptions));
      parts.push(`%c${text[i]}`);
    }

    return { format: parts.join(""), styles, plain: text };
  }

  return {
    format: `%c${text}`,
    styles: [buildCss(options)],
    plain: text,
  };
}
