# fancylog

Stylized console logging helpers for browser dev easter eggs.

## Install

```bash
pnpm add fancylog
```

## Usage

ESM:

```js
import { log, badge, banner, logo, createLogger } from "fancylog";

log("Hello Fancy", { color: "#38bdf8", bold: true, size: 18 });
badge("DEBUG", { background: "#111827", color: "#38bdf8" });
banner("EASTER EGG", { gradient: ["#38bdf8", "#34d399", "#fbbf24"] });
logo("fancylog");

const ui = createLogger({
  color: "#fff",
  background: "#0f172a",
  padding: "4px 8px",
});
ui.log("Scoped logger");
```

CJS:

```js
const { log, badge, banner, createLogger } = require("fancylog");

log("Hello Fancy", { color: "#38bdf8", bold: true, size: 18 });
```

## API

```ts
log(message: string, options?: FancyLogOptions): void
group(title: string, options?: FancyLogOptions, fn?: () => void): void
badge(text: string, options?: FancyLogOptions): void
banner(text: string, options?: FancyLogOptions): void
logo(text?: string, options?: FancyLogOptions): void
createLogger(defaultOptions?: FancyLogOptions): FancyLogger
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
```

## Presets

```js
import { presets } from "fancylog";

presets.badge;
presets.banner;
presets.glow;
```

## ASCII Logo

```ts
logo("hello world");
```

## Build

```bash
pnpm run build
```

Outputs ESM + CJS + types into `dist/`.
