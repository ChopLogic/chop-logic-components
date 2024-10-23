import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as s,af as o,ag as l}from"./index---6MgSDT.js";import{C as c,D as a}from"./Grid.stories-DdXgET19.js";import"./index-DJO9vBfz.js";import"./iframe-WobaMXE5.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Grid-CMfk9Gvl.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./Label-C3WErDxN.js";import"./CheckboxUnchecked-BN-0aOOA.js";function i(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,title:"Grid"}),`
`,e.jsx(n.h1,{id:"choplogicgrid",children:"ChopLogicGrid"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicGrid"})," component is a styled grid component built on top of the default HTML ",e.jsx(n.code,{children:"table"})," element."]}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx(o,{children:e.jsx(l,{of:a})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicGrid from 'chop-logic-components';
import { DATA, COLUMS } from './constants';

const ExampleComponent = () => <ChopLogicGrid selectable={false} data={DATA} columns={COLUMNS} />;

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Required props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"data"})," ",e.jsx(n.code,{children:"ChopLogicGridItem[]"})," - An array of items to be displayed in the grid. Each item is a JavaScript object with a mandatory ",e.jsx(n.code,{children:"id"})," field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"columns"})," ",e.jsx(n.code,{children:"ChopLogicGridColumn[]"})," - An array of objects that describes the grid columns. Each column must contain ",e.jsx(n.code,{children:"field"})," property that points to the value in the data item, and ",e.jsx(n.code,{children:"title"})," property that describes the column title."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Optional props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"selectable"})," ",e.jsx(n.code,{children:"boolean"})," - A value that indicates whether the grid has a column with checkboxes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"caption"})," ",e.jsx(n.code,{children:"string"})," - An optional title of the grid."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onSelect"})," ",e.jsx(n.code,{children:"(ids: string[]) => void"})," - An optional callback that is called when one or more grid rows are selected or deselected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"renderDataItem"})," ",e.jsx(n.code,{children:"RenderDataItemCallback"})," - An optional callback that takes a data item and a column field as parameters and returns a JSX element. This callback is required for custom rendering of grid cells."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - some global HTML attributes: ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"style"}),", ",e.jsx(n.strong,{children:"tabIndex"}),", etc."]}),`
`]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicGridProps = {
  columns: ChopLogicGridColumn[];
  data: ChopLogicGridItem[];
  caption?: string;
  id?: string;
  selectable?: boolean;
  tabIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  renderDataItem?: RenderDataItemCallback;
  onSelect?: (ids: string[]) => void;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicGridColumn = {
  field: string;
  title?: string;
  component?: React.ReactElement;
  highlighted?: boolean;
  className?: string;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicGridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type RenderDataItemCallback = (item: ChopLogicGridItem, field: string) => JSX.Element;
`})})]})}function D(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{D as default};
