import{j as n}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as s}from"./index-DOvxcyG1.js";import{ae as t,aj as r,ak as d}from"./index-CajF7TGH.js";import{U as h,D as m}from"./useWindowDimensions.stories-CH38jwU7.js";import"./index-qVDZzPEr.js";import"./iframe-_-QqgN4t.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./index-DOKHOwXh.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:h,title:"Hooks/useWindowDimensions"}),`
`,n.jsx(e.h1,{id:"usewindowdimensions",children:"useWindowDimensions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useWindowDimensions"})," hook tracks and provides the current window dimensions."]}),`
`,n.jsx(r,{children:n.jsx(d,{of:m})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';
import { useWindowDimensions } from 'your-library';

const ExampleComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,n.jsx(e.h2,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"windowDimensions"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"{ width: number; height: number }"})]}),`
`,n.jsx(e.li,{children:"Description: An object containing the current window width and height."}),`
`]}),`
`]}),`
`]})]})}function C(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{C as default};
