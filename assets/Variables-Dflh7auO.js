import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as i}from"./index-Cm-1IS7I.js";import{M as o,b as r,c as s}from"./blocks-BtqpkElc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";function l(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Theming/Variables"}),`
`,e.jsx(n.h1,{id:"css-variables--theming",children:"CSS Variables & Theming"}),`
`,e.jsxs(n.p,{children:["The Chop Logic Components library uses ",e.jsx(n.strong,{children:"CSS custom properties"})," (CSS variables) for complete theming control. All colors, spacing, typography, and sizing are defined in ",e.jsx(n.a,{href:"/docs/theming-variables--docs",children:"src/styles/main.css"})," to ensure consistency across light and dark modes."]}),`
`,e.jsx(n.h2,{id:"design-philosophy",children:"Design Philosophy"}),`
`,e.jsx(n.p,{children:"Our styling approach is built on three core principles:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS Variables First"}),": All design tokens are defined as CSS custom properties in ",e.jsx(n.code,{children:":root"})," and theme-specific selectors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Centralized Theming"}),": Single source of truth in ",e.jsx(n.code,{children:"main.css"})," for all theme values"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Theme Switching"}),": Themes are switched by adding/removing the ",e.jsx(n.code,{children:"cl-components-dark-theme"})," class on the root element"]}),`
`]}),`
`,e.jsx(n.h2,{id:"color-palette",children:"Color Palette"}),`
`,e.jsx(n.h3,{id:"light-theme-colors",children:"Light Theme Colors"}),`
`,e.jsxs(r,{children:[e.jsx(s,{title:"Base Colors",subtitle:"Primary foreground and background",colors:{"--cl-base-font-color":"#000000","--cl-base-background-color":"#ffffff"}}),e.jsx(s,{title:"Accent Colors",subtitle:"Primary theme colors",colors:{"--cl-accent-a0":"#8d1c12","--cl-accent-a10":"#7d1c11","--cl-accent-a20":"#6d1b10","--cl-accent-a30":"#5e190f"}}),e.jsx(s,{title:"Surface Colors",subtitle:"Background surfaces and cards",colors:{"--cl-surface-a0":"#ffffff","--cl-surface-a10":"#f0f0f0","--cl-surface-a20":"#e1e1e1","--cl-surface-a30":"#d3d3d3"}}),e.jsx(s,{title:"Surface Tonal Colors",subtitle:"Tinted surface backgrounds",colors:{"--cl-surface-tonal-a0":"#f7e8e4","--cl-surface-tonal-a10":"#e9dcd8","--cl-surface-tonal-a20":"#dbd0cd","--cl-surface-tonal-a30":"#cec4c2"}}),e.jsx(s,{title:"Success Colors",subtitle:"For success states and confirmations",colors:{"--cl-success-a0":"#1b7f5c","--cl-success-a10":"#28be8a","--cl-success-a20":"#58dbad"}}),e.jsx(s,{title:"Warning Colors",subtitle:"For warning states and alerts",colors:{"--cl-warning-a0":"#b8871f","--cl-warning-a10":"#dfae44","--cl-warning-a20":"#ebca85"}}),e.jsx(s,{title:"Danger Colors",subtitle:"For error and destructive actions",colors:{"--cl-danger-a0":"#b13535","--cl-danger-a10":"#d06262","--cl-danger-a20":"#e29d9d"}}),e.jsx(s,{title:"Info Colors",subtitle:"For informational content",colors:{"--cl-info-a0":"#1e56a3","--cl-info-a10":"#347ada","--cl-info-a20":"#74a4e6"}})]}),`
`,e.jsx(n.h3,{id:"dark-theme-colors",children:"Dark Theme Colors"}),`
`,e.jsxs(r,{children:[e.jsx(s,{title:"Base Colors",subtitle:"Primary foreground and background",colors:{"--cl-base-font-color":"#ffffff","--cl-base-background-color":"#000000"}}),e.jsx(s,{title:"Accent Colors",subtitle:"Primary theme colors",colors:{"--cl-accent-a0":"#eb5cbe","--cl-accent-a10":"#ef71c5","--cl-accent-a20":"#f385cc","--cl-accent-a30":"#f697d4"}}),e.jsx(s,{title:"Surface Colors",subtitle:"Background surfaces and cards",colors:{"--cl-surface-a0":"#121212","--cl-surface-a10":"#282828","--cl-surface-a20":"#3f3f3f","--cl-surface-a30":"#575757"}}),e.jsx(s,{title:"Surface Tonal Colors",subtitle:"Tinted surface backgrounds",colors:{"--cl-surface-tonal-a0":"#251a21","--cl-surface-tonal-a10":"#3a2f36","--cl-surface-tonal-a20":"#4f464c","--cl-surface-tonal-a30":"#665d63"}}),e.jsx(s,{title:"Success Colors",subtitle:"For success states and confirmations",colors:{"--cl-success-a0":"#22946e","--cl-success-a10":"#47d5a6","--cl-success-a20":"#9ae8ce"}}),e.jsx(s,{title:"Warning Colors",subtitle:"For warning states and alerts",colors:{"--cl-warning-a0":"#a87a2a","--cl-warning-a10":"#d7ac61","--cl-warning-a20":"#ecd7b2"}}),e.jsx(s,{title:"Danger Colors",subtitle:"For error and destructive actions",colors:{"--cl-danger-a0":"#9c2121","--cl-danger-a10":"#d94a4a;","--cl-danger-a20":"#eb9e9e"}}),e.jsx(s,{title:"Info Colors",subtitle:"For informational content",colors:{"--cl-info-a0":"#21498a","--cl-info-a10":"#4077d1","--cl-info-a20":"#92b2e5"}})]}),`
`,e.jsx(n.h2,{id:"theme-gradients--effects",children:"Theme Gradients & Effects"}),`
`,e.jsx(n.p,{children:"All themes include predefined gradients and shadow effects:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-accent-gradient"})}),": Primary accent gradient for visual emphasis"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-box-shadow"})}),": Standard shadow for depth (2.4px offset)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-box-shadow-extended"})}),": Extended shadow for elevated elements (4.8px offset)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-text-shadow"})}),": Text shadow for text-on-color combinations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-drop-shadow"})}),": Drop shadow filter for images and special elements"]}),`
`]}),`
`,e.jsx(n.h2,{id:"border-variables",children:"Border Variables"}),`
`,e.jsx(n.p,{children:"Pre-defined border styles for semantic states:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-accent-border"})}),": Primary accent border"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-success-border"})}),": Green border for success states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-danger-border"})}),": Red border for error states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-warning-border"})}),": Orange border for warning states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-info-border"})}),": Blue border for info states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-light-border"})}),": Light gray border for subtle divisions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-outline-border"})}),": High-contrast outline border"]}),`
`]}),`
`,e.jsx(n.h2,{id:"typography-variables",children:"Typography Variables"}),`
`,e.jsx(n.h3,{id:"font-families",children:"Font Families"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-core-font"})}),": ",e.jsx(n.code,{children:"Arial, Helvetica, sans-serif"})," — Main font for UI text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-monospace-font"})}),": ",e.jsx(n.code,{children:'"Courier New", Courier, monospace'})," — Code and technical content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-fancy-font"})}),": ",e.jsx(n.code,{children:'Georgia, "Times New Roman", Times, serif'})," — Decorative text"]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-font-sizes",children:"Responsive Font Sizes"}),`
`,e.jsx(n.p,{children:"The library supports responsive typography that scales across device sizes:"}),`
`,e.jsx(n.h4,{id:"headings",children:"Headings"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H1"}),": ",e.jsx(n.code,{children:"2.25rem"})," (mobile) → ",e.jsx(n.code,{children:"2.5rem"})," (tablet) → ",e.jsx(n.code,{children:"3rem"})," (desktop)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H2"}),": ",e.jsx(n.code,{children:"2rem"})," (mobile) → ",e.jsx(n.code,{children:"2.25rem"})," (tablet) → ",e.jsx(n.code,{children:"2.5rem"})," (desktop)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H3"}),": ",e.jsx(n.code,{children:"1.75rem"})," (mobile) → ",e.jsx(n.code,{children:"2rem"})," (tablet) → ",e.jsx(n.code,{children:"2.25rem"})," (desktop)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H4"}),": ",e.jsx(n.code,{children:"1.5rem"})," (mobile) → ",e.jsx(n.code,{children:"1.75rem"})," (tablet) → ",e.jsx(n.code,{children:"2rem"})," (desktop)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H5"}),": ",e.jsx(n.code,{children:"1.25rem"})," (mobile) → ",e.jsx(n.code,{children:"1.5rem"})," (tablet) → ",e.jsx(n.code,{children:"1.75rem"})," (desktop)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"H6"}),": ",e.jsx(n.code,{children:"1rem"})," (mobile) → ",e.jsx(n.code,{children:"1.125rem"})," (tablet) → ",e.jsx(n.code,{children:"1.25rem"})," (desktop)"]}),`
`]}),`
`,e.jsx(n.h4,{id:"body-text",children:"Body Text"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Base"}),": ",e.jsx(n.code,{children:"1rem"})," (mobile) → ",e.jsx(n.code,{children:"1.125rem"})," (tablet) → ",e.jsx(n.code,{children:"1.25rem"})," (desktop)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": ",e.jsx(n.code,{children:"0.875rem"})," (mobile) → ",e.jsx(n.code,{children:"1rem"})," (tablet) → ",e.jsx(n.code,{children:"1.125rem"})," (desktop)"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage in CSS:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`h1 {
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
`,e.jsx(n.h2,{id:"spacing-gap-variables",children:"Spacing (Gap) Variables"}),`
`,e.jsx(n.p,{children:"Consistent spacing scale for margins, padding, and gaps:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-xs-gap"})}),": ",e.jsx(n.code,{children:"2px"})," — Minimal spacing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-s-gap"})}),": ",e.jsx(n.code,{children:"4px"})," — Small spacing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-m-gap"})}),": ",e.jsx(n.code,{children:"8px"})," — Medium spacing (most common)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-l-gap"})}),": ",e.jsx(n.code,{children:"16px"})," — Large spacing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-xl-gap"})}),": ",e.jsx(n.code,{children:"32px"})," — Extra large spacing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-xxl-gap"})}),": ",e.jsx(n.code,{children:"64px"})," — Maximum spacing"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.cl-card {
  padding: var(--cl-l-gap);
  gap: var(--cl-m-gap);
}
`})}),`
`,e.jsx(n.h2,{id:"component-sizing-variables",children:"Component Sizing Variables"}),`
`,e.jsx(n.h3,{id:"standard-sizes",children:"Standard Sizes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-icon-size"})}),": ",e.jsx(n.code,{children:"20px"})," — Standard icon dimensions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-thumb-size"})}),": ",e.jsx(n.code,{children:"24px"})," — Thumbnail and toggle switch sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-border-radius"})}),": ",e.jsx(n.code,{children:"4px"})," — Standard corner rounding"]}),`
`]}),`
`,e.jsx(n.h2,{id:"z-index-scale",children:"Z-Index Scale"}),`
`,e.jsx(n.p,{children:"Predictable stacking context for layered components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-z-index-base"})}),": ",e.jsx(n.code,{children:"1"})," — Default element layer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-z-index-menu"})}),": ",e.jsx(n.code,{children:"5"})," — Dropdown menus and tooltips"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-z-index-popup"})}),": ",e.jsx(n.code,{children:"10"})," — Popovers and floating panels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"--cl-z-index-modal"})}),": ",e.jsx(n.code,{children:"20"})," — Modals and dialogs (highest)"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.cl-tooltip {
  z-index: var(--cl-z-index-menu);
}

