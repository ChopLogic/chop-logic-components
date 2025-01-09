import{j as o}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as n}from"./index-DOvxcyG1.js";import{ae as i}from"./index-CvaI6Tu1.js";import{C as p}from"./Portal.stories-CTHpcWYf.js";import"./index-qVDZzPEr.js";import"./iframe-CJUwLccz.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Tabs-Anboopoc.js";import"./Label-ByAyKSec.js";import"./index-BgqNcK8U.js";import"./Checkbox-BzT2O6aB.js";import"./CheckboxCheckedIcon-B0tMICzp.js";import"./CheckboxUncheckedIcon-Di1hGFhe.js";import"./index-DvDEnfou.js";import"./MultiSelect-D5p60gzq.js";import"./Select.styled-C-buhWb3.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./ArrowDownIcon-CKvzOX2F.js";import"./ArrowUpIcon-B10qXdoa.js";import"./NumericInput-BKnw8dQv.js";import"./Select-Ci-b9_qX.js";import"./CheckMarkIcon-BtcQ9zhB.js";import"./TextInput-CHl93dE4.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./ErrorIcon-D8B-aMuv.js";import"./HelpIcon-2xCcuWCH.js";import"./InfoIcon-DokxbF3b.js";import"./WarningIcon-CeD2ynrn.js";function r(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p,title:"Portal"}),`
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
`,o.jsxs(t.table,{children:[o.jsx(t.thead,{children:o.jsxs(t.tr,{children:[o.jsx(t.th,{children:"Prop"}),o.jsx(t.th,{children:"Type"}),o.jsx(t.th,{children:"Description"}),o.jsx(t.th,{children:"Default"}),o.jsx(t.th,{children:"Required"})]})}),o.jsx(t.tbody,{children:o.jsxs(t.tr,{children:[o.jsx(t.td,{children:o.jsx(t.code,{children:"children"})}),o.jsx(t.td,{children:o.jsx(t.code,{children:"React.ReactElement"})}),o.jsx(t.td,{children:"React element to be rendered in the portal."}),o.jsx(t.td,{children:o.jsx(t.code,{children:"null"})}),o.jsx(t.td,{children:"No"})]})})]})]})}function B(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{B as default};
