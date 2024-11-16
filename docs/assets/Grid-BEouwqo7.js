import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{ae as r,af as s,ag as c}from"./index-DEPgYJJ5.js";import{C as l,D as o}from"./Grid.stories-Bx_ASQ_4.js";import"./index-qVDZzPEr.js";import"./iframe-BeWT9TcT.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Grid-27xncSyK.js";import"./styled-components.browser.esm-BD-stqwa.js";import"./Label-DNlmmmBQ.js";import"./CheckboxUnchecked-DfrujIAw.js";function d(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"Grid"}),`
`,e.jsx(n.h1,{id:"choplogicgrid",children:"ChopLogicGrid"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicGrid"})," component is a styled grid component built on top of the default HTML ",e.jsx(n.code,{children:"table"})," element."]}),`
`,e.jsx(s,{children:e.jsx(c,{of:o})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicGrid from 'chop-logic-components';
import { DATA, COLUMNS } from './constants';

const ExampleComponent = () => <ChopLogicGrid caption='Contact List' data={DATA} columns={COLUMNS} />;

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"data"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicGridItem[]"})}),e.jsxs(n.td,{children:["An array of items to be displayed in the grid. Each item is a JavaScript object with a mandatory ",e.jsx(n.code,{children:"id"})," field."]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"[]"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"columns"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicGridColumn[]"})}),e.jsxs(n.td,{children:["An array of objects that describes the grid columns. Each column must contain ",e.jsx(n.code,{children:"field"})," property that points to the value in the data item, and ",e.jsx(n.code,{children:"title"})," property that describes the column title."]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"[]"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"selectable"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"A value that indicates whether the grid has a column with checkboxes."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"caption"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"An optional title of the grid."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onSelect"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(ids: string[]) => void"})}),e.jsx(n.td,{children:"An optional callback that is called when one or more grid rows are selected or deselected."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"renderDataItem"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RenderDataItemCallback"})}),e.jsx(n.td,{children:"An optional callback that takes a data item and a column field as parameters and returns a JSX element. This callback is required for custom rendering of grid cells."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"className"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"style"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tabIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"theme"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'light'"})," or ",e.jsx(n.code,{children:"'dark'"})]}),e.jsx(n.td,{children:"The component's color theme."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicGridProps = CommonComponentProps & {
  columns: ChopLogicGridColumn[];
  data: ChopLogicGridItem[];
  caption?: string;
  selectable?: boolean;
  renderDataItem?: RenderDataItemCallback;
  onSelect?: (ids: string[]) => void;
};

type ChopLogicGridColumn = {
  field: string;
  title?: string;
  component?: React.ReactElement;
  highlighted?: boolean;
  className?: string;
};

type ChopLogicGridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};

type RenderDataItemCallback = (item: ChopLogicGridItem, field: string) => JSX.Element;
`})})]})}function G(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{G as default};
