import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-DXRrZdNQ.js";import{M as i}from"./index-Hm0oqfFC.js";import{C as p}from"./Portal.stories-C6R5OzcM.js";import"./index-B_nTefMF.js";import"./iframe-D7y9cp_r.js";import"./index-rrMuti2j.js";import"./index-DUhdrOyO.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./Alert-DMyXkc2m.js";import"./Label-iILYjsvu.js";import"./index-zvdF3J3f.js";import"./themes-BnN1RKU4.js";import"./Checkbox-CjX9AVlT.js";import"./CheckboxCheckedIcon-BAzr5VRs.js";import"./CheckboxUncheckedIcon-CMpqfROB.js";import"./index-CKFmP5XW.js";import"./MultiSelect-BO55OBsP.js";import"./Select.styled-1lhBA4mq.js";import"./index-BP0Kj9GW.js";import"./index-X6NplXQr.js";import"./ArrowDownIcon-9UPYAteJ.js";import"./ArrowUpIcon-D-lXvPOI.js";import"./NumericInput-psG3T8RU.js";import"./Select-pOqn0OqM.js";import"./CheckMarkIcon-w6yvoLUx.js";import"./TextInput-CJ7BedVC.js";import"./index-Da_tQ3Xi.js";import"./ErrorIcon-C44N34Yw.js";import"./HelpIcon-DgpPKFlH.js";import"./InfoIcon-B4hFJLBr.js";import"./WarningIcon-DiWNQ3Lw.js";import"./index-DplEX_gw.js";import"./index-DfsBjX5Y.js";import"./index-7IJ2GIBa.js";import"./ExampleDivContainer.styled-CBfZBFON.js";function r(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p,title:"Portal"}),`
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
