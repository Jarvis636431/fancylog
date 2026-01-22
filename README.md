<p align="center">
  <img src="assets/logo.svg" alt="fancylog logo" />
</p>

<p align="center">
  一个用于浏览器控制台的样式化日志工具，适合做开发彩蛋和更清晰的调试输出。
</p>

## 特性

- 浏览器端 `%c` 样式输出
- ASCII 艺术字 Logo 输出
- 多段组合输出（统一间距）
- 主题系统 + 运行时注册
- 自动降级：非浏览器环境输出纯文本

## 安装

```bash
pnpm add fancylog
```

## 使用方式

ESM：

```js
import fancylog from "fancylog";

fancylog.log("Hello Fancy", { color: "#38bdf8", bold: true, size: 18 });
fancylog.badge("DEBUG", { background: "#111827", color: "#38bdf8" });
fancylog.banner("EASTER EGG", { gradient: ["#38bdf8", "#34d399", "#fbbf24"] });
fancylog.logo("fancylog");

fancylog.combo("INFO", "Server started", { gap: " " });

fancylog.multi(
  [{ text: "INFO", options: { theme: "badge" } }, { text: "Server started" }],
  { gap: " " }
);

fancylog.multi(
  [
    {
      text: "API",
      options: {
        background: "#0f172a",
        color: "#fff",
        padding: "2px 6px",
        radius: "6px",
      },
    },
    {
      text: "GET",
      options: {
        background: "#10b981",
        color: "#0f172a",
        padding: "2px 6px",
        radius: "6px",
      },
    },
    { text: "/users", options: { color: "#0f172a" } },
  ],
  { gap: " " }
);
```

按需引用（Tree-shaking）：

```js
import { fancyLog, fancyBadge, fancyCombo } from "fancylog";

fancyLog("Hello Fancy", { color: "#38bdf8", bold: true });
fancyBadge("DEBUG");
fancyCombo("INFO", "Server started");
```

CJS：

```js
const fancylog = require("fancylog");

fancylog.log("Hello Fancy", { color: "#38bdf8", bold: true, size: 18 });
```

## API 详解

| 方法                     | 参数                         | 说明                     | 备注                           |
| ------------------------ | ---------------------------- | ------------------------ | ------------------------------ |
| `fancylog.log`           | `(message, options?)`        | 基础样式日志输出         | `options` 为样式配置           |
| `fancylog.group`         | `(title, options?, fn?)`     | 分组输出，可包裹一段函数 | `options.collapsed` 控制折叠   |
| `fancylog.badge`         | `(text, options?)`           | 使用 `badge` 主题输出    | 主题可被 options 覆盖          |
| `fancylog.banner`        | `(text, options?)`           | 使用 `banner` 主题输出   | 主题可被 options 覆盖          |
| `fancylog.logo`          | `(text?, options?)`          | ASCII 艺术字输出         | `text` 会被渲染为大字          |
| `fancylog.pray`          | `(options?)`                 | ASCII 祈祷图标输出       | 使用 logo 主题                 |
| `fancylog.cat`           | `(options?)`                 | ASCII 猫图标输出         | 使用 logo 主题                 |
| `fancylog.rocket`        | `(options?)`                 | ASCII 火箭图标输出       | 使用 logo 主题                 |
| `fancylog.coffee`        | `(options?)`                 | ASCII 咖啡图标输出       | 使用 logo 主题                 |
| `fancylog.party`         | `(options?)`                 | ASCII 派对图标输出       | 使用 logo 主题                 |
| `fancylog.wave`          | `(options?)`                 | ASCII 挥手图标输出       | 使用 logo 主题                 |
| `fancylog.combo`         | `(label, message, options?)` | 两段组合输出             | 默认 `label` 使用 `badge` 主题 |
| `fancylog.multi`         | `(segments, options?)`       | 多段组合输出             | `options.gap` 控制间距         |
| `fancylog.createLogger`  | `(defaultOptions?)`          | 创建带默认样式的实例     | 适合统一风格                   |
| `fancylog.registerTheme` | `(name, options)`            | 注册自定义主题           | 注册后可用 `theme` 引用        |

## Options 详解

### FancyLogOptions

| 字段            | 类型                                                | 说明                            |
| --------------- | --------------------------------------------------- | ------------------------------- |
| `theme`         | `"badge" \| "banner" \| "glow" \| "logo" \| string` | 使用主题模板                    |
| `color`         | `string`                                            | 文本颜色                        |
| `background`    | `string`                                            | 背景颜色/渐变                   |
| `bold`          | `boolean`                                           | 是否加粗                        |
| `size`          | `number \| string`                                  | 字号，number 会自动加 `px`      |
| `padding`       | `string`                                            | 内边距                          |
| `radius`        | `string`                                            | 圆角                            |
| `border`        | `string`                                            | 边框                            |
| `shadow`        | `string`                                            | 文字阴影                        |
| `font`          | `string`                                            | 字体                            |
| `letterSpacing` | `string`                                            | 字距                            |
| `transform`     | `string`                                            | 文本变换（uppercase 等）        |
| `align`         | `string`                                            | 文本对齐                        |
| `display`       | `string`                                            | display 值                      |
| `lineHeight`    | `string`                                            | 行高                            |
| `margin`        | `string`                                            | 外边距                          |
| `gradient`      | `string[]`                                          | 渐变颜色数组（按字符轮换）      |
| `collapsed`     | `boolean`                                           | 分组是否折叠（仅 `group` 有效） |

### FancyComboOptions

| 字段    | 类型              | 说明           |
| ------- | ----------------- | -------------- |
| `label` | `FancyLogOptions` | 标签段样式     |
| `text`  | `FancyLogOptions` | 内容段样式     |
| `gap`   | `string`          | 标签与内容间距 |

### FancySegment

| 字段      | 类型              | 说明   |
| --------- | ----------------- | ------ |
| `text`    | `string`          | 段文本 |
| `options` | `FancyLogOptions` | 段样式 |

### FancyMultiComboOptions

| 字段  | 类型     | 说明             |
| ----- | -------- | ---------------- |
| `gap` | `string` | 段与段之间的间距 |

## 分组输出

```ts
fancylog.group("Boot", { theme: "badge" }, () => {
  fancylog.log("Init modules");
  fancylog.log("Ready");
});
```

## 主题系统

内置主题：

```js
fancylog.themes.badge;
fancylog.themes.banner;
fancylog.themes.glow;
fancylog.themes.logo;
```

注册自定义主题：

```js
fancylog.registerTheme("warning", {
  color: "#111827",
  background: "#fbbf24",
  padding: "2px 6px",
  radius: "6px",
  bold: true,
});

fancylog.log("Heads up", { theme: "warning" });
```

## ASCII Logo

```ts
fancylog.logo("hello world");
```

## ASCII Pray

```ts
fancylog.pray();
```

## ASCII Icons

```ts
fancylog.cat();
fancylog.rocket();
fancylog.coffee();
fancylog.party();
fancylog.wave();
```

## 自动降级机制

当运行环境不是浏览器（`window` 不存在）时，`%c` 样式会自动失效。  
fancylog 会自动降级为纯文本输出，忽略样式参数，确保 Node 环境也能正常打印。

## Demo

打开 `demo/index.html`，在浏览器控制台查看输出效果。

## 构建

```bash
pnpm run build
```

输出 ESM + CJS + 类型声明到 `dist/`。

## 质量

```bash
pnpm run lint
pnpm run format
pnpm run test
pnpm run test:coverage
```
