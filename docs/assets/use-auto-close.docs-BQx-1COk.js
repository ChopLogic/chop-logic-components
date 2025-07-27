import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as o}from"./index-B2uT0Rcg.js";import{M as r}from"./blocks-CLsIill3.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useAutoClose"}),`
`,e.jsx(n.h1,{id:"useautoclose",children:"useAutoClose"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useAutoClose"})," hook provides automatic closure functionality for popups, modals, tooltips, and other temporary UI elements after a specified delay."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useAutoClose } from 'chop-logic-components';

const MyPopup = ({ isOpen, onClose }) => {
  useAutoClose({
    isOpened: isOpen,
    onClose,
    autoClose: true,
    autoCloseDelay: 5000 // 5 seconds
  });

  return isOpen ? <div className="popup">Content</div> : null;
};
`})}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isOpened"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Controls whether the timer should be active (true) or cleared (false)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{children:"Callback function to execute when the timer completes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"autoClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Whether auto-closing functionality should be enabled"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"autoCloseDelay"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsxs(n.td,{children:["Delay in milliseconds before triggering ",e.jsx(n.code,{children:"onClose"})]})]})]})]}),`
`,e.jsx(n.h2,{id:"return-value",children:"Return Value"}),`
`,e.jsx(n.p,{children:"This hook does not return any value."})]})}function a(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
