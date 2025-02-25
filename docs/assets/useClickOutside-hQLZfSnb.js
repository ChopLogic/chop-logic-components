import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CIPZa9B8.js";import{M as l}from"./index-Cjue1fAi.js";import{U as o}from"./useClickOutside.stories-Bcz-CSSQ.js";import"./index-Ban83id2.js";import"./iframe-C0iaFHHi.js";import"./index-CIoWShqO.js";import"./index-7LVPDKFp.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ExampleDivContainer.styled-HQ9poNT0.js";import"./index-Dd9y7SHD.js";import"./themes-BnN1RKU4.js";import"./index-arilMgzD.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,title:"Hooks/useClickOutside"}),`
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
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ref"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element that will be used to check if the click event is within the element's bounds."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onClickOutsideHandler"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"() => void"})]}),`
`,e.jsx(n.li,{children:"Description: The callback function to call when a click outside the referenced element is detected."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"dependentRef"})," (optional)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})]}),`
`,e.jsx(n.li,{children:"Description: An optional additional ref to another element that should not trigger the outside click handler."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"void"})}),`
`]})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{g as default};
