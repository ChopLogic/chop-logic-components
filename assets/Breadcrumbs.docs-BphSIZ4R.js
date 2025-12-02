var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var t=(s,e,r)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,i=(s,e)=>{for(var r in e||(e={}))h.call(e,r)&&t(s,r,e[r]);if(o)for(var r of o(e))u.call(e,r)&&t(s,r,e[r]);return s},c=(s,e)=>m(s,p(e));import{j as n}from"./iframe-BtTQsrQT.js";import{useMDXComponents as l}from"./index-Ob56quG4.js";import{M as x,b as j}from"./blocks-BNpYbts6.js";import{B as b}from"./Breadcrumbs.stories--rpoO0_G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df9TIXKd.js";import"./index-2Wp6kII8.js";import"./Icon-Z7qWIs8D.js";import"./get-class-name-BY88G7uf.js";import"./Link-CeRkPZD9.js";function a(s){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},l()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:b,title:"Breadcrumbs"}),`
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
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Flexible Navigation"}),": Mix of linked and non-linked items"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Responsive Design"}),": Adapts to different screen sizes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Proper semantic structure and screen reader support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Visual Separators"}),": Icon-based separators that are ignored by screen readers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Icon Support"}),": Optional icons for enhanced visual context"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function I(s={}){const{wrapper:e}=i(i({},l()),s.components);return e?n.jsx(e,c(i({},s),{children:n.jsx(a,i({},s))})):a(s)}export{I as default};
