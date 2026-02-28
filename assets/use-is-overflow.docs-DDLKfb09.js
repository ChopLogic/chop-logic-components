import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as o}from"./index-BeVWJvHh.js";import{M as i}from"./blocks-B9t17XrR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useIsOverflow"}),`
`,e.jsx(n.h1,{id:"useisoverflow",children:"useIsOverflow"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useIsOverflow"})," hook detects when content overflows its container in either width or height dimension. Helps manage overflow scenarios by:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Detecting content overflow dynamically"}),`
`,e.jsx(n.li,{children:"Supporting both width and height dimensions"}),`
`,e.jsx(n.li,{children:"Providing reactive state for overflow conditions"}),`
`,e.jsx(n.li,{children:"Simplifying overflow-related UI logic"}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRef } from "react";
import { useIsOverflow } from "chop-logic-components";

const OverflowComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWidthOverflow = useIsOverflow({ ref: containerRef, dimension: "width" });

  return (
    <div ref={containerRef} className={isWidthOverflow ? "has-overflow" : ""}>
      {/* Long content that might overflow */}
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"ref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RefObject<HTMLElement>"})}),e.jsx(n.td,{children:"React ref object pointing to the element to monitor"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"dimension"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'width' | 'height'"})}),e.jsx(n.td,{children:"Which dimension to check for overflow"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isMounted"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Optional flag to trigger the hook on mount the parent component"})]})]})]}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.p,{children:["Returns a boolean state indicating whether overflow exists (",e.jsx(n.code,{children:"true"}),") or not (",e.jsx(n.code,{children:"false"}),")."]})]})}function x(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{x as default};
