import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{ae as r,af as s,ag as o}from"./index-BZ-G-mNy.js";import{C as c,D as l}from"./Tabs.stories-jdvY7Aht.js";import"./index-qVDZzPEr.js";import"./iframe-rVyc2Aj9.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Button--7gU6zvB.js";import"./get-chop-logic-theme-C9Q9v90u.js";import"./Checkbox-CLF59sww.js";import"./chop-logic-form-context-lL0zfSzs.js";import"./index-B0wHt5J_.js";import"./MultiSelect-D4Q7nsBa.js";import"./Select.styled-C_20FPH2.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./NumericInput-DS56Xw2R.js";import"./Select-BBYs4roD.js";import"./TextInput-Bou9Y0KU.js";import"./Tabs-CmX9zseh.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./index-CeXmpD0I.js";function d(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,title:"Tabs"}),`
`,e.jsx(t.h1,{id:"choplogictabs",children:"ChopLogicTabs"}),`
`,e.jsx(t.p,{children:"Versatile tab component that allows you to switch between different pieces of content by clicking on corresponding tabs."}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(s,{children:e.jsx(o,{of:l})}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicTabs, { ChopLogicTabItem } from 'chop-logic-components';

const tabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'Tab 1', content: <div>Content for Tab 1</div> },
  { id: 'tab2', title: 'Tab 2', content: <div>Content for Tab 2</div> },
  { id: 'tab3', title: 'Tab 3', content: <div>Content for Tab 3</div> },
];

const ExampleComponent = () => <ChopLogicTabs tabs={tabs} defaultTabId='tab1' />;

export default ExampleComponent;
`})}),`
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tabs"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ChopLogicTabItem[]"})}),e.jsx(t.td,{children:"An array of tab items, each containing an id, title, and the content to display."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[]"})}),e.jsx(t.td,{children:"Yes"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"defaultTabId"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id of the tab that should be active by default."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"mode"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ChopLogicTabsMode"})}),e.jsx(t.td,{children:"The orientation of the tabs."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'horizontal'"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"id"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"className"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"style"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"CSSProperties"})}),e.jsx(t.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tabIndex"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"title"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"theme"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"'light'"})," or ",e.jsx(t.code,{children:"'dark'"})]}),e.jsx(t.td,{children:"The component's color theme."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]})]})]}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type ChopLogicTabsProps = CommonComponentProps & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: ChopLogicTabsMode;
};

export type ChopLogicTabItem = {
  content: React.ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
};

export type ChopLogicTabsMode = 'vertical' | 'horizontal';
`})})]})}function A(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{A as default};
