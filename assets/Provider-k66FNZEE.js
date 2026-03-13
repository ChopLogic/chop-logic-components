import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-DM9h6Jyd.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-D4KZ0eBP.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Theming/Provider`}),`
`,(0,c.jsx)(t.h1,{id:`theme-provider`,children:`Theme Provider`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(`code`,{children:`ThemeProvider`}),` component wraps your app to enable light and dark theme switching using React Context.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Important`}),`: `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),` automatically imports `,(0,c.jsx)(t.code,{children:`main.css`}),` (which includes CSS variables and icons) — you don't need to import them separately.`]}),`
`,(0,c.jsxs)(t.p,{children:[`For a complete reference of all CSS theme variables, see the `,(0,c.jsx)(t.a,{href:`/docs/theming-variables--docs`,children:`CSS Variables & Theming`}),` guide.`]}),`
`,(0,c.jsxs)(t.p,{children:[`It supports both dynamic switching via a hook and injected mode through the `,(0,c.jsx)(t.code,{children:`injectedMode`}),` prop.`]}),`
`,(0,c.jsx)(t.h3,{id:`basic-example`,children:`Basic Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { ThemeProvider } from "chop-logic-components";
import App from "./App";

export function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`injected-mode-fixed-theme`,children:`Injected Mode (Fixed Theme)`}),`
`,(0,c.jsxs)(t.p,{children:[`Use `,(0,c.jsx)(t.code,{children:`injectedMode`}),` to set a fixed theme without allowing user switching:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { ThemeProvider, CL_DARK_THEME_CLASS } from "chop-logic-components";

export function App() {
  return (
    <ThemeProvider injectedMode={CL_DARK_THEME_CLASS}>
      <div>{/* content always in dark mode */}</div>
    </ThemeProvider>
  );
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`storybook-integration`,children:`Storybook Integration`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { ThemeProvider, CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from "chop-logic-components";
import { Decorator } from "@storybook/react";

const withTheme: Decorator = (StoryFn, context) => {
  const { backgrounds } = context.globals;
  const backgroundColor = backgrounds?.value ?? "#FFFFFFFF";
  const storybookMode = backgroundColor === "#2B2B2BFF" ? CL_DARK_THEME_CLASS : CL_LIGHT_THEME_CLASS;

  return (
    <ThemeProvider injectedMode={storybookMode}>
      <div style={{ backgroundColor }}>
        <StoryFn />
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),`: CSS is automatically included by `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),`, so you don't need to import it in your preview configuration.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`theme-hook`,children:`Theme Hook`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(`code`,{children:`useTheme()`}),` hook provides access to the theme context and allows you to change the theme programmatically.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),`: This hook only works inside a `,(0,c.jsx)(t.code,{children:`<ThemeProvider>`}),` component in React projects.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useTheme, CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from "chop-logic-components";

export function ThemeToggleButton() {
  const { mode, setMode } = useTheme();

  const toggleTheme = () => {
    setMode(mode === CL_DARK_THEME_CLASS ? CL_LIGHT_THEME_CLASS : CL_DARK_THEME_CLASS);
  };

  return <button onClick={toggleTheme}>Toggle to {mode === CL_DARK_THEME_CLASS ? "Light" : "Dark"} Mode</button>;
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`hook-properties`,children:`Hook Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`mode`})}),`: Current theme class (`,(0,c.jsx)(t.code,{children:`CL_DARK_THEME_CLASS`}),` or `,(0,c.jsx)(t.code,{children:`CL_LIGHT_THEME_CLASS`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`setMode(mode)`})}),`: Update the current theme`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`manual-theme-switching-non-react`,children:`Manual Theme Switching (Non-React)`}),`
`,(0,c.jsx)(t.p,{children:`For projects that don't use React Context (e.g., Astro, plain HTML, other frameworks), you can manually toggle the theme by manipulating the DOM:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// Toggle theme by adding/removing class
function toggleTheme() {
  const isDarkMode = document.documentElement.classList.toggle("cl-components-dark-theme");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Restore theme on page load
function initTheme() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.documentElement.classList.add("cl-components-dark-theme");
  }
}

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`astro-example`,children:`Astro Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-astro`,children:`---
// src/layouts/Layout.astro
import 'chop-logic-components/styles/main';
---

<html>
  <head>
    <title>My App</title>
    <script>
      // Initialize theme from localStorage
      const theme = localStorage.getItem('theme') || 'light';
      if (theme === 'dark') {
        document.documentElement.classList.add('cl-components-dark-theme');
      }
    <\/script>
  </head>
  <body>
    <button id="theme-toggle">Toggle Theme</button>
  </body>
</html>

<script>
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('cl-components-dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
<\/script>
`})}),`
`,(0,c.jsx)(t.h3,{id:`theme-constants`,children:`Theme Constants`}),`
`,(0,c.jsx)(t.p,{children:`Both React and HTML/JS projects use the same theme class names:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from "chop-logic-components";

// CL_DARK_THEME_CLASS = 'cl-components-dark-theme'
// CL_LIGHT_THEME_CLASS = 'cl-components-light-theme' (default, can be omitted)
`})}),`
`,(0,c.jsx)(t.p,{children:`For non-React projects, the classes are just strings:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<!-- Light theme (default) -->
<html>
  <!-- or explicitly: <html class="cl-components-light-theme"> -->
  <!-- components here get light theme colors -->
</html>

<!-- Dark theme -->
<html class="cl-components-dark-theme">
  <!-- components here get dark theme colors -->
</html>
`})}),`
`,(0,c.jsx)(t.h2,{id:`css-variables`,children:`CSS Variables`}),`
`,(0,c.jsxs)(t.p,{children:[`All theme colors are defined as CSS variables in `,(0,c.jsx)(t.code,{children:`main.css`}),` and can be customized. See the `,(0,c.jsx)(t.a,{href:`/docs/theming-styling--docs`,children:`Styling and CSS`}),` page for:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Complete list of available CSS variables`}),`
`,(0,c.jsx)(t.li,{children:`How to use them in custom styles`}),`
`,(0,c.jsx)(t.li,{children:`How theming affects your CSS`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`For visual reference of the color palette, see the `,(0,c.jsx)(t.a,{href:`/docs/theming-colors--docs`,children:`Colors`}),` page.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};