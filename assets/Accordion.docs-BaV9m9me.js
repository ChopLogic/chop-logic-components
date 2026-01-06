var a=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(s,e,i)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,o=(s,e)=>{for(var i in e||(e={}))x.call(e,i)&&r(s,i,e[i]);if(c)for(var i of c(e))p.call(e,i)&&r(s,i,e[i]);return s},t=(s,e)=>h(s,m(e));import{j as n}from"./iframe-C2ng--48.js";import{useMDXComponents as d}from"./index-BFeXBWok.js";import{M as j,b as u}from"./blocks-_53u4lk0.js";import{A as f}from"./Accordion.stories-DjbCwbN-.js";import"./preload-helper-BDBacUwf.js";import"./index-CfInEO2Z.js";import"./index-BcQsO8Kp.js";import"./get-class-name-BY88G7uf.js";import"./Icon-Fv1_a00z.js";function l(s){const e=o(o({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},d()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:f,title:"Accordion"}),`
`,n.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Accordion"})," component provides a collapsible list of items, allowing users to expand and collapse content sections. It uses native HTML ",n.jsx(e.code,{children:"<details>"})," and ",n.jsx(e.code,{children:"<summary>"})," elements for semantic structure and built-in accessibility."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Accordion } from 'chop-logic-components';

const FAQSection = () => {
  const items = [
    {
      summary: 'How does it work?',
      children: 'The accordion component uses HTML details elements for collapsible content.',
    },
    {
      summary: 'Is it accessible?',
      children: 'Yes, it uses semantic HTML and supports keyboard navigation.',
    },
  ];

  return <Accordion items={items} />;
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Content Structure"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep summary text concise and descriptive"}),`
`,n.jsx(e.li,{children:"Use clear language that indicates expandable content"}),`
`,n.jsx(e.li,{children:"Avoid very long content blocks within items"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Summaries should clearly describe the content"}),`
`,n.jsxs(e.li,{children:["Uses semantic HTML (",n.jsx(e.code,{children:"<details>"})," and ",n.jsx(e.code,{children:"<summary>"}),")"]}),`
`,n.jsx(e.li,{children:"Keyboard accessible by default (native browser behavior)"}),`
`,n.jsx(e.li,{children:"Chevron icon provides visual feedback for expand/collapse state"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"User Experience"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Consider the order of items for logical flow"}),`
`,n.jsx(e.li,{children:"Use for FAQs, feature lists, or content organization"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function L(s={}){const{wrapper:e}=o(o({},d()),s.components);return e?n.jsx(e,t(o({},s),{children:n.jsx(l,o({},s))})):l(s)}export{L as default};
