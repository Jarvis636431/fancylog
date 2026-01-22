import {
  log,
  group,
  badge,
  banner,
  logo,
  pray,
  cat,
  rocket,
  coffee,
  party,
  wave,
  combo,
  multi,
  createLogger,
} from "@/core";
import { themes, registerTheme } from "@/themes";
export type {
  FancyComboOptions,
  FancyMultiComboOptions,
  FancySegment,
  FancyLogOptions,
  FancyLogger,
  FancyLogFunction,
  FancyGroupFunction,
  FancyLogTheme,
} from "@/types";

const fancylog = {
  log,
  group,
  badge,
  banner,
  logo,
  pray,
  cat,
  rocket,
  coffee,
  party,
  wave,
  combo,
  multi,
  createLogger,
  themes,
  registerTheme,
};

export default fancylog;

export const fancyLog = log;
export const fancyGroup = group;
export const fancyBadge = badge;
export const fancyBanner = banner;
export const fancyLogo = logo;
export const fancyPray = pray;
export const fancyCat = cat;
export const fancyRocket = rocket;
export const fancyCoffee = coffee;
export const fancyParty = party;
export const fancyWave = wave;
export const fancyCombo = combo;
export const fancyMulti = multi;
export const fancyCreateLogger = createLogger;
export const fancyThemes = themes;
export const fancyRegisterTheme = registerTheme;
