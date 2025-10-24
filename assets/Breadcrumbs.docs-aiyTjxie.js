var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(r,e,i)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,s=(r,e)=>{for(var i in e||(e={}))p.call(e,i)&&l(r,i,e[i]);if(c)for(var i of c(e))x.call(e,i)&&l(r,i,e[i]);return r},o=(r,e)=>h(r,m(e));import{j as n}from"./iframe-CNQVeOyN.js";import{useMDXComponents as a}from"./index-Dq8nhtZB.js";import{M as u,b as j}from"./blocks-D9AK9NK6.js";import{B as b}from"./Breadcrumbs.stories-CY2h-RWP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DekENkd-.js";import"./index-DWIUdGCw.js";import"./Icon-CGvp8Awk.js";import"./get-class-name-BY88G7uf.js";import"./Link-Bh8qynFh.js";function t(r){const e=s(s({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},a()),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:b,title:"Breadcrumbs"}),`
`,n.jsx(e.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Breadcrumbs"})," component provides an accessible navigation aid that helps users understand their current location within a website hierarchy, following W3C accessibility guidelines."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Breadcrumbs, { IconName } from 'chop-logic-components';

const PageBreadcrumbs = () => (
  <Breadcrumbs
    items={[
      { label: 'Home', icon: IconName.Home, link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Electronics', link: '/products/electronics' },
      { label: 'Smartphones' }, // Current page - no link
    ]}
  />
);
`})}),`
`,n.jsx(e.h3,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"W3C Compliant"}),": Follows WAI-ARIA Breadcrumb pattern"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Proper semantic structure and screen reader support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Visual Separators"}),": Icon-based separators that are ignored by screen readers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Icon Support"}),": Optional icons for enhanced visual context"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Responsive Design"}),": Adapts to different screen sizes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Flexible Navigation"}),": Mix of linked and non-linked items"]}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses ",n.jsx(e.code,{children:"<nav>"}),' with aria-label="Breadcrumb"']}),`
`,n.jsxs(e.li,{children:["Ordered list (",n.jsx(e.code,{children:"<ol>"}),") for proper hierarchy"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'aria-current="page"'})," for the current page item"]}),`
`,n.jsx(e.li,{children:"Visual separators hidden from screen readers"}),`
`,n.jsxs(e.li,{children:["Icons have ",n.jsx(e.code,{children:'aria-hidden="true"'})," when decorative"]}),`
`,n.jsx(e.li,{children:"Clear navigation landmark with descriptive label"}),`
`,n.jsx(e.li,{children:"Full keyboard accessibility for linked items"}),`
`,n.jsx(e.li,{children:"Proper focus management"}),`
`,n.jsx(e.li,{children:"Logical tab order"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function F(r={}){const{wrapper:e}=s(s({},a()),r.components);return e?n.jsx(e,o(s({},r),{children:n.jsx(t,s({},r))})):t(r)}export{F as default};
