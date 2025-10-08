var a=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var t=(i,e,s)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,l=(i,e)=>{for(var s in e||(e={}))x.call(e,s)&&t(i,s,e[s]);if(r)for(var s of r(e))j.call(e,s)&&t(i,s,e[s]);return i},c=(i,e)=>h(i,m(e));import{j as n}from"./iframe-CvRPWbsI.js";import{useMDXComponents as d}from"./index-DkgwtVae.js";import{M as p,b as u}from"./blocks-CP88HKpN.js";import{G as f}from"./Grid.stories-hw8EfFa0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5plyyUuw.js";import"./index-Bd_iq0lU.js";import"./get-class-name-CHDn80c0.js";import"./Label-J50Gecwt.js";import"./Icon-D4WeBZx2.js";import"./use-element-ids-D4ftutbs.js";function o(i){const e=l(l({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},d()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:f,title:"Grid"}),`
`,n.jsx(e.h1,{id:"grid",children:"Grid"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Grid"})," component provides a flexible, interactive data table with column definitions, selection capabilities, and customizable rendering."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Grid from 'chop-logic-components';

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
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Structure"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Proper table semantics"}),`
`,n.jsx(e.li,{children:"Caption for context"}),`
`,n.jsx(e.li,{children:"Column headers associated with cells"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab through interactive elements"}),`
`,n.jsx(e.li,{children:"Space to select rows"}),`
`,n.jsx(e.li,{children:"Shift+Arrow for multiple selection"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces row selection state"}),`
`,n.jsx(e.li,{children:"Reads column headers with cell values"}),`
`,n.jsx(e.li,{children:"Provides context for actions"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Performance"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Virtualize large datasets"}),`
`,n.jsx(e.li,{children:"Memoize custom renderers"}),`
`,n.jsx(e.li,{children:"Consider pagination for huge datasets"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Column Design"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep column count reasonable"}),`
`,n.jsx(e.li,{children:"Use descriptive headers"}),`
`,n.jsx(e.li,{children:"Highlight important columns"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Selection"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide clear visual feedback"}),`
`,n.jsx(e.li,{children:"Consider bulk actions for selected items"}),`
`,n.jsx(e.li,{children:"Disable non-applicable rows"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function A(i={}){const{wrapper:e}=l(l({},d()),i.components);return e?n.jsx(e,c(l({},i),{children:n.jsx(o,l({},i))})):o(i)}export{A as default};
