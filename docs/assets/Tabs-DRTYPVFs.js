import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as s,af as r,ag as o}from"./index-U1HBKBoF.js";import{C as c,D as l}from"./Tabs.stories-K8TTKRct.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Tabs-zwz-kKGJ.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./move-focus-on-element-by-id-CpbS-38o.js";function d(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,title:"Tabs"}),`
`,e.jsx(t.h1,{id:"choplogictabs",children:"ChopLogicTabs"}),`
`,e.jsx(t.p,{children:"Versatile tab component that allows you to switch between different pieces of content by clicking on corresponding tabs."}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(r,{children:e.jsx(o,{of:l})}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicTabs, { ChopLogicTabItem } from 'your-library/ChopLogicTabs';

const tabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'Tab 1', tabContent: <div>Content for Tab 1</div> },
  { id: 'tab2', title: 'Tab 2', tabContent: <div>Content for Tab 2</div> },
  { id: 'tab3', title: 'Tab 3', tabContent: <div>Content for Tab 3</div> },
];

const ExampleComponent = () => <ChopLogicTabs tabs={tabs} defaultTabId='tab1' />;

export default ExampleComponent;
`})}),`
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tabs"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ChopLogicTabItem[]"})}),e.jsx(t.td,{children:"An array of tab items, each containing an id, title, and the content to display."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[]"})}),e.jsx(t.td,{children:"Yes"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"defaultTabId"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id of the tab that should be active by default."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"mode"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ChopLogicTabsMode"})}),e.jsx(t.td,{children:"The orientation of the tabs."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'horizontal'"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"id"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"className"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"style"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"CSSProperties"})}),e.jsx(t.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tabIndex"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"title"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]})]})]}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type ChopLogicTabsProps = CommonComponentProps & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: ChopLogicTabsMode;
};

type ChopLogicTabItem = {
  content: React.ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
};

type ChopLogicTabsMode = 'vertical' | 'horizontal';
`})})]})}function v(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{v as default};
