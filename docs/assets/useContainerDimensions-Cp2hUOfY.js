import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as t}from"./index-DXRrZdNQ.js";import{M as r}from"./index-Hm0oqfFC.js";import{U as o}from"./useContainerDimensions.stories-BEB9lSxh.js";import"./index-B_nTefMF.js";import"./iframe-D7y9cp_r.js";import"./index-rrMuti2j.js";import"./index-DUhdrOyO.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./ExampleDivContainer.styled-CBfZBFON.js";import"./index-zvdF3J3f.js";import"./themes-BnN1RKU4.js";import"./index-DfsBjX5Y.js";function s(i){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:o,title:"Hooks/useContainerDimensions"}),`
`,n.jsx(e.h1,{id:"usecontainerdimensions",children:"useContainerDimensions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useContainerDimensions"})," hook measures the dimensions (width and height) of a container element and returns these values as an object."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { useContainerDimensions } from 'chop-logic-components';

const ExampleComponent = () => {
  const ref = useRef(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref}>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ref"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"React.RefObject<HTMLElement>"})]}),`
`,n.jsx(e.li,{children:"Description: A ref to the element whose dimensions will be measured."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"isVisible"})," (optional)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"Description: A flag to indicate whether the element is visible. If true, the dimensions will be measured."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dimensions"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"{ width: number; height: number }"})]}),`
`,n.jsx(e.li,{children:"Description: An object containing the current window width and height."}),`
`]}),`
`]}),`
`]})]})}function b(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{b as default};
