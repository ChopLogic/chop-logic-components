import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as s}from"./index-BeVWJvHh.js";import{M as r}from"./blocks-B9t17XrR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Theming/Provider"}),`
`,e.jsx(n.h1,{id:"theme-provider",children:"Theme Provider"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx("code",{children:"ThemeProvider"})," component wraps your app to enable light and dark theme switching using React Context."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),": ",e.jsx(n.code,{children:"ThemeProvider"})," automatically imports ",e.jsx(n.code,{children:"main.css"})," (which includes CSS variables and icons) — you don't need to import them separately."]}),`
`,e.jsxs(n.p,{children:["For a complete reference of all CSS theme variables, see the ",e.jsx(n.a,{href:"/docs/theming-variables--docs",children:"CSS Variables & Theming"})," guide."]}),`
`,e.jsxs(n.p,{children:["It supports both dynamic switching via a hook and injected mode through the ",e.jsx(n.code,{children:"injectedMode"})," prop."]}),`
`,e.jsx(n.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from "chop-logic-components";
import App from "./App";

export function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"injected-mode-fixed-theme",children:"Injected Mode (Fixed Theme)"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"injectedMode"})," to set a fixed theme without allowing user switching:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider, CL_DARK_THEME_CLASS } from "chop-logic-components";

export function App() {
  return (
    <ThemeProvider injectedMode={CL_DARK_THEME_CLASS}>
      <div>{/* content always in dark mode */}</div>
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"storybook-integration",children:"Storybook Integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider, CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from "chop-logic-components";
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
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": CSS is automatically included by ",e.jsx(n.code,{children:"ThemeProvider"}),", so you don't need to import it in your preview configuration."]}),`
`]}),`
`,e.jsx(n.h2,{id:"theme-hook",children:"Theme Hook"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx("code",{children:"useTheme()"})," hook provides access to the theme context and allows you to change the theme programmatically."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"}),": This hook only works inside a ",e.jsx(n.code,{children:"<ThemeProvider>"})," component in React projects."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useTheme, CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from "chop-logic-components";

export function ThemeToggleButton() {
  const { mode, setMode } = useTheme();

  const toggleTheme = () => {
    setMode(mode === CL_DARK_THEME_CLASS ? CL_LIGHT_THEME_CLASS : CL_DARK_THEME_CLASS);
  };

  return <button onClick={toggleTheme}>Toggle to {mode === CL_DARK_THEME_CLASS ? "Light" : "Dark"} Mode</button>;
}
`})}),`
`,e.jsx(n.h3,{id:"hook-properties",children:"Hook Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"mode"})}),": Current theme class (",e.jsx(n.code,{children:"CL_DARK_THEME_CLASS"})," or ",e.jsx(n.code,{children:"CL_LIGHT_THEME_CLASS"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"setMode(mode)"})}),": Update the current theme"]}),`
`]}),`
`,e.jsx(n.h2,{id:"manual-theme-switching-non-react",children:"Manual Theme Switching (Non-React)"}),`
`,e.jsx(n.p,{children:"For projects that don't use React Context (e.g., Astro, plain HTML, other frameworks), you can manually toggle the theme by manipulating the DOM:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Toggle theme by adding/removing class
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
`,e.jsx(n.h3,{id:"astro-example",children:"Astro Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-astro",children:`---
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
`,e.jsx(n.h3,{id:"theme-constants",children:"Theme Constants"}),`
`,e.jsx(n.p,{children:"Both React and HTML/JS projects use the same theme class names:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from "chop-logic-components";

// CL_DARK_THEME_CLASS = 'cl-components-dark-theme'
// CL_LIGHT_THEME_CLASS = 'cl-components-light-theme' (default, can be omitted)
`})}),`
`,e.jsx(n.p,{children:"For non-React projects, the classes are just strings:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Light theme (default) -->
<html>
  <!-- or explicitly: <html class="cl-components-light-theme"> -->
  <!-- components here get light theme colors -->
</html>

<!-- Dark theme -->
<html class="cl-components-dark-theme">
  <!-- components here get dark theme colors -->
</html>
`})}),`
`,e.jsx(n.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsxs(n.p,{children:["All theme colors are defined as CSS variables in ",e.jsx(n.code,{children:"main.css"})," and can be customized. See the ",e.jsx(n.a,{href:"/docs/theming-styling--docs",children:"Styling and CSS"})," page for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Complete list of available CSS variables"}),`
`,e.jsx(n.li,{children:"How to use them in custom styles"}),`
`,e.jsx(n.li,{children:"How theming affects your CSS"}),`
`]}),`
`,e.jsxs(n.p,{children:["For visual reference of the color palette, see the ",e.jsx(n.a,{href:"/docs/theming-colors--docs",children:"Colors"})," page."]})]})}function m(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{m as default};
