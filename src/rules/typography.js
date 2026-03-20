const SIZE_MAP = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px",
  "5xl": "48px",
};
const WEIGHT_MAP = {
  thin: "100",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  black: "900",
};
const LEADING_MAP = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

export const typography = {
  text: (v) =>
    SIZE_MAP[v] ? { fontSize: SIZE_MAP[v] } : { fontSize: `${v * 4}px` },
  fw: (v) =>
    WEIGHT_MAP[v] ? { fontWeight: WEIGHT_MAP[v] } : { fontWeight: v },
  leading: (v) =>
    LEADING_MAP[v] ? { lineHeight: LEADING_MAP[v] } : { lineHeight: v },
  tracking: (v) => ({ letterSpacing: `${v * 0.05}em` }),
  indent: (v) => ({ textIndent: `${v * 4}px` }),
  uppercase: () => ({ textTransform: "uppercase" }),
  lowercase: () => ({ textTransform: "lowercase" }),
  capitalize: () => ({ textTransform: "capitalize" }),
  italic: () => ({ fontStyle: "italic" }),
  underline: () => ({ textDecoration: "underline" }),
  "line-through": () => ({ textDecoration: "line-through" }),
  "no-underline": () => ({ textDecoration: "none" }),
  "text-left": () => ({ textAlign: "left" }),
  "text-center": () => ({ textAlign: "center" }),
  "text-right": () => ({ textAlign: "right" }),
  truncate: () => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),
};
