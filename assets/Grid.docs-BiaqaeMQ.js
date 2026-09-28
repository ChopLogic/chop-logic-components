import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-HsEYkK1h.js";import{i as n,r}from"./react-BD87ohwl.js";import{a as i,d as a,u as o}from"./blocks-or0ooazi.js";import{n as s,t as c}from"./Grid.stories-DfDjWx32.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Grid`}),`
`,(0,d.jsx)(t.h1,{id:`grid`,children:`Grid`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Grid`}),` component provides a flexible, interactive data table with column definitions, selection capabilities, sorting functionality, filtering functionality, and customizable rendering.`]}),`
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
`,(0,d.jsx)(t.h2,{id:`column-sorting`,children:`Column Sorting`}),`
`,(0,d.jsx)(t.p,{children:`The Grid supports column sorting with click-to-sort buttons in column headers. Users can sort data alphabetically by clicking the sort button, cycling through ascending, descending, and unsorted states.`}),`
`,(0,d.jsx)(t.h3,{id:`sort-cycle`,children:`Sort Cycle`}),`
`,(0,d.jsx)(t.p,{children:`Clicking a sort button cycles through three states:`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Unsorted`}),` (initial) → click → `,(0,d.jsx)(t.strong,{children:`Ascending`}),` (A-Z)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Ascending`}),` → click → `,(0,d.jsx)(t.strong,{children:`Descending`}),` (Z-A)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Descending`}),` → click → `,(0,d.jsx)(t.strong,{children:`Unsorted`}),` (original order)`]}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Clicking a different column's sort button clears the previous sort and starts ascending on the new column.`}),`
`,(0,d.jsx)(t.h3,{id:`uncontrolled-mode`,children:`Uncontrolled Mode`}),`
`,(0,d.jsx)(t.p,{children:`In uncontrolled mode, the Grid manages sort state internally. This is the simplest approach for basic sorting needs.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Grid } from "chop-logic-components";

// Simple uncontrolled sorting - Grid manages state internally
<Grid columns={columns} data={data} sortableByDefault={true} onSortChange={(state) => console.log("Sort changed:", state)} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`controlled-mode`,children:`Controlled Mode`}),`
`,(0,d.jsx)(t.p,{children:`In controlled mode, the parent component manages sort state via props. This is useful for synchronizing with application state or implementing server-side sorting.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react";
import { Grid, GridSortDirection } from "chop-logic-components";

// Controlled sorting - parent manages state
const SortableGrid = () => {
  const [sortState, setSortState] = useState({
    field: "name",
    direction: GridSortDirection.Asc,
  });

  return <Grid columns={columns} data={data} sortableByDefault={true} sortField={sortState.field} sortDirection={sortState.direction} onSortChange={(state) => setSortState(state)} />;
};
`})}),`
`,(0,d.jsx)(t.h3,{id:`mixed-sortability`,children:`Mixed Sortability`}),`
`,(0,d.jsxs)(t.p,{children:[`You can configure sortability per column using the `,(0,d.jsx)(t.code,{children:`sortable`}),` property. This allows you to make some columns sortable while keeping others (like action columns) non-sortable.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Grid } from "chop-logic-components";

// Some columns sortable, others not
const columns = [
  { field: "name", title: "Name", sortable: true },
  { field: "email", title: "Email", sortable: true },
  { field: "actions", title: "Actions", sortable: false },
];

<Grid columns={columns} data={data} />;
`})}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`sortableByDefault`}),` is `,(0,d.jsx)(t.code,{children:`true`}),`, all columns are sortable unless explicitly marked with `,(0,d.jsx)(t.code,{children:`sortable: false`}),`. When `,(0,d.jsx)(t.code,{children:`sortableByDefault`}),` is `,(0,d.jsx)(t.code,{children:`false`}),` (the default), only columns with `,(0,d.jsx)(t.code,{children:`sortable: true`}),` are sortable.`]}),`
`,(0,d.jsx)(t.h2,{id:`column-filtering`,children:`Column Filtering`}),`
`,(0,d.jsx)(t.p,{children:`The Grid supports column filtering to narrow down displayed rows based on text conditions. Filterable columns display a filter button in the header that opens a popup with filter options.`}),`
`,(0,d.jsx)(t.h3,{id:`filter-types`,children:`Filter Types`}),`
`,(0,d.jsx)(t.p,{children:`The filter popup offers three filter types:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Starts with`}),`: Matches rows where the column value begins with the filter text`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Includes`}),`: Matches rows where the column value contains the filter text`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Equals to`}),`: Matches rows where the column value exactly matches the filter text`]}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Each filter condition can be case-sensitive or case-insensitive (default).`}),`
`,(0,d.jsx)(t.h3,{id:`uncontrolled-mode-1`,children:`Uncontrolled Mode`}),`
`,(0,d.jsx)(t.p,{children:`In uncontrolled mode, the Grid manages filter state internally. This is the simplest approach for basic filtering needs.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Grid } from "chop-logic-components";

// Simple uncontrolled filtering - Grid manages state internally
<Grid columns={columns} data={data} filterableByDefault={true} onFilterChange={(state) => console.log("Filter changed:", state)} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`controlled-mode-1`,children:`Controlled Mode`}),`
`,(0,d.jsxs)(t.p,{children:[`In controlled mode, the parent component manages filter state via the `,(0,d.jsx)(t.code,{children:`filterState`}),` prop. This is useful for synchronizing with application state, implementing server-side filtering, or persisting filters.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react";
import { Grid, GridFilterType } from "chop-logic-components";

// Controlled filtering - parent manages state
const FilterableGrid = () => {
  const [filterState, setFilterState] = useState({
    name: [{ type: GridFilterType.Includes, value: "john", caseSensitive: false }],
  });

  return <Grid columns={columns} data={data} filterableByDefault={true} filterState={filterState} onFilterChange={setFilterState} />;
};
`})}),`
`,(0,d.jsx)(t.h3,{id:`mixed-filterability`,children:`Mixed Filterability`}),`
`,(0,d.jsxs)(t.p,{children:[`You can configure filterability per column using the `,(0,d.jsx)(t.code,{children:`filterable`}),` property on column definitions. This allows you to make some columns filterable while keeping others (like action columns) non-filterable.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Grid } from "chop-logic-components";

// Some columns filterable, others not
const columns = [
  { field: "name", title: "Name", filterable: true },
  { field: "email", title: "Email", filterable: true },
  { field: "actions", title: "Actions", filterable: false },
];

<Grid columns={columns} data={data} />;
`})}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`filterableByDefault`}),` is `,(0,d.jsx)(t.code,{children:`true`}),`, all columns are filterable unless explicitly marked with `,(0,d.jsx)(t.code,{children:`filterable: false`}),`. When `,(0,d.jsx)(t.code,{children:`filterableByDefault`}),` is `,(0,d.jsx)(t.code,{children:`false`}),` (the default), only columns with `,(0,d.jsx)(t.code,{children:`filterable: true`}),` are filterable.`]}),`
`,(0,d.jsx)(t.h3,{id:`filter-props-reference`,children:`Filter Props Reference`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Prop`}),(0,d.jsx)(t.th,{children:`Type`}),(0,d.jsx)(t.th,{children:`Description`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`filterable`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`boolean`})}),(0,d.jsxs)(t.td,{children:[`Column-level property. When `,(0,d.jsx)(t.code,{children:`true`}),`, the column is filterable regardless of `,(0,d.jsx)(t.code,{children:`filterableByDefault`}),`. When `,(0,d.jsx)(t.code,{children:`false`}),`, the column is not filterable regardless of `,(0,d.jsx)(t.code,{children:`filterableByDefault`}),`.`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`filterableByDefault`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`boolean`})}),(0,d.jsxs)(t.td,{children:[`Grid-level property. When `,(0,d.jsx)(t.code,{children:`true`}),`, all columns are filterable by default. When `,(0,d.jsx)(t.code,{children:`false`}),` or omitted, columns are not filterable unless explicitly set with `,(0,d.jsx)(t.code,{children:`filterable: true`}),`.`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`filterState`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`GridFilterState`})}),(0,d.jsx)(t.td,{children:`Controlled filter state. An object mapping column field names to arrays of filter conditions. When provided, the Grid operates in controlled mode.`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`onFilterChange`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`(state: GridFilterState) => void`})}),(0,d.jsx)(t.td,{children:`Callback invoked when filter state changes. Receives the updated filter state. Called in both controlled and uncontrolled modes.`})]})]})]}),`
`,(0,d.jsx)(t.h3,{id:`combined-filtering-logic`,children:`Combined Filtering Logic`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Multiple filter conditions on the same column combine with `,(0,d.jsx)(t.strong,{children:`AND`}),` logic`]}),`
`,(0,d.jsxs)(t.li,{children:[`Filters across different columns also combine with `,(0,d.jsx)(t.strong,{children:`AND`}),` logic`]}),`
`,(0,d.jsx)(t.li,{children:`Empty or whitespace-only filter values are treated as inactive`}),`
`,(0,d.jsx)(t.li,{children:`When no rows match the active filters, the Grid displays "No data matches the applied filters"`}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`filtering-and-sorting-together`,children:`Filtering and Sorting Together`}),`
`,(0,d.jsx)(t.p,{children:`When both filtering and sorting are active, filtering is applied first, then sorting. Only the rows that match the filter conditions are sorted and displayed.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Grid } from "chop-logic-components";

// Grid with both sorting and filtering enabled
<Grid columns={columns} data={data} sortableByDefault={true} filterableByDefault={true} />;
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
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Sorting`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`sortableByDefault`}),` for data-heavy grids where all columns should be sortable`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`sortable: false`}),` on columns that contain non-sortable content (like action buttons)`]}),`
`,(0,d.jsxs)(t.li,{children:[`For server-side sorting, use controlled mode and handle data fetching in `,(0,d.jsx)(t.code,{children:`onSortChange`})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Filtering`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`filterableByDefault`}),` for data-heavy grids where users need to find specific records`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`filterable: false`}),` on columns that contain non-filterable content (like action buttons or images)`]}),`
`,(0,d.jsxs)(t.li,{children:[`For server-side filtering, use controlled mode and handle data fetching in `,(0,d.jsx)(t.code,{children:`onFilterChange`})]}),`
`,(0,d.jsx)(t.li,{children:`Consider combining filtering with sorting for a complete data exploration experience`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};