import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CIPZa9B8.js";import{M as t}from"./index-Cjue1fAi.js";import{U as o}from"./useKeyPress.stories-Cn9O5vBC.js";import"./index-Ban83id2.js";import"./iframe-C0iaFHHi.js";import"./index-CIoWShqO.js";import"./index-7LVPDKFp.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ExampleDivContainer.styled-HQ9poNT0.js";import"./index-Dd9y7SHD.js";import"./themes-BnN1RKU4.js";import"./index-gLN7dSb1.js";function r(s){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o,title:"Hooks/useKeyPress"}),`
`,e.jsx(n.h1,{id:"usekeypress",children:"useKeyPress"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useKeyPress"})," hook listens for a specific key press event and calls a callback function when the key is pressed."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { useKeyPress } from 'chop-logic-components';

const ExampleComponent = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    console.log('Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <div ref={ref} tabIndex={0}>
      Press "Enter" key
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ref"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element that will be used to check if the key press event is within the element's bounds."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"keyCode"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.li,{children:"Description: The key code of the key to listen for."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onKeyPress"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"() => void"})]}),`
`,e.jsx(n.li,{children:"Description: The callback function to call when the key is pressed."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"void"})}),`
`]})]})}function P(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{P as default};
