import{j as e}from"./iframe-DdT6Gy5A.js";import{useMDXComponents as i}from"./index-Zwbbbbj6.js";import{M as r}from"./blocks-DTSYpom4.js";import{S as d}from"./use-click-outside.stories-CRiSM2OU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wjq1TnPW.js";import"./index-poB4f_nE.js";import"./Container.module-B8PmPZGi.js";import"./use-click-outside-DwWADBbH.js";function s(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,title:"Hooks/useClickOutside"}),`
`,e.jsx(t.h1,{id:"useclickoutside",children:"useClickOutside"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useClickOutside"})," hook listens for click events outside a specified element and calls a handler function when such an event occurs."]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
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
`,e.jsx(t.h3,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Param"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"ref"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(t.td,{children:"A ref to the element that will be used to check if the click event is within the element's bounds."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"onClickOutsideHandler"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"() => void"})}),e.jsx(t.td,{children:"The callback function to call when a click outside the referenced element is detected."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"dependentRef"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(t.td,{children:"An optional additional ref to another element that should not trigger the outside click handler."})]})]})]}),`
`,e.jsx(t.h3,{id:"returns",children:"Returns"}),`
`,e.jsx(t.p,{children:e.jsx(t.code,{children:"void"})})]})}function p(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
