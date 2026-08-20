import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BxXWrdMh.js";import{i as n,r}from"./react-CD1Hm7R8.js";import{a as i,d as a,u as o}from"./blocks-CKHDPeoR.js";import{n as s,t as c}from"./Breadcrumbs.stories-DhTxUqLb.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Breadcrumbs`}),`
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
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};