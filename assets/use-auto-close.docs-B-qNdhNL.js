var h=Object.defineProperty,a=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var d=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,o=(s,e)=>{for(var t in e||(e={}))u.call(e,t)&&d(s,t,e[t]);if(r)for(var t of r(e))j.call(e,t)&&d(s,t,e[t]);return s},l=(s,e)=>a(s,x(e));import{j as n}from"./iframe-7UvCaPuN.js";import{useMDXComponents as c}from"./index-DPb6rMrK.js";import{M as p}from"./blocks-BWlQjjkw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPLllSZx.js";import"./index-v4pKKiLL.js";function i(s){const e=o(o({code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},c()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"Hooks/useAutoClose"}),`
`,n.jsx(e.h1,{id:"useautoclose",children:"useAutoClose"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useAutoClose"})," hook provides automatic closure functionality for popups, modals, tooltips, and other temporary UI elements after a specified delay."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useAutoClose } from 'chop-logic-components';

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
`,n.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Parameter"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"isOpened"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"Controls whether the timer should be active (true) or cleared (false)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"onClose"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"() => void"})}),n.jsx(e.td,{children:"Callback function to execute when the timer completes"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"autoClose"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"Whether auto-closing functionality should be enabled"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"autoCloseDelay"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsxs(e.td,{children:["Delay in milliseconds before triggering ",n.jsx(e.code,{children:"onClose"})]})]})]})]}),`
`,n.jsx(e.h2,{id:"return-value",children:"Return Value"}),`
`,n.jsx(e.p,{children:"This hook does not return any value."})]})}function D(s={}){const{wrapper:e}=o(o({},c()),s.components);return e?n.jsx(e,l(o({},s),{children:n.jsx(i,o({},s))})):i(s)}export{D as default};
