import{j as o}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{ae as n}from"./index-BEURNsC9.js";import{C as p}from"./Portal.stories-UEytAFRs.js";import"./index-qVDZzPEr.js";import"./iframe-Fv37AHYp.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Alert-CtoEGIUK.js";import"./Label-DP2hSXEE.js";import"./index-BT98D5zi.js";import"./themes-BnN1RKU4.js";import"./Checkbox-DxuJFuSh.js";import"./CheckboxCheckedIcon-CF8eYAUg.js";import"./CheckboxUncheckedIcon-CyCeDUlo.js";import"./index-bc0GsKql.js";import"./MultiSelect-DXgogZp7.js";import"./Select.styled-BJZBRQF3.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./ArrowDownIcon-DjWvX1tD.js";import"./ArrowUpIcon-DtkrGYxQ.js";import"./NumericInput-CHaYPu-H.js";import"./Select-LlN4QuG9.js";import"./CheckMarkIcon-CfV3vdyY.js";import"./TextInput-dILkR5In.js";import"./index-D9uBcq_H.js";import"./ErrorIcon-D-M6vwQ1.js";import"./HelpIcon-DQHZekkZ.js";import"./InfoIcon-BNiUgg5x.js";import"./WarningIcon-DncDqrJn.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./ExampleDivContainer.styled-Dl50VLFd.js";function r(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:p,title:"Portal"}),`
`,o.jsx(t.h1,{id:"choplogicportal",children:"ChopLogicPortal"}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"ChopLogicPortal"})," component is a helper container for rendering modals, tooltips, popups and other elements on top of the main page. The portal is created dynamically by appending a new ",o.jsx(t.code,{children:"div"})," to the ",o.jsx(t.code,{children:"document.body"}),`.
The component cleans up by removing the `,o.jsx(t.code,{children:"div"})," from the DOM when it is unmounted."]}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicPortal from 'chop-logic-components';

const MyModalComponent = () => (
  <ChopLogicPortal>
    <div>Hello from portal!</div>
  </ChopLogicPortal>
);

export default MyModalComponent;
`})}),`
`,o.jsx(t.h3,{id:"props",children:"Props"}),`
`,o.jsxs(t.table,{children:[o.jsx(t.thead,{children:o.jsxs(t.tr,{children:[o.jsx(t.th,{children:"Prop"}),o.jsx(t.th,{children:"Type"}),o.jsx(t.th,{children:"Description"}),o.jsx(t.th,{children:"Default"}),o.jsx(t.th,{children:"Required"})]})}),o.jsx(t.tbody,{children:o.jsxs(t.tr,{children:[o.jsx(t.td,{children:o.jsx(t.code,{children:"children"})}),o.jsx(t.td,{children:o.jsx(t.code,{children:"React.ReactElement"})}),o.jsx(t.td,{children:"React element to be rendered in the portal."}),o.jsx(t.td,{children:o.jsx(t.code,{children:"null"})}),o.jsx(t.td,{children:"No"})]})})]})]})}function I(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{I as default};
