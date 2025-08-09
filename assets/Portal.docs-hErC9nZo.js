import{j as e}from"./iframe-CBEd8IQ4.js";import{useMDXComponents as r}from"./index-C9KoPMn0.js";import{M as d}from"./blocks-QN0Lq6G6.js";import{C as i}from"./Portal.stories-CIJvoaGq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dc5cMB9D.js";import"./index-CKZPfEin.js";import"./Container.module-B8PmPZGi.js";import"./Portal-BvJ0_6BA.js";function n(t){const o={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,title:"Portal"}),`
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
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Prop"}),e.jsx(o.th,{children:"Type"}),e.jsx(o.th,{children:"Description"}),e.jsx(o.th,{children:"Default"}),e.jsx(o.th,{children:"Required"})]})}),e.jsx(o.tbody,{children:e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"children"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"React.ReactElement"})}),e.jsx(o.td,{children:"React element to be rendered in the portal."}),e.jsx(o.td,{children:e.jsx(o.code,{children:"null"})}),e.jsx(o.td,{children:"No"})]})})]})]})}function u(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{u as default};
