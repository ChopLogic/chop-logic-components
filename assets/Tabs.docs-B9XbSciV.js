import{j as n}from"./iframe-CpS3OA71.js";import{useMDXComponents as s}from"./index-CFFJi-da.js";import{M as o,b as r}from"./blocks-DsNOP7-Z.js";import{C as c}from"./Tabs.stories-BwS260Bn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DI3QCFR2.js";import"./index-BvP6XlTP.js";import"./Header-19ibYWlv.js";import"./Icon-CL3_h14b.js";import"./get-class-name-CHDn80c0.js";import"./Loader-DspC04OJ.js";import"./Portal-B0CI4Q9X.js";import"./use-click-outside-B4IFcKdH.js";import"./use-key-press-DN_NzfdA.js";import"./use-tooltip-position-bGxlgnwH.js";import"./use-container-dimensions-Caekhqnj.js";import"./use-window-dimensions-BvAb_mA6.js";import"./Alert-BfYeklhf.js";import"./Button-WGiVFoYy.js";import"./use-is-mounted-BDVYKU_G.js";import"./Checkbox-D9aEDDoB.js";import"./use-reset-form-input-DTTskSWE.js";import"./MultiSelect-D5DRSXqv.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-s1UZKiJ4.js";import"./Select-D_fyW-Hv.js";import"./TextInput-lP0tmycg.js";import"./Dialog-BQWKidlb.js";import"./use-modal-focus-trap-lzjNUN3o.js";import"./Tabs-BxVwngKf.js";function t(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c,title:"ChopLogicTabs"}),`
`,n.jsx(i.h1,{id:"choplogictabs",children:"ChopLogicTabs"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"ChopLogicTabs"})," component provides an accessible tabbed interface with support for both horizontal and vertical orientations, disabled states, and flexible content."]}),`
`,n.jsx(i.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import ChopLogicTabs, { ChopLogicOrientationMode } from 'chop-logic-components';

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
    <ChopLogicTabs
      tabs={tabs}
      mode={ChopLogicOrientationMode.Horizontal}
      defaultTabId="specs"
    />
  );
};
`})}),`
`,n.jsx(i.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tab to focus tab list"}),`
`,n.jsx(i.li,{children:"Arrow keys to navigate between tabs"}),`
`,n.jsx(i.li,{children:"Enter/Space to select focused tab"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Announces selected state"}),`
`,n.jsx(i.li,{children:"Describes tablist structure"}),`
`,n.jsx(i.li,{children:"Indicates disabled tabs"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Focus remains on active tab"}),`
`,n.jsx(i.li,{children:"Proper focus indicators"}),`
`,n.jsx(i.li,{children:"Logical tab order"}),`
`]}),`
`,n.jsx(i.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Organization"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Keep tab titles concise (1-2 words)"}),`
`,n.jsx(i.li,{children:"Group related content together"}),`
`,n.jsx(i.li,{children:"Limit number of tabs (recommend max 5-7)"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Content"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Load heavy content dynamically"}),`
`,n.jsx(i.li,{children:"Consider lazy-loading hidden tabs"}),`
`,n.jsx(i.li,{children:"Maintain consistent tab heights"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"States"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Clearly indicate active tab"}),`
`,n.jsx(i.li,{children:"Visually distinguish disabled tabs"}),`
`,n.jsx(i.li,{children:"Provide loading states for async content"}),`
`]}),`
`,n.jsx(i.h2,{id:"props",children:"Props"}),`
`,n.jsx(r,{})]})}function K(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(t,{...e})}):t(e)}export{K as default};
