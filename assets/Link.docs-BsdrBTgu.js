var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(i,n,t)=>n in i?m(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t,r=(i,n)=>{for(var t in n||(n={}))h.call(n,t)&&o(i,t,n[t]);if(s)for(var t of s(n))x.call(n,t)&&o(i,t,n[t]);return i},l=(i,n)=>p(i,d(n));import{j as e}from"./iframe-BmuDlTXj.js";import{useMDXComponents as a}from"./index-fyvzVCqG.js";import{M as u,b as j}from"./WithTooltip-SK46ZJ2J-DHnU7zBw.js";import{L as f}from"./Link.stories-CgLRd8OJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Pllxgza8.js";import"./index-j1Ny9zJx.js";import"./Icon-DwABg4QY.js";import"./get-class-name-BY88G7uf.js";import"./Link-D71lyNu2.js";function c(i){const n=r(r({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul"},a()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:f,title:"Atoms/Link"}),`
`,e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Link"})," component provides an accessible, flexible link implementation with icon support and automatic external link handling."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Link, { IconName } from 'chop-logic-components';

const Navigation = () => (
  <nav>
    <Link href="/home">Home</Link>
    <Link href="https://external-site.com" icon={IconName.External} external>
      External Site
    </Link>
  </nav>
);
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Automatic External Link Detection"}),": Automatically detects external URLs and applies security attributes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Icon Support"}),": Optional icons with configurable positioning"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": Proper ARIA labels for external links and screen reader support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Flexible"}),": Supports all standard anchor element attributes"]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(j,{})]})}function I(i={}){const{wrapper:n}=r(r({},a()),i.components);return n?e.jsx(n,l(r({},i),{children:e.jsx(c,r({},i))})):c(i)}export{I as default};
