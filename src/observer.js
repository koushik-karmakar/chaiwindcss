import { applyToElement } from "./engine.js";

const PREFIX = "cw-";

export function startObserver() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (node.className?.includes?.(PREFIX)) applyToElement(node);
        node.querySelectorAll?.(`[class*="${PREFIX}"]`).forEach(applyToElement);
      }

      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class" &&
        mutation.target.className?.includes?.(PREFIX)
      ) {
        applyToElement(mutation.target);
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
}
