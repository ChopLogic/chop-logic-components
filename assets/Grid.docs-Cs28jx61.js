import{j as e}from"./iframe-CBEd8IQ4.js";import{useMDXComponents as s}from"./index-C9KoPMn0.js";import{M as o,b as l}from"./blocks-QN0Lq6G6.js";import{C as t}from"./Grid.stories-DULeeaW3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dc5cMB9D.js";import"./index-CKZPfEin.js";import"./Alert-9Dq2KxLl.js";import"./Header-CSxk79h1.js";import"./Icon-BhaWZDu4.js";import"./get-class-name-CHDn80c0.js";import"./Loader-CbQUfs1L.js";import"./Portal-BvJ0_6BA.js";import"./use-click-outside-CCfvGGcE.js";import"./use-key-press-BipOIjs9.js";import"./use-tooltip-position-Bo0oDeW_.js";import"./use-container-dimensions-CK3iJYmt.js";import"./use-window-dimensions-CXgdx2fM.js";import"./Button-Beo9UBTU.js";import"./use-is-mounted-DaLmmxHE.js";import"./Checkbox-B3oaHqII.js";import"./use-reset-form-input-KFMp1UJi.js";import"./MultiSelect-BSeV9oRK.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-BK_dM8sf.js";import"./Select-tyqI0LNu.js";import"./TextInput-Ym5_0I8V.js";import"./Dialog-Bp2ifwxi.js";import"./use-modal-focus-trap-DVSwFbEv.js";import"./Tabs-Db3qM02f.js";function r(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,title:"ChopLogicGrid"}),`
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
