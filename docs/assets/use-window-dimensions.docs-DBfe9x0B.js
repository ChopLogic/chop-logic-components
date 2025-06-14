import{j as n}from"./iframe-C3nnaSfA.js";import{useMDXComponents as s}from"./index-CLU9rmCe.js";import{M as t}from"./blocks-ByoFTpja.js";import{S as r}from"./use-window-dimensions.stories-_UY4hlxM.js";import"./index-DvEBFsL5.js";import"./index-CEakiLVs.js";import"./Container.module-B-gpr46f.js";import"./use-window-dimensions-BO7pOUZS.js";function o(i){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:r,title:"Hooks/useWindowDimensions"}),`
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
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"None"}),`
`]}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"windowDimensions"})}),`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"{ width: number; height: number }"})]}),`
`,n.jsx(e.li,{children:"Description: An object containing the current window width and height."}),`
`]})]})}function u(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{u as default};
