import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as o}from"./index-DOvxcyG1.js";import{ae as s}from"./index-J0Qo51pB.js";import{U as r}from"./useTooltipPosition.stories-CZpHbgCK.js";import"./index-qVDZzPEr.js";import"./iframe-B7E-5xUH.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./ExampleDivContainer.styled-Dl50VLFd.js";import"./index-BT98D5zi.js";import"./themes-BnN1RKU4.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,title:"Hooks/useTooltipPosition"}),`
`,e.jsx(n.h1,{id:"usetooltipposition",children:"useTooltipPosition"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useTooltipPosition"})," hook calculates and manages the position of a tooltip relative to a reference element."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
import { useTooltipPosition } from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
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
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"wrapperRef"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLSpanElement | HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element that the tooltip is relative to."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"tooltipRef"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLSpanElement | HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the tooltip element."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isOpened"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"Description: A boolean indicating whether the tooltip is opened or not."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"spacing"})," (optional)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.li,{children:"Description: The spacing between the tooltip and the reference element. Default is 4px."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"position"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"{ top: number, left: number }"})]}),`
`,e.jsx(n.li,{children:"Description: Container coordinates in the viewport."}),`
`]}),`
`]}),`
`]})]})}function M(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{M as default};
