var c=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(i,n,t)=>n in i?c(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t,s=(i,n)=>{for(var t in n||(n={}))p.call(n,t)&&o(i,t,n[t]);if(r)for(var t of r(n))x.call(n,t)&&o(i,t,n[t]);return i},l=(i,n)=>h(i,m(n));import{j as e}from"./iframe-CD-frcvH.js";import{useMDXComponents as d}from"./index-_ZbGk_Ih.js";import{M as j,b}from"./blocks-ymH_-mwP.js";import{T as u}from"./Tabs.stories-DBQPCBt3.js";import"./preload-helper-BDBacUwf.js";import"./index-C3T1o3xO.js";import"./index-B0E5RUGE.js";import"./orientation-mode-DcODxNNT.js";import"./get-class-name-BY88G7uf.js";import"./Button-DDUA5BZI.js";import"./Icon-B65JLDHH.js";import"./Portal-BIM2YJ8v.js";import"./use-click-outside-Djb0kFGZ.js";import"./use-element-ids-wl8PXiJz.js";import"./use-key-press-Bh2qczgO.js";import"./use-tooltip-position-CrP_wmZe.js";import"./use-container-dimensions-V4xUCHit.js";import"./move-focus-on-element-by-id-CpbS-38o.js";function a(i){const n=s(s({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:u,title:"Tabs"}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tabs"})," component provides an accessible tabbed interface with support for both horizontal and vertical orientations, disabled states, editable titles, and dynamic tab management."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Tabs, { OrientationMode } from 'chop-logic-components';

const ProductTabs = () => {
  const tabs = [
    {
      id: 'details',
      title: 'Details',
      content: <ProductDetails />,
    },
    {
      id: 'specs',
      title: 'Specifications',
      content: <ProductSpecs />,
    },
  ];

  return <Tabs tabs={tabs} mode={OrientationMode.Horizontal} defaultTabId="specs" />;
};
`})}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Organization"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep tab titles concise (1-2 words)"}),`
`,e.jsx(n.li,{children:"Group related content together"}),`
`,e.jsx(n.li,{children:"Limit number of tabs (recommend max 5-7)"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Content"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Load heavy content dynamically"}),`
`,e.jsx(n.li,{children:"Consider lazy-loading hidden tabs"}),`
`,e.jsx(n.li,{children:"Maintain consistent tab heights"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"States"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clearly indicate active tab"}),`
`,e.jsx(n.li,{children:"Visually distinguish disabled tabs"}),`
`,e.jsx(n.li,{children:"Provide loading states for async content"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Dynamic Tab Management"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide meaningful default names for new tabs"}),`
`,e.jsx(n.li,{children:"Consider implementing tab reordering if needed"}),`
`,e.jsx(n.li,{children:"Validate tab titles to prevent empty or duplicate names"}),`
`,e.jsx(n.li,{children:"Provide undo functionality for accidental tab deletion"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(b,{})]})}function F(i={}){const{wrapper:n}=s(s({},d()),i.components);return n?e.jsx(n,l(s({},i),{children:e.jsx(a,s({},i))})):a(i)}export{F as default};
