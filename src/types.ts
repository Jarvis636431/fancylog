export type FancyLogTheme = "badge" | "banner" | "glow" | "logo" | (string & {});

export type FancyLogOptions = {
  theme?: FancyLogTheme;
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

export type FancyLogFunction = (message: string, options?: FancyLogOptions) => void;
export type FancyGroupFunction = (
  title: string,
  options?: FancyLogOptions,
  fn?: () => void
) => void;

export type FancyLogger = {
  log: FancyLogFunction;
  group: FancyGroupFunction;
  badge: FancyLogFunction;
  banner: FancyLogFunction;
  logo: (text?: string, options?: FancyLogOptions) => void;
  pray: (options?: FancyLogOptions) => void;
  combo: (
    label: string,
    message: string,
    options?: FancyComboOptions
  ) => void;
  multi: (segments: FancySegment[], options?: FancyMultiComboOptions) => void;
};

export type FancyComboOptions = {
  label?: FancyLogOptions;
  text?: FancyLogOptions;
  gap?: string;
};

export type FancySegment = {
  text: string;
  options?: FancyLogOptions;
};

export type FancyMultiComboOptions = {
  gap?: string;
};
