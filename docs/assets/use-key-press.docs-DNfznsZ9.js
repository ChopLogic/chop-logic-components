import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as r}from"./index-B2uT0Rcg.js";import{M as d}from"./blocks-CLsIill3.js";import{S as o}from"./use-key-press.stories-CJ2AFdOh.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./use-key-press-Dj0MNI-N.js";import"./Container.module-B8PmPZGi.js";function t(s){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,title:"Hooks/useKeyPress"}),`
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
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Param"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"ref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(n.td,{children:"A ref to the element that will be used to check if the key press event is within the element's bounds."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"keyCode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The key code of the key to listen for."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onKeyPress"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{children:"The callback function to call when the key is pressed."})]})]})]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
