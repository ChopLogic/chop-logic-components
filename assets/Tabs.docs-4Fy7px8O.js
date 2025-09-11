var d=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(s,n,i)=>n in s?d(s,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[n]=i,t=(s,n)=>{for(var i in n||(n={}))j.call(n,i)&&c(s,i,n[i]);if(r)for(var i of r(n))p.call(n,i)&&c(s,i,n[i]);return s},l=(s,n)=>h(s,x(n));import{j as e}from"./iframe-DldSfwU-.js";import{useMDXComponents as a}from"./index-DelgR-sQ.js";import{M as b,b as m}from"./blocks-zF-hAATi.js";import{T as u}from"./Tabs.stories-D_tVR8xi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./orientation-mode-DcODxNNT.js";import"./get-class-name-CHDn80c0.js";import"./move-focus-on-element-by-id-CpbS-38o.js";function o(s){const n=t(t({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},a()),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(b,{of:u,title:"Tabs"}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tabs"})," component provides an accessible tabbed interface with support for both horizontal and vertical orientations, disabled states, and flexible content."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Tabs, { OrientationMode } from 'chop-logic-components';

const ProductTabs = () => {
  const tabs = [
    {
      id: 'details',
      title: 'Details',
      content: <ProductDetails />
    },
    {
      id: 'specs',
      title: 'Specifications',
      content: <ProductSpecs />
    }
  ];

  return (
    <Tabs
      tabs={tabs}
      mode={OrientationMode.Horizontal}
      defaultTabId="specs"
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to focus tab list"}),`
`,e.jsx(n.li,{children:"Arrow keys to navigate between tabs"}),`
`,e.jsx(n.li,{children:"Enter/Space to select focused tab"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces selected state"}),`
`,e.jsx(n.li,{children:"Describes tablist structure"}),`
`,e.jsx(n.li,{children:"Indicates disabled tabs"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Focus remains on active tab"}),`
`,e.jsx(n.li,{children:"Proper focus indicators"}),`
`,e.jsx(n.li,{children:"Logical tab order"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Organization"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep tab titles concise (1-2 words)"}),`
`,e.jsx(n.li,{children:"Group related content together"}),`
`,e.jsx(n.li,{children:"Limit number of tabs (recommend max 5-7)"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Content"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Load heavy content dynamically"}),`
`,e.jsx(n.li,{children:"Consider lazy-loading hidden tabs"}),`
`,e.jsx(n.li,{children:"Maintain consistent tab heights"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"States"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clearly indicate active tab"}),`
`,e.jsx(n.li,{children:"Visually distinguish disabled tabs"}),`
`,e.jsx(n.li,{children:"Provide loading states for async content"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(m,{})]})}function z(s={}){const{wrapper:n}=t(t({},a()),s.components);return n?e.jsx(n,l(t({},s),{children:e.jsx(o,t({},s))})):o(s)}export{z as default};
