import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-SKv-7AQs.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Theming/Styling`}),`
`,(0,c.jsx)(t.h1,{id:`styling-and-css`,children:`Styling and CSS`}),`
`,(0,c.jsxs)(t.p,{children:[`The Chop Logic Components library uses `,(0,c.jsx)(t.strong,{children:`pure CSS`}),` with `,(0,c.jsx)(t.strong,{children:`CSS variables`}),` for theming. This guide explains how to properly import and manage CSS in your project.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),`: For a complete reference of all available CSS variables (colors, typography, spacing, sizes, z-index, and responsive breakpoints), see the `,(0,c.jsx)(t.a,{href:`/docs/theming-variables--docs`,children:`CSS Variables & Theming`}),` guide.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`css-architecture`,children:`CSS Architecture`}),`
`,(0,c.jsx)(t.p,{children:`The library follows these principles:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CSS Variables`}),`: All colors, spacing, fonts, and sizes defined in `,(0,c.jsx)(t.code,{children:`main.css`}),` using CSS custom properties`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Component Scoped Styles`}),`: Each component has its own CSS file with `,(0,c.jsx)(t.a,{href:`https://en.bem.info/methodology/css/`,rel:`nofollow`,children:(0,c.jsx)(t.strong,{children:`BEM naming`})}),` (`,(0,c.jsx)(t.code,{children:`.cl-*`}),` prefix)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Injection`}),`: CSS is automatically included when importing components`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theme Support`}),`: Light and dark themes via CSS variable overrides`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`basic-setup`,children:`Basic Setup`}),`
`,(0,c.jsx)(t.h3,{id:`important-themeprovider-includes-css-automatically`,children:`Important: ThemeProvider Includes CSS Automatically`}),`
`,(0,c.jsxs)(t.p,{children:[`If you use the `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),` component, `,(0,c.jsxs)(t.strong,{children:[`both `,(0,c.jsx)(t.code,{children:`main.css`}),` and `,(0,c.jsx)(t.code,{children:`icons.css`}),` are automatically imported`]}),`. You don't need to import them separately:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { ThemeProvider } from "chop-logic-components";

