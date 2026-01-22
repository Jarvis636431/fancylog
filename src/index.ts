import { log, group, badge, banner, logo, combo, multi, createLogger } from "./core";
import { presets } from "./presets";
export type {
  FancyComboOptions,
  FancyMultiComboOptions,
  FancySegment,
  FancyLogOptions,
  FancyLogger,
  FancyLogFunction,
  FancyGroupFunction,
  FancyLogPreset,
} from "./types";

const fancylog = {
  log,
  group,
  badge,
  banner,
  logo,
  combo,
  multi,
  createLogger,
  presets,
};

export default fancylog;
