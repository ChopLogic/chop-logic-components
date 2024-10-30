import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as s,af as a,ag as r}from"./index-BvbQ7fbP.js";import{C as c,D as l}from"./Tabs.stories-DMfm0gnX.js";import"./index-DJO9vBfz.js";import"./iframe-ptQ9viUU.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Tabs-xdIbAcDa.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./move-focus-on-element-by-id-CpbS-38o.js";function o(t){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c,title:"Tabs"}),`
`,n.jsx(e.h1,{id:"choplogictabs",children:"ChopLogicTabs"}),`
`,n.jsx(e.p,{children:"Versatile tab component that allows you to switch between different pieces of content by clicking on corresponding tabs."}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(a,{children:n.jsx(r,{of:l})}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicTabs, { ChopLogicTabItem } from 'your-library/ChopLogicTabs';

const tabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'Tab 1', tabContent: <div>Content for Tab 1</div> },
  { id: 'tab2', title: 'Tab 2', tabContent: <div>Content for Tab 2</div> },
  { id: 'tab3', title: 'Tab 3', tabContent: <div>Content for Tab 3</div> },
];

const ExampleComponent = () => <ChopLogicTabs tabs={tabs} defaultTabId='tab1' />;

export default ExampleComponent;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"tabs"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"ChopLogicTabItem[]"})]}),`
`,n.jsx(e.li,{children:"Description: An array of tab items, each containing an id, title, and the content to display."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"defaultTabId"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.li,{children:"Description: The id of the tab that should be active by default."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"mode"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"'vertical' | 'horizontal'"})]}),`
`,n.jsxs(e.li,{children:["Description: The orientation of the tabs. Defaults to ",n.jsx(e.code,{children:"'horizontal'"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"types",children:"Types"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type ChopLogicTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: ChopLogicTabsMode;
};
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type ChopLogicTabItem = {
  content: React.ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
};
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type ChopLogicTabsMode = 'vertical' | 'horizontal';
`})})]})}function L(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{L as default};