export function App() {
  return <ThemeProvider>{/* CSS is already loaded - use components directly */}</ThemeProvider>;
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`manual-css-import-without-themeprovider`,children:`Manual CSS Import (Without ThemeProvider)`}),`
`,(0,c.jsxs)(t.p,{children:[`If you're `,(0,c.jsx)(t.strong,{children:`not`}),` using ThemeProvider, manually import the theme CSS:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import "chop-logic-components/styles/main"; // Includes both main.css and icons.css

import Button from "chop-logic-components/atoms/button";
import Icon from "chop-logic-components/atoms/icon";
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`main.css`}),` file contains:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Color palette`}),`: Primary, accent, background colors for light/dark themes`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Typography`}),`: Font families and sizes`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Spacing`}),`: Gap and margin scales`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Component sizes`}),`: Icon sizes, border radius, z-index scales`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Responsive variables`}),`: breakpoints and media queries`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Icons stylesheet`}),`: Embedded (`,(0,c.jsx)(t.code,{children:`icons.css`}),` is included)`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`three-import-patterns`,children:`Three Import Patterns`}),`
`,(0,c.jsx)(t.h3,{id:`pattern-1-with-themeprovider-recommended-for-react`,children:`Pattern 1: With ThemeProvider (Recommended for React)`}),`
`,(0,c.jsxs)(t.p,{children:[`Use `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),` which automatically includes all CSS:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { ThemeProvider } from "chop-logic-components";
import { Button, Input, useDebounce } from "chop-logic-components";

export function App() {
  return (
    <ThemeProvider>
      <Button>Click me</Button>
      <Input placeholder="Type..." />
    </ThemeProvider>
  );
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`When to use`}),`: Most React applications, Storybook, any project using `,(0,c.jsx)(t.code,{children:`ThemeProvider`})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`CSS files included automatically`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`main.css`}),` (theme variables + icons.css)`]}),`
`,(0,c.jsx)(t.li,{children:`Every component's individual CSS file`}),`
`,(0,c.jsx)(t.li,{children:`Total: ~350KB`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Advantages`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`No manual CSS imports needed`}),`
`,(0,c.jsxs)(t.li,{children:[`Built-in theme switching via `,(0,c.jsx)(t.code,{children:`useTheme()`}),` hook`]}),`
`,(0,c.jsx)(t.li,{children:`Cleanest setup`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`pattern-2-component-level-best-for-bundle-size`,children:`Pattern 2: Component-Level (Best for Bundle Size)`}),`
`,(0,c.jsx)(t.p,{children:`Import only the components you need, manually manage CSS:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import "chop-logic-components/styles/main"; // Import theme CSS once at app root

import Button from "chop-logic-components/atoms/button"; // CSS auto-included
import Input from "chop-logic-components/atoms/input"; // CSS auto-included
import { useDebounce } from "chop-logic-components/hooks/use-debounce";

export function MyApp() {
  return (
    <>
      <Button>Click me</Button>
      <Input placeholder="Type..." />
    </>
  );
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`When to use`}),`: Production apps, component libraries, when optimizing bundle size, non-React frameworks`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`CSS files included`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`main.css`}),` (theme variables + icons.css embedded)`]}),`
`,(0,c.jsx)(t.li,{children:`Only Button.css + Input.css`}),`
`,(0,c.jsx)(t.li,{children:`Total: ~10-20KB (depending on components)`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Benefits`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Smaller bundle size (40-60% reduction)`}),`
`,(0,c.jsx)(t.li,{children:`Only CSS for used components`}),`
`,(0,c.jsx)(t.li,{children:`Better tree-shaking with modern bundlers`}),`
`,(0,c.jsx)(t.li,{children:`Works without React Context`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`pattern-3-main-export-without-themeprovider-legacy`,children:`Pattern 3: Main Export Without ThemeProvider (Legacy)`}),`
`,(0,c.jsx)(t.p,{children:`For projects that don't need theming:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Button, Input } from "chop-logic-components";
import "chop-logic-components/styles/main"; // Import theme CSS

export function MyApp() {
  return (
    <>
      <Button>Click me</Button>
      <Input placeholder="Type..." />
    </>
  );
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`When to use`}),`: Static sites, Storybook without theme switching`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`CSS files included`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`main.css`}),` (theme variables + icons.css)`]}),`
`,(0,c.jsx)(t.li,{children:`Every component's CSS file`}),`
`,(0,c.jsx)(t.li,{children:`Total: ~350KB`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`framework-specific-setups`,children:`Framework-Specific Setups`}),`
`,(0,c.jsx)(t.h3,{id:`react--vite`,children:`React + Vite`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Recommended: Use ThemeProvider`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// main.tsx
import { ThemeProvider } from "chop-logic-components";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
`})}),`
`,(0,c.jsx)(t.h3,{id:`nextjs`,children:`Next.js`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Recommended: Use ThemeProvider in root layout`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// app/layout.tsx
"use client";

import { ThemeProvider } from "chop-logic-components";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`astrojs-without-react-provider`,children:`Astro.js (Without React Provider)`}),`
`,(0,c.jsx)(t.p,{children:`For Astro or other frameworks that may not use React Context, import CSS in your root layout:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-astro`,children:`---
// src/layouts/Layout.astro
import 'chop-logic-components/styles/main'; // Contains main.css + icons.css
---

<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <slot />
  </body>
</html>
`})}),`
`,(0,c.jsx)(t.p,{children:`Then use components in your Astro pages or React components:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// src/components/MyButton.tsx (React component wrapped with client:load)
import Button from "chop-logic-components/atoms/button";

export default function MyButton() {
  return <Button>Click me</Button>;
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-astro`,children:`---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import MyButton from '../components/MyButton';
---

<Layout>
  <MyButton client:load />
</Layout>
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Important`}),`: Import `,(0,c.jsx)(t.code,{children:`main.css`}),` once in your root layout, not in individual component files.`]}),`
`,(0,c.jsx)(t.h3,{id:`remix`,children:`Remix`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Recommended: Use ThemeProvider`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// app/root.tsx
import { ThemeProvider } from "chop-logic-components";
import { Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head />
      <body>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </body>
    </html>
  );
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Alternative: Manual CSS Import`})}),`
`,(0,c.jsx)(t.p,{children:`If not using ThemeProvider:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// app/root.tsx
import "chop-logic-components/styles/main";
import { Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head />
      <body>
        <Outlet />
      </body>
    </html>
  );
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`css-variables-reference`,children:`CSS Variables Reference`}),`
`,(0,c.jsxs)(t.p,{children:[`All colors, sizes, and spacing are defined as CSS variables in `,(0,c.jsx)(t.code,{children:`main.css`}),`. You can use them in your own CSS:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.my-custom-component {
  color: var(--cl-accent-color);
  background-color: var(--cl-accent-background);
  padding: var(--cl-m-gap);
  border-radius: var(--cl-border-radius);
  font-family: var(--cl-core-font);
  font-size: var(--cl-typography-base-mobile);
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key variables:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Colors`}),`: `,(0,c.jsx)(t.code,{children:`--cl-accent-color`}),`, `,(0,c.jsx)(t.code,{children:`--cl-accent-color`}),`, `,(0,c.jsx)(t.code,{children:`--cl-tint-color`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Backgrounds`}),`: `,(0,c.jsx)(t.code,{children:`--cl-accent-background`}),`, `,(0,c.jsx)(t.code,{children:`--cl-highlight-background`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Spacing`}),`: `,(0,c.jsx)(t.code,{children:`--cl-xs-gap`}),`, `,(0,c.jsx)(t.code,{children:`--cl-s-gap`}),`, `,(0,c.jsx)(t.code,{children:`--cl-m-gap`}),`, `,(0,c.jsx)(t.code,{children:`--cl-l-gap`}),`, `,(0,c.jsx)(t.code,{children:`--cl-xl-gap`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fonts`}),`: `,(0,c.jsx)(t.code,{children:`--cl-core-font`}),`, `,(0,c.jsx)(t.code,{children:`--cl-monospace-font`}),`, `,(0,c.jsx)(t.code,{children:`--cl-fancy-font`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sizes`}),`: `,(0,c.jsx)(t.code,{children:`--cl-icon-size`}),`, `,(0,c.jsx)(t.code,{children:`--cl-thumb-size`}),`, `,(0,c.jsx)(t.code,{children:`--cl-border-radius`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Z-Index`}),`: `,(0,c.jsx)(t.code,{children:`--cl-z-index-base`}),`, `,(0,c.jsx)(t.code,{children:`--cl-z-index-menu`}),`, `,(0,c.jsx)(t.code,{children:`--cl-z-index-popup`}),`, `,(0,c.jsx)(t.code,{children:`--cl-z-index-modal`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`See the `,(0,c.jsx)(t.a,{href:`/docs/theming-colors--docs`,children:`Colors`}),` page for the complete color palette.`]}),`
`,(0,c.jsx)(t.h2,{id:`theme-switching`,children:`Theme Switching`}),`
`,(0,c.jsx)(t.p,{children:`The library supports light and dark themes using CSS variable overrides.`}),`
`,(0,c.jsx)(t.h3,{id:`with-themeprovider-react`,children:`With ThemeProvider (React)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { ThemeProvider, useTheme } from "chop-logic-components";
import "chop-logic-components/styles/main";

function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>Toggle Theme</button>;
}

export function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {/* components here automatically get theme colors */}
    </ThemeProvider>
  );
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`See the `,(0,c.jsx)(t.a,{href:`/docs/theming-provider--docs`,children:`Provider`}),` page for more details.`]}),`
`,(0,c.jsx)(t.h3,{id:`without-themeprovider-manual-control`,children:`Without ThemeProvider (Manual Control)`}),`
`,(0,c.jsx)(t.p,{children:`For projects without React Context support (like Astro):`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// Toggle theme by adding/removing class on document root
function toggleTheme() {
  const isDarkMode = document.documentElement.classList.toggle("cl-components-dark-theme");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// On page load, restore theme preference
function initTheme() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.documentElement.classList.add("cl-components-dark-theme");
  }
}

window.addEventListener("DOMContentLoaded", initTheme);
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-astro`,children:`---
// src/layouts/Layout.astro
import 'chop-logic-components/styles/main';
---

<html>
  <head>
    <title>My App</title>
    <script>
      // Restore theme on page load
      const theme = localStorage.getItem('theme') || 'light';
      if (theme === 'dark') {
        document.documentElement.classList.add('cl-components-dark-theme');
      }
    <\/script>
  </head>
  <body>
    <button onclick="toggleTheme()">Toggle Theme</button>
  </body>
</html>

<script>
  window.toggleTheme = function() {
    const isDark = document.documentElement.classList.toggle('cl-components-dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
<\/script>
`})}),`
`,(0,c.jsx)(t.h2,{id:`troubleshooting`,children:`Troubleshooting`}),`
`,(0,c.jsx)(t.h3,{id:`components-styles-not-showing`,children:`Components styles not showing`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Problem`}),`: Components render but without styles.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Solution`}),`: Make sure to import `,(0,c.jsx)(t.code,{children:`main.css`}),` before using components:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import "chop-logic-components/styles/main"; // Always first
import Button from "chop-logic-components/atoms/button";
`})}),`
`,(0,c.jsx)(t.h3,{id:`css-variables-undefined`,children:`CSS variables undefined`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Problem`}),`: Custom CSS using `,(0,c.jsx)(t.code,{children:`var(--cl-*)`}),` shows fallback colors.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Solution`}),`: Ensure `,(0,c.jsx)(t.code,{children:`main.css`}),` is loaded in your document:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// In your root component or layout
import "chop-logic-components/styles/main";
`})}),`
`,(0,c.jsx)(t.h3,{id:`styles-conflict-with-custom-css`,children:`Styles conflict with custom CSS`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Problem`}),`: Component styles are being overridden.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Solution`}),`: Use CSS Modules or a CSS-in-JS library to scope your styles:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// Option 1: CSS Modules
import styles from "./MyComponent.module.css";

export function MyComponent() {
  return <div className={styles.container}>{/* content */}</div>;
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// Option 2: CSS-in-JS (e.g., styled-components)
import styled from "styled-components";

const Container = styled.div\`
  color: var(--cl-accent-color);
\`;

export function MyComponent() {
  return <Container>{/* content */}</Container>;
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`theme-not-switching`,children:`Theme not switching`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Problem`}),`: Toggling theme doesn't change colors.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cause`}),`: CSS is loaded without `,(0,c.jsx)(t.code,{children:`main.css`}),`, which doesn't define variables.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Solution`}),`: Ensure `,(0,c.jsx)(t.code,{children:`main.css`}),` is imported:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import "chop-logic-components/styles/main";
import { ThemeProvider } from "chop-logic-components";

export function App() {
  return <ThemeProvider>{/* app */}</ThemeProvider>;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Import `,(0,c.jsx)(t.code,{children:`main.css`}),` once`]}),` at your application root, not in individual components`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Use component-level imports`}),` in production for better tree-shaking`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Leverage CSS variables`}),` for consistent theming across your app`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Don't duplicate component CSS`}),` import the component once, use everywhere`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Test in both light and dark themes`}),` to ensure colors work well in both modes`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};