import{j as n}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as s}from"./index-DOvxcyG1.js";import{ae as t}from"./index-Pu5YtS6a.js";import{U as r}from"./useWindowDimensions.stories-jUw8gClG.js";import"./index-qVDZzPEr.js";import"./iframe-1_L8YV2_.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./ExampleDivContainer.styled-Df2QS2yF.js";import"./index-BgqNcK8U.js";import"./index-DOKHOwXh.js";function o(e){const i={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:r,title:"Hooks/useWindowDimensions"}),`
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
