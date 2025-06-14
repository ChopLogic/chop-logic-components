import{j as e}from"./iframe-C3nnaSfA.js";import{useMDXComponents as t}from"./index-CLU9rmCe.js";import{M as r}from"./blocks-ByoFTpja.js";import{S as o}from"./use-container-dimensions.stories-DxZmHE9E.js";import"./index-DvEBFsL5.js";import"./index-CEakiLVs.js";import"./use-container-dimensions-D1IAgZBx.js";import"./Container.module-B-gpr46f.js";function s(i){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o,title:"Hooks/useContainerDimensions"}),`
`,e.jsx(n.h1,{id:"usecontainerdimensions",children:"useContainerDimensions"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useContainerDimensions"})," hook measures the dimensions (width and height) of a container element and returns these values as an object."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
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
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"ref"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element whose dimensions will be measured."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isVisible"})," (optional)"]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"Description: A flag to indicate whether the element is visible. If true, the dimensions will be measured."}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Dimensions"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"{ width: number; height: number }"})]}),`
`,e.jsx(n.li,{children:"Description: An object containing the current window width and height."}),`
`]})]})}function u(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{u as default};
