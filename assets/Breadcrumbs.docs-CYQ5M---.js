var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var t=(s,e,r)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,i=(s,e)=>{for(var r in e||(e={}))h.call(e,r)&&t(s,r,e[r]);if(o)for(var r of o(e))u.call(e,r)&&t(s,r,e[r]);return s},c=(s,e)=>m(s,p(e));import{j as n}from"./iframe-BBnnbBfy.js";import{useMDXComponents as l}from"./index-Cc_5Bw9t.js";import{M as x,b as j}from"./blocks-BqYnnMm3.js";import{B as b}from"./Breadcrumbs.stories-BK3WLpSn.js";import"./preload-helper-BDBacUwf.js";import"./index-SbOQj9hQ.js";import"./index-DEQMa67G.js";import"./Icon-D3WKOnh1.js";import"./get-class-name-BY88G7uf.js";import"./Link-DEKJrGwu.js";function a(s){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},l()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:b,title:"Breadcrumbs"}),`
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
