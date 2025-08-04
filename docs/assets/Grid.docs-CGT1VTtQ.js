import{j as e}from"./iframe-DdT6Gy5A.js";import{useMDXComponents as s}from"./index-Zwbbbbj6.js";import{M as o,b as l}from"./blocks-DTSYpom4.js";import{C as t}from"./Grid.stories-DHWDaI3E.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wjq1TnPW.js";import"./index-poB4f_nE.js";import"./Alert-CoZiidbo.js";import"./Header-Ecmg_qcK.js";import"./Icon-BEEWELiN.js";import"./get-class-name-CHDn80c0.js";import"./Loader-DBIFz-Un.js";import"./Portal-DprjtDEU.js";import"./use-click-outside-DwWADBbH.js";import"./use-key-press-DMaNieri.js";import"./use-tooltip-position-i67v7q2H.js";import"./use-container-dimensions-DPN3VXKf.js";import"./use-window-dimensions-nfZvecbJ.js";import"./Button-CyEX4BRq.js";import"./use-is-mounted-De7Oj9Ec.js";import"./Checkbox-UVP8yK0P.js";import"./use-reset-form-input-Cs_E2FN7.js";import"./MultiSelect-CHQgDjgE.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-DaRsfQsL.js";import"./Select-CqCQGqq9.js";import"./TextInput-D4SV8WA1.js";import"./Dialog-xS2PZRDy.js";import"./use-modal-focus-trap-Bin2cwO6.js";import"./Tabs-CZ99HbzJ.js";function r(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,title:"ChopLogicGrid"}),`
`,e.jsx(n.h1,{id:"choplogicgrid",children:"ChopLogicGrid"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicGrid"})," component provides a flexible, interactive data table with column definitions, selection capabilities, and customizable rendering."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ChopLogicGrid from 'chop-logic-components';

const UserGrid = () => {
  const columns = [
    { field: 'name', title: 'Name' },
    { field: 'email', title: 'Email' },
    { field: 'role', title: 'Role' }
  ];

  const data = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
  ];

  return (
    <ChopLogicGrid
      columns={columns}
      data={data}
      caption="User Management"
      selectable
      onSelect={(ids) => console.log('Selected IDs:', ids)}
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Structure"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Proper table semantics"}),`
`,e.jsx(n.li,{children:"Caption for context"}),`
`,e.jsx(n.li,{children:"Column headers associated with cells"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab through interactive elements"}),`
`,e.jsx(n.li,{children:"Space to select rows"}),`
`,e.jsx(n.li,{children:"Shift+Arrow for multiple selection"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces row selection state"}),`
`,e.jsx(n.li,{children:"Reads column headers with cell values"}),`
`,e.jsx(n.li,{children:"Provides context for actions"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Performance"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Virtualize large datasets"}),`
`,e.jsx(n.li,{children:"Memoize custom renderers"}),`
`,e.jsx(n.li,{children:"Consider pagination for huge datasets"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Column Design"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep column count reasonable"}),`
`,e.jsx(n.li,{children:"Use descriptive headers"}),`
`,e.jsx(n.li,{children:"Highlight important columns"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Selection"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide clear visual feedback"}),`
`,e.jsx(n.li,{children:"Consider bulk actions for selected items"}),`
`,e.jsx(n.li,{children:"Disable non-applicable rows"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{})]})}function J(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{J as default};
