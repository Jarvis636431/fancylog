export type FancyLogPreset = "badge" | "banner" | "glow" | "logo";

export type FancyLogOptions = {
  preset?: FancyLogPreset;
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
};
