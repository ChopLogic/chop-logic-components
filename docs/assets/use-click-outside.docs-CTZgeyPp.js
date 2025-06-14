import{j as e}from"./iframe-C3nnaSfA.js";import{useMDXComponents as i}from"./index-CLU9rmCe.js";import{M as l}from"./blocks-ByoFTpja.js";import{S as c}from"./use-click-outside.stories-DqT9IjGB.js";import"./index-DvEBFsL5.js";import"./index-CEakiLVs.js";import"./Container.module-B-gpr46f.js";import"./use-click-outside-D7yaXWQH.js";function s(t){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c,title:"Hooks/useClickOutside"}),`
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
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"ref"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element that will be used to check if the click event is within the element's bounds."}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"onClickOutsideHandler"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"() => void"})]}),`
`,e.jsx(n.li,{children:"Description: The callback function to call when a click outside the referenced element is detected."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"dependentRef"})," (optional)"]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})]}),`
`,e.jsx(n.li,{children:"Description: An optional additional ref to another element that should not trigger the outside click handler."}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"void"})}),`
`]})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
