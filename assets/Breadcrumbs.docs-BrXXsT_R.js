import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as i}from"./index-BeVWJvHh.js";import{M as o,C as t}from"./blocks-B9t17XrR.js";import{B as c}from"./Breadcrumbs.stories-CTAQtFP_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./icon-name-DofyCo9k.js";import"./get-class-name-BY88G7uf.js";import"./Icon-DTjVTp_9.js";import"./Link-DI1ggpWC.js";function s(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c,title:"Breadcrumbs"}),`
`,e.jsx(n.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Breadcrumbs"})," component provides an accessible navigation aid that helps users understand their current location within a website hierarchy, following W3C accessibility guidelines."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Breadcrumbs, { IconName } from "chop-logic-components";

const PageBreadcrumbs = () => (
  <Breadcrumbs
    items={[
      { label: "Home", icon: IconName.Home, link: "/" },
      { label: "Products", link: "/products" },
      { label: "Electronics", link: "/products/electronics" },
      { label: "Smartphones" }, // Current page - no link
    ]}
  />
);
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Flexible Navigation"}),": Mix of linked and non-linked items"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Responsive Design"}),": Adapts to different screen sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": Proper semantic structure and screen reader support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Visual Separators"}),": Icon-based separators that are ignored by screen readers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Icon Support"}),": Optional icons for enhanced visual context"]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{})]})}function g(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{g as default};
