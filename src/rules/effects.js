const SHADOW_MAP = {
  sm: "0 1px 2px 0 rgb(0 0 0/.05)",
  base: "0 1px 3px 0 rgb(0 0 0/.1),0 1px 2px -1px rgb(0 0 0/.1)",
  md: "0 4px 6px -1px rgb(0 0 0/.1),0 2px 4px -2px rgb(0 0 0/.1)",
  lg: "0 10px 15px -3px rgb(0 0 0/.1),0 4px 6px -4px rgb(0 0 0/.1)",
  xl: "0 20px 25px -5px rgb(0 0 0/.1),0 8px 10px -6px rgb(0 0 0/.1)",
  none: "none",
};
const TRANSITION_MAP = {
  all: "all 150ms ease",
  colors: "color,background-color,border-color 150ms ease",
  opacity: "opacity 150ms ease",
  transform: "transform 150ms ease",
};
const CURSOR_MAP = {
  pointer: "pointer",
  default: "default",
  move: "move",
  "not-allowed": "not-allowed",
  grab: "grab",
  text: "text",
};

export const effects = {
  opacity: (v) => ({ opacity: v / 100 }),
  shadow: (v) => ({ boxShadow: SHADOW_MAP[v ?? "base"] ?? SHADOW_MAP.base }),
  transition: (v) => ({
    transition: TRANSITION_MAP[v ?? "all"] ?? TRANSITION_MAP.all,
  }),
  duration: (v) => ({ transitionDuration: `${v}ms` }),
  cursor: (v) => ({ cursor: CURSOR_MAP[v] ?? v }),
  "select-none": () => ({ userSelect: "none" }),
  "select-all": () => ({ userSelect: "all" }),
  "pointer-events-none": () => ({ pointerEvents: "none" }),
  visible: () => ({ visibility: "visible" }),
  invisible: () => ({ visibility: "hidden" }),
};
