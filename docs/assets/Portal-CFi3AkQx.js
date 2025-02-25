import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CIPZa9B8.js";import{M as i}from"./index-Cjue1fAi.js";import{C as d}from"./Portal.stories-Ca-TrF2n.js";import"./index-Ban83id2.js";import"./iframe-C0iaFHHi.js";import"./index-CIoWShqO.js";import"./index-7LVPDKFp.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Alert-BWta-ebk.js";import"./Label-qg4WOoxX.js";import"./index-Dd9y7SHD.js";import"./themes-BnN1RKU4.js";import"./Checkbox-DOWsdcnt.js";import"./index-C-eu1kWF.js";import"./MultiSelect-Clynf4zd.js";import"./Select.styled-BnJQ06Da.js";import"./index-arilMgzD.js";import"./index-gLN7dSb1.js";import"./NumericInput-C-A-C4Ny.js";import"./Select-Dq_uRQuo.js";import"./TextInput-Cg5sDPVd.js";import"./index-D1_pEFh9.js";import"./index-ClfbYLUi.js";import"./index-BA8sCPVX.js";import"./index-dTE3SSI8.js";import"./ExampleDivContainer.styled-HQ9poNT0.js";function r(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:d,title:"Portal"}),`
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
`,o.jsxs(t.table,{children:[o.jsx(t.thead,{children:o.jsxs(t.tr,{children:[o.jsx(t.th,{children:"Prop"}),o.jsx(t.th,{children:"Type"}),o.jsx(t.th,{children:"Description"}),o.jsx(t.th,{children:"Default"}),o.jsx(t.th,{children:"Required"})]})}),o.jsx(t.tbody,{children:o.jsxs(t.tr,{children:[o.jsx(t.td,{children:o.jsx(t.code,{children:"children"})}),o.jsx(t.td,{children:o.jsx(t.code,{children:"React.ReactElement"})}),o.jsx(t.td,{children:"React element to be rendered in the portal."}),o.jsx(t.td,{children:o.jsx(t.code,{children:"null"})}),o.jsx(t.td,{children:"No"})]})})]})]})}function F(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{F as default};
