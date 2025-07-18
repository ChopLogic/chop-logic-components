import{j as e}from"./iframe-CrArNGRw.js";import{useMDXComponents as i}from"./index-BSFtI4hN.js";import{M as r}from"./blocks-Bk_K6NSa.js";import{S as d}from"./use-click-outside.stories-DdEOfXcF.js";import"./index-B4hisE-5.js";import"./index-BU1teVQ0.js";import"./Container.module-B8PmPZGi.js";import"./use-click-outside-BTqyhR4p.js";function s(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,title:"Hooks/useClickOutside"}),`
`,e.jsx(n.h1,{id:"useclickoutside",children:"useClickOutside"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useClickOutside"})," hook listens for click events outside a specified element and calls a handler function when such an event occurs."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
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
`,e.jsx(n.h3,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Param"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"ref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(n.td,{children:"A ref to the element that will be used to check if the click event is within the element's bounds."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClickOutsideHandler"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{children:"The callback function to call when a click outside the referenced element is detected."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dependentRef"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(n.td,{children:"An optional additional ref to another element that should not trigger the outside click handler."})]})]})]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
