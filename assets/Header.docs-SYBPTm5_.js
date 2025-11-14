var c=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var a=(i,e,s)=>e in i?c(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,r=(i,e)=>{for(var s in e||(e={}))x.call(e,s)&&a(i,s,e[s]);if(o)for(var s of o(e))m.call(e,s)&&a(i,s,e[s]);return i},t=(i,e)=>h(i,p(e));import{j as n}from"./iframe-31bCIIM-.js";import{useMDXComponents as d}from"./index-vnX_0a_R.js";import{M as u,b as j}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{H as g}from"./Header.stories-D2d0oppx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./Header-D1ODPAKb.js";import"./Icon-6YXdsa9S.js";import"./get-class-name-BY88G7uf.js";function l(i){const e=r(r({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul"},d()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:g,title:"Header"}),`
`,n.jsx(e.h1,{id:"header",children:"Header"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Header"})," component provides a flexible heading element that can render as any HTML heading level (h1-h6) and optionally include an icon. It's designed to maintain consistent styling across all heading levels while providing semantic HTML structure."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Header, IconName } from 'chop-logic-components';

const PageHeader = () => (
  <div>
    <Header as="h1" icon={IconName.Home}>
      Welcome
    </Header>
    <Header as="h2">Section Title</Header>
    <Header as="h3" className="special-header" id="subsection">
      With Custom Class
    </Header>
  </div>
);

export default PageHeader;
`})}),`
`,n.jsx(e.h3,{id:"when-to-use",children:"When to Use"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"For all heading elements in your application"}),`
`,n.jsx(e.li,{children:"When you need semantic heading structure (h1-h6)"}),`
`,n.jsx(e.li,{children:"When you want to maintain consistent heading styles across your application"}),`
`,n.jsx(e.li,{children:"When you need headings with optional icons"}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Heading Hierarchy"}),": Maintain a logical heading structure (h1 followed by h2, etc.) for proper document outline."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon Decoration"}),": When using icons, ensure they're purely decorative or provide additional context via ARIA attributes if they convey meaning."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Landmark Roles"}),": Consider wrapping standalone headers in ",n.jsx(e.code,{children:"<Header>"})," elements when appropriate."]}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use only one h1 per page"}),`
`,n.jsx(e.li,{children:"Maintain heading hierarchy (don't skip levels)"}),`
`,n.jsx(e.li,{children:"Keep header text concise and descriptive"}),`
`,n.jsx(e.li,{children:"Use icons sparingly and only when they add value"}),`
`,n.jsx(e.li,{children:"Prefer semantic heading levels over visual appearance"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function P(i={}){const{wrapper:e}=r(r({},d()),i.components);return e?n.jsx(e,t(r({},i),{children:n.jsx(l,r({},i))})):l(i)}export{P as default};
