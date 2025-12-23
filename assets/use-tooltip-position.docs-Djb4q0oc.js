var p=Object.defineProperty,h=Object.defineProperties;var a=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var r=(n,e,o)=>e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,s=(n,e)=>{for(var o in e||(e={}))x.call(e,o)&&r(n,o,e[o]);if(i)for(var o of i(e))j.call(e,o)&&r(n,o,e[o]);return n},l=(n,e)=>h(n,a(e));import{j as t}from"./iframe-DJejKD7f.js";import{useMDXComponents as c}from"./index-C1C3GIxM.js";import{M as m}from"./blocks-BfAV1-Im.js";import{S as f}from"./use-tooltip-position.stories-CmOCOAlT.js";import"./preload-helper-BDBacUwf.js";import"./index-0Be67YNH.js";import"./index-D5q0hnWu.js";import"./Container.module-3iQ-V5w_.js";import"./use-tooltip-position-s-QEDd_q.js";import"./use-container-dimensions-BqHroBwe.js";function d(n){const e=s(s({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},c()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:f,title:"Hooks/useTooltipPosition"}),`
`,t.jsx(e.h1,{id:"usetooltipposition",children:"useTooltipPosition"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useTooltipPosition"})," hook calculates and manages the position of a tooltip relative to a reference element."]}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
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
          style={{
            position: 'absolute',
            top: \`\${top}px\`,
            left: \`\${left}px\`,
            border: '1px solid black',
            padding: '10px',
          }}
        >
          Tooltip Content
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,t.jsx(e.h3,{id:"params",children:"Params"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Param"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"wrapperRef"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.RefObject<HTMLElement>"})}),t.jsx(e.td,{children:"A ref to the element that the tooltip is relative to."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"tooltipRef"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.RefObject<HTMLElement>"})}),t.jsx(e.td,{children:"A ref to the tooltip element."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"isOpened"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsx(e.td,{children:"A boolean indicating whether the tooltip is opened or not."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"spacing"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"number"})}),t.jsx(e.td,{children:"The spacing between the tooltip and the reference element. Default is 4px."})]})]})]}),`
`,t.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"position"})," ",t.jsx(e.code,{children:"{ top: number, left: number }"}),": Container coordinates in the viewport."]})]})}function P(n={}){const{wrapper:e}=s(s({},c()),n.components);return e?t.jsx(e,l(s({},n),{children:t.jsx(d,s({},n))})):d(n)}export{P as default};
