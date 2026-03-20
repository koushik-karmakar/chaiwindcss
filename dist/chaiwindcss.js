var ChaiWindCSS = (() => {
  // src/rules/spacing.js
  var UNIT = 4;
  var spacing = {
    p: (v) => ({ padding: `${v * UNIT}px` }),
    m: (v) => ({ margin: `${v * UNIT}px` }),
    px: (v) => ({ paddingLeft: `${v * UNIT}px`, paddingRight: `${v * UNIT}px` }),
    py: (v) => ({ paddingTop: `${v * UNIT}px`, paddingBottom: `${v * UNIT}px` }),
    pt: (v) => ({ paddingTop: `${v * UNIT}px` }),
    pb: (v) => ({ paddingBottom: `${v * UNIT}px` }),
    pl: (v) => ({ paddingLeft: `${v * UNIT}px` }),
    pr: (v) => ({ paddingRight: `${v * UNIT}px` }),
    mt: (v) => ({ marginTop: `${v * UNIT}px` }),
    mb: (v) => ({ marginBottom: `${v * UNIT}px` }),
    ml: (v) => ({ marginLeft: `${v * UNIT}px` }),
    mr: (v) => ({ marginRight: `${v * UNIT}px` }),
    mx: (v) => ({ marginLeft: `${v * UNIT}px`, marginRight: `${v * UNIT}px` }),
    my: (v) => ({ marginTop: `${v * UNIT}px`, marginBottom: `${v * UNIT}px` }),
    gap: (v) => ({ gap: `${v * UNIT}px` }),
    "gap-x": (v) => ({ columnGap: `${v * UNIT}px` }),
    "gap-y": (v) => ({ rowGap: `${v * UNIT}px` })
  };

  // src/rules/typography.js
  var SIZE_MAP = {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px"
  };
  var WEIGHT_MAP = {
    thin: "100",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    black: "900"
  };
  var LEADING_MAP = {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  };
  var typography = {
    text: (v) => SIZE_MAP[v] ? { fontSize: SIZE_MAP[v] } : { fontSize: `${v * 4}px` },
    fw: (v) => WEIGHT_MAP[v] ? { fontWeight: WEIGHT_MAP[v] } : { fontWeight: v },
    leading: (v) => LEADING_MAP[v] ? { lineHeight: LEADING_MAP[v] } : { lineHeight: v },
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
      whiteSpace: "nowrap"
    })
  };

  // src/rules/sizing.js
  var FRACTION_MAP = {
    full: "100%",
    screen: "100vw",
    svw: "100svw",
    half: "50%",
    auto: "auto",
    fit: "fit-content",
    min: "min-content",
    max: "max-content"
  };
  var toSize = (v) => FRACTION_MAP[v] ?? `${v * 4}px`;
  var sizing = {
    w: (v) => ({ width: toSize(v) }),
    h: (v) => ({ height: toSize(v) }),
    "min-w": (v) => ({ minWidth: toSize(v) }),
    "max-w": (v) => ({ maxWidth: toSize(v) }),
    "min-h": (v) => ({ minHeight: toSize(v) }),
    "max-h": (v) => ({ maxHeight: toSize(v) }),
    size: (v) => ({ width: toSize(v), height: toSize(v) })
  };

  // src/rules/colors.js
  var PALETTE = {
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
    // color shades from 50 to 950 in increments of 50, with some extra 150,
    //  250, 350, 450, 550, 650, 750, 850 for more granularity
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      150: "#fed6d6",
      200: "#fecaca",
      250: "#fdb8b8",
      300: "#fca5a5",
      350: "#fa8b8b",
      400: "#f87171",
      450: "#f45b5b",
      500: "#ef4444",
      550: "#e63535",
      600: "#dc2626",
      650: "#cb2121",
      700: "#b91c1c",
      750: "#a91c1c",
      800: "#991b1b",
      850: "#8c1c1c",
      900: "#7f1d1d",
      950: "#4c1111"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      150: "#cde3fe",
      200: "#bfdbfe",
      250: "#a9d0fe",
      300: "#93c5fd",
      350: "#7ab5fc",
      400: "#60a5fa",
      450: "#4e94f8",
      500: "#3b82f6",
      550: "#3073f1",
      600: "#2563eb",
      650: "#2159e2",
      700: "#1d4ed8",
      750: "#1e47c4",
      800: "#1e40af",
      850: "#1e3d9d",
      900: "#1e3a8a",
      950: "#122353"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      150: "#ccfadc",
      200: "#bbf7d0",
      250: "#a1f3be",
      300: "#86efac",
      350: "#68e796",
      400: "#4ade80",
      450: "#36d26f",
      500: "#22c55e",
      550: "#1cb454",
      600: "#16a34a",
      650: "#169244",
      700: "#15803d",
      750: "#167339",
      800: "#166534",
      850: "#155c31",
      900: "#14532d",
      950: "#0c321b"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      150: "#fef5a7",
      200: "#fef08a",
      250: "#fee869",
      300: "#fde047",
      350: "#fcd62e",
      400: "#facc15",
      450: "#f2c00f",
      500: "#eab308",
      550: "#da9f06",
      600: "#ca8a04",
      650: "#b67606",
      700: "#a16207",
      750: "#93580b",
      800: "#854d0e",
      850: "#7b4610",
      900: "#713f12",
      950: "#44260b"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      150: "#eedfff",
      200: "#e9d5ff",
      250: "#e1c5ff",
      300: "#d8b4fe",
      350: "#cc9cfd",
      400: "#c084fc",
      450: "#b46dfa",
      500: "#a855f7",
      550: "#9e44f1",
      600: "#9333ea",
      650: "#892bdc",
      700: "#7e22ce",
      750: "#7522bb",
      800: "#6b21a8",
      850: "#621f98",
      900: "#581c87",
      950: "#351151"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      150: "#fcdbee",
      200: "#fbcfe8",
      250: "#fabcde",
      300: "#f9a8d4",
      350: "#f78dc5",
      400: "#f472b6",
      450: "#f05da8",
      500: "#ec4899",
      550: "#e43888",
      600: "#db2777",
      650: "#cd206a",
      700: "#be185d",
      750: "#ae1855",
      800: "#9d174d",
      850: "#901848",
      900: "#831843",
      950: "#4f0e28"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      150: "#eceef1",
      200: "#e5e7eb",
      250: "#dbdee3",
      300: "#d1d5db",
      350: "#b7bcc5",
      400: "#9ca3af",
      450: "#848b98",
      500: "#6b7280",
      550: "#5b6472",
      600: "#4b5563",
      650: "#414b5a",
      700: "#374151",
      750: "#2b3544",
      800: "#1f2937",
      850: "#18212f",
      900: "#111827",
      950: "#0a0e17"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      150: "#ffe2c0",
      200: "#fed7aa",
      250: "#fec98f",
      300: "#fdba74",
      350: "#fca658",
      400: "#fb923c",
      450: "#fa8329",
      500: "#f97316",
      550: "#f26611",
      600: "#ea580c",
      650: "#d64d0c",
      700: "#c2410c",
      750: "#ae3b0f",
      800: "#9a3412",
      850: "#8b3112",
      900: "#7c2d12",
      950: "#4a1b0b"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      150: "#b3f9eb",
      200: "#99f6e4",
      250: "#7cf0dc",
      300: "#5eead4",
      350: "#46dfca",
      400: "#2dd4bf",
      450: "#21c6b3",
      500: "#14b8a6",
      550: "#11a697",
      600: "#0d9488",
      650: "#0e857b",
      700: "#0f766e",
      750: "#106a64",
      800: "#115e59",
      850: "#125652",
      900: "#134e4a",
      950: "#0b2f2c"
    }
  };
  var resolveColor = (name, shade) => {
    if (shade === void 0 || shade === null) {
      if (!PALETTE[name]) return null;
      return typeof PALETTE[name] === "string" ? PALETTE[name] : null;
    }
    return PALETTE[name]?.[shade] ?? null;
  };
  var colors = {
    bg: (name, shade) => {
      const color = resolveColor(name, shade);
      return color ? { backgroundColor: color } : null;
    },
    color: (name, shade) => {
      const color = resolveColor(name, shade);
      return color ? { color } : null;
    },
    "border-color": (name, shade) => {
      const color = resolveColor(name, shade);
      return color ? { borderColor: color } : null;
    },
    "outline-color": (name, shade) => {
      const color = resolveColor(name, shade);
      return color ? { outlineColor: color } : null;
    }
  };

  // src/rules/layout.js
  var layout = {
    flex: () => ({ display: "flex" }),
    "inline-flex": () => ({ display: "inline-flex" }),
    grid: () => ({ display: "grid" }),
    "inline-grid": () => ({ display: "inline-grid" }),
    block: () => ({ display: "block" }),
    inline: () => ({ display: "inline" }),
    "inline-block": () => ({ display: "inline-block" }),
    hidden: () => ({ display: "none" }),
    "flex-row": () => ({ flexDirection: "row" }),
    "flex-col": () => ({ flexDirection: "column" }),
    "flex-wrap": () => ({ flexWrap: "wrap" }),
    "flex-nowrap": () => ({ flexWrap: "nowrap" }),
    "items-start": () => ({ alignItems: "flex-start" }),
    "items-center": () => ({ alignItems: "center" }),
    "items-end": () => ({ alignItems: "flex-end" }),
    "items-stretch": () => ({ alignItems: "stretch" }),
    "justify-start": () => ({ justifyContent: "flex-start" }),
    "justify-center": () => ({ justifyContent: "center" }),
    "justify-end": () => ({ justifyContent: "flex-end" }),
    "justify-between": () => ({ justifyContent: "space-between" }),
    "justify-around": () => ({ justifyContent: "space-around" }),
    "flex-1": () => ({ flex: "1 1 0%" }),
    "flex-auto": () => ({ flex: "1 1 auto" }),
    "flex-none": () => ({ flex: "none" }),
    grow: () => ({ flexGrow: "1" }),
    shrink: () => ({ flexShrink: "1" }),
    "grid-cols": (v) => ({ gridTemplateColumns: `repeat(${v}, minmax(0, 1fr))` }),
    "col-span": (v) => ({ gridColumn: `span ${v} / span ${v}` }),
    "overflow-hidden": () => ({ overflow: "hidden" }),
    "overflow-auto": () => ({ overflow: "auto" }),
    "overflow-scroll": () => ({ overflow: "scroll" })
  };

  // src/rules/borders.js
  var RADIUS_MAP = {
    none: "0",
    sm: "2px",
    base: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "24px",
    full: "9999px"
  };
  var STYLE_MAP = {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    none: "none"
  };
  var borders = {
    b: (v) => ({ border: `${v ?? 1}px solid` }),
    bt: (v) => ({ borderTop: `${v ?? 1}px solid` }),
    br: (v) => ({ borderRight: `${v ?? 1}px solid` }),
    bb: (v) => ({ borderBottom: `${v ?? 1}px solid` }),
    bl: (v) => ({ borderLeft: `${v ?? 1}px solid` }),
    bw: (v) => ({ borderWidth: `${v}px` }),
    rounded: (v) => ({ borderRadius: RADIUS_MAP[v] ?? `${v * 4}px` }),
    "rounded-t": (v) => ({
      borderTopLeftRadius: RADIUS_MAP[v] ?? `${v * 4}px`,
      borderTopRightRadius: RADIUS_MAP[v] ?? `${v * 4}px`
    }),
    "rounded-b": (v) => ({
      borderBottomLeftRadius: RADIUS_MAP[v] ?? `${v * 4}px`,
      borderBottomRightRadius: RADIUS_MAP[v] ?? `${v * 4}px`
    }),
    bs: (v) => ({ borderStyle: STYLE_MAP[v] ?? v }),
    outline: (v) => ({ outline: `${v ?? 1}px solid` }),
    "outline-none": () => ({ outline: "none" }),
    ring: (v) => ({ boxShadow: `0 0 0 ${v ?? 3}px rgba(59,130,246,0.5)` })
  };

  // src/rules/effects.js
  var SHADOW_MAP = {
    sm: "0 1px 2px 0 rgb(0 0 0/.05)",
    base: "0 1px 3px 0 rgb(0 0 0/.1),0 1px 2px -1px rgb(0 0 0/.1)",
    md: "0 4px 6px -1px rgb(0 0 0/.1),0 2px 4px -2px rgb(0 0 0/.1)",
    lg: "0 10px 15px -3px rgb(0 0 0/.1),0 4px 6px -4px rgb(0 0 0/.1)",
    xl: "0 20px 25px -5px rgb(0 0 0/.1),0 8px 10px -6px rgb(0 0 0/.1)",
    none: "none"
  };
  var TRANSITION_MAP = {
    all: "all 150ms ease",
    colors: "color,background-color,border-color 150ms ease",
    opacity: "opacity 150ms ease",
    transform: "transform 150ms ease"
  };
  var CURSOR_MAP = {
    pointer: "pointer",
    default: "default",
    move: "move",
    "not-allowed": "not-allowed",
    grab: "grab",
    text: "text"
  };
  var effects = {
    opacity: (v) => ({ opacity: v / 100 }),
    shadow: (v) => ({ boxShadow: SHADOW_MAP[v ?? "base"] ?? SHADOW_MAP.base }),
    transition: (v) => ({
      transition: TRANSITION_MAP[v ?? "all"] ?? TRANSITION_MAP.all
    }),
    duration: (v) => ({ transitionDuration: `${v}ms` }),
    cursor: (v) => ({ cursor: CURSOR_MAP[v] ?? v }),
    "select-none": () => ({ userSelect: "none" }),
    "select-all": () => ({ userSelect: "all" }),
    "pointer-events-none": () => ({ pointerEvents: "none" }),
    visible: () => ({ visibility: "visible" }),
    invisible: () => ({ visibility: "hidden" })
  };

  // src/rules/position.js
  var position = {
    "relative": () => ({ position: "relative" }),
    "absolute": () => ({ position: "absolute" }),
    "fixed": () => ({ position: "fixed" }),
    "sticky": () => ({ position: "sticky" }),
    "static": () => ({ position: "static" }),
    "top": (v) => ({ top: `${v * 4}px` }),
    "right": (v) => ({ right: `${v * 4}px` }),
    "bottom": (v) => ({ bottom: `${v * 4}px` }),
    "left": (v) => ({ left: `${v * 4}px` }),
    "z": (v) => ({ zIndex: v }),
    "inset": (v) => ({ inset: `${v * 4}px` }),
    "inset-x": (v) => ({ left: `${v * 4}px`, right: `${v * 4}px` }),
    "inset-y": (v) => ({ top: `${v * 4}px`, bottom: `${v * 4}px` })
  };

  // src/rules/index.js
  var rules = {
    ...spacing,
    ...typography,
    ...sizing,
    ...colors,
    ...layout,
    ...borders,
    ...effects,
    ...position
  };

  // src/engine.js
  var PREFIX = "cw-";
  function parseClass(cls) {
    if (!cls.startsWith(PREFIX)) return null;
    const raw = cls.slice(PREFIX.length);
    const parts = raw.split("-");
    for (let i = parts.length; i >= 1; i--) {
      const key = parts.slice(0, i).join("-");
      const rest = parts.slice(i);
      if (!rules[key]) continue;
      let result = null;
      if (rest.length === 0) result = rules[key](void 0, void 0);
      else if (rest.length === 1) result = rules[key](rest[0], void 0);
      else if (rest.length === 2) result = rules[key](rest[0], rest[1]);
      if (result !== null && result !== void 0) return result;
    }
    return null;
  }
  function applyToElement(el) {
    const styles = {};
    el.classList.forEach((cls) => {
      const result = parseClass(cls);
      if (result) Object.assign(styles, result);
    });
    if (Object.keys(styles).length > 0) {
      Object.assign(el.style, styles);
    }
  }
  function applyAll() {
    document.querySelectorAll(`[class*="${PREFIX}"]`).forEach(applyToElement);
  }

  // src/observer.js
  var PREFIX2 = "cw-";
  function startObserver() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.className?.includes?.(PREFIX2)) applyToElement(node);
          node.querySelectorAll?.(`[class*="${PREFIX2}"]`).forEach(applyToElement);
        }
        if (mutation.type === "attributes" && mutation.attributeName === "class" && mutation.target.className?.includes?.(PREFIX2)) {
          applyToElement(mutation.target);
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  // src/index.js
  function injectBaseStyles() {
    const style = document.createElement("style");
    style.id = "chaiwindcss-base";
    style.textContent = `
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      scroll-behavior: smooth;
    }
    a {
      text-decoration: none;
    }
    img, video {
      max-width: 100%;
      display: block;
    }
    button {
      cursor: pointer;
      border: none;
      background: none;
    }
    input, textarea, select {
      font: inherit;
    }
  `;
    const first = document.head.firstChild;
    document.head.insertBefore(style, first);
  }
  function init() {
    applyAll();
    startObserver();
    injectBaseStyles();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
