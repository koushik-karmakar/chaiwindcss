import { rules } from "./rules/index.js";

const PREFIX = "cw-";

function parseClass(cls) {
  if (!cls.startsWith(PREFIX)) return null;

  const raw = cls.slice(PREFIX.length);
  const parts = raw.split("-");

  for (let i = parts.length; i >= 1; i--) {
    const key = parts.slice(0, i).join("-");
    const rest = parts.slice(i);

    if (!rules[key]) continue;

    let result = null;

    if (rest.length === 0) result = rules[key](undefined, undefined);
    else if (rest.length === 1) result = rules[key](rest[0], undefined);
    else if (rest.length === 2) result = rules[key](rest[0], rest[1]);
    if (result !== null && result !== undefined) return result;
  }

  return null;
}

export function applyToElement(el) {
  const styles = {};
  el.classList.forEach((cls) => {
    const result = parseClass(cls);
    if (result) Object.assign(styles, result);
  });
  if (Object.keys(styles).length > 0) {
    Object.assign(el.style, styles);
  }
}

export function applyAll() {
  document.querySelectorAll(`[class*="${PREFIX}"]`).forEach(applyToElement);
}
