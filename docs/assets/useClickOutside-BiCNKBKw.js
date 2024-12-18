import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{ae as l,aj as o,ak as c}from"./index-CajF7TGH.js";import{U as r,D as d}from"./useClickOutside.stories-BHm9atBP.js";import"./index-qVDZzPEr.js";import"./iframe-_-QqgN4t.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./index-Bg4JDWSn.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r,title:"Hooks/useClickOutside"}),`
`,e.jsx(n.h1,{id:"useclickoutside",children:"useClickOutside"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useClickOutside"})," hook listens for click events outside a specified element and calls a handler function when such an event occurs."]}),`
`,e.jsx(o,{children:e.jsx(c,{of:d})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
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
`,e.jsx(n.h2,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ref"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element that will be used to check if the click event is within the element's bounds."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onClickOutsideHandler"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"() => void"})]}),`
`,e.jsx(n.li,{children:"Description: The callback function to call when a click outside the referenced element is detected."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"dependentRef"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: An optional additional ref to another element that should not trigger the outside click handler."}),`
`]}),`
`]}),`
`]})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};