.cl-modal {
  z-index: var(--cl-z-index-modal);
}
`})}),`
`,e.jsx(n.h2,{id:"using-css-variables-in-components",children:"Using CSS Variables in Components"}),`
`,e.jsx(n.p,{children:"All Chop Logic Components use these CSS variables internally. You can customize the entire theme by overriding these variables in your application:"}),`
`,e.jsx(n.h3,{id:"global-theme-override",children:"Global Theme Override"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Override theme colors globally */
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
`,e.jsx(n.h3,{id:"component-specific-customization",children:"Component-Specific Customization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Customize a specific component's colors */
.my-custom-button {
  --cl-accent-a0: #custom-color;
  --cl-accent-a10: #custom-color-lighter;
}
`})}),`
`,e.jsx(n.h2,{id:"implementation-reference",children:"Implementation Reference"}),`
`,e.jsx(n.p,{children:"All Chop Logic Components follow this variable pattern when implementing styles. Here's a typical example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.cl-button {
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
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Always use CSS variables"})," instead of hardcoded colors in component styles"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use semantic color names"})," (",e.jsx(n.code,{children:"--cl-success-a0"})," instead of ",e.jsx(n.code,{children:"--cl-base-font-color"}),") for intent clarity"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Leverage spacing scale"})," to maintain visual hierarchy and consistency"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Follow BEM naming"})," with the ",e.jsx(n.code,{children:"cl-"})," prefix for all class names"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test both themes"})," to ensure colors have sufficient contrast in light and dark modes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Document custom variables"})," if you add theme-specific tokens beyond the standard set"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-documentation",children:"Related Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/theming-styling--docs",children:"Styling Guide"})," — CSS architecture and import patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/theming-provider--docs",children:"Theme Provider"})," — React context for theme management"]}),`
`]})]})}function g(c={}){const{wrapper:n}={...i(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(l,{...c})}):l(c)}export{g as default};
