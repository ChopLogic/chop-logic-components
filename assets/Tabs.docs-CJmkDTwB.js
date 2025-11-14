var o=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(i,n,s)=>n in i?o(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,t=(i,n)=>{for(var s in n||(n={}))j.call(n,s)&&l(i,s,n[s]);if(r)for(var s of r(n))m.call(n,s)&&l(i,s,n[s]);return i},a=(i,n)=>h(i,x(n));import{j as e}from"./iframe-31bCIIM-.js";import{useMDXComponents as d}from"./index-vnX_0a_R.js";import{M as p,b}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{T as u}from"./Tabs.stories-DZSOqZwe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./get-class-name-BY88G7uf.js";import"./Button-CXfa96Wd.js";import"./Icon-6YXdsa9S.js";import"./Portal-CMw-vLpD.js";import"./use-click-outside-CQLMYb8q.js";import"./use-element-ids-1s10h2JT.js";import"./use-key-press-CntNC4so.js";import"./use-tooltip-position-CVK-av31.js";import"./use-container-dimensions-DQi1v_pT.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./orientation-mode-DcODxNNT.js";function c(i){const n=t(t({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:u,title:"Tabs"}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tabs"})," component provides an accessible tabbed interface with support for both horizontal and vertical orientations, disabled states, editable titles, and dynamic tab management."]}),`
`,e.jsx(n.h3,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Orientations"}),": Horizontal and vertical tab layouts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Editable Titles"}),": In-place editing of tab names"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Tabs"}),": Add and remove tabs dynamically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessible"}),": Full keyboard navigation and screen reader support"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Content"}),": Support for any React content in tab panels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable"}),": Stretched mode, disabled states, and custom styling"]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
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
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to focus tab list"}),`
`,e.jsx(n.li,{children:"Arrow keys to navigate between tabs"}),`
`,e.jsx(n.li,{children:"Enter/Space to select focused tab"}),`
`,e.jsx(n.li,{children:"Escape to cancel editing mode"}),`
`,e.jsx(n.li,{children:"In edit mode: Enter to save, Escape to cancel"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces selected state"}),`
`,e.jsx(n.li,{children:"Describes tablist structure"}),`
`,e.jsx(n.li,{children:"Indicates disabled tabs"}),`
`,e.jsx(n.li,{children:"Provides context for dynamic tab operations"}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Dynamic Tab Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide meaningful default names for new tabs"}),`
`,e.jsx(n.li,{children:"Consider implementing tab reordering if needed"}),`
`,e.jsx(n.li,{children:"Validate tab titles to prevent empty or duplicate names"}),`
`,e.jsx(n.li,{children:"Provide undo functionality for accidental tab deletion"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(b,{})]})}function R(i={}){const{wrapper:n}=t(t({},d()),i.components);return n?e.jsx(n,a(t({},i),{children:e.jsx(c,t({},i))})):c(i)}export{R as default};
