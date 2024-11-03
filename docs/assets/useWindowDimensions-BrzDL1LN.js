import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as t,af as r,ag as d}from"./index-U1HBKBoF.js";import{U as h,D as m}from"./useWindowDimensions.stories-B9E-DM4f.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./index-H_q29W0p.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:h,title:"Hooks/useWindowDimensions"}),`
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
