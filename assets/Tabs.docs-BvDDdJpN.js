var d=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(i,n,s)=>n in i?d(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,t=(i,n)=>{for(var s in n||(n={}))j.call(n,s)&&l(i,s,n[s]);if(r)for(var s of r(n))m.call(n,s)&&l(i,s,n[s]);return i},a=(i,n)=>h(i,x(n));import{j as e}from"./iframe-CvRPWbsI.js";import{useMDXComponents as o}from"./index-DkgwtVae.js";import{M as p,b}from"./blocks-CP88HKpN.js";import{T as u}from"./Tabs.stories-D7s-nQm3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5plyyUuw.js";import"./index-Bd_iq0lU.js";import"./orientation-mode-DcODxNNT.js";import"./get-class-name-CHDn80c0.js";import"./Button-BDoRLwTt.js";import"./Icon-D4WeBZx2.js";import"./Portal-BxFiLWB_.js";import"./use-click-outside-DRUTJ98G.js";import"./use-element-ids-D4ftutbs.js";import"./use-key-press-D_PIK434.js";import"./use-tooltip-position-D1mPn2zD.js";import"./use-container-dimensions-BMX8qGqg.js";import"./use-window-dimensions-Bgoe8stL.js";import"./move-focus-on-element-by-id-CpbS-38o.js";function c(i){const n=t(t({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul"},o()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:u,title:"Tabs"}),`
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

  return <Tabs tabs={tabs} mode={OrientationMode.Horizontal} defaultTabId='specs' />;
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
`,e.jsx(b,{})]})}function X(i={}){const{wrapper:n}=t(t({},o()),i.components);return n?e.jsx(n,a(t({},i),{children:e.jsx(c,t({},i))})):c(i)}export{X as default};
