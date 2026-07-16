import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t}from"./iframe-L3lfpXVe.js";import{C as n,a as r,d as i,u as a}from"./blocks---6jBrge.js";import{t as o}from"./mdx-react-shim-BU12VtN1.js";import{n as s,t as c}from"./Tag.stories-DR7SBf57.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Tag`}),`
`,(0,d.jsx)(t.h1,{id:`tag`,children:`Tag`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Tag`}),` component renders a keyword or category label as an inline pill. It supports an optional tooltip tooltip shown on hover and a custom background color via CSS custom properties.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Tag } from "chop-logic-components";

<Tag name="React" />

<Tag name="TypeScript" tooltip="A typed superset of JavaScript" />

<Tag name="Success" color="#4CAF50" />
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: When a `,(0,d.jsx)(t.code,{children:`tooltip`}),` is provided, it is exposed via a Tooltip with `,(0,d.jsx)(t.code,{children:`aria-describedby`}),`, allowing screen readers to announce additional context when the tag receives focus.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Color Usage`}),`: Use the `,(0,d.jsx)(t.code,{children:`color`}),` prop sparingly for semantic meaning (e.g., category differentiation). The default theme color works well in most cases.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Empty Names`}),`: Avoid passing an empty `,(0,d.jsx)(t.code,{children:`name`}),` prop in production — the tag will render with no visible text, which may confuse users.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Keyboard Navigation`}),`: Tags are focusable via `,(0,d.jsx)(t.code,{children:`tabIndex`}),`. When focused, screen readers announce the tag label from its text content.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};