var h=Object.defineProperty,a=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var d=(n,e,s)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,i=(n,e)=>{for(var s in e||(e={}))x.call(e,s)&&d(n,s,e[s]);if(r)for(var s of r(e))j.call(e,s)&&d(n,s,e[s]);return n},c=(n,e)=>a(n,u(e));import{j as t}from"./iframe-BmuDlTXj.js";import{useMDXComponents as l}from"./index-fyvzVCqG.js";import{M as m}from"./WithTooltip-SK46ZJ2J-DHnU7zBw.js";import{S as p}from"./use-click-outside.stories-pS9BBNPA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Pllxgza8.js";import"./index-j1Ny9zJx.js";import"./Container.module-rjw_d_sC.js";import"./use-click-outside-Dn9bFyGn.js";function o(n){const e=i(i({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},l()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:p,title:"Hooks/useClickOutside"}),`
`,t.jsx(e.h1,{id:"useclickoutside",children:"useClickOutside"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useClickOutside"})," hook listens for click events outside a specified element and calls a handler function when such an event occurs."]}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
import { useClickOutside } from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside({
    ref,
    onClickOutsideHandler: () => setIsOpen(false),
  });

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <div ref={ref}>Click outside me to close</div>}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,t.jsx(e.h3,{id:"parameters",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Param"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"ref"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.RefObject<HTMLElement>"})}),t.jsx(e.td,{children:"A ref to the element that will be used to check if the click event is within the element's bounds."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"onClickOutsideHandler"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"() => void"})}),t.jsx(e.td,{children:"The callback function to call when a click outside the referenced element is detected."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"dependentRef"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.RefObject<HTMLElement>"})}),t.jsx(e.td,{children:"An optional additional ref to another element that should not trigger the outside click handler."})]})]})]}),`
`,t.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,t.jsx(e.p,{children:t.jsx(e.code,{children:"void"})})]})}function w(n={}){const{wrapper:e}=i(i({},l()),n.components);return e?t.jsx(e,c(i({},n),{children:t.jsx(o,i({},n))})):o(n)}export{w as default};
