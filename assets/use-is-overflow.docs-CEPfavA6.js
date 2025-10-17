var h=Object.defineProperty,a=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var s=(t,e,r)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))j.call(e,r)&&s(t,r,e[r]);if(i)for(var r of i(e))f.call(e,r)&&s(t,r,e[r]);return t},d=(t,e)=>a(t,x(e));import{j as n}from"./iframe-BQgxzBO6.js";import{useMDXComponents as c}from"./index-BzM5vXoH.js";import{M as m}from"./blocks-DA9LG0YA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1-RhH5Y.js";import"./index-D-7EMssw.js";function l(t){const e=o(o({code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},c()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(m,{title:"Hooks/useIsOverflow"}),`
`,n.jsx(e.h1,{id:"useisoverflow",children:"useIsOverflow"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useIsOverflow"})," hook detects when content overflows its container in either width or height dimension. Helps manage overflow scenarios by:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Detecting content overflow dynamically"}),`
`,n.jsx(e.li,{children:"Supporting both width and height dimensions"}),`
`,n.jsx(e.li,{children:"Providing reactive state for overflow conditions"}),`
`,n.jsx(e.li,{children:"Simplifying overflow-related UI logic"}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useRef } from 'react';
import { useIsOverflow } from 'chop-logic-components';

const OverflowComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWidthOverflow = useIsOverflow({ref: containerRef, dimension: 'width'});

  return (
    <div ref={containerRef} className={isWidthOverflow ? 'has-overflow' : ''}>
      {/* Long content that might overflow */}
    </div>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Parameter"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"ref"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"RefObject<HTMLElement>"})}),n.jsx(e.td,{children:"React ref object pointing to the element to monitor"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"dimension"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"'width' | 'height'"})}),n.jsx(e.td,{children:"Which dimension to check for overflow"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"isMounted"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"Optional flag to trigger the hook on mount the parent component"})]})]})]}),`
`,n.jsx(e.h2,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.p,{children:["Returns a boolean state indicating whether overflow exists (",n.jsx(e.code,{children:"true"}),") or not (",n.jsx(e.code,{children:"false"}),")."]})]})}function R(t={}){const{wrapper:e}=o(o({},c()),t.components);return e?n.jsx(e,d(o({},t),{children:n.jsx(l,o({},t))})):l(t)}export{R as default};
