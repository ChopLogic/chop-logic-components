import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as o}from"./index-B2uT0Rcg.js";import{M as i}from"./blocks-CLsIill3.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useIsOverflow"}),`
`,e.jsx(n.h1,{id:"useisoverflow",children:"useIsOverflow"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useIsOverflow"})," hook detects when content overflows its container in either width or height dimension. Helps manage overflow scenarios by:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Detecting content overflow dynamically"}),`
`,e.jsx(n.li,{children:"Supporting both width and height dimensions"}),`
`,e.jsx(n.li,{children:"Providing reactive state for overflow conditions"}),`
`,e.jsx(n.li,{children:"Simplifying overflow-related UI logic"}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRef } from 'react';
import { useIsOverflow } from 'chop-logic-components';

const OverflowComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWidthOverflow = useIsOverflow(containerRef, 'width');

  return (
    <div ref={containerRef} className={isWidthOverflow ? 'has-overflow' : ''}>
      {/* Long content that might overflow */}
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"ref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RefObject<HTMLElement>"})}),e.jsx(n.td,{children:"React ref object pointing to the element to monitor"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dimension"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'width' | 'height'"})}),e.jsx(n.td,{children:"Which dimension to check for overflow"})]})]})]}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.p,{children:["Returns a boolean state indicating whether overflow exists (",e.jsx(n.code,{children:"true"}),") or not (",e.jsx(n.code,{children:"false"}),")."]})]})}function a(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default};
