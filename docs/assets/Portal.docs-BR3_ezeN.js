import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as r}from"./index-B2uT0Rcg.js";import{M as d}from"./blocks-CLsIill3.js";import{C as i}from"./Portal.stories-Bh9NTGBS.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Container.module-B8PmPZGi.js";import"./Portal-yNe1MKYE.js";function n(t){const o={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,title:"Portal"}),`
`,e.jsx(o.h1,{id:"choplogicportal",children:"ChopLogicPortal"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"ChopLogicPortal"})," component is a helper container for rendering modals, tooltips, popups and other elements on top of the main page. The portal is created dynamically by appending a new ",e.jsx(o.code,{children:"div"})," to the ",e.jsx(o.code,{children:"document.body"}),`.
The component cleans up by removing the `,e.jsx(o.code,{children:"div"})," from the DOM when it is unmounted."]}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicPortal from 'chop-logic-components';

const MyModalComponent = () => (
  <ChopLogicPortal>
    <div>Hello from portal!</div>
  </ChopLogicPortal>
);

export default MyModalComponent;
`})}),`
`,e.jsx(o.h3,{id:"props",children:"Props"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Prop"}),e.jsx(o.th,{children:"Type"}),e.jsx(o.th,{children:"Description"}),e.jsx(o.th,{children:"Default"}),e.jsx(o.th,{children:"Required"})]})}),e.jsx(o.tbody,{children:e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"children"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"React.ReactElement"})}),e.jsx(o.td,{children:"React element to be rendered in the portal."}),e.jsx(o.td,{children:e.jsx(o.code,{children:"null"})}),e.jsx(o.td,{children:"No"})]})})]})]})}function j(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{j as default};
