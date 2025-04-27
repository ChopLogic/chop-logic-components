import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-CB3_FCD4.js";import{M as i}from"./index-D130hB5o.js";import{C as d}from"./Portal.stories-DICpvLPL.js";import"./index-MPVjHJeJ.js";import"./iframe-7UPhmzZr.js";import"./index-BRyrJLGJ.js";import"./index-Bzm33-PM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Alert-bvtI3V7V.js";import"./Label-B75NJM6h.js";import"./index-zGLxtP0c.js";import"./themes-BnN1RKU4.js";import"./Checkbox-DoztlOC1.js";import"./index-_kABAdFM.js";import"./MultiSelect-IcXFxGUi.js";import"./Select.styled-Bqw1G2IM.js";import"./index-CpaRx7Lw.js";import"./index-Gh7Dkaqy.js";import"./NumericInput-Jd9ns80o.js";import"./Select-BuFIX2KM.js";import"./TextInput-Bednbm_P.js";import"./index-ChYqgHqj.js";import"./index-DpfPhAHR.js";import"./index-GgB_X92Z.js";import"./index-BtTB3eTL.js";import"./ExampleDivContainer.styled-D0iJ0lP_.js";function r(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:d,title:"Portal"}),`
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
