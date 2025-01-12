import{j as o}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as n}from"./index-DOvxcyG1.js";import{ae as i}from"./index-zkfsCg0O.js";import{C as p}from"./Portal.stories-D9ldMMqf.js";import"./index-qVDZzPEr.js";import"./iframe-DhY3_iQn.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Tabs-CZLv0X1q.js";import"./Label-CLTPwdxI.js";import"./index-BT98D5zi.js";import"./themes-BnN1RKU4.js";import"./Checkbox-DgGf2ViF.js";import"./CheckboxCheckedIcon-B0tMICzp.js";import"./CheckboxUncheckedIcon-Di1hGFhe.js";import"./index-bc0GsKql.js";import"./MultiSelect-oZebdWXV.js";import"./Select.styled-BJZBRQF3.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./ArrowDownIcon-CKvzOX2F.js";import"./ArrowUpIcon-B10qXdoa.js";import"./NumericInput-340RyIj6.js";import"./Select-CgDztdXW.js";import"./CheckMarkIcon-BtcQ9zhB.js";import"./TextInput-k1kqE6W_.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./ErrorIcon-D8B-aMuv.js";import"./HelpIcon-2xCcuWCH.js";import"./InfoIcon-DokxbF3b.js";import"./WarningIcon-CeD2ynrn.js";function r(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p,title:"Portal"}),`
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
`,o.jsxs(t.table,{children:[o.jsx(t.thead,{children:o.jsxs(t.tr,{children:[o.jsx(t.th,{children:"Prop"}),o.jsx(t.th,{children:"Type"}),o.jsx(t.th,{children:"Description"}),o.jsx(t.th,{children:"Default"}),o.jsx(t.th,{children:"Required"})]})}),o.jsx(t.tbody,{children:o.jsxs(t.tr,{children:[o.jsx(t.td,{children:o.jsx(t.code,{children:"children"})}),o.jsx(t.td,{children:o.jsx(t.code,{children:"React.ReactElement"})}),o.jsx(t.td,{children:"React element to be rendered in the portal."}),o.jsx(t.td,{children:o.jsx(t.code,{children:"null"})}),o.jsx(t.td,{children:"No"})]})})]})]})}function G(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{G as default};
