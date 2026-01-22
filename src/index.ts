import { log, group, badge, banner, logo, pray, combo, multi, createLogger } from "@/core";
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
  combo,
  multi,
  createLogger,
  themes,
  registerTheme,
};

export default fancylog;
