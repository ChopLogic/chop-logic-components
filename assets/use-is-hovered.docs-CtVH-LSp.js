import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as s}from"./index-BeVWJvHh.js";import{M as i}from"./blocks-B9t17XrR.js";import{S as o}from"./use-is-hovered.stories-DDVBVWps.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";/* empty css                  */import"./Checkbox-CLMDnwuu.js";import"./Label-B0vz0m2R.js";import"./Icon-DTjVTp_9.js";import"./get-class-name-BY88G7uf.js";import"./icon-name-DofyCo9k.js";import"./use-element-ids--HzG7Pmw.js";import"./use-reset-form-input-Dmd2Mx0b.js";import"./use-is-hovered-BRGXc0aa.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o,title:"Hooks/useIsHovered"}),`
`,e.jsx(n.h1,{id:"useishovered",children:"useIsHovered"}),`
`,e.jsx(n.p,{children:"A React hook that tracks whether an element is being hovered over. This hook simplifies hover state management by attaching mouse enter and leave event listeners to a referenced element."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simple Hover Tracking"}),": Easily determine if an element is hovered"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ref-based"}),": Works with React refs for maximum flexibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Conditional Activation"}),": Optional ",e.jsx(n.code,{children:"isMounted"})," parameter to control tracking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Cleanup"}),": Proper cleanup of event listeners on unmount"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useIsHovered } from "chop-logic-components";
import { useRef } from "react";

const HoverableComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isHovered = useIsHovered(elementRef);

  return (
    <div
      ref={elementRef}
      style={{
        padding: "1rem",
        background: isHovered ? "#e8f5e9" : "#fff",
        transition: "background 0.2s",
      }}
    >
      {isHovered ? "You are hovering over me!" : "Hover over me"}
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"ref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"RefObject<HTMLElement>"})}),e.jsx(n.td,{children:"React ref pointing to the element to track"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isMounted"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"boolean"})," (optional)"]}),e.jsxs(n.td,{children:["Enable/disable hover tracking (default: ",e.jsx(n.code,{children:"true"}),") for elements like popups or modal windows"]})]})]})]}),`
`,e.jsx(n.h2,{id:"return-value",children:"Return Value"}),`
`,e.jsx(n.p,{children:"Returns a boolean indicating whether the element is currently hovered."}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactive Buttons"}),": Change appearance on hover"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dropdown Triggers"}),": Show/hide content on hover"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UI Feedback"}),": Display additional information on hover"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Conditional Styling"}),": Apply styles based on hover state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tooltip Triggers"}),": Show tooltips when hovering"]}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always attach the ref to the element you want to track"}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"isMounted"})," parameter to conditionally disable tracking if needed"]}),`
`,e.jsx(n.li,{children:"Combine with CSS transitions for smooth hover effects"}),`
`,e.jsxs(n.li,{children:["Consider using CSS ",e.jsx(n.code,{children:":hover"})," pseudo-class for simple styling; use this hook for complex interactions"]}),`
`]})]})}function C(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{C as default};
