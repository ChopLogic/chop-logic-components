import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-SKv-7AQs.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Grid.stories-DJz4fU3p.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Grid`}),`
`,(0,d.jsx)(t.h1,{id:`grid`,children:`Grid`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Grid`}),` component provides a flexible, interactive data table with column definitions, selection capabilities, and customizable rendering.`]}),`
`,(0,d.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Grid from "chop-logic-components";

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
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Performance`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Virtualize large datasets`}),`
`,(0,d.jsx)(t.li,{children:`Memoize custom renderers`}),`
`,(0,d.jsx)(t.li,{children:`Consider pagination for huge datasets`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Column Design`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Keep column count reasonable`}),`
`,(0,d.jsx)(t.li,{children:`Use descriptive headers`}),`
`,(0,d.jsx)(t.li,{children:`Highlight important columns`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Selection`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Provide clear visual feedback`}),`
`,(0,d.jsx)(t.li,{children:`Consider bulk actions for selected items`}),`
`,(0,d.jsx)(t.li,{children:`Disable non-applicable rows`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};