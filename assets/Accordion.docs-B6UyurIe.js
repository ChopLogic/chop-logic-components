import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-DM9h6Jyd.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-D4KZ0eBP.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Accordion.stories-DuucYA71.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Accordion`}),`
`,(0,d.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Accordion`}),` component provides a collapsible list of items, allowing users to expand and collapse content sections. It uses native HTML `,(0,d.jsx)(t.code,{children:`<details>`}),` and `,(0,d.jsx)(t.code,{children:`<summary>`}),` elements for semantic structure and built-in accessibility.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Accordion } from "chop-logic-components";

const FAQSection = () => {
  const items = [
    {
      summary: "How does it work?",
      children: "The accordion component uses HTML details elements for collapsible content.",
    },
    {
      summary: "Is it accessible?",
      children: "Yes, it uses semantic HTML and supports keyboard navigation.",
    },
  ];

  return <Accordion items={items} />;
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Content Structure`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Keep summary text concise and descriptive`}),`
`,(0,d.jsx)(t.li,{children:`Use clear language that indicates expandable content`}),`
`,(0,d.jsx)(t.li,{children:`Avoid very long content blocks within items`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Summaries should clearly describe the content`}),`
`,(0,d.jsxs)(t.li,{children:[`Uses semantic HTML (`,(0,d.jsx)(t.code,{children:`<details>`}),` and `,(0,d.jsx)(t.code,{children:`<summary>`}),`)`]}),`
`,(0,d.jsx)(t.li,{children:`Keyboard accessible by default (native browser behavior)`}),`
`,(0,d.jsx)(t.li,{children:`Chevron icon provides visual feedback for expand/collapse state`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`User Experience`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Consider the order of items for logical flow`}),`
`,(0,d.jsx)(t.li,{children:`Use for FAQs, feature lists, or content organization`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};