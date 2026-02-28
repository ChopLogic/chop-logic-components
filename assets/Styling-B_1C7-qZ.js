import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as r}from"./index-BeVWJvHh.js";import{M as t}from"./blocks-B9t17XrR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Theming/Styling"}),`
`,e.jsx(n.h1,{id:"styling-and-css",children:"Styling and CSS"}),`
`,e.jsxs(n.p,{children:["The Chop Logic Components library uses ",e.jsx(n.strong,{children:"pure CSS"})," with ",e.jsx(n.strong,{children:"CSS variables"})," for theming. This guide explains how to properly import and manage CSS in your project."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": For a complete reference of all available CSS variables (colors, typography, spacing, sizes, z-index, and responsive breakpoints), see the ",e.jsx(n.a,{href:"/docs/theming-variables--docs",children:"CSS Variables & Theming"})," guide."]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-architecture",children:"CSS Architecture"}),`
`,e.jsx(n.p,{children:"The library follows these principles:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS Variables"}),": All colors, spacing, fonts, and sizes defined in ",e.jsx(n.code,{children:"main.css"})," using CSS custom properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Scoped Styles"}),": Each component has its own CSS file with ",e.jsx(n.a,{href:"https://en.bem.info/methodology/css/",rel:"nofollow",children:e.jsx(n.strong,{children:"BEM naming"})})," (",e.jsx(n.code,{children:".cl-*"})," prefix)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Injection"}),": CSS is automatically included when importing components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme Support"}),": Light and dark themes via CSS variable overrides"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-setup",children:"Basic Setup"}),`
`,e.jsx(n.h3,{id:"important-themeprovider-includes-css-automatically",children:"Important: ThemeProvider Includes CSS Automatically"}),`
`,e.jsxs(n.p,{children:["If you use the ",e.jsx(n.code,{children:"ThemeProvider"})," component, ",e.jsxs(n.strong,{children:["both ",e.jsx(n.code,{children:"main.css"})," and ",e.jsx(n.code,{children:"icons.css"})," are automatically imported"]}),". You don't need to import them separately:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from "chop-logic-components";

export function App() {
  return <ThemeProvider>{/* CSS is already loaded - use components directly */}</ThemeProvider>;
}
`})}),`
`,e.jsx(n.h3,{id:"manual-css-import-without-themeprovider",children:"Manual CSS Import (Without ThemeProvider)"}),`
`,e.jsxs(n.p,{children:["If you're ",e.jsx(n.strong,{children:"not"})," using ThemeProvider, manually import the theme CSS:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "chop-logic-components/styles/main"; // Includes both main.css and icons.css

import Button from "chop-logic-components/atoms/button";
import Icon from "chop-logic-components/atoms/icon";
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"main.css"})," file contains:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color palette"}),": Primary, accent, background colors for light/dark themes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typography"}),": Font families and sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spacing"}),": Gap and margin scales"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component sizes"}),": Icon sizes, border radius, z-index scales"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive variables"}),": breakpoints and media queries"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons stylesheet"}),": Embedded (",e.jsx(n.code,{children:"icons.css"})," is included)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"three-import-patterns",children:"Three Import Patterns"}),`
`,e.jsx(n.h3,{id:"pattern-1-with-themeprovider-recommended-for-react",children:"Pattern 1: With ThemeProvider (Recommended for React)"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"ThemeProvider"})," which automatically includes all CSS:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from "chop-logic-components";
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use"}),": Most React applications, Storybook, any project using ",e.jsx(n.code,{children:"ThemeProvider"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"CSS files included automatically"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"main.css"})," (theme variables + icons.css)"]}),`
`,e.jsx(n.li,{children:"Every component's individual CSS file"}),`
`,e.jsx(n.li,{children:"Total: ~350KB"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Advantages"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"No manual CSS imports needed"}),`
`,e.jsxs(n.li,{children:["Built-in theme switching via ",e.jsx(n.code,{children:"useTheme()"})," hook"]}),`
`,e.jsx(n.li,{children:"Cleanest setup"}),`
`]}),`
`,e.jsx(n.h3,{id:"pattern-2-component-level-best-for-bundle-size",children:"Pattern 2: Component-Level (Best for Bundle Size)"}),`
`,e.jsx(n.p,{children:"Import only the components you need, manually manage CSS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "chop-logic-components/styles/main"; // Import theme CSS once at app root

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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use"}),": Production apps, component libraries, when optimizing bundle size, non-React frameworks"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"CSS files included"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"main.css"})," (theme variables + icons.css embedded)"]}),`
`,e.jsx(n.li,{children:"Only Button.css + Input.css"}),`
`,e.jsx(n.li,{children:"Total: ~10-20KB (depending on components)"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Benefits"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Smaller bundle size (40-60% reduction)"}),`
`,e.jsx(n.li,{children:"Only CSS for used components"}),`
`,e.jsx(n.li,{children:"Better tree-shaking with modern bundlers"}),`
`,e.jsx(n.li,{children:"Works without React Context"}),`
`]}),`
`,e.jsx(n.h3,{id:"pattern-3-main-export-without-themeprovider-legacy",children:"Pattern 3: Main Export Without ThemeProvider (Legacy)"}),`
`,e.jsx(n.p,{children:"For projects that don't need theming:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, Input } from "chop-logic-components";
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use"}),": Static sites, Storybook without theme switching"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"CSS files included"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"main.css"})," (theme variables + icons.css)"]}),`
`,e.jsx(n.li,{children:"Every component's CSS file"}),`
`,e.jsx(n.li,{children:"Total: ~350KB"}),`
`]}),`
`,e.jsx(n.h2,{id:"framework-specific-setups",children:"Framework-Specific Setups"}),`
`,e.jsx(n.h3,{id:"react--vite",children:"React + Vite"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Recommended: Use ThemeProvider"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// main.tsx
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
`,e.jsx(n.h3,{id:"nextjs",children:"Next.js"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Recommended: Use ThemeProvider in root layout"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/layout.tsx
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
`,e.jsx(n.h3,{id:"astrojs-without-react-provider",children:"Astro.js (Without React Provider)"}),`
`,e.jsx(n.p,{children:"For Astro or other frameworks that may not use React Context, import CSS in your root layout:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-astro",children:`---
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
`,e.jsx(n.p,{children:"Then use components in your Astro pages or React components:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// src/components/MyButton.tsx (React component wrapped with client:load)
import Button from "chop-logic-components/atoms/button";

export default function MyButton() {
  return <Button>Click me</Button>;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-astro",children:`---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import MyButton from '../components/MyButton';
---

<Layout>
  <MyButton client:load />
</Layout>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),": Import ",e.jsx(n.code,{children:"main.css"})," once in your root layout, not in individual component files."]}),`
`,e.jsx(n.h3,{id:"remix",children:"Remix"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Recommended: Use ThemeProvider"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/root.tsx
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
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Alternative: Manual CSS Import"})}),`
`,e.jsx(n.p,{children:"If not using ThemeProvider:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/root.tsx
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
`,e.jsx(n.h2,{id:"css-variables-reference",children:"CSS Variables Reference"}),`
`,e.jsxs(n.p,{children:["All colors, sizes, and spacing are defined as CSS variables in ",e.jsx(n.code,{children:"main.css"}),". You can use them in your own CSS:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-custom-component {
  color: var(--cl-accent-color);
  background-color: var(--cl-accent-background);
  padding: var(--cl-m-gap);
  border-radius: var(--cl-border-radius);
  font-family: var(--cl-core-font);
  font-size: var(--cl-typography-base-mobile);
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Key variables:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Colors"}),": ",e.jsx(n.code,{children:"--cl-accent-color"}),", ",e.jsx(n.code,{children:"--cl-accent-color"}),", ",e.jsx(n.code,{children:"--cl-tint-color"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backgrounds"}),": ",e.jsx(n.code,{children:"--cl-accent-background"}),", ",e.jsx(n.code,{children:"--cl-highlight-background"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spacing"}),": ",e.jsx(n.code,{children:"--cl-xs-gap"}),", ",e.jsx(n.code,{children:"--cl-s-gap"}),", ",e.jsx(n.code,{children:"--cl-m-gap"}),", ",e.jsx(n.code,{children:"--cl-l-gap"}),", ",e.jsx(n.code,{children:"--cl-xl-gap"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fonts"}),": ",e.jsx(n.code,{children:"--cl-core-font"}),", ",e.jsx(n.code,{children:"--cl-monospace-font"}),", ",e.jsx(n.code,{children:"--cl-fancy-font"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sizes"}),": ",e.jsx(n.code,{children:"--cl-icon-size"}),", ",e.jsx(n.code,{children:"--cl-thumb-size"}),", ",e.jsx(n.code,{children:"--cl-border-radius"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Z-Index"}),": ",e.jsx(n.code,{children:"--cl-z-index-base"}),", ",e.jsx(n.code,{children:"--cl-z-index-menu"}),", ",e.jsx(n.code,{children:"--cl-z-index-popup"}),", ",e.jsx(n.code,{children:"--cl-z-index-modal"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/docs/theming-colors--docs",children:"Colors"})," page for the complete color palette."]}),`
`,e.jsx(n.h2,{id:"theme-switching",children:"Theme Switching"}),`
`,e.jsx(n.p,{children:"The library supports light and dark themes using CSS variable overrides."}),`
`,e.jsx(n.h3,{id:"with-themeprovider-react",children:"With ThemeProvider (React)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider, useTheme } from "chop-logic-components";
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
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/docs/theming-provider--docs",children:"Provider"})," page for more details."]}),`
`,e.jsx(n.h3,{id:"without-themeprovider-manual-control",children:"Without ThemeProvider (Manual Control)"}),`
`,e.jsx(n.p,{children:"For projects without React Context support (like Astro):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Toggle theme by adding/removing class on document root
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-astro",children:`---
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
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"components-styles-not-showing",children:"Components styles not showing"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": Components render but without styles."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution"}),": Make sure to import ",e.jsx(n.code,{children:"main.css"})," before using components:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "chop-logic-components/styles/main"; // Always first
import Button from "chop-logic-components/atoms/button";
`})}),`
`,e.jsx(n.h3,{id:"css-variables-undefined",children:"CSS variables undefined"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": Custom CSS using ",e.jsx(n.code,{children:"var(--cl-*)"})," shows fallback colors."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution"}),": Ensure ",e.jsx(n.code,{children:"main.css"})," is loaded in your document:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// In your root component or layout
import "chop-logic-components/styles/main";
`})}),`
`,e.jsx(n.h3,{id:"styles-conflict-with-custom-css",children:"Styles conflict with custom CSS"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": Component styles are being overridden."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution"}),": Use CSS Modules or a CSS-in-JS library to scope your styles:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Option 1: CSS Modules
import styles from "./MyComponent.module.css";

export function MyComponent() {
  return <div className={styles.container}>{/* content */}</div>;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Option 2: CSS-in-JS (e.g., styled-components)
import styled from "styled-components";

const Container = styled.div\`
  color: var(--cl-accent-color);
\`;

export function MyComponent() {
  return <Container>{/* content */}</Container>;
}
`})}),`
`,e.jsx(n.h3,{id:"theme-not-switching",children:"Theme not switching"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem"}),": Toggling theme doesn't change colors."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Cause"}),": CSS is loaded without ",e.jsx(n.code,{children:"main.css"}),", which doesn't define variables."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution"}),": Ensure ",e.jsx(n.code,{children:"main.css"})," is imported:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "chop-logic-components/styles/main";
import { ThemeProvider } from "chop-logic-components";

export function App() {
  return <ThemeProvider>{/* app */}</ThemeProvider>;
}
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Import ",e.jsx(n.code,{children:"main.css"})," once"]})," at your application root, not in individual components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use component-level imports"})," in production for better tree-shaking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Leverage CSS variables"})," for consistent theming across your app"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't duplicate component CSS"})," import the component once, use everywhere"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test in both light and dark themes"})," to ensure colors work well in both modes"]}),`
`]})]})}function m(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{m as default};
