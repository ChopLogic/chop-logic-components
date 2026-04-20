import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{d as r,i,r as a,u as o}from"./blocks-B4li4WkW.js";import{t as s}from"./mdx-react-shim-DUEj6aPQ.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{title:`Theming/Variables`}),`
`,(0,u.jsx)(t.h1,{id:`css-variables--theming`,children:`CSS Variables & Theming`}),`
`,(0,u.jsxs)(t.p,{children:[`The Chop Logic Components library uses `,(0,u.jsx)(t.strong,{children:`CSS custom properties`}),` (CSS variables) for complete theming control. All colors, spacing, typography, and sizing are defined in `,(0,u.jsx)(t.a,{href:`/docs/theming-variables--docs`,children:`src/styles/main.css`}),` to ensure consistency across light and dark modes.`]}),`
`,(0,u.jsx)(t.h2,{id:`design-philosophy`,children:`Design Philosophy`}),`
`,(0,u.jsx)(t.p,{children:`Our styling approach is built on three core principles:`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`CSS Variables First`}),`: All design tokens are defined as CSS custom properties in `,(0,u.jsx)(t.code,{children:`:root`}),` and theme-specific selectors`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Centralized Theming`}),`: Single source of truth in `,(0,u.jsx)(t.code,{children:`main.css`}),` for all theme values`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Dynamic Theme Switching`}),`: Themes are switched by adding/removing the `,(0,u.jsx)(t.code,{children:`cl-components-dark-theme`}),` class on the root element`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`color-palette`,children:`Color Palette`}),`
`,(0,u.jsx)(t.h3,{id:`light-theme-colors`,children:`Light Theme Colors`}),`
`,(0,u.jsxs)(i,{children:[(0,u.jsx)(a,{title:`Base Colors`,subtitle:`Primary foreground and background`,colors:{"--cl-base-font-color":`#000000`,"--cl-base-background-color":`#ffffff`}}),(0,u.jsx)(a,{title:`Accent Colors`,subtitle:`Primary theme colors`,colors:{"--cl-accent-a0":`#8d1c12`,"--cl-accent-a10":`#7d1c11`,"--cl-accent-a20":`#6d1b10`,"--cl-accent-a30":`#5e190f`}}),(0,u.jsx)(a,{title:`Surface Colors`,subtitle:`Background surfaces and cards`,colors:{"--cl-surface-a0":`#ffffff`,"--cl-surface-a10":`#f0f0f0`,"--cl-surface-a20":`#e1e1e1`,"--cl-surface-a30":`#d3d3d3`}}),(0,u.jsx)(a,{title:`Surface Tonal Colors`,subtitle:`Tinted surface backgrounds`,colors:{"--cl-surface-tonal-a0":`#f7e8e4`,"--cl-surface-tonal-a10":`#e9dcd8`,"--cl-surface-tonal-a20":`#dbd0cd`,"--cl-surface-tonal-a30":`#cec4c2`}}),(0,u.jsx)(a,{title:`Success Colors`,subtitle:`For success states and confirmations`,colors:{"--cl-success-a0":`#1b7f5c`,"--cl-success-a10":`#28be8a`,"--cl-success-a20":`#58dbad`}}),(0,u.jsx)(a,{title:`Warning Colors`,subtitle:`For warning states and alerts`,colors:{"--cl-warning-a0":`#b8871f`,"--cl-warning-a10":`#dfae44`,"--cl-warning-a20":`#ebca85`}}),(0,u.jsx)(a,{title:`Danger Colors`,subtitle:`For error and destructive actions`,colors:{"--cl-danger-a0":`#b13535`,"--cl-danger-a10":`#d06262`,"--cl-danger-a20":`#e29d9d`}}),(0,u.jsx)(a,{title:`Info Colors`,subtitle:`For informational content`,colors:{"--cl-info-a0":`#1e56a3`,"--cl-info-a10":`#347ada`,"--cl-info-a20":`#74a4e6`}})]}),`
`,(0,u.jsx)(t.h3,{id:`dark-theme-colors`,children:`Dark Theme Colors`}),`
`,(0,u.jsxs)(i,{children:[(0,u.jsx)(a,{title:`Base Colors`,subtitle:`Primary foreground and background`,colors:{"--cl-base-font-color":`#ffffff`,"--cl-base-background-color":`#000000`}}),(0,u.jsx)(a,{title:`Accent Colors`,subtitle:`Primary theme colors`,colors:{"--cl-accent-a0":`#eb5cbe`,"--cl-accent-a10":`#ef71c5`,"--cl-accent-a20":`#f385cc`,"--cl-accent-a30":`#f697d4`}}),(0,u.jsx)(a,{title:`Surface Colors`,subtitle:`Background surfaces and cards`,colors:{"--cl-surface-a0":`#121212`,"--cl-surface-a10":`#282828`,"--cl-surface-a20":`#3f3f3f`,"--cl-surface-a30":`#575757`}}),(0,u.jsx)(a,{title:`Surface Tonal Colors`,subtitle:`Tinted surface backgrounds`,colors:{"--cl-surface-tonal-a0":`#251a21`,"--cl-surface-tonal-a10":`#3a2f36`,"--cl-surface-tonal-a20":`#4f464c`,"--cl-surface-tonal-a30":`#665d63`}}),(0,u.jsx)(a,{title:`Success Colors`,subtitle:`For success states and confirmations`,colors:{"--cl-success-a0":`#9ae8ce`,"--cl-success-a0":`#22946e`,"--cl-success-a20":`#47d5a6`}}),(0,u.jsx)(a,{title:`Warning Colors`,subtitle:`For warning states and alerts`,colors:{"--cl-warning-a0":`#a87a2a`,"--cl-warning-a10":`#d7ac61`,"--cl-warning-a20":`#ecd7b2`}}),(0,u.jsx)(a,{title:`Danger Colors`,subtitle:`For error and destructive actions`,colors:{"--cl-danger-a0":`#eb9e9e`,"--cl-danger-a0":`#9c2121`,"--cl-danger-a20":`#d94a4a;`}}),(0,u.jsx)(a,{title:`Info Colors`,subtitle:`For informational content`,colors:{"--cl-info-a0":`#92b2e5`,"--cl-info-a0":`#21498a`,"--cl-info-a20":`#4077d1`}})]}),`
`,(0,u.jsx)(t.h2,{id:`theme-gradients--effects`,children:`Theme Gradients & Effects`}),`
`,(0,u.jsx)(t.p,{children:`All themes include predefined gradients and shadow effects:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-accent-gradient`})}),`: Primary accent gradient for visual emphasis`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-box-shadow`})}),`: Standard shadow for depth (2.4px offset)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-box-shadow-extended`})}),`: Extended shadow for elevated elements (4.8px offset)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-text-shadow`})}),`: Text shadow for text-on-color combinations`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-drop-shadow`})}),`: Drop shadow filter for images and special elements`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`border-variables`,children:`Border Variables`}),`
`,(0,u.jsx)(t.p,{children:`Pre-defined border styles for semantic states:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-accent-border`})}),`: Primary accent border`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-success-border`})}),`: Green border for success states`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-danger-border`})}),`: Red border for error states`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-warning-border`})}),`: Orange border for warning states`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-info-border`})}),`: Blue border for info states`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-light-border`})}),`: Light gray border for subtle divisions`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-outline-border`})}),`: High-contrast outline border`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`typography-variables`,children:`Typography Variables`}),`
`,(0,u.jsx)(t.h3,{id:`font-families`,children:`Font Families`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-core-font`})}),`: `,(0,u.jsx)(t.code,{children:`Arial, Helvetica, sans-serif`}),` — Main font for UI text`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-monospace-font`})}),`: `,(0,u.jsx)(t.code,{children:`"Courier New", Courier, monospace`}),` — Code and technical content`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-fancy-font`})}),`: `,(0,u.jsx)(t.code,{children:`Georgia, "Times New Roman", Times, serif`}),` — Decorative text`]}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`responsive-font-sizes`,children:`Responsive Font Sizes`}),`
`,(0,u.jsx)(t.p,{children:`The library supports responsive typography that scales across device sizes:`}),`
`,(0,u.jsx)(t.h4,{id:`headings`,children:`Headings`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`H1`}),`: `,(0,u.jsx)(t.code,{children:`2.25rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`2.5rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`3rem`}),` (desktop)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`H2`}),`: `,(0,u.jsx)(t.code,{children:`2rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`2.25rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`2.5rem`}),` (desktop)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`H3`}),`: `,(0,u.jsx)(t.code,{children:`1.75rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`2rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`2.25rem`}),` (desktop)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`H4`}),`: `,(0,u.jsx)(t.code,{children:`1.5rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`1.75rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`2rem`}),` (desktop)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`H5`}),`: `,(0,u.jsx)(t.code,{children:`1.25rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`1.5rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`1.75rem`}),` (desktop)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`H6`}),`: `,(0,u.jsx)(t.code,{children:`1rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`1.125rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`1.25rem`}),` (desktop)`]}),`
`]}),`
`,(0,u.jsx)(t.h4,{id:`body-text`,children:`Body Text`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Base`}),`: `,(0,u.jsx)(t.code,{children:`1rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`1.125rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`1.25rem`}),` (desktop)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Small`}),`: `,(0,u.jsx)(t.code,{children:`0.875rem`}),` (mobile) → `,(0,u.jsx)(t.code,{children:`1rem`}),` (tablet) → `,(0,u.jsx)(t.code,{children:`1.125rem`}),` (desktop)`]}),`
`]}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.strong,{children:`Usage in CSS:`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`h1 {
  font-family: var(--cl-core-font);
  font-size: var(--cl-typography-h1-mobile);
}

@media (min-width: 768px) {
  h1 {
    font-size: var(--cl-typography-h1-tablet);
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: var(--cl-typography-h1-desktop);
  }
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`spacing-gap-variables`,children:`Spacing (Gap) Variables`}),`
`,(0,u.jsx)(t.p,{children:`Consistent spacing scale for margins, padding, and gaps:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-xs-gap`})}),`: `,(0,u.jsx)(t.code,{children:`2px`}),` — Minimal spacing`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-s-gap`})}),`: `,(0,u.jsx)(t.code,{children:`4px`}),` — Small spacing`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-m-gap`})}),`: `,(0,u.jsx)(t.code,{children:`8px`}),` — Medium spacing (most common)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-l-gap`})}),`: `,(0,u.jsx)(t.code,{children:`16px`}),` — Large spacing`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-xl-gap`})}),`: `,(0,u.jsx)(t.code,{children:`32px`}),` — Extra large spacing`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-xxl-gap`})}),`: `,(0,u.jsx)(t.code,{children:`64px`}),` — Maximum spacing`]}),`
`]}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.cl-card {
  padding: var(--cl-l-gap);
  gap: var(--cl-m-gap);
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`component-sizing-variables`,children:`Component Sizing Variables`}),`
`,(0,u.jsx)(t.h3,{id:`standard-sizes`,children:`Standard Sizes`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-icon-size`})}),`: `,(0,u.jsx)(t.code,{children:`20px`}),` — Standard icon dimensions`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-thumb-size`})}),`: `,(0,u.jsx)(t.code,{children:`24px`}),` — Thumbnail and toggle switch sizes`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-border-radius`})}),`: `,(0,u.jsx)(t.code,{children:`4px`}),` — Standard corner rounding`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`z-index-scale`,children:`Z-Index Scale`}),`
`,(0,u.jsx)(t.p,{children:`Predictable stacking context for layered components:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-z-index-base`})}),`: `,(0,u.jsx)(t.code,{children:`1`}),` — Default element layer`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-z-index-menu`})}),`: `,(0,u.jsx)(t.code,{children:`5`}),` — Dropdown menus and tooltips`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-z-index-popup`})}),`: `,(0,u.jsx)(t.code,{children:`10`}),` — Popovers and floating panels`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:(0,u.jsx)(t.code,{children:`--cl-z-index-modal`})}),`: `,(0,u.jsx)(t.code,{children:`20`}),` — Modals and dialogs (highest)`]}),`
`]}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.cl-tooltip {
  z-index: var(--cl-z-index-menu);
}

