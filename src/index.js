import { applyAll } from "./engine.js";
import { startObserver } from "./observer.js";
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
