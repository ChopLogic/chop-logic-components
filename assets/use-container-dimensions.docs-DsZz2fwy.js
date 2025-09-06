import{j as e}from"./iframe-CcStb-xO.js";import{useMDXComponents as i}from"./index-DRR5r8Q4.js";import{M as r}from"./blocks-B97lg12T.js";import{S as o}from"./use-container-dimensions.stories-DkSEwhHi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Container.module-DIM0iUPi.js";import"./use-container-dimensions-CsRqbGnA.js";function s(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o,title:"Hooks/useContainerDimensions"}),`
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
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Param"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"ref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(n.td,{children:"A ref to the element whose dimensions will be measured."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isVisible"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"A flag to indicate whether the element is visible. If true, the dimensions will be measured."})]})]})]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dimensions"})," ",e.jsx(n.code,{children:"{ width: number; height: number }"}),": An object containing the current width and height of the element."]})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
