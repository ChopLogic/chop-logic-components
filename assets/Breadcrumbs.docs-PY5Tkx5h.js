import{n as e}from"./chunk-DnJy8xQt.js";import{n as t}from"./iframe-y9k1Z_t0.js";import{r as n}from"./react-fJPLJOvc.js";import{a as r,d as i,u as a}from"./blocks-E9PD1hbZ.js";import{t as o}from"./mdx-react-shim-BZHZOuC3.js";import{n as s,t as c}from"./Breadcrumbs.stories-DY_76pXq.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Breadcrumbs`}),`
`,(0,d.jsx)(t.h1,{id:`breadcrumbs`,children:`Breadcrumbs`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Breadcrumbs`}),` component provides an accessible navigation aid that helps users understand their current location within a website hierarchy, following W3C accessibility guidelines.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Breadcrumbs, { IconName } from "chop-logic-components";

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
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Flexible Navigation`}),`: Mix of linked and non-linked items`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Responsive Design`}),`: Adapts to different screen sizes`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Proper semantic structure and screen reader support`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Visual Separators`}),`: Icon-based separators that are ignored by screen readers`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Icon Support`}),`: Optional icons for enhanced visual context`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};