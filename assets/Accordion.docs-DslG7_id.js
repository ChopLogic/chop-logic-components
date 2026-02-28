import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as o}from"./index-Cm-1IS7I.js";import{M as c,C as r}from"./blocks-BtqpkElc.js";import{A as t}from"./Accordion.stories-BIasZ4O_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";import"./get-class-name-BY88G7uf.js";import"./Icon-DgdWz_xl.js";import"./icon-name-DofyCo9k.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t,title:"Accordion"}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Accordion"})," component provides a collapsible list of items, allowing users to expand and collapse content sections. It uses native HTML ",e.jsx(n.code,{children:"<details>"})," and ",e.jsx(n.code,{children:"<summary>"})," elements for semantic structure and built-in accessibility."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "chop-logic-components";

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
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Content Structure"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep summary text concise and descriptive"}),`
`,e.jsx(n.li,{children:"Use clear language that indicates expandable content"}),`
`,e.jsx(n.li,{children:"Avoid very long content blocks within items"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Summaries should clearly describe the content"}),`
`,e.jsxs(n.li,{children:["Uses semantic HTML (",e.jsx(n.code,{children:"<details>"})," and ",e.jsx(n.code,{children:"<summary>"}),")"]}),`
`,e.jsx(n.li,{children:"Keyboard accessible by default (native browser behavior)"}),`
`,e.jsx(n.li,{children:"Chevron icon provides visual feedback for expand/collapse state"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"User Experience"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Consider the order of items for logical flow"}),`
`,e.jsx(n.li,{children:"Use for FAQs, feature lists, or content organization"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function b(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{b as default};
