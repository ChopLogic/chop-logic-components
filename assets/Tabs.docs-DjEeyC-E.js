import{j as n}from"./iframe-BE0m_rxZ.js";import{useMDXComponents as s}from"./index-DN6OSM-t.js";import{M as r,C as o}from"./blocks-PHoQ31L0.js";import{T as l}from"./Tabs.stories-BbFtFMSQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VMfd0C6x.js";import"./index-BvXq4JMu.js";import"./orientation-mode-DcODxNNT.js";import"./get-class-name-BY88G7uf.js";import"./Button-Dr_tTr2y.js";import"./Portal-BtVHOS3f.js";import"./use-click-outside-BwpNYTT7.js";import"./use-element-ids-Ckr366yW.js";import"./use-key-press-Clc6TnDG.js";import"./use-tooltip-position-O-ml2ORG.js";import"./use-container-dimensions-Bessy-1Z.js";import"./Icon-B4lOYJs1.js";import"./icon-name-DofyCo9k.js";import"./move-focus-on-element-by-id-CpbS-38o.js";function t(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l,title:"Tabs"}),`
`,n.jsx(e.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Tabs"})," component provides an accessible tabbed interface with support for both horizontal and vertical orientations, disabled states, editable titles, and dynamic tab management."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Tabs, { OrientationMode } from "chop-logic-components";

const ProductTabs = () => {
  const tabs = [
    {
      id: "details",
      title: "Details",
      content: <ProductDetails />,
    },
    {
      id: "specs",
      title: "Specifications",
      content: <ProductSpecs />,
    },
  ];

  return <Tabs tabs={tabs} mode={OrientationMode.Horizontal} defaultTabId="specs" />;
};
`})}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Organization"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep tab titles concise (1-2 words)"}),`
`,n.jsx(e.li,{children:"Group related content together"}),`
`,n.jsx(e.li,{children:"Limit number of tabs (recommend max 5-7)"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Content"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Load heavy content dynamically"}),`
`,n.jsx(e.li,{children:"Consider lazy-loading hidden tabs"}),`
`,n.jsx(e.li,{children:"Maintain consistent tab heights"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"States"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clearly indicate active tab"}),`
`,n.jsx(e.li,{children:"Visually distinguish disabled tabs"}),`
`,n.jsx(e.li,{children:"Provide loading states for async content"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Dynamic Tab Management"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide meaningful default names for new tabs"}),`
`,n.jsx(e.li,{children:"Consider implementing tab reordering if needed"}),`
`,n.jsx(e.li,{children:"Validate tab titles to prevent empty or duplicate names"}),`
`,n.jsx(e.li,{children:"Provide undo functionality for accidental tab deletion"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(o,{})]})}function w(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{w as default};