.cl-modal {
  z-index: var(--cl-z-index-modal);
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`using-css-variables-in-components`,children:`Using CSS Variables in Components`}),`
`,(0,u.jsx)(t.p,{children:`All Chop Logic Components use these CSS variables internally. You can customize the entire theme by overriding these variables in your application:`}),`
`,(0,u.jsx)(t.h3,{id:`global-theme-override`,children:`Global Theme Override`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`/* Override theme colors globally */
:root {
  --cl-accent-a0: #your-primary-color;
  --cl-success-a0: #your-success-color;
  --cl-warning-a0: #your-warning-color;
}

/* Override dark theme */
.cl-components-dark-theme {
  --cl-accent-a0: #your-dark-primary-color;
}
`})}),`
`,(0,u.jsx)(t.h3,{id:`component-specific-customization`,children:`Component-Specific Customization`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`/* Customize a specific component's colors */
.my-custom-button {
  --cl-accent-a0: #custom-color;
  --cl-accent-a10: #custom-color-lighter;
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`implementation-reference`,children:`Implementation Reference`}),`
`,(0,u.jsx)(t.p,{children:`All Chop Logic Components follow this variable pattern when implementing styles. Here's a typical example:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.cl-button {
  /* Use semantic color variables */
  background-color: var(--cl-accent-a0);
  color: var(--cl-surface-a0);
  border: var(--cl-accent-border);

  /* Use standard spacing */
  padding: var(--cl-m-gap) var(--cl-l-gap);

  /* Use typography variables */
  font-family: var(--cl-core-font);

  /* Use shadow effects */
  box-shadow: var(--cl-box-shadow);

  /* Z-index for stacking */
  z-index: var(--cl-z-index-base);

  /* Border radius */
  border-radius: var(--cl-border-radius);
}

.cl-button:hover {
  background-color: var(--cl-accent-a10);
}

/* Dark theme automatically applies via CSS variable override */
`})}),`
`,(0,u.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Always use CSS variables`}),` instead of hardcoded colors in component styles`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Use semantic color names`}),` (`,(0,u.jsx)(t.code,{children:`--cl-success-a0`}),` instead of `,(0,u.jsx)(t.code,{children:`--cl-base-font-color`}),`) for intent clarity`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Leverage spacing scale`}),` to maintain visual hierarchy and consistency`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Follow BEM naming`}),` with the `,(0,u.jsx)(t.code,{children:`cl-`}),` prefix for all class names`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Test both themes`}),` to ensure colors have sufficient contrast in light and dark modes`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Document custom variables`}),` if you add theme-specific tokens beyond the standard set`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`related-documentation`,children:`Related Documentation`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.a,{href:`/docs/theming-styling--docs`,children:`Styling Guide`}),` — CSS architecture and import patterns`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.a,{href:`/docs/theming-provider--docs`,children:`Theme Provider`}),` — React context for theme management`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),s(),r()}))();export{l as default};