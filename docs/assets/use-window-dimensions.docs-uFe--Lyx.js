import{j as n}from"./iframe--IBuYMIm.js";import{useMDXComponents as s}from"./index-B2uT0Rcg.js";import{M as t}from"./blocks-CLsIill3.js";import{S as r}from"./use-window-dimensions.stories-CnIAxPL-.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Container.module-B8PmPZGi.js";import"./use-window-dimensions-CfT0BYEv.js";function i(o){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:r,title:"Hooks/useWindowDimensions"}),`
`,n.jsx(e.h1,{id:"usewindowdimensions",children:"useWindowDimensions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useWindowDimensions"})," hook tracks and provides the current window dimensions."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';
import { useWindowDimensions } from 'chop-logic-components';

const ExampleComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Window width: {width}px;</p>
      <p>Window height: {height}px;</p>
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsx(e.p,{children:"None."}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"windowDimensions"})," ",n.jsx(e.code,{children:"{ width: number; height: number }"}),": An object containing the current window width and height."]})]})}function l(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{l as default};
