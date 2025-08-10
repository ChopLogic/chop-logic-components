import{j as e}from"./iframe-CpS3OA71.js";import{useMDXComponents as s}from"./index-CFFJi-da.js";import{M as i}from"./blocks-DsNOP7-Z.js";import{S as r}from"./use-tooltip-position.stories-D9-QRPKw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DI3QCFR2.js";import"./index-BvP6XlTP.js";import"./Container.module-B8PmPZGi.js";import"./use-tooltip-position-bGxlgnwH.js";import"./use-container-dimensions-Caekhqnj.js";import"./use-window-dimensions-BvAb_mA6.js";function o(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r,title:"Hooks/useTooltipPosition"}),`
`,e.jsx(t.h1,{id:"usetooltipposition",children:"useTooltipPosition"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useTooltipPosition"})," hook calculates and manages the position of a tooltip relative to a reference element."]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
import { useTooltipPosition } from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={wrapperRef}>
        Click me
      </button>
      {isOpened && (
        <div
          ref={tooltipRef}
          style={{ position: 'absolute', top: \`\${top}px\`, left: \`\${left}px\`, border: '1px solid black', padding: '10px' }}
        >
          Tooltip Content
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(t.h3,{id:"params",children:"Params"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Param"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"wrapperRef"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(t.td,{children:"A ref to the element that the tooltip is relative to."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tooltipRef"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(t.td,{children:"A ref to the tooltip element."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"isOpened"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"A boolean indicating whether the tooltip is opened or not."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"spacing"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The spacing between the tooltip and the reference element. Default is 4px."})]})]})]}),`
`,e.jsx(t.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"position"})," ",e.jsx(t.code,{children:"{ top: number, left: number }"}),": Container coordinates in the viewport."]})]})}function b(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{b as default};
