import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CB3_FCD4.js";import{M as t}from"./index-D130hB5o.js";import{U as r}from"./useWindowDimensions.stories-DoNvoDkM.js";import"./index-MPVjHJeJ.js";import"./iframe-7UPhmzZr.js";import"./index-BRyrJLGJ.js";import"./index-Bzm33-PM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ExampleDivContainer.styled-D0iJ0lP_.js";import"./index-zGLxtP0c.js";import"./themes-BnN1RKU4.js";import"./index-BtTB3eTL.js";function o(e){const i={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:r,title:"Hooks/useWindowDimensions"}),`
`,n.jsx(i.h1,{id:"usewindowdimensions",children:"useWindowDimensions"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"useWindowDimensions"})," hook tracks and provides the current window dimensions."]}),`
`,n.jsx(i.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import React from 'react';
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
`,n.jsx(i.h3,{id:"params",children:"Params"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"None"}),`
`]}),`
`,n.jsx(i.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"windowDimensions"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Type: ",n.jsx(i.code,{children:"{ width: number; height: number }"})]}),`
`,n.jsx(i.li,{children:"Description: An object containing the current window width and height."}),`
`]}),`
`]}),`
`]})]})}function W(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(o,{...e})}):o(e)}export{W as default};
