# fancylog

Stylized console logging helpers for browser dev easter eggs.

## Install

```bash
pnpm add fancylog
```

## Usage

ESM:

```js
import fancylog from "fancylog";

fancylog.log("Hello Fancy", { color: "#38bdf8", bold: true, size: 18 });
fancylog.badge("DEBUG", { background: "#111827", color: "#38bdf8" });
fancylog.banner("EASTER EGG", { gradient: ["#38bdf8", "#34d399", "#fbbf24"] });
fancylog.logo("fancylog");
fancylog.combo("INFO", "Server started", {
  label: { background: "#0ea5e9", color: "#fff" },
  text: { color: "#0f172a" },
  gap: " ",
});

fancylog.multi(
  [
    { text: "API", options: { background: "#0f172a", color: "#fff", padding: "2px 6px", radius: "6px" } },
    { text: "GET", options: { background: "#10b981", color: "#0f172a", padding: "2px 6px", radius: "6px" } },
    { text: "/users", options: { color: "#0f172a" } },
  ],
  { gap: " " }
);
```

CJS:

```js
const fancylog = require("fancylog");

fancylog.log("Hello Fancy", { color: "#38bdf8", bold: true, size: 18 });
```

## API

```ts
fancylog.log(message: string, options?: FancyLogOptions): void
fancylog.group(title: string, options?: FancyLogOptions, fn?: () => void): void
fancylog.badge(text: string, options?: FancyLogOptions): void
fancylog.banner(text: string, options?: FancyLogOptions): void
fancylog.logo(text?: string, options?: FancyLogOptions): void
fancylog.combo(label: string, message: string, options?: FancyComboOptions): void
fancylog.multi(segments: FancySegment[], options?: FancyMultiComboOptions): void
fancylog.createLogger(defaultOptions?: FancyLogOptions): FancyLogger
```

## Options

```ts
type FancyLogOptions = {
  preset?: "badge" | "banner" | "glow" | "logo";
  color?: string;
  background?: string;
  bold?: boolean;
  size?: number | string;
  padding?: string;
  radius?: string;
  border?: string;
  shadow?: string;
  font?: string;
  letterSpacing?: string;
  transform?: string;
  align?: string;
  display?: string;
  lineHeight?: string;
  margin?: string;
  gradient?: string[];
  collapsed?: boolean;
};

type FancyComboOptions = {
  label?: FancyLogOptions;
  text?: FancyLogOptions;
  gap?: string;
};

type FancySegment = {
  text: string;
  options?: FancyLogOptions;
};

type FancyMultiComboOptions = {
  gap?: string;
};
```

## Presets

```js
fancylog.presets.badge;
fancylog.presets.banner;
fancylog.presets.glow;
```

## ASCII Logo

```ts
fancylog.logo("hello world");
```

## Build

```bash
pnpm run build
```

Outputs ESM + CJS + types into `dist/`.

## Quality

Lint:

```bash
pnpm run lint
```

Format:

```bash
pnpm run format
```

Tests:

```bash
pnpm run test
```
