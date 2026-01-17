var a=Object.defineProperty,m=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(i,e,s)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,l=(i,e)=>{for(var s in e||(e={}))x.call(e,s)&&o(i,s,e[s]);if(r)for(var s of r(e))p.call(e,s)&&o(i,s,e[s]);return i},t=(i,e)=>m(i,h(e));import{j as n}from"./iframe-ByKzMmaK.js";import{useMDXComponents as d}from"./index-DeYdrbWI.js";import{M as j,b as u}from"./blocks-Cunk30eN.js";import{G as f}from"./Grid.stories-Bi-lpWQB.js";import"./preload-helper-BDBacUwf.js";import"./index-Bb97ILPF.js";import"./index-DUc2eTa5.js";import"./get-class-name-BY88G7uf.js";import"./Label-DQdSVFEl.js";import"./Icon-BZD9s1Z_.js";import"./use-element-ids-CshNHWkw.js";function c(i){const e=l(l({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},d()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:f,title:"Grid"}),`
`,n.jsx(e.h1,{id:"grid",children:"Grid"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Grid"})," component provides a flexible, interactive data table with column definitions, selection capabilities, and customizable rendering."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Grid from 'chop-logic-components';

const UserGrid = () => {
  const columns = [
    { field: 'name', title: 'Name' },
    { field: 'email', title: 'Email' },
    { field: 'role', title: 'Role' },
  ];

  const data = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];

  return (
    <Grid
      columns={columns}
      data={data}
      caption="User Management"
      selectable
      onSelect={(ids) => console.log('Selected IDs:', ids)}
    />
  );
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Performance"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Virtualize large datasets"}),`
`,n.jsx(e.li,{children:"Memoize custom renderers"}),`
`,n.jsx(e.li,{children:"Consider pagination for huge datasets"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Column Design"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep column count reasonable"}),`
`,n.jsx(e.li,{children:"Use descriptive headers"}),`
`,n.jsx(e.li,{children:"Highlight important columns"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Selection"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide clear visual feedback"}),`
`,n.jsx(e.li,{children:"Consider bulk actions for selected items"}),`
`,n.jsx(e.li,{children:"Disable non-applicable rows"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function X(i={}){const{wrapper:e}=l(l({},d()),i.components);return e?n.jsx(e,t(l({},i),{children:n.jsx(c,l({},i))})):c(i)}export{X as default};
