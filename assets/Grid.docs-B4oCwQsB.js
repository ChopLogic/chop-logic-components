import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as l}from"./index-BeVWJvHh.js";import{M as r,C as o}from"./blocks-B9t17XrR.js";import{G as t}from"./Grid.stories-BTyQqX7p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./get-class-name-BY88G7uf.js";import"./Label-B0vz0m2R.js";import"./Icon-DTjVTp_9.js";import"./icon-name-DofyCo9k.js";import"./use-element-ids--HzG7Pmw.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t,title:"Grid"}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Grid"})," component provides a flexible, interactive data table with column definitions, selection capabilities, and customizable rendering."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Grid from "chop-logic-components";

const UserGrid = () => {
  const columns = [
    { field: "name", title: "Name" },
    { field: "email", title: "Email" },
    { field: "role", title: "Role" },
  ];

  const data = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];

  return <Grid columns={columns} data={data} caption="User Management" selectable onSelect={(ids) => console.log("Selected IDs:", ids)} />;
};
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Performance"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Virtualize large datasets"}),`
`,e.jsx(n.li,{children:"Memoize custom renderers"}),`
`,e.jsx(n.li,{children:"Consider pagination for huge datasets"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Column Design"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep column count reasonable"}),`
`,e.jsx(n.li,{children:"Use descriptive headers"}),`
`,e.jsx(n.li,{children:"Highlight important columns"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Selection"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide clear visual feedback"}),`
`,e.jsx(n.li,{children:"Consider bulk actions for selected items"}),`
`,e.jsx(n.li,{children:"Disable non-applicable rows"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function C(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{C as default};
