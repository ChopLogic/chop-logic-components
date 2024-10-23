import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as s,af as l,ag as r}from"./index---6MgSDT.js";import{U as p,D as c}from"./useTooltipPosition.stories-BgZcfw_W.js";import"./index-DJO9vBfz.js";import"./iframe-WobaMXE5.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./index-D0HHuAcc.js";import"./index-LBdVPU7m.js";import"./index-ZHRslnvw.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p,title:"Hooks/useTooltipPosition"}),`
`,e.jsx(n.h1,{id:"usetooltipposition",children:"useTooltipPosition"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useTooltipPosition"})," hook calculates and manages the position of a tooltip relative to a reference element."]}),`
`,e.jsx(l,{children:e.jsx(r,{of:c})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
import { useTooltipPosition } from 'your-library';

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
`,e.jsx(n.h2,{id:"params",children:"Params"}),`
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
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Description: A boolean indicating whether the tooltip is opened or not."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: number"}),`
`,e.jsx(n.li,{children:"Description: The spacing between the tooltip and the reference element. Default is 4px."}),`
`]}),`
`]}),`
`]})]})}function v(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{v as default};
