import { FancyLogOptions } from "./types";

export const themes: Record<string, FancyLogOptions> = {
  badge: {
    color: "#ffffff",
    background: "#111827",
    padding: "2px 6px",
    radius: "6px",
    bold: true,
    size: 12,
  },
  banner: {
    color: "#0f172a",
    background: "linear-gradient(90deg, #38bdf8, #34d399)",
    padding: "6px 12px",
    radius: "10px",
    bold: true,
    size: 16,
  },
  glow: {
    color: "#ffffff",
    background: "#111827",
    padding: "4px 10px",
    radius: "10px",
    shadow: "0 0 12px rgba(56,189,248,0.9)",
    bold: true,
  },
  logo: {
    color: "#38bdf8",
    background: "#0f172a",
    padding: "8px 12px",
    radius: "10px",
    bold: true,
    font: "monospace",
    lineHeight: "1.2",
  },
};

export function registerTheme(name: string, options: FancyLogOptions): void {
  themes[name] = options;
}
