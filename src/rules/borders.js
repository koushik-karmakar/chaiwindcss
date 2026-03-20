const RADIUS_MAP = {
  none: "0",
  sm: "2px",
  base: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  full: "9999px",
};
const STYLE_MAP = {
  solid: "solid",
  dashed: "dashed",
  dotted: "dotted",
  none: "none",
};

export const borders = {
  b: (v) => ({ border: `${v ?? 1}px solid` }),
  bt: (v) => ({ borderTop: `${v ?? 1}px solid` }),
  br: (v) => ({ borderRight: `${v ?? 1}px solid` }),
  bb: (v) => ({ borderBottom: `${v ?? 1}px solid` }),
  bl: (v) => ({ borderLeft: `${v ?? 1}px solid` }),
  bw: (v) => ({ borderWidth: `${v}px` }),
  rounded: (v) => ({ borderRadius: RADIUS_MAP[v] ?? `${v * 4}px` }),
  "rounded-t": (v) => ({
    borderTopLeftRadius: RADIUS_MAP[v] ?? `${v * 4}px`,
    borderTopRightRadius: RADIUS_MAP[v] ?? `${v * 4}px`,
  }),
  "rounded-b": (v) => ({
    borderBottomLeftRadius: RADIUS_MAP[v] ?? `${v * 4}px`,
    borderBottomRightRadius: RADIUS_MAP[v] ?? `${v * 4}px`,
  }),
  bs: (v) => ({ borderStyle: STYLE_MAP[v] ?? v }),
  outline: (v) => ({ outline: `${v ?? 1}px solid` }),
  "outline-none": () => ({ outline: "none" }),
  ring: (v) => ({ boxShadow: `0 0 0 ${v ?? 3}px rgba(59,130,246,0.5)` }),
};
