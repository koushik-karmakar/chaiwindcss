<div align="center">

# ⚡ ChaiWindCSS

### A zero-build, runtime CSS utility library that injects inline styles directly onto your elements.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/koushik-karmakar/chaiwindcss/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![jsDelivr](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://cdn.jsdelivr.net/gh/koushik-karmakar/chaiwindcss@main/dist/chaiwindcss.min.js)

```html
<div class="cw-flex cw-p-6 cw-bg-blue-600 cw-rounded-xl">
  <h1 class="cw-text-3xl cw-fw-bold cw-color-white">Hello World</h1>
</div>
```

**No build step. No config. No CSS file. Just drop a script tag and go.**

[🚀 Get Started](#-quick-start) • [📖 Class Reference](#-class-reference) • [🔧 Local Setup](#-local-development-setup) • [📦 CDN](#-cdn-usage)

</div>

---

## 📋 Table of Contents

- [What is ChaiWindCSS?](#-what-is-chaiwindcss)
- [How it Works](#-how-it-works)
- [Quick Start](#-quick-start)
- [CDN Usage](#-cdn-usage)
- [Class Reference](#-class-reference)
- [Local Development Setup](#-local-development-setup)
- [Project Structure](#-project-structure)
- [Building the Project](#-building-the-project)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Extending with Custom Rules](#-extending-with-custom-rules)
- [How Base Styles Are Injected](#-how-base-styles-are-injected)

---

## 💡 What is ChaiWindCSS?

ChaiWindCSS is a **runtime utility CSS library** — similar to Tailwind CSS in syntax, but fundamentally different in how it works.

|                       | Tailwind CSS                | ChaiWindCSS                         |
| --------------------- | --------------------------- | ----------------------------------- |
| Build step required   | ✅ Yes                      | ❌ No                               |
| Generates a CSS file  | ✅ Yes                      | ❌ No                               |
| Style output          | CSS classes in a stylesheet | `style=""` directly on each element |
| Setup                 | npm + config + PostCSS      | One `<script>` tag                  |
| Works without Node.js | ❌ No                       | ✅ Yes                              |
| Runtime DOM watching  | ❌ No                       | ✅ Yes (MutationObserver)           |

When your page loads, ChaiWindCSS scans every element with a `cw-` class, resolves it to a CSS property, and sets it as an **inline style** directly on that element:

```html
<div class="cw-p-4 cw-bg-blue-600 cw-rounded-xl">Hello</div>

<div
  class="cw-p-4 cw-bg-blue-600 cw-rounded-xl"
  style="padding: 16px; background-color: #2563eb; border-radius: 12px;"
>
  Hello
</div>
```

---

## ⚙️ How it Works

ChaiWindCSS runs entirely in the browser through 4 steps:

```
cw-bg-blue-600
      │
      ▼
Strip prefix → "bg-blue-600"
      │
      ▼
Split by dash → ["bg", "blue", "600"]
      │
      ▼
Find rule key → rules["bg"]("blue", "600")
      │
      ▼
Resolve color → "#2563eb"
      │
      ▼
Apply inline → el.style.backgroundColor = "#2563eb"
```

**The engine** (`src/engine.js`) parses every `cw-` class by trying progressively shorter key matches — longest first — until it finds a rule. This allows both simple classes like `cw-flex` and compound classes like `cw-bg-blue-600` to resolve correctly.

**The observer** (`src/observer.js`) uses a `MutationObserver` to watch for any new elements added to the DOM (e.g. from React, Vue, or JavaScript) and automatically applies styles to them — no re-initialization needed.

---

## 🚀 Quick Start

### Option 1 — CDN (Recommended for most users)

Add one script tag to your HTML. No installation, no configuration.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Project</title>

    <script src="https://cdn.jsdelivr.net/gh/koushik-karmakar/chaiwindcss@1.0.0/dist/chaiwindcss.min.js"></script>
  </head>
  <body>
    <nav
      class="cw-flex cw-justify-between cw-items-center cw-px-8 cw-py-4 cw-bg-gray-900"
    >
      <span class="cw-fw-bold cw-text-xl cw-color-white">MyApp</span>
      <button
        class="cw-bg-blue-600 cw-color-white cw-px-4 cw-py-2 cw-rounded-lg cw-fw-medium"
      >
        Get Started
      </button>
    </nav>

    <section class="cw-flex cw-flex-col cw-items-center cw-py-20 cw-bg-blue-50">
      <h1 class="cw-text-5xl cw-fw-bold cw-color-gray-900 cw-mb-4">
        Hello World
      </h1>
      <p class="cw-text-lg cw-color-gray-500 cw-leading-relaxed">
        Built with ChaiWindCSS
      </p>
    </section>
  </body>
</html>
```

Open this file in your browser. Inspect any element — you will see `style=""` set directly on it. ✅

### Option 2 — Download

Download `chaiwindcss.min.js` from the [Releases page](https://github.com/koushik-karmakar/chaiwindcss/releases) and serve it yourself:

```html
<script src="/path/to/chaiwindcss.min.js"></script>
```

---

## 📦 CDN Usage

ChaiWindCSS is served via [jsDelivr](https://www.jsdelivr.com/) — a free, fast, global CDN backed by GitHub releases.

### Stable Version (Recommended for Production)

Always pin to a specific version so your project never breaks from future updates:

```html
<script src="https://cdn.jsdelivr.net/gh/koushik-karmakar/chaiwindcss@1.0.0/dist/chaiwindcss.min.js"></script>
```

### Latest Version (Development / Testing)

Always serves the latest commit on `main`:

```html
<script src="https://cdn.jsdelivr.net/gh/koushik-karmakar/chaiwindcss@main/dist/chaiwindcss.min.js"></script>
```

### Unminified Version (Debugging)

Human-readable version for understanding or debugging:

```html
<script src="https://cdn.jsdelivr.net/gh/koushik-karmakar/chaiwindcss@1.0.0/dist/chaiwindcss.js"></script>
```

### CDN URL Format

```
https://cdn.jsdelivr.net/gh/{github-username}/{repo-name}@{version}/{file-path}
```

> **Tip:** Replace `@1.0.0` with any release tag (e.g. `@1.1.0`, `@2.0.0`) to pin to that exact release.

---

## 📖 Class Reference

All classes use the `cw-` prefix. Values that take a number `{n}` use a **4px scale** — so `cw-p-4` = `padding: 16px`, `cw-p-1` = `padding: 4px`, and so on.

---

### 📐 Spacing

| Class          | CSS Output                                      |
| -------------- | ----------------------------------------------- |
| `cw-p-{n}`     | `padding: {n*4}px`                              |
| `cw-px-{n}`    | `padding-left: {n*4}px; padding-right: {n*4}px` |
| `cw-py-{n}`    | `padding-top: {n*4}px; padding-bottom: {n*4}px` |
| `cw-pt-{n}`    | `padding-top: {n*4}px`                          |
| `cw-pb-{n}`    | `padding-bottom: {n*4}px`                       |
| `cw-pl-{n}`    | `padding-left: {n*4}px`                         |
| `cw-pr-{n}`    | `padding-right: {n*4}px`                        |
| `cw-m-{n}`     | `margin: {n*4}px`                               |
| `cw-mx-{n}`    | `margin-left: {n*4}px; margin-right: {n*4}px`   |
| `cw-my-{n}`    | `margin-top: {n*4}px; margin-bottom: {n*4}px`   |
| `cw-mt-{n}`    | `margin-top: {n*4}px`                           |
| `cw-mb-{n}`    | `margin-bottom: {n*4}px`                        |
| `cw-ml-{n}`    | `margin-left: {n*4}px`                          |
| `cw-mr-{n}`    | `margin-right: {n*4}px`                         |
| `cw-gap-{n}`   | `gap: {n*4}px`                                  |
| `cw-gap-x-{n}` | `column-gap: {n*4}px`                           |
| `cw-gap-y-{n}` | `row-gap: {n*4}px`                              |

**Example:**

```html
<div class="cw-p-6 cw-mx-4 cw-mb-8 cw-gap-4">...</div>
```

---

### ✍️ Typography

| Class                | CSS Output                                                       |
| -------------------- | ---------------------------------------------------------------- |
| `cw-text-xs`         | `font-size: 12px`                                                |
| `cw-text-sm`         | `font-size: 14px`                                                |
| `cw-text-base`       | `font-size: 16px`                                                |
| `cw-text-lg`         | `font-size: 18px`                                                |
| `cw-text-xl`         | `font-size: 20px`                                                |
| `cw-text-2xl`        | `font-size: 24px`                                                |
| `cw-text-3xl`        | `font-size: 30px`                                                |
| `cw-text-4xl`        | `font-size: 36px`                                                |
| `cw-text-5xl`        | `font-size: 48px`                                                |
| `cw-fw-thin`         | `font-weight: 100`                                               |
| `cw-fw-light`        | `font-weight: 300`                                               |
| `cw-fw-normal`       | `font-weight: 400`                                               |
| `cw-fw-medium`       | `font-weight: 500`                                               |
| `cw-fw-semibold`     | `font-weight: 600`                                               |
| `cw-fw-bold`         | `font-weight: 700`                                               |
| `cw-fw-black`        | `font-weight: 900`                                               |
| `cw-leading-none`    | `line-height: 1`                                                 |
| `cw-leading-tight`   | `line-height: 1.25`                                              |
| `cw-leading-snug`    | `line-height: 1.375`                                             |
| `cw-leading-normal`  | `line-height: 1.5`                                               |
| `cw-leading-relaxed` | `line-height: 1.625`                                             |
| `cw-leading-loose`   | `line-height: 2`                                                 |
| `cw-tracking-{n}`    | `letter-spacing: {n*0.05}em`                                     |
| `cw-text-left`       | `text-align: left`                                               |
| `cw-text-center`     | `text-align: center`                                             |
| `cw-text-right`      | `text-align: right`                                              |
| `cw-uppercase`       | `text-transform: uppercase`                                      |
| `cw-lowercase`       | `text-transform: lowercase`                                      |
| `cw-capitalize`      | `text-transform: capitalize`                                     |
| `cw-italic`          | `font-style: italic`                                             |
| `cw-underline`       | `text-decoration: underline`                                     |
| `cw-line-through`    | `text-decoration: line-through`                                  |
| `cw-no-underline`    | `text-decoration: none`                                          |
| `cw-truncate`        | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |

**Example:**

```html
<h1 class="cw-text-4xl cw-fw-bold cw-leading-tight cw-text-center">Title</h1>
<p class="cw-text-lg cw-fw-normal cw-leading-relaxed cw-color-gray-500">
  Body text
</p>
```

---

### 🎨 Colors

Colors follow the pattern: `cw-{property}-{color}-{shade}`

**Available colors:** `red` `blue` `green` `yellow` `purple` `pink` `gray` `orange` `teal`

**Available shades:** `50` `100` `150` `200` `250` `300` `350` `400` `450` `500` `550` `600` `650` `700` `750` `800` `850` `900` `950`

**Special values:** `white` `black` `transparent`

| Class                              | CSS Output                      |
| ---------------------------------- | ------------------------------- |
| `cw-bg-{color}-{shade}`            | `background-color: {hex}`       |
| `cw-bg-white`                      | `background-color: #ffffff`     |
| `cw-bg-black`                      | `background-color: #000000`     |
| `cw-bg-transparent`                | `background-color: transparent` |
| `cw-color-{color}-{shade}`         | `color: {hex}`                  |
| `cw-color-white`                   | `color: #ffffff`                |
| `cw-border-color-{color}-{shade}`  | `border-color: {hex}`           |
| `cw-outline-color-{color}-{shade}` | `outline-color: {hex}`          |

**Example:**

```html
<div class="cw-bg-blue-600 cw-color-white">Blue background, white text</div>
<div class="cw-bg-gray-50 cw-color-gray-900">Light card</div>
<p class="cw-color-red-500">Error message</p>
<input class="cw-border-color-blue-500" />
```

---

### 🔲 Layout

| Class                | CSS Output                                           |
| -------------------- | ---------------------------------------------------- |
| `cw-flex`            | `display: flex`                                      |
| `cw-inline-flex`     | `display: inline-flex`                               |
| `cw-grid`            | `display: grid`                                      |
| `cw-inline-grid`     | `display: inline-grid`                               |
| `cw-block`           | `display: block`                                     |
| `cw-inline`          | `display: inline`                                    |
| `cw-inline-block`    | `display: inline-block`                              |
| `cw-hidden`          | `display: none`                                      |
| `cw-flex-row`        | `flex-direction: row`                                |
| `cw-flex-col`        | `flex-direction: column`                             |
| `cw-flex-wrap`       | `flex-wrap: wrap`                                    |
| `cw-flex-nowrap`     | `flex-wrap: nowrap`                                  |
| `cw-flex-1`          | `flex: 1 1 0%`                                       |
| `cw-flex-auto`       | `flex: 1 1 auto`                                     |
| `cw-flex-none`       | `flex: none`                                         |
| `cw-grow`            | `flex-grow: 1`                                       |
| `cw-shrink`          | `flex-shrink: 1`                                     |
| `cw-items-start`     | `align-items: flex-start`                            |
| `cw-items-center`    | `align-items: center`                                |
| `cw-items-end`       | `align-items: flex-end`                              |
| `cw-items-stretch`   | `align-items: stretch`                               |
| `cw-justify-start`   | `justify-content: flex-start`                        |
| `cw-justify-center`  | `justify-content: center`                            |
| `cw-justify-end`     | `justify-content: flex-end`                          |
| `cw-justify-between` | `justify-content: space-between`                     |
| `cw-justify-around`  | `justify-content: space-around`                      |
| `cw-grid-cols-{n}`   | `grid-template-columns: repeat({n}, minmax(0, 1fr))` |
| `cw-col-span-{n}`    | `grid-column: span {n} / span {n}`                   |
| `cw-overflow-hidden` | `overflow: hidden`                                   |
| `cw-overflow-auto`   | `overflow: auto`                                     |
| `cw-overflow-scroll` | `overflow: scroll`                                   |

**Example:**

```html
<div class="cw-flex cw-justify-between cw-items-center cw-gap-4">
  <div class="cw-flex-1">Left</div>
  <div class="cw-flex-none">Right</div>
</div>

<div class="cw-grid cw-grid-cols-3 cw-gap-6">
  <div class="cw-col-span-2">Wide</div>
  <div>Narrow</div>
</div>
```

---

### 📏 Sizing

| Class          | CSS Output                        |
| -------------- | --------------------------------- |
| `cw-w-{n}`     | `width: {n*4}px`                  |
| `cw-w-full`    | `width: 100%`                     |
| `cw-w-half`    | `width: 50%`                      |
| `cw-w-auto`    | `width: auto`                     |
| `cw-w-screen`  | `width: 100vw`                    |
| `cw-w-fit`     | `width: fit-content`              |
| `cw-h-{n}`     | `height: {n*4}px`                 |
| `cw-h-full`    | `height: 100%`                    |
| `cw-h-auto`    | `height: auto`                    |
| `cw-h-screen`  | `height: 100vh`                   |
| `cw-min-w-{n}` | `min-width: {n*4}px`              |
| `cw-max-w-{n}` | `max-width: {n*4}px`              |
| `cw-min-h-{n}` | `min-height: {n*4}px`             |
| `cw-max-h-{n}` | `max-height: {n*4}px`             |
| `cw-size-{n}`  | `width: {n*4}px; height: {n*4}px` |

**Example:**

```html
<div class="cw-w-full cw-max-w-80 cw-h-48"></div>
<div class="cw-size-12"></div>
```

---

### 🔳 Borders

| Class             | CSS Output                                     |
| ----------------- | ---------------------------------------------- |
| `cw-b`            | `border: 1px solid`                            |
| `cw-b-{n}`        | `border: {n}px solid`                          |
| `cw-bt`           | `border-top: 1px solid`                        |
| `cw-br`           | `border-right: 1px solid`                      |
| `cw-bb`           | `border-bottom: 1px solid`                     |
| `cw-bl`           | `border-left: 1px solid`                       |
| `cw-bw-{n}`       | `border-width: {n}px`                          |
| `cw-bs-solid`     | `border-style: solid`                          |
| `cw-bs-dashed`    | `border-style: dashed`                         |
| `cw-bs-dotted`    | `border-style: dotted`                         |
| `cw-rounded-none` | `border-radius: 0`                             |
| `cw-rounded-sm`   | `border-radius: 2px`                           |
| `cw-rounded-md`   | `border-radius: 6px`                           |
| `cw-rounded-lg`   | `border-radius: 8px`                           |
| `cw-rounded-xl`   | `border-radius: 12px`                          |
| `cw-rounded-2xl`  | `border-radius: 16px`                          |
| `cw-rounded-3xl`  | `border-radius: 24px`                          |
| `cw-rounded-full` | `border-radius: 9999px`                        |
| `cw-outline-{n}`  | `outline: {n}px solid`                         |
| `cw-outline-none` | `outline: none`                                |
| `cw-ring-{n}`     | `box-shadow: 0 0 0 {n}px rgba(59,130,246,0.5)` |

**Example:**

```html
<div class="cw-b cw-rounded-xl cw-border-color-gray-200">Card</div>
<button class="cw-outline-none cw-rounded-lg">Button</button>
<input class="cw-b cw-rounded-lg cw-border-color-blue-500 cw-outline-none" />
```

---

### ✨ Effects

| Class                    | CSS Output                                                 |
| ------------------------ | ---------------------------------------------------------- |
| `cw-shadow-sm`           | subtle shadow                                              |
| `cw-shadow`              | default shadow                                             |
| `cw-shadow-md`           | medium shadow                                              |
| `cw-shadow-lg`           | large shadow                                               |
| `cw-shadow-xl`           | extra large shadow                                         |
| `cw-shadow-none`         | `box-shadow: none`                                         |
| `cw-opacity-{n}`         | `opacity: {n/100}` (e.g. `cw-opacity-50` = `opacity: 0.5`) |
| `cw-transition`          | `transition: all 150ms ease`                               |
| `cw-transition-colors`   | transition colors only                                     |
| `cw-transition-opacity`  | transition opacity only                                    |
| `cw-duration-{n}`        | `transition-duration: {n}ms`                               |
| `cw-cursor-pointer`      | `cursor: pointer`                                          |
| `cw-cursor-default`      | `cursor: default`                                          |
| `cw-cursor-move`         | `cursor: move`                                             |
| `cw-cursor-not-allowed`  | `cursor: not-allowed`                                      |
| `cw-cursor-grab`         | `cursor: grab`                                             |
| `cw-select-none`         | `user-select: none`                                        |
| `cw-select-all`          | `user-select: all`                                         |
| `cw-pointer-events-none` | `pointer-events: none`                                     |
| `cw-visible`             | `visibility: visible`                                      |
| `cw-invisible`           | `visibility: hidden`                                       |

**Example:**

```html
<button
  class="cw-bg-blue-600 cw-shadow-md cw-cursor-pointer cw-transition cw-duration-200"
>
  Click me
</button>
<div class="cw-opacity-50 cw-select-none">Disabled state</div>
```

---

### 📍 Position

| Class            | CSS Output                      |
| ---------------- | ------------------------------- |
| `cw-relative`    | `position: relative`            |
| `cw-absolute`    | `position: absolute`            |
| `cw-fixed`       | `position: fixed`               |
| `cw-sticky`      | `position: sticky`              |
| `cw-static`      | `position: static`              |
| `cw-top-{n}`     | `top: {n*4}px`                  |
| `cw-right-{n}`   | `right: {n*4}px`                |
| `cw-bottom-{n}`  | `bottom: {n*4}px`               |
| `cw-left-{n}`    | `left: {n*4}px`                 |
| `cw-inset-{n}`   | `inset: {n*4}px`                |
| `cw-inset-x-{n}` | `left: {n*4}px; right: {n*4}px` |
| `cw-inset-y-{n}` | `top: {n*4}px; bottom: {n*4}px` |
| `cw-z-{n}`       | `z-index: {n}`                  |

**Example:**

```html
<div class="cw-relative">
  <span class="cw-absolute cw-top-2 cw-right-2 cw-z-10">Badge</span>
  Content
</div>
```

---

## 🔧 Local Development Setup

Follow these steps to clone and run ChaiWindCSS locally.

### Prerequisites

Make sure you have these installed:

```bash
node -v
npm -v
git --version
```

Download Node.js from [nodejs.org](https://nodejs.org) if you don't have it.

### Step 1 — Clone the Repository

```bash
git clone https://github.com/koushik-karmakar/chaiwindcss.git
cd chaiwindcss
```

### Step 2 — Install Dependencies

```bash
npm install
```

This installs:

| Package   | Purpose                                                |
| --------- | ------------------------------------------------------ |
| `esbuild` | Bundles all source files into `dist/` — extremely fast |
| `vitest`  | Unit testing framework                                 |

### Step 3 — Build the Project

```bash
npm run build
```

This runs `build.js` using esbuild and produces two files:

```
dist/
├── chaiwindcss.js        ← full readable version (~20kb)
└── chaiwindcss.min.js    ← minified production version (~3kb)
```

### Step 4 — Open the Playground

Open `playground/index.html` directly in your browser:

```bash

open playground/index.html


start playground/index.html


xdg-open playground/index.html
```

Right-click any element → **Inspect** → check the **Styles** panel. You should see `element.style { ... }` populated with inline styles. ✅

### Step 5 — Development Mode (Auto Rebuild)

```bash
npm run dev
```

Every time you save any file inside `src/`, the project rebuilds automatically. Keep this running in one terminal while you edit.

---

## 📁 Project Structure

```
chaiwindcss/
│
├── src/                        ← All source files
│   ├── index.js                ← Entry point — boots engine + observer + base styles
│   ├── engine.js               ← Core class parser — reads classes, applies inline styles
│   ├── observer.js             ← MutationObserver — watches for dynamic DOM additions
│   │
│   └── rules/                  ← Every CSS rule lives here
│       ├── index.js            ← Imports and merges all rule files
│       ├── spacing.js          ← p, m, px, py, pt, pb, gap...
│       ├── typography.js       ← text, fw, leading, tracking...
│       ├── sizing.js           ← w, h, min-w, max-w, size...
│       ├── colors.js           ← bg, color, border-color, outline-color
│       ├── layout.js           ← flex, grid, items, justify...
│       ├── borders.js          ← b, rounded, bw, bs, ring...
│       ├── effects.js          ← shadow, opacity, cursor, transition...
│       └── position.js         ← relative, absolute, top, z...
│
├── dist/                       ← Auto-generated build output (never edit manually)
│   ├── chaiwindcss.js
│   └── chaiwindcss.min.js
│
├── playground/
│   └── index.html              ← Local test page to see everything working
│
├── tests/
│   └── engine.test.js          ← Unit tests
│
├── build.js                    ← esbuild config — produces dist/ files
├── package.json
└── README.md
```

### Key Files Explained

**`src/index.js`** — The entry point. It injects base styles into `<head>`, runs `applyAll()` on page load, and starts the MutationObserver.

**`src/engine.js`** — The parser. For each element with a `cw-` class, it splits the class by dashes, finds the matching rule key (longest match first), calls the rule function, and sets `element.style` properties directly.

**`src/rules/colors.js`** — Contains the full color palette with 9 color families × 19 shades each (50 through 950). The `resolveColor()` function handles both named colors (`white`, `black`) and shade-based colors (`blue-600`).

**`build.js`** — Uses esbuild to bundle everything into two output files. Format is `iife` (immediately invoked function expression) so it works as a plain `<script>` tag with no module system needed.

---

## 🏗️ Building the Project

### Available Scripts

```bash
npm run build
npm run dev
npm run test
```

### Build Output

```bash
$ npm run build

Built dist/chaiwindcss.js
Built dist/chaiwindcss.min.js
```

The build uses `format: 'iife'` which wraps everything in a self-executing function. This means:

- ✅ Works as a plain `<script src="...">` tag
- ✅ No ES module `import` required
- ✅ No bundler needed on the consumer side
- ✅ Compatible with every browser

---

## 📱 Responsive Breakpoints

ChaiWindCSS supports responsive classes using the `{breakpoint}:cw-{class}` syntax. Breakpoint classes inject scoped `@media` rules into `<head>` automatically.

### Breakpoint Scale

| Prefix | Min Width | Description           |
| ------ | --------- | --------------------- |
| `sm:`  | 640px     | Small screens and up  |
| `md:`  | 768px     | Medium screens and up |
| `lg:`  | 1024px    | Large screens and up  |
| `xl:`  | 1280px    | Extra large and up    |
| `2xl:` | 1536px    | 2X large and up       |

### Usage

```html
<div class="cw-flex cw-flex-col md:cw-flex-row cw-gap-4">
  <div class="cw-w-full md:cw-w-half">Left</div>
  <div class="cw-w-full md:cw-w-half">Right</div>
</div>

<nav class="cw-hidden sm:cw-flex cw-gap-4">
  <a>Home</a>
  <a>About</a>
</nav>

<h1 class="cw-text-2xl md:cw-text-4xl lg:cw-text-5xl cw-fw-bold">
  Responsive Heading
</h1>
```

Breakpoint classes are injected as `@media` rules in `<style id="chaiwindcss-responsive">` in `<head>` — not as inline styles, since inline styles cannot respond to viewport width.

---

## 🧩 Extending with Custom Rules

Adding your own utility classes is straightforward. Create a new rule file in `src/rules/` and add it to `src/rules/index.js`.

### Example — Adding a `rotate` utility

**`src/rules/transforms.js`**

```js
export const transforms = {
  rotate: (v) => ({ transform: `rotate(${v}deg)` }),
  scale: (v) => ({ transform: `scale(${v / 100})` }),
  "translate-x": (v) => ({ transform: `translateX(${v * 4}px)` }),
  "translate-y": (v) => ({ transform: `translateY(${v * 4}px)` }),
};
```

**`src/rules/index.js`** — add your import:

```js
import { transforms } from "./transforms.js";

export const rules = {
  ...spacing,
  ...typography,
  ...sizing,
  ...colors,
  ...layout,
  ...borders,
  ...effects,
  ...position,
  ...transforms,
};
```

**Rebuild:**

```bash
npm run build
```

**Use it:**

```html
<div class="cw-rotate-45">Rotated 45°</div>
<div class="cw-scale-150">Scaled to 150%</div>
```

### Rule Function Signature

Every rule is a function that receives the parsed value(s) and returns a plain CSS object:

```js
'p': (v) => ({ padding: `${v * 4}px` })

'text': (v) => SIZE_MAP[v] ? { fontSize: SIZE_MAP[v] } : { fontSize: `${v * 4}px` }

'bg': (name, shade) => { const c = resolveColor(name, shade); return c ? { backgroundColor: c } : null; }

'flex': () => ({ display: 'flex' })
```

---

## 🧱 How Base Styles Are Injected

When ChaiWindCSS loads, before applying any classes, it automatically injects the following reset styles into `<head>`:

```css
*,
*::before,
*::after {
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

img,
video {
  max-width: 100%;
  display: block;
}

input,
textarea,
select {
  font: inherit;
}
```

This means you get a clean, consistent baseline on every page that uses ChaiWindCSS — no separate CSS reset file needed. The injection is idempotent (checks for the `id` before inserting) so it never duplicates even if the script loads multiple times.

---

## 🛠️ Running Tests

```bash
npm run test
```

Tests are written with [Vitest](https://vitest.dev/) and live in the `tests/` folder. They verify that the parser correctly resolves classes to CSS properties.

```bash
# Example test output
✓ cw-p-4 → { padding: "16px" }
✓ cw-bg-blue-600 → { backgroundColor: "#2563eb" }
✓ cw-text-xl → { fontSize: "20px" }
✓ cw-flex → { display: "flex" }
✓ cw-rounded-xl → { borderRadius: "12px" }
```

---

## 🤝 Contributing

Contributions are welcome! Here is how to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/add-transform-rules`
3. Make your changes in `src/rules/`
4. Add tests in `tests/`
5. Build: `npm run build`
6. Test: `npm run test`
7. Commit: `git commit -m "feat: add transform utility rules"`
8. Push: `git push origin feature/add-transform-rules`
9. Open a Pull Request

---

## 📄 License

MIT License — free to use in personal and commercial projects.

---

<div align="center">

Made with ❤️ by [Koushik Karmakar](https://github.com/koushik-karmakar)

⭐ Star this repo if you found it useful!

</div>
