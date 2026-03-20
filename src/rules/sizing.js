const FRACTION_MAP = {
  full: "100%",
  screen: "100vw",
  svw: "100svw",
  half: "50%",
  auto: "auto",
  fit: "fit-content",
  min: "min-content",
  max: "max-content",
};

const toSize = (v) => FRACTION_MAP[v] ?? `${v * 4}px`;

export const sizing = {
  w: (v) => ({ width: toSize(v) }),
  h: (v) => ({ height: toSize(v) }),
  "min-w": (v) => ({ minWidth: toSize(v) }),
  "max-w": (v) => ({ maxWidth: toSize(v) }),
  "min-h": (v) => ({ minHeight: toSize(v) }),
  "max-h": (v) => ({ maxHeight: toSize(v) }),
  size: (v) => ({ width: toSize(v), height: toSize(v) }),
};
